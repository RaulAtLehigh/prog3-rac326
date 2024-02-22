# prog3-rac326
Calendar with the use of Node.js (Express)

# Overview
The project is to combine several of the NodeDemos that we have gone over in class to create an html calendar like the one shown above. As you can see, the month and year of the calendar are shown on the top line of the grid and take up three columns. Clicking the single arrows (< >) will display a calendar either one month before or one month after the current calendar. Clicking the double arrows (<< >>) will display a calendar for the same month, one year before or later. If the displayed calendar happens to be the current month, then the background color for today's cell must be a different color than the rest of the days in order to highlight it. In all cases the page is redisplayed and the new calendar replaces the old one.
# Instructions
Steps
- Like the last assignment, start by selecting a pleasant appearing analogous color scheme for your calendar using color.adobe.com. Use these colors to color your calendar.
- Make sure you have node (and npm) installed.
- Download prog3.zip from Coursesite and unzip on your computer.
- Within the prog3 folder run “git init” to initialize the git repository.

- Do several git adds and git commits as you work on the project.

- Within the prog3 folder run “npm init”. Npm will give you a series of prompts for which you will give reasonable answers. When in doubt, hit return. When you're finished you'll have an initial package.json file for your project. This file provides configuration information for your project and will become more important as we progress through the semester. You can always edit the package.json file in VSC or another code editor and change whatever you want later on.
    - From the terminal run:
    - npm install express --save
    - npm install ejs --save
    - This will install the express and ejs modules into the node_modules folder in your project and also add references to them in the package.json file. Saving the references is important so that you can delete the node_modules folder (which can get large) before zipping up the project and copying it (to Coursesite, for instance). When you (or the graders) unzip the project, just run npm install from the project folder to reinstall the modules.
 - There is a views folder in the project and a single file inside it named calendar.ejs. Edit this file and enter a template html page with a body consisting of a single table containing the boilerplate (unchanging) parts of the calendar. Include two ejs scriptlets (<%= value %>), one for the month/year header (eg. "February 2019") and one for the rows of the calendar with the day numbers. Add a title in the head (how about Calendar?) and put any styles you need in the styles.css file. Make sure to add a style to collapse the borders in the calendar table. [google: collapse borders”] The calendar must be centered on the page.
- There is a script named app.js in the project folder. Modify the script to create an express router for the path /calendar which will get the parameters month and year from the query string and pass them to a function that will create a calendar and send it to the browser by rendering the calendar view/template and sending it the month/year header string and the <tr> rows for the calendar body. If the user of the calendar app doesn't specify a month and year then use the current month. For example:
    - localhost:3000/calendar/month=9&year=2024
        - should display a calendar for September, 2024
    - localhost:3000/calendar
        - should display a calendar for the current month.
    - Edit the four arrows in the header of the calendar (in index.ejs) to request the appropriate router (one month/year forward/backward).
- Create four more routers in app.js for the four arrow buttons:
    - /forwardmonth /backmonth /forwardyear /backyear
- Test the program:
    - Run node app.js from the terminal window.
    - Test the calendar from your browser both with and without specifying the month and year in the query. For the current month, make sure today’s day is highlighted.
    - Test each of the four arrow buttons.

- Delete the node_modules folder from the project folder. Zip up the entire project folder and upload to Coursesite using the provided link.
