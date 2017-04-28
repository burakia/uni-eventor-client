export var token = {};

export function login(username, password){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            token = JSON.parse(xhr.responseText);
        }
    };
    xhr.open('POST', 'http://unieventorapi.azurewebsites.net/token');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('grant_type=password&username=' + username + '&password=' + password);
}

export function authorize(xhr) {
    if (token.access_token && xhr.readyState === 1) {
        xhr.withCredentials = true;
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.setRequestHeader('Authorization', 'Bearer ' + token.access_token);
        xhr.send();
    }
}