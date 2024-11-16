import React from "react";
import { FaMicrosoft, FaGoogle, FaServicestack, FaPaypal } from "react-icons/fa";
import { SiCisco, SiNvidia, SiOracle } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Hyderabad, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Oracle",
      location: "Bengaluru, India",
      openPositions: 5,
      icon: <SiOracle />,
    },
    {
      id: 3,
      title: "Google",
      location: "Banglore, India",
      openPositions: 20,
      icon: <FaGoogle />,
    },
  ];
  const companies2 = [
    {
      id: 1,
      title: "NVidia",
      location: "Hyderabad, India",
      openPositions: 10,
      icon: <SiNvidia />,
    },
    {
      id: 2,
      title: "PayPal",
      location: "Bengaluru, India",
      openPositions: 5,
      icon: <FaPaypal />,
    },
    {
      id: 3,
      title: "Cisco",
      location: "Banglore, India",
      openPositions: 20,
      icon: <SiCisco />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
        <div className="banner">
          {companies2.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;