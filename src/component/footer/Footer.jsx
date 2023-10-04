import React from 'react'
import { link } from '../../assets/database/Database'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-white flex justify-center items-center flex-col'>
      <div className="">
        <div className=" text-center">
          <h1 className='text-5xl text-brown uppercase'>Orikiyoruba</h1>
        </div>
        <div className="">
          <ul className='flex justify-between items-center gap-14'>
            {link.map((item) => (
              <Link to={item.path} key={item.id}>{item.link}</Link>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer