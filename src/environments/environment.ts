// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBwDMNKTmDNhwBeu2GWxjuLI-3i1RCRc_8',
    authDomain: 'kanban-ssr.firebaseapp.com',
    databaseURL: 'https://kanban-ssr.firebaseio.com',
    projectId: 'kanban-ssr',
    storageBucket: '',
    messagingSenderId: '148267665368',
    appId: '1:148267665368:web:1c7584ee1b5b29af4d14ad',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
