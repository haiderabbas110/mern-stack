import React, { useEffect, useState } from 'react';
import { storage } from '../../../config/fb-conf';

function DisplayImage() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      const url = await storage.ref('images').child('your-image-name.jpg').getDownloadURL();
      setUrl(url);
    };

    fetchImage();
  }, []);

  return (
    <div>
      <img src={url} alt="Uploaded" />
    </div>
  );
}

export default DisplayImage;