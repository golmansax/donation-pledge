.PHONY: build eslint production watch

build:
	./node_modules/.bin/webpack --progress --colors

eslint:
	./node_modules/.bin/eslint .

production:
	node index.js

watch:
	./node_modules/.bin/webpack -w --progress --colors
