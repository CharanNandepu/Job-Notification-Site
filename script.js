// public/script.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/jobs')
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            data.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.className = 'job';
                jobElement.innerHTML = `
                    <h2>${job.role}</h2>
                    <p>${job.description}</p>
                    <p>Posted on: ${new Date(job.posted_date).toLocaleDateString()}</p>
                    <p><a href="${job.apply_link}" target="_blank">Apply Here</a></p>
                `;
                jobList.appendChild(jobElement);
            });
        });
});
