import { useEffect, useState, useLayoutEffect } from 'react';
import { useFirstFetchQuery, useGetPostsQuery } from '../../shared/api/api';

const Posts = () => {
  const [postId, setPostId] = useState(21);
  const [page, setPage] = useState(1);
  const { currentData, isSuccess } = useFirstFetchQuery();
  const { data, isFetching, isLoading } = useGetPostsQuery(postId);
  const [post, setPost] = useState([]);
  useEffect(() => {
    if (isSuccess) {
      setPost((oldPost) => [oldPost, ...currentData]);
    }
  }, [isSuccess]);

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log('Fetching more data...');
        console.log(data);
        setPost((oldPost) => oldPost.concat(data));
        setPostId(postId + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [postId]);

  return (
    <>
      <h1>RTK Query infinite scroll</h1>
      <h2>Scroll down to automatically trigger the fetch of more data.</h2>
      {post.map(function (elem, i) {
        return <div key={i}>{elem.body}</div>;
      })}
    </>
  );
};

export default Posts;
