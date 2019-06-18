import { 
    SubjectsModel, 
    LMSModel, 
    TeachersModel, 
    // PupilsModel, 
    // GroupsModel, 
    // GradebooksModel 
} from './school/index.mjs';

//subjects

const history = new SubjectsModel({
    title: 'History',
    lessons: 24
  });

console.log(history.id)

//teachers

// // Create new Teacher from Teacher's data
// const teachers = new TeachersModel();

// const data = {
//   name: {
//     first: 'Nodar',
//     last: 'Momecelidze'
//   },
//   image: 'image',
//   dateOfBirth: '10/10/1934',
//   emails: [
//     {
//       email: 'nmomcelidze@ibsu.edu.ge',
//       primary: true
//     }
//   ],
//   phones: [
//     {
//       phone: '593515651',
//       primary: true
//     }
//   ],
//   sex: 'male',
//   subjects: [
//     {
//       subject: 'Alghorithms'
//     }
//   ],
//   description: 'very good'
// };

// // Create a new teacher
// const teacherId = teachers.add(data);

// // will return Teachers data including teacher's id
// console.log(teachers.read(teacherId));

// // will update Teacher. This method should use the same validation as a constructor method
// teachers.update(teacherId, { image: 'image-1' })

// console.log(teachers.read(teacherId));

// // will remove teacher
// teachers.remove(teacherId)

// console.log(teachers.read(teacherId));