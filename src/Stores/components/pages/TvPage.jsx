import React from 'react';
import { tvData } from '../../data/tv';
import NavBar from '../NavBar';

const TvPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {tvData.map((item) => (
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

export default TvPage;
