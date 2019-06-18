export class TeachersModel {
  constructor() {
    this._teachers = new Map();
  }
  add(teacher) {
    if (this._id >= 0) {
      this._id++
    } else this._id = 0;

    this._teachers.set(this._id, teacher)

    return this._id;
  }
  read(id) {
    const teacher = this._teachers.get(id) || null;
    if (teacher) {
      teacher.id = id;
    }
    return teacher;
  }
  update(id, data) {
    const teacher = this._teachers.get(id);
    this._teachers.set(id, { ...teacher, ...data });

    return id;
  }
  remove(id) {
    if (!this._teachers.has(id)) {
      throw new Error('User with this id doesn\'t exists.');
    }
    return this._teachers.delete(id);
  }
}