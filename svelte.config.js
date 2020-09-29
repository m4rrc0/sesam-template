// const sveltePreprocessSesam = require('sesamjs/svelte-preprocess-sesam');

module.exports = {
  css: false, // this is the default option in the snowpack svelte plugin but let's be explicit
  hydratable: true,
  preprocess: [
    // sveltePreprocessSesam // Not ready for prime time
  ],
};
