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
            
            // case 'tech-stack':
            //     modalTitle.textContent = 'Tech Stack';
            //     modalBody.innerHTML = '<ul><li>Python, Java</li><li>Flask, Spring Boot</li><li>React, MongoDB, MySQL</li><li>AWS, Docker</li></ul>';
            //     break;

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


            // case 'codechef':
            //     modalTitle.textContent = '3★ @Codechef';
            //     modalBody.innerHTML = 'Competitive programmer with a 3-star rating on Codechef.';
            //     break;
            case 'leetcode':
                modalTitle.textContent = 'LeetCode';
                modalBody.innerHTML = '500+ problems solved across arrays, trees, dynamic programming, and more.';
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
