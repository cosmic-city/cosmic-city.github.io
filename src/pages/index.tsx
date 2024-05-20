import { Link } from "react-router-dom";
import Button from "../components/button";
import Hotjar from '@hotjar/browser';

const siteId = 4989916;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function Home() {
  return (
    <>
      <div>
        <h2 className="text-2xl">Cosmic City</h2>
        <p>The online city for students by students</p>
      </div>
      <Link to="/games">
        <Button look="brand" className="mt-2">
          Start playing!
        </Button>
      </Link>
    </>
  );
}

export default Home;
