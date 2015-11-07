Note: **This template is unfinished, I'm still working on it for my own portfolio**

### INTRO STUFF

- This is what I made for me own Portfolio page @ **samarth.xyz** (WIP).
- Feel free to use this as a template if you like it.
- *Did basic Foundation5/SASS scaffolding by using @juliancwirko 's [zurb-foundation-5 generator](https://github.com/juliancwirko/generator-zf5.git), which uses @addyosmani 's [Yeoman](https://github.com/yeoman) respectively.*

### GETTING STARTED

If you like this template and want to use it:

- Fork the project.
- Once forked, do this:
- ```sh
  $ git clone https://github.com/YOUR-USERNAME/portfolio-template
  $ cd portfolio-template/
  ```
- If you wish to enable yourself to keep up-to-date with my repo, you can optionally add my repo URL as upstream:
  ```sh
  $ git remote add upstream https://github.com/samarthmshah/portfolio-template.git
  ```

Now, make sure you have `npm` installed. If installed, do this to install all the developer dependencies like `flightplan`, `grunt` stuff, etc.

```sh
$ npm install
```

If `Bower` is not installed already, install it globally this way:

```sh
$ npm install -g bower
```

Then, below command will install all your Front-end dependencies like `Foundation`, `jQuery`, etc.

```sh
$ bower install
```

Run `grunt` to complete specific tasks, the most important is to compile `SASS` to `CSS`.
I use `compass` to do that, so you need to have `Ruby` installed.
If `compass` is not installed already, do this. It will also install `SASS`.

```sh
$ gem install compass
$ compass -v
$ sass -v
```


Make changes to `app/index.html` however you want. Make CSS changes to `app/scss/` files. Don't make changes to `dist`. While making changes to your files, let `grunt` do the `watch` for compiling your `SASS` files by entering this cmd:
```sh
$ grunt
```

### ONLY FOR DEPLOYMENT

After making all those changes, make changes to ``flightplan.js``. Change `appName`, `host`, `username` and `port` according to whatever server you have to deploy it.

After doing that, run below commands to minify everything to ``dist/`` folder.

```sh
$ grunt build
```

After that's done, run to check whether your `dist` (where your minified and compiled files go) is OK.

```sh
$ grunt server-dist
```

Then install `flightplan` globally, like so:

```sh
$ npm install -g flightplan
```

Thereafter, run this from `portfolio-template/` to build (publish to `dist/`) your project: This will also commit in your git repo and ask for the `commit` message. It will also ask if you want to `push` it to Github.
```sh
$ fly build:it
```

Then run this to deploy it to a `/tmp/your-app-name/` folder on your remote server.
```sh
$ fly deploy:it
```

Below command is not working for me because of authentication problems with my remote server. You can try to run this. This will basically copy files from `/tmp/your-app-name/` to `~/www/` in your remote machine. Since this didn't work for me, I will write a cron job to do that.
```sh
$ fly copy:it
```
### TODOS

- flightplan doesn't run properly. Works well for the local flights, but having problems with the remote flights.
- Fill up content.
- Thinking about a parallax project carousel.

*Lot's of UI features are inspired from @deedy's personal website, Apple website, Foundation Building blocks, and a few other websites. But, the code is all written by me.*

**This is currently WIP since I get less time for this.**

PS: Please also **star** the project if you clone it.
___
Peace.
