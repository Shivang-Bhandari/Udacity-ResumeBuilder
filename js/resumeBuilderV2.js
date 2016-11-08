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

var octopus = function() {
    init: function() {
            workView.init();
    },
    getWork: function() {
        return work;
    }
};

var workView = function() {

    init: function() {
        this.work = octopus.getWork();
        this.HTMLworkStart = '<div class="work-entry"></div>';
        this.HTMLworkEmployer = '<a href="#">%data%';
        this.HTMLworkTitle = ' - %data%</a>';
        this.HTMLworkDates = '<div class="date-text">%data%</div>';
        this.HTMLworkLocation = '<div class="location-text">%data%</div>';
        this.HTMLworkDescription = '<p><br>%data%</p>';
        this.workEntryLastSelector = ".work-entry:last";
        this.render();
    }
    render: function() {
          var jobs = this.work.jobs;
          for(var index=0; index < jobs.length;index++){
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs[index].employer);
                var formattedTitle = HTMLworkTitle.replace("%data%", jobs[index].title);
                var formattedEmployerTitle = formattedEmployer + formattedTitle;
                $(workEntryLastSelector).append(formattedEmployerTitle);
                var formattedWorkDate = HTMLworkDates.replace("%data%", jobs[index].dates);
                $(workEntryLastSelector).append(formattedWorkDate);
                var formattedWorkLocation = HTMLworkLocation.replace("%data%", jobs[index].location);
                $(workEntryLastSelector).append(formattedWorkLocation);
                var formattedWorkDescription = HTMLworkDescription.replace("%data%", jobs[index].description);
                $(workEntryLastSelector).append(formattedWorkDescription);
        }
    }
}