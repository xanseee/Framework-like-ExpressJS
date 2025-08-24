const Router = require("./framework/Router");
const Application = require("./framework/Application");

const PORT = process.env.PORT || 5000;

const app = new Application();

const router = new Router();

router.get('/users', (req, res) => {
    res.end('this is user table');
})

router.get('/posts', (req, res) => {
    res.end('this is posts table');
})

app.addRouter(router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})