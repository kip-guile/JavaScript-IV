// CODE here for your Lambda Classes
class Persons{
    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.location = data.location;
    }
    speak(){
        return 'Hello, my name is ' + this.name + ', I am from ' + this.location;
    }
}

class Instructor extends Persons{
    constructor(data){
        super(data);
        this.specialty = data.specialty;
        this.favLanguage = data.favLanguage;
        this.catchphrase = data.catchphrase;
    }
    demo(subject){
        return 'Today, we are learning about ' + subject;
    }
    grade(student, subject){
        console.log(student.name + ' recieves a perfect score on ' + subject);
    }
}

class Student extends Persons{
    constructor(data){
        super(data);
        this.previousBackground = data.previousBackground;
        this.className = data.className;
        this.favSubjects = data.favSubjects;
    }
    listsSubjects(){
        return this.favSubjects;
    }
    prAssignment(subject){
        return this.name + ' has submitted a PR for ' + subject;
    }
}

class ProjectManager extends Instructor{
    constructor(data){
        super(data);
        this.gradClassName = data.gradClassName;
        this.favInstructor = data.favInstructor;
    }
    standUp(channel){
        return this.name + ' announces to slack channel, ' + channel + ' @channel standy times!'
    }
    debugsCode(student, subject){
        return this.name + ' debugs ' + student.name + "'s code on " + subject;
    }
}

const fred = new Persons({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const brock = new Instructor({
    name: 'Brock',
    location: 'Hampton',
    age: 32,
    favLanguage: 'Perl',
    specialty: 'Back-end',
    catchPhrase: `forget the homies`
  });

  const harry = new Student({
    name: 'Harry',
    location: 'Dresden',
    age: 15,
    favLanguage: 'Witchcraft',
    specialty: 'Middle-end',
    catchPhrase: `Stars and stones`,
    previousBackground: 'Wizardry',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    className: 'LA123',
  });

  const george = new ProjectManager({
    name: 'George',
    location: 'Cabrejas',
    age: 15,
    favLanguage: 'Bugs',
    specialty: 'Middle-end',
    catchPhrase: `Stars and stones`,
    gradClassName: 'CS543',
    favInstructor: 'Sean',
  });


  console.log(fred.speak());

  console.log(brock.demo('Bangladesh'));


  console.log(harry.listsSubjects());
  console.log(harry.prAssignment('Javascript'));


  
  console.log(george.standUp('group'));
  console.log(george.debugsCode(harry, 'Javascript'));
