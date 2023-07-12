var age;
var school;
const whichSchool  = function (age) {
  if (age < 13) {
    school = "Elementary School";
  } 
  else if (age >= 13 && age <= 18) {
    school = "Secondary School";
  }
  else {
    school = "Lighthouse Labs";
  }
  console.log("I am " + age + ". Which school should I go to?");
  console.log(school);
}