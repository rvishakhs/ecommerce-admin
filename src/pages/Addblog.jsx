import React from 'react'
import Inputcomponent from '../components/Inputcomponent'

function Addblog() {
    
  return (
    <div>
        <>
        <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
            <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Add New Blog Post</h2>
            <div className='px-2 py-2 w- '>
                <form>
                    <Inputcomponent type="text" id="tittle" label="Blog Tittle"/>
                        
                   <button className='bg-green-500 rounded-lg py-2 px-3 mt-3'>
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