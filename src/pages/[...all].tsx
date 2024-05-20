import { Link } from "react-router-dom";
import Button from "../components/button";
const astronaut = new URL("./astronaut.png", import.meta.url).href;
const stars = new URL("./stars.png", import.meta.url).href;

function All() {
  return (
    <div className="bg-black h-screen w-screen absolute left-0 top-0">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${stars}')`,
        }}
      >
        <span className="absolute left-[8vw] top-[18vw] h-[12vw] w-[14vw] z-10 rotate-[38deg]" />
        <section className="h-full w-full flex justify-center items-center">
          <div>
            <img
              src={astronaut}
              className="absolute left-[8vw] top-[18vw] h-[10vw] w-auto rotate-[38deg]"
              draggable="false"
            />
            <h2 className="text-2xl mt-2">404</h2>
            <p>Your lost in space!</p>
            <br />
            <Link to="/">
              <Button className="mt-1" look="space">
                Home
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default All;
