import React from 'react';
  
function DisplaySimpsons({quote}) {
  return (
    <div className="DisplaySimpsons">
      <img
        src={quote.image}
        alt={quote.character}
      />
      <div>
       
        <h3> {quote.character} </h3>
         
        <div>  {quote.quote} </div>
      </div>
      
    </div>
  );
};
  
export default DisplaySimpsons;