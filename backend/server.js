import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';



app.listen(process.env.PORT || 3000, () => {
    console.log("server started!!");
    
})