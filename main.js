// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function createUser(firstName, lastName) {
  let user = {
    firstName: firstName,
    lastName: lastName,
  };
  return user;
}
console.log(createUser("Terrence", " Rivers"));
console.log(createUser("Trenton", " Rivers"));

function setAge(user, num) {
  user.age = num;
  return user;
}

function incrementAge(user) {
  user.age = user.age + 1;
  return user;
}

function fixCar(car) {
  car.needsMaintenance = false;
  return car;
}

function addGrades(student, newGrades) {
  for (let i = 0; i < newGrades.length; i++) {
    student.grades.push(newGrades[i]);
  }
  return student;
}

function getDataType(car, make){
  return typeof car[make]
}

function addTodo(todos, newItem){
    todos.push(newItem)
    return todos
}

function addSong(playlist, song){
    playlist.duration += song.duration
    playlist.songs.push(song)
    return playlist

}

function updateReportCard(reportCard, newGrade) {
    reportCard.grades.push(newGrade);
    
    let lowestGrade = reportCard.grades[0];
    let highestGrade = reportCard.grades[0];
    let sum = 0;
    
    for (let i = 0; i < reportCard.grades.length; i++) {
      let grade = reportCard.grades[i];
      if (grade < lowestGrade) {
        lowestGrade = grade;
      }
      if (grade > highestGrade) {
        highestGrade = grade;
      }
      sum += grade;
    }
    
    reportCard.lowestGrade = lowestGrade;
    reportCard.highestGrade = highestGrade;
    reportCard.averageGrade = sum / reportCard.grades.length;
    
    return reportCard;
  }
  

// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │
// │                                                                         │
const isDef = (arg) => arg === "function";
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard)
  ? updateReportCard
  : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
