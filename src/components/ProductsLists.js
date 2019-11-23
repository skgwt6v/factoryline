import React from 'react';
// import Image from '../components/Image'
import Slick from '../components/Slick'
export default function ItemLists(props) {
  const { data } = props;
  return (
    data.map((List) => {
      return (
        <React.Fragment>
        <div className="col-12"> 
          <h2>{List.name}</h2>
          <div className="row">
            <div className="col-5 col-12-small">
              <Slick data={[`${List.image01}`, `${List.image02}`]}/>
            </div>
            <div className="col-7 col-12-small">
              <p>{List.text}</p>
            </div>
          </div>
        </div>
        
          <hr />
        
        </React.Fragment>
      );
    })
  );
}
  