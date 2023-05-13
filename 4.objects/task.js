function Student(name, gender, age) {
  this.marks = [];
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
  if (!this.marks) return
  this.marks = marks
}


Student.prototype.getAverage = function () {
  if (!this.marks || !this.marks.length) return 0
  return this.marks.reduce((acc, i) => acc += i, 0) / this.marks.length
}

Student.prototype.exclude = function (reason) {
  delete(this.marks)
  delete(this.subject)
  this.excluded = reason;
}
