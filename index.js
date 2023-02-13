
const registerService = require('./service/register');
const loginService = require('./service/login');
const verifyService = require('./service/verify');
const util = require('./utils/util')

const healthPath = '/health';
const registerPath = '/register';
const loginPath = '/login';
const verifyPath = '/verify';


exports.handler = async(event) => {
    let response;
    if (event.httpMethod === 'GET' && event.path === healthPath){
        response = util.buildResponse(200, 'health get')
    }
    else if (event.httpMethod === 'POST' && event.path === loginPath){
        const loginBody = JSON.parse(event.body);
        response = await loginService.login(loginBody);
    }
    else if (event.httpMethod === 'POST' && event.path === registerPath){
        const registerBody = JSON.parse(event.body);
        response = await registerService.register(registerBody);
    }
    else if (event.httpMethod === 'POST' && event.path === verifyPath){
        const verifyBody = JSON.parse(event.body);
        response = await verifyService.verify(verifyBody);
    }else if (event.httpMethod === 'OPTIONS'){
        response = util.buildCORSResponse(200, 'Success')
    }
    else{
        response = util.buildResponse(500, 'bad')
    }
    return response
};

