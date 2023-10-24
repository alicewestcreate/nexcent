"use client";
import React from "react";
import { css } from "@emotion/css";
import { ThemeProvider, useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import FeatureSection from "@/lib/components/organisms/FeatureSection/FeatureSection";
import HeadingCard from "@/lib/components/organisms/HeadingCard/HeadingCard";
import LogoArray from "@/lib/components/molecules/LogoArray/LogoArray";
import { MediaQuery as mq } from "@/lib/utils/Constants";
import CardWrap from "@/lib/components/organisms/FeatureCard/CardWrap";
import Navigation from "@/lib/components/organisms/Navigation/Navigation";
import AchievementsSection from "@/lib/components/organisms/AchievementsSection/AchievementsSection";
import CustomerReviewSection from "@/lib/components/organisms/CustomerReviewSection/CustomerReviewSection";
import ImageFeatureCardWrap from "@/lib/components/organisms/FeatureCard/ImageFeatureCardWrap";
import Demo from "@/lib/components/organisms/Demo/Demo";
import Footer from "@/lib/components/organisms/Footer/Footer";
export default function Home() {
  const theme = useTheme() as CustomTheme;

  const silverBackgound = css({
    backgroundColor: theme.colors.neutrals.silver,
  });
  const blackBackground = css({
    backgroundColor: theme.colors.neutrals.black,
  });

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

  const featureCardsContent = [
    {
      icon: "PeopleIcon",
      heading: "Membership Organisations",
      copy: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: "BuildingIcon",
      heading: "National Associations",
      copy: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      icon: "HandsIcon",
      heading: "Clubs And Groups",
      copy: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  const metricTileContent = [
    {
      icon: "PeopleIcon",
      subject: "Members",
      stats: "2,245,341",
    },
    {
      icon: "FingerIcon",
      subject: "Event Bookings",
      stats: "828,867",
    },
    {
      icon: "HandsIcon",
      subject: "Clubs",
      stats: "46,328",
    },
    {
      icon: "CreditCardIcon",
      subject: "Payments",
      stats: "1,926,436",
    },
  ];

  const imageFeatureCardContent = [
    {
      image: "laptop0.png",
      copy: "Creating Streamlined Safeguarding Processes with OneRen",
      link: "Readmore ",
    },
    {
      image: "laptop1.png",
      copy: "What are your safeguarding responsibilities and how can you manage them?",
      link: "Readmore ",
    },
    {
      image: "laptop2.png",
      copy: "Revamping the Membership Model with Triathlon Australia",
      link: "Readmore ",
    },
  ]

  const gridContainer = css({
    display: "grid",
    marginTop: '70px',
    gridTemplateColumns: "25px minmax(10vw, 1fr) 25px",

    [mq.tablet]: {
      gridTemplateColumns: "1fr minmax(10vw, 768px) 1fr",
    },
    [mq.desktop]: {
      gridTemplateColumns: "1fr minmax(10vw, 900px) 1fr",
      marginTop: '110px',
    },
    [mq.large]: {
      gridTemplateColumns: "1fr minmax(10vw, 1200px) 1fr",
    },
  });

  const gridStyle = css({
    paddingTop: "20px",
    paddingBottom: "20px",
    "& > :first-child": {
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  });

  const GridRow = ({
    background,
    children,
  }: {
    background?: string;
    children: React.ReactNode;
  }) => {
    return (
      <>
        <div className={background || ""}></div>
        <div className={`${gridStyle} ${background || ""}`}>{children}</div>
        <div className={background || ""}></div>
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Navigation></Navigation>
      <div className={gridContainer}>
        <GridRow background={silverBackgound}>
          <FeatureSection
            isHero
            content={content.hero}
            duoTone={{ direction: "end", value: 3 }}
          />
        </GridRow>

        <GridRow>
          <HeadingCard content={headingCardsContent[0]}></HeadingCard>
          <LogoArray></LogoArray>
        </GridRow>

        <GridRow>
          <HeadingCard content={headingCardsContent[1]}></HeadingCard>
        </GridRow>

        <GridRow>
          <CardWrap contents={featureCardsContent}></CardWrap>
        </GridRow>

        <GridRow>
          <FeatureSection isImageFirst content={content.feature1} />
        </GridRow>

        <GridRow background={silverBackgound}>
          <AchievementsSection content={metricTileContent}></AchievementsSection>
        </GridRow>

        <GridRow>
          <FeatureSection isImageFirst content={content.feature2} />
        </GridRow>

        <GridRow background={silverBackgound}>
          <CustomerReviewSection></CustomerReviewSection>
        </GridRow>

        <GridRow>
          <HeadingCard content={headingCardsContent[2]}></HeadingCard>
        </GridRow>
        <GridRow>
          <ImageFeatureCardWrap content={imageFeatureCardContent}></ImageFeatureCardWrap>
        </GridRow>
        <GridRow  background={silverBackgound}>
          <Demo></Demo>
        </GridRow>
        <GridRow background={blackBackground}>
          <Footer></Footer>
        </GridRow>
      </div>
    </ThemeProvider>
  );
}
