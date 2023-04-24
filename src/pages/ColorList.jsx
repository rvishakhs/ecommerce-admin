import React, { useEffect, useState } from 'react'
import {  Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {FiEdit} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import { deleteColor, getcolors } from '../features/colors/colorSlice';
import moment from 'moment';
import CustomModal from '../components/CustomModal';
import { toast } from 'react-toastify';

function ColorList() {

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [colorId, setcolorId] = useState("");

  const addedcolor = useSelector((state)=> state.colors)  // Toast related
 const {isSucess, isError, isLoading, deletedColor } = addedcolor  //Toast related

  // React Toast section 
  useEffect(()=> {
    if(isSucess && deletedColor ) {
      toast.success('color deleted successfully') 
    } 
    if(isError ) {
      toast.error('Oops !! Something went wrong');
    }
  }, [isSucess, isError, isLoading])

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  const handleClick = (data) => {
    setcolorId(data)
    setOpen(true)

  }

  const deleteFunc = (id) => {
      dispatch(deleteColor(id))
      setTimeout(() => {
        dispatch(getcolors())
        setOpen(false)
      }, 100);

  }

    const columns = [
        {
          title: 'Slno',
          dataIndex: 'key',
          key: 'slno',
        },
        {
          title: 'Tittle',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.length - b.name.length, 
        },
        {
          title: 'CreatedAt',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
    ]


    useEffect(()=> {
      dispatch(getcolors())
    }, [])


    const colorstate = useSelector((state) => state.colors.color)

    const tabledata = []
        for(let i = 0; i<colorstate.length ; i++) {
            tabledata.push({
                key: i + 1,
                name : colorstate[i].tittle,
                createdAt : moment( colorstate[i].createdAt).format("MMM Do YY"),
                action : (
                  <div className='flex flex-row space-x-2'>

                    <Link to={`/admin/colors/${colorstate[i]._id}`}>
                      <FiEdit className='w-5 h-5'/>
                    </Link>
                    <button onClick={()=> handleClick(colorstate[i]._id)}>
                      <AiOutlineDelete className='w-[22px] h-[22px] hover:text-blue-600'/>
                    </button>
                  
                  </div>
                )
            })
        }
  return (
    <>
    <div className='mt-3 mx-2 py-2 h-[82vh] overflow-y-scroll '>
        <h2 className='font-bold text-xl tracking-wide px-3 py-2 '>Color List </h2>
        <div className='px-2 py-2 '>
            <Table columns={columns} dataSource={tabledata} tableLayout/>

        </div>
        <CustomModal  title="Delete" open={open} action={()=> deleteFunc(colorId)}  hideModal={hideModal} content="Are you sure? You want to  delete color" />

    </div>
   </>
  )
}

export default ColorList