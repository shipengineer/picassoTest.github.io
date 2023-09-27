import { useGetPostQuery } from "../../shared/api/api";
import ListHandler from "../../shared/react-window/ListHandler";
import InfiniteScroll from "../../widgets/infinite scroll/InfiniteScroll";
import {VariableSizeList} from "react-window"
const Posts = () => {

    // const {data,error,isLoading} = useGetPostQuery();
    // console.log(data);
    
    
    const renderItem = (elem)=> {return (<>
        <div>{elem.userId}</div>
        <div>{elem.id}</div>
        <div>{elem.title}</div>
        <div>{elem.body}</div>
        </>)
    }
    return    (
    <ListHandler data = {data}/>
        // <InfiniteScroll
        // data = {data}
        // renderItem={renderItem}/>
    );

}
 
export default Posts;