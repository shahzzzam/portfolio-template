## samarth.xyz

```
git clone https://github.com/samarthmshah/portfolio-template.git
cd portfolio-template/
```

Make sure you have npm installed.
```
npm install
```
If Bower is installed, install it this way:
```
npm install -g bower
```
Then,
```
bower install
```
Run ``grunt`` to run specific tasks, the most important is to compile SASS to CSS.
Use ``compass`` to do that, you need to have ruby installed.
If compass not installed,
```
gem install compass
```
Then,
```
grunt
```
Make changes to ``app/index.html`` however you want.
Make CSS changes to ``app/scss/``.
Dont make changes to ``dist``.

### ONLY FOR DEPLOYMENT

After making all the changes.

Make changes to ``flightplan.js``.
Change ``host``, ``username`` and ``port`` according to whatever server you bought to deploy it.

After doing that,
Run ``grunt publish`` to minify everything to ``dist/`` folder.
After thats done.
Run ``grunt server-dist`` to check whether your dist is OK.
Then install flightplan like so:
```
npm install -g flightplan
```
Thereafter, run this:
```fly production```

Peace.
