
# step 1 => npm install 
# step 2 => for the BrowserRoute, --cmd:-- npm install react-route-dom
# step 3 => for node js and express framework, --cmd:-- npm install express && npm install axios
# step 4 => for nodmon  --cmd:- npm install nodemon --config---- inside the package.json file  
# step 5 =>  for the BrowserRoute --cmd:- npm install react-route-dom     or install react-router-dom@6
# set the scirip{"start": "nodemon src/server.js", }           
 //why nodemon? => for automatic server  restart if any changes. 

###  In this project there are two processes/servies will run  
    -- one for the backend and another for front-end
    -- project running process (before start install the all package mentionde above)
        -- for the front-end 
            cmd:-   npm run dev
        -- for the back-end 
            cmd:-   node start 

        -- for the backend and front end at a time (with nodemon )
            cmd:-    nodemon start 




