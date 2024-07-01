
// const students = [
//     { name: 'Alisher', age: 20, score: 85, status: 'active' },
//     { name: 'Bobur', age: 22, score: 92, status: 'inactive' },
//     { name: 'Dovron', age: 20, score: 67, status: 'active'},
//     { name: 'Azizaxon', age: 36, score: 72, status: 'inactive' },
//     { name: 'Asror', age: 45, score: 52, status: 'inactive' },
//     { name: 'Azimjon', age: 32, score: 96, status: 'inactive' },
//     { name: 'Qaxramon', age: 52, score: 60, status: 'inactive' },
//     { name: 'Axmatjon', age: 21, score: 34, status: 'inactive' },
//     { name: 'Diyor', age: 16, score: 87, status: 'inactive' },
//   ];


//   function names(students) {
//     students.forEach(student => {
//       console.log(`${student.name}, age: ${student.age}` );
//     });
//   }
  
  
//   names(students);

// 2-masala

// const students = [
//   { name: 'Alisher', age: 20, score: 85, status: 'active' },
//   { name: 'Boboxon', age: 22, score: 99, status: 'inactive' },
//   { name: 'Davron', age: 23, score: 24, status: 'active' },
//   { name: 'Alisher', age: 32, score: 71, status: 'inactive' },
//   { name: 'Jololxon', age: 40, score: 34, status: 'active' },
//   { name: 'Behruz', age: 42, score: 91, status: 'inactive' },
//   { name: 'Javohur', age: 50, score: 88, status: 'active' },
//   { name: 'Qahramon', age: 26, score: 56, status: 'inactive' }
// ];

// let higtscore = students => students.reduce((prev, current) => (prev.score > current.score) ? prev : current);


// let highestScorer = higtscore(students);
// console.log(`${highestScorer.score}   ${highestScorer.name}` );


// 3-masala


// const students = [
//   { name: 'Alimardon', age: 20, score: 85, status: 'active' },
//   { name: 'Bobur', age: 22, score: 92, status: 'inactive' },
//   { name: 'Amirxon', age: 23, score: 88, status: 'active' },
//   { name: 'Diyor', age: 32, score: 78, status: 'active' },
//   { name: 'Jamshid', age: 13, score: 81, status: 'active' },
//   { name: 'Qahramon', age: 33, score: 43, status: 'active' },
//   { name: 'Shukurona', age: 25, score: 58, status: 'active' },
//   { name: 'Ozodbek', age: 24, score: 98, status: 'active' },
// ];

// let filterStudents = students => {
//   return students.filter(student => student.name.charAt(0).toLowerCase() === 'a');
// };


// let filteredStudents = filterStudents(students);
// console.log(filteredStudents);



// 4-masala


// const students = [
//   { name: 'Alisher', age: 20, score: 85, status: 'active' },
//   { name: 'Saydula', age: 22, score: 92, status: 'inactive' },
//   { name: 'Murod', age: 23, score: 88, status: 'active' },
//   { name: 'Sayit', age: 32, score: 78, status: 'active' },
//   { name: 'Jamol', age: 13, score: 81, status: 'active' },
//   { name: 'Toxir', age: 33, score: 43, status: 'active' },
//   { name: 'Guli', age: 25, score: 58, status: 'active' },
//   { name: 'Laylo', age: 24, score: 98, status: 'active' },
// ];

// const calculate = students => {
//   if (students.length === 0) {
//     return 0; 
//   }

//   const totalScore = students.reduce((sum, student) => sum + student.score, 0);
//   const averageScore = totalScore / students.length;
//   return averageScore;
// };


// const average = calculate(students);
// console.log(O'rtacha ball: ${average});


// 5-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'John', age: 22, score: 92, status: 'inactive' },
//   { name: 'Bob', age: 23, score: 88, status: 'active' }
// ];

// function findStudentName(studentsArray, name) {
//   return studentsArray.find(student => student.name === name);
// }


// const student = findStudentName(students, 'John');
// console.log(student);


// 6-masala


// const students = [
//   { name: 'Alice', age: 20, score: 80, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 85, status: 'active' }
// ];

// function findIndexScore(studentsArray, minScore) {
//   for (let i = 0; i < studentsArray.length; i++) {
//     if (studentsArray[i].score >= minScore) {
//       return i; 
//     }
//   }
//   return -1; 
// }


// const index = findIndexScore(students, 85);
// console.log(index); 


// 7-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function filterActiveStudents(studentsArray) {
//   return studentsArray.filter(student => student.status === 'active');
// }


// const activeStudents = filterActiveStudents(students);
// console.log(activeStudents);


// 8-masala


// const students = [
//   { name: 'Alisher', age: 20, score: 85, status: 'active' },
//   { name: 'Bobur', age: 22, score: 92, status: 'inactive' },
//   { name: 'Samandar', age: 17, score: 88, status: 'active' }
// ];

// function Students(studentsArray) {
//   return studentsArray.every(student => student.age >= 18);
// }


// const allAdults = Students(students);
// console.log(`18 yoshdan katta: ${allAdults}`);


// 9-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function Student(studentsArray) {
//   return studentsArray.some(student => student.score >= 90);
// }


// const HighScore = Student(students);
// console.log(`Kamida  ${HighScore}`);


// 10-masala


// 11-masala


// 12-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// function Names(studentsArray) {
//   return studentsArray.map(student => ({
//     ...student,
//     name: student.name.toUpperCase()
//   }));
// }


// const Students = Names(students);
// console.log(Students);


// 13-masala

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function Scores(studentsArray) {
//   return studentsArray.map(student => student.score);
// }


// const scores = Scores(students);
// console.log(scores);


// 14-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' }
// ];

// function Keys(obj) {
  
//   return Object.keys(obj);
// }


// const keys = Keys(students[0]);
// console.log( keys);


// 15-masala


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addStudent(students, newStudent) {
  
//   const newStudents = students.slice();
  
//   newStudents.push(newStudent);
  
//   return newStudents;
// }


// const updatedStudents = addStudent(students, newStudent);
// console.log('Yangi ro\'yxat:');
// console.log(updatedStudents);


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function addStudent(studentsArray, newStudent) {
//   return [...studentsArray, newStudent];
// }


// const updatedStudents = addStudent(students, newStudent);
// console.log(updatedStudents);



