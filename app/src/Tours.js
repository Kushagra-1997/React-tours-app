import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  console.log(tours);
  return (
    <section className="tours_component">
      <h1>Our Tours</h1>
      <hr className="blue_underline" />
      <div className="tours_component_data">
        {tours.map((tour) => {          
          return (
            <Tour key={tour.id} {...tour} removeTour={removeTour}/>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
