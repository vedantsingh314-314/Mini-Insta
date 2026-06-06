const app=require('./src/app');
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
connectDB=require('./src/DB/db');


connectDB();


const PORT=process.env.PORT || 8000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
