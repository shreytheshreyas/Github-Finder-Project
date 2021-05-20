
const myGitHubObj = new GitHub();
const uiObj = new UI();
const searchInput = document.getElementById('searchUser');


searchInput.addEventListener('keyup',(e) => {
    //get input text
    const userName = e.target.value;

    if(userName !== '') {
        myGitHubObj.getUserInfo(userName).then(userData => {
            if(userData.profile.message === "Not Found") {
                //userdata cannot be displayed
                //dont display anything in DOM
            } else {
                //display user profile data on the DOM
                //console.log(userData.profile);
                uiObj.showProfile(userData.profile);

            }
        });
    } else {
        //The scemario where there is no input
        uiObj.displayNothing();
    }
});
