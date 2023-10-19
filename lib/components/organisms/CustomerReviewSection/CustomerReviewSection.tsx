import React from 'react'
import Typography from '../../atoms/Typography/Typography'
import LogoArray from '../../molecules/LogoArray/LogoArray'
import Button from '../../atoms/Button/Button'
import { css } from '@emotion/css'
import Image from '../../atoms/Image/Image'
import { MediaQuery as mq, MQ} from '@/lib/utils/Constants'

const CustomerReviewSection = () => {

  const gridStyling = css({
        display: 'grid',
        justifyItems: 'center',
        gap: '32px',
        [mq.desktop]: {
            gridTemplateColumns: "2fr 3.5fr",
        },
      });
    
      const imageStyling = css({
        "& img": {
            width: "300px",
          },
          [mq.tablet]: {
            "& img": {
              width: "400px",
            },
      }
    })

      const ctaStyling = css({
        display: 'flex',
        flexDirection: 'column',
        marginTop: '16px',
        [mq.mobile]: {
          flexDirection: 'row',
        }
    
      })

      const contentStyling = css({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',

      })
      
  return (
    <div className={gridStyling}>
        <div className={imageStyling}>
            <Image src='customer.png' width=''></Image>
        </div>
        <div className={contentStyling}>
        <Typography
                  text={
                    "Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."
                  }
                ></Typography>
                <Typography
                  type={"h4"}
                  variant={"h4"}
                  color={"primary"}
                  text={"Tim Smith"}
                ></Typography>
                <Typography
                  text={"British Dragon Boat Racing Association"}
                ></Typography>
                <div className={ctaStyling}>
                <LogoArray maxItemsToShow={6}></LogoArray>
                <Button variant={"tertiary"} icon="RightArrow" iconPosition='right'>Meet all customers </Button>
                </div>
        </div>
    </div>
  )
}

export default CustomerReviewSection