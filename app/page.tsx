"use client";
import React from "react";
import { css } from "@emotion/css";
import { ThemeProvider, useTheme } from "@emotion/react";
import type { CustomTheme } from "@/app/theme";
import NavBar from "@/lib/components/organisms/NavBar/NavBar";
import FeatureSection from "@/lib/components/organisms/FeatureSection/FeatureSection";
import HeadingCard from "@/lib/components/molecules/HeadingCard/HeadingCard";
import LogoArray from "@/lib/components/molecules/LogoArray/LogoArray";
import { MediaQuery as mq } from "@/lib/utils/Constants";
import FlexBox from "@/lib/components/organisms/FeatureCardWrap/FeatureCardWrap";
import Typography from "@/lib/components/atoms/Typography/Typography";
import TwoColumn from "@/lib/components/molecules/TwoColumn/TwoColumn";
import MetricTileWrapper from "@/lib/components/molecules/MetricTile/MetricTileWrapper";
import Button from "@/lib/components/atoms/Button/Button";
import RightArrow from "@/lib/components/atoms/Icons/RightArrow";
export default function Home() {
  const theme = useTheme() as CustomTheme;

  const silverBackgound = css({
    backgroundColor: theme.colors.neutrals.silver,
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
    "& > :first-child": {
      // border: 'black solid 1px',
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
      <div className={gridContainer}>
        <GridRow background={silverBackgound}>
          <NavBar />
        </GridRow>

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
          <FlexBox contents={featureCardsContent}></FlexBox>
        </GridRow>

        <GridRow>
          <FeatureSection isImageFirst content={content.feature1} />
        </GridRow>

        <GridRow background={silverBackgound}>
          <TwoColumn
            firstChild={
              <>
                <HeadingCard
                  content={{
                    heading: "Helping a local business reinvent itself",
                    copy: "We reached here with our hard work and dedication",
                  }}
                  alignment="left"
                  duoTone={{ direction: "start", value: 3, nextLine: true }}
                ></HeadingCard>
              </>
            }
            secondChild={
              <>
                <MetricTileWrapper
                  metricTileList={metricTileContent}
                ></MetricTileWrapper>
              </>
            }
          ></TwoColumn>
        </GridRow>

        <GridRow>
          <FeatureSection isImageFirst content={content.feature2} />
        </GridRow>

        <GridRow background={silverBackgound}>
          <TwoColumn
            firstChild={
              <>
              </>
            }
            secondChild={
              <>
              <Typography text={"Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna."}></Typography>
              
              <Typography type={'h4'} variant={"h4"} color={"primary"} text={"Tim Smith"}></Typography>
              <Typography text={"British Dragon Boat Racing Association"}></Typography>
              <LogoArray maxItemsToShow={6}></LogoArray>
              <Button variant={"tertiary"}>Meet all customers </Button> <RightArrow color={theme.colors.primary}></RightArrow>
              </>
            }
          ></TwoColumn>
        </GridRow>

        <GridRow>
          <HeadingCard content={headingCardsContent[2]}></HeadingCard>
        </GridRow>
        <GridRow>
          <FlexBox contents={featureCardsContent}></FlexBox>
        </GridRow>
        <GridRow>
          <Typography type={'h2'} variant={'h1'} align={"center"} text={'Pellentesque suscipit fringilla libero eu.'}></Typography>
          <Button variant="primary">Get a Demo</Button>
        </GridRow>
      </div>
    </ThemeProvider>
  );
}
