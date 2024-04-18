import React, { useState } from 'react';
import { 
} from '../../config/fb-conf';

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      const uploadTask = storage.ref(`images/${file.name}`).put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
        },
        error => {
          // error function ...
          console.log(error);
        },
        () => {
          // complete function
          storage.ref('images').child(file.name).getDownloadURL().then(url => {
            console.log(url);
          });
        }
      );
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadFile;