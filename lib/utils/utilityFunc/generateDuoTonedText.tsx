import type { duoToneDirection } from "@/lib/components/atoms/Typography/Typography";

const generateDuoTonedText = (
    text: string | React.ReactNode,
    direction: duoToneDirection,
    words: number,
    onNewLine?: boolean,
  ) => {
    if (typeof text !== "string") {
      return text;
    }

    const splitText = text.split(" ");

    let firstPart = splitText.slice(0, -words).join(" ");
    let secondPart = splitText.slice(-words).join(" ");

    const finalText =
      direction === "start" ? (
        <>
          <span>{firstPart}</span> {onNewLine && <br></br>} {secondPart}
        </>
      ) : (
        <>
          {firstPart} {onNewLine && <br></br>} <span>{secondPart}</span>
        </>
      );

    return finalText;
  };

  export default generateDuoTonedText