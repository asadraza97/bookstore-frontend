import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


function ContactUs(){   
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm()
      const onSubmit = (data) => console.log(data)
    return(
       <>
       <div>
       <div className=" flex h-screen items-center justify-center ">
    
    <div className=" w-[600px]" >
      <div className="modal-box" >
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
        <h3 className="font-bold text-lg">Contact Us</h3>
        <div>
          <p className="py-3 ">Name</p>
          <input className="w-80 outline-none" type="name" placeholder="Enter your name" {...register("name", { required: true })} />
          <br />
          {errors.name && <span className=" text-sm text-red-500">This field is required</span>}


        </div>
        <div className="mt-6">
          <p className="py-3">Email</p>
          <input className="w-80 outline-none" type="email" placeholder="Enter your Email" {...register("email", { required: true })} />
          <br />
          {errors.email && <span className=" text-sm text-red-500">This field is required</span>}



        </div>

        <div className="mt-6">
          <p className="py-3">Message</p>
          {/* <input
            type="text"
            name=""
            id=""
            placeholder="Enter your password"
            className="w-80 px-3 py-1 outline-none"
          /> */}
          <textarea className=" px-2 py-1 outline-none" name="text" id="" placeholder="Type your message" rows={5} cols={55} {...register("text", { required: true })} ></textarea>
          {errors.text && <span className=" text-sm text-red-500">This field is required</span>}

          <br />

        </div>
        <div className="mt-6">
          <button className=" bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700">Submit</button>
          {/* <p>Have account?  <button className=" font-bold underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
            <Login/>
          </p> */}
        </div>
        </form>
      </div>
    </div>
  </div>
       </div>
       </>
    )
}
export default ContactUs