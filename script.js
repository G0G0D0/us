function revealOptions() {
    var optionsDiv = document.getElementById("options");
    optionsDiv.style.display = "block";
  }
  
  function selectOption(option) {
    if (option) {
      window.location.href = "happy-page.html";
    } else {
      alert("You think you have an option?");
    }
  }
  