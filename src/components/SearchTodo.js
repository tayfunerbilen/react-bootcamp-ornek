export default function SearchTodo({ search, searchHandle }) {
	return (
		<input className="h-10 border border-gray-300 rounded-md px-4 text-sm w-[50%] dark:bg-gray-500 dark:border-white/20 dark:placeholder:text-white" type="text" placeholder="Todolarda ara" value={search} onChange={searchHandle}/>
	)
}
