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

                        <!-- Programming Languages -->
                        <h4 style="opacity: 1;">Programming Languages</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=FFDD54">
                            <img class="rounded-xl" src="https://img.shields.io/badge/C-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white">
                        </p>

                        <!-- Web Development -->
                        <h4 style="opacity: 1;">Web Development</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Jinja-B41717?style=for-the-badge&logo=jinja&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/JSP-007396?style=for-the-badge&logo=java&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Servlets-2E2E2E?style=for-the-badge&logo=java&logoColor=white">
                        </p>

                        <!-- Backend / Frameworks -->
                        <h4 style="opacity: 1;">Backend / Frameworks</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Spring%20Boot-6DB33F.svg?style=for-the-badge&logo=spring-boot&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/REST_API-0052CC?style=for-the-badge&logo=apachespark&logoColor=white">
                        </p>

                        <!-- Cloud -->
                        <h4 style="opacity: 1;">Cloud</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
                        </p>

                        <!-- Databases -->
                        <h4 style="opacity: 1;">Databases</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
                        </p>

                        <!-- AI / ML -->
                        <h4 style="opacity: 1;">AI / ML</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Matplotlib-11557C?style=for-the-badge&logo=python&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white">
                        </p>

                        <!-- Version Control & Tools -->
                        <h4 style="opacity: 1;">Version Control & Tools</h4>
                        <p class="flex flex-row flex-wrap items-center gap-2" style="opacity: 1;">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Apache_Tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
                            <img class="rounded-xl" src="https://img.shields.io/badge/Spring_Tool_Suite-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
                        </p>

                    </div>
                `;
                break;




//leetcode card
            case 'leetcode':
                // Manual data fallback
                const manualData = {
                    totalSolved: 330,
                    easySolved: 124,
                    mediumSolved: 181,
                    hardSolved: 15,
                    acceptanceRate: 68.81,
                    ranking: 289440
                };

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

                const renderLeetCodeStats = (data) => {
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
                };

                // Try to fetch real data first
                fetch("https://leetcode-stats-api.herokuapp.com/Mubasshir_Khan")
                    .then(res => res.json())
                    .then(data => {
                        // Use real data if available
                        if (data.status !== "success" || !data.totalSolved) {
                            throw new Error("Invalid data received");
                        }
                        renderLeetCodeStats(data);
                    })
                    .catch(error => {
                        console.log("Using manual data due to error:", error);
                        // Fall back to manual data
                        renderLeetCodeStats(manualData);
                        
                        // Show small notice about using cached data
                        const notice = document.createElement('div');
                        notice.className = 'text-center text-xs text-gray-400 mt-2';
                        notice.innerHTML = '<i class="fas fa-info-circle"></i> Showing cached data';
                        document.querySelector(".leetcode-stats-container").appendChild(notice);
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
