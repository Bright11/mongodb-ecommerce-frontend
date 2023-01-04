import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Toastify() {
  return (
      
          toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        })
    
  )
}

export default Toastify