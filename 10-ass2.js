function toggleBtn(toggle) {
        const button = document.querySelector(toggle);
        if (!button.classList.contains("is-toggled")) {
          
           turnOffPreviousBtn();
           
          button.classList.add("is-toggled");
        } else {
          button.classList.remove("is-toggled");
        }
      }

function turnOffPreviousBtn(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}  