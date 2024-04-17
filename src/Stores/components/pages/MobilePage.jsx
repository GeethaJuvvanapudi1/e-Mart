import React from 'react';
import { mobileData } from '../../data/mobiles';
import NavBar from '../NavBar';

const MobilePage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {mobileData.map((item) => (
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

export default MobilePage;
