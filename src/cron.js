const CronJob = require('cron').CronJob;
const ColectFile = require(`${__dirname}/colector`);

// Define a tarefa Cron que será executada a cada minuto
const job = new CronJob('0 * * * * *', function() {
    ColectFile.colect().then((res) => {
        if(res.includes("sem_mensagem")){
            console.log("Mensagem não encontrada");
        }else{
            console.log("Mensagem está ok");
        }
    }).catch((err) => {
        console.error(err);
    });
    
});

module.exports = {job}