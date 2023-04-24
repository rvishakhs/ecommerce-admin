import Inputcomponent from '../components/Inputcomponent'
import React, {useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { createNewCategory, fetchBlogCategory, resetState, updateBlogCategory } from '../features/blogs/blogCategorySlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Addblogcategory() {

   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Please Enter a blog Category"),
 });

 const dispatch = useDispatch()
 const location = useLocation()
 const navigate = useNavigate()

 const getblogcategoryid = location.pathname.split('/')[3]

 useEffect(()=> {
  if(getblogcategoryid !== undefined) {
    dispatch(fetchBlogCategory(getblogcategoryid))
  } else {
    dispatch(resetState())
  }
 }, [])



 const blogcategories = useSelector((state)=> state.blogCategory)  // Toast related
 const {isSucess, isError, isLoading, newblogcategory, updatedBlogCategory, blogcategoryName } = blogcategories  //Toast related

  // React Toast section 
  useEffect(()=> {
    if(isSucess && newblogcategory ) {
      toast.success('Blog Category added successfully') 
    } 
    if(updatedBlogCategory && isSucess){
      toast.success('Blog category Updated Successfully')
    }
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])

 const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle: blogcategoryName || '',
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(getblogcategoryid !== undefined) {
      dispatch(updateBlogCategory({id: getblogcategoryid , Data : values}))
      setTimeout(()=> {
        navigate("/admin/blogcategories")
        dispatch(resetState())
      }, 100)

    } else {
      dispatch(createNewCategory(values));
    formik.handleReset();
    setTimeout(()=> {
      dispatch(resetState())
    }, 250)
    }
  },
});

  

  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>{getblogcategoryid ? "Edit ": "Add New"} Blog Category</h2>
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
                    {getblogcategoryid ? "Update ": "Add New"} Category  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addblogcategory