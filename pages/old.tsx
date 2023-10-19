import React from "react";
import { ThemeProvider } from "@emotion/react";
import { css } from "@emotion/css";
import NavBar from "@/lib/components/organisms/Navigation/DesktopMenu";
import FeatureSection from "@/lib/components/organisms/FeatureSection/FeatureSection";
import HeadingCard from "@/lib/components/organisms/HeadingCard/HeadingCard";
import LogoArray from "@/lib/components/molecules/LogoArray/LogoArray";
import { customTheme as theme } from "../app/theme";
import { MediaQuery as mq } from "@/lib/utils/Constants";
import IconFeatureCard from "@/lib/components/organisms/IconFeatureCard/IconFeatureCard";


export default function Home() {
  const silverBackgound = css({
    backgroundColor: theme.colors.neutrals.silver
  })

  const content = {
    hero: {
      heading: "Lessons and insights from 8 years",
      body: "Where to grow your business as a photographer: site or social media?",
      image: "hero_illustration.png",
      cta: {
        label: "Register",
        slug: "/register",
      },
    },
    feature1: {
      heading: "The unseen of spending three years at Pixelgrade",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.",
      image: "rafiki.png",
      cta: {
        label: "Learn More",
        slug: "/learnmore",
      },
    },
    feature2: {
      heading: "How to design your site footer like we did",
      body: "Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.",
      image: "pana.png",
      cta: {
        label: "Learn More",
        slug: "/learnmore",
      },
    },
  };

  const headingCardsContent = [
    {
      heading: "Our Clients",
      copy: "We have been working with some Fortune 500+ clients",
    },
    {
      heading: "Manage your entire community in a single system",
      copy: "Who is Nextcent suitable for?",
    },
    {
      heading: "Caring is the new marketing",
      copy: "The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​",
    },
  ];

  const gridContainer = css({
    display: "grid",
    gridTemplateColumns: "1fr minmax(40vw, 576px) 1fr",

    [mq.tablet]: {
      gridTemplateColumns: "1fr minmax(40vw, 768px) 1fr",
    },
    [mq.desktop]: {
      gridTemplateColumns: "1fr minmax(40vw, 992px) 1fr",
    },
    [mq.large]: {
      gridTemplateColumns: "1fr minmax(40vw, 1200px) 1fr",
    },
  });

  const gridStyle = css({
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={gridContainer}>
        <div className={silverBackgound}></div>
        <div className={gridStyle}>
          <NavBar />
        </div>
        <div className={silverBackgound}></div>

        <div className={silverBackgound}></div>
        <div className={gridStyle}>
          <FeatureSection isHero content={content.hero} background="silver" />
        </div>
        <div className={silverBackgound}></div>

        <div></div>
        <div className={gridStyle}>
          <HeadingCard content={headingCardsContent[0]}></HeadingCard>
          <LogoArray></LogoArray>
        </div>
        <div></div>

        <div></div>
        <div className={gridStyle}>
          <HeadingCard content={headingCardsContent[1]}></HeadingCard>
          <IconFeatureCard></IconFeatureCard>
 
          
        </div>
        <div></div>

        <div></div>
        <div className={gridStyle}>
          <FeatureSection isImageFirst content={content.feature1} />
        </div>
        <div></div>

        <div></div>
        <div className={gridStyle}>
          <FeatureSection isImageFirst content={content.feature2} />
        </div>
        <div></div>

        <div></div>
        <div className={gridStyle}>
          <HeadingCard content={headingCardsContent[2]}></HeadingCard>
        </div>
        <div></div>
      </div>
    </ThemeProvider>
  );
}
