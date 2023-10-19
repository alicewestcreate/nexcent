import React from 'react'
import BusinessLogo from '../../atoms/BusinessLogo/BusinessLogo'
import Typography from '../../atoms/Typography/Typography'
import SocialMediaButton from './SocialMediaButton'
import SocialMediaList from './SocialMediaList'

const CompanyInfo = () => {
  return (
    <div>
        <BusinessLogo color='white'></BusinessLogo>
        <Typography type="p" variant="body4" color="white" text="Copyright © 2020 Nexcent ltd."></Typography>
        <Typography type="p" variant="body4" color="white" text="All rights reserved"></Typography>
        <SocialMediaList></SocialMediaList>

    </div>
  )
}

export default CompanyInfo