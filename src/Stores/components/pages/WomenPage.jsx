import React from 'react';
import NavBar from '../NavBar';
import { womanData } from '../../data/woman';

const WomenPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {womanData.map((item) => (
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
export default WomenPage;
