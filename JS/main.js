console.log("Hello World!");

var i = 0
var intro = "Hi, I'm Robertas"
var bio = "I'm a developer."
var typeSpeed = Math.random() * 100 + 50;
const navBtn = document.querySelector('.burger-btn')
const closeNav = document.querySelector('.close-btn')
const bannerContent = document.querySelector('.banner-content')

//Checks if there is content in the banner to prevent the code from runnin on other pages
//Listens for when the page loads
//If loop that checks if there is any text left in the intro var
//Adds the letter to the end of the intro string and adds it to the html
//Adds 1 to the i value to move up 1 letter in the intro string
//Short pause to emmulate typing then calls itself
//After it's finished it calls the next function 

if (bannerContent != null) {
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
}

//After it's called it repeats what the previous one did right after the previous one finishes.

function typeBio() {
    if (i < bio.length) {
      document.getElementById("bio").innerHTML += bio.charAt(i);
      i++;
      setTimeout(typeBio, typeSpeed);
    }
};

//Check for when the nav button is clicked
//Show the nav and hide the nav button

navBtn.addEventListener('click', () => {
    document.querySelector('#nav').style.display = 'block';
    navBtn.style.display = 'none';
});

//Check for when the close button is clicked
//Hide the nav and show the nav button

closeNav.addEventListener('click', () => {
    document.querySelector('#nav').style.display = 'none';
    navBtn.style.display = 'block';
});


const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');

if (form != null) {
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
}


const previewForm = document.getElementById('preview-form');

if (previewForm != null) {
    previewForm.addEventListener('submit', (e) => {
        const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ ;

        if (!email.value.match(regex)) {
            email.style.outline = "3px solid red";
            document.querySelector('.email').classList.add('noEmail')
            e.preventDefault()
        } else {
            document.querySelector('.email').classList.remove('noEmail')
            email.removeAttribute("style");
        }
    });
}

const firstExample = document.getElementById('first-example')

if (firstExample != null) {
    const firstHTML = document.getElementById('first-example').querySelector('.html')
    const firstSCSS = document.getElementById('first-example').querySelector('.scss')
    const firstJS = document.getElementById('first-example').querySelector('.js')
    const firstHTMLCode = document.getElementById('first-example').querySelector('.code-html')
    const firstSCSSCode = document.getElementById('first-example').querySelector('.code-scss')
    const firstJSCode = document.getElementById('first-example').querySelector('.code-js')

    firstHTML.addEventListener('click', () => {
        firstHTML.classList.add('selected')
        firstJS.classList.remove('selected')
        firstSCSS.classList.remove('selected')
        firstHTMLCode.classList.add('open')
        firstJSCode.classList.remove('open')
        firstSCSSCode.classList.remove('open')
    })

    firstSCSS.addEventListener('click', () => {
        firstHTML.classList.remove('selected')
        firstJS.classList.remove('selected')
        firstSCSS.classList.add('selected')
        firstHTMLCode.classList.remove('open')
        firstJSCode.classList.remove('open')
        firstSCSSCode.classList.add('open')
    })

    firstJS.addEventListener('click', () => {
        firstHTML.classList.remove('selected')
        firstJS.classList.add('selected')
        firstSCSS.classList.remove('selected')
        firstHTMLCode.classList.remove('open')
        firstJSCode.classList.add('open')
        firstSCSSCode.classList.remove('open')
    })
}

const projectSelect = document.getElementById('project-sort')

if (projectSelect != null) {
    var project = document.querySelectorAll('.project')
    var select = document.getElementById('project-selector')
    var selectedProject = select.value
    projectSelect.addEventListener('click', () => {
        selectedProject = select.value

        if (selectedProject == "all") {
            for (i = 0; i < project.length; i++) {
                project[i].removeAttribute('style')
            }
        }
        if (selectedProject == "css") {
            for (i = 0; i < project.length; i++) {
                if (!project[i].classList.contains("css")) {
                    project[i].style["display"] = 'none'
                } else {
                    project[i].style["display"] = 'block'
                }
            }
        }
        if (selectedProject == "html") {
            for (i = 0; i < project.length; i++) {
                if (!project[i].classList.contains("html")) {
                    project[i].style["display"] = 'none'
                } else {
                    project[i].style["display"] = 'block'
                }
            }
        }
        if (selectedProject == "php") {
            for (i = 0; i < project.length; i++) {
                if (!project[i].classList.contains("php")) {
                    project[i].style["display"] = 'none'
                } else {
                    project[i].style["display"] = 'block'
                }
            }
        }
        if (selectedProject == "js") {
            for (i = 0; i < project.length; i++) {
                if (!project[i].classList.contains("js")) {
                    project[i].style["display"] = 'none'
                } else {
                    project[i].style["display"] = 'block'
                }
            }
        }
    })
}



function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}