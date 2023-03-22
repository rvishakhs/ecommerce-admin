import Inputcomponent from '../components/Inputcomponent'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { InputNumber } from 'antd';


function Addproduct() {
  
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };
  const { Dragger } = Upload;
  const [value, setValue] = useState('');
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add Product</h2>
            <div className='px-3 py-2 '>
                <form>
                  <label for="Select category" className='my-1 font-medium'>Product Name</label>
                  <Inputcomponent type="text" id="tittle" label="Tittle"/>
                  <label for="Select category" className='mt-3 font-medium'>Product Description</label>
                  <ReactQuill 
                    theme="snow" 
                    value={value} 
                    onChange={setValue} 
                    
                    className="bg-white p-2 mt-1 rounded-lg"
                  />
                  <div className='flex flex-row mt-2 items-center justify-between space-x-2'>
                      {/* Brand Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Brand</label>
                        <select id='' className='w-full p-2 rounded-md mt-1'>
                          <option>Apple</option>
                          <option>Samsung</option>
                          <option>Sony</option>
                        </select>
                      </div>
                      {/* Category Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Category</label>
                        <select id='' className='w-full p-2 rounded-md mt-1'>
                          <option>Category 1</option>
                          <option>Category 2</option>
                          <option>Category 3</option>
                        </select>
                      </div>

                      {/* Color Section  */}
                      <div className='flex flex-col w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Color</label>
                        <select id='' className='w-full p-2 rounded-md mt-1'>
                          <option>Red</option>
                          <option>Yellow</option>
                          <option>Green</option>
                          <option>Purple</option>
                          <option>Blue</option>
                        </select>
                      </div>
                     

                  </div>
                  
                  <div className='flex flex-row mt-2 space-x-4'>
                    {/* Price */}
                     <div className='flex flex-col w-[10ŸŸ~%] '>
                        <label for="Select category" className='my-1 font-medium'> Price</label>
                        <InputNumber min={1} max={99999} defaultValue={1} onChange="" /> 
                      </div>
                      {/* Quantity */}
                      <div className='flex flex-col '>
                        <label for="Select category" className='my-1 font-medium'> Quantity</label>
                        <InputNumber min={1} max={20} defaultValue={1} onChange="" /> 
                      </div>

                  </div>

              
                  <label for="Select category" className='my-2 font-medium'>Upload Image</label>
                  <Dragger  {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                      banned files.
                    </p>
                </Dragger>


                        
                  <button className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Add Product  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addproduct