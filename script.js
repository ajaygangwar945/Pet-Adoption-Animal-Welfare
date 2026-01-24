<<<<<<< HEAD
// Firebase Configuration
const firebaseConfig = {
    apiKey: "SCRUBBED_API_KEY",
    authDomain: "pet-adoption-animal-welfare.firebaseapp.com",
    projectId: "pet-adoption-animal-welfare",
    storageBucket: "pet-adoption-animal-welfare.firebasestorage.app",
    messagingSenderId: "SCRUBBED_SENDER_ID",
    appId: "SCRUBBED_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const loginModal = document.querySelector("#auth-modal");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");
const resetForm = document.querySelector("#reset-form");
const loginBtn = document.querySelector("#login-btn");
const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".header .navbar");
const userInfo = document.querySelector("#user-info");
const displayNameSpan = document.querySelector("#display-name");
const logoutBtn = document.querySelector("#logout-btn");

const showSignupLink = document.querySelector("#show-signup");
const showLoginLink = document.querySelector("#show-login");
const forgotPasswordLink = document.querySelector("#forgot-password");
const backToLoginLink = document.querySelector("#back-to-login");
const subscribeLink = document.querySelector("#subscribe-link");

const authRequiredSections = document.querySelectorAll(".auth-required");

// Contact Form Elements
const contactForm = document.querySelector("#contactForm");
const contactSubmit = document.querySelector("#contact-submit");

// UI Toggle Logic
if (loginBtn) {
    loginBtn.onclick = () => {
        loginModal.classList.toggle('active');
        navbar.classList.remove('active');
    }
}

if (menuBtn) {
    menuBtn.onclick = () => {
        loginModal.classList.remove('active');
        navbar.classList.toggle('active');
    }
}

window.onscroll = () => {
    if (loginModal) loginModal.classList.remove('active');
    if (navbar) navbar.classList.remove('active');
}

if (showSignupLink) {
    showSignupLink.onclick = (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        resetForm.style.display = 'none';
    }
}

if (showLoginLink) {
    showLoginLink.onclick = (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        resetForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

if (forgotPasswordLink) {
    forgotPasswordLink.onclick = (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        resetForm.style.display = 'block';
    }
}

if (backToLoginLink) {
    backToLoginLink.onclick = (e) => {
        e.preventDefault();
        resetForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
}

// Newsletter Subscription
if (subscribeLink) {
    subscribeLink.onclick = (e) => {
        e.preventDefault();
        alert("Thanks for Subscribing");
    };
}

// Swiper initialization
if (typeof Swiper !== 'undefined') {
    new Swiper(".gallery-slider", {
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
        }
    });
}

// Authentication Functions
if (signupForm) {
    signupForm.onsubmit = async (e) => {
        e.preventDefault();
        const name = document.querySelector("#signup-name").value.trim();
        const email = document.querySelector("#signup-email").value.trim();
        const password = document.querySelector("#signup-password").value;
        const confirmPassword = document.querySelector("#signup-confirm-password").value;
        const errorMsg = document.querySelector("#signup-error");

        errorMsg.textContent = "";

        if (password !== confirmPassword) {
            errorMsg.textContent = "Passwords do not match!";
            return;
        }

        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            await userCredential.user.updateProfile({ displayName: name });
            loginModal.classList.remove('active');
            signupForm.reset();
        } catch (error) {
            errorMsg.textContent = error.message;
        }
    };
}

if (loginForm) {
    loginForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.querySelector("#login-email").value.trim();
        const password = document.querySelector("#login-password").value;
        const errorMsg = document.querySelector("#auth-error");

        errorMsg.textContent = "";

        if (!email) {
            errorMsg.textContent = "Email is required";
            return;
        }

        try {
            await auth.signInWithEmailAndPassword(email, password);
            loginModal.classList.remove('active');
            loginForm.reset();
        } catch (error) {
            if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found') {
                errorMsg.textContent = "Invalid email or password";
            } else {
                errorMsg.textContent = error.message;
            }
        }
    };
}

if (resetForm) {
    resetForm.onsubmit = async (e) => {
        e.preventDefault();
        const email = document.querySelector("#reset-email").value.trim();
        const resetMsg = document.querySelector("#reset-msg");

        resetMsg.className = 'success-msg';
        resetMsg.textContent = "Processing...";

        if (!email) {
            resetMsg.className = 'error-msg';
            resetMsg.textContent = "Please enter your email";
            return;
        }

        try {
            await auth.sendPasswordResetEmail(email);
            resetMsg.className = 'success-msg';
            resetMsg.textContent = "Reset link sent to your email!";
        } catch (error) {
            resetMsg.className = 'error-msg';
            resetMsg.textContent = error.message;
        }
    };
}

// Contact Form Integration
if (contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const number = document.querySelector("#number").value.trim();
        const subject = document.querySelector("#subject").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (contactSubmit) {
            contactSubmit.disabled = true;
            contactSubmit.textContent = "Sending...";
        }

        try {
            await db.collection("messages").add({
                name,
                email,
                number,
                subject,
                message,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Silent success - form resets and button reverts
            contactForm.reset();
        } catch (error) {
            console.error("Error saving message:", error);
            alert("Failed to send message: " + error.message);
        } finally {
            if (contactSubmit) {
                contactSubmit.disabled = false;
                contactSubmit.textContent = "Send message";
            }
        }
    };
}

if (logoutBtn) {
    logoutBtn.onclick = async () => {
        try {
            await auth.signOut();
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };
}

// Auth State Observer
auth.onAuthStateChanged((user) => {
    if (user) {
        if (loginBtn) loginBtn.style.display = 'none';
        if (userInfo) userInfo.style.display = 'flex';
        if (displayNameSpan) displayNameSpan.textContent = user.displayName || user.email.split('@')[0];
        authRequiredSections.forEach(section => {
            section.style.display = 'block';
        });
    } else {
        if (loginBtn) loginBtn.style.display = 'block';
        if (userInfo) userInfo.style.display = 'none';
        authRequiredSections.forEach(section => section.style.display = 'none');
    }
});

// Legacy functions
// Keep for reference or backward compatibility if needed
window.showsubscribe = () => {
    alert("Thanks for Subscribing");
};
=======
let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () => {
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
    }
})

function showAlert() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both username and password fields.');
    } else {
        // Security: Do not echo passwords back to the user
        const confirmation = confirm(`Are you sure you want to submit?\nUsername: ${username}`);

        if (confirmation) {
            const userInput = prompt('Please enter any additional information:');
            alert(`Submission successful!\nAdditional Information: ${userInput || 'None'}`);
        } else {
            alert('Submission canceled.');
        }
    }
}

function showsubscribe() {
    alert("Thanks for Subscribing");
}
>>>>>>> ed6b8ccaeab4a71441f94a150689742d48dd1348
