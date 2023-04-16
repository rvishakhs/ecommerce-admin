import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addBrand } from '../features/brand/brandSlice';
import { toast } from 'react-toastify';


function Addbrands() {
  
  // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Brand tittle is required"),
 });
    
 const dispatch = useDispatch()
 const newBrand = useSelector((state)=> state.brand)  // Toast related
 const {isSucess, isError, isLoading, createdBrand} = newBrand //Toast related

 console.log(newBrand);
 // React Toast section 
 useEffect(()=> {
   if(isSucess && createdBrand ) {
     toast.success('Brand added successfully') 
   } 
   if(isError ) {
     toast.error('Oops !! Something went wrong');
   }
 }, [isSucess, isError, isLoading])

 // Implymenting formik
const formik = useFormik({
  initialValues: {
    tittle: '',

  },
  validationSchema : schema,
  onSubmit: (values) => { 
    dispatch(addBrand(values));
    formik.handleReset();
  },
});


  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Brand</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Brand Name</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Type brand name"
                    val={formik.values.tittle} 
                    onCH={formik.handleChange("tittle")}
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.tittle && formik.errors.tittle ? (
                          <div>{formik.errors.tittle}</div>
                      ) : null}
                  </div>
                        
                  <button 
                  type='submit'   
                  className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Add Brand
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addbrands