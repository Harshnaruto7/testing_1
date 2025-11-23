"use client"
import Link from "next/link";

import React, { useEffect, useState,useContext } from "react";

import { Child } from "./components/Child";
import { AppContext } from "./components/AppContext";


interface apiResponse {
  success: string;
  message: string;
}


export default function Home() {

  const [value, setValue] = useState(0);

  function increaseValue() {
    
    setValue(value + 1);

  }

  function decreaseValue() {
    setValue(value - 1);
  }


  function setZero() {
    setValue(0);
  }


  useEffect(() => {
    console.log("the effect ran",Math.random());
  }, [value]);


  // API fetch 

  const [data, setData] = useState<apiResponse|null>(null);


 useEffect(() => {
   fetch("/api/message")
     .then((res) => res.json())
     .then((data) => setData(data))
     .catch((error) => console.error("Fetch error:", error));
 }, []);


  
    const { count, increase } = useContext(AppContext);


   const dataNew = {user:"Harsh",role:"Admin"};



  return (
    <div className=" flex flex-col gap-2 items-center py-10">
      <div className="">
        {/* counter */}
        <h1>Home</h1>
        <h1>Count</h1>
        <p>{value}</p>
      </div>

      <div className="flex flex-col gap-2">
        <button className="py-2 bg-blue-400" onClick={increaseValue}>
          Increase Value
        </button>
        <button className="py-2 bg-red-400" onClick={decreaseValue}>
          Decrease Value
        </button>
        <button className="py-2 bg-green-400" onClick={setZero}>
          Set Zero
        </button>
      </div>

      {/* props */}

      <div className="flex gap-2 flex-col">
        {/* <Child user={dataNew.user} role={dataNew.role} /> */}
        <Child {...dataNew} />
      </div>

      <div className="flex gap-2 flex-col">
        The data
        <p>{data ? data.message : "Loading..."}</p>
      </div>
      { /* Context API */ }
      <div className="flex flex-col bg-blue-400">
        <div className="p-10 text-white bg-black">
          <h1 className="text-xl">Context API Counter</h1>

          <p className="text-lg mt-4">Count: {count}</p>

          <button className="mt-3 px-4 py-2 bg-blue-500" onClick={increase}>
            Increase
          </button>
        </div>
      </div>
      <div className="py-4">

        <button className="bg-white text-lg font-bold text-blue-500 ">
          <Link href="/learning-1">Learning-1</Link>
        </button>
        
      </div>
    </div>
  );
}
























