module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/service-worker.js',
    'build/images/**/*',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  navigateFallback: 'index.html',
  runtimeCaching: [
    {
      urlPattern: 'https://unpkg.com/leaflet@1.0.2/dist/leaflet.css',
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'leaflet-cache'
        }
      }
    },
    {
      urlPattern: 'https://code.getmdl.io/1.3.0/material.blue-red.min.css',
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'mdl-cache'
        }
      }
    },
    {
      urlPattern: 'https://fonts.googleapis.com/icon?family=Material+Icons',
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'mdl-icons-cache'
        }
      }
    },
    {
      urlPattern: 'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en',
      handler: 'fastest',
      options: {
        cache: {
          maxEntries: 10,
          name: 'roboto-cache'
        }
      }
    }
  ]
};
