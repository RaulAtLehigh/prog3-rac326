// Raul Contreras (RAC326) 

const express = require("express"); 
const path = require("path");
const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs"); 

app.use(express.static(
  path.resolve(__dirname, "public")
));

let month = 0;
let year = 0;

function genCalendar(month, year, req, res) {
  console.log("Calendar Generating for: " + month +"/" + year);
  // If your feeling clever, come up with a more streamlined way to write this function
  function calcLastDayOfMonth(month) {
    let lastDay = 0;
    if (month === 4 || month === 6 || month === 9 || month === 11)
      lastDay = 30;
    else if (month !== 2)
      lastDay = 31;
    else if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
      lastDay = 29;
    else
      lastDay = 28;
    return lastDay;
  }

  function isToday(m,d,y) {
    const today = new Date();
    return m == today.getMonth()+1 && y == today.getFullYear() && d == today.getDate();
  }
  function dayOfFirstOfMonth(m,y){//want to know what day of week the first day of the month lands on
   //console.log(m + "/" + y);
    const firstDay = new Date(y, m-1, 1);//object pointing to the first day of the month
    //console.log(firstDay.toDateString());
    return firstDay.getDay();//0-6 Sunday-Saturday
  }

  const monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var header_string = monthNames[month] +  " "+year;
  var calendar_string = ``;
  const firstDay =dayOfFirstOfMonth(month, year);//have the first day
  const lastDay = calcLastDayOfMonth(month);
  //console.log(firstDay);
  count =1;
  for(i =0; i<= 34;i++){
    //add a <tr> for every seventh day
    if((i%7) ==0 ){
      calendar_string += `<tr>`;
    }

    if(i >= (firstDay) && count <= lastDay){
      //check if this is the current day and tag it with an ID
      if(isToday(month, count, year)){
        calendar_string += `<td id="today">${(count++)}</td>`;
      }
      else{
        calendar_string += `<td>${(count++)}</td>`;
      }
    }
    else{
      calendar_string += `<td></td>`;
    }
    if((i%7) == 6){
      calendar_string += `</tr>`;
    }
  }
  //console.log(calendar_string);
  res.render("index", {
    header: header_string,
    calendar: calendar_string
  });
}

app.get("/calendar", function(req, res) {
  //console.log("line 98");
  if (req.query.month && req.query.year) {//check if the queries are provided
   // console.log("line 100");
    month = parseInt(req.query.month);
    year = parseInt(req.query.year);
  } else {
    let today = new Date();// function that returns the current date
    month = today.getMonth() + 1;
    year = today.getFullYear();
  }
  genCalendar(month, year, req, res);
});

app.get("/backmonth", function(req, res) {
// Assign new month and year and call genCalendar
if(month ==0 || year ==0){
  let today = new Date();// function that returns the current date
  month = today.getMonth() + 1;
  year = today.getFullYear();
}
if(month == 1){
    month = 12;
    year--;
  }else{
    month--;
  }
  genCalendar(month, year, req, res);
});

app.get("/forwardmonth", function(req, res) {
  if(month ==0 || year ==0){
    let today = new Date();// function that returns the current date
    month = today.getMonth() + 1;
    year = today.getFullYear();
  }
  if(month == 12){
    month = 1;
    year++;
  }else{
    month++;
  }
  genCalendar(month, year, req, res);});

app.get("/backyear", function(req, res) {
// Assign new month and year and call genCalendar
if(month ==0 || year ==0){
  let today = new Date();// function that returns the current date
  month = today.getMonth() + 1;
  year = today.getFullYear();
}
year--;
genCalendar(month, year, req, res);
});

app.get("/forwardyear", function(req, res) {
// Assign new month and year and call genCalendar
if(month ==0 || year ==0){
  let today = new Date();// function that returns the current date
  month = today.getMonth() + 1;
  year = today.getFullYear();
}
year++;
genCalendar(month, year, req, res);
});

app.listen(3000, (req, res)=>{
  console.log("connection accepted")
});

