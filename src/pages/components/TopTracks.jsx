export default function TopTracks(props) {
    const { topTracks } = props;

if (!topTracks){
    console.log('#1')
}else{
    console.log('#2')
}

    return (
        
        <div className="container flex mx-auto">
            {topTracks.map((track, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full object-cover">
                        <picture>
                            <img src={track.albumCoverUrl} alt="albumCoverImage" className="object-cover" />
                        </picture>
                        <div className="p-4">
                            <p className="text-lg font-medium mb-2">{track.title}</p>
                            <p className="text-gray-600">{track.artist}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
