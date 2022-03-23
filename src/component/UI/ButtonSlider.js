import React from 'react'
import styled from 'styled-components'
import {MdArrowLeft, MdArrowRight} from 'react-icons/md';
import './styled.css';


export const Prev = styled.div`
    top: 50%;
    left: 20px;
    transform: translateX(-60%);
`
export const Next = styled.div`
    top: 50%;
    right: 20px;
    transform: translateX(-60%);
`
const ButtonSlider = ({direction, moveSlide}) => {

    console.log(direction, moveSlide);

  return (
    <button  
        onClick={moveSlide}
        className={direction === "next" ? "btn_slide next" : "btn_slide prev" }
    >
        {direction === "next" ? <MdArrowLeft/> : <MdArrowRight/>}
    </button>
  )
}

export default ButtonSlider