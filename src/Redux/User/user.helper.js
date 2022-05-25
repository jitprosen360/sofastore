import {auth } from './../../firebase/utils';

export const handleResetPasswordAPI = (email) => {
    const config = {
        url: 'http://localhost:3000/login'
    };
    return new Promise((resolve,reject) => {
         auth.sendPasswordResetEmail(email, config)
        .then(() => {
            resolve();
            console.log('password reset')
        })
        .catch(() => {
            console.log('Somethin went wrong')   
            const err = ['Email not found. Please try again'];
            reject(err);
        
        })
    })
}