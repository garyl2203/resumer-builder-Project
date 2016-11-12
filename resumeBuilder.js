var bio = {
	"Name" : "Gary Lai",
	"role" : "Self-Driving Car Engineer" ,
	"ContactInfo" : {
        "email" : "gary.lai.31337@gmail.com" ,
         "mobile" : "55749869" ,
         "location" : "Hong Kong" ,
         "github" : "garyl2203"
	},
	"WelcomeMessage" : "Love what you do, Do what you love" ,
	"skills" : [ 
	     'Photoshop' , 'Blender', 'WordPress' , 'CatiaV5' , 'Python' , 'R' , 
	     'AutoCAD'  , 'HTML/CSS' ],
     "bioPic" : "images/mefixed.jpg"
}


var education = {  
	"schools" : [
	{
	"name" :  "Intrinsys Engineering" ,
	"dates" : "2016"  ,
	"degree" : "Certificate of Completion" ,
	"location" : "Milton Keynes" ,
	"majors" : ["CatiaV5 Fundamentals"] ,
	"url" : "http://www.intrinsys.com/engineering"
    },
    {
	"name" :  "Welkin Systems Ltd" ,
	"dates" : "2015"  ,
	"degree" : "Diploma" ,
	"location" : "Hong Kong" ,
	"majors" : ["Computer Aided Design with Autodesk"] ,
	"url" : "http://www.welkin.com.hk/"
    },
    {
    "name" :  "The University of Edinburgh" ,
	"dates" : "2007-2011"  ,
	"degree" : "BSc Mathematics and Statistics" ,
	"location" : "Edinburgh" ,
	"majors" : ["R Statistical Programming" , " Linear Modelling"] ,
	"url" : "http://www.ed.ac.uk/"
    }
	],

    "onlineCourses" : [
    {
    "name" :  "Udacity" ,
	"dates" : "2016 - 2017"  ,
	"degree" : "Nanodegree" ,
	"location" : "Hong Kong" ,
	"majors" : ["Self-Driving Car Engineer"] ,
	"units" : ["Machine Learning" , "Computer Vision"] ,
	"url" : "https://www.udacity.com/classic"
    },
    {
	"name" :  "Udacity" ,
	"dates" : "2016"  ,
	"degree" : "Nanodegree" ,
	"location" : "Hong Kong" ,
	"majors" : ["Intro to Programming"] ,
	"units" : ["Python" , "HTML", "CSS" , "Javascript"] ,
	"url" : "https://www.udacity.com/classic"
    }
    ]
}




var work = {
	"companies" : [
	{
	"position" :  "Mathematics Instructor" ,
	"employer" :  "iThink Education" ,
	"dates" :  "2014 - current" ,
	"location" :  "Hong Kong" , 
	"url" : "http://www.ithink-education.com.hk/" ,
	"description" : 'I am currently teaching mathematics up to the IB, iGCSE level, ' +
	                'with students from the top local schools (DGS) and international ' +
	                'schools such as German Swiss International. ' 
    },
    {
	"position" :  "Teacher" ,
	"employer" :  "English for Asia" ,
	"dates" :  "2013" ,
	"location" :  "Hong Kong" ,
	"url" : "http://www.englishforasia.com/en/" ,
	"description" :  'Teach the Cambridge Movers curriculum to large classes of 28 ' +
	                 'students, as well as organizing and conducting classroom management.'
    },
    {
	"position" :  "Flow Data Analyst" ,
	"employer" :  "ADS Environmental Services" ,
	"dates" :  "2012 - 2013" ,
	"location" :  "Sydney"  ,
	"url" : "http://www.adsenv.com/" ,
	"description" :  'Work effectively with senior data analysts to identify data quality ' +
	                 'issues, performed daily data mining procedures to examine water flow, ' +
	                 'experienced with troubleshooting and maintenance of large datasets. ' 
    },
    {
	"position" :  "Data Auditor" ,
	"employer" :  "Mike Ritchie & Associates" ,
	"dates" :  "2013" ,
	"location" :  "Sydney"  ,
	"url" :  "http://www.mraconsulting.com.au/" ,
	"description" :  'Hands on experience in the recycling industry, collecting valuable data ' +
	                 'on types of waste produced by households, requiring a keen eye for detail. ' 
    },
    {
	"position" :  "Research Assistant" ,
	"employer" :  "Hong Kong University" ,
	"dates" :  "2012" ,
	"location" :  "Hong Kong"  ,
	"url" : "http://www.hku.hk/" ,
	"description" :  'Proofreading research articles and submission of ' +
	                 'medical articles, used excel to analyze data from short surveys and questionnaires. '
    },
    {
	"position" :  "Assistant Public Health Researcher" ,
	"employer" :  "Glasgow Centre for Population Health" ,
	"dates" :  "2010" ,
	"location" :  "Glasgow"  ,
	"url" : "http://www.gcph.co.uk/" ,
	"description" :  'Performed initial analyses of life expectancy and income inequality ' +
	                 'for the West of Scotland, compile reports of findings including ' +
	                 'statistical figures for other de-industrialised regions of Europe. ' 
	},
    ]

}

var projects = {
	"projects": [
	{
		"title" : "Project Silverbolt – Emergency Cargo Delivery Drone – Local Motors/Airbus" ,
		"dates" : "2016" ,
		"description" : 'The purpose of this project competition is to design a drone ' +
		  'that will deliver medical or emergency supplies to far or ' +
		  'remote regions of the planet where terrain is difficult. The design was created and rendered in Blender, ' +
		  'with the concept inspired by aircraft such as the Saab J21-R. I learned to work under strict ' +
		  'deadlines as well as receiving good, constructive criticism for future improvements. ' +
 		  'I further strengthened my experience in 3D modelling and design skills ' +
		  'as well as gaining other soft skills such as re-conceptualising, gathering valuble information ' +
		  'relating to the aerodynamics and engineering, being persistent and above all, having fun!' ,
         "images" : [
         "https://davidsonautomotivedotcom.files.wordpress.com/2015/05/structure_fuselage4.png" ,
         "https://davidsonautomotivedotcom.files.wordpress.com/2015/05/final-render2.png"
         ],
         "url" : "https://localmotors.com/"
	}
	]

}







bio.display = function() { 
 var formattedName = HTMLheaderName.replace("%data%", bio.Name);
 var formattedrole = HTMLheaderRole.replace("%data%", bio.role);
 var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
 
 var formattedmobile = HTMLmobile.replace("%data%", bio.ContactInfo.mobile);
 var formattedemail = HTMLemail.replace("%data%", bio.ContactInfo.email);
 var formattedgithub = HTMLgithub.replace("%data%", bio.ContactInfo.github);
 var formattedlocation = HTMLlocation.replace("%data%", bio.ContactInfo.location);
 var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.WelcomeMessage);
 

$("#header").prepend(formattedrole);
$("#header").prepend(formattedName);
$("#header").append(formattedbioPic);


$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

$("#header").append(formattedmessage);

};

bio.display();




bio.addskills = function(){
$("#header").append(HTMLskillsStart);

var i;

for ( i = 0; i < bio.skills.length; i++) {

	var formattedskill = HTMLskills.replace("%data%", bio.skills[i]);

	$("#skills").append(formattedskill);
}

};

bio.addskills();










work.display = function() {

var i;
//console.log(work.companies.length)

for ( i = 0; i < work.companies.length; i++)  {
$("#workExperience").append(HTMLworkStart);


var formattedempl = HTMLworkEmployer.replace("%data%", work.companies[i].employer).replace("#",  work.companies[i].url);
var formattedtitle = HTMLworkTitle.replace("%data%", work.companies[i].position);
var formatteddates = HTMLworkDates.replace("%data%", work.companies[i].dates);
var formattedworkcity = HTMLworkLocation.replace("%data%", work.companies[i].location);
var formattedworkdesc = HTMLworkDescription.replace("%data%", work.companies[i].description);

var formattedEmplTitle = formattedempl + formattedtitle

$(".work-entry:last").append(formattedEmplTitle);
$(".work-entry:last").append(formatteddates);  
$(".work-entry:last").append(formattedworkcity); 
$(".work-entry:last").append(formattedworkdesc); 


}
};

work.display();









projects.display = function() {

var i;
//console.log(work.companies.length)

for ( i = 0; i < projects.projects.length; i++)  {
$("#projects").append(HTMLprojectStart);


var formattedprojtitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#",  projects.projects[i].url);
var formattedprojdates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
var formattedprojdescr = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
var formattedprojimage = HTMLprojectImage.replace("%data%", projects.projects[i].images[0]);


$(".project-entry:last").append(formattedprojtitle);
$(".project-entry:last").append(formattedprojdates);
$(".project-entry:last").append(formattedprojdescr);
//$("#projects").append(formattedprojimage);

}
};

projects.display();











education.display = function() {

var i;

for ( i = 0; i < education.schools.length; i++)  {
$("#education").append(HTMLschoolStart);

var formattedEduName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#",  education.schools[i].url);
var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
var formattedschooldates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
var formattedstudycity = HTMLschoolLocation.replace("%data%", education.schools[i].location);
var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);

var fomrattedEdunameDegree = formattedEduName + formatteddegree


$(".education-entry:last").append(fomrattedEdunameDegree);
$(".education-entry:last").append(formattedschooldates);
$(".education-entry:last").append(formattedstudycity);
$(".education-entry:last").append(formattedmajor);

}
};

education.display();





$(".education-entry:last").append(HTMLonlineClasses);

education.display = function() {


var i;

for ( i = 0; i < education.onlineCourses.length; i++)  {


var formattedonlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].majors).replace("#",  education.onlineCourses[i].url);
var formattedOnlineEduName = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].name);
var formattedonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
var formattedonlineunits = HTMLschoolMajor.replace("%data%", education.onlineCourses[i].units);

var formattedEdunameOnlinetitle = formattedonlinetitle + formattedOnlineEduName

$(".education-entry:last").append(formattedEdunameOnlinetitle);
//$("#education").append(formattedOnlineEduName);
$(".education-entry:last").append(formattedonlinedates);
$(".education-entry:last").append(formattedonlineunits);

}
};

education.display();





function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+name[1];  
}


$("#main").append(internationalizeButton);



