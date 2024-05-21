import { Link } from "react-router-dom";
import Button from "../components/button";
import PrivacyPolicy from "../components/PrivacyPolicy"

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
      <PrivacyPolicy/>
    </>
  );
}

export default Home;
