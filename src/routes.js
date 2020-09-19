const router = require('express').Router();

const sendMessage = require('./twiluo');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/message', async (req, res) => {
  const { phone, msg } = req.body;
  console.log(req.body);
  await sendMessage(msg, phone);
  res.redirect('/');
});
module.exports = router;
