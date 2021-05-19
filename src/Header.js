import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@material-ui/icons';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';


function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };
    return (
        <div className="header">

            <div className="header__left">
                <img
                    src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
                    alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption
                    Icon={HomeIcon}
                    title="Home" />
                <HeaderOption
                    Icon={SupervisorAccount}
                    title="My Network" />
                <HeaderOption
                    Icon={BusinessCenter}
                    title="Jobs" />
                <HeaderOption
                    Icon={Chat}
                    title="Messaging" />
                <HeaderOption
                    Icon={Notifications}
                    title="Notifications" />
                <HeaderOption
                    avatar={true}
                    title="Me"
                    onClick={logoutOfApp} />
            </div>
        </div>
    )
}

export default Header
