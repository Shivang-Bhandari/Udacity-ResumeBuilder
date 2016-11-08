/*
This is empty on purpose! Your code to build the resume will go here.
 */
var dataPlaceHolder = "%data%";

var work = {};
work.jobs = [
                {
                    "employer": "Walmart",
                    "title": "Sale Associate",
                    "location": "Huntington Beach, California",
                    "dates": "Feb 2008 - Nov 2008",
                    "description": "Assisted customers with puchases and product selections. Answered telephone inquries from customers regarding product availability. Restocked and reorganized products for next bussiness hours."},
                {
                    "employer": "Interthinx",
                    "title": "Quality Assurrance Automation Engineer",
                    "location": "Agoura Hills, California",
                    "dates": "Feb 2012 - Feb 2014",
                    "description": "Developed automated tests for web application and web services. Participated in general and off hour software release."},
                {
                    "employer": "First American",
                    "title": "Senior Quality Analyst",
                    "location": "Santa Ana, California",
                    "dates": "Feb 2014 - current",
                    "description": "Construct test plan for functional and non functional tests. Developed automated reusable tests for web application and web services. Participated in general and off hour software release. Helped in maintaining and improving internal automation framework. "}
            ];
work.display = function(){
     for(var index=0; index < work.jobs.length;index++){
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(".work-entry:last").append(formattedEmployerTitle);
                var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[index].dates);
                $(".work-entry:last").append(formattedWorkDate);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
                $(".work-entry:last").append(formattedWorkLocation);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
                $(".work-entry:last").append(formattedWorkDescription);
        }
};

var projects = {};
projects.projects = [
                 {
                    "title":"Google Map Images",
                    "dates": "February 2012 - June 2012",
                    "description": "Responsible for integrating back end data on to google map. Developed test for ASP.NET handler which return a set of JSON data from back end database.",
                    "images": ["images/googleImageProject-1.PNG","images/googleImageProject-2.PNG"]
                },
                {
                    "title":"OFAC module in FraudGuard",
                    "dates": "June 2012 - Septempber 2012",
                    "description": "The project was created to redesign the OFAC module in FraudGuard application. OFAC module is capable of verifying input name against Goverment OFAC list and return alerts to UI and service gateway. Responsible for design test cases and developed automated tests.",
                    "images": [
                            "images/ofacProject-1.png",
                            "images/ofacProject-2.png"
                    ]
                }


        ];

projects.display = function(){
    for(var index=0; index < projects.projects.length;index++){
                var myProjects = projects.projects[index];
                $("#projects").append(HTMLprojectStart);
                var formattedProjTitle = HTMLprojectTitle.replace("%data%", myProjects.title);
                $(".project-entry:last").append(formattedProjTitle);
                var formattedDate = HTMLprojectDates.replace("%data%", myProjects.dates);
                $(".project-entry:last").append(formattedDate);
                var formattedDesc = HTMLprojectDescription.replace("%data%", myProjects.description);
                $(".project-entry:last").append(formattedDesc);
                for(var imagesIndex=0; imagesIndex < myProjects.images.length;imagesIndex++){
                     var formattedImg = HTMLprojectImage.replace("%data%", myProjects.images[imagesIndex]);
                     $(".project-entry:last").append(formattedImg);
                }



        }

};

var bio = {};
bio.name = "James Le";
bio.role = "QA Automation Engineer";
bio.contacts = {
    "mobile": "7145529763",
    "email": "dohuul@gmail.com",
    "github": "myGithub",
    "twitter": "myTwitter",
    "location": "Santa Ana"
};
bio.welcomeMessage = "Hola! Welcome to my page!";
bio.skills = [
    "Delivering",
    "Dependable",
    "Honest",
    "Trustworthy"
];
bio.biopic = "images/me.jpg";
bio.display = function(){

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);

    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGit);

    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedLoc);

    var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedImg);

    var formattedWelMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelMessage);

        if(bio.skills.length > 0){
        $("#header").append(HTMLskillsStart);
        for(var index=0; index < bio.skills.length;index++){
            $("#skills").append(HTMLskills.replace(dataPlaceHolder,bio.skills[index]));
        }
    }
};


var education = {};
education.schools = [
    {
        "name": "UCI",
        "location": "Irvine",
        "degree": "Bachelor of Science",
        "url": "http://www.uci.edu",
        "majors": ["Computer Engineer"],
        "dates": "2008 - 2011"
    }
];

education.onlineCourses = [
    {
        "title":"Front End Developer",
        "school": "Udacity",
        "dates": "Sep 2016 - current",
        "url" : "http://www.udacity.com"
    }
];

education.display = function(){

    for(var schoolIndex=0; schoolIndex < education.schools.length;schoolIndex++){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolIndex].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedDegree);
        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
        $(".education-entry:last").append(formattedDate);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
        $(".education-entry:last").append(formattedLocation);

        for(var majorIndex=0; majorIndex < education.schools[schoolIndex].majors.length;majorIndex++){
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].majors[majorIndex]);
            $(".education-entry:last").append(formattedMajor);
        }

    }

         $("#education").append(HTMLonlineClasses);
         for(var onlineIndex=0; onlineIndex < education.onlineCourses.length;onlineIndex++){
                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineIndex].title);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineIndex].school);
                $(".education-entry:last").append(formattedTitle + formattedOnlineSchool);
                var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineIndex].dates);
                $(".education-entry:last").append(formattedOnlineDate);
                var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineIndex].url);
                 $(".education-entry:last").append(formattedOnlineUrl);
            }



};

var applyBootstrapGridSystem = function(){
    $("#main").toggleClass("container");
    $("#bioContacts").toggleClass("row");
    $("#bioImagesAndSkill").toggleClass("row");
    $("#header").toggleClass("row");
    $("#clear").toggleClass("row");
    $("#projects").toggleClass("row");
    $("#education").toggleClass("row");
    $("#mapDiv").toggleClass("row");
    $("#lets-connect").toggleClass("row");
    $("#workExperience").toggleClass("row");
    $(".work-entry").toggleClass("col-md-4");
    $("#let-connect-col").toggleClass("col-md-12");
     $(".project-entry").toggleClass("col-md-6");
     $("img").toggleClass("img-responsive");

};



bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
applyBootstrapGridSystem();