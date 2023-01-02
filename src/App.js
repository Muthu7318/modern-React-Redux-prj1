import ProfileCard from "./ProfileCard";
import AlexaImage from "./Images/alexa.png";
import CortanaImage from "./Images/cortana.png";
import SiriImage from "./Images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>
      <ProfileCard
        image={AlexaImage}
        title="Alexa"
        handle="@alexa99"
      ></ProfileCard>
      <ProfileCard
        image={CortanaImage}
        title="Cortana"
        handle="cortana@98"
      ></ProfileCard>
      <ProfileCard
        image={SiriImage}
        title="Siri"
        handle="siri@97"
      ></ProfileCard>
    </div>
  );
}

export default App;
