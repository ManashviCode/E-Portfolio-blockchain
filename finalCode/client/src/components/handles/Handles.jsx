/* eslint-disable no-unused-vars */
import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/divani-manarandi-276894203/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://medium.com/@divanimanarandi"><AiFillMediumSquare className='icon' /></a>
      <a href="https://github.com/ManashviCode" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles