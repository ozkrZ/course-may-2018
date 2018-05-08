function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
       elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveFast() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
       elem.innerHTML = width * 1  + '%';
    }
  }
}

function moveAdvance() {
  var elem = document.getElementById("myBar2");
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
      document.getElementById("myP").className = "w3-text-blue w3-animate-opacity";
      document.getElementById("myP").innerHTML = "Successfully loaded 100%";
    } else {
      width++;
      elem.style.width = width + '%';
      var num = width * 10 / 10;
      num = num.toFixed(0)
      document.getElementById("demo").innerHTML = num;
    }
  }
}
