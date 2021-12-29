// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const cucumber = require('cypress-cucumber-preprocessor').default;
// eslint-disable-next-line no-undef,@typescript-eslint/no-var-requires
const browserify = require('@cypress/browserify-preprocessor');

// eslint-disable-next-line no-undef
module.exports = (on) => {
    const options = browserify.defaultOptions;

    options.browserifyOptions.plugin.unshift(['tsify', { project: '/cypress-test-integration/tsconfig.json' }]);
    // Or, if you need a custom tsconfig.json for your test files:
    // options.browserifyOptions.plugin.unshift(['tsify', {project: 'path/to/other/tsconfig.json'}]);

    on('file:preprocessor', cucumber(options));
};
