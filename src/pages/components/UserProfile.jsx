import Image from "next/image"

export default function UserProfile(props) {
    const { userProfile } = props
    console.log(userProfile)

    return (

        <div class="card mx-auto flex flex-col items-center justify-center p-4 shadow-lg rounded-2xl w-64 mt-4">
            <div className="flex items-center justify-between ">
            </div>
            <div className="mt-6 w-fit mx-auto">
                <picture>
                    <img src={userProfile.profileImageUrl} className="rounded-full w-48" alt="profile picture" srcset="" />
                </picture>
            </div>
            <div className="mt-8">
                <h2 className="text-neutral-700 font-bold text-2xl tracking-wide">{userProfile.name}</h2>
            </div>
            <div className="mt-3 text-white text-sm">
                <button className="text-white py-2 px-4 uppercase rounded bg-[#1DB954] hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                    Profile
                </button>
            </div>
        </div>

    )
}


