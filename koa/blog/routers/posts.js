const router = require('koa-router')();
const controller = require('../controller/c-posts')

router.get('/posts', controller.getPosts);
router.get('/', controller.getRedirectPosts);
module.exports = router;