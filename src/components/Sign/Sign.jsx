import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import { useForm } from "react-hook-form"

function Sign() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div className=" flex h-screen items-center justify-center ">
    
      <div className=" w-[600px]" >
        <div className="modal-box" >
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          <h3 className="font-bold text-lg">Sign Up</h3>
          <div>
            <p className="py-3 ">Name</p>
            <input className="w-80 outline-none" type="name" placeholder="Enter your name" {...register("name", { required: true })}/>
            <br />

            {errors.name && <span className=" text-sm text-red-500">This field is required</span>}
          </div>
          <div className="mt-6">
            <p className="py-3">Email</p>
            <input className="w-80 outline-none" type="email" placeholder="Enter your Email" {...register("email", { required: true })}/>
            <br />

            {errors.email && <span className=" text-sm text-red-500">This field is required</span>}

          </div>

          <div className="mt-6">
            <p className="py-3">Password</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
              className="w-80 px-3 py-1 outline-none"
              {...register("password", { required: true })}
            />
            <br />
                        {errors.password && <span className=" text-sm text-red-500">This field is required</span>}

          </div>
          <div className="mt-6 flex justify-around">
            <button className=" bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-700">Signup</button>
            <p>H    ave account?  <button className=" font-bold underline text-blue-500 cursor-pointer" onClick={()=>document.getElementById('my_modal_3').showModal()}>Login</button>
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Sign;
