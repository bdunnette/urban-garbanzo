# urban-garbanzo

![urban garbanzo](urban-garbanzo.jpg)

## Developing

First, you'll need to install [Node.js](https://nodejs.org/en/download/) - Ubuntu/Debian users can install it via package manager (so you'll get automatic updates) by following [these instructions](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

Once you have Node, you'll need to download our [source code](https://en.wikipedia.org/wiki/Source_code) - you can either:
* [Download a .ZIP file](./archive/master.zip) (if you just want to try it out)
* [Install git](https://help.github.com/articles/set-up-git/) and [clone our repository](https://help.github.com/articles/which-remote-url-should-i-use/) - this will allow you to ["push" your changes](https://help.github.com/articles/pushing-to-a-remote/) so that others can take advantage of them; for a tutorial in using git, see [try.github.com](http://try.github.com/)

Finally, once you have the code, you'll need to install the remaining bits of software that FGTCDB runs on top of - its "dependencies".

To do so:
* Install [Bower](http://bower.io/) - `sudo npm install -g bower` - to help us download & update client-side tools like [Bootstrap](http://getbootstrap.com/) and [AngularJS](http://campus.codeschool.com/courses/shaping-up-with-angular-js)
* Go to the directory where you've downloaded the FGTCDB source code
* `npm install` to get the libraries to run the server portion of our code
* `cd client && npm install  && bower install` to install the web client's dependencies
* `gulp serve` to run the web client & server
