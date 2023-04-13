
import Profile from './Profile/Profile';
import picture from  "./Assest/chrisEvan.png"
import './App.css';

function App() {
  return (
    <div style={{backgroundColor:"green", width:"70", margin: "auto", border: "1px solid black", padding: "10"}}>
    <h1 style={{textAlign: "center"}}></h1>

    <Profile
        fullName={"Chris Evan "} bio="The Captain America star Chris Evan, who was recently labeled as the sexiest man alive, is next on the list of best actors of 2022. This American actor rose to popularity with the Marvel movies and has done various other movies like Playing It Cool, Fantastic Four etc. His net worth is around $110 million."  profession={"Actor"}
      >
        <img src={picture}
        alt="photo"
        style={{width: "50%", marginleft: 250}}/>
      </Profile>
      
    </div>
  );
}

export default App;
