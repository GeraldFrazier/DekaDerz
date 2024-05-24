// utils/fetchSongs.ts
export const fetchSongs = async () => {
    const clientId = 'YOUR_SOUNDCLOUD_CLIENT_ID';
    const userId = 'YOUR_SOUNDCLOUD_USER_ID';
    const response = await fetch(`https://api.soundcloud.com/users/${userId}/tracks?client_id=${clientId}`);
    const data = await response.json();
    return data;
  };
  