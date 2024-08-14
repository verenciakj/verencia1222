document.querySelector('body').style.backgroundColor="gray";
document.querySelector('body').style.display="flex";
document.querySelector('body').style.flexDirection="column";
document.querySelector('body').style.minHeight="100vh";

let navbar = document.getElementById('navbar');
navbar.innerHTML= "About Me | Contact Me | Portofolio";
navbar.style.color="white";
navbar.style.fontSize="1.5rem";
navbar.style.padding="1em";
navbar.style.marginTop="0em";
navbar.style.marginLeft="37em";

let h1andh2= document.getElementById('h1andh2');
h1andh2.style.display="flex";
h1andh2.style.flexDirection="column";

let h1 = document.getElementById('h1');
h1.innerHTML="Collaborating <br> With Me";
h1.style.color="white";
h1.style.fontSize="4rem";
h1.style.marginTop="1em";
h1.style.marginLeft="1em";

let h2 = document.getElementById('h2');
h2.innerHTML="I am a student passionated with UI and <br> UX Design follow and hire me for more <br> info";
h2.style.color="white";
h2.style.fontSize="1.8rem";
h2.style.marginTop="1em";
h2.style.marginLeft="2.3em";

let hire = document.getElementById('hire');
hire.innerHTML="Hire Me";
hire.style.color="black";
hire.style.fontSize="1.5rem";
hire.style.marginTop="1em";
hire.style.marginLeft="2.2em";
hire.style.height="3em";
hire.style.width="7em";
hire.style.borderRadius="2em";

let line = document.getElementById('line');
line.style.border="white solid";
line.style.height="-1em";
line.style.width="83em";
line.style.alignItems="center";
line.style.justifyContent="center";

let image=document.getElementById('image');
image.style.minWidth='10em';
image.style.minHeight='10em';
image.style.width='20em';
image.style.height='20em';

image.style.backgroundImage="url('https://images.pexels.com/photos/23020558/pexels-photo-23020558/free-photo-of-gran-hotel-on-the-main-square-in-mexico-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
image.style.borderRadius='50%';

image.style.marginLeft='53em';
image.style.marginTop='-21em';

let allbody=document.getElementById('allbody');
allbody.style.display='flex';
allbody.style.flexDirection='column';



