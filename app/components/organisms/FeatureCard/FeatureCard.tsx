import React from "react";
import Typography from "../../atoms/Typography/Typography";
import { css } from "@emotion/css";
import IconBadge from "../../molecules/IconBadge/IconBadge";

const FeatureCard = () => {
  const cardStyle = css({
    width: "300px",
    height: "260px",
  });
  return (
    <div className={cardStyle}>
      <IconBadge icon="BuildingIcon"></IconBadge>

      <Typography type="h3" variant="h3" align="center">
        Membership Organisations
      </Typography>
      <Typography type="p" variant="body3" align="center">
        Our membership management software provides full automation of
        membership renewals and payments
      </Typography>
    </div>
  );
};

export default FeatureCard;

// <IconBadge icon='BuildingIcon'></IconBadge>
// <IconBadge icon='HandsIcon'></IconBadge>
// <IconBadge icon='PeopleIcon'></IconBadge>
