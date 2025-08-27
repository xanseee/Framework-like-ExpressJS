const Router = require("./framework/Router");
const Application = require("./framework/Application");
const json_parser = require("./framework/middlewares/JsonParser");

const PORT = process.env.PORT || 5000;

const app = new Application();

app.use(json_parser());

const router = new Router();

router.get('/users', (req, res) => {
    res.end('this is user table');
})

router.get('/', (req, res) => {
    res.end('this is home page');
});

router.post('/users', (req, res) => {
    console.log("entry_point.js 22 line -> ", req.body);
    res.status(200).send(JSON.stringify(req.body));
});

router.get('/posts', (req, res) => {
    res.end('this is posts table');
})

app.addRouter(router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})