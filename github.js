class GitHub{
    constructor(){
        this.config = {
            headers: {
                Authorization: `token ${github_API_PAT}`
            }
        }

        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUserInfo(userName) {
        //Getting User profile info
        //?clientID=${this.clientID}&clientSecret=${this.clientSecret} -> this is a query string -> required to get respective api data
        const profileReponse = await fetch(`https://api.github.com/users/${userName}`,this.config);

        const profileInfo = await profileReponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,this.config);

        const repoInfo = await repoResponse.json();
        
        return {
            profile: profileInfo,
            repos: repoInfo
        };
    }
}