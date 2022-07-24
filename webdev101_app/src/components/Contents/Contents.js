import React from 'react'
import Cards from '../Cards/Cards'
import Line from '../Line/Line'
import './Contents.css'

export default function Contents() {
  return (
    <>
      <h1 className='content-title'>Contents</h1>
      <Line />
      <Cards />
      <Line />
    </>
  )
}
