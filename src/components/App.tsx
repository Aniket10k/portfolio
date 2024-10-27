import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavigationBar from "./NavigationBar/NavigationBar";
import Content from "./Content/Content";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <NavigationBar />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
