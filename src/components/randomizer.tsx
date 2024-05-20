import { useEffect, useState, ReactNode } from "react";

function Randomizer() {
  const [random, setRandom] = useState<ReactNode | null>(null);
  const Emoji = ({ src }: { src: string }) => {
    return <img src={src} className="h-8 w-8 inline-block" />;
  };
  const randomize = () => {
    const a = [
      <>idk what x² equals</>,
      <>your cooked.</>,
      <>Is that a teacher behind you?</>,
      <>Erm, What the sigma?</>,
      <>
        This UI is very similar to something...{" "}
        <Emoji src="/image/emojis/sus.png" />
      </>,
      <>roblox &lt; minecraft & fortnite</>,
      <>
        never gona give u up <Emoji src="/image/emojis/rickroll.gif" />
      </>,
      <>gta6 = irl</>,
      <>
        off+reload gives you free v-bucks{" "}
        <Emoji src="/image/emojis/mewing.gif" />
      </>,
      <>alt+tab to switch windows</>,
      <>
        ik where u live... <Emoji src="/image/emojis/duo.png" />
      </>,
      <>
        shh dont say anything <Emoji src="/image/emojis/shhmewing.gif" />
      </>,
      <>are you a mewing king?</>,
      <>sigma ohio rizzler</>,
    ];
    const i = Math.floor(Math.random() * a.length);
    setRandom(a[i]);
  };

  useEffect(() => {
    randomize();
  }, []);
  return (
    <>
      <p className="h-8 flex justify-center items-center">{random}</p>
    </>
  );
}

export default Randomizer;
