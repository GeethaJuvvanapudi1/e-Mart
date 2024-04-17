import React from 'react';
import { acData } from '../../data/ac';
import NavBar from '../NavBar';

const ACPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {acData.map((item) => (
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

export default ACPage;
