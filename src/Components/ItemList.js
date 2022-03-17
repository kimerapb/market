import React from 'react'
import Item from './Item'

const ItemList = ({lista}) => {

  return (
    <>

      <div className='container'>
        <div className='row'>

        { lista.map( (elItem) => <Item key={elItem.id} {...elItem}/> )}

        </div>
      </div>

    </>
  )
}

export default ItemList
