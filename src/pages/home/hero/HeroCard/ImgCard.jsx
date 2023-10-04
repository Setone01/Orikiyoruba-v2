import React from 'react'

const ImgCard = ({image}) => {
  return (
      <div className='w-full z-20'>
          <img className='w-full h-[90dvh] object-cover' src={image} alt="" />
    </div>
  )
}

export default ImgCard