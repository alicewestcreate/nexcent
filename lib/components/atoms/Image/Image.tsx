import { css } from '@emotion/css'
import React from 'react'

interface ImageProps {
    src: string,
    width?: string,
}

const Image: React.FC<ImageProps> = ({src, width}) => {


  return (
    <img src={`./${src}`} width={width || ''}></img>
  )
}

export default Image