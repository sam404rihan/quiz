let teams = JSON.parse(localStorage.getItem('teams')) || [];

function displayTeams() {
    const teamList = document.getElementById('teamList');
    teamList.innerHTML = '';
    teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'team';
        teamDiv.innerHTML = `
            <h3>Team ${index + 1}</h3>
            <p>Leader: ${team.username}</p>
            <p>Score: ${team.score !== null ? team.score : 'Not available'}</p>
            <button onclick="deleteTeam(${index})">Delete Team</button>
            <button onclick="updateScore(${index})">Update Score</button>
        `;
        teamList.appendChild(teamDiv);
    });
}

function deleteTeam(index) {
    teams.splice(index, 1);
    localStorage.setItem('teams', JSON.stringify(teams));
    displayTeams();
}

function updateScore(index) {
    const newScore = prompt('Enter new score for the team:');
    if (newScore !== null) {
        teams[index].score = newScore;
        localStorage.setItem('teams', JSON.stringify(teams));
        displayTeams();
    }
}

// Display teams on page load
displayTeams();
