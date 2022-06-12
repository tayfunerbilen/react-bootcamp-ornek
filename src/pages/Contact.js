import { Navigate, useNavigate, useLocation } from "react-router-dom"

export default function Contact() {

	const navigate = useNavigate()
	const location = useLocation()

	return <Navigate to="/blog" replace={true} state={{
		location: location.pathname
	}} />

	return (
		<h1>Contact Page</h1>
	)
}
