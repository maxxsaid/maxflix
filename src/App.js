import "./App.css";
import Banner from "./Banner";
import requests from "./requests";
import Row from "./Row";

function App() {
  return (
    <div className="app">
      <h1>MAXFLIX</h1>
      {/* Nav */}
      <Banner />
      <Row
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Action" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumantaries} />
      <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchURL={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
