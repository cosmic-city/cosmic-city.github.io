import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { DataTypes } from "../../types.ts";
import { data } from "../../data.ts";
import All from "../[...all].tsx";

function Game() {
  const { id } = useParams();
  const frame = useRef<HTMLDivElement | null>(null);
  const [game, setGame] = useState<DataTypes | null>(null);

  useEffect(() => {
    const results = data.find((element) => element.id === id);
    if (results) {
      setGame(results);
    } else {
      setGame(null);
    }
  }, [id]);

  const enterFullscreen = () => {
    if (frame.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        frame.current.requestFullscreen();
      }
    }
  };

  return (
    <>
      {game ? (
        <>
          <div
            ref={frame}
            className="aspect-video h-[36rem] relative rounded mb-2"
          >
            <iframe
              src={game.embed}
              className="w-full h-[calc(100%-2.5rem)] absolute top-0 left-0"
            ></iframe>
            <div className="w-full h-[2.5rem] text-left flex items-center justify-start absolute bottom-0 left-0 bg-[#111] z-10 overflow-hidden">
              <h3 className="ml-2 text-sm flex justify-center items-center gap-1 m-0">
                <img
                  src="/logo.svg"
                  className=" h-7 aspect-square rounded-md align-middle"
                />{" "}
                Cosmic City
              </h3>
              <span className="ml-2 mr-2">|</span>
              <p className="m-0">{game.title}</p>
              <button
                onMouseDown={() => enterFullscreen()}
                className="absolute group h-full aspect-square right-0 bottom-0 border-none outline-none flex justify-center items-center bg-[#191919] hover:bg-[#222]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 group-active:scale-90"
                  fill="#fff"
                >
                  <path d="M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"></path>
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <All />
      )}
    </>
  );
}

export default Game;
