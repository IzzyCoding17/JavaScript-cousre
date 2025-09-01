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

  function updateBtn() {
    const button = document.querySelector('.js-btn');


    button.innerHTML = 'Loading...'
    setTimeout(function() {
      button.innerHTML = 'Finished';
    }, 1000);
  }

  //12e/h
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

