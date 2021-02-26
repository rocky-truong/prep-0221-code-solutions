var person = {
  firstName: 'Rocky',
  lastName: 'Truong',
  hobby: 'tennis'
};

console.log(person);

person.job = 'unemployed';
person.previousJob = 'intern';

var fullName = (person.firstName) + ' ' + (person.lastName);

console.log("The person's name is:", fullName + '.');

console.log("The person's current job is:", (person.job) + '.');

console.log("The person's previous job is:", (person.previousJob) + '.');

console.log('The complete person object:', (person));

var myCar = {
  make: 'Hyundai',
  model: 'Ioniq',
  year: '2018'
};

console.log('Car Information', myCar);

myCar['owner'] = fullName;

console.log('My name is', (fullName), 'and I drive a', (myCar.year), (myCar.make), (myCar.model) + '.');

myCar['color'] = 'white';

console.log('My full car info:', myCar);
