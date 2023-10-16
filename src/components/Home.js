import React from "react";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="content">
        <p>
          Reach is <span className="tech">fingerprint Blockchain</span> based
          chatting application for{" "}
          <span className="user">
            Normal, Deaf and Blind people altogether.
          </span>
        </p>
      </div>
      {/* features */}
      <div className="features">
        <ul className="features_list">
          <li className="fetaures_data">No Phone numbers Taken</li>
          <li className="fetaures_data">No Username, Passwords needs to set</li>
          <li className="fetaures_data">No SMS Support</li>
          <li className="fetaures_data">For Signup just fingerprint taken</li>
        </ul>
      </div>
      <div className="status">
        <p>Currently in Development...</p>
      </div>
    </>
  );
};

export default Home;
