console.log("gmail-vim loaded");

let lastKeyD = false;
document.addEventListener("keydown", function(event) {
  console.log(event);
  if (event.target.tagName.toLowerCase() === "input" || event.target.tagName.toLowerCase() === "textarea") {
    return; // Ignore if typing in a text field
  }

  switch (event.key) {
    case 'j':
      event.preventDefault();
      simulateKeyEvent('ArrowDown', 40);
      break;
    case 'k':
      event.preventDefault();
      simulateKeyEvent('ArrowUp', 38);
      break;
    case 'h':
      event.preventDefault();
      simulateKeyEvent('ArrowLeft', 37);
      break;
    case 'l':
      event.preventDefault();
      simulateKeyEvent('ArrowRight', 39);
      break;
    /**case 'd':
      event.preventDefault();
      if (lastKeyD) {
        sendDelete();
        lastKeyD = false;
      }
      else {
        lastKeyD = true;
      }
      break;
      **/
  }
});

function simulateKeyEvent(key, keyCode) {
  const element = document.activeElement || document.querySelector('body');
  const keyboardEvent = new KeyboardEvent('keydown', {
    key: key,
    code: key,
    keyCode: keyCode,
    which: keyCode,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(keyboardEvent);
}
/**
function sendDelete() {
  console.log("send delete");
  const element = document.activeElement || document.querySelector('body');
  console.log(element);
  const keyboardEventShift = new KeyboardEvent('keydown', {
    key: "Shift",
    code: "ShiftLeft",
    keyCode: 16,
    which: 16,
    composed: true,
    cancelable: true,
    bubbles: true,
    shiftKey: true,
    location: 1
  });
  const keyboardEventHash = new KeyboardEvent('keydown', {
    key: "#",
    code: "Digit3",
    keyCode: 51,
    which: 51,
    composed: true,
    cancelable: true,
    bubbles: true
  });
  element.dispatchEvent(keyboardEventShift);
  element.dispatchEvent(keyboardEventHash);
}
**/
