import { useState, useEffect } from 'react';

const handleOnScroll = (callback) => () => {
  const scrollTop = (document.documentElement && document.documentElement.scrollTop) ||
                    document.body.scrollTop;
  const scrollHeight = (document.documentElement && document.documentElement.scrollHeight) ||
                       document.body.scrollHeight;
  const clientHeight = document.documentElement.clientHeight ||
                       window.innerHeight;
  const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

  if(scrolledToBottom) {
    callback(true);
  }
}

function useInfiniteScroll(loadMore, initPage=1) {
  const [ data, setData ] = useState([]);
  const [ isFetching, setIsFetching ] = useState(true);
  const [ page, setPage ] = useState(initPage);

  useEffect(() => {
    loadMore(30, page)
      .then(docs => {
        setData(docs);
        setIsFetching(false);
        setPage(page + 1);
      })

    window.addEventListener("scroll", handleOnScroll(setIsFetching));
    return () => window.removeEventListener("scroll", handleOnScroll(setIsFetching));
  }, [])

  useEffect(() => {
    if(!isFetching) return;

    loadMore(30, page)
      .then(docs => {
        setData([...data, ...docs]);
        setIsFetching(false);
        setPage(page + 1);
      })

  }, [isFetching]);

  return { data, isFetching };
}

export default useInfiniteScroll;
