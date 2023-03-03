import { userProfile } from "lib/spotify";

export default async function handler(req, res) {
  const response = await userProfile();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isLoggedIn: false });
  }

  const user = await response.json();
  
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    isLoggedIn: true,
    name: user.display_name,
    email: user.email,
    profileImageUrl: user.images?.[0]?.url,
    profileUrl: user.external_urls.spotify
  });
}
