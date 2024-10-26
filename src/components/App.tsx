import Typography from "@mui/material/Typography";
import image from './me.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} alt="Aniket Kulkarni" width="250" height="250"/>
        <Typography variant={"h1"}>Aniket Kulkarni</Typography>
        <Typography variant={"h5"}>
          Personal portfolio!!
        </Typography>
      </header>
    </div>
  );
}

export default App;
