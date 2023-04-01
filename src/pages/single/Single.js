import './single.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Chart from '../../components/charts/Chart';
import List from '../../components/table/List';

function Single(){
    return(
        <div className="Single">
            <Sidebar />
            <div className="single_container">
                <Navbar/>
                <div className="top">
                    <div className="left">
                        <div className="edit_btn">Edit</div>
                        <h3 className="title">Information</h3>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="item_img" />

                            <div className="details">
                                <h2 className="item_title">Jane Doe</h2>

                                <div className="item_details">
                                    <span className="item_key">
                                        Email:
                                    </span>
                                    <span className="item_value">
                                         janedoe@gmail.com
                                    </span>
                                </div>

                                <div className="item_details">
                                    <span className="item_key">
                                        Phone:
                                    </span>
                                    <span className="item_value">
                                         +1 3424 23 12
                                    </span>
                                </div>

                                <div className="item_details">
                                    <span className="item_key">
                                        Address: 
                                    </span>
                                    <span className="item_value">
                                        Elton St 234 Garden, NewYork
                                    </span>
                                </div>

                                <div className="item_details">
                                    <span className="item_key">
                                        Country:
                                    </span>
                                    <span className="item_value">
                                        USA
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <Chart aspect={3/1} title="User Spending (Last 6 Months)"/>
                    </div>
                </div>

                <div className="bottom">
                    <h3 className="title">Last Transactions</h3>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single;