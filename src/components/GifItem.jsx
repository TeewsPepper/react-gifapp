import React from 'react'

const GifItem = ({ title, url, id }) => {

    

  return (
    <div className='card'>
      <img src={ url} alt={`imagen de ${title}`} />
      <p>{ title }</p>
    </div>
  )
}

export default GifItem
