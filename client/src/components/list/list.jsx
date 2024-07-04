import "./list.scss";
import {listData} from "../../lib/dummydata.js";
import Card from "../card/Card.jsx";

function List ({posts}){
    return (
        <div className="List">
            {posts.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    );
}

export default List;