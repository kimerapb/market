import React from 'react'

function Pokemon({name,img}) {
  return (
      <>

        <div className='col-md-2 bg-dark text-white'>

            <img className='img-fluid' src={img} alt="" />
            <h1>{name}</h1>
            

        </div>
    </>
  )
}

export default Pokemon