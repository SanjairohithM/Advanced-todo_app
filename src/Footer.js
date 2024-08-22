import React from 'react'

const Footer = ({lenth}) => {
    const year =new Date()
  return (
    <footer>{lenth} list {lenth ===1 ? "item" :"items"}</footer>
  )
}

export default Footer