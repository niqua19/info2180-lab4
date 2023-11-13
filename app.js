window.onload = function() {
    document.getElementsByClassName("search")[0].addEventListener('click', function(){
      // AJAX request
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          // JSON response
        //   var superheroes = JSON.parse(request.responseText);
        document.getElementById("result").innerHTML = this.responseText;

        //alert
        //   if (superheroes.length > 0) {
            // alert('Superheroes:\n' + superheroes.join(', '));
        //   } else {
            // alert('No superheroes found.');
        //   }
        }
      };
    
      var hero= document.getElementById("superheroName").value
      alert(hero)
      request.open('GET', 'superheroes.php?superhero='+hero);
      request.send();
    });
  };
   