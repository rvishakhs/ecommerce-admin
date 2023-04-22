import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { getblogs } from '../features/blogs/blogSlice';
import { getblogCategory } from '../features/blogs/blogCategorySlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Addblog() {

  const dispatch = useDispatch()
  const blogstate = useSelector((state) => state.blogCategory.blogcategory)

    // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Please enter tittle for the Blog"),
  category : Yup.string().required("Please Select one category"),
  description : Yup.string().required("Please enter blog description "),

 });

 // Implymenting formik
const formik = useFormik({
  initialValues: {
    tittle: "",
    category : "",
    description : '',
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    alert(JSON.stringify(values))
    formik.handleReset();
  },
});

  useEffect(()=> {
    dispatch(getblogCategory())
  }, [])

  const [value, setValue] = useState("")
  
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Blog Post</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  {/* Tittle section */}
                  <label for="Select category" className='my-1 font-medium'>Tittle</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Blog Tittle"
                    val={formik.values.tittle} 
                    onCH={formik.handleChange("tittle")}
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.tittle && formik.errors.tittle ? (
                          <div>{formik.errors.tittle}</div>
                      ) : null}
                  </div>
                        {/* Blog Category Selection */}
                  <label for="Select category" className='my-1 font-medium'>Select Blog Category</label>
                  <select 
                    id='' 
                    name='category' 
                    className='w-full p-2 rounded-md mt-1'
                    value={formik.values.category}
                    onChange={formik.handleChange("category")}
                    onBlur={formik.handleChange("category")} 
                  >
                    <option defaultChecked disabled >{" "}</option>
                    {blogstate.map((blogCat, index) => {
                      return (
                        <option key={index}>{blogCat.tittle}</option>
                      )
                    })}
                  </select>
                  <div className='text-sm text-red-400 pl-2'>
                        {formik.touched.category && formik.errors.category ? (
                            <div>{formik.errors.category}</div>
                        ) : null }
                        </div>

                  {/* Image Uploading */}
                  <label for="Select category" className='my-2 font-medium'>Upload Image</label>
                 
                 {/* Description Part */}
                  <label for="Select category" className='mt-2 font-medium'>Blog Content area</label>
                  
                  <ReactQuill 
                    theme="snow" 
                    type = "text"       
                    id='description'
                    name ="description"
                    value={formik.values.description} 
                    onChange={formik.handleChange("description")} 
                    onBlur={formik.handleChange("description")}
                    className="bg-white p-2 mt-1 rounded-lg"
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.description ? (
                          <div>{formik.errors.description}</div>
                      ) : null}
                  </div>

                  {/* Submit Button */}
                  <button 
                    type='submit'   
                    className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Post Blog  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addblog