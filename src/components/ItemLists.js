import React from 'react';
import ItemListsData from '../data/ItemLists'

export default function ItemLists() {
  return (
    ItemListsData.map(List => (
      <li>
        <img src={List.image} alt={List.name}/>
      </li>
    ))
  );
}
