export class LMSModel {
  constructor() {
    this._subjects = new Map();
  }
  add(subject) {
    return new Promise((resolve, reject) => {
      if (typeof subject == 'object') {
        // const id = this.readAll()[0] && (parseInt(Array.from(this._subjects.keys()).reverse()[0]) + 1).toString() || '1';
        this._subjects.set(id, subject);
        resolve(id);
      } else {
        reject('Parameter isn\'t an object');
      }
    });
  }
  readAll(...args) {
    return new Promise((resolve, reject) => {
      if (args.length > 0) {
        reject('ReadAll doesn\'t have any parameteres');
      } else {
        resolve(Array.from(this._subjects.values()));
      }
    });
  }
  remove(id) {
    return new Promise((resolve, reject) => {
      if (this._subjects.has(id)) {
        resolve(this._subjects.delete(id));
      } else {
        reject('Subject with this id doesn\'t exist')
      }
    });
  }
  verify(id) {
    return new Promise((resolve, reject) => {
      if (this._subjects.has(id)) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
}