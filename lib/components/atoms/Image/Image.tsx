import React from 'react'

interface ImageProps {
    src: string,
}

const Image: React.FC<ImageProps> = ({src}) => {

  return (
    <img src={`./${src}`}></img>
  )
}

export default Image