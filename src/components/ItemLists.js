import React from 'react';
import Image from '../components/Image'
import { Link } from 'gatsby';

export default function ItemLists(props) {
  const { data } = props;
  return (
    data.map((List) => {
      const filename = List.image01;
      const anker = "/Products/#" + List.id;
      return (
        <div className="col-2 col-3-small">
          <div className="grid">
            <Link to={anker}>
              <Image filename={filename} alt={List.name} />
            </Link>
          </div>
        </div>
      );
    })
  );
}
  