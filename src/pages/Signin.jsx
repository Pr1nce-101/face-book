import styles from "../styles/Signin.module.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";
import { updateProfile } from "firebase/auth";


export default function Signin() {

    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [gender, setGender] = useState("");
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
        const userCredential = await signup(identifier, password);

        await updateProfile(userCredential.user, {
            displayName: `${firstName} ${lastName}`
        });

        navigate("/home");
    } catch (error) {
        setError(error.message);
    }
};
    return(

    <>
        <div className={styles.container}>
            <h1>Get started on Facebook</h1>
            <p>Create an account to connect with friends, family and communities of people who share your interests.</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.nameRow}>    
                    <div className={styles.subtitle}>Name</div>
                    <div className={styles.inputGroup}>
                        <div className={styles.input}>
                            <div className={styles.inputText}>
                                <input 
                                type="text" 
                                required value={firstName} 
                                id="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder=" "/>
                            <label htmlFor="firstName">First Name</label>  
                    </div>      
                </div>

                    <div className={styles.input}>
                        <div className={styles.inputText}>
                            <input 
                            type="text" 
                            required value={lastName} 
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)} 
                            placeholder=" "/>
                            <label htmlFor="lastName">Surname</label>
                       </div>
                    </div> 
                </div>
            </div>
                <div className={styles.nameRow}>
                        <div>Date of Birth</div>
                        <div className={styles.inputGroup}>
                            <div className={styles.input}>
                                <select 
                                id="day" 
                                value={day} 
                                onChange={(e) => setDay(e.target.value)} >
                                <option value="">Day</option>
                                {[...Array(31)].map((_, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        
                            </div>
                            
                            <div className={styles.input}>
                               <select 
                               id="month" 
                               value={month} 
                               onChange={(e) => setMonth(e.target.value)} >
                                <option value="">Month</option>
                                {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m, i) => (
                                <option key={i} value={i + 1}>{m}</option>
                                ))}
                            </select> 
                            
                            </div>
                            
                            <div className={styles.input}>
                               <select 
                               id="year" 
                               value={year} 
                               onChange={(e) => setYear(e.target.value)}>
                                <option value="">Year</option>
                                {[...Array(101)].map((_, i) => {
                                const y = new Date().getFullYear() - i;
                                return <option key={y} value={y}>{y}</option>;
                                })}
                            </select> 
                            </div>
                        </div>
                    </div>

                    <div className={styles.nameRow}>
                        <div>Gender</div>
                        <div className={styles.inputGroup}>
                            <select 
                            id="gender" 
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            className={styles.input}>
                                <option value="">Select your gender</option>
                                {["Male","Female"].map((m, i) => (
                                    <option key={i} value={i + 1}>{m}</option>
                                    ))}
                            </select>
                            
                        </div>
                    </div>
                        <div className={styles.nameRow}>
                            <div>Mobile number or Email address</div>
                            <div className={styles.inputGroup}>
                                <div className={styles.input}>
                                   <input 
                                    type="text" 
                                    id="identifier"
                                    placeholder=" "
                                    required value={identifier}
                                    onChange={(e) => setIdentifier(e.target.value)} 
                                />
                                <label htmlFor="identifier">Mobile number or Email address</label> 
                                </div>
                                
                            </div>
                        </div>

                        <div className={styles.nameRow}>
                        <div>Password</div>
                            <div className={styles.inputGroup}>
                                <div className={styles.input}>
                                   <input 
                                   type="password" 
                                   required value={password} 
                                   id="password"
                                   onChange={(e) => setPassword(e.target.value)}  
                                   placeholder=" "/>
                                <label htmlFor="password">Password</label> 
                                </div>
                            </div>  
                        </div>
                        <button 
                        type="submit" 
                        className={styles.submitBtn}>Submit</button>
                        <button 
                        type="button" 
                        className={styles.reloginBtn}
                        onClick={() => navigate("/")} >I already have an account</button>  
            </form>
        </div>
        </>
    )
}
