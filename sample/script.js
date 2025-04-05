/* ----- Email Messages ----- */
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("z_i6sHP-ikCGAy26G"); // Replace with your actual EmailJS public key

  document.getElementById("sendButton").addEventListener("click", function (event) {
      event.preventDefault(); // Prevent page refresh

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const formMessage = document.getElementById("formMessage");

      if (!name || !email || !message) {
          formMessage.innerText = "Please fill in all fields.";
          formMessage.style.color = "red";
          return;
      }

      const templateParams = {
        name: name,         // Matches {{name}} in EmailJS
        email: email,       // Matches {{email}} in EmailJS
        formMessage: message // Matches {{formMessage}} in EmailJS
      };
      

      emailjs.send("service_70jf7tr", "template_rvq1ttc", templateParams)
          .then(response => {
              formMessage.innerText = "Message sent successfully!";
              formMessage.style.color = "green";
              document.getElementById("name").value = "";
              document.getElementById("email").value = "";
              document.getElementById("message").value = "";
          }, error => {
              formMessage.innerText = "Failed to send message. Please try again.";
              formMessage.style.color = "red";
          });
  });
});


/* ----- Projects ----- */
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-box");
    const modal = document.getElementById("slideshowModal");
    const closeModal = document.querySelector(".close");
    const slidesContainer = document.querySelector(".slides");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;

    const projectImages = {
        1: ["img1.jpg", "img2.jpg", "img3.jpg"], // Replace with actual image paths
        2: ["oshc/1.png", "oshc/2.png", "oshc/3.png", "oshc/4.png", "oshc/5.png", "oshc/6.png", "oshc/7.png", "oshc/8.png", "oshc/9.png", "oshc/10.png", "oshc/11.png", "oshc/12.png"],
        3: ["img7.jpg", "img8.jpg", "img9.jpg"]
    };

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const projectId = project.getAttribute("data-project-id");
            const images = projectImages[projectId] || [];
            slidesContainer.innerHTML = "";
            
            images.forEach((src, index) => {
                const img = document.createElement("img");
                img.src = src;
                if (index === 0) img.classList.add("active");
                slidesContainer.appendChild(img);
            });

            modal.style.display = "flex";
            currentIndex = 0;
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    prevButton.addEventListener("click", () => {
        const images = slidesContainer.querySelectorAll("img");
        if (images.length > 0) {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            images[currentIndex].classList.add("active");
        }
    });

    nextButton.addEventListener("click", () => {
        const images = slidesContainer.querySelectorAll("img");
        if (images.length > 0) {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }
    });
});

/* ----- Download Resume/Cv ----- */
document.getElementById("downloadCV").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default link behavior

  const link = document.createElement("a");
  link.href = "files/JM - Resume.pdf"; // Update with correct file path
  link.download = "JM- Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Programmer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}


window.addEventListener('scroll', scrollActive)