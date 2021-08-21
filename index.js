setTimeout(function(){
    document.body.className="";
    console.log('loaded')
},500);

const navBar = document.querySelector('nav');
const sideMenu = document.querySelector('#side-menu');
window.addEventListener('scroll',function(e){


    if(window.scrollY <=  window.innerHeight){
        navBar.classList.remove('out');

        navBar.classList.add('in');

        // navBar.classList.remove('hidden');
        sideMenu.classList.remove('side-in');

        sideMenu.classList.add('side-out');



    }
    else if(window.scrollY >  window.innerHeight ) {
        navBar.classList.remove('in');

        navBar.classList.add('out');

        // navBar.classList.add('hidden');
        sideMenu.classList.remove('side-out');

        sideMenu.classList.add('side-in');
    }})
