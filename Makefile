.PHONY: development build eslint production watch

development:
	nodemon --watch server --watch node_modules --watch webpack/build

build:
	./node_modules/.bin/webpack --progress --colors

eslint:
	./node_modules/.bin/eslint .

production:
	node index.js

watch:
	./node_modules/.bin/webpack -w -d --progress --colors

stylint:
	./node_modules/.bin/stylint components
