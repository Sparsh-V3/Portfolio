import "./intro.css";

function Intro() {
  return (
    <div id="intro">
      <div className="intro-left">
        <h1>Hi, this is Sparsh Vardhan</h1>
      </div>
      <div className="intro-right">
        <div className="container">
          <div className="pic">
            <img src="src/assets/Intro/intro_pic.png" alt="Profile Pic" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
