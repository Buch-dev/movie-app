"use client"

import React from 'react'

const error = ({error, reset}) => {
  return (
    <div>error <button onClick={reset}>Try again</button></div>
  )
}

export default error