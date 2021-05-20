class UI{
    constructor(){
        this.profile = document.getElementById('result-placeholder');
    }

    showProfile(userInfo){
        console.log(userInfo);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                    <img class="img-fluid mb-2" src=${userInfo.avatar_url}>
                    <center><a href=${userInfo.html_url} target="_blank" class="btn btn-outline-info">Go To User's Github Profile</a></center>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-danger">Public Repos: ${userInfo.public_repos}</span>
                        <span class="badge bg-success">Public Gists: ${userInfo.public_gists}</span>
                        <span class="badge bg-primary ">Followers: ${userInfo.followers}</span>
                        <span class="badge bg-warning">Following: ${userInfo.following}</span>
                        <br><br>
                        <ul class="list-group">
                        <li class="list-group-item">Company: ${userInfo.company}</li>
                        <li class="list-group-item">Website/Blog: ${userInfo.blog}</li>
                        <li class="list-group-item">Location: ${userInfo.location}</li>
                        <li class="list-group-item">Member-Since: ${userInfo.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos">
            </div>
        `;
    }

    displayNothing() {
        this.profile.innerHTML = ``;
    }
}