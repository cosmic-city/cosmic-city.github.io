import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../data";

function Card({ id }: { id: string }) {
  const [game, setData] = useState<any | null>(null);

  useEffect(() => {
    const results = data.find((game) => game.id === id);
    if (results) {
      setData(results);
    }
  }, []);

  const Loading = () => {
    return (
      <div className="animation-pulse bg-[#121212] bg-center bg-cover bg-no-repeat inline-block h-36 w-36 rounded-xl" />
    );
  };
  return (
    <>
      {game ? (
        <Link to={`/game/${id}`}>
          <div className="group relative overflow-hidden inline-flex justify-center items-center bg-[#111] h-36 w-36 rounded-xl transition active:scale-90">
            <img
              src={game.image}
              className="w-full h-full absolute object-cover group-hover:opacity-75"
            />
            <span className="opacity-0 px-0 mx-0 -bottom-2 max-w-28 mb-2 transition-all duration-200 absolute group-hover:bottom-0 group-hover:opacity-100 font-bold text-sm text-white [text-shadow:0px_0px_0.2rem_#000]">
              {game.title}
            </span>
          </div>
        </Link>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Card;
