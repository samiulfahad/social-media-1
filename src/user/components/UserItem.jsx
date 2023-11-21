import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ id, name, placeCount, image }) => {
  return (
    <div className='flex justify-center items-center w-screen my-4 font-bold'>
      <Link to={`/user/${id}/places`}>
        <div className='card flex justify-center items-center space-x-10'>
          <div>
            <img src={image} alt={name} className='object-contain w-20 h-20 rounded-full' />
          </div>
          <div className='flex flex-col justify-center items-start'>
            <p className='text-black font-mono'>{name.toUpperCase()}</p>
            <p className='text-black font-mono'>Place Visited: {placeCount}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default UserItem