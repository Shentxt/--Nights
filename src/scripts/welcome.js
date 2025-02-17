const inputs = document.querySelectorAll('#name-input-container input');

const saveName = () => {
  const name = Array.from(inputs)
    .map(input => input.value.trim())
    .join('');

  if (name && name.trim() !== "") {
    localStorage.setItem("userName", name);
    document.getElementById("welcome").textContent = `Hello, ${name}!`;
    togglePopup('name-modal'); 
  }
};

inputs.forEach((input) => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      saveName();
    } 
  });
});

inputs.forEach((input, index) => {
  input.addEventListener('input', (event) => {
    const value = event.target.value;

    if (value.length > 1) {
      event.target.value = value.slice(0, 1); 
    }

    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus(); 
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
      if (event.target.value.length === 0 && index > 0) {
        inputs[index - 1].value = ''; 
        inputs[index - 1].focus(); 
      } else if (event.target.value.length > 0) {
        event.target.value = ''; 
      }
    }
  });
});

window.addEventListener('load', function () {
  let savedName = localStorage.getItem("userName");

  if (!savedName) {
    togglePopup('name-modal'); 
  } else {
    document.getElementById("welcome").textContent = `Hello, ${savedName}!`;
  }
  inputs.forEach(input => input.value = '');
});