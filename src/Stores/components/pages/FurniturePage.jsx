import React from 'react';
import { furnitureData } from '../../data/furniture';
import NavBar from '../NavBar';

const FurniturePage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {furnitureData.map((item) => (
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

export default FurniturePage;
