export default function NowPlaying({ data, isPlaying }) {

  return (
    <div className={`${isPlaying ? "transition-all duration-1000 transform" : "transition-all duration-1000 -translate-x-full"} bg-gray-700  w-full`}>
      <div className="flex items-center">
        <div className="ml-2 py-5 flex-shrink-0 ">
          <picture>
            <img className="w-20 h-20 object-contain rounded-lg" src={data.albumImageUrl} alt={data.album} />
          </picture>
        </div>
        <div className="ml-4">

          <marquee behavior="scroll" direction="left" scrollamount="3" ><h2 className="text-lg font-semibold text-[#1DB954]">{data.title}</h2></marquee>
          <p className="text-sm font-medium text-white">{data.artist}</p>
          <p className="text-sm font-medium text-gray-300">{isPlaying ? 'Now Playing' : 'Paused'}</p>
        </div>
      </div>
    </div>
  )
}
