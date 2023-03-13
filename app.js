const CronFile = require(`${__dirname}/public/js/cron`);
const Express = require(`express`);
const Router = require(`${__dirname}/src/router/router`);
const App = Express();
const Port = 3000;

CronFile.job.start();

App.use(Router);

App.listen(Port, () => {
    console.log("Funcionando");
})