const router = require('express').Router();
const apiRoutes = require('./api');
const profileRoutes = require('./api/profileRoutes');
const homeRoutes = require('./api/homeRoutes');
const exploreRoutes = require('./api/exploreRoutes');


router.use('/api', apiRoutes);
router.use('/profile', profileRoutes);
router.use('/', homeRoutes);
router.use('/explore', exploreRoutes);

module.exports = router;
