import React from 'react'
import BusinessLogo from '../../atoms/BusinessLogo/BusinessLogo'
import Typography from '../../atoms/Typography/Typography'
import SocialMediaList from './SocialMediaList'
import { css } from '@emotion/css'

const CompanyInfo = () => {

  const companyInfoCSS = css({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',

  })
  return (
    <div className={companyInfoCSS}>
        <BusinessLogo inverted ></BusinessLogo>
        <div>
        <Typography type="p" variant="body4" color="white" text="Copyright © 2020 Nexcent ltd."></Typography>
        <Typography type="p" variant="body4" color="white" text="All rights reserved"></Typography>
        </div>
        <SocialMediaList></SocialMediaList>

    </div>
  )
}

export default CompanyInfo