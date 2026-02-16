// Firebase Configuration is loaded from firebase-config.js (not committed to git)
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
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
        resetForm.classList.add('hidden');
    }
}

if (showLoginLink) {
    showLoginLink.onclick = (e) => {
        e.preventDefault();
        signupForm.classList.add('hidden');
        resetForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    }
}

if (forgotPasswordLink) {
    forgotPasswordLink.onclick = (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        resetForm.classList.remove('hidden');
    }
}

if (backToLoginLink) {
    backToLoginLink.onclick = (e) => {
        e.preventDefault();
        resetForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
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
// Contact Form Integration - Handled by Netlify (Standard HTML POST)
// The previous Firebase/EmailJS logic has been removed to allow Netlify to capture the form submission directly.


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
        if (loginBtn) loginBtn.classList.add('hidden');
        if (userInfo) userInfo.style.display = 'flex'; // Keep flex for user info as it's a layout requirement
        if (displayNameSpan) displayNameSpan.textContent = user.displayName || user.email.split('@')[0];
        authRequiredSections.forEach(section => {
            section.classList.remove('hidden');
        });
    } else {
        if (loginBtn) loginBtn.classList.remove('hidden');
        if (userInfo) userInfo.style.display = 'none';
        authRequiredSections.forEach(section => section.classList.add('hidden'));
    }
});
