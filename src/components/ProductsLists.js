import React from 'react';
import Image from '../components/Image'
export default function ItemLists(props) {
  const { data } = props;
  const style = {
    marginTop: '120px'
  }
  return (
    data.map((List) => {
      return (
        <React.Fragment>
          <div id={List.id} className="col-12">
            <h2 style={style}>{List.name}</h2>
          <div className="row">
            <div className="col-3 col-6-small">
                <Image filename={List.image01} alt={List.name} />
            </div>
            <div className="col-3 col-6-small">
                <Image filename={List.image02} alt={List.name} />
            </div>
            <div className="col-6 col-12-small">
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
  