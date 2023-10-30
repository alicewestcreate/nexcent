import React from "react";
import HeadingCard from "../HeadingCard/HeadingCard";
import MetricTileWrapper from "../../molecules/MetricTile/MetricTileWrapper";
import { css } from "@emotion/css";
import { MediaQuery as mq, MQ } from "@/lib/utils/Constants";


interface AchievementsProps {
    content: {
        icon: string;
        subject: string;
        stats: string;
    }[]
}
const AchievementsSection = ({content}:AchievementsProps ) => {

    const isDesktop = window.matchMedia(`(min-width: ${MQ.desktop}px)`).matches
    const alignment = isDesktop ? "left" : "center"


    const gridStyling = css({
        display: "grid",
        justifyContent: 'center',
        gap: "32px",
        [mq.desktop]: {
            gridTemplateColumns: "1fr 1fr",
        },
        alignItems:"center",

      });


      

  return (
    <div className={gridStyling}>
      <div>
        <HeadingCard
          content={{
            heading: "Helping a local business reinvent itself",
            copy: "We reached here with our hard work and dedication",
          }}
          alignment={alignment}
          duoTone={{ direction: "start", value: 3, nextLine: true }}
        ></HeadingCard>
      </div>
      <div>
        <MetricTileWrapper
          metricTileList={content}
        ></MetricTileWrapper>
      </div>
    </div>
  );
};

export default AchievementsSection;
