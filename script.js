const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelector('#login-btn');
const msg = document.querySelector('#message');
btn.disabled = true;
msg.style.display = 'none';

uname.addEventListener('input', checkInput);
pass.addEventListener('input', checkInput);

function checkInput() {
  if (uname.value.trim() !== '' && pass.value.trim() !== '') {
    btn.disabled = false;
    msg.style.display = 'block';
    btn.classList.remove('shift-left', 'shift-right', 'shift-top', 'shift-bottom');
    btn.style.position = 'static';
  } else {
    btn.disabled = true;
    shiftButton();
  }
}

function shiftButton() {
  const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
  const currentPosition = positions.find(dir => btn.classList.contains(dir));
  const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];

  btn.classList.remove(currentPosition);
  btn.classList.add(nextPosition);
  btn.style.position = 'absolute';
}
