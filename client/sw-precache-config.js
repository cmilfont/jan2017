module.exports = {
  stripPrefix: 'build/',
  staticFileGlobs: [
    'build/*.html',
    'build/manifest.json',
    'build/static/**/!(*map*)'
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/service-worker.js',
  navigateFallback: 'index.html',
  runtimeCaching: [{
    urlPattern: 'https://code.getmdl.io/1.3.0/material.blue-red.min.css',
    handler: 'fastest',
    options: {
      cache: {
        maxEntries: 10,
        name: 'mdl-cache'
      }
    }
  }]

};
