import React from "react";
import Card from "../Card/Card";
import list from "../../../public/list.json"
import { Link } from "react-router-dom";

function Course(){
    console.log("list==============", list);
    return (
        <>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            <div className="mt-28 justify-center items-center text-center">
                <h1 className="text-2xl font-semibold md:text-4xl">We 're delighted to have you <span className="text-pink-500"> Here! :)</span></h1>
                <p className=" mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt sunt hic eius cum aspernatur, quis, libero quisquam velit rerum dolore numquam! Dolorem, exercitationem maxime? Nihil cupiditate recusandae unde quos earum! Enim, laudantium ipsa. Blanditiis pariatur sunt, facere neque error officiis ipsa suscipit nihil quidem, perspiciatis alias assumenda at sit rerum?</p>
                <Link to={"/"}>
                <button className=" bg-pink-500 px-4 py-2 mt-6 hover:bg-pink-700 duration-200 rounded text-white">Back</button>
                </Link>

            </div>
            <div className=" mt-12 grid grid-cols-1 md:grid-cols-4">
                {list.map((item)=>(
                    <Card key={item.id} item={item} />
                )) }
            </div>
        </div>
        </>
    )
}
export default Course