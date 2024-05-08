import React, { useContext } from 'react'
import ContextApi from '../ContextApi'

function Candidate() {
    const {result} = useContext(ContextApi)
  return (
    <div>{result}</div>
  )
}

export default Candidate