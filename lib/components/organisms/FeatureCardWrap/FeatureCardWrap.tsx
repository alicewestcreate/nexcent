import React from 'react'
import { IconType } from "../../atoms/Icons/IconProps";
import FeatureCard from '../FeatureCard/FeatureCard'
import { css } from '@emotion/css'

interface FeatureCardWrapProps {
    contents: {
        icon : string,
        heading: string,
        copy: string,
    }[],
}

const FeatureCardWrap: React.FC<FeatureCardWrapProps> = ({ contents }) => {

    const FeatureCardWrap = contents.map((content, index) => (
        <FeatureCard key={index} icon={content.icon as IconType} heading={content.heading} copy={content.copy}></FeatureCard>
    ))

    const featureCardWrapStyles = css({
      display: "flex",
      justifyContent: 'space-between',
      paddingBottom: '50px',
      paddingTop: '50px',
      

    })


  return (
    <div className={featureCardWrapStyles}>
    {FeatureCardWrap}
    </div>
  )
}

export default FeatureCardWrap