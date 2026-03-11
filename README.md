<img src="images/Gemini_Generated_Image_ob052hob052hob05.png" width="100%" height="200" style="object-fit: cover" align="center">  

<h1 align="center">🐾 Pet Adoption & Animal Welfare</h1>

<div align="center">

![Pet Adoption](https://img.shields.io/badge/Pet-Adoption-FF4500?style=for-the-badge&logo=heart&logoColor=white)
![Animal Welfare](https://img.shields.io/badge/Animal-Welfare-32CD32?style=for-the-badge&logo=leaf&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### 🌐 **[Live Demo](https://pet-adoption-animal-welfare.netlify.app/)** 🌐

*A beautiful and responsive website dedicated to promoting pet adoption and animal welfare awareness.*

</div>

---

## 📖 About The Project

Welcome to the **Pet Adoption & Animal Welfare** platform! This website is designed to connect loving homes with deserving pets while promoting responsible pet ownership and animal welfare education.

### ✨ Key Features

- 🏠 **Home Section** - Engaging hero section with call-to-action
- 📚 **About Us** - Mission and vision for animal welfare
- 🖼️ **Gallery** - Beautiful image slider showcasing animals
- 🦁 **Animal Welfare** - Information about various animals
- 📞 **Contact Form** - Easy communication with validation
- 📱 **Fully Responsive** - Works on all devices

---

## 🚀 Live Website

The project is fully deployed and accessible online.  

[![Live](https://img.shields.io/badge/Live-Visit%20Site-brightgreen?style=for-the-badge)](https://pet-adoption-animal-welfare.netlify.app/)

---

## 📸 Screenshots

### 🏠 Home Page

![Home Page](images/home.png)

### 📖 About Section

![About](images/about.png)

### 📬 Contact Form

![Contact](images/contact.png)

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-Structure-E34F26?style=for-the-badge&logo=html5&logoColor=white) | Structure & Content |
| ![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge&logo=css3&logoColor=white) | Styling & Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-Logic-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Interactivity & Validation |
| ![Firebase](https://img.shields.io/badge/Firebase-Auth%20%26%20DB-FFCA28?style=for-the-badge&logo=firebase&logoColor=black) | Authentication & Message Storage |
| ![Swiper.js](https://img.shields.io/badge/Swiper.js-Gallery-6332F6?style=for-the-badge&logo=swiper&logoColor=white) | Image Gallery Slider |
| ![Font%20Awesome](https://img.shields.io/badge/Font%20Awesome-Icons-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white) | Icons |

---

## 📂 Project Structure

```
Pet Adoption & Animal Welfare/
│
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # Main application logic
├── firebase-config.template.js # Template for Firebase credentials
├── favicon.svg         # Website Favicon
├── .gitignore          # Git ignore file
├── LICENSE             # License file
├── README.md           # Project documentation
├── Project_Report.txt  # Detailed project report (Logic, Flow, Backend)
│
└── images/             # Image assets
    ├── Gemini_Generated_Image_... .png # Main Banner
    ├── home.jpg, home.png              # Home section images
    ├── about.png                       # About section image
    ├── banner.png, banner_1.png...     # Section banners
    ├── bottom_wave.png                 # Decorative wave
    ├── gallery-*.jpg                   # Gallery images
    ├── animals_*.jpg                   # Animal welfare images
    ├── contact.png                     # Contact section image
    └── footer.jpg                      # Footer background
```

---

## 🎨 Features Breakdown

### 🏡 Home Section

- Eye-catching hero section with background image
- Clear call-to-action button
- Smooth wave animation at the bottom

### 📋 About Section

- Mission statement
- Decorative text styling
- Responsive image layout

### 🖼️ Gallery

- Interactive Swiper.js slider
- Navigation controls
- Responsive grid layout

### 🐾 Animal Welfare

- Grid of animal cards
- Hover effects with overlay
- "See details" buttons for each animal

### 📬 Contact Form

- Form validation for user inputs
- Integrated with **Netlify Forms** for effortless message handling
- Automatic email notifications for new submissions (via Netlify)
- Secure anti-spam protection (honeypot field)

### 🔐 Login Form

- Dropdown login, signup, and reset password forms
- Secure authentication via **Firebase Auth**
- Real-time UI updates based on authentication state
- Dynamically toggled sections using external CSS classes

---

## 💻 Local Development

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ajaygangwar945/Pet-Adoption-Animal-Welfare.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd Pet-Adoption-Animal-Welfare
   ```

3. **Set up Firebase Credentials**

   This project uses Firebase for authentication and data storage. The Firebase configuration is **not included** in this repository for security reasons.

   - **Copy the template file:**

     ```powershell
     cp firebase-config.template.js firebase-config.js
     ```

   - **Get your Firebase credentials at [Firebase Console](https://console.firebase.google.com/)** (Gear icon ⚙️ → Project settings → Your apps).
   - **Update `firebase-config.js`** with your actual credentials:

     ```javascript
     const firebaseConfig = {
         apiKey: "YOUR_ACTUAL_API_KEY",
         authDomain: "your-project.firebaseapp.com",
         projectId: "your-project-id",
         storageBucket: "your-project.firebasestorage.app",
         messagingSenderId: "123456789",
         appId: "1:123456789:web:abcdef123456"
     };
     ```

   > [!IMPORTANT]
   > **Never commit `firebase-config.js`**. It is already in `.gitignore` to prevent accidental commits. Do not share your credentials publicly.

4. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server (VS Code extension)

---

## 🌐 Deployment

This project is deployed on **Netlify** for free hosting with continuous deployment.

[![Netlify Status](https://img.shields.io/netlify/ea492774-0947-439e-a5d5-23999367cfd0?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/projects/pet-adoption-animal-welfare/deploys)

---

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px and up)
- 📱 Tablets (768px and up)
- 💻 Desktops (991px and up)
- 🖥️ Large screens (1200px and up)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ Star this repository if you found it helpful

**Made with ❤️ for animals and their welfare**

🐶 🐱 🐰 🐹 🐦 🐠

</div>
