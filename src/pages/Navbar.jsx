import { NavLink } from "react-router-dom";
import styles from "../styles/HomePage.module.css";
import logo from "../assets/pngwing.com.png";
import {
  FaHouse,
  FaVideo,
  FaUserGroup,
  FaUserPlus,
  FaTableCells,
  FaFacebookMessenger,
  FaBell,
  FaCircleUser,
  FaChevronDown,
} from "react-icons/fa6";

export default function Navbar() {

  return (
    <div>
        <nav className={styles.topbar}>
                        <div className={styles.navLeft}>
                            <img className={styles.logo} src={logo}/>
                            <div className={styles.searchBar}>
                                <input type="text" placeholder="Search Facebook" />
                            </div>
                        </div>
        
                        <div className={styles.navCenter}>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navIcon} ${styles.active}` : styles.navIcon
                                }
                            >
                                <FaHouse />
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navIcon} ${styles.active}` : styles.navIcon
                                }
                            >
                                <FaVideo />
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navIcon} ${styles.active}` : styles.navIcon
                                }
                            >
                                <FaUserPlus /> 
                            </NavLink>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? `${styles.navIcon} ${styles.active}` : styles.navIcon
                                }
                            >
                                <FaUserGroup />
                            </NavLink>
                        </div>
        
                        <div className={styles.navRight}>
                            <button className={styles.findFriendsBtn}>
                                Find friends
                            </button>
                            <div className={styles.navIcon2}><FaTableCells /></div>
                            <div className={styles.navIcon2}><FaFacebookMessenger /></div>
                            <div className={styles.navIcon2}><FaBell /></div>
                            <div className={styles.navIcon2}>
                                <FaCircleUser />
                                <FaChevronDown className={styles.chevron} />
                            </div>
                        </div>
                    </nav>
</div>
    
  );
}
