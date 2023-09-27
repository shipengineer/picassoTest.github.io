import React, { useState, useEffect, getLoading } from 'react';
import { useGetPostsQuery } from '../../shared/api/api';
const InfiniteScroll = ({ data, renderItem }) => {
  const post = data?.results ?? [];
  const [list, setList] = useState(post.slice(0, 10));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  getLoading = () => {
    return loading;
  };
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        setLoading(true);
      return;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    if (page * 10 >= post.length) return setLoading(false);
    setTimeout(() => {
      setList(list.concat(post.slice(page * 10, page * 10 + 10)));
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      {list.map(renderItem)}
      {loading && <p>Loading...</p>}
    </>
  );
};

export default InfiniteScroll;
