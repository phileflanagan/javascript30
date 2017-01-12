const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handleCheck(e) {
  console.log(this);
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
