const maxTeams = 6;
let teams = JSON.parse(localStorage.getItem('teams')) || [];

// Admin credentials
const adminUsername = 'admin';
const adminPassword = 'admin123';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for admin login
    if (username === adminUsername && password === adminPassword) {
        alert('Admin logged in successfully!');
        window.location.href = 'add/admin.html';
        return;
    }

    // Check for team leader login
    if (teams.length < maxTeams) {
        const team = {
            username: username,
            password: password
        };
        teams.push(team);
        localStorage.setItem('teams', JSON.stringify(teams));
        localStorage.setItem('currentTeam', username);
        displayTeams();
        alert('Team leader logged in successfully!');
        window.location.href = 'add/quiz.html';
    } else {
        alert('Maximum number of teams reached.');
    }
});

function displayTeams() {
    const teamList = document.getElementById('teamList');
    teamList.innerHTML = '';
    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `<h3>Team ${index + 1}</h3><p>Leader: ${team.username}</p>`;
        teamList.appendChild(teamDiv);
    });
}

// Display teams on page load
displayTeams();
