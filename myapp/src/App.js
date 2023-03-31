import logo from './logo.svg';
import './App.css';
import picture from "./Assets/image1.jpg"
import Profile from './Profile/Profile';

function App() {
  return (
    <div style={{backgroundColor:"lightblue", width:"60", margin: "auto", border: "1px solid black", padding: "10"}}>
      <h1 style={{textAlign: "center"}}></h1>
      
      <Profile
        fullName={"Ayomikun S.O "} bio="I am a web developer. I spend most of my day, practicing and experimenting with HTML, CSS, and JavaScript; dabbling with React and Nodes.js; and inhaling a wide variety of potentially useless information through a few hundred RSS feeds. I build websites that delight and inform. I do it well but alway still learning  everyday. A slight clarification of the above: I’m actually a STATISTICS student cleverly disguised as a web developer. Since it was relatively clear early on that it would be slightly more than difficult to make a living sitting under a tree while solving  statistical problems, I’ve focused my energies on the web, which brings improvement in decision making.profession Web Developer"
      >
        <img src={picture}
        alt="photo"
        style={{width: "50%", marginleft: 250}}/>
      </Profile>
    </div>
  );
}


export default App;
