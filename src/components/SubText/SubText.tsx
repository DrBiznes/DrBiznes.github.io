import { useAsciiText, deltaCorpsPriest1 } from 'react-ascii-text';

export const SubText = () => {
  const subTextRef = useAsciiText({
    font: deltaCorpsPriest1,
    text: ["ENGAGE", "with EVERYTHING", "EXPLORE", "my stuff"],
    animationInterval: 400,
    animationDelay: 1000,
    animationDirection: "vertical",
    animationCharacters: "▒ ░ █",
    animationLoop: true,
    animationCharacterSpacing: 0,
    animationSpeed: 20,
  }) as React.RefObject<HTMLPreElement>;

  return (
    <pre 
      ref={subTextRef}
      className="text-white z-30 transform scale-[0.5] whitespace-pre"
    ></pre>
  );
}; 