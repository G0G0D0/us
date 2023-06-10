function openBox() {
    var box = document.getElementById('box');
    box.style.display = 'block';
  }
  
  function selectOption(yes) {
    var box = document.getElementById('box');
    var outcome = document.getElementById('outcome');
  
    if (yes) {
      box.style.display = 'none';
      outcome.style.display = 'block';
    } else {
      box.style.display = 'none';
      alert("You think you have an option?");
    }
  }
  