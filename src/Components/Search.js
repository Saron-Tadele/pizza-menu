import React from 'react'

function Search() {
  return (
  <div className="flex flex-col h-screen bg-center bg-cover bg-no-repeat">
			<div className="grid place-items-center mx-auto p-20 sm:my-auto bg-white rounded-3xl space-y-2">
       <div className=" items-center justify-center space-x-7">

    <button className="bg-gray-300 px-8 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
       
        <span>action taking</span>
    </button>
    <button className="bg-gray-300 px-8 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded">
       
        <span>Twitter</span>
    </button>
    <button className="bg-gray-300 px-10 py-1 font-semibold text-white inline-flex items-center space-x-4 rounded">
        
        <span>Reddit</span>
    </button>
    <button className="bg-white-300 px-10 py-1 font-semibold text-gray-500 inline-flex items-center space-x-4 rounded">
        
        <span>Pinterest</span>
    </button>
    </div>
			</div>
		</div>
  )
}

export default Search