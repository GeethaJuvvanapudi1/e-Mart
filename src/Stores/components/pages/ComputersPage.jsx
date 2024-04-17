import React from 'react';
import { computerData } from '../../data/computers';
import NavBar from '../NavBar';

const ComputersPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {computerData.map((item) => (
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

export default ComputersPage;
