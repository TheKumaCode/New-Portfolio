console.log("Hello World!");

var i = 0
var intro = "Hi, I'm Robertas"
var bio = "I'm a developer."
var typeSpeed = Math.random() * 100 + 50;
const navBtn = document.querySelector('.burger-btn')
const closeNav = document.querySelector('.close-btn')

addEventListener('load', function typeIntro() {
    if (i < intro.length) {
        document.getElementById("intro-name").innerHTML += intro.charAt(i);
        i++;
        setTimeout(typeIntro, typeSpeed);
    } else {
        i = 0;
        typeBio();
    }
});

function typeBio() {
    if (i < bio.length) {
      document.getElementById("bio").innerHTML += bio.charAt(i);
      i++;
      setTimeout(typeBio, typeSpeed);
    }
};

navBtn.addEventListener('click', () => {
    document.querySelector('#nav').style.display = 'block';
    navBtn.style.display = 'none';
});

closeNav.addEventListener('click', () => {
    document.querySelector('#nav').style.display = 'none';
    navBtn.style.display = 'block';
});


const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;

    if (firstName.value === '' || firstName.value == null) {
        firstName.style.outline = "3px solid red";
        document.querySelector('.firstName').classList.add('noFirstName')
        e.preventDefault()
    } else {
        document.querySelector('.firstName').classList.remove('noFirstName')
        firstName.removeAttribute("style");
    }

    if (!email.value.match(regex)) {
        email.style.outline = "3px solid red";
        document.querySelector('.email').classList.add('noEmail')
        e.preventDefault()
    } else {
        document.querySelector('.email').classList.remove('noEmail')
        email.removeAttribute("style");
    }

    if (message.value === '' || message.value == null) {
        message.style.outline = "3px solid red";
        document.querySelector('.message').classList.add('noMessage')
        e.preventDefault()
    } else {
        document.querySelector('.message').classList.remove('noMessage')
        message.removeAttribute("style");
    }
});