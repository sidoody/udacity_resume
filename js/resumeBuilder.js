




/*
bio
bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional.
*/


var bio = {
  "name" : "Saud Siddiqui",
  "role" : "Imaginator",
  "contacts" : {
    "mobile" : "123-456-7890",
    "email" : "saud@udacity.com",
    "github" : "sidoody",
    "location" : "Washington DC"
  },
  "welcomeMessage" : "Welcome to my resume",
  "skills" : ["Medicine", "UX/UI", "HTML5", "CSS3", "JS", "Git"],
  "biopic" : ["images/fry.jpg"]
};

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);


var projects = { //object projects
  "projects" : [  //array of project objects
    {
    "title" : "Project 1",
    "dates" : "01-01-17",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "images" : ["images/197x148.gif"]
    },
    {
      "title" : "Project 2",
      "dates" : "02-02-19",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat2.",
      "images" : ["images/197x148.gif"]
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "USC",
      "location" : "Los Angeles",
      "degree" : "BA",
      "majors" : ["Biology"," Entrepreneurship"],
      "dates" : "2011"
    },
    {
      "name" : "UCI",
      "location" : "Irvine",
      "degree" : "MD",
      "majors" : ["Medicine", " Emergency Medicine"],
      "dates" : "2015"
    }
  ],
  "onlineCourses" : [
    {
  "title" : "Udacity Front-End Nano Degree",
  "school" : "Udacity",
  "dates" : "2017",
  "url" : "http://www.udacity.com",
}
]
};


var work = {  //work object
  "jobs" : [  //jobs key
    {         //containing objects within the array
      "employer" : "Job 1",
      "title" : "Doer of stuff",
      "location" : "Reyjkavik",
      "dates" : "01-01-17",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      "employer" : "Job 2",
      "title" : "Thinker of things",
      "location" : "Barcelona",
      "dates" : "02-02-18",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ]
};

function displayHeader() {

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBiopic);
$("#header").append(formattedWelcomeMsg);
$("#topContacts, #footerContacts").append(formattedMobile);
$("#topContacts, #footerContacts").append(formattedEmail);
$("#topContacts, #footerContacts").append(formattedGithub);
$("#topContacts, #footerContacts").append(formattedLocation);
};


/*
education
education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings.

*/

function displayEducation(){

for (var i = 0, l = education.schools.length; i < l; i++) {
  $("#education").append(HTMLschoolStart);

  //school name
  var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
  $(".education-entry:last").append(formattedSchoolName);
  //school degree
  var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
  $(".education-entry:last").append(formattedSchoolDegree);
  //school dates
  var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
  $(".education-entry:last").append(formattedSchoolDates);
  //school location
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
  $(".education-entry:last").append(formattedSchoolLocation);
  //school majors
  var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
  $(".education-entry:last").append(formattedSchoolMajors);

}

for (var i = 0, l = education.onlineCourses.length; i < l; i++) {
    $("#education").append(HTMLschoolStart);
  var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
  $(".education-entry:last").append(formattedOnlineTitle);
  var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
  $(".education-entry:last").append(formattedOnlineSchool);
  var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
  $(".education-entry:last").append(formattedOnlineDates);
  var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
  $(".education-entry:last").append(formattedOnlineUrl);
}
};


/*
work
work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.
*/



function displayWork() {

for (var i = 0, l = work.jobs.length; i < l; i++) {

  //create div for each iteration (job)
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
  var concatEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(concatEmployerTitle); //appending to the last element in work entry

  //dates
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
  $(".work-entry:last").append(formattedDates); //appending to the last element in work entry

  //location
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
  $(".work-entry:last").append(formattedLocation); //appending location at last element in work entry

  //description
  var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
  $(".work-entry:last").append(formattedDesc); //appending to the last element in work entry
}
};

/* projects
*/


function displayProjects() {
for (var i = 0, l = projects.projects.length; i < l; i++)  {
  $("#projects").append(HTMLprojectStart);
  var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
  var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
  var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
  var formattedProjectImg = HTMLprojectImage.replace("%data%", projects.projects[i].images);
  $(".project-entry:last").append(formattedProjectTitle); //appending to the last element in work entry
  $(".project-entry:last").append(formattedProjectDates); //appending to the last element in work entry
  $(".project-entry:last").append(formattedProjectDesc); //appending to the last element in work entry
  $(".project-entry:last").append(formattedProjectImg); //appending to the last element in work entry

}
};


displayHeader();
displayWork();
displayProjects();
displayEducation();

$("#mapDiv").append(googleMap);
