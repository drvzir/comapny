document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const companyDomain = '@company.com'; // Replace with your company's domain

    // Email validation
    if (!email.endsWith(companyDomain)) {
        errorMessage.textContent = 'Please use your company email to login.';
        return;
    }

    // Password validation based on banking norms:
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        errorMessage.textContent = 'Password must be at least 8 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character.';
        return;
    }

    // If validation passes, store a flag in sessionStorage and redirect to the success page
    sessionStorage.setItem('authenticated', 'true');
    window.location.href = 'success.html';
});

window.addEventListener('load', function() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    
    if (isAuthenticated !== 'true') {
        // Redirect to index.html if not authenticated
        window.location.href = 'index.html';
    } else {
        // Clear the session storage to prevent re-accessing without login
        sessionStorage.removeItem('authenticated');
    }
});
