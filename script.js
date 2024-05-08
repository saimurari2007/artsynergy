document.addEventListener('DOMContentLoaded', function () {
    const posters = document.querySelectorAll('.poster');
    
    posters.forEach(function(poster) {
        poster.addEventListener('click', function() {
            // Get poster details
            const posterImgSrc = poster.querySelector('img').getAttribute('src');
            const posterTitle = poster.querySelector('h2').innerText;
            const posterPrice = poster.querySelector('p').innerText;

            // Create elements for poster details
            const posterDetailsContainer = document.createElement('div');
            posterDetailsContainer.classList.add('poster-details');

            const posterImg = document.createElement('img');
            posterImg.src = posterImgSrc;
            posterImg.alt = 'Poster Image';

            const title = document.createElement('h2');
            title.innerText = posterTitle;

            const price = document.createElement('p');
            price.innerText = posterPrice;

            const description = document.createElement('p');
            description.innerText = 'Description: This is a beautiful poster.';

            const buyButton = document.createElement('button');
            buyButton.innerText = 'Buy Now';
            buyButton.onclick = function() {
                window.location.href = 'buy-page.html';
            };

            // Append elements to poster details container
            posterDetailsContainer.appendChild(posterImg);
            posterDetailsContainer.appendChild(title);
            posterDetailsContainer.appendChild(price);
            posterDetailsContainer.appendChild(description);
            posterDetailsContainer.appendChild(buyButton);

            // Open new page with poster details
            const newPage = window.open('', '_blank');
            newPage.document.body.appendChild(posterDetailsContainer);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carousel = document.querySelector('.carousel');

    let scrollAmount = 0;
    const scrollDistance = 120; // Adjust this value to change the scroll distance

    // Function to scroll to the next image
    function nextImage() {
        scrollAmount -= scrollDistance;
        carousel.scrollTo({
            top: 0,
            left: Math.min(scrollAmount, carousel.scrollWidth - carousel.clientWidth),
            behavior: 'smooth'
        });
    }

    // Function to start the slideshow
    function startSlideshow() {
        setInterval(nextImage, 500); // Change image every half second
    }

    // Function to pause the slideshow when the mouse is over the carousel
    function pauseSlideshow() {
        clearInterval(slideshow);
    }

    // Function to resume the slideshow when the mouse leaves the carousel
    function resumeSlideshow() {
        slideshow = setInterval(nextImage, 500); // Change image every half second
    }

    // Start the slideshow
    let slideshow = startSlideshow();

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', function() {
        scrollAmount += scrollDistance;
        carousel.scrollTo({
            top: 0,
            left: Math.max(scrollAmount, 0),
            behavior: 'smooth'
        });
        clearInterval(slideshow); // Pause slideshow when manually navigating
    });

    nextButton.addEventListener('click', function() {
        nextImage();
        clearInterval(slideshow); // Pause slideshow when manually navigating
    });

    // Event listeners to pause/resume slideshow on hover
    carousel.addEventListener('mouseenter', pauseSlideshow);
    carousel.addEventListener('mouseleave', resumeSlideshow);
});

