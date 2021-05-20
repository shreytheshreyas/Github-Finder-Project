
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
                uiObj.showAlert("User Does not exist",'alert alert-danger');
            } else {
                //display user profile data on the DOM
                //console.log(userData.profile);
                uiObj.removeAlert();
                uiObj.showProfile(userData.profile);

            }
        });
    } else {
        //The scemario where there is no input
        uiObj.removeAlert();
        uiObj.displayNothing();
    }
});
