import React from "react";
import './Home.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/charts/Chart";
import List from "../../components/table/List";

function Home(){
    return(
        <div className="home">
            <Sidebar />
            <div className="home_container">
                <Navbar />
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="order"/>
                    <Widget type="earning"/>
                    <Widget type="balance"/>
                </div>

                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
                </div>

                <div className="list_container">
                    <div className="list_title">Lastest Transactions</div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Home;