import React from 'react'

const RightCardContent = (props) => {
  return (
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between  '>
                <h2 className='bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl font-bold'>{props.id+1}</h2>
                
                <div >
                    
                    <p className='text-lg leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint accusantium voluptate, non voluptatem porro!</p>
                    <div className='flex justify-between'>
                        <button className='bg-blue-600  text-white font-medium px-5 py-3 rounded-full ' >{props.tag} </button>
                        <button className='bg-blue-600  text-white font-medium px-4 py-3 rounded-full ' ><i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent
