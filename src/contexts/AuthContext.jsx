/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../FireBase/firebase.config";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = function ({ children }) {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(false);

  console.log(user)

	useEffect(() => {
		const active = onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
		});
		return () => active();
	}, []);

	const signUp = async function ({ name, email, password }) {
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, {
				displayName: name,
			});
			toast.success("Successfully sign up");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const logIn = async function ({ email, password }) {
		setLoading(true);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			toast.success("Successfully log in");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<AuthContext.Provider value={{ user, logIn, signUp, loading }}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = function () {
	const context = useContext(AuthContext);
	if (!context) throw new Error("Calling outside the context");
	return context;
};

export { AuthProvider, useAuth };
