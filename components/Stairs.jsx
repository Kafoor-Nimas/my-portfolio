import React from 'react'
import {animate, motion} from "framer-motion"

// variants
const stairAnimation ={
  initial:{
    top: "0%",
  },
  animate:{
    top:"100%",
  },
  exit:{
    top: ["100%","0%"],
  },
}

const reverseIndex = (index)=>{
  const totalSteps = 6;
  return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <div>Stairs</div>
  )
}

export default Stairs