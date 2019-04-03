import React from 'react'

import getMockData from './getMockData';
import useInfiniteScroll from './hooks/useInfiniteScroll';

function DataList() {
  const { data, isFetching } = useInfiniteScroll(getMockData);

  return (
    <ul>
      {
        data.map(i => <li>{i}</li>)
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ul>
  )
}

export default DataList;
