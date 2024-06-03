import React from 'react'

export default function Home4() {
  return (
    <div className="border-solid border-2 border-black w-[300px] h-[500px] rounded  text-center">
    <h1 className="font-bold text-[30px]">Login</h1>
    <div>
      <p className="mr-[13pc]">Email</p>
      <input className="border-2 border-black rounded w-[250px]" type="text" placeholder="your email"></input>
    </div> <br />

    <div>
      <p className="mr-[11pc]">Password</p>
      <input  className="border-2 border-black rounded w-[250px]" type="text" placeholder="your password"></input>
    </div><br /> 
    <div>
      <p className="mr-[11pc]">confirm password</p>
      <input  className="border-2 border-black rounded w-[250px]" type="text" placeholder="your password"></input>
    </div><br /> 
    <button className="bg-blue-500 rounded w-[250px] hover:bg-blue-800 text-white h-[30px]" >Login an account </button>
    <p className="text-gray-300">Alreadyhave an account?</p>
    <span className="text-gray-600">Register here</span>
  </div>
  )
}
