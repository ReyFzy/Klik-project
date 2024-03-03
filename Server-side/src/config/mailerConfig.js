export const mailerConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 
    auth: {
        user: 'souris.klik@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
};
