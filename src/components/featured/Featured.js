import './featured.scss';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

function Featured(){
    return (
        <div className="featured">
            <div className="top">
                <div className="title">Total Revenue</div>
                <MoreVertIcon fontSize='small'/>
            </div>

            <div className="bottom">
                <div className="featured_chart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
                </div>

                <p className="title">Total sales made today</p>
                <p className="amount">$420</p>
                <p className="desc">Previous transactions processing. Last payments may not be included.</p>

                <div className="summary">
                    <div className="item">
                        <div className="item_title">Target</div>
                        <div className="item_result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="result_amt">$ 14.4k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_title">Last week</div>
                        <div className="item_result negative">
                            <KeyboardArrowDownIcon fontSize='small'/>
                            <div className="result_amt">$ 10.4k</div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="item_title">Last month</div>
                        <div className="item_result positive">
                            <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                            <div className="result_amt">$ 19.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured;