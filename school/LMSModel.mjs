

// {
//     "title": "string",
//     "lessons": "number",
//     "description": "string"
//   }
  
  const history = new SubjectsModel({
    title: 'History',
    lessons: 24
  });
  
  // will return subjectId
  history.id
  
  const lms = new LMSModel();
  await lms.remove(history);
  await lms.add(history);
  await lms.update(history);
  
  // will return true or false. Answer will be true if we added this subject to lms
  await lms.verify(history);
  
  // will return array of registered subjects
  await lms.readAll();
  [
    {
      subjectId: null
    }
  ]