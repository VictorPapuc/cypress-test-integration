const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = function(on, config) {
	on('file:preprocessor', cucumber())
}
