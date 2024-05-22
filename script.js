document.addEventListener("DOMContentLoaded", function() {
    // Toggle class function
    const toggleButton = document.getElementById("toggleButton");
    const toggleBox = document.getElementById("toggleBox");
    toggleButton.addEventListener("click", function() {
        toggleBox.classList.toggle("active");
    });

    // Change content function
    const changeContentButton = document.getElementById("changeContentButton");
    const contentBox = document.getElementById("contentBox");
    changeContentButton.addEventListener("click", function() {
        contentBox.textContent = "Content has been changed!";
    });

    // Modal window functions
    const openModalButton = document.getElementById("openModalButton");
    const modal = document.getElementById("modal");
    const closeModalButton = document.getElementById("closeModalButton");
    
    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });
    
    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Dropdown menu function
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");
    
    dropdownButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });
    
    window.addEventListener("click", function(event) {
        if (!event.target.matches('#dropdownButton')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });

    // Counter function
    const incrementButton = document.getElementById("incrementButton");
    const counterBox = document.getElementById("counterBox");
    let counter = 0;

    incrementButton.addEventListener("click", function() {
        counter++;
        counterBox.textContent = counter;
    });

    // Form validation function
    const sampleForm = document.getElementById("sampleForm");
    const formMessage = document.getElementById("formMessage");
    
    sampleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const age = document.getElementById("age").value;
        if (username === "" || email === "" || age === "") {
            formMessage.textContent = "All fields are required.";
        } else {
            formMessage.textContent = "Form submitted successfully!";
            formMessage.style.color = "green";
        }
    });

    // Live search filter function
    const searchInput = document.getElementById("searchInput");
    const searchList = document.getElementById("searchList");
    
    searchInput.addEventListener("keyup", function() {
        const filter = searchInput.value.toLowerCase();
        const items = searchList.getElementsByTagName("li");
        Array.from(items).forEach(function(item) {
            const text = item.textContent || item.innerText;
            if (text.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Color picker function
    const colorPicker = document.getElementById("colorPicker");
    const colorBox = document.getElementById("colorBox");
    
    colorPicker.addEventListener("input", function() {
        colorBox.style.backgroundColor = colorPicker.value;
    });
});
