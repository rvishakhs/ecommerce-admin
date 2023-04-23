
import Inputcomponent from '../components/Inputcomponent'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { addcoupon, fetchcoupon, resetState } from '../features/coupon/couponSlice';
import { useLocation, useNavigate } from 'react-router-dom';


function Addcoupon() {
  
  // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required(" Coupon name required"),
  date: Yup.date().required("Please choose an expiry date"),
  discount : Yup.number().required("Please type the discount percentage")
 });
    
 const dispatch = useDispatch()
 const location = useLocation()
 const navigate = useNavigate()

 const getcouponid = location.pathname.split('/')[3]

 useEffect(()=> {
  if(getcouponid !== undefined) {
    dispatch(fetchcoupon(getcouponid))
  } else {
    dispatch(resetState())
  }
 }, [])


 const couponstate = useSelector((state)=> state.coupons)  // Toast related
 const {isSucess, isError, isLoading, createdcoupon, couponData} = couponstate //Toast related

 // React Toast section 
 useEffect(()=> {
   if(isSucess && createdcoupon ) {
     toast.success('Coupon added successfully') 
   } 
   if(isError ) {
     toast.error('Oops !! Something went wrong');
   }
 }, [isSucess, isError, isLoading])

 // Implymenting formik
const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle: couponData?.tittle || ' ',
    date : couponData?.expiry || " ",
    discount : couponData?.discount || "",
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    dispatch(addcoupon(values))
    formik.handleReset();
    setTimeout(()=> {
      dispatch(resetState())
    }, 2000)
  },
});


  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Coupons</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Coupon Name</label>
                  {/* Tittle part */}
                  <Inputcomponent 
                    type="text" 
                    id="tittle" 
                    val={formik.values.tittle} 
                    onCH={formik.handleChange("tittle")}
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.tittle && formik.errors.tittle ? (
                          <div>{formik.errors.tittle}</div>
                      ) : null}
                  </div>
                  {/* Expiry Date */}
                  <label for="Select category" className='my-1 font-medium'>Expiry Date</label>
                  <Inputcomponent 
                    type="date" 
                    id="date" 
                    val={formik.values.date} 
                    onCH={formik.handleChange("date")}
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.date && formik.errors.date ? (
                          <div>{formik.errors.date}</div>
                      ) : null}
                  </div>
                  {/* Discount  */}
                  <label for="Select category" className='my-1 font-medium'>Discount</label>
                  <Inputcomponent 
                    type="number" 
                    id="discount" 
                    val={formik.values.discount} 
                    onCH={formik.handleChange("discount")}
                  />
                  <div className='text-sm text-red-400'>
                      {formik.touched.discount && formik.errors.discount ? (
                          <div>{formik.errors.discount}</div>
                      ) : null}
                  </div>
                        {/* Submit Button */}
                  <button 
                  type='submit'   
                  className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Add Coupon
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addcoupon