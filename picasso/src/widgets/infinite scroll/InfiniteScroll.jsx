import React, { useState, useEffect } from "react";

const InfiniteScroll = ({ data, renderItem }) => {
  const [list, setList] = useState(data.slice(0, 10));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setLoading(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!loading) return;
    if (page * 10 >= data.length) return setLoading(false);
    setTimeout(() => {
      setList(list.concat(data.slice(page * 10, page * 10 + 10)));
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