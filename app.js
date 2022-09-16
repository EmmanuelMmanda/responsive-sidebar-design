//selectors
const toggler = document.querySelector('.toggler');
const body = document.querySelector('body');
const modeText = document.querySelector('.mode-text');
const moon = document.querySelector('.moon');
const sun = document.querySelector('.sun');

const sidebar = document.querySelector('.sidebar');
const sidebarToogler = document.querySelector('.toggle');


//event listerners

toggler.addEventListener( 'click', toggleSwitch = () => {
    if(toggler.classList.contains('active')){
        toggler.style.left = '4px';
        toggler.classList.remove('active');
        body.classList.remove('dark');
        modeText.innerText = "Dark Mode";
        sun.style.opacity = 1;
        moon.style.opacity = 0;

    }else{
        toggler.style.left = '25px';
        toggler.classList.add('active');
        body.classList.toggle('dark');
        modeText.innerText = "Light Mode";
        moon.style.opacity = 1;
        sun.style.opacity = 0;
    }
} );
moon.style.opacity = 0;
sidebarToogler.addEventListener( 'click' , () => {
    sidebar.classList.toggle('close');
});

