import React, { useState, useEffect } from 'react';
import Image from '../components/Image'

export default function ItemLists(props) {
  const { data } = props;
  const [itemListData, setItemListData] = useState([])
  
  useEffect(() => {
    setItemListData(data);
  },[]);
  return (
    itemListData.map((List) => {
      const filename = `${List.image}`;
      return (
        <li>
          { List.noimage ? (
              <Image filename="no-image" alt={List.name} />
            ) : (
              <Image filename={filename} alt={List.name} />
            )
          }
        </li>
      );
    })
  );
}
  