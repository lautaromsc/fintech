// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3001',
  API_URI:'http://localhost:3001/api',

  getFintech:'/fintech',
  getAccount:'/fintech/account/',
  postTransfer:'/fintech/transfer/',
  getTransfer:'/fintech/transfer/',

  mapPk: 'pk.eyJ1IjoibGF1dGFyb21zYyIsImEiOiJja3dsaHNsdW8yMXoyMzBxYjZlZnRoZnF0In0.yvH5dz023Q1XfBaibUG_fw',
  getShipping:'/shippify/tracking/'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
