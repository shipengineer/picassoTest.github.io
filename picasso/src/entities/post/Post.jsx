import { useNavigate, useParams } from "react-router";
import { useGetPostByIdQuery } from "../../shared/api/api";
import styles from './post.module.css'
const Post  = () => {
    const navigation = useNavigate()
    const params = useParams();
    const {data} = useGetPostByIdQuery(params.id);
    const post = data?? [];
 
    return ( <section>
       <section  className={styles.section}>
          <span className={styles.span}>{post.id}</span>
          <h3 className={styles.h3}>{post.title}</h3>
          <p className={styles.p}> {post.body} </p>
          <button onClick={()=>navigation(-1)} className={styles.link}>Назад</button>
          <h4 className={styles.h4}>{post.userId}</h4>
          
          </section>
    </section> );
}
 
export default Post;    