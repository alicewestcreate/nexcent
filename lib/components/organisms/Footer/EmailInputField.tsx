import { customTheme as theme} from "@/app/theme";
import generateSpacingString from "@/lib/utils/utilityFunc/generateSpacingString";
import { css } from "@emotion/css";
import React from "react";

const EmailInputField = () => {
    
    const inputFieldStying = css({
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        height: "40px",
        width: "255px",
        borderRadius: theme.spacing.baseSpacing.s,
        padding: generateSpacingString(10, 10),
        display: "flex",
        justifyContent: "space-between",
    })

    const input = css({
        background: 'transparent',
        boxShadow: 'none',
        border: 'none',
        outline: 'none', 
        color: theme.colors.neutrals.white,
        fontSize: theme.font.size.body3,
        flexGrow: '1',
        '&::placeholder': {
            color: theme.colors.neutrals.white,
        }
    })

  return (
    <form>
    
    <div className={inputFieldStying}>
      <input className={input} type="text" id="email" name="email" placeholder="Your email address"></input>
      <input type="submit" value=">>"></input>
      </div>
    </form>
  );
};

export default EmailInputField;
