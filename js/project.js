const team = document.querySelector('.team');

devs.map(data => {

    team.innerHTML = `
    <div class="team">
            <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg" alt="img_1">
            <h3>Kamran Basit</h3>
            <h6>WEb Dev</h6>
    </div>
    `;

});