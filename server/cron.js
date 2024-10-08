const cron = require('cron');
const https = require('https');

const url = "https://blog-mern-qsck.onrender.com";

const job = new cron.CronJob('*/14 * * * *', function(){
    https.get(url, (res) => {
        if(res.statusCode === 200){
            console.log("server restarted");
        }else{
            console.error(res.statusCode);
        }
    }).on('error', (error) => {
        console.error(`Error: ${error.message}`);
    });
});

module.exports = {
    job,
}