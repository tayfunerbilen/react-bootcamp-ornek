export default function Button({children, loading = false, ...props}) {
	return (
		<button disabled={loading} className="h-12 px-8 rounded text-center justify-center bg-black text-sm flex items-center text-white disabled:bg-opacity-50" {...props}>
			{loading ? '....' : children}
		</button>
	)
}
