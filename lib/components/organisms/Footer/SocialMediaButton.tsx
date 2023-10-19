import { css } from '@emotion/css'
import React from 'react'

const SocialMediaButton = () => {

    const socialButton = css({
        width: "32px",
        height: "32px",
        border: "none",
        borderRadius: "16px",
        backgroundColor: 'white',
        opacity: "0.3",
    })


  return (
    <button className={socialButton}></button>
  )
}

export default SocialMediaButton