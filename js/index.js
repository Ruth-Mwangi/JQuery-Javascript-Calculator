//imported jquery!..we will be using the javascript and jquery to get the logic to get everything working properly!
//get document ready using jquery..this means when our page loads, run our jquery..
$(document).ready(function(){
   //create variable that stores inputs from user to calculate later..created inputs array
    var inputs=[""];
  //create variable called totalString..this is string that is being outputted right where zero(0) is in white area/space and when we update it..so it is string we will be updating later on within the function and it is gonna be in several functions        //String to store current input string     
    var totalString;     
   //create 3 variables
   //Operators array for validation without the .        
  var operators1 = ["+","-","/","*"];        
  //Operators array with the . for validation 
  var operators2=["."];
  //final global function
  //Numbers for validation 
  var nums = [0,1,2,3,4,5,6,7,8,9];
  //create functions..function called getValue..this function will update all our stuff and it has one parameter input
  function getValue(input){
    //if our dot array operators2 includes(includes basically check a value)..if value u r checking is within operators2, it will return true, if not, it will return false..last value=inputs.length-1
    if(operators2.includes(inputs[inputs.length-1]===true && input===".")){
      console.log("Duplicat '.' ");
    }
    //if very first number is exactly = 1
    else if(inputs.length===1 && operators1.includes(input)===false){
      //add value to inputs array..inputs=array..input=this.id that we will be adding..so basically is checking if it is a number
    inputs.push(input);        
    }
    //if last thing was not an operator, go ahead and add that input to the array
    //if last character was not an operator, add operator to the array
    else if(operators1.includes(inputs[inputs.length-1])===false){
      inputs.push(input);
    }
    //check to add a number..convert string to number
    //if input includes,of how we r getting id, convert string to number..if it includes that input..if that is true..
    else if(nums.includes(Number(input))){
      //push input to end of array?
      inputs.push(input);
    }
    //update function will update value at end of our list
    update();
  }
  //function called update..this(update) is function we will call when we want our code here(right where 0 is in calc) to update to the most current value
  function update(){
    //function will take totalstring variable that empty and set it equal to our array but we wanna join it since it is a string
    totalString = inputs.join("");
    //update needs to update that spot which we called (gave it id of steps) and update it to that string value
    $("#steps").html(totalString);
  }
  //this function evaluates previous function and goes from there I think
  function getTotal(){//basically, if we have a string of 8 + 8 - 5.2, getTotal will then evaluate it and return u a single number
    //we want to evaluate to that with getTotal similar to previous function i think
    //set totalString=inputs array and then join it together as a string
    totalString = inputs.join("");
    //target our steps array and evaluate it and then return the total of it 
    //to evaluate a string as a math operator, u r gonna use eval method to do that for u
    $("#steps").html(eval(totalString));
    
  }
  //in jquery, everything is used as a selector..
  //target the anchor tag to be clicked..so when we click something(anchor tag-buttons in our case), run a function and do some stuff
  $("a").on("click", function(){
    //this.id will return the id of the item we clicked
    if(this.id==="deleteAll"){
      //reset the value of input cause now we r starting from fresh..so put input back to its default value
      inputs=[""];
      //call the update array so that it will update it to the most current value which would be empty at that point
      update();
    }
    else if(this.id==="backOne"){
      //pop off the last array value
      inputs.pop();
      //call update arrayorfunction one more time
      update();
    }
    //if id of item we clicked is = total, call the getTotal function
    else if(this.id==="total"){
      getTotal();
    }
    //make simple else statement
    else{
      //check last input of our inputs array..if last input of our array = -1, then call getValue of this.id
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
        getValue(this.id);
         
      }
      //else, call this value here
      else{
         getValue(this.id);
      }
    }
  });
 });