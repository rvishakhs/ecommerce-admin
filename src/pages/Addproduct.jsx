import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { InputNumber } from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { login } from '../features/auth/authSlice';
import { getbrands } from '../features/brand/brandSlice';
import { getProdCategory } from '../features/products/productCategorySlice';
import { getcolors } from '../features/colors/colorSlice';




function Addproduct() {

   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Please enter tittle for the product"),
  description : Yup.string().required("Please enter product description "),
  price : Yup.number().required("Please enter product price "),
});

// Implymenting formik
const formik = useFormik({
  initialValues: {
    tittle: '',
    description : '',
    price : 1,
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    console.log(values); 
    alert(JSON.stringify(values, null, 2));
  },
});
 
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getbrands())
    dispatch(getProdCategory())
    dispatch(getcolors())
  }, [])

  const brandState = useSelector((state)=> state.brand.brand)
  const productCategoryState = useSelector((state)=> state.prodCategory.productcategory)
  const colorstate = useSelector((state) => state.colors.color)

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
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add Product</h2>
            <div className='px-3 py-2 '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Product Name</label>
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    label="Tittle"
                    val={formik.values.tittle} 
                    onCH={formik.handleChange("tittle")}
                  />
                   <div className='text-sm text-red-400'>
                      {formik.touched.tittle && formik.errors.tittle ? (
                          <div>{formik.errors.tittle}</div>
                      ) : null}
                  </div>
                  <label for="Select category" className='mt-3 font-medium'>Product Description</label>
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
                      {formik.touched.description && formik.errors.description ? (
                          <div>{formik.errors.description}</div>
                      ) : null}
                  </div>
                  <div className='flex flex-row mt-2 items-center justify-between space-x-2'>
                      {/* Brand Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Brand</label>
                        <select  className='w-full p-2 rounded-md mt-1'>
                        <option defaultChecked  >Please Select a Brand</option>
                        {brandState.map((brand, index )=> {
                          return (
                            <option key={index}>{brand.tittle}</option>
                            )
                          })}
                        </select>

                      </div>
                      {/* Category Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Category</label>
                        <select id='' className='w-full p-2 rounded-md mt-1'>
                            <option defaultChecked  >Please Select one Category</option>
                          {productCategoryState.map((product, index) => {
                            return (
                              <>
                                <option key={index} >{product.tittle}</option>
                              </>
                            )
                          })}
                        </select>
                      </div>

                      {/* Color Section  */}
                      <div className='flex flex-col w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Color</label>
                        <select id='' className='w-full p-2 rounded-md mt-1'>
                            <option defaultChecked  >Please Select one color</option>
                          {colorstate.map((color, index) => {
                            return (
                              <>
                                <option key={index} >{color.tittle}</option>
                              </>
                            )
                          })}
                        </select>
                      </div>
                     

                  </div>
                  
                  <div className='flex flex-row mt-2 space-x-4'>
                    {/* Price */}
                     <div className='flex flex-col w-[10ŸŸ~%] '>
                        <label for="Select category" className='my-1 font-medium'> Price</label>
                        <InputNumber 
                          min={1} 
                          max={99999} 
                          defaultValue={1}
                          id='price'
                          value={formik.values.price} 
                          onChange={formik.handleChange("price")}
                          onBlur={formik.handleBlur("price")}
                         /> 
                          <div className='text-sm text-red-400'>
                            {formik.touched.price && formik.errors.price ? (
                            <div>{formik.errors.price}</div>
                            ) : null}
                          </div>
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


                        
                  <button type='submit' className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
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