const db = require('../db/queries');

class Messages {
  static async get() {
    const data = await db.getAllMessages();
    return data;
  }

  static async getById(id) {
    const user = await db.getById(id);
    return user;
  }

  static async save(newData) {
    return await db.createMessage(newData);
  }
}

module.exports = Messages;
