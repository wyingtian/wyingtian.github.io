/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio = {
	"name" : "Yingtian Wang",
	"role" : "Web developer",
	"contacts" : 
	{
		"email": "wyingtian@gmail.com",
		"mobile": "917-767-8887",
		"github": "www.github.com",
		"twitter": "@ying",
		"location": "Boston",
	},
	"bio_pic":"images/fry.jpg",
	"welcomMessage":"Welcome to my resume page",
	"skills":["HTML/CSS","JavaScript","C","Java","Bash"],
};

var projects = {
	"projects" :[
		{
			"title" : "Smart Home System",
			"dates" : "2015",
			"description" : "Design a smart home system to model, \
							control and secure IOT devices. \
							Producing intensive design document with UML diagrams.",
			"images" : ["http://placehold.it/350x150" ]
		},
		{
			"title" : "Student Grade Management System",
			"dates" : "2010",
			"description" : "Using C language develop a student management system to record \
							 and update students grade for Central South University.",
			"images" : ["http://placehold.it/350x150" ]
		}
	]


};
var work = {
	"jobs": [
		{
			"employer": "Central South University",
			"title": "Student Researcher",
			"dates":"September 2012 - January 2013",
			"location":"Shenzhen",
			"description": "Chips Game, Worked in group to implement a machine \
							player for the Network game by Java. \
							We designed the interfaces and modules from scratch  \
							 and used alpha-beta pruning and depth-first search to\
							find best possible winning moves."
		},{
			"employer": "Panucci's Pizaa",
			"location": "San Jose",
			"title": "IT Engineer",
			"dates": "October, 2009 - September, 2011",
			"description": "Installing hardware and software systems;Maintaining or repairing equipment \
							Troubleshooting a variety of computer issues; Configuring network switches and routers \
							Offering technical support on-site or via phone or email"
						
		}
	]		

};

var education = {
	"school" : [
		{
			"name":"Central South University",
			"location":"Changsha",
			"date":"2009",
			"major":"Electrical Engineering",
			"degree":"Master of Engineering",
			"url":"www.csu.edu.cn"
		},{
			"name":"Harvard extension school",
			"location":"Boston",
			"major":"Software Engineering",
			"date": "2014",
			"degree":"Master of Liberal Arts",
			"url":"www.harvard.edu"
		}
	],
	"onlineCourses":[
		{
			"title":"Front end web developer Nano degree",
			"school":"udacity",
			"dates":"2015",
			"url":"http://www.udacity.com"
		}
	]
};

			

		
bio.display = function(){
	var formattedTMLheaderRole = HTMLheaderRole.replace('%data%',bio.role);
	$("#header").prepend(formattedTMLheaderRole);
	
	var formattedHTMLheaderName = HTMLheaderName.replace('%data%',bio.name);
	$("#header").prepend(formattedHTMLheaderName);

	var formattedBioMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	$("#topContacts").append(formattedBioMobile);
	$("#footerContacts").append(formattedBioMobile);

	var formattedBioEmail = HTMLemail.replace("%data%",bio.contacts.email);
	$("#topContacts").append(formattedBioEmail);
	$("#footerContacts").append(formattedBioEmail);

	var formattedBioGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	$("#topContacts").append(formattedBioGithub);
	$("#footerContacts").append(formattedBioGithub);

	var formattedBioLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedBioLocation);
	$("#footerContacts").append(formattedBioLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%",bio.bio_pic);
	$("#header").append(formattedBioPic);

	var formattedWlcomMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomMessage);
	$("#header").append(formattedWlcomMsg);

	// if skills array not empty, add each skills
	if(bio.skills.length !== 0){
		$("#header").append(HTMLskillsStart);
		for (i = 0 ; i < bio.skills.length ; i++)
		$("#skills-h3").append(HTMLskills.replace('%data%',bio.skills[i]));
	}
}

// Functio to display work object
work.display = function(){
		// for - in loop iterates jobs in work object and append 
		for (entry in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[entry].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[entry].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		
		var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[entry].dates);
		$(".work-entry:last").append(formattedWorkDates);
		
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[entry].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

// Functio to display projects object
projects.display = function(){
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);	
	}	
	
	if (projects.projects[project].images.length > 0){
		for (image in projects.projects[project].images){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
			$(".project-entry").append(formattedImage);
		}
	}
}



// Functio to display education object
education.display = function(){
	// display schools
	for (edu in education.school){
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.school[edu].name);
		//$(".education-entry:last").append(formattedTitle);

		var formattedDegree = HTMLschoolDegree.replace("%data%",education.school[edu].degree);
		//$(".education-entry:last").append(formattedDegree);	

		var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.school[edu].date);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.school[edu].major);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.school[edu].location);
		$(".education-entry:last").append(formattedSchoolLocation);
	}	
	// display onlineCourses
	for (online in education.onlineCourses){
		$('#education').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title);
		//$(".education-entry:last").append(formattedTitle);

		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school);

		var formatttedOnlineTitleSchool=formattedOnlineTitle+formattedOnlineSchool;
		$(".online-entry:last").append(formatttedOnlineTitleSchool);


		var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates);
		$(".online-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[online].url);
		$(".online-entry:last").append(formattedOnlineURL);
	}
}

//call functions
bio.display();
work.display();
projects.display();
education.display();

//add map component
$("#mapDiv").append(googleMap);




