window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.reveal');
      var referenciaTopInicio = document.getElementById("telaInicial").getBoundingClientRect().top;
      
      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }

        if (referenciaTopInicio == 0){
          reveals[i].classList.remove('active');
          reveals[i].classList.add('desactive');
        }
      }
    }