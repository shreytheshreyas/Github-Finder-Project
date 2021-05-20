class GitHub{
    constructor(){
        this.config = {
            headers: {
                Authorization: `token ${github_API_PAT}`
            }
        }
    }
    async getUserInfo(userName) {
        //Getting User profile info
        //?clientID=${this.clientID}&clientSecret=${this.clientSecret} -> this is a query string -> required to get respective api data
        const profileReponse = await fetch(`https://api.github.com/users/${userName}`,this.config);

        const profileInfo = await profileReponse.json();

        return {
            profile: profileInfo
        };
    }
}