const Message = require('../models/Message');

module.exports = {
  get(req, res) {
    res.render('form', { title: 'New message' });
  },
  async post(req, res) {
    const { user, text } = req.body;
    const newData = {
      user,
      text,
      added: new Date().toLocaleDateString(),
    };
    const result = await Message.save(newData);
    if (result) {
      res.redirect('/');
    } else {
      res.status(500).send('Could not add new data');
    }
  },
};
