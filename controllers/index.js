const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./api/profileRoutes');
const homeRoutes = require('./api/homeRoutes')


router.use('/api', apiRoutes);
router.use('/profile', profileRoutes)
router.use('/', homeRoutes)

module.exports = router;
