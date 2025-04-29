document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Modal handling
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    const aboutCards = document.querySelectorAll('.about-card');

    aboutCards.forEach(card => {
        card.addEventListener('click', () => {
            const modalType = card.getAttribute('data-modal');
            showModalContent(modalType);
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    function showModalContent(type) {
        switch (type) {
            
//techstack card
            case 'tech-stack':
                modalTitle.textContent = 'Tech Stack';
                modalBody.innerHTML = `
                    <div class="smallsubtext flex flex-col gap-4 pb-8">

                        <!-- Languages -->
                        <h4 style="opacity: 1;">Programming Languages</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=FFDD54">
                            <img class="rounded-xl" src="https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white">
                        </p>

                        <!-- Frameworks & Technologies -->
                        <h4 style="opacity: 1;">Frameworks & Technologies</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Flask-000000.svg?style=for-the-badge&logo=flask&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=spring-boot&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/REST%20APIs-0052CC.svg?style=for-the-badge&logo=apachespark&logoColor=white">
                        </p>

                        <!-- Web Technologies -->
                        <h4 style="opacity: 1;">Web Technologies</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/JSP-007396.svg?style=for-the-badge&logo=java&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Servlets-323330.svg?style=for-the-badge&logo=java&logoColor=white">
                        </p>

                        <!-- Databases -->
                        <h4 style="opacity: 1;">Databases</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/MongoDB-4EA94B.svg?style=for-the-badge&logo=mongodb&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=postgresql&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/SQLAlchemy-336791.svg?style=for-the-badge&logo=sqlalchemy&logoColor=white">
                        </p>

                        <!-- AI/ML Models -->
                        <h4 style="opacity: 1;">AI/ML Models</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/YOLO-FF4088.svg?style=for-the-badge&logo=yolo&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/OpenCV-5C3EE8.svg?style=for-the-badge&logo=opencv&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/TensorFlow-FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white">
                        </p>

                        <!-- Tools -->
                        <h4 style="opacity: 1;">Tools</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=git&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=github&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Maven-C71A36.svg?style=for-the-badge&logo=apachemaven&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Apache%20Tomcat-F8DC75.svg?style=for-the-badge&logo=apachetomcat&logoColor=black">
                            <img class="rounded-xl" src="https://img.shields.io/badge/VS%20Code-007ACC.svg?style=for-the-badge&logo=visualstudiocode&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/IntelliJ%20IDEA-000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=postman&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Spring%20Tool%20Suite-6DB33F.svg?style=for-the-badge&logo=spring&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Eclipse-2C2255.svg?style=for-the-badge&logo=eclipseide&logoColor=white">
                        </p>


                        
                        <!-- Soft Skills 
                        <h4 style="opacity: 1;">Soft Skills</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Problem%20Solving-0066CC.svg?style=for-the-badge&logo=thinkpad&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Communication-800080.svg?style=for-the-badge&logo=hackthebox&logoColor=white">
                        </p>-->

                    </div>

                `;
                break;




//leetcode card
            case 'leetcode':
                modalTitle.innerHTML = `
                    <div class="flex items-center gap-3">
                        <i class="fab fa-leetcode text-orange-500 text-xl"></i>
                        <div class="-mt-1">
                            <h3 class="modal-title">LeetCode Stats</h3>
                            <a href="https://leetcode.com/Mubasshir_Khan" target="_blank" 
                               class="text-xs text-accent hover:underline flex items-center gap-1">
                                @Mubasshir_Khan <i class="fas fa-external-link-alt text-xs"></i>
                            </a>
                        </div>
                    </div>
                `;
                
                modalBody.innerHTML = `
                    <div class="leetcode-stats-container space-y-5">
                        <div class="text-center py-4">
                            <div class="leetcode-loader animate-pulse">
                                <i class="fab fa-leetcode text-4xl text-orange-400"></i>
                                <div class="mt-2 text-sm">Loading your stats...</div>
                            </div>
                        </div>
                    </div>
                `;
            
                fetch("https://leetcode-stats-api.herokuapp.com/Mubasshir_Khan")
                    .then(res => res.json())
                    .then(data => {
                        document.querySelector(".leetcode-stats-container").innerHTML = `
                            <!-- Horizontal Stats Row -->
                            <div class="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg mb-6">
                                <div class="text-center px-2">
                                    <div class="text-2xl font-bold">${data.totalSolved}</div>
                                    <div class="text-xs opacity-80 uppercase tracking-wider">Solved</div>
                                </div>
                                
                                <div class="h-12 w-px bg-gray-600"></div>
                                
                                <div class="text-center px-2">
                                    <div class="text-2xl font-bold">${Math.round(data.acceptanceRate)}%</div>
                                    <div class="text-xs opacity-80 uppercase tracking-wider">Accuracy</div>
                                </div>
                                
                                <div class="h-12 w-px bg-gray-600"></div>
                                
                                <div class="text-center px-2">
                                    <div class="text-2xl font-bold">${data.ranking ? data.ranking.toLocaleString() : "N/A"}</div>
                                    <div class="text-xs opacity-80 uppercase tracking-wider">Ranking</div>
                                </div>
                            </div>
                            
                            <!-- Difficulty Breakdown -->
                            <div class="leetcode-section">
                                <h4 class="leetcode-section-title">
                                    <i class="fas fa-layer-group text-accent"></i>
                                    Problem Breakdown
                                </h4>
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="leetcode-difficulty-card difficulty-easy">
                                        <div class="difficulty-label">Easy</div>
                                        <div class="difficulty-value">${data.easySolved}</div>
                                        <div class="difficulty-bar">
                                            <div class="difficulty-progress" style="width: ${(data.easySolved/data.totalSolved)*100}%"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="leetcode-difficulty-card difficulty-medium">
                                        <div class="difficulty-label">Medium</div>
                                        <div class="difficulty-value">${data.mediumSolved}</div>
                                        <div class="difficulty-bar">
                                            <div class="difficulty-progress" style="width: ${(data.mediumSolved/data.totalSolved)*100}%"></div>
                                        </div>
                                    </div>
                                    
                                    <div class="leetcode-difficulty-card difficulty-hard">
                                        <div class="difficulty-label">Hard</div>
                                        <div class="difficulty-value">${data.hardSolved}</div>
                                        <div class="difficulty-bar">
                                            <div class="difficulty-progress" style="width: ${(data.hardSolved/data.totalSolved)*100}%"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Badges Section -->
                            <div class="leetcode-section">
                                <h4 class="leetcode-section-title">
                                    <i class="fas fa-award text-accent"></i>
                                    Badges
                                </h4>
                                <div class="flex justify-center py-4">
                                    <img src="images/batches.jpg" 
                                         alt="LeetCode Badges" 
                                         class="leetcode-badge-image rounded-lg border border-accent/20">
                                </div>
                            </div>
                            
                        `;
                    })
                    .catch(error => {
                        document.querySelector(".leetcode-stats-container").innerHTML = `
                            <div class="leetcode-error">
                                <i class="fas fa-exclamation-triangle text-3xl text-red-400"></i>
                                <h4>Data Loading Failed</h4>
                                <p>Couldn't fetch LeetCode stats. Please try again later.</p>
                                <a href="https://leetcode.com/Mubasshir_Khan" target="_blank" 
                                   class="leetcode-view-more-btn mt-3">
                                    View Profile Directly
                                </a>
                            </div>
                        `;
                    });
                break;


            case 'resume':
                modalTitle.textContent = 'Resume';
                modalBody.innerHTML = '<a href="resume.pdf" target="_blank" class="btn">View My Resume</a>';
                break;
            default:
                modalTitle.textContent = 'More Info';
                modalBody.innerHTML = 'Details coming soon.';
        }
    }
});






//contact form
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop form from submitting normally

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        const emailValidation = validateEmail(email);
        if (emailValidation !== true) {
            alert(emailValidation);
            return;
        }

        if (!validateMessage(message)) {
            alert("Message should be between 10 and 1000 characters.");
            return;
        }

        if (!canSendMessage()) {
            alert("You have reached the maximum number of messages (3) in 24 hours. Please try again later.");
            return;
        }

        // Send email
        sendEmail(name, email, message);
    });
});

function validateEmail(email) {
    const generalEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/i;
    const validDomainRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in|co|edu|gov|io|me|info)$/i;

    if (!generalEmailRegex.test(email)) {
        return "Please enter a valid email address (e.g., user@example.com)";
    }

    if (!validDomainRegex.test(email)) {
        return "Please use a valid email address (e.g., .com, .in, .net)";
    }

    return true; // Email is valid
}

function validateMessage(message) {
    return message.length >= 10 && message.length <= 1000;
}

function canSendMessage() {
    const data = JSON.parse(localStorage.getItem("messageData"));

    if (!data) return true; // No data yet, allow sending

    const { count, firstSentAt } = data;
    const now = Date.now();

    // If more than 24 hours passed since first message, reset
    if (now - firstSentAt > 24 * 60 * 60 * 1000) {
        localStorage.removeItem("messageData");
        return true;
    }

    return count < 3; // Allow only if count < 3
}

function incrementMessageCount() {
    let data = JSON.parse(localStorage.getItem("messageData"));

    if (!data) {
        data = { count: 1, firstSentAt: Date.now() };
    } else {
        data.count += 1;
    }

    localStorage.setItem("messageData", JSON.stringify(data));
}

function sendEmail(name, email, message) {
    const sendButton = document.querySelector('.contact-form button');
    sendButton.disabled = true;
    sendButton.innerText = "Sending...";

    emailjs.send('service_57tmzog', 'template_50z4ier', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent successfully!");
        incrementMessageCount(); // Update count after sending
        sendButton.innerText = "Message Sent!";
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send message. Please try again later.");
        sendButton.disabled = false;
        sendButton.innerText = "Send Message";
    });

    setTimeout(() => {
        sendButton.disabled = false;
        sendButton.innerText = "Send Another Message";
    }, 15000); // 15 seconds
}
