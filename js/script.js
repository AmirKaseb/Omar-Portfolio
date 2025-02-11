document.addEventListener('DOMContentLoaded', () => {
  // Circular Progress Bars
  const progressBars = [
      {
          selector: '.python',
          progressSelector: '.python-progress',
          endValue: 85,
          color: '#fca61f'
      },
      {
          selector: '.sql',
          progressSelector: '.sql-progress',
          endValue: 75,
          color: '#6f34fe'
      },
      {
          selector: '.matlab',
          progressSelector: '.matlab-progress',
          endValue: 65,
          color: '#20c997'
      }
  ];

  // Circular Progress Bar Animation
  progressBars.forEach(bar => {
      const progressElement = document.querySelector(bar.selector);
      const valueElement = progressElement.querySelector('.progress-value');
      
      let startValue = 0;
      const endValue = bar.endValue;
      const speed = 30;

      const progress = setInterval(() => {
          startValue++;
          
          valueElement.textContent = `${startValue}%`;
          progressElement.style.background = `conic-gradient(${bar.color} ${startValue * 3.6}deg, #ededed 0deg)`;

          if (startValue === endValue) {
              clearInterval(progress);
          }
      }, speed);
  });

  // Smooth Scrolling for Navigation Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Sticky Navbar
  const navbar = document.getElementById('navbar-top');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.classList.add('fixed-top');
          document.body.style.paddingTop = `${navbar.offsetHeight}px`;
      } else {
          navbar.classList.remove('fixed-top');
          document.body.style.paddingTop = '0';
      }
  });

  // Back to Top Button
  document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('btn-back-to-top');

    // Ensure button exists
    if (!backToTopButton) {
        console.error('Back to Top Button not found in the DOM');
        return;
    }

    // Explicit visibility function
    function toggleBackToTopVisibility() {
        // Multiple scroll position checks
        const scrollPosition = 
            window.pageYOffset || 
            document.documentElement.scrollTop || 
            document.body.scrollTop;

        // Debugging logs
        console.log('Current Scroll Position:', scrollPosition);

        // Show button when scroll is more than 100 pixels
        if (scrollPosition > 100) {
            backToTopButton.style.display = 'block';
            backToTopButton.style.opacity = '1';
        } else {
            backToTopButton.style.display = 'none';
            backToTopButton.style.opacity = '0';
        }
    }

    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', toggleBackToTopVisibility);

    // Add click event listener
    backToTopButton.addEventListener('click', scrollToTop);

    // Initial visibility check
    toggleBackToTopVisibility();

    // Debugging
    console.log('Back to Top Button Initialized');
    console.log('Button Element:', backToTopButton);
});

  // Project Filtering (if you have a projects section)
  const filterButtons = document.querySelectorAll('.filter-item');
  const projectItems = document.querySelectorAll('.post');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const filter = button.getAttribute('data-filter');

          projectItems.forEach(item => {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });

  // CV Download Tracking (Optional)
  const cvDownloadButton = document.querySelector('.download-cv-btn');
  if (cvDownloadButton) {
      cvDownloadButton.addEventListener('click', () => {
          // Optional: Add analytics or tracking
          console.log('CV Downloaded');
          // You could integrate with Google Analytics or other tracking services
      });
  }

  // Scroll Progress Indicator
  const scrollProgress = document.createElement('div');
  scrollProgress.id = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      scrollProgress.style.width = `${scrolled}%`;
  });

  // Section Reveal on Scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          }
      });
  }, { threshold: 0.1 });

  revealElements.forEach(element => revealObserver.observe(element));
});
// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for all anchor links
  const scrollHomeButtons = document.querySelectorAll('a[href^="#"]');
  
  scrollHomeButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Get the target section
          const targetId = this.getAttribute('href');
          const targetSection = document.querySelector(targetId);
          
          if (targetSection) {
              // Smooth scroll to the section
              targetSection.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // Responsive design checks
  function checkResponsiveness() {
      const screenWidth = window.innerWidth;
      const body = document.body;

      if (screenWidth < 768) {
          body.classList.add('mobile-view');
          // Mobile-specific adjustments
          document.querySelectorAll('img').forEach(img => {
              img.classList.add('img-fluid');
          });
      } else {
          body.classList.remove('mobile-view');
      }
  }

  // Run on load and resize
  checkResponsiveness();
  window.addEventListener('resize', checkResponsiveness);

  // Smooth scrolling for mobile
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});