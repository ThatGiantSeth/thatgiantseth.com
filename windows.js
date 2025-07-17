const windowList = document.getElementsByClassName('window');
var currentWindow;
var closeButton;

for (var i = 0; i < windowList.length; i++) {
  currentWindow = windowList[i]; 
  closeButton = (currentWindow.getElementsByClassName('close-button'))[0];
  draggable(currentWindow);
  closeWindow(closeButton, currentWindow);
}

function openWindow(oButton, currentWindow) {
    oButton.addEventListener("click", () => {
    currentWindow.classList.toggle("closed");
  });
}

function closeWindow(cButton, currentWindow) {
    cButton.addEventListener("click", () => {
    currentWindow.classList.add("closed");
  });
}

function draggable(element) {
  let newX = 0, newY = 0, startX = 0, startY = 0;

  element.addEventListener('mousedown', mouseDown);

  function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
  }

  function mouseMove(e){
      newX = startX - e.clientX;
      newY = startY - e.clientY;
    
      startX = e.clientX;
      startY = e.clientY;

      element.style.top = (element.offsetTop - newY) + 'px';
      element.style.left = (element.offsetLeft - newX) + 'px';
  }

  function mouseUp(){
      document.removeEventListener('mousemove', mouseMove);
  }

}