# Weboum Frontend Project

This project is a frontend application built using **React** and **Vite**. It is designed to provide a seamless user experience with a modular architecture, responsive design, and dynamic content rendering. Below is a detailed overview of the project structure and features.

---

## Project Overview

### 1. **Project Setup**
- **React + Vite**: The project uses Vite for fast builds and React for building the user interface.
- **ESLint Configuration**: Configured for code quality and consistency.
- **Tailwind CSS**: Integrated for utility-first styling.

---

## Folder Structure

### **`src/`**
The `src` folder contains all the source code for the application. Below is a breakdown of its structure:

#### **Main Files**
- **`App.jsx`**: The root component of the application.
- **`main.jsx`**: The entry point of the application.
- **`index.css`**: Global styles for the application.

#### **Components**
The `component/` folder contains reusable components organized into subfolders:

1. **`about-us/`**
   - `AboutUs.jsx`: Provides an overview of the company.
   - `Careers.jsx`: Displays career opportunities with a form for applications.
   - `Contact.jsx`: Contact form with social media links.
   - `DigitalMarketingSolutions.jsx`: Details about digital marketing services.
   - `HostingManagement.jsx`: Information about hosting services.
   - `SamplePage.jsx`: A sample page for testing layouts.
   - `WhyUs.jsx`: Highlights the reasons to choose Weboum.

2. **`services/`**
   - `ApplicationDevelopment.jsx`: Details about app development services.
   - `ContentWriting.jsx`: Information about content writing services.
   - `DigitalMarketing.jsx`: Overview of digital marketing strategies.
   - `GraphicDesign.jsx`: Graphic design services offered.
   - `WebDesigning.jsx`: Web design services.
   - `WebDevelopment.jsx`: Comprehensive web development services.

3. **`soultions/`**
   - `DevOps.jsx`: DevOps solutions for automation and scalability.
   - `SLASupportServices.jsx`: SLA support services.
   - `ProductLifecycleManagement.jsx`: Product lifecycle management solutions.

4. **Other Components**
   - `Footer.jsx`: Footer section of the application.
   - `Header.jsx`: Header section with navigation.
   - `Home.jsx`: The homepage of the application.
   - `Portfolio.jsx`: Displays the portfolio of completed projects.
   - `RequestAQuote.jsx`: A form to request a quote for services.

#### **Styles**
- **`style/`**: Contains CSS files for styling individual components.

#### **Routing**
- **`router.jsx`**: Centralized routing configuration using `react-router-dom`.

---

## Features

### 1. **Responsive Design**
- Fully responsive layouts for mobile, tablet, and desktop devices.

### 2. **Dynamic Content**
- Dynamic rendering of services, testimonials, and portfolio items using React's state and props.

### 3. **Custom Forms**
- Forms for contact, career applications, and service inquiries with validation.

### 4. **SEO Optimization**
- Proper meta tags and semantic HTML for better search engine visibility.

### 5. **Custom Animations**
- Integrated animations using libraries like AOS (Animate on Scroll).

### 6. **Reusable Components**
- Modular components for better maintainability and scalability.

### 7. **Cross-Browser Compatibility**
- Ensured compatibility with modern browsers using `autoprefixer`.

### 8. **Custom Hooks**
- State management using React's `useState` and lifecycle methods with `useEffect`.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>