const router = require('express').Router();
const Routes = require('./driverRoutes');

router.use('/drivers', driverRoutes);

module.exports = router;
