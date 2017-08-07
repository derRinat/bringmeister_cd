import fetch from 'isomorphic-fetch';

import { API_CALL } from "../configs/common";
import { API_ROOT } from "../configs/api";

/** Execute request **/

const execRequest = async (method, endpoint, body = null) => {
    const config = setHeaders({ method });

    if (null !== body) {
        config.body = JSON.stringify(body);
    }

    const response = await fetch(API_ROOT + endpoint, config);
    const json = await response.json();

    return response.ok
        ? json.data
        : Promise.reject(json);
};

/** Set the default request headers **/
const setHeaders = config => {

    config.headers = {
        'Content-Type': 'application/json'
    };

    return config;
};

/** Middleware function **/
const apiMiddleware = store => next => async action => {

    /** Simple action, just forward **/
    if (!action.hasOwnProperty(API_CALL)) {
        return next(action)
    }

    /** API call  **/
    const apiCall = action[API_CALL];

    const { method, endpoint, types, body } = apiCall;
    const [ requestType, successType, errorType ] = types;

    /** Request action **/
    next({
        type: requestType
    });

    return execRequest(method, endpoint, body)
        .then(
            data =>
                next({
                    type: successType,
                    data
                }),

            data => {
                return next({
                    type: errorType,
                    error: data.error || data
                });
            }
        );
};


export default apiMiddleware;
