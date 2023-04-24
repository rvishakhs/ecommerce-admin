import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { addBrand, getabrand, resetState, updatebrand } from '../features/brand/brandSlice';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';


function Addbrands() {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Brand tittle is required"),
 });
    
 //  Toast notification
  const newBrand = useSelector((state)=> state.brand)  // Toast related
  const {isSucess, isError, isLoading, createdBrand, brandName, updatedBrand} = newBrand //Toast related
//  this section is for updating the brand 
 const location = useLocation();
 const getbrandid = location.pathname.split("/")[3]

 useEffect(()=> {
    if(getbrandid !== undefined){
      dispatch(getabrand(getbrandid))
    } else {
      dispatch(resetState())
    }
 }, [getbrandid])

 // React Toast section 
 useEffect(()=> {
   if(isSucess && createdBrand ) {
     toast.success('Brand added successfully') 
   } 
   if( updatedBrand && isSucess) {
     toast.success('Brand updated successfully') 
   }
   if(isError ) {
     toast.error('Oops !! Something went wrong');
   }
 }, [isSucess, isError, isLoading])

 // Implymenting formik
const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle: brandName || '',

  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(getbrandid !== undefined) { 
      dispatch(updatebrand({id: getbrandid, branddata : values}))
      setTimeout(()=> {
        navigate("/admin/brands")
        dispatch(resetState())
      }, 100)
       
    } else {
      dispatch(addBrand(values));
      formik.handleReset();
      setTimeout(()=> {
        dispatch(resetState())
      }, 200)
    }
  },
});


  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>{getbrandid !== undefined ? "Edit " : "Add New"} Brand</h2>
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
                    {getbrandid !== undefined ? "Update " : "Add "}Brand
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addbrands