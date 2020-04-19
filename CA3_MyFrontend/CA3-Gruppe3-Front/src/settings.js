
function URLS(){

    function backendURL() {
        const URL = "https://cahits.dk/clonetester1/";
        return URL;
    }

    function externalApi() {
        const URL = "https://cahits.dk/clonetester1/api/info/external";
        return URL;
    }

    return {
        backendURL,
        externalApi
    }

}

const settingUrl = URLS();

export default settingUrl;