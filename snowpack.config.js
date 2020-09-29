const configKey = process.env.BUILD_STEP;

const sesamOptions = { defaultLang: 'en' };
const directories = {
  watch: 'build',
  browser: 'build',
  ssr: 'build-temp',
  src: 'src',
  pages: '_pages', // automatic pages are placed inside `src/_pages`
  htmlTemplate: 'html.js', // the html template to mount components on is at `src/html.js`
  routes: 'routes.js', // the routes.js file describing programmatic routes is at `src/html.js`
};

const sesamPluginOptions = {
  browser: {},
  ssr: {
    generate: 'ssr',
    css: true,
  },
};

const shouldMinify = configKey === 'browser';

// see https://www.snowpack.dev/#all-config-options
module.exports = {
  plugins: [
    [
      '@snowpack/plugin-optimize',
      {
        minifyJS: shouldMinify,
        minifyCSS: shouldMinify,
        minifyHTML: shouldMinify,
        // preloadModules: false,
        target: 'es2018',
      },
    ],
    ['sesamjs/snowpack-plugin-sesam', sesamPluginOptions[configKey]],
  ],
  mount: {
    public: '/',
    src: '/_dist_',
  },
  exclude: [directories.routes, directories.htmlTemplate],
  devOptions: { bundle: false, open: 'none', out: directories[configKey] },
  buildOptions: {
    clean: true,
  },
  directories, // used by sesam to retrieve the right folder paths
  sesamOptions, // used by sesam
};
