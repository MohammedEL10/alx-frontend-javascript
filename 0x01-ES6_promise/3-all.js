// Promise.all
import {uploadPhoto, createUser} from './utils.js';

export default function handleProfileSignup() {
    let userpromise = createUser();
    let photopromise = uploadPhoto();
    Promise.all([userpromise, photopromise])
    .then(([userData, photoData]) => {
        console.log(`${userData.body.firstName} ${userData.body.lastName}`);
    })
    .catch(error => {
        console.log('Signup system offline');
    });
}

handleProfileSignup();