import { VariableSizeList } from "react-window";
const ListHandler = (data) => {
    const getItemSize=index =>{return data[index].length}
    const Row = ({index,style})=>(
        <div style={{style}}>{data[index]}</div>
    )
    return ( 
    <VariableSizeList height={500} width={500} itemCount={data.length} itemSize={getItemSize}>
        {Row}
    </VariableSizeList>

     );
}
 
export default ListHandler;