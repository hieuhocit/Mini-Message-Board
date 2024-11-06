const Messages = require('../models/Messages');

module.exports = {
  async get(req, res) {
    const data = await Messages.get();
    res.render('index', { title: 'Mini Messageboard', messages: data });
  },
  async getById(req, res, next) {
    const { id } = req.params;

    if (!Number(id)) {
      next();
      return;
    }

    const data = await Messages.getById(Number(id));

    if (!data) {
      next();
      return;
    }
    res.render('details', { message: data });
  },
};
