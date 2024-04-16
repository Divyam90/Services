import React from 'react'
const Register = () => {
  return (
    <div>
        <div className="flex mt-20 font-medium justify-center text-4xl">
            <h3>Hire From Us</h3>
        </div>
        

<div className="flex w-1/2 mt-20 mb-20 ml-20 bg-white border border-gray-200 rounded-lg shadow bg-green-200">
    <a href="#">
        <img className="h-48 rounded-xl" src="service1.jpg" alt="" />
    </a>
    <div className="p-5">
        <a><h5 className="mb-2 text-2xl font-medium tracking-tight text-current">Register as worker</h5></a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Register with HomeGroom by filling the form and we will reach you.</p>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-emerald-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Fill the details
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

<div className="flex justify-end mr-20">
<div className="flex   w-2/5 mt-5 mb-20 ml-20 bg-white border border-gray-200 rounded-lg shadow bg-green-200">
    <a href="#">
        <img className="h-48 rounded-xl mt-10 mx-5  items-center" src="service2.jpg" alt="" />
    </a>
    <div className="p-5">
        <a><h5 className="mb-2 mx-12 text-2xl font-medium tracking-tight  ">Contact Us!</h5></a>
       
        

<form class=" w-full mx-auto">
  <div class="mb-2 mx-8">
    <label for="name" class="block mb-2 text-sm font-medium "> Name</label>
    <input type="name" id="name" class="bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required />
  </div>
  <div class="mb-2 mx-8" >
    <label for="email" class="block mb-2 text-sm font-medium "> Email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 " required />
  </div>
  <button type="submit" class=" mx-20 text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
</div>
</div>
    </div>
  )
}

export default Register