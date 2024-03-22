import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {

    const route = useParams()
    console.log(route);
  return (
    <>
      contact kishan
    </>
  )
}
