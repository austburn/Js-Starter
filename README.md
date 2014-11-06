# JS Starter
This is a template for a Javascript application that is powered by [Gulp](http://gulpjs.com/) for automation.
## Requirements
* git
* npm

```
git clone https://github.com/austburn/Js-Starter.git
npm install
```
This project is ready to work with [Browserify](http://browserify.org/) and [Watchify](https://github.com/substack/watchify
). For those that aren't familiar, Browserify takes adavantage of [NodeJS](nodejs.org) [require](http://nodejs.org/api/modules.html#modules_module_require_id). Watchify is a nice tool that will automatically rebundle your application code (no manual builds!). This allows your development flow to be seemless - code change and refresh.

This also utilizes [jscs](https://github.com/jscs-dev/node-jscs) and [jshint](www.jshint.com) for code quality and general linting. You can find the configurations for these tools in ```.jscsrc``` and ```.jshintrc```. To ignore files (node_modules, etc.) simply add them to ```.jshintrc``` as you would add them to a ```.gitignore``` file.
## Note
In the ```Gulpfile.js``` you'll notice some comments that you'll have to fixup to match your projects needs.