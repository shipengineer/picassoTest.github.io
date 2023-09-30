import { useEffect} from 'react';
import { useGetPostsQuery } from '../../shared/api/api';
import { Link} from 'react-router-dom';
import styles from './post.module.css'
import { useDispatch, useSelector } from 'react-redux';
import pageSlice from '../../shared/store/pageSlice';

const Posts = () => {
  const page =useSelector((state)=>state.pageSlice);
  const dispatch = useDispatch()
  const { data,  isFetching } = useGetPostsQuery(page);
  const post = data ?? [];
 

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY*1.1 >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        console.log("Fetching additional data...");
        dispatch(pageSlice.actions.increment())
        // dispatch(pageSlice.actions.increment)
        // setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching,dispatch]);

  return (
    <>
      
      {post.map(function (elem, i) {
        return <section key={i} className={styles.section}>
          <span className={styles.span}>{elem.id}</span>
          <h3 className={styles.h3}>{elem.title}</h3>
          <p className={styles.p}> {elem.body} </p>
          <Link to={`/picassoTest.github.io/posts/${elem.id}`} className={styles.link}>Подробнее</Link>
          <h4 className={styles.h4}>{elem.userId}</h4>
          
          </section>;
      })}
    </>
  );
};

export default Posts;
