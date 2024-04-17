import React from 'react';
import { fridgeData } from '../../data/fridge';
import NavBar from '../NavBar';

const RefrigeratorPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {fridgeData.map((item) => (
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

export default RefrigeratorPage;
