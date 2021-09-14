// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API: 'https://accounts.spotify.com/api/token',
  spotifyClientID: '7397c74885044f469e4ab09612660617',
  spotifyClientSecret: 'ba5bc4ee41df49469f2ea016a107e404',
  grant_type: 'client_credentials',
  new_releases: 'https://api.spotify.com/v1/browse/new-releases',
  artist: 'https://api.spotify.com/v1/artists/',
  top_tracks: 'https://api.spotify.com/v1/artists/{id}/top-tracks'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
