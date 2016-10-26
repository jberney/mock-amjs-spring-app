const {Router} = require('express');

module.exports = {
    newRouter({health, info}) {
        const router = new Router();
        router.get('/health', (req, res) => res.json(health));
        router.get('/info', (req, res) => res.json(info));
        return router;
    }
};