

function NowPlayingDesing() {
  return (
<div className="">
	<div className="player p-6 mx-auto mt-10">
		<div className="flex py-10">
			<img className="m-auto art rounded-lg object-cover w-48 h-48" src="https://images.unsplash.com/photo-1497035111255-8bc8464dc267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" alt=""/>
		</div>
		<div className="text-center">
			<div className="text-sm font-medium text-gray-700">Gi-Fingers</div>
			<div className="text-xs font-semibold tracking-widest text-gray-600 mt-3">Kantin Dudg</div>
		</div>
		{/* <div className="mt-10">
			<div className="h-1 bg-gray-300">
				<div className="h-full w-2/3 bg-gray-600 hover:bg-gray-800"></div>
			</div>
			<div className="flex justify-between mt-1">
				<span className="text-xs text-gray-600">2:45</span>
				<span className="text-xs text-gray-600">3:15</span>
			</div>
		</div> */}
		{/* <div className="flex items-center justify-center mt-10">
			<button className="play-button w-10 h-10 rounded-full text-gray-500 hover:text-gray-700">
				<svg className="m-auto w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
			</button>
			<button className="play-button w-20 h-20 rounded-full flex mx-4 text-gray-700 hover:text-gray-900">
				<svg className="m-auto w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
			</button>
			<button className="play-button w-10 h-10 rounded-full text-gray-500 hover:text-gray-700">
				<svg className="m-auto w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
			</button>
		</div> */}
	</div>
</div>
  )
}

export default NowPlayingDesing