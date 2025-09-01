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
setInterval(function() {
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
 