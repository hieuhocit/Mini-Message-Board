const Message = require('../models/Message');

module.exports = {
  async get(req, res) {
    const data = await Message.get();
    res.render('index', { title: 'Mini Messageboard', messages: data });
  },
  async getByUserName(req, res, next) {
    const data = await Message.getByUserName(req.params.username);
    if (!data) next();
    res.render('details', { message: data });
  },
};
