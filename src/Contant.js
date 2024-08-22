import React from 'react'

import Itemslist from './Itemslist';

const Contant = ({items,handleCheck,handleDelete})=> {
 
 
   
  return (
    <main>
      {(items.length)?(
        <Itemslist
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
      
      ) :(
        <p>your list is empty</p>
      )
    }
    </main>
  )
}

export default Contant