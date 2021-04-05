const router = require('express').Router();
const userRoutes = require('./userRoutes');
<<<<<<< HEAD

router.use('/users', userRoutes);
=======
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
>>>>>>> c21a56728fd5bafae3cf1a4d3542391abe425d5a

module.exports = router;
