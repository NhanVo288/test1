import { globalConfig } from 'src/config-global';
import { getAccessToken, isLoggedIn } from 'src/utils/auth';

const fetcher = (accessToken) => {
  const _fetch = (method, endpoint, body, successCallback, errorCallback) => {
    let response;

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    let url;

    if (endpoint.includes('v2')) {
      url = globalConfig.apiUrl.replace('/v1', '') + endpoint;
    } else {
      url = globalConfig.apiUrl + endpoint;
    }

    body = JSON.stringify(body);

    if (isLoggedIn() || accessToken)
      headers.Authorization = `bearer ${accessToken || getAccessToken()}`;

    if (body === undefined) {
      response = fetch(url, { method, headers });
    } else {
      response = fetch(url, { method, headers, body });
    }

    handleResponse(response, successCallback, errorCallback);
  };

  const _fetchFormData = (method, endpoint, body, successCallback, errorCallback) => {
    let response;

    const headers = {
      Accept: 'application/json',
    };
    const url = globalConfig.apiUrl + endpoint;

    if (isLoggedIn() || accessToken)
      headers.Authorization = `bearer ${accessToken || getAccessToken()}`;

    if (body === undefined) {
      console.error('Body is required');
    } else {
      response = fetch(url, { method, headers, body });
    }

    handleResponse(response, successCallback, errorCallback);
  };

  const handleResponse = (response, successCallback, errorCallback) => {
    response.then((res) => {
      if (res.status === 200) {
        res.json().then((result) => {
          if (result.success) {
            if (successCallback) {
              successCallback(result.data);
            }
          } else if (errorCallback) {
            errorCallback(result.error);
          }
        });
      } else if (res.status === 403) {
        if (errorCallback) errorCallback('No permission - 403');
      } else if (res.status === 401) {
        if (errorCallback) errorCallback('Unauthorized - 401');
        //  logout
        localStorage.removeItem(globalConfig.accessTokenKey);
        localStorage.removeItem('provider');
      } else if (res.status === 500) {
        if (errorCallback) errorCallback('Internal Server Error - 500');
      } else if (res.status === 502) {
        if (errorCallback) errorCallback('Service Unavailable - 502');
      } else if (res.status === 526) {
        if (errorCallback) errorCallback('Please connect to VPN - 526');
      } else if (errorCallback) errorCallback('Unknown');
    });
  };

  return {
    get: (endpoint, successCallback, errorCallback) =>
      _fetch('GET', endpoint, undefined, successCallback, errorCallback),
    post: (endpoint, body, successCallback, errorCallback) =>
      _fetch('POST', endpoint, body, successCallback, errorCallback),
    postFormData: (endpoints, body, successCallback, errorCallback) =>
      _fetchFormData('POST', endpoints, body, successCallback, errorCallback),
    put: (endpoint, body, successCallback, errorCallback) =>
      _fetch('PUT', endpoint, body, successCallback, errorCallback),
    delete: (endpoint, body, successCallback, errorCallback) =>
      _fetch('DELETE', endpoint, body, successCallback, errorCallback),
  };
};

export default fetcher;
