let accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}

// burger bar

let navigation = document.getElementById('navbarlinks'),
    toggleButton = document.getElementById('burger'),
    toggleBurger1 = document.getElementById('toggleBurger1'),
    toggleBurger2 = document.getElementById('toggleBurger2'),
    toggleBurger3 = document.getElementById('toggleBurger3');

    toggleButton.addEventListener('click', function(){
        navigation.classList.toggle('activeNavigation');
        toggleBurger1.classList.toggle('activate');
        toggleBurger2.classList.toggle('activate');
        toggleBurger3.classList.toggle('remove');
    })
