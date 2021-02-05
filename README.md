UPMC Online Pharmacy
---------

A pharmaceutical e-commerce website that focuses on rich user experience through key features of Human Computer Interaction.  


The website provides an enhanced user interface incorporated with optimized usability and accessibility features based on Nielsen's heuristics, contextual inquiry, contextual analysis, and multiple end-user tests.


Development
-----------

This project contains partial HTML files, which are supposed to be loaded by
Angular via AJAX. Unfortuantely, Chrome won't let you load local files that way
by default.

Therefore, you need to **run a local server** or allow such access.

No other dependencies or special configurations are required.

## Run a local server

There are a lot of ways to do that. But the important thing is: make sure the
`public` folder is the root of the website!

The easiest way is here:

```bash
npm install -g http-server
# Do the following whenever you develop.
cd /your/path/to/the/repo/clone/public/
http-server
```

Keep the server running while you change files. If you run it in a terminal
emulator (or a command prompt), DO NOT close the window!

Open `http://localhost:8080/` to see the website and enjoy.
