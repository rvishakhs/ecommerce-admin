import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const CustomModal = ({title, open, hideModal,action, content }) => {
  return (
    <Modal
        title={title}
        style={{
          textDecorationColor : 'black'
        }}
        open={open}
        onOk={action}
        onCancel={hideModal}
        okText="Ok"
        cancelText="Cancel"

      >
        <p>{content}</p>

      </Modal>
  )
}

export default CustomModal