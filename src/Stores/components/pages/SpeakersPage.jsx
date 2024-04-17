import React from 'react';
import { speakerData } from '../../data/speaker';
import NavBar from '../NavBar';

const SpeakerPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {speakerData.map((item) => (
          <div key={item.id}> {/* Add a unique key for each item */}
            <div className="pageImage">
              <img src={item.image} alt="" />
            </div>
            <div className="proModel">
              {item.company}, {item.model} {/* Render specific properties */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SpeakerPage;
