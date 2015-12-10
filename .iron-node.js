var settings = {
  "v8": {
    "flags": [ // DEFAULT=[]; https://github.com/thlorenz/v8-flags/blob/master/flags-0.11.md
      "es_staging",
      "--es_staging",
      "--harmony"
    ]
  },
  "app": {
    "native+": true // DEFAULT=FALSE; extends require to search native modules respecting the current v8 engine version.
  }
};

module.exports = settings;
