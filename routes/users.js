const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/users')

router.get('/', Ctrl.hello)

module.exports = router.routes()
