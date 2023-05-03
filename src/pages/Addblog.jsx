import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { getblogCategory } from '../features/blogs/blogCategorySlice';
import { createblog, fetchBlog, resetState, updateBlog} from "../features/blogs/blogSlice";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { deleteImage, imageUpload, resetimgState } from '../features/uploadImages/uploadimageSlice';
import Dropzone from 'react-dropzone'
import { toast } from 'react-toastify';
import {IoMdCloseCircleOutline} from "react-icons/io"
import { useLocation, useNavigate } from 'react-router-dom';


function Addblog() {

  const dispatch = useDispatch()
  const location = useLocation() 
  const navigate = useNavigate()
  const images = [];
  const oldImages = []
  const [imgdlt, setimgdlt] = useState(false)
  const blogstate = useSelector((state) => state.blogCategory.blogcategory)
  const imageState = useSelector((state)=> state.imageupload.images)
  const blog = useSelector((state) => state.blogs)
  const {isSucess, isError, isLoading, createdblog, blogData, blogImage } = blog

  const blogId = location.pathname.split('/')[3]

  useEffect(() => {
    if(blogId !== undefined) {
      dispatch(fetchBlog(blogId)) 
      images.push(blogImage)
    } else {
      dispatch(resetState())
    }
  }, [blogId])

    // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Please enter tittle for the Blog"),
  category : Yup.string().required("Please Select one category"),
  description : Yup.string().required("Please enter blog description "),
  image : Yup.array()
 });

 // Implymenting formik
const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle: blogData?.tittle || "",
    category : blogData?.category || "",
    description : blogData?.description || '',
    image : []
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(blogId !== undefined) {
      alert(JSON.stringify(values))
      dispatch(updateBlog({id: blogId, data: values}))
      setTimeout(()=> {
        navigate("/admin/blogs")
        dispatch(resetState())
        dispatch(resetimgState())
      }, 100)
    } else {
      alert(JSON.stringify(values))
      dispatch(createblog(values))
      formik.handleReset();
      setTimeout(() => {
        dispatch(resetState())
        dispatch(resetimgState())
        window.location.reload()
      },250)
    }
  },
});

// React Toast section 
useEffect(()=> {
  if(isSucess && createdblog ) {
    toast.success('Blog created successfully') 
  } 
  if(isError ) {
    toast.error('Oops !! Something went wrong');
  }
}, [isSucess, isError, isLoading])


  useEffect(()=> {
    dispatch(getblogCategory())
  }, [])


  // Adding images from redux for passing in to formik 
  imageState.forEach((image) => {
     images.push({
      public_id : image.public_id,
      url : image.url
     }) 
  });

  blog?.blogData?.image.forEach((image) => {
    images.push({
      public_id : image.public_id,
      url : image.url
     }) 
  })

    // For color change and image upload
  useEffect(()=> {
    formik.values.image = images 
  }, [images])
  
  if(imgdlt !== false) {
    formik.values.image = []
  }
  const handleClick = (data) => {
    dispatch(deleteImage(data))
    setimgdlt(true)
  }

    
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
                  <div className='w-full p-5 flex text-center justify-center border border-gray-300 bg-white'>
                  <Dropzone onDrop={acceptedFiles => dispatch(imageUpload(acceptedFiles))}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                          </div>
                        </section>
                      )}
                    </Dropzone>
                  </div>
                 {/* Image displaying */}
                 <div className='p-2 relative mt-2 flex flex-wrap gap-2'>
                    {images?.map((image, index) => {
                      return (
                        <div key={index} className='relative w-[150px] group h-[150px] border border-gray-100 rounded-md'>
                          <img src={image.url} className='object-contain  w-[150px] h-[150px]' /> 
                          <button 
                            type='button' 
                            onClick={() => handleClick(image.public_id)}
                            className='absolute top-1 right-1'
                          >
                            <IoMdCloseCircleOutline className=' w-5 h-5 group-hover:opacity-100 hover:scale-105 opacity-0 group '/>
                          </button>
                        </div>
                      )
                    }) }

                  </div>
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