import Inputcomponent from '../components/Inputcomponent'
import React, {useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { addcolor, fetchcolor, resetState, updatecolor } from '../features/colors/colorSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function Addcolor() {


   // Yup validation
 let schema = Yup.object().shape({
  tittle: Yup.string().required("Enter color name"),
 });

 const dispatch = useDispatch()
 const location = useLocation()
 const navigate = useNavigate()

 const getcolorid = location.pathname.split("/")[3]

 useEffect(() => {
    if(getcolorid !== undefined) {
      dispatch(fetchcolor(getcolorid))
    } else {
      dispatch(resetState())
    }
 }, [getcolorid])


 const addedcolor = useSelector((state)=> state.colors)  // Toast related
 const {isSucess, isError, isLoading, newcolor, updatedColor, colorName } = addedcolor  //Toast related

  // React Toast section 
  useEffect(()=> {
    if(isSucess && newcolor ) {
      toast.success('color added successfully') 
    } 
    if (updatedColor && isSucess ){
      toast.success('color updated successfully')
    }
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])

 const formik = useFormik({
  enableReinitialize : true,
  initialValues: {
    tittle: colorName || '',
  },
  validationSchema : schema,
  onSubmit: (values) => { 
    if(getcolorid !== undefined) {
      dispatch(updatecolor({id: getcolorid , color: values}))
      setTimeout(()=> {
        navigate("/admin/colors")
        dispatch(resetState())
      }, 100)
       
    } else {
      dispatch(addcolor(values));
      formik.handleReset();
      setTimeout(()=> {
        dispatch(resetState())
      }, 200)
    }
  },
});


    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>{getcolorid ? "Edit " : "Add New"} Color</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form onSubmit={formik.handleSubmit}>
                  <label for="Select category" className='my-1 font-medium'>Color Name</label>
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
                        
                  <button 
                    type='submit'
                    className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'
                  >
                    {getcolorid ? "Update " : "Add New"}Color
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addcolor