import React from 'react';
import "./SideNav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logoutUser } from '../../features/userSlice';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';



function SideNav() {
    const user = useSelector(state => state.data.user.user);
    const dispatch =  useDispatch();
    const handleLogOut = () =>{
        dispatch(logoutUser());
        signOut(auth);
    }
    //nawigacja
    const navigateHome = useNavigate();
    const handleClickHome = () => navigateHome('/');
    const navigateExplore = useNavigate();
    const handleClickExplore = () => navigateExplore('/Explore');

    return (
    <div className='sidenav'>
        <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
        />
        <div className='sidenav__buttons'>
        
            <button onClick={handleClickHome} className='sidenav__button'>
                <HomeIcon />
                <span>Home</span>
            </button>

            <button className='sidenav__button'>
                <SearchIcon/>
                <span>Search</span>
            </button>
        
            <button onClick={handleClickExplore} className='sidenav__button'>
                <ExploreIcon />
                <span>Explore</span> 
            </button>
        
            <button className='sidenav__button'>
                <SlideshowIcon/>
                <span>Reels</span>
            </button>
        
            <button className='sidenav__button'>
                <ChatIcon/>
                <span>Messages</span>
            </button>
        
            <button className='sidenav__button'>
                <FavoriteBorderIcon/>
                <span>Notification</span>
            </button>
        
            <button className='sidenav__button'>
                <AddCircleOutlineIcon/>
                <span>Create</span>
            </button>

            <button className='sidenav__button'>
                {/* <Avatar>{user.userName ? user.userName.charAt(0).toUpperCase() : 'A'}</Avatar> */}
                <span>
                    {/* {user.userName} */}
                    <button onClick={handleLogOut} className='logout__button'>Log out</button>
                </span>
            </button>
        </div>
        <div className='sidenav__more'>
            <button className='sidenav__button'>
                <MenuIcon/>
                <span>More</span>
            </button >
        </div>
    </div>
    )
}

export default SideNav;
