import React from 'react';
import Image from '../components/Image'

export default function ItemLists(props) {
  const { data } = props;
  return (
    data.map((List) => {
      const filename = List.image01;
      return (
        <div className="col-2 col-2-small">
          <div className="grid">
            <Image filename={filename} alt={List.name} />
          </div>
        </div>
      );
    })
  );
}
  