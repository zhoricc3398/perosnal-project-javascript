const pupilId = pupil.id;
const teacherId = teacher.id;
const gradebook = new GradebooksModel(group.id);

// Destroy all data inside this gradebook
await gradebook.clear();

const record = {
  pupilId: pupilId,
  teacherId: teacherId,
  subjectId: history.id,
  lesson: 1,
  mark: 9
};

await gradebook.add(record);

// Read information about oliver results
const oliver = await gradebook.read(pupilId);
// {
//   name: 'Oliver Black',
//   records: [
//     {
//       teacher: 'Elizabeth Holms',
//       subject: 'History',
//       lesson: 1,
//       mark: 9
//     }
//   ]
// }

// Read information about all students in this gradebook
const students = await gradebook.readAll(); // It will return the array of objects