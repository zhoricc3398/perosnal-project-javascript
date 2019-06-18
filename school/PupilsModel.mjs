// class PupilsModel {
//   constructor() {
//     this._pupils = new Map();
//   }
//   add(pupil) {
//     if (this._id >= 0) {
//       this._id++
//     } else this._id = 0;

//     this._pupils.set(this._id, pupil)

//     return this._id;
//   }
//   read(id) {
//     const pupil = this._pupils.get(id) || null;
//     if (pupil) {
//       pupil.id = id;
//     }
//     return pupil;
//   }
//   update(id, data) {
//     const pupil = this._pupils.get(id);
//     this._pupils.set(id, { ...pupil, ...data });

//     return id;
//   }
//   remove(id) {
//     if (!this._pupils.has(id)) {
//       throw new Error('User with this id doesn\'t exists.');
//     }
//     return this._pupils.delete(id);
//   }
// }


// // {
// //     "name": {
// //       "first": "string",
// //       "last": "string"
// //     },
// //     "image": "string",
// //     "dateOfBirth": "string", // format date
// //     "phones": [
// //       {
// //         "phone": "string",
// //         "primary": "boolean"
// //       }
// //     ],
// //     "sex": "string", // male OR female
// //     "description": "string"
// //   }
// // all fields are required, except description
  
// // Create new Pupil from Pupil's data
// const pupils = new PupilsModel();

// const data = {
//   name: {
//     first: 'stazhik',
//     last: 'tchkhondidelidze'
//   },
//   image: 'image',
//   dateOfBirth: '10/10/1993',
//   phones: [
//     {
//       phone: '593131231',
//       primary: true
//     }
//   ],
//   sex: 'male',
//   subjects: [
//     {
//       subject: 'Obojedima'
//     }
//   ],
//   description: 'very good'
// }

// // Create a new pupil
// const pupilId = pupils.add(data);

// // will return Pupils data including pupil's id
// console.log(pupils.read(pupilId));

// // will update Pupil. This method should use the same validation as a constructor method
// pupils.update(pupilId, {image: 'everyday gym day'})

// console.log(pupils.read(pupilId));


// // will remove pupil
// pupils.remove(pupilId)

// console.log(pupils.read(pupilId));
