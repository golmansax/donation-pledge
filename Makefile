.PHONY: development build eslint production watch test

development:
	nodemon --watch server --watch node_modules --watch webpack/build server/entry.js

build:
	./node_modules/.bin/webpack --progress --colors -p

eslint:
	./node_modules/.bin/eslint .

production:
	node server/entry.js

test:
	./node_modules/.bin/mocha --compilers js:babel-core/register -R spec test/**/*

watch:
	./node_modules/.bin/webpack --progress --colors --watch -d

stylint:
	./node_modules/.bin/stylint frontend
