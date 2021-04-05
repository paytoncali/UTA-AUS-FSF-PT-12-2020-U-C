const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  try {
    const userData = await userData.findAll({
      attributes: {exlcude: ['password']},
      order: [['name', 'ASC']]
    });
  
  const user = userData.map((project) => project.get({ plain: true}));
  res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
