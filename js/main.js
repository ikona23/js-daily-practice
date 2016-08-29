window.onload = function()
{




// simple objects

function makeObject (key, value) {
  var actual = {}
  actual[key] = value;
  return actual;
}

function getValue (obj, key) {
}

function ageOneYear (obj) {
  obj.age +=1;
  return obj;
}

function deleteProp (obj, key) {
  delete obj[key];
  return obj;
}

// simple arrays

function makeArrayOfItem (item, length) {
  var arr = [length];
  for (var i = 0; i < length; i++) {
    arr[i] = item;
  }
  return arr;
}

function makeArrayOfItems () {
  return Array.from(arguments);
}

function getGreeting (name) {
  return "Hello " + name;
}

function returnErrorIfFalsy(args) {
  if(!args) {
    return obj = {
      name: 'Error',
      message: 'Oh no an error!'
    }
  }
  return true;
}

// TESTS

var expectedObj = { a: 1 }        // this is what we expect our function to make
var actual = makeObject('a', 1)   // this is what our function actually makes

console.log( "makeObject makes objects: ", actual.a === expectedObj.a )     // our 'test' : when it's passing, we will console.log true
console.log( "getValue gets values from objects: ", getValue(expectedObj, 'a') === 1 )


var mickey = { name: 'Mickey Mouse', age: 64, email: 'mickey@disney.com' }
console.log( "ageOneYear adds 1 year to the age property of an object: ", ageOneYear(mickey).age === 65 )


deleteProp(mickey, 'email')
console.log( typeof mickey.email === 'undefined' )


var expectedArray = [ 'a', 'a', 'a' ]
var actualArray = makeArrayOfItem('a', 3)

for (var i = 0; i < expectedArray.length; i++) {
  console.log( expectedArray[i] === actualArray[i] )
}


var arrayOfDifferentItems = [ 'a', 2, false ]
var actualArrayOfDifferent = makeArrayOfItems('a', 2, false)

for (var i = 0; i < expectedArray.length; i++) {
  console.log( arrayOfDifferentItems[i] === actualArrayOfDifferent[i] )
}


var names = [ 'Alice', 'Bob', 'Celia', 'Dan' ]
var expectedGreetings = [ 'Hello Alice', 'Hello Bob', 'Hello Celia', 'Hello Dan' ]
var actualGreetings = names.map(getGreeting)

for (var i = 0; i < names.length; i++) {
  console.log( actualGreetings[i] === expectedGreetings[i] )
}


var people = [ { name: 'Alice' }, { name: 'Bob' }, { name: 'Celia' }, { name: 'Dan' } ]
var expectedPeopleWithGreetings = [
  { name: 'Alice', greeting: 'Hello Alice' },
  { name: 'Bob', greeting: 'Hello Bob' },
  { name: 'Celia', greeting: 'Hello Celia' },
  { name: 'Dan', greeting: 'Hello Dan' }
]

var actualPeopleWithGreetings = people.map(function (person) {
  person.greeting = getGreeting(person.name)
  return person
})

for (var i = 0; i < expectedPeopleWithGreetings.length; i++) {
  console.log( expectedPeopleWithGreetings[i].greeting === actualPeopleWithGreetings[i].greeting )
}
var err = returnErrorIfFalsy(false)
console.log( err.name === 'Error' && err.message === 'Oh no an error!' )

var notErr = returnErrorIfFalsy({})
console.log( notErr === true )

  //
  // function inArray (arrayToCheck, value){
  //   for (i = 0; i < arrayToCheck.length;i++){
  //     if(arrayToCheck[i] === value){
  //       return true;
  //     }
  //   }
  //   return false
  // }
  //  var randArray = [3,1,5,6,4,3,7,6,4,3,65];
  //  document.write(inArray(randArray,6));
  //
  //  function times2(x){
  //    return x*2
  //  }
  //  document.write("<br>" + times2(26))
  //
  //  function multiply(r,z) {
  //    return r * z
  //  }
  //
  //  document.write("<br>" + multiply(2,3))
  // var yourName = prompt("pls give me your name");
  //   if (yourName != null){
  //     document.getElementById("yourNames").innerHTML = "Hi" + " " + yourName;
  //   }else {
  // alert("your neame")
  //   }
  //   var randNum = 5;
  //   document.write("randNum++ =", randNum++, "<br>");
  //   document.write("randNum++ =", randNum++, "<br>");
  //   document.write("randNum++ =", randNum++, "<br>");
  //   document.write("randNum++ =", randNum++, "<br>");
  //   document.write("Math.abs(-194)=", Math.abs(-194),"<br>")
  //   document.write("Math.sqrt(2,4)=", Math.sqrt(2,4),"<br>")
  //   document.write("random number (1-10)", Math.floor((Math.random( )* 10)+1),+ " " + "<br>");
// find a pair
    // for (j=0; j<20; j++) {
    //   if ((j%2) ===0){
    //     continue;
    //   }
    //   if (j=== 15){
    //     break;
    //   }
    //   document.write(j + "<br>");
    //   }
//
//       var peterKona = ["Peter Kona", "243 Masr st",4.43];
//       document.write(peterKona[2] + "<br>")
//
//         peterKona[3]="email";
//         document.write(peterKona[3]+ "<br>")
//
//         // peterKona.splice (2,1, "splice")
//         document.write(peterKona.join(" "), "<br>");
// // sort the numbers inside array
//         var numbers = [4,67,,3,5,5644,3,332,35,565654,3,3345,4334,5444,3,3];
//           var numbersd = [4,67,,3,5,5644,3,332,35,565654,3,3345,4334,5444,3,3];
//
//         numbers.sort(function(x,y){return x-y})
//         numbersd.sort(function(x,y){return y-x})
//         document.write(numbers + "<br>")
//         document.write("sort arrays" + " "  + numbersd + " <br> " + "<br>")
//
//         numbers.sort(function(x,y){return x-y})
//         peterKona.push("hey dude")
//
//         for(i=0; i < peterKona.length; i++){
//           document.write("<br>" + peterKona[i] + "this is for loop" + "<br>");
//         }
//         var combineArrays = peterKona.concat(numbers);
//         peterKona.shift();
//         document.write("combine Arrays" + " "  + combineArrays)

}
