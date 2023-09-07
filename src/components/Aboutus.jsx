import React from 'react'

const Aboutus = () => {
  return (
    <div className=" rounded-xl w-full mx-auto  bg-zinc-300 p-10 pb-0 bg-fixed md:bg-[url('https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1960&h=1080&dpr=1')]" >
      <div className=' rounded-xl w-full  mx-auto md:hidden'>
        <img className='mt-4 bg-fixed shadow-2xl mx-auto rounded-3xl object-cover container aspect-video z-10 relative sm:w-2/3' src="https://images.pexels.com/photos/2649403/pexels-photo-2649403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img" />
      </div>
      <div className='grid grid-cols-8 mx-auto rounded-xl z-10 relative w-full container h-screen'>
        <div className=' w-3/4 p-4 bg-white col-span-5  rounded-2xl m-4 min-h-36 relative lg:left-20 max-md:-top-10  shadow-xl hover:scale-110 transition delay-150 ease-linear'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vitae quasi debitis ipsa vel delectus.</div>
        <div className=' w-3/4 p-4 bg-white col-span-5 col-start-4  rounded-2xl m-4 min-h-36 relative lg:left-20 max-md:-top-10  shadow-xl hover:scale-110 transition delay-150 ease-linear'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vitae quasi debitis ipsa vel delectus.</div>
        <div className=' w-3/4 p-4 bg-white col-span-5  rounded-2xl m-4 min-h-36 relative  lg:left-20 max-md:-top-10 shadow-xl hover:scale-110 transition delay-150 ease-linear'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vitae quasi debitis ipsa vel delectus.</div>
        <div className=' w-3/4 p-4 bg-white col-span-5 col-start-4  rounded-2xl m-4 min-h-36 relative lg:left-20 max-md:-top-10  shadow-xl hover:scale-110 transition delay-150 ease-linear'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores vitae quasi debitis ipsa vel delectus.</div>
      </div>
    </div>
    // <>
    //     <div className='fixed h-24 w-24'>
    //         <div className='h-24 w-24 bg-blue-400'></div>
    //         <div className='h-24 w-24 bg-red-400 absolute top-10'></div>
    //     </div>
    // </>
  )
}

export default Aboutus
