// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
    
    const nav = document.querySelector('nav');
    const headerContainer = document.querySelector('header .container');
    
    if (nav && headerContainer) {
        headerContainer.insertBefore(mobileToggle, nav);
        
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Form Submission Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const inquiryType = document.getElementById('inquiryType').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && subject && inquiryType && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
    
    // Newsletter Form Handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .category-card, .service-card, .support-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.feature-card, .product-card, .testimonial-card, .category-card, .service-card, .support-card').forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
    
    // Trigger once on load
    animateOnScroll();
});

// Testimonial Slider (Simple Implementation)
let currentTestimonial = 0;
const testimonials = [
    {
        text: "Ashok Pharma has consistently delivered high-quality products on time. Their commitment to excellence is evident in every interaction.",
        author: "Dr. Sarah Johnson",
        position: "Medical Director, HealthFirst Clinic"
    },
    {
        text: "We've been partnering with Ashok Pharma for over a decade. Their products have helped us improve patient outcomes significantly.",
        author: "Dr. Rajesh Kumar",
        position: "Chief Pharmacist, MediCare Hospital"
    },
    {
        text: "The quality and affordability of Ashok Pharma's products make them our preferred supplier for essential medications.",
        author: "Priya Sharma",
        position: "Procurement Manager, Wellness Pharmacy Chain"
    }
];

function updateTestimonial() {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
        testimonialCard.innerHTML = `
            <p>"${testimonials[currentTestimonial].text}"</p>
            <div class="testimonial-author">
                <h4>${testimonials[currentTestimonial].author}</h4>
                <p>${testimonials[currentTestimonial].position}</p>
            </div>
        `;
    }
}

// Rotate testimonials every 5 seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
}, 5000);

// Initialize with first testimonial
updateTestimonial();