import React from "react";
import './list.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Datatable from "../../components/datatable/Datatable";

function List(){
    return(
        <div className="List">
            <Sidebar/>

            <div className="list_container">
                <Navbar />
                <Datatable/>
            </div>
        </div>
    )
}

export default List;