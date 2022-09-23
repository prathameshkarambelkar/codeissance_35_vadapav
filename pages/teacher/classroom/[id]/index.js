import Link from "next/link";
import React from "react";
import Assignment from "../../../../components/Assignment";

const Classroom = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex place-items-center bg-black max-w margin-auto   text-white ">
          <h1 className="text-3xl w-full text-white font-bold mx-1 p-4">
            Nikaaal
          </h1>
          <ul className="flex m-4">
            <Link href={"#"}>
              <li className="p-4 text-yellow-900">Assignments</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 ">Students</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 ">Notices</li>
            </Link>
            <Link href={"#"}>
              <li className="p-4 hover:text-yellow-900">Logout</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col m-4 p-4 mx-auto border-black border-2 rounded-md w-3/6">
        <h1 className="text-2xl">Add assignment</h1>
        <input
          className=" border-black border rounded-sm p-2 mt-4 w-full "
          placeholder="Assignment Name"
          name="emailAddress"
        />
        <input
          className=" border-black border rounded-sm p-2 mt-4 w-full h-20"
          placeholder="Assignment description"
          name="emailAddress"
        />
        <input
          className="border-black border mt-4 "
          type="date"
          placeholder="Set Due Date"
          name="dueDate"
        />
        <button className="border-black border-2 m-4 rounded-md w-2/5 p-2 mx-auto">
          Add assignment
        </button>
        
      </div>
      <Assignment />
      <Assignment />

    </>
  );
};

export default Classroom;
