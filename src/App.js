import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const fetchData = () => {
    fetch("https://test-static-webapp.azurewebsites.net/api/Function1")
      .then((res) => res.json())
      .then()
      .catch();
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default App;
