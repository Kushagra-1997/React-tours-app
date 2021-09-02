import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";

// API URL:  https://course-api.com/react-tours-project

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // fetching the data using async await and only once as the component rerenders

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) =>tour.id !== id);
    setTours(newTours);
  };

  if(tours.length === 0){
    return(
      <>
      <main className="after_content">
        <h2>No tours left</h2>
        <button onClick={()=>fetchData()}>Refresh</button>
      </main>
      </>
    )
  }

  return (
    <section className="container">
      <Tours tours={tours} removeTour={removeTour} />
    </section>
  );
}

export default App;
