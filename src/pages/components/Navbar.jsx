import Link from "next/link";

export default function Navbar({ onClick }) {

    function handleClick(ev, linkName) {
        ev.preventDefault()
        onClick(linkName)
    }

    return (
        <nav className="bg-gray-800 h-24">
            <ul className="flex justify-evenly pt-8 ">
                <li className="mx-4">
                    <Link href="/" className="text-gray-300 hover:text-white" onClick={(ev) => handleClick(ev, "Home")}>
                       Home
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/" className="text-gray-300 hover:text-white" onClick={(ev) => handleClick(ev, "nowPlaying")}>
                        Now Playing
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="/" className="text-gray-300 hover:text-white" onClick={(ev) => handleClick(ev, "topTracks")}>
                        Top Tracks
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
