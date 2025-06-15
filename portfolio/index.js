// index.js
    // Toggle thank-you message
    const btn = document.getElementById("toggleMessageBtn");
    const message = document.getElementById("hiddenMessage");

    btn.addEventListener("click", () => {
      message.classList.toggle("hidden");
      btn.textContent = message.classList.contains("hidden") ? "Show Message" : "Hide Message";
    });

    // Toggle dark/light theme
    const themeBtn = document.getElementById("themeToggleBtn");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      themeBtn.textContent = document.body.classList.contains("light-mode") ? "Dark Mode" : "Light Mode";
    });

    // Smooth scroll to sections
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    });
