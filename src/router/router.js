const Express = require(`express`);
const MainController = require(`../controllers/main`);
const router = Express.Router();

router.get("/", MainController.index);
router.get("/sobre", MainController.about);

module.exports = router;