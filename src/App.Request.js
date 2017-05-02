import * as AuthModule from './App.Auth';

export const baseUrl = 'http://unieventorapi.azurewebsites.net/';

export function makeApiRequest(requestMethd, relUrl, data, onsuccess, onfailure, modifyXhr = null) {
    var xhr = new XMLHttpRequest();
    xhr.open(requestMethd, baseUrl + relUrl, true);
    if (modifyXhr) {
        modifyXhr(xhr);
    }
    xhr = AuthModule.authorize(xhr);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        onsuccess(data);
    };
    xhr.onerror = function () {
        var data = JSON.parse(xhr.responseText);
        onerror(data);
    };
    xhr.send(data);
}