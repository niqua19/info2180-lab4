window.onload = function() {
    document.querySelector('button[type="search"]').addEventListener('click', function() {
      // AJAX request
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
          // JSON response
          var superheroes = JSON.parse(request.responseText);
        //alert
          if (superheroes.length > 0) {
            alert('Superheroes:\n' + superheroes.join(', '));
          } else {
            alert('No superheroes found.');
          }
        }
      };
  
      
      request.open('GET', 'superheroes.php', true);
      request.send();
    });
  };
  