import React, { useEffect, useState } from "react";
import "./Statewise.css";

const StateWise = () => {
  const [data, setdata] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setdata(actualData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5">
            <span className="font-weight-bold"> INDIA </span>Covid-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recoverd</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((currE, inde) => {
                return (
                  <tr key={inde}>
                    <td>{currE.state}</td>
                    <td>{currE.confirmed}</td>
                    <td>{currE.recovered}</td>
                    <td>{currE.deaths}</td>
                    <td>{currE.active}</td>
                    <td>{currE.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
