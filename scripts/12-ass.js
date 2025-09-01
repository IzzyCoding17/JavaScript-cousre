// 12 a & b
/*const add = function() {
  console.log(2+3);
}
add();
add();

function runTwice(fun){
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
})

runTwice(add); */

//12c&d
  // Grouping the JavaScript code into a function
  // is optional, but it is a bit cleaner.

  document.querySelector('.js-btn').addEventListener('click', ()=> {
    const button = document.querySelector('.js-btn');
    


    button.innerHTML = 'Loading...'
    setTimeout(() =>{
      button.innerHTML = 'Finished';
    }, 1000);
  })
    
  

  //12e/f
  let timeoutId;

  function displayMssg() {
    const messgElement = document.querySelector('.js-add-btn');
    messgElement.innerHTML = 'Added'

    // First, cancel the previous timeout so that
    // it doesn't remove the message too quickly.

    clearTimeout(timeoutId);

    timeoutId = setTimeout(function(){
      messgElement.innerHTML = ''
    }, 2000)
  }

  //12g/h/i
  let mssg = 2;
setInterval(() =>{
  if(document.title === 'App') {
    document.title = `(${mssg})New messages`;
  }else{
    document.title = 'App';
  }

  if (mssg === 0){
    document.title = 'App';
  }else if (mssg > 0){

  }
}, 1000);

      //  Note: This is just a sample solution. Other
      // solutions are possible so don't worry if
      // your solution looks different.
/*    let messages = 2;

      // Save the intervalId in case we need to cancel it.
      let intervalId;

      // We'll use this variable to keep track of whether
      // or not we're displaying the notification.
      let isDisplayingNotification;

      // Start displaying the notification in the tab
      // when the page first loads.
      displayNotification();

      function displayNotification() {
        // If we're already displaying the notification,
        // stop this function because we don't want to
        // create 2 intervals at the same time.
        if (isDisplayingNotification) {
          return;
        }

        isDisplayingNotification = true;

        intervalId = setInterval(function() {
          if (document.title === 'App') {
            document.title = `(${messages}) New messages`;
          } else {
            document.title = 'App';
          }
        }, 1000);
      }

      function stopNotification() {
        isDisplayingNotification = false;

        clearInterval(intervalId);
        document.title = 'App';
      } */


 //12j/k
 const multiply = (a, b) => {
return a * b;
 };

 //const multiply = (a, b) => a*b; //shorter way to write the code

 console.log(multiply(2, 3));
 console.log(multiply(7, 10));

 //12l

 function countPositive(nums){
  let positiveNumbers = 0;

    // When there is only 1 parameter,
    // the brackets are optional. So
    // we can also write: num => { ... }

    nums.forEach((num) => {
        if (num > 0){
          positiveNumbers++;
        }
    });
    return positiveNumbers;
 }

 console.log(countPositive([1, -3, 5]));
 console.log(countPositive([-2, 3, -5, 7, 10]));

 //12m
 function addNum(array, num){
    // When there is only 1 parameter,
    // the brackets are optional. So we
    // can also write: value => value + num
 
    return array.map((value) => value + num);
 }

 console.log(addNum([1, 2, 3], 2));
 console.log(addNum([-2, -1, 0, 99], 2))

 //12n

 function removeEgg(foods){
    // If food is 'egg', the inner function returns false
    //   and the food is not included in the result.
    // Otherwise, the inner function returns true
    //   and the food is included in the result. 

    return foods.filter((food) => food !== 'egg');
 }

    console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

   //12o
     function removeEggs(foods){
     let eggsRemoved = 0;

    return foods.filter((food) =>{
      // If the food is 'egg', we should return false
      // but only if we haven't removed 2 eggs already.
      if(food === 'egg' && eggsRemoved < 2){
        eggsRemoved++;
        return false;
      }
      return true;
                   
    });
 }

    console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));