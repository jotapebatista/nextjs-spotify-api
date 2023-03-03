import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import NowPlaying from './components/NowPlaying';
import TopTracks from './components/TopTracks';

import NowPlayingDesing from './components/NowPlayingDesing';

import DataFetcher from 'lib/dataFetcher';

export default function Home() {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [nowPlaying, setNowPlaying] = useState({});
  const [topTracks, setTopTracks] = useState([]);
  const [userProfile, setUserProfile] = useState([]);


  function handleClickedMenu(linkName) {
    setActiveMenu(linkName);
  }

  useEffect(() => {
    async function nowPlaying() {
      try {
        const response = await fetch('/api/now-playing');
        const data = await response.json();
        setIsPlaying(data?.isPlaying || false);
        setNowPlaying(data || {});
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const interval = setInterval(nowPlaying, 5000);

    return () => clearInterval(interval);
  }, []);

  const { album, albumImageUrl, artist, songUrl, title } = nowPlaying;

  useEffect(() => {
    async function getTopTracks() {
      try {
        const response = await fetch('/api/top-tracks');
        const data = await response.json();
        setTopTracks(data?.tracks || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getTopTracks();
  }, []);

  useEffect(() => {
    async function getUserProfile() {
      try {
        const response = await fetch('/api/user-profile');
        const data = await response.json();
        setUserProfile(data || []);
        // setUserProfile(data?.tracks || []);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    getUserProfile()
  }, [])


  return (
    <>
      <Head>
        <title>Now Playing - Spotify App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar onClick={handleClickedMenu} />
        {activeMenu === 'nowPlaying' && ( <NowPlaying data={{ album, albumImageUrl, artist, songUrl, title }} isPlaying={isPlaying} /> )}
        {activeMenu === 'topTracks' && <TopTracks topTracks={topTracks} />}
        {activeMenu === 'Home' && <UserProfile userProfile={userProfile} />}
        <NowPlayingDesing />
      </main>
    </>
  );
}

