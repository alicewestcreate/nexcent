import { customTheme as theme} from '@/app/theme'
import { css } from '@emotion/css'
import React from 'react'

const IconBackground = () => {

    const squareStyle = css({
        height: '50px',
        width: '50px',
        backgroundColor: theme.colors.tints.t5,
        borderRadius: '10px 5px 18px 5px '

    })
    
  return (
    <div className={squareStyle}></div>
  )
}

export default IconBackground