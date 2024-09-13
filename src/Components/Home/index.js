import React from "react";
import "./index.css";
import HomeBG from '../Assests/homeBG.png'

const Home = () => {
    const styles = {
        background: {
            backgroundImage: `url(${HomeBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        }
    };
  return (
    <div className="home-container" style={styles.background}>
      <div className="head-container">
        <h1 className="header">Find The Perfect <span className="job-word">Job</span></h1>
        <p>Live Yours Dreams</p>
      </div>
    </div>
  );
};
export default Home;
