class GitHub{
    constructor(){
        this.clientID = "ab13dfa1491c6e73528a";
        this.clientSecret = "b1992bcd618f036cbaecaa96439b032f6792c2e8";
    }

    async getUserInfo(userName) {
        //Getting User profile info
        //?clientID=${this.clientID}&clientSecret=${this.clientSecret} -> this is a query string -> required to get respective api data
        const profileReponse = await fetch(`http://api.github.com/users/${userName}?clientID=${this.clientID}&clientSecret=${this.clientSecret}`);

        const profileInfo = await profileReponse.json();

        return {
            profile: profileInfo
        };
    }
}