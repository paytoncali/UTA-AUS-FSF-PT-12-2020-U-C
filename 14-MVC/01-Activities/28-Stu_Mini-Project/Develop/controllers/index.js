const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
=======
const apiRoutes = require('./api');

>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a
router.use('/api', apiRoutes);

module.exports = router;
