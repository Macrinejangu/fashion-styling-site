<<<<<<< Updated upstream
# The Style Sankofa 
**A Fashion & Personal Styling Website Inspired by African Identity**

## About the Project

The Style Sankofa is a purposeful fashion and personal styling brand created as my final project for Moringa School’s foundational software development program. “Sankofa” is derived from a powerful Akan proverb meaning “go back and fetch it” — a call to embrace cultural roots while forging bold, future-forward expressions.

This project blends code and culture, demonstrating how HTML, CSS, and JavaScript can be used to build a modern, interactive web experience rooted in African heritage, creativity, and self-expression. From styling services and visual galleries to interactive quizzes and booking integrations, every page is a piece of storytelling brought to life through clean code and design.

It reflects not only my technical growth, but also my belief that fashion can be a form of cultural reclamation and digital storytelling.

## Project Purpose & Goals

This web application was designed with the following objectives in mind:
 - Build from scratch using semantic HTML, responsive CSS, and interactive JavaScript to demonstrate full control of front-end fundamentals.
- Ensure responsiveness across mobile, tablet, and desktop devices using Flexbox and media queries.
-  Include interactive features such as a style personality quiz (with confetti celebration and dynamic result), clickable CTAs, and a calendar booking widget.
 - Implement form functionality to allow visitors to contact the brand or book a consultation.
-  Use real-world techniques like DOM manipulation, event handling, and basic validation to enhance user experience.
-  Use Git and GitHub effectively for version control, collaboration, and public deployment via GitHub Pages.
-  Document the journey with in-code comments, a structured README, and clear naming conventions for easier collaboration or future iteration.
-  Apply cultural storytelling to design — not just for aesthetics, but to deliver a meaningful brand experience.

This project solves the problem of how to build an engaging, functional fashion brand website from scratch, with no templates or external frameworks — just code, creativity, and continuous learning.

## Known Issues

Despite the effort to polish every detail of this project, a few issues remain or were experienced during development:
1. Image Loading on GitHub Pages
Some images did not display on GitHub Pages due to case sensitivity in file paths (e.g., Images/Image 3.jpeg vs images/image 3.jpeg). This has since been corrected by ensuring all folder and file names are consistently capitalized.
2. Mobile Layout Variations
The homepage hero image and layout had responsiveness inconsistencies on smaller screens. These were resolved using media queries, but certain extreme screen sizes might still require fine-tuning.
3. Style Quiz Result Visibility
There was an intermittent issue where quiz results were not displaying full screen or were showing below the fold. This was due to HTML structure mismatches or JS script loading order, which has been corrected. However, further testing may be needed for cross-browser consistency.
4. Form Submissions (Email Delivery)
The contact form is integrated with Formspree for email handling. While it works during testing, free Formspree plans may limit submission counts or occasionally delay email delivery.
5.localStorage Feature (Not Yet Implemented)
While the site handles dynamic DOM interactions, the bonus objective of storing form or quiz data in localStorage has not yet been fully integrated, I am however receiving the filled forms in my email.
6. Calendar Button Load Delay
On slower networks, the Google Calendar “Book a Consultation” button may take a moment to load or may fail if the script is blocked. An alternative fallback solution could be implemented in the future.


## Pages Included

| Page | Description |
| **Home** (`index.html`) | Welcome page with hero image, tagline, intro, and links to the lookbook and services. |
| **Lookbook** (`lookbook.html`) | A visual gallery featuring African-inspired fashion for both men and women. |
| **Services** (`services.html`) | A list of personal styling services with links to book or take a style quiz. |
| **About** (`about.html`) | Brand story, philosophy, and founder backstory. |
| **Contact** (`contact.html`) | Form to message the brand + social links + booking button. |
| **Style Quiz** (`quiz.html`) | A fun, interactive style quiz with results, confetti, and a CTA to book a session. |

## Key Features

### 1. **Responsive Design**
The site adapts to different screen sizes using CSS flexbox and media queries, ensuring it's usable on both desktop and mobile.

### 2. **Style Quiz with JavaScript**
Users answer 3 questions. Based on their answers, the site calculates whether their vibe is “Heritage Chic”, “Street Style Star”, or “Modern Classic”. Their result appears on a fullscreen overlay — with confetti for fun!

### 3. **Booking Integration**
I used **Google Calendar Appointments** to allow users to book a consultation directly from the website — no backend needed.

### 4. **Contact Form**
I connected the contact form to [Formspree.io](https://formspree.io/) so I can receive form submissions to email without writing backend code.

## Technologies Used

| Tool/Language | Purpose |
| **HTML** | Building the site’s structure |
| **CSS** | Styling and layout (fonts, colors, responsiveness) |
| **JavaScript** | Making the quiz interactive and adding logic |
| **Google Fonts** | Using Georgia & Verdana to add personality |
| **Formspree** | Free tool to handle form submissions |
| **Google Calendar** | To embed a consultation booking button |


## Project Structure

```plaintext
├── index.html           // Home Page
├── about.html
├── contact.html
├── lookbook.html
├── quiz.html
├── services.html
├── script.js            // JavaScript logic for quiz 
├── style.css            // Site-wide styling
├── Images/              // Folder with all styling images (Image 1.jpeg to Image 36.jpeg)
└── README.md            // (This file)

Behavior-Driven Development (BDD)
	•	When a user visits the homepage
→ They see a hero image, intro, and can navigate the whole site.
	•	When a user fills the style quiz and clicks “Reveal My Style”
→ They receive a personalized style type and a CTA.
	•	When a user clicks “Book a Consultation”
→ They’re taken to a Google Calendar form where they can schedule directly.
	•	When a user sends a message in the contact form
→ Their input is sent to my email using Formspree.

Author

Macrine Jangu
Digital Creative | Developer

License

This project is created for educational purposes under Moringa School’s training.
You are free to explore, fork, and use it for learning.

Live Site


This was one of my most enjoyable projects — not just because I got to code, but because I got to express something personal and cultural. I hope you find the site inspiring, informative, and full of pizzazz.

Feel free to fork this project, take the quiz, and build your own version!
=======
# The Style Sankofa 
**A Fashion & Personal Styling Website Inspired by African Identity**

## About the Project

**The Style Sankofa** is a fictional fashion and personal styling brand I created for my final project at Moringa School. The name “Sankofa” comes from a Ghanaian word that means “go back and fetch it” — a reminder to return to our roots and use the wisdom of the past to guide our future. This site combines culture, creativity, and code to celebrate bold fashion inspired by African identity.

This project helped me learn the core building blocks of web development — HTML, CSS, and JavaScript — while also practicing real-world design and user experience techniques.

## Project Goals

- Build a responsive and beautiful website from scratch using HTML, CSS, and JavaScript.
- Practice using forms, JavaScript logic, and styling techniques.
- Learn to debug, iterate, and host a real website on GitHub Pages.
- Add interactive features like a style quiz, Google Calendar integration, and confetti animations.
- Develop a full portfolio-ready website with personality and purpose.

## Pages Included

| Page | Description |
| **Home** (`index.html`) | Welcome page with hero image, tagline, intro, and links to the lookbook and services. |
| **Lookbook** (`lookbook.html`) | A visual gallery featuring African-inspired fashion for both men and women. |
| **Services** (`services.html`) | A list of personal styling services with links to book or take a style quiz. |
| **About** (`about.html`) | Brand story, philosophy, and founder backstory. |
| **Contact** (`contact.html`) | Form to message the brand + social links + booking button. |
| **Style Quiz** (`quiz.html`) | A fun, interactive style quiz with results, confetti, and a CTA to book a session. |

## Key Features

### 1. **Responsive Design**
The site adapts to different screen sizes using CSS flexbox and media queries, ensuring it's usable on both desktop and mobile.

### 2. **Style Quiz with JavaScript**
Users answer 3 questions. Based on their answers, the site calculates whether their vibe is “Heritage Chic”, “Street Style Star”, or “Modern Classic”. Their result appears on a fullscreen overlay — with confetti for fun!

### 3. **Booking Integration**
I used **Google Calendar Appointments** to allow users to book a consultation directly from the website — no backend needed.

### 4. **Contact Form**
I connected the contact form to [Formspree.io](https://formspree.io/) so I can receive form submissions to email without writing backend code.

## Technologies Used

| Tool/Language | Purpose |
| **HTML** | Building the site’s structure |
| **CSS** | Styling and layout (fonts, colors, responsiveness) |
| **JavaScript** | Making the quiz interactive and adding logic |
| **Google Fonts** | Using Georgia & Verdana to add personality |
| **Formspree** | Free tool to handle form submissions |
| **Google Calendar** | To embed a consultation booking button |


## Project Structure

```plaintext
├── index.html           // Home Page
├── about.html
├── contact.html
├── lookbook.html
├── quiz.html
├── services.html
├── script.js            // JavaScript logic for quiz 
├── style.css            // Site-wide styling
├── Images/              // Folder with all styling images (Image 1.jpeg to Image 36.jpeg)
└── README.md            // (This file)

Behavior-Driven Development (BDD)
	•	When a user visits the homepage
→ They see a hero image, intro, and can navigate the whole site.
	•	When a user fills the style quiz and clicks “Reveal My Style”
→ They receive a personalized style type and a CTA.
	•	When a user clicks “Book a Consultation”
→ They’re taken to a Google Calendar form where they can schedule directly.
	•	When a user sends a message in the contact form
→ Their input is sent to my email using Formspree.

Author

Macrine Jangu
Digital Creative | Developer

License

This project is created for educational purposes under Moringa School’s training.
You are free to explore, fork, and use it for learning.

Live Site


This was one of my most enjoyable projects — not just because I got to code, but because I got to express something personal and cultural. I hope you find the site inspiring, informative, and full of pizzazz.

Feel free to fork this project, take the quiz, and build your own version!
>>>>>>> Stashed changes
