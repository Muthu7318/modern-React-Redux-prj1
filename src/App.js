import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png";
import CortanaImage from "./Images/cortana.png";
import SiriImage from "./Images/siri.png";
import Animal from "./Animals";

function App() {
  return <Animal></Animal>;
}

/* 
--------------This is for profile card app-----------------
function App() {
  return (
    <div>
      <secton className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </secton>
      <div className="containers">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                description="Alexa was created by amazon."
                image={AlexaImage}
                title="Alexa"
                handle="@alexa99"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                description="Cortana was created by microsoft."
                image={CortanaImage}
                title="Cortana"
                handle="cortana@98"
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                description="Siri was created by apple."
                image={SiriImage}
                title="Siri"
                handle="siri@97"
              ></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
---------------------------------------------------------------
*/
export default App;
