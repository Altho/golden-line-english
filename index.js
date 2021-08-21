const navBar = document.querySelector('nav');
window.addEventListener('scroll',function(e){
    console.log(window.scrollY);
    console.log(window.innerHeight);

    if(window.scrollY <  window.innerHeight-70){
        if(navBar.classList.contains('nav-presentation')){
            navBar.classList.remove('nav-presentation')

        }
        if(navBar.classList.contains('nav-presentation')===false){
            navBar.classList.add('nav-welcome')


        }



    }
    else if(window.scrollY >  window.innerHeight-70 && window.scrollY <  window.innerHeight*2-70){
        if(navBar.classList.contains('nav-welcome')){
            navBar.classList.remove('nav-welcome')

        }
        if(navBar.classList.contains('nav-pricing')){
            navBar.classList.remove('nav-pricing')

        }

        navBar.classList.add('nav-presentation')
    }
else if(window.scrollY >  window.innerHeight*2-70 && window.scrollY <  window.innerHeight*3-70){
        if(navBar.classList.contains('nav-presentation')){
            navBar.classList.remove('nav-presentation')

        }
        if(navBar.classList.contains('nav-contact')){
            navBar.classList.remove('nav-contact')

        }


        navBar.classList.add('nav-pricing')
    }

else if(window.scrollY >  window.innerHeight*3-70){
        if(navBar.classList.contains('nav-pricing')){
            navBar.classList.remove('nav-pricing')

        }

        navBar.classList.add('nav-contact')
    };

})

