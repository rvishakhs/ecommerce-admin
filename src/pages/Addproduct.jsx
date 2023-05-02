import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { getbrands } from '../features/brand/brandSlice';
import { getProdCategory } from '../features/products/productCategorySlice';
import { getcolors } from '../features/colors/colorSlice';
import InputNumberComponent from '../components/InputNumberComponent';
import "react-widgets/styles.css";
import Dropzone from 'react-dropzone'
import { deleteImage, imageUpload } from '../features/uploadImages/uploadimageSlice';
import {IoMdCloseCircleOutline} from "react-icons/io"
import { addProducts, fetchProducts, resetState, updateProducts } from '../features/products/productSlice';
import { Select, Space } from 'antd';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

function Addproduct() {
  
  // Yup validation
 let schema = Yup.object().shape({
   tittle: Yup.string().required("Please enter tittle for the product"),
   description : Yup.string().required("Please enter product description "),
   price : Yup.number().required("Please enter product price "),
   quantity : Yup.number().required("Please enter product quntity "),
   category : Yup.string().required("please select product category"),
   brand : Yup.string().required("please select product brand "),
   color : Yup.array().min(1, "please select atleast one color").required("please select product colors"),           
   image : Yup.array()
  });
  
  const dispatch = useDispatch()
  const location = useLocation() 
  const navigate = useNavigate()
  const [color, setcolor ] = useState([])
  const images = [] 
  const coloropt = [] 

  const brandState = useSelector((state)=> state.brand.brand)
  const productCategoryState = useSelector((state)=> state.prodCategory.productcategory)
  const colorstate = useSelector((state) => state.colors.color)
  const imageState = useSelector((state)=> state.imageupload.images)
  const newProduct = useSelector((state)=> state.product)  // Toast related
  const {isSucess, isError, isLoading, newproduct, productData, updatedProduct, productColor, productImages} = newProduct //Toast related

  const productId = location.pathname.split('/')[3]

  useEffect(() => {
    if(productId !== undefined) {
      dispatch(fetchProducts(productId))
      images.push(productImages)
    } else {
      dispatch(resetState())
    }
  }, [productId])




  // React Toast section 
  useEffect(()=> {
    if(isSucess && newproduct ) {
      toast.success('Product added successfully') 
    } 
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])


  //Adding images to an array from the redux state
  imageState.forEach((image) => {
    images.push({
      public_id : image.public_id,
      url : image.url
    })
  })
 //Adding color to an array from the redux state
  colorstate.forEach((color) => {
    coloropt.push({
      label: color.tittle,
      value : color._id
    })
  })


  
  // Implymenting formik
const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle:  productData?.tittle || '',
    description :  productData?.description || '',
    price : productData?.price || '',
    quantity : productData?.quantity || '',
    category : productData?.category || '',
    brand : productData?.brand || "",
    tag : productData?.tag || "",
    color : productColor ||  " ",
    image : productImages || ' '
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(productId !== undefined) {
      dispatch(updateProducts({id: productId, Data: values} ))
      setTimeout(()=> {
        navigate("/admin/products")
        dispatch(resetState())
      }, 100)
    } else {
      dispatch(addProducts(values));
      formik.handleReset();
      setTimeout(()=> {
      dispatch(resetState())
        window.location.reload()
       }, 250)
    }
    
  },
});
  useEffect(()=> {
    dispatch(getbrands())
    dispatch(getProdCategory())
    dispatch(getcolors())
  }, [])

    // For color change and image upload
    useEffect(()=> {
      formik.values.color = color ? color : " "
      formik.values.image = images 
    }, [color, images])
  
    const handleChange = (e) => {
      setcolor(e)

    }
  
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
                      {formik.touched.description ? (
                          <div>{formik.errors.description}</div>
                      ) : null}
                  </div>
                  <div className='flex flex-row mt-2 items-center justify-between space-x-2'>
                      {/* Brand Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Brand</label>
                        <select  
                          id=''
                          name="brand"
                          value={formik.values.brand} 
                          onChange={formik.handleChange("brand")} 
                          onBlur={formik.handleChange("brand")} 
                          className='w-full p-2 rounded-md mt-1'>
                            <option defaultChecked disabled >{" "}</option>
                        {brandState.map((brand, index )=> {
                          return (
                            <option key={index}>{brand.tittle}</option>
                            )
                          })}
                        </select>
                        <div className='text-sm text-red-400 pl-2'>
                        {formik.touched.brand && formik.errors.brand ? (
                            <div>{formik.errors.brand}</div>
                        ) : null}
                        </div>
                      </div>
                      {/* Category Section */}
                      <div className='w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Category *</label>
                        <select 
                          id=''
                          name="category"
                          value={formik.values.category} 
                          onChange={formik.handleChange("category")} 
                          onBlur={formik.handleChange("category")} 
                          className='w-full p-2 rounded-md mt-1'>
                            <option defaultChecked disabled >{" "}</option>
                          {productCategoryState.map((product, index) => {
                            return (
                              <>
                                <option key={index} >{product.tittle}</option>
                              </>
                            )
                          })}
                        </select>
                        <div className='text-sm text-red-400 pl-2'>
                        {formik.touched.category && formik.errors.category ? (
                            <div>{formik.errors.category}</div>
                        ) : null}
                        </div>
                      </div>


                      {/* Color Section  */}
                      <div className='flex flex-col w-full'>
                        <label for="Select category" className='my-1 font-medium'>Select Color</label>
                        <Space
                          style={{
                            width: '100%',
                          }}
                          direction="vertical"
                        >
                          <Select
                            mode="multiple"
                            allowClear
                            className='w-full'
                            placeholder="Select color"
                            onChange={(e) =>handleChange(e)}
                            defaultValue={color}
                            options= {coloropt}
                            />
                        </Space>
                      
                        <div className='text-sm text-red-400'>
                            {formik.errors.color && formik.touched.color ?(
                                <div>{formik.errors.color}</div>
                            ) : null}
                        </div>
                      </div>
                     

                  </div>
                  
                  <div className='flex flex-row mt-2 space-x-4'>
                    {/* Price */}
                     <div className='flex flex-col w-[10ŸŸ~%] '>
                        <label for="Select category" className='my-1 font-medium'> Price</label>
                        <InputNumberComponent 
                          type="Number" 
                          id="Price"      
                          val={formik.values.price} 
                          onCH={formik.handleChange("price")}
                          className = "w-28"
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
                        <InputNumberComponent 
                          type="Number" 
                          id="quantity"      
                          val={formik.values.quantity} 
                          onCH={formik.handleChange("quantity")}
                          className = "w-28"
                        />
                      
                          <div className='text-sm text-red-400'>
                            {formik.touched.quantity && formik.errors.quantity ? (
                            <div>{formik.errors.quantity}</div>
                            ) : null}
                          </div>
                      </div>
                       {/* Tags Section */}
                       <div className='w-[35%]'>
                        <label for="Select category" className='my-1 font-medium'>Select Tag *</label>
                        <select 
                          id=''
                          name="category"
                          value={formik.values.tag} 
                          onChange={formik.handleChange("tag")} 
                          className='w-full p-2 rounded-md mt-1'>
                            <option defaultChecked disabled >{" "}</option>
                            <option defaultChecked value="Featured" >Featured</option>
                            <option defaultChecked value="Popular" >Popular </option>
                            <option defaultChecked value="Special Offers" >Special </option>                              
                        </select>
  
                      </div>
                  </div>

                     
                  {/* Image Upload */}
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
                            onClick={()=> dispatch(deleteImage(image.public_id))}
                            className='absolute top-1 right-1'
                          >
                            <IoMdCloseCircleOutline className=' w-5 h-5 group-hover:opacity-100 hover:scale-105 opacity-0 group '/>
                          </button>
                        </div>
                      )
                    })}
                    {/* {productImages?.map((image, index) => {
                      return (
                        <div key={index} className='relative w-[150px] group h-[150px] border border-gray-100 rounded-md'>
                          <img src={image.url} className='object-contain  w-[150px] h-[150px]' /> 
                          <button 
                            type='button' 
                            onClick={()=> dispatch(deleteImage(image.public_id))}
                            className='absolute top-1 right-1'
                          >
                            <IoMdCloseCircleOutline className=' w-5 h-5 group-hover:opacity-100 hover:scale-105 opacity-0 group '/>
                          </button>
                        </div>
                      )
                    })} */}
                  </div>

                {/* Submit Button  */}
                  <button 
                    type='submit' 
                    className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'
                  >
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