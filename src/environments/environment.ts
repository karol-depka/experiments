// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBtTf4SlT4i0EQaGyaW-cluZ1c9D-cVCns',
    authDomain: 'experiments-7fg.firebaseapp.com',
    databaseURL: 'https://experiments-7fg.firebaseio.com',
    projectId: 'experiments-7fg',
    storageBucket: 'experiments-7fg.appspot.com',
    messagingSenderId: '322934672550'
  },
};
