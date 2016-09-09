window.onload = function(){
  var main = document.getElementById('main');
  var roll = document.getElementById('roll');
  var add  = document.getElementById('add');
  add.addEventListener("click", function(){
    addDie();
  });
  roll.addEventListener("click", function(){
    rollDie();
  });

  function addDie(){
    var die  = document.createElement('div');
    die.setAttribute('class', 'die');
    die.innerHTML = random();
    main.appendChild(die)
  };

  function rollDie() {
    var dice = document.getElementsByClassName('die');
    for (var i = 0; i < dice.length; i++) 
    {
      dice[i].innerHTML = random();
    };
    checkForWin();
  };

  function checkForWin()
  {
    var win = false;
    var dice = document.getElementsByClassName("die");
    if(dice.length > 1)
    {
      win = true;
      var firstDie = dice[0];
      for(var i = 1; i < dice.length; i++)
      {
        if (dice[i].innerHTML != firstDie.innerHTML)
        {
            win = false;
        }
      }
    }
    if(win)
    {
      var main = document.getElementById("main");
      main.style.background = "url(youwin.jpg)"
      main.style.backgroundRepeat = "no-repeat";
      main.style.backgroundPosition = "center top";
      main.style.backgroundSize = "1000px 1000px";
    }
  }

  function random()
  {
    return Math.floor(Math.random() * (6) + 1);
  }
};
