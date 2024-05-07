import axios from "axios";
import { useEffect } from "react";

const axiosSecure = axios.create({
	baseURL: "http://localhost:4000",
	withCredentials: true,
});

function useAxiosSecure() {
	useEffect(() => {
		axiosSecure.interceptors.response.use(
			(res) => res,
			(error) => console.log("response error in interceptors:", error.response)
		);
	}, []);
	return axiosSecure;
}

export default useAxiosSecure;
