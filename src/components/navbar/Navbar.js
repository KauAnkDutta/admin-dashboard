import './navbar.scss';
import {useContext} from 'react'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import {DarkModeContext} from '../../context/darkModeContext'

function Navbar(){
    const {dispatch} = useContext(DarkModeContext)

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" className="input_box" placeholder='Search...'/>
                    <SearchOutlinedIcon />
                </div>

                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type:"TOGGLE"})}/> 
                    </div>

                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon' />
                    </div>

                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon'/>

                        <div className="counter">1</div>
                    </div>

                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' /> 
                        <div className="counter">2</div>
                    </div>

                    <div className="item">
                        <ListOutlinedIcon className='icon' />
                    </div>

                    <div className="item">
                        <img src="https://images.pexels.com/photos/13629598/pexels-photo-13629598.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt=""  className='Avatar'/>
                    </div>

                    <div className="item">
                        <SettingsIcon className='icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;