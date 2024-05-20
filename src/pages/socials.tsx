import { Link } from "react-router-dom";
import Button from "../components/button";

function Socials() {
  return (
    <>
      <div>
        <h2 className="text-2xl">Socials</h2>
        <p>Subscribe to @nathanielrz for coding tutorials!</p>
      </div>
      <Link to="https://www.youtube.com/@nathanielrz?sub_confirmation=1">
        <Button look="subscribe" className="mt-2">
          Subscribe
        </Button>
      </Link>
    </>
  );
}

export default Socials;
