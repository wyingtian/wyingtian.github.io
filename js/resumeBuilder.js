var bio = {
    'name': 'Yingtian Wang',
    'role': 'Web developer',
    'contacts': {
        'email': 'wyingtian@gmail.com',
        'mobile': '917-767-8887',
        'github': 'www.github.com',
        'twitter': '@ying',
        'location': 'Boston',
    },
    'biopic': 'images/fry.jpg',
    'welcomMessage': 'Welcome to my resume page',
    'skills': ['HTML/CSS', 'JavaScript', 'C', 'Java', 'Bash'],
};

var projects = {
    'projects': [{
        'title': 'Smart Home System',
        'dates': '2015',
        'description': 'Design a smart home system to model, control and secure IOT devices. Producing intensive design document with UML diagrams.',
        'images': ['http://placehold.it/350x150']
    }, {
        'title': 'Student Grade Management System',
        'dates': '2010',
        'description': 'Using C language develop a student management system to record  and update students grade for Central South University.',
        'images': ['http://placehold.it/350x150']
    }]


};
var work = {
    'jobs': [{
        'employer': 'Central South University',
        'title': 'Student Researcher',
        'dates': 'September 2012 - January 2013',
        'location': 'Shenzhen',
        'description': 'Chips Game, Worked in group to implement a machine player for the Network game by Java. We designed the interfaces and modules from scratch and used alpha-beta pruning and depth-first search to find best possible winning moves.'
    }, {
        'employer': 'Panucci Pizaa',
        'location': 'San Jose',
        'title': 'IT Engineer',
        'dates': 'October, 2009 - September, 2011',
        'description': 'Installing hardware and software systems;Maintaining or repairing equipment; Troubleshooting a variety of computer issues; Configuring network switches and routers; Offering technical support on-site or via phone or email'

    }]

};

var education = {
    'schools': [{
        'name': 'Central South University',
        'location': 'Changsha',
        'dates': '2009',
        'majors': 'Electrical Engineering',
        'degree': 'Master of Engineering',
        'url': 'www.csu.edu.cn'
    }, {
        'name': 'Harvard extension school',
        'location': 'Boston',
        'majors': 'Software Engineering',
        'dates': '2014',
        'degree': 'Master of Liberal Arts',
        'url': 'www.harvard.edu'
    }],
    'onlineCourses': [{
        'title': 'Front end web developer Nano degree',
        'school': 'udacity',
        'date': '2015',
        'url': 'http://www.udacity.com'
    }]
};




bio.display = function() {
    var formattedTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedTMLheaderRole);

    var formattedHTMLheaderName = HTMLheaderName.replace('%data%', bio.name);
    $('#header').prepend(formattedHTMLheaderName);

    var formattedBioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $('#topContacts').append(formattedBioMobile);
    $('#footerContacts').append(formattedBioMobile);

    var formattedBioEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $('#topContacts').append(formattedBioEmail);
    $('#footerContacts').append(formattedBioEmail);

    var formattedBioGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    $('#topContacts').append(formattedBioGithub);
    $('#footerContacts').append(formattedBioGithub);

    var formattedBioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $('#topContacts').append(formattedBioLocation);
    $('#footerContacts').append(formattedBioLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
    $('#header').append(formattedBioPic);

    var formattedWlcomMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomMessage);
    $('#header').append(formattedWlcomMsg);

    // if skills array not empty, add each skills
    if (bio.skills.length !== 0) {
        $('#header').append(HTMLskillsStart);
        var skillLen = bio.skills.length;
        for (i = 0; i < skillLen; i++)
            $('#skills-h3').append(HTMLskills.replace('%data%', bio.skills[i]));
    }
};

// Functio to display work object
work.display = function() {
    // for  loop iterates jobs in work object and append
    var workLen = work.jobs.length;
    for (i = 0; i < workLen; i++) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $('.work-entry:last').append(formattedEmployerTitle);

        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
        $('.work-entry:last').append(formattedWorkDates);

        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
        $('.work-entry:last').append(formattedDescription);

    }
};

// Functio to display projects object
projects.display = function() {
    var projectLen = projects.projects.length;
    for (i = 0; i < projectLen; i++) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
        $('.project-entry:last').append(formattedDescription);


        if (projects.projects[i].images.length > 0) {
            var projImgLen = projects.projects[i].images.length;
            for (j = 0; j < projImgLen; j++) {
                var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
                $('.project-entry:last').append(formattedImage);
            }
        }
    }
};



// Functio to display education object
education.display = function() {
    // display schools
    var schoolLen = education.schools.length;
    for (i = 0; i < schoolLen; i++) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
        //$('.education-entry:last').append(formattedTitle);

        var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
        //$('.education-entry:last').append(formattedDegree);

        var formattedSchoolNameDegree = formattedSchoolName + formattedDegree;
        $('.education-entry:last').append(formattedSchoolNameDegree);

        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
        $('.education-entry:last').append(formattedSchoolDates);

        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
        $('.education-entry:last').append(formattedSchoolMajor);

        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
        $('.education-entry:last').append(formattedSchoolLocation);
    }
    // display onlineCourses
    var onlineLen = education.onlineCourses.length;
    for (j = 0; j < onlineLen; j++) {
        $('#education').append(HTMLonlineClasses);

        var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[j].title);
        //$('.education-entry:last').append(formattedTitle);

        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[j].school);

        var formatttedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
        $('.online-entry:last').append(formatttedOnlineTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[j].date);
        $('.online-entry:last').append(formattedOnlineDates);

        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[j].url);
        $('.online-entry:last').append(formattedOnlineURL);
    }
};

//call functions
bio.display();
work.display();
projects.display();
education.display();

//add map component
$('#mapDiv').append(googleMap);