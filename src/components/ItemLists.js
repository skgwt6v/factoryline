import React from 'react';
import Image from '../components/Image'

export default function ItemLists(props) {
  const { data, columns , maxLength } = props;
  return (
    data.map((List, Index) => {
      const filename = List.noimage ? 'no-image' : `${List.image}`;
      const MaxLength = maxLength !== undefined ? Index < maxLength : true;
      const textLength = List.text.length > 42 ? List.text.substr(0, 40) + '...' : List.text;
      const colClasseName = `col-${columns} col-6-small`;
      if (MaxLength) {
        return (
          <div className={colClasseName}>
            <div className="grid">
              <figure class="effect-sadie">
                <Image filename={filename} alt={List.name} />
                <figcaption>
                  <h3>{List.name}</h3>
                  <p>{textLength}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        );
      } else {
        return false
      };
    })
  );
}
  