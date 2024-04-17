import React from 'react';
import NavBar from '../NavBar';
import { menData } from '../../data/men';

const MenPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {menData.map((item) => (
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

export default MenPage;
