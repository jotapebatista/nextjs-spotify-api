import io from 'socket.io-client';
import querystring from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export default async function handler(req, res) {
    // Authenticate with Spotify API using client credentials flow
    const authResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${Buffer.from(
                `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
            ).toString('base64')}`,
        },
        body: querystring.stringify({
            grant_type: 'client_credentials',
        }),
    });

    if (!authResponse.ok) {
        res.status(500).json({ error: 'Failed to authenticate with Spotify API' });
        return;
    }

    const authData = await authResponse.json();
    const accessToken = authData.access_token;

    // Set up WebSocket connection to Spotify API
    const socket = io(`${SPOTIFY_API_BASE_URL}/me/player`, {
        auth: {
            token: accessToken,
        },
    });

    socket.on('connect', (data) => {
        console.log(data);
        console.log('Connected to Spotify API');
    });

    socket.on('play', (data) => {
        console.log(data);
        console.log('Current track:', data.item.name);
    });


    socket.on('pause', (data) => {
        console.log(data);
        console.log('Music paused');
    });

    socket.on('error', (error) => {
        console.error('An error occurred:', error);
    });

    // Return a response to the client
    res.status(200).json({ message: 'WebSocket connection established' });
}