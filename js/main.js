window.onload = function()
{

  function inArray (arrayToCheck, value){
    for (i = 0; i < arrayToCheck.length;i++){
      if(arrayToCheck[i] === value){
        return true;
      }
    }
    return false
  }
   var randArray = [3,1,5,6,4,3,7,6,4,3,65];
   document.write(inArray(randArray,6));

   function times2(x){
     return x*2
   }
   document.write("<br>" + times2(26))

   function multiply(r,z) {
     return r * z
   }

   document.write("<br>" + multiply(2,3))
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
