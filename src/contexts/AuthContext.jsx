/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../FireBase/firebase.config";
import Swal from "sweetalert2";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from "firebase/auth";
import axios from "axios";

const AuthContext = createContext();

const Toast = Swal.mixin({
	toast: true,
	position: "top-start",
	showConfirmButton: false,
	timer: 2000,
	timerProgressBar: true,
	didOpen: (toast) => {
		toast.onmouseenter = Swal.stopTimer;
		toast.onmouseleave = Swal.resumeTimer;
	},
});

const AuthProvider = function ({ children }) {
	const [user, setUser] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const active = onAuthStateChanged(auth, (userInfo) => {
			const userEmail = userInfo?.email || user?.email;
			setUser(userInfo);
			setLoading(false);
			if (userInfo) {
				axios
					.post(
						"https://car-doctor-server-nine-ruby.vercel.app/jwt",
						{ email: userEmail },
						{ withCredentials: true }
					)
					.then(({ data }) => console.log("token response", data));
			} else {
				axios
					.post(
						"https://car-doctor-server-nine-ruby.vercel.app/logout",
						{ email: userEmail },
						{ withCredentials: true }
					)
					.then(({ data }) => {
						console.log(data);
					});
			}
		});
		return () => active();
	}, [user?.email]);

	const signUp = async function ({ name, email, password }) {
		setLoading(true);
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			await updateProfile(auth.currentUser, {
				displayName: name,
			});
			Toast.fire({
				icon: "success",
				title: "Signed up successfully",
			});
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
			Toast.fire({
				icon: "success",
				title: "Signed in successfully",
			});
			return true;
		} catch (error) {
			toast.error(error.message);
			return false;
		} finally {
			setLoading(false);
		}
	};

	const logOut = async function () {
		try {
			await signOut(auth);
			setUser(null);
			Toast.fire({
				icon: "success",
				title: "Logged out successfully",
			});
		} catch (error) {
			toast.error(error.message);
		}
	};

	return (
		<AuthContext.Provider value={{ user, logIn, signUp, loading, logOut }}>
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
