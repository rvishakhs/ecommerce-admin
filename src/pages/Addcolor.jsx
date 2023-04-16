import Inputcomponent from '../components/Inputcomponent'
import React, {useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { addProdCategory } from '../features/products/productCategorySlice';
import { addcolor } from '../features/colors/colorSlice';

function Addcolor() {
   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Enter color name"),
 });

 const dispatch = useDispatch()
 const addedcolor = useSelector((state)=> state.colors)  // Toast related
 const {isSucess, isError, isLoading, newcolor } = addedcolor  //Toast related

  // React Toast section 
  useEffect(()=> {
    if(isSucess && newcolor ) {
      toast.success('color added successfully') 
    } 
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])

 const formik = useFormik({
  initialValues: {
    tittle: '',
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    dispatch(addcolor(values));
    formik.handleReset();
  },
});
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Color</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Color</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Type color name"
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
                    className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'
                  >
                    Add Color
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addcolor