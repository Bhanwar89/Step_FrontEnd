import React, { useState } from 'react';

const ImageSearchBar = () => {
  const [imageFile, setImageFile] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [selectedTrackUri, setSelectedTrackUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageDrop = (acceptedFiles) => {
    setImageFile(acceptedFiles[0]);
  };

  const  Api_Token = localStorage.getItem('access_token')

  const handleImageUpload = async () => {
    
    if (!imageFile) {
      alert('Please select an image file first.');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const formData = new FormData();
      formData.append('file', imageFile);

      const token = localStorage.getItem('access_token');
      const apiUrl = 'http://207.180.212.35/engine/images/upload';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      setIsLoading(false);

      if (response.ok) {
        const data = await response.json();
        setRecommendations(data.recommendations);
        if (data.recommendations.length > 0) {
          setSelectedTrackUri(data.recommendations[0].track_uri);
        } else {
          setSelectedTrackUri('');
        }
      } else {
        setError('Failed to upload image. Please try again later.');
        console.error('Failed to upload image:', response);
      }
    } catch (error) {
      setIsLoading(false);
      setError('Error uploading image. Please try again later.');
      console.error('Error uploading image:', error);
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={(e) => handleImageDrop(e.target.files)} />
        <button onClick={handleImageUpload}>Upload Image</button>
        <div>
          <h3>Recommended Tracks:-</h3>
          <ul style={{ marginBottom: '100px' }}>
          {recommendations.map((track) => (
          <ul key={track.id}>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : selectedTrackUri ? (
            <iframe
              style={{ borderRadius: '12px', marginBottom: '100px' , marginTop: '50px' }}
              src={`https://open.spotify.com/embed/track/${track.track_uri}`}
              width="80%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          ) : null}
              </ul>
            ))}
          </ul>

        </div>
      </div>
    </>
  );
};

export default ImageSearchBar;
