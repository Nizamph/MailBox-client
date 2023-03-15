import React from 'react'
import { useSelector } from 'react-redux'
const Send = () => {
  const authorData = useSelector(state => state.email.emailContent)

  console.log(authorData)
  return (
    <div style={{marginLeft:"300px"}}>Send</div>
  )
}

export default Send