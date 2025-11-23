"use client"

import { useRouter } from 'next/navigation';
import React from 'react'


export const page = () => {


    const route = useRouter();
    

    function handleClick() {
      
        console.log("Going to Home page.");

        route.push('/');


 }





  return (
      <>
          <div className="text-3xl  flex flex-col justify-center items-center gap-y-4 py-2">
              
              <div>
                  Hello from The learning page.
              </div>

              <button onClick={handleClick} className='p-4 bg-violet-500 text-white hover:bg-red-300 hover:text-blue-400'>
                  
                  Return to Home page
                  
              </button>

          </div>
      
          
          
      </>
  )
}


export default page;
