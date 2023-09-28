import { useEffect, useState, useLayoutEffect } from 'react';
import { useGetPostsQuery } from '../../shared/api/api';

const Posts = () => {
  const [page, setPage] = useState(1);
  const { data,  isFetching } = useGetPostsQuery(page);
  const post = data ?? [];
 

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching more data...");
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  return (
    <>
      <h1>RTK Query infinite scroll</h1>
      <h2>Scroll down to automatically trigger the fetch of more data.</h2>
      {post.map(function (elem, i) {
        return <section key={i} >
          <span>{elem.id}</span>
          <h3>{elem.userId}</h3>
          <h4> {elem.title} </h4>
          <span> {elem.body} </span>
          </section>;
      })}
    </>
  );
};

export default Posts;
