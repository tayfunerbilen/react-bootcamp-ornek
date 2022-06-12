import { Outlet } from "react-router-dom"

export default function BlogLayout() {
	return (
		<div className="flex">
			<div className="flex-1 p-4">
				<Outlet />
			</div>
			<aside className="w-[300px] bg-gray-100 p-4 flex-shrink-0">
				blog sidebar
			</aside>
		</div>
	)
}
