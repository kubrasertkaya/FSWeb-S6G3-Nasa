import React from "react";

const ADOPViewer=(props)=>{
    const {apod}=props;
    return (
        <div>
          <p>{apod.date}</p>
          <p>{apod.explanation}</p>
          <img src={apod.hdurl} alt={apod.explanation} />
          <p>
            {apod.media_type}
            {apod.service_version}
          </p>

          <div>
            {apod.title}
            <img src={apod.url} alt={apod.explanation} />
          </div>
        </div>
      )
};

export default ADOPViewer;