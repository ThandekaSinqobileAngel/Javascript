
///////////////FACEBOOK 2////////////////
var database = [
  {
    username:"andrei",
    password:"supersecret"
  },
  {
    username:"sally",
    password:"123"
  },
  {
    username:"ingrid",
    password:"777"
  }
];

var newsFeed = [
  {
    username:"Bobby",
    timeline:"So tured from all that learning"
  },
  {
    username:"Sally",
    timeline:"Jascript is so cool!"
  },
  {
    username:"Xolani",
    timeline:"Jascript is super cool!"
  }
];

var usernamePrompt = prompt("What your username?");
var passwordPrompt = prompt("What is your password?");
//checking for multiple users credentials
function isUserValid(username, password) {
  for (var i=0; i < database.length; i++) {
    if (database[i].username === username &&
      database[i].password === password) {
        return true;
      } 
  }
  return false;
}
function signIn(username,password) {
  if (isUserValid(username,password)) {
      console.log(newsFeed);
    } else {
      alert("Sorry wrong username and password");an
    }
}

signIn(usernamePrompt,passwordPrompt);

/////////////////LOOPS///////////////////
//for; while; do; forEach(new in ECMAScript 5)
// var todo = [
//   "clean room",
//   "brush teeth",
//   "exercise",
//   "study javascript",
//   "eat healthy"
// ];

// var todoImportant = [
//   "clean room!",
//   "brush teeth!",
//   "exercise!",
//   "study javascript!",
//   "eat healthy!"
// ];

//forEach loop
// todo.forEach(function(to,i){
//   console.log(to,i);
// })
//same as above but longer
// function logTodos(to, i) {
//   console.log(to, i);
// }

// todo.forEach(logTodos);
// todoImportant.forEach(logTodos)

//while loop
// var counterOne = 10;
// while (counterOne >= 0) {
//   console.log(counterOne);
//   counterOne --;
// }

//do while loop
// var counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo --;
// } while (counterTwo > 0);


//eg2 for loop
// var todoLength = todo.length;
// for (var i=0; i < todoLength; i++) {
//   todo.pop();
// }
// console.log(todo);
//eg1 for loop
// for (var i=0; i < todo.length; i++) {
//   console.log(todo[i] + "!");
  //todo[i] = todo[i] + "!"
//}


////////////FACEBOOK USING JS////////////
// var database = [
//   {
//     username:"andrei",
//     password:"supersecret"
//   }
// ];

// var newsFeed = [
//   {
//     username:"Bobby",
//     timeline:"So tured from all that learning"
//   },
//   {
//     username:"Sally",
//     timeline:"Jascript is so cool!"
//   }
// ];

// var usernamePrompt = prompt("What your username?");
// var passwordPrompt = prompt("What is your password?");

// function signIn(user, pass) {
//   if (user === database[0].username && 
//     pass === database[0].password) {
//       console.log(newsFeed);
//     } else {
//       alert("Sorry wrong username and password");an
//     }
// }

// signIn(usernamePrompt,passwordPrompt);

//////////////ARRAY + OBJECT///////////////////
// var user = {
//   name: "John",
//   age: 34,
//   hobby: "Soccer",
//   isMarried: false,
//   verses: ['Genesis','Proverbs','Luke'],
//   //function inside an object is a method
//   shout: function() {
//     console.log("Jesus");
//   }
// };

// var list = [
//   {
//     username: "andy",
//     password: "secret"
//   },
//   {
//     username: "jess",
//     password: "123"
//   }
// ];