import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Layout } from "./Layout";

import "./style.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
// const Layout

const router = createBrowserRouter([
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Single />,
			},
			{
				path: "/write",
				element: <Write />,
			},
		],
	},
]);

export default function App() {
	return (
		<div className="app">
			<div className="container">
				<RouterProvider router={router} />
			</div>
		</div>
	);
}
