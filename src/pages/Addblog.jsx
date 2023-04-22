import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { getblogs } from '../features/blogs/blogSlice';
import { getblogCategory } from '../features/blogs/blogCategorySlice';


function Addblog() {

  const dispatch = useDispatch()
  const blogstate = useSelector((state) => state.blogCategory.blogcategory)

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
                <form>
                  <label for="Select category" className='my-1 font-medium'>Tittle</label>
                  <Inputcomponent type="text" id="tittle" label="Blog Tittle"/>
                  <label for="Select category" className='my-1 font-medium'>Select Blog Category</label>
                  <select id='' className='w-full p-2 rounded-md mt-1'>
                    {blogstate.map((blogCat, index) => {
                      return (
                        <option key={index}>{blogCat.tittle}</option>
                      )
                    })}
                  </select>
                  <label for="Select category" className='my-2 font-medium'>Upload Image</label>
                 
                  <label for="Select category" className='mt-2 font-medium'>Blog Content area</label>
                  <ReactQuill 
                    theme="snow" 
                    value={value} 
                    onChange={setValue} 
                    
                    className="bg-white p-2 mt-1 rounded-lg"
                  />

                        
                  <button className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
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