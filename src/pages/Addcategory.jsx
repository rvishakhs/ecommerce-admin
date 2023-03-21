import Inputcomponent from '../components/Inputcomponent'
import React, { useState } from 'react';


function Addcategory() {
  
  
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Category</h2>
            <div className='px-3 py-2 w-[80%] '>
                <form>
                  <label for="Select category" className='my-1 font-medium'>Category Tittile</label>
                  <Inputcomponent type="text" id="tittle" label="Type Product category"/>
                  
                        
                  <button className='bg-green-500 rounded-lg font-medium hover:bg-green-400 py-2 px-3 mt-3'>
                    Add Product Category  
                  </button>     
                
                </form>
            </div>
        </div>
            
        </>
    </div>
  )
}

export default Addcategory