var i = 0;
var intro = "Hi, I'm Robertas";
var bio = "I'm a developer.";
var typeSpeed = Math.random() * 100 + 50;
const navBtn = document.querySelector(".burger-btn");
const closeNav = document.querySelector(".close-btn");
const bannerContent = document.querySelector(".banner-content");

if (bannerContent != null) {
	addEventListener("load", function typeIntro() {
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

function typeBio() {
	if (i < bio.length) {
		document.getElementById("bio").innerHTML += bio.charAt(i);
		i++;
		setTimeout(typeBio, typeSpeed);
	}
}

navBtn.addEventListener("click", () => {
	document.querySelector("#nav").style.display = "block";
	navBtn.style.display = "none";
	closeNav.style.display = "block";
});

closeNav.addEventListener("click", () => {
	document.querySelector("#nav").style.display = "none";
	navBtn.style.display = "block";
	closeNav.removeAttribute("style");
});

const firstName = document.getElementById("first-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const form = document.getElementById("contact-form");

if (form != null) {
	form.addEventListener("submit", (e) => {
		const regex =
			/^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;

		if (firstName.value === "" || firstName.value == null) {
			firstName.style.outline = "3px solid red";
			document.querySelector(".firstName").classList.add("noFirstName");
			e.preventDefault();
		} else {
			document
				.querySelector(".firstName")
				.classList.remove("noFirstName");
			firstName.removeAttribute("style");
		}
		if (email.value == "" || email.value == null) {
			email.style.outline = "3px solid red";
			document.querySelector(".email").classList.add("noEmail");
			e.preventDefault();
		} else if (!email.value.match(regex)) {
			email.style.outline = "3px solid red";
			document.querySelector(".email").classList.add("badEmail");
			e.preventDefault();
		} else {
			document.querySelector(".email").classList.remove("noEmail");
			document.querySelector(".email").classList.remove("badEmail");
			email.removeAttribute("style");
		}

		if (subject.value === "" || subject.value == null) {
			subject.style.outline = "3px solid red";
			document.querySelector(".form-subject").classList.add("noSubject");
			e.preventDefault();
		} else {
			document
				.querySelector(".form-subject")
				.classList.remove("noSubject");
			subject.removeAttribute("style");
		}

		if (message.value === "" || message.value == null) {
			message.style.outline = "3px solid red";
			document.querySelector(".message").classList.add("noMessage");
			e.preventDefault();
		} else if (message.value.length < 5) {
			message.style.outline = "3px solid red";
			document.querySelector(".message").classList.add("badMessage");
			e.preventDefault();
		} else {
			document.querySelector(".message").classList.remove("noMessage");
			document.querySelector(".message").classList.remove("badMessage");
			message.removeAttribute("style");
		}
	});
}

const previewForm = document.getElementById("preview-form");

if (previewForm != null) {
	previewForm.addEventListener("submit", (e) => {
		const regex =
			/^([a-zA-Z\d\.-]+)@([a-zA-Z\d-]+)\.([a-zA-Z]{2,8})(\.[a-zA-Z]{2,8})?$/;

		if (!email.value.match(regex)) {
			email.style.outline = "3px solid red";
			document.querySelector(".email").classList.add("noEmail");
			e.preventDefault();
		} else {
			document.querySelector(".email").classList.remove("noEmail");
			email.removeAttribute("style");
		}
	});
}

const firstExample = document.getElementById("first-example");

if (firstExample != null) {
	const firstHTML = document
		.getElementById("first-example")
		.querySelector(".html");
	const firstSCSS = document
		.getElementById("first-example")
		.querySelector(".scss");
	const firstJS = document
		.getElementById("first-example")
		.querySelector(".js");
	const firstHTMLCode = document
		.getElementById("first-example")
		.querySelector(".code-html");
	const firstSCSSCode = document
		.getElementById("first-example")
		.querySelector(".code-scss");
	const firstJSCode = document
		.getElementById("first-example")
		.querySelector(".code-js");

	firstHTML.addEventListener("click", () => {
		firstHTML.classList.add("selected");
		firstJS.classList.remove("selected");
		firstSCSS.classList.remove("selected");
		firstHTMLCode.classList.add("open");
		firstJSCode.classList.remove("open");
		firstSCSSCode.classList.remove("open");
	});

	firstSCSS.addEventListener("click", () => {
		firstHTML.classList.remove("selected");
		firstJS.classList.remove("selected");
		firstSCSS.classList.add("selected");
		firstHTMLCode.classList.remove("open");
		firstJSCode.classList.remove("open");
		firstSCSSCode.classList.add("open");
	});

	firstJS.addEventListener("click", () => {
		firstHTML.classList.remove("selected");
		firstJS.classList.add("selected");
		firstSCSS.classList.remove("selected");
		firstHTMLCode.classList.remove("open");
		firstJSCode.classList.add("open");
		firstSCSSCode.classList.remove("open");
	});
}

const projectSelect = document.getElementById("project-sort");

if (projectSelect != null) {
	var project = document.querySelectorAll(".project");
	var select = document.getElementById("project-selector");
	var selectedProject = select.value;
	projectSelect.addEventListener("click", () => {
		selectedProject = select.value;

		for (i = 0; i < project.length; i++) {
			var languages = project[i].querySelectorAll(".language");
			var hascss = false;
			var hashtml = false;
			var hassql = false;
			var hasphp = false;
			var hasjs = false;
			for (var j = 0; j < languages.length; j++) {
				if (selectedProject == "all") {
					project[i].removeAttribute("style");
				}
				if (selectedProject == "css" && !hascss) {
					if (!languages[j].classList.contains("css")) {
						project[i].style["display"] = "none";
					} else {
						project[i].style["display"] = "block";
						hascss = true;
					}
				}
				if (selectedProject == "html" && !hashtml) {
					if (!languages[j].classList.contains("html")) {
						project[i].style["display"] = "none";
					} else {
						project[i].style["display"] = "block";
						hashtml = true;
					}
				}
				if (selectedProject == "sql" && !hassql) {
					if (!languages[j].classList.contains("sql")) {
						project[i].style["display"] = "none";
					} else {
						project[i].style["display"] = "block";
						hassql = true;
					}
				}
				if (selectedProject == "php" && !hasphp) {
					if (!languages[j].classList.contains("php")) {
						project[i].style["display"] = "none";
					} else {
						project[i].style["display"] = "block";
						hasphp = true;
					}
				}
				if (selectedProject == "js" && !hasjs) {
					if (!languages[j].classList.contains("js")) {
						project[i].style["display"] = "none";
					} else {
						project[i].style["display"] = "block";
						hasjs = true;
					}
				}
			}
		}
	});
}

const openDB = document.querySelector(".open-database");
const closeDB = document.querySelector(".close-database");
const modalDB = document.getElementById("myModal");

if (openDB !== null) {
	openDB.addEventListener("click", () => {
		modalDB.style.display = "block";
	});

	closeDB.addEventListener("click", () => {
		modalDB.style.display = "none";
	});
}

const close = document.querySelectorAll(".err_close");

close.forEach((e) =>
	e.addEventListener("click", () => {
		e.parentElement.remove();
	})
);
