import React from 'react';
import { booksData } from '../../data/books';
import NavBar from '../NavBar';

const BooksPage = () => {
  return (
    <>
      <NavBar />
      <div className="pageSection">
        {booksData.map((item) => (
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

export default BooksPage;
