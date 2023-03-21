import Inputcomponent from '../components/Inputcomponent'
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';


function Addblog() {
  
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
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Blog Post</h2>
            <div className='px-2 py-2 w-[80%] '>
                <form>
                  <label for="Select category" className='my-1 font-medium'>Tittle</label>
                  <Inputcomponent type="text" id="tittle" label="Blog Tittle"/>
                  <label for="Select category" className='my-1 font-medium'>Select Blog Category</label>
                  <select id='' className='w-full p-2 rounded-md mt-1'>
                    <option>Select the blog category1</option>
                    <option>Select the blog category2</option>
                    <option>Select the blog category3</option>
                  </select>
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