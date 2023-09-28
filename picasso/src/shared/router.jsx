import {createBrowserRouter } from 'react-router-dom'
import Posts from '../pages/posts/Posts';
import Post from '../entities/post/Post'

    const router = createBrowserRouter([
        {
            path: 'picassoTest.github.io/',
            element:(
                <Posts/>
            )
        },
        {
            path: "picassoTest.github.io/posts/:id",
            element:(
                <Post/>
            )
        }
    ])
   

 
export default router;