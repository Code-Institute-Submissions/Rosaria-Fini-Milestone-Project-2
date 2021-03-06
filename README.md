# Rosaria Fini Milestone Project 2 - Interactive Frontend Development

[Click Here To Visit My Project Site](https://rosariafini.github.io/Rosaria-Fini-Milestone-Project-2/)

## Website that calls on the Google Maps API to allow users to search for their next holiday destination

### Introduction

This repository is showcasing my second Milestone Project for The Code Institute.
I have chosen to create a website for a Travel Agency which I gave it the fictional brand name of "Quo Vado Destinations" (QVD). To create this project I've putted into practice skills and techniques developed and learnt during my learning journey so far. The technologies used are HTML5, CSS3, Bootstrap, Javascript and JQuery.

The project is easy to navigate and fully responsive:it can be viewed and accessed on all device sizes.

## UX – User Experience

### The who?
The website purpose is to help users to find their next holiday destination, displaying catchy offers and showcasing the offered places. 

### The what?
What users want to achieve navigating the website is to find a travel destination among the ones offered by QVD.

### The how?
Users can find their next holiday destination directly choosing a package from the bucket list or by finding out about other destination directly searching on the google maps. 

## User Stories
This section provide an insight into the UX process.

* As a user, I want to be able to book a travel package directly from the website and to find useful informations about the destinations.

* As a user, I want to be able to get easily in touch with the travel agency. An entire section is dedicated to this scope which takes the user directly to the contact page.

* As a user, I want to find a gallery section that will show me more about a Country of destination so I can make an accurate decision.

* As a user, I want to be able to see the locations on the google map and to filter the results based on the Country I whish to travel to. 

* As a user, I want to find additional info about the locations on the map and be redirected to the page where I can make the booking from the map.

* As a user, I want to be able to find some social media links, so I can get to know the brand better. This can be found in footer section.

* As a user, I want to be able to find out where QVD is located so I can have a direct contact as well as finding other useful info.

* As a user, I want there to be a comtact form fully functional, so I can get info quicker.

* As a user, I want the website to be easy to scroll, with a back to top button to make this easier.

## Wireframes

### Homepage 

* Homepage - Web Browser -> [View PDF](PDF/home-webbrowser.pdf)

* Homepage - Tablet -> [View PDF](PDF/home-tablet.pdf)

* Homepage - Smartphone -> [View PDF](PDF/home-smartphone.pdf)

### Contact Page

* Contact Page - Web Browser -> [View PDF](PDF/cont-webbrowser.pdf)

* Contact Page - Tablet -> [View PDF](PDF/cont-tablet.pdf)

* Contact Page - Smartphone -> [View PDF](PDF/cont-smartphone.pdf)

## Features

 This section goes over the different parts of my project, listing existing features as well as a list of future features I would like to implement at a later date as I develop further skills throughout
 the course.

 ### Existing Features

 1.  Allow users to get to know the latest offers with a call to action in the homepage. If the users click on "read more" this will find out more information abuout the location.

 2. Allow users to find a contact section in the homepage.

 3. Allow users to find a gallery section in the homepage to find out more about the Countries of destination. If the user click on "show more" this will find out more information about the Country of destination.
 
 4. Allow users to interact with the google maps by selecting the Country they wish to visit and displaying the filtered locations. On the map users can also find a "Book Now" button which will redirect them on the page where they can make a booking. 
 
 5. Allow users to pick up missed informations by reading a footer section that goes straight to the point. Here the user will be able to reload homepage and contact page as well as discover the social pages. 

 6. Allow users to find the location of QVD in the contact page and other useful informations (opening hours, contact info) as well as getting in touch by filling the form.
 
 7. Hover animations have been used on the Icons to display the features of DY to improve UX.

 8. If a users click on the arrow on the right hand side of the pages, this bring the users back to the top of the page.

 ### Future Features To Implement
 
 * Feature 1 – Adding more locations from which the users can choose.

 ## Technologies Used

 Here is a list of programming languages used to create this project along with a list of frameworks, libraries and tools I also used to create this project.

 ### Programming Languages

 * [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML5 was used to create the overall structure and page elements to be viewed in a web browser.

* [CSS3](https://en.wikipedia.org/wiki/CSS)
    - CSS3 was used to give my project and its content style, layout, colours, a different font and format.

* [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    - JavaScript was used to give my project an iteractive look and feel and to be used to interact with APIs.


### Frameworks, Libraries & Tools Used

* [Diagrams.net]( https://app.diagrams.net/)
    * Diagrams.net was used to create the wireframes for my project.

* [GitHub]( https://github.com/)
    * I used GitHub to store my project files by creating a repository for it and then using the Git terminal and its commands to version control and store my files.

* [Bootstrap 4.5.2]( https://getbootstrap.com/docs/4.5/getting-started/introduction/)
    * I used bootstrap for styling my project and to make my project fully responsive.

* [Google Fonts]( https://fonts.google.com/)
    * Google fonts has been used to import fonts directly from google into the CSS file.

* [Font Awesome Icons]( https://fontawesome.com/icons?d=gallery)
    * Font awesome has been used for its icons which have been used throughout to give the project good visual elements and to help give a good user experience.

* [Hover Effects CSS3]( https://ianlunn.github.io/Hover/)
    * The hover effect that I have chosen is the Icon Grow and this has been used on the icons in the features section of the homepage to improve user experience.

* [Google Chrome & Chrome Dev Tools](https://support.google.com/chrome/answer/95346?co=GENIE.Platform%3DDesktop&hl=en)
    * Google Chrome and Chrome Dev Tools was used to help create my project as well as testing it as well.

* [Google API](https://cloud.google.com/apis/docs/overview)
    * Google API was used to import the google map and add interactivity.

* [JQuery](https://jquery.com/)
    * JQuery was used to add interactivity to the project.

# Validation

In this section I will be showing the validation techniques used in order to make my project compliant. I have used the W3C HTML5 and CSS3 online validation tools. I have also runned the Lighthouse report from Chrome Developer Tools.

[HTML5 Validation]( https://validator.w3.org/)

[CSS3 Validation]( https://jigsaw.w3.org/css-validator/)

[Validation Testing Document](testing/validation-testing.md)

# Testing

In this section I will be testing my project by going over my User Stories from the UX section and ensure that they all work as intended.

[UX User Story Testing Document][(testing/ux-testing.md)

I have tested my project on Google Chrome and Firefox. In both browsers all pages, sections, fonts, images of the project work well as well as its responsiveness. 
Using Chrome Dev responsive tools whilst programming helped me to simulate different sizes device, including landscape view. 

## Interesting Bugs

When I decided to add the "read more/ read less" link in the Bucket List section of the homepage I found it difficult to implement it at first because when I was clicking on it the page was refreshing. By doing some external reseacrh I found out that I had to add the following href "javascript:void(0);javascript:void(0);", this prevent the page from refreshing.

# Known Issues
Horizontal scroll bar present in the homepage probably due to a too wide element related to containers.

## GitHub pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the GitHub Repository.
2. At the top of the Repository, locate the "Settings" Button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [l

[Deployed Project](https://rosariafini.github.io/Rosaria-Fini-Milestone-Project-2/)

# Credits

## Content 
Here there is a list of all the external URL that helped me in developing my project.

* [Bootstrap Navbar](https://getbootstrap.com/docs/4.5/components/navbar/) 
* [Bootstrap Button](https://getbootstrap.com/docs/4.5/components/buttons/)
* [Bootstrap Jumbotron](https://getbootstrap.com/docs/4.5/components/jumbotron)
* [Boorstrap Forms](https://getbootstrap.com/docs/4.5/components/forms/)
* [Google Fonts](https://fonts.google.com/) I used Google Font for my fonts by importing the fonts to my CSS file.
* [Icon-Grow](https://github.com/RosariaFini/Hover/blob/master/css/hover.css) I have consulted this GitHub Page to help me with the coding of the Icon-Grow transiction.
* [Google Maps](https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js)- The Google map located in the homepage is linked to my Google developer platform account by using an API key that i generated when i created the account and has been declared in the script tags at the bottom of body.
* [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js)

## Media

* Icons – All of the icons used in the project are from Font Awesome CDN which I have included in the head of every HTML webpage.[Visti Site](https://use.fontawesome.com/releases/v5.14.0/css/all.css)

* Hover Transition – The Hover Transition used in the project are from Hover.css CDN which I have included in the head of every HTML webpage. [Visit Site](https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.1.1/css/hover-min.css)

* Images - All images used in the project were taken from Unsplash.com. [Visit Site](https://unsplash.com/). Unsplash photos are made to be used freely: all photos can be downloaded and used for free for commercial and non-commercial purposes
and with no permission needed.

## Acknowledgements

I would like to thank Code Institute for the Lessons received so far which have enabled me to learn a list of such valuable skills in a such short period of time, and thinking that this is just the beginning of my learnig journey makes me proud of the choice I made of joining Code Institute.

I would also like to thank the Tutor Team which has always helped me promptly everytime I needed.

Least but not last I would ike to aknowledge my Student Mentor Aaron Sinnott for having given me great advices and for having guided me throughout the development of the Project.

