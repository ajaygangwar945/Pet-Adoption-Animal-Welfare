let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})

function showAlert() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please fill in both username and password fields.');
            } else {
                const confirmation = confirm(`Are you sure you want to submit?\nUsername: ${username}\nPassword: ${password}`);
                
                if (confirmation) {
                    const userInput = prompt('Please enter any additional information:');
                    alert(`Submission successful!\nAdditional Information: ${userInput || 'None'}`);
                } else {
                    alert('Submission canceled.');
                }
            }
        }

function showsubscribe(){
    alert("Thanks for Subscribing");
}
