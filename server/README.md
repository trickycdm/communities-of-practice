# frontend-web-framework 

frontend-web-framework is essentially a boilerplate for website development that can be used to build component-based themes or static pages. It runs on Node.js, utilises Express.js for page routing, SASS for creating styles and Handlebars.js for templating. Components can contain static information written into the HTML or they can be populated dynamically with data from the backend via Handlebars.

## Up & Running

Using this framework could not be simpler, in order to get started, follow the instructions below, this assumes that you have already downloaded a version from the repo and are working locally.

 1.  **Open** the `frontend-web-framework` dir in an IDE of your choosing. 
 2.  **Open** the` .env.example` file.
 3.  **Define** a name for your site theme by changing site theme variable: `SITE_THEME=your-theme-name`.
 4.  **Duplicate** the `.env.example` file and **rename** it `.env`.   
 5. Look inside the `./site/themes` directory and **rename** the `basic` folder to match the theme name set in the `.env` file. 
 6. **Open** a new tab in Terminal and `cd` into the home directory.
 7. **Run** the following command `npm install` to install the project dependencies.
 8. Once all of the dependencies have successfully installed **run** `npm run start:dev` in the terminal. This starts Nodemon which initiates a server running on which ever port number has been specified in the `.env` file, most likely, `Port 3000` .
 9. Open a second tab and **run** `npm run grunt`, this is the task runner, it is responsible for compilation and minification of both SASS and Javascript. 
 10. In a third tab, you can type `git init` to initiate a git repository. 
 11.  Once all these steps are completed you can start to build your site, all the files you need to get started are found inside the `./site/themes/your-theme-name/` directory.

\* *whenever you want to see changes that you've made make sure the* `start:dev` *&* `grunt` *commands are running.*


