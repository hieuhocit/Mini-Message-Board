const fs = require('node:fs/promises');
const path = require('path');

const pathFile = path.join(__dirname, '../data.json');

class Message {
  static async get() {
    try {
      const data = await fs.readFile(pathFile, { encoding: 'utf8' });
      return JSON.parse(data);
    } catch (error) {
      console.error(error);
    }
  }

  static async getByUserName(username) {
    try {
      let data = await fs.readFile(pathFile, { encoding: 'utf8' });
      data = JSON.parse(data);

      const user = data.find((u) => u.user === username);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  static async save(newData) {
    try {
      const data = JSON.parse(
        await fs.readFile(pathFile, { encoding: 'utf8' })
      );
      data.unshift(newData);
      await fs.writeFile(pathFile, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error(error);
    }
    return false;
  }
}

module.exports = Message;
