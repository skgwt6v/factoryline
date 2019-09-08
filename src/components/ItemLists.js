import React from 'react';
import Image from '../components/Image'
import ItemListsData from '../data/ItemListsData'

export default function ItemLists() {
  return (
    ItemListsData.map((List) => {
      const filename = `${List.image}`;
      return (
        <li>
          <Image filename={filename} alt={List.name} />
        </li>
      );
    })
  );
}
