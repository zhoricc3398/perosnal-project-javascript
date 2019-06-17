class TeachersModel {
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

// Create new Teacher from Teacher's data
const teachers = new TeachersModel();

const data = {
  name: {
    first: 'Nodar',
    last: 'Momecelidze'
  },
  image: 'image',
  dateOfBirth: '10/10/1934',
  emails: [
    {
      email: 'nmomcelidze@ibsu.edu.ge',
      primary: true
    }
  ],
  phones: [
    {
      phone: '593515651',
      primary: true
    }
  ],
  sex: 'male',
  subjects: [
    {
      subject: 'Alghorithms'
    }
  ],
  description: 'very good'
};

// Create a new teacher
const teacherId = teachers.add(data);

// will return Teachers data including teacher's id
console.log(teachers.read(teacherId));

// will update Teacher. This method should use the same validation as a constructor method
teachers.update(teacherId, { image: 'image-1' })

console.log(teachers.read(teacherId));

// will remove teacher
teachers.remove(teacherId)

console.log(teachers.read(teacherId));