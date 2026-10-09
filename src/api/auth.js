import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export async function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export async function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
}
