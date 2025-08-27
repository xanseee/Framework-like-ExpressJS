const http = require('http');
const EventEmitter = require('events');
const response = require('./middlewares/Response')

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [response];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach(method => {
                const handler = endpoint[method];
                this.emitter.on(this._getRouterMask(path, method), (req, res) => {
                    handler(req, res);
                })
            })
        })
    }

    _createServer() {
        return http.createServer(async (req, res) => {
            for(const middleware of this.middlewares) {
                await new Promise((resolve, reject) => {
                    middleware(req, res, (err) => {
                        if(err) reject(err);
                        else resolve();
                    });
                })
            };

            const emitted = this.emitter.emit(this._getRouterMask(req.url, req.method), req, res);
            if(!emitted) {
                res.end("This web page isn't exist");
            }
        })
    }

    _getRouterMask(path, method) {
        return `[${path}]:[${method}]`;
    }
};