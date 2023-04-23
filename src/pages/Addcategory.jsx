import Inputcomponent from '../components/Inputcomponent'
import React, {useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FetchaprodCategory, addProdCategory, resetState, updateProdCategory } from '../features/products/productCategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Addcategory() {
   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Product category  is mandatory"),
 });

 const dispatch = useDispatch()
 const navigate = useNavigate()

 const location = useLocation();
 const getprodcatid = location.pathname.split("/")[3]


 const newProductCategory = useSelector((state)=> state.prodCategory)  // Toast related
 const {isSucess, isError, isLoading, newproductCategory, categoryName, updatedprodcategory} = newProductCategory //Toast related

 useEffect(()=> {
  if(getprodcatid !== undefined){
    dispatch(FetchaprodCategory(getprodcatid))
  } else {
    dispatch(resetState())
  }
}, [getprodcatid])

  // React Toast section 
  useEffect(()=> {
    if(isSucess && newproductCategory ) {
      toast.success('Product Category added successfully') 
    } 
    if(updatedprodcategory && isSucess ) {
      toast.success('Product Category updated successfully')
    }
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])

 const formik = useFormik({
  enableReinitialize: true,
  initialValues: {
    tittle: categoryName || "" ,
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(getprodcatid !== undefined){
      dispatch(updateProdCategory({id: getprodcatid, data: values}))
      setTimeout(()=> {
        navigate("/admin/category")
        dispatch(resetState())
      }, 1000)
    } else {
      dispatch(addProdCategory(values));
      formik.handleReset();
      setTimeout(() => {
        dispatch(resetState())
      }, 2000)
    }
  },
});
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>{getprodcatid ?  "Edit"  : "Add New"}  Category</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Category Tittile</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Type Product category"
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
                   {getprodcatid ?  "Update"  : "Add New"} Category  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addcategory