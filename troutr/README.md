#troutr:
a node package that uses the node http and node fs modules to serve files from the user's directory

##use:

Example: 

 `var app = require(__dirname + '/troutr/index.js');`

 then

 `app.setTrout('html');` 

 or

 `app.setTrout('txt');` 

 and finally

 `app.serveTrouts(3000);` 

Save this or similar code to a js file, and execute it with node. 

Use the troutr by calling setTrout('file extension') and serveTrouts(port number).

The troutr will then find and host all of the files with that extension and their url path ('/path') will be the file name without the extension. 

###set trout: finds files with specified extension and supplies Troutr object with the proper callback functions.
 

Your file (example: trout.html) in the parent directory will get an endpoint at '/trout' and the html file will be hosted at localhost:3000/trout

###serve trouts: allows you to specify your port
You can also specify the port that you want the troutr to run on, so the above example with localhost:3000 will work with any specified port using `serveTrouts(3000);` where 3000 could be replaced with any port you have access to. 

