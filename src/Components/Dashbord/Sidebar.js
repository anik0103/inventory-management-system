import {Link} from "react-router-dom";
import React from "react";

const Sidebar=()=>{
    return(
        <div className="h-96 w-1/6 color-cyan-400">
            <ul>
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/My Orders">My Orders</Link>
                </li>
                <li>
                    <Link to="/Browse Products">Browse Products</Link>
                </li>
                <li>
                    <Link to="/request Products">request Products</Link>
                </li>
                <li>
                    <Link to="/Logout">Logout</Link>
                </li>
                
            </ul>

        </div>
    )

}
export default Sidebar;