import React from 'react';
import { kitchenData } from '../../data/kitchen';
import NavBar from '../NavBar';

const KitchenPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {kitchenData.map((item) => (
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

export default KitchenPage;
