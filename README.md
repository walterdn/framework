#troutr:
a node package that uses the node http and node fs modules to serve files from the user's directory

##use:
Use the troutr by passing in a file extension as a string to the setTrout function.

 The troutr will then find and host all of the files with that extension and their url path ('/path') will be the file name without the extension. 

###set trout: specifies the file extension
 `setTrout('html');` 

Your file (example: trout.html) in the directory will get an endpoint at '/trout' and the html file will be hosted at localhost:3000/trout

###serve trouts: allows you to specify your port
You can also specify the port that you want the troutr to run on, so the above example with localhost:3000 will work with any specified port using `serveTrouts(3000);` where 3000 is any port you have access to. 


