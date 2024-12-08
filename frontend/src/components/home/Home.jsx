import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
        Streamline your <br /> work and life for lasting transformation.
        </h1>
        <p>
        Master your tasks and find balance <br/> with the world’s top productivity app 
         
        </p>
        <button class="home-btn p-2">Your Todo List</button>
      </div>
    </div>
  );
};

export default Home;
