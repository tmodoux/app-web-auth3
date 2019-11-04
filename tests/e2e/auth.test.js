import {Selector, RequestMock, RequestLogger} from 'testcafe';

const authEndpoint = 'https://tmodoux.pryv.me/auth/login';
const checkAppEndpoint = 'https://tmodoux.pryv.me/accesses/check-app';
const emailEndpoint = 'https://reg.pryv.me/test@test.com/uid';
const userEndpoint = 'https://reg.pryv.me/tmodoux/server';
const pollEndpoint = 'https://reg.pryv.me/access/pollKey';
const createAccessEndpoint = 'https://tmodoux.pryv.me/accesses';
const getStreamsEndpoint = 'https://tmodoux.pryv.me/streams';
const permissions = [
  {streamId: 'diary', defaultName: 'Diary', level: 'read'},
  {streamId: 'work', defaultName: 'Work', level: 'manage'},
  {concept: {value: 'concept'}, defaultName: 'Concept', level: 'read'},
];
const translatedPermissions = [
  {streamId: 'diary', defaultName: 'Diary', level: 'read'},
  {streamId: 'work', defaultName: 'Work', level: 'manage'},
  {defaultName: 'Concept', level: 'read', streamId: 'concept'},
];
const checkedPermissions = [
  {streamId: 'diary', defaultName: 'Diary', level: 'read'},
  {streamId: 'work', name: 'Work', level: 'manage'},
  {streamId: 'concept', defaultName: 'Concept', level: 'read'},
];
const needSigninState = {
  status: 'NEED_SIGNIN',
  requestingAppId: 'client-app',
  requestedPermissions: permissions,
};

// ---------- Requests loggers ----------

const authLogger = RequestLogger(authEndpoint, {
  logRequestBody: true,
  stringifyRequestBody: true,
});

const checkAppLogger = RequestLogger(checkAppEndpoint, {
  logRequestBody: true,
  stringifyRequestBody: true,
});

const emailLogger = RequestLogger(emailEndpoint);

const userLogger = RequestLogger(userEndpoint);

const pollLogger = RequestLogger(pollEndpoint, {
  logRequestBody: true,
  stringifyRequestBody: true,
});

const createAccessLogger = RequestLogger(createAccessEndpoint, {
  logRequestBody: true,
  stringifyRequestBody: true,
});

const getStreamsLogger = RequestLogger(getStreamsEndpoint);

// ---------- Requests mocks ----------

const authRequestMock = RequestMock()
  .onRequestTo(authEndpoint)
  .respond({token: 'personalToken'}, 200, {'Access-Control-Allow-Origin': '*'});

const checkAppMock = RequestMock()
  .onRequestTo(checkAppEndpoint)
  .respond({checkedPermissions: checkedPermissions}, 200, {'Access-Control-Allow-Origin': '*'});

const usernameForEmailMock = RequestMock()
  .onRequestTo(emailEndpoint)
  .respond({uid: 'tmodoux'}, 200, {'Access-Control-Allow-Origin': '*'});

const userExistenceMock = RequestMock()
  .onRequestTo(userEndpoint)
  .respond(null, 200, {'Access-Control-Allow-Origin': '*'});

const pollMock = RequestMock()
  .onRequestTo(pollEndpoint)
  .respond(needSigninState, 200, {'Access-Control-Allow-Origin': '*'});

const createAccessMock = RequestMock()
  .onRequestTo(createAccessEndpoint)
  .respond({access: {token: 'appToken'}}, 200, {'Access-Control-Allow-Origin': '*'});

const getStreamsMock = RequestMock()
  .onRequestTo(getStreamsEndpoint)
  .respond({streams: [{id: 'concept', clientData: {concept: {value: 'concept'}}}]}, 200, {'Access-Control-Allow-Origin': '*'});

fixture(`Auth request`)
  .page(`http://localhost:8080/auth?key=pollKey`)
  .requestHooks(authLogger, checkAppLogger, emailLogger, userLogger, pollLogger, createAccessLogger, getStreamsLogger,
    authRequestMock, checkAppMock, usernameForEmailMock, userExistenceMock, pollMock, createAccessMock, getStreamsMock);

test('Auth request, app access check and then accept permissions', async testController => {
  await testController
    // Catch eventual unexpected errors that pop as window.alert
    .setNativeDialogHandler((type, text, url) => {
      throw new Error(text);
    })
    // Fill the auth form
    .typeText('#usernameOrEmail', 'test@test.com')
    .typeText('#password', 'mypass')
    .click('#submitButton')
    // Poll call was performed
    .expect(pollLogger.contains(record =>
      record.request.method === 'get' &&
      record.response.statusCode === 200
    )).ok()
    // Email to username call was performed
    .expect(emailLogger.contains(record =>
      record.request.method === 'get' &&
      record.response.statusCode === 200
    )).ok()
    // Check user existence call was performed
    .expect(userLogger.contains(record =>
      record.request.method === 'post' &&
      record.response.statusCode === 200
    )).ok()
    // Login call was performed
    .expect(authLogger.contains(record =>
      record.request.method === 'post' &&
      record.response.statusCode === 200 &&
      record.request.body.includes('"appId":"pryv-app-web-auth-3"') &&
      record.request.body.includes('"username":"tmodoux"') &&
      record.request.body.includes('"password":"mypass"')
    )).ok()
    // Get streams call was performed
    .expect(getStreamsLogger.contains(record =>
      record.request.method === 'get' &&
      record.response.statusCode === 200
    )).ok()
    // Check-app call was performed
    .expect(checkAppLogger.contains(record =>
      record.request.method === 'post' &&
      record.response.statusCode === 200 &&
      record.request.body.includes('"requestingAppId":"client-app"') &&
      record.request.body.includes(`"requestedPermissions":${JSON.stringify(translatedPermissions)}`)
    )).ok()
    // Requested permissions are printed to the user
    .expect(Selector('#appIdText').innerText).contains('App client-app is requesting :')
    .expect(Selector('ul').textContent).contains('A permission on stream Diary with level READ')
    .expect(Selector('ul').textContent).contains('A permission on stream Work with level MANAGE')
    .expect(Selector('ul').textContent).contains('A permission on stream Concept with level READ')
    // If the user accepts them
    .click('#acceptPermissions')
    // Access creation call is performed
    .expect(createAccessLogger.contains(record =>
      record.request.method === 'post' &&
      record.response.statusCode === 200 &&
      record.request.body.includes('"name":"client-app"') &&
      record.request.body.includes('"type":"app"') &&
      record.request.body.includes(`"permissions":${JSON.stringify(checkedPermissions)}`)
    )).ok()
    // Update call is performed with accepted state
    .expect(pollLogger.contains(record =>
      record.request.method === 'post' &&
      record.response.statusCode === 200 &&
      record.request.body.includes('"status":"ACCEPTED"') &&
      record.request.body.includes('"username":"tmodoux"') &&
      record.request.body.includes('"token":"appToken"')
    )).ok();
});
