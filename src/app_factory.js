const express = require('express');

const RouterFactory = require('./router_factory');

module.exports = {
    newApp(state) {
        const app = express();
        app.use(function (req, res, next) {
            let log = `[SPRING] ${req.method} ${req.url}`;
            console.log(log);
            next();
        });
        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        app.use(RouterFactory.newRouter(state));
        return app;
    }
};