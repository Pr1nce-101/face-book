import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { resetPassword } from "../api/auth";
import styles from "../styles/ForgotPassword.module.css";

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
            setError("");
            setMessage("");

        try {
            await resetPassword(email);
            setMessage("If an account exists for this email, we've sent a reset link.");
        } catch (error) {
            setError("Something went wrong. Please check the email and try again.");
        }
    };

    return (
    <div className={styles.container}>
        <div className={styles.content}>
            <button
                type="button"
                className={styles.backBtn}
                onClick={() => navigate("/")}
            >
                <FaChevronLeft />
            </button>

            <h1>Find your account</h1>
            <p>Enter your email address.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder=" "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email address</label>
                </div>

                {message && <p className={styles.success}>{message}</p>}
                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.continueBtn} onClick={()=> navigate("/login")}>Continue</button>
            </form>
        </div>
    </div>
);
}