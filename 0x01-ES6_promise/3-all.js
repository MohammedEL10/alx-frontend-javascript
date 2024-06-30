// eslint-disable-next-line import/extensions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  const userpromise = createUser();
  const photopromise = uploadPhoto();
  Promise.all([userpromise, photopromise])
    .then(([userData]) => {
      console.log(`${userData.body.firstName} ${userData.body.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

handleProfileSignup();
