
import { useState, useEffect } from "react";
import styles from "../styles/HomePage.module.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "./Navbar"
import {
  FaVideo,
  FaUserGroup,
  FaCircleUser,
  FaClockRotateLeft,
  FaBookmark,
  FaStore,
  FaNewspaper,
} from "react-icons/fa6";

export default function HomePage() {

        const [fullName, setFullName] = useState("");

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFullName(user.displayName);
                }
            });

            return () => unsubscribe();
        }, []);

    return (
        <>

        <Navbar/>
            <div className={styles.homeLayout}>
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarItem}>
                        <FaCircleUser className={styles.icon} />
                        <span>{fullName}</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaUserGroup className={styles.icon} />
                        <span>Friends</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaClockRotateLeft className={styles.icon} />
                        <span>Memories</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaBookmark className={styles.icon} />
                        <span>Saved</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaUserGroup className={styles.icon} />
                        <span>Groups</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaVideo className={styles.icon} />
                        <span>Reels</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaStore className={styles.icon} />
                        <span>Marketplace</span>
                    </div>
                    <div className={styles.sidebarItem}>
                        <FaNewspaper className={styles.icon} />
                        <span>Feeds</span>
                    </div>
                </aside>

                <main className={styles.mainContent}>
                    {/* feed content goes here later */}
                </main>
            </div>
        </>
    );
}