

function NowPlayingDesing() {
  return (
<div className="">
	<div className="player p-6 mx-auto mt-10">
		<div className="flex py-10">
        <picture>
            <img src={data.albumImageUrl} alt={data.album} />
          </picture>
		</div>
		<div className="text-center">
			<div className="text-sm font-medium text-gray-700">{data.artist}</div>
			<div className="text-xs font-semibold tracking-widest text-gray-600 mt-3">{data.title}</div>
		</div>
	</div>
</div>
  )
}

export default NowPlayingDesing