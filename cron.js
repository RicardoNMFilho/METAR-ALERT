const CronJob = require('cron').CronJob;
const ColectFile = require(`${__dirname}/colector`);

let result;

// Define a tarefa Cron que será executada a cada minuto
const job = new CronJob('0 * * * * *', function() {
    ColectFile.colect().then((res) => {
        result = res;
        console.log(result);
    }).catch((err) => {
        console.error(err);
    });
    
});

job.start();