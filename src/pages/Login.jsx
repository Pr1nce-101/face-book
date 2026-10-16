import logo from "../assets/pngwing.com.png"
import collage from "../assets/facebook5.png"
import styles from "../styles/Login.module.css"
import { login } from "../api/auth";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

        const handleSubmit = async (e) => {
            e.preventDefault();
            setError("");

            try {
                await login(identifier, password);
                navigate("/home");
            } catch (err) {
                if (err.code === "auth/invalid-credential" || err.code === "auth/invalid-email") {
                    setError("The email or password you entered is incorrect.");
                } else if (err.code === "auth/too-many-requests") {
                    setError("Too many attempts. Please try again later.");
                } else {
                    setError("Something went wrong. Please try again.");
                }
            }
        };

    return(
    <>
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={logo} alt="Facebook logo" className={styles.logo}/>
                <div className={styles.box}>
                <span className={styles.heading}><h1><br />Explore <br /> the <br /> things <br /><span className={styles.highlight}> you love</span>.</h1></span>
                
                </div>

        </div>
        <div className={styles.center}><img src={collage} alt="Happy people" className={styles.collage}/></div>
        <hr/>
        <div className={styles.right}>
            
            <form onSubmit={handleSubmit} className={styles.form}>
                <span><h3>Log in to Facebook</h3></span>
                    <span className={styles.inputGroup}>
                        <input 
                            type="text" 
                            id="identifier"
                            placeholder=" "
                            value={identifier}
                            onChange={(e) => { setIdentifier(e.target.value); setError(""); }}
                            className={error ? styles.invalid : ""}
                        />
                        <label htmlFor="identifier">Email address or mobile number</label>
                    </span>

                    <span className={styles.inputGroup}>
                        <input
                            type="password"
                            id="password"
                            placeholder=" "
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(""); }}
                            className={error ? styles.invalid : ""}
                        />
                        <label htmlFor="password">Password</label>   
                    </span>
                    {error && <p className={styles.errorText}>{error}</p>}

                    <button type="submit" className={styles.loginBtn}>Log in</button>
                    <button type="button" className={styles.forgotBtn} onClick={() => navigate("/ForgotPassword")}>Forgotten password?</button>
                    <button type="button" className={styles.newBtn} onClick={() => navigate("/Signin")}>Create new account</button>
            </form>  
        </div>
        
    </div>
        </>
    )
}
