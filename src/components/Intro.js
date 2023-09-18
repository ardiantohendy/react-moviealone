import "../style/landingpage.css";
import { Button } from "react-bootstrap";

const IntroLanding = () => {
  return (
    <div className="intro">
      <h1>Movie Alone</h1>
      <p>Watch comfortable even if you don't have couple</p>
      <div className="introButton">
        <Button>See All Lists</Button>
      </div>
    </div>
  );
};

export default IntroLanding;
