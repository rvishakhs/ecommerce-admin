import Inputcomponent from '../components/Inputcomponent'
import React, {useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { createNewCategory } from '../features/blogs/blogCategorySlice';

function Addblogcategory() {

   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Please Enter a blog Category"),
 });

 const dispatch = useDispatch()
 const blogcategories = useSelector((state)=> state.blogCategory)  // Toast related
 const {isSucess, isError, isLoading, newblogcategory } = blogcategories  //Toast related

  // React Toast section 
  useEffect(()=> {
    if(isSucess && newblogcategory ) {
      toast.success('Blog Category added successfully') 
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
    dispatch(createNewCategory(values));
    formik.handleReset();

  },
});

  

  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Blog Category</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Category Tittile</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Type the category"
                    val={formik.values.tittle} 
                    onCH={formik.handleChange("tittle")}
                  />
                  {/* Error Displaying */}
                   <div className='text-sm text-red-400'>
                      {formik.touched.tittle && formik.errors.tittle ? (
                          <div>{formik.errors.tittle}</div>
                      ) :null}
                  </div>      
                  <button 
                    type='submit'
                    className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Add Category  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addblogcategory