/*
* Information to Display using JQuery
*/
const bio = {
  name: 'Jared Edwards',
  role: 'Front End Developer',
  welcomeMessage: '“Do not overestimate the competition and underestimate yourself. You are better than you think.” Tim Ferriss',
  biopic: '/images/profile_pic_edited.jpg',
  contacts: {
    mobile: '(360) 271-9495',
    email: 'jredwards519@gmail.com',
    github: 'JaredEdwards',
    twitter: 'jre519',
    location: 'Arlington VA'
  },
  skills: [
    'JavaScript',
    ' HTML',
    ' CSS',
    ' React.js',
    ' Angular.js',
    ' Node.js',
    ' Ruby',
    ' jQuery',
    ' React Native',
    ' Ajax',
    ' Bootstrap',
    ' MySQL',
    ' MongoDB',
    ' PostgreSQL',
    ' Redis',
    ' Python',
    ' AWS',
    ' Git/GitHub',
    ' Docker'
  ]
};

const work = {
  jobs: [
    {
      employer: 'Bodhi Works',
      title: 'Front End Developer / Dev Ops',
      location: 'Falls Church, VA',
      dates: 'April 2017 - Present',
      url: 'http://www.bodhiworks.io',
      description: 'Started Agile workflow using one week sprints for product development towards a MVP for a Proximity Based Ordering System (PBOS) on an 8- week project. I was included in user stories, product design, and new feature implementation. The technologies used were Node.js, Express.js, JQuery, WebSockets, AWS EC2 including a load balancer, Route 53 and SSL, Docker, Twitter API integration, Redis.js, React Native, and Git for version control. Selected 3rd party packages best fit for feature implementation in the native application for both android and iOS. I experienced a system architecture for a scalable application that used Docker containers for each of its processes to interact in production as well as maintained consistent development environments.'
    },
    {
      employer: 'Port City Brewing Company',
      title: ' Beer Guide & Brewery Representative',
      location: 'Alexandria, VA',
      dates: 'June 2015 - Present',
      url: 'http://www.portcitybrewing.com',
      description: 'Work in the tasting room and represent the 2015 Great American Beer Festival voted Best Small Craft Brewery in America delivering world class customer service, educating how Port City takes beer from grain to your glass.'
    },
    {
      employer: 'Neighborhood Restaurant Group',
      title: 'Bartender',
      location: 'Merrifield, VA',
      dates: 'January 2011 - June 2015',
      url: 'http://www.neighborhoodrestaurantgroup.com',
      description: 'Worked as bartender of good beer and food.'
    },
    {
      employer: 'Aqueos',
      title: 'Commercial Diver / Tender',
      location: 'Lafayette, LA',
      dates: 'April 2009 - May 2011',
      url: 'http://www.aqueossubsea.com',
      description: 'Managed operations on deck to maintain and support any divers in water or in decompression. Responsible for full inventory of tools, gasses, and life support equipment.'
    },
    {
      employer: 'Hometown',
      title: 'Child',
      location: 'Port Orchard, WA',
      dates: 'May 1989 - March 2009',
      description: ' '
    }
  ]
};

const projects = {
  projects: [
    {
      title: 'Scrounge - Bodhi Works',
      dates: 'April 2017 - Present',
      url: 'http://www.scrounge.io',
      repository: 'This repository is private however I am happy to share code in person.',
      description: 'Started Agile workflow using one week sprints for product development towards a MVP for a Proximity Based Ordering System (PBOS) on an 8- week project. I was included in user stories, product design, and new feature implementation. The technologies used were Node.js, Express.js, JQuery, WebSockets, AWS EC2 including a load balancer, Route 53 and SSL, Docker, Twitter API integration, Redis.js, React Native, and Git for version control. Selected 3rd party packages best fit for feature implementation in the native application for both android and iOS. I experienced a system architecture for a scalable application that used Docker containers for each of its processes to interact in production as well as maintained consistent development environments.',
      images: [
        './images/scrounge/scrounge_web_home.png',
        './images/scrounge/scrounge_web_single.png',
        './images/scrounge/scrounge_mobile_landing.PNG',
        './images/scrounge/scrounge_mobile_single.PNG'
      ]
    },
    {
      title: 'Skip the Line  - GA Project',
      dates: '4/1/2017 - 4/7/2017',
      url: 'https://skip-the-line-6b9d1.firebaseapp.com/',
      repository: 'https://github.com/JaredEdwards/skip-the-line',
      description: 'This project was an opportunity for me to become familiar with React as a pre-cursor to the Scrounge Application. React was very lightly covered for two days but I found it interesting and wanted to dive deeper into the concepts and how it works inlcuding React Native. I spent most of the week teaching myself how React and Firebase worked together and really enjoyed learning Reacts core concepts. This project was only worked on for 7 days before presenting.',
      images: [
        './images/projectFour/p4_login.png',
        './images/projectFour/p4_entrees.png',
        './images/projectFour/p4_add_items.png'
      ]
    },
    {
      title: 'Mood Player  - GA Project',
      dates: '3/10/2017 - 3/16/2017',
      url: 'https://philocoder93.github.io/mood_player/#/moods/welcome',
      repository: 'https://github.com/Philocoder93/mood_player',
      description: `This project was a group project, we had to choose from ideas presented in the classroom and this was our approach to someone's web application idea that allowed you to add songs to a mood list of your choosing. I was responsible for setting up the Ruby on Rails API that made requests to Spotify and returned the URI to allow access to music for playing in the browser which was displayed using Angular.`,
      images: [
        './images/projectThree/p3_welcome.png',
        './images/projectThree/p3_all_lists.png',
        './images/projectThree/p3_single_list.png',
        './images/projectThree/p3_add_song.png'
      ]
    },
    {
      title: 'Idea Logger - GA Project',
      dates: '2/27/2017 - 3/2/2017',
      url: 'https://idea-logger.herokuapp.com/',
      repository: 'https://github.com/JaredEdwards/Idea-logger',
      description: `This project at General Assmembly was our first look at using Ruby and Ruby on Rails. This project was completed over the course of one week and is hosted on Heroku. It uses devise for authentication and has full crud functionality. It is a blog style site for people to post their ideas and recieve endorsements for them, think Kickstarter.`,
      images: [
        './images/projectTwo/p2_login.png',
        './images/projectTwo/p2_all_ideas.png',
        './images/projectTwo/p2_post_idea.png',
        './images/projectTwo/p2_view_idea.png'
      ]
    }
  ]
};

const education = {
  schools: [
    {
      name: 'General Assembly ',
      location: 'Washington D.C.',
      degree: 'Certificate',
      dates: 'January 2017 - April 2017',
      url: 'http://www.generalassemb.ly',
      majors: ['Web Development Immersive']
    },
    {
      name: 'George Mason University ',
      location: 'Fairfax, VA',
      degree: 'Bachelor of Science (incomplete)',
      dates: 'August 2015 - December 2016',
      url: 'http://www.gmu.edu',
      majors: ['Applied Information Technology - Database & Programming']
    },
    {
      name: 'Northern Virginia Community College ',
      location: 'Annandale, VA',
      degree: 'Associate of Science',
      dates: 'August 2012 - May 2015',
      url: 'http://www.nvcc.edu',
      majors: ['Information Technology']
    }
  ],
  onlineCourses: [
    {
      title: 'Introduction to Programming Nanodegree',
      school: 'Udacity',
      dates: 'September 2016 - October 2016',
      url: 'http://www.udacity.com'
    }
  ]
};

/*
* Structure for appending information
*/
const headerName = `<h1 id='headerName'>myName</h1><br />`;
const headerRole = `<span id='headerRole'>myRole</span><hr>`;
const contactMobile =
  '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">myMobile</span></li>';
const contactEmail =
  '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">myEmail</span></li>';
const contactTwitter =
  '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">myTwitter</span></li>';
const contactGithub =
  '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">myGithub</span></li>';
const contactLocation =
  '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">myLocation</span></li>';
const headerBioPic = '<img src="myPic" class="biopic">';
const headerWelcomeMsg = '<span class="welcome-message">myMsg</span>';
const headerSkillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
const headerSkills = '<li class="flex-item"><span class="white-text">mySkill</span></li>';

/*
* Append work section to page
*/
const workStart = '<div class="work-entry"></div>';
const workEmployer = '<a href="#">employerName';
const workTitle = ' - jobTitle</a>';
const workDates = '<div class="date-text">datesEmployed</div>';
const workLocation = '<div class="location-text">employerLocation</div>';
const workDescription = '<p><br>jobDescription</p>';

/*
* Append projects section to page
*/
const projectStart = '<div class="project-entry"></div>';
const projectTitle = '<a href="#">projTitle</a>';
const projectRepository = '<a href="#">projRepository</a>';
const projectDates = '<div class="date-text">projDates</div>';
const projectDescription = '<p><br>projDesc</p>';
const projectImage = `<img class='project-images' src="projImage" style='width: 180px; height: 180px;'>`;

/*
* Append formal education section to page
*/
const schoolStart = '<div class="education-entry"></div>';
const schoolName = '<a href="#">name';
const schoolDegree = ' -- degree</a>';
const schoolDates = '<div class="date-text">dates</div>';
const schoolLocation = '<div class="location-text">eduLocation</div>';
const schoolMajor = '<em><br>Major: myMajor</em>';

/*
* Append online education section to page inside education section
*/
const onlineClasses = '<h3>Online Classes</h3>';
const onlineTitle = '<a href="#">title';
const onlineSchool = ' - school</a>';
const onlineDates = '<div class="date-text">dates</div>';
const onlineURL = '<br><a href="#">url</a>';

/*
* add google map
*/
const googleMap = '<div id="map"></div>';

/*
*
* Initial JQuery functions to append info.
*
*/

// header section

const name = headerName.replace('myName', bio.name);
const role = headerRole.replace('myRole', bio.role);
const mobile = contactMobile.replace('myMobile', bio.contacts.mobile);
const email = contactEmail.replace('myEmail', bio.contacts.email);
const twitter = contactTwitter.replace('myTwitter', bio.contacts.twitter);
const bitbucket = contactGithub.replace('myGithub', bio.contacts.github);
const myLocation = contactLocation.replace('myLocation', bio.contacts.location);
const pic = headerBioPic.replace('myPic', './images/profile_pic_edited.jpg');
const welcome = headerWelcomeMsg.replace('myMsg', bio.welcomeMessage);
const skillsStart = headerSkillsStart;

$('#header').prepend(role);
$('#header').prepend(name);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(twitter);
$('#topContacts').append(bitbucket);
$('#topContacts').append(myLocation);
$('#restContactInfo').append(pic);
$('#restContactInfo').append(welcome);
$('#restContactInfo').append(skillsStart);
displaySkills(bio.skills);
displayWork(work.jobs);
displayProjects(projects.projects);
displayEducation(education.schools);
displayOnlineCourses(education.onlineCourses);
// $('#mapDiv').append(googleMap);

/*
* function to display skills inside the header
*/
function displaySkills(skills) {
  // iterate over the skills array and append each skill inside the header
  skills.forEach(skill => {
    const skills = headerSkills.replace('mySkill', skill);
    $('#skills').append(skills);
  });
}

/*
* function to display work experience inside respective section
*/
function displayWork(jobs) {
  jobs.forEach(job => {
    //create new div for work experience
    $('#workExperience').append(workStart);

    //concatenate employer and title and append
    const employer = workEmployer.replace('employerName', job.employer);
    const title = workTitle.replace('jobTitle', job.title);
    let employerTitle = employer + title;
    employerTitle = employerTitle.replace('#', job.url);

    //append each new iteration to the :last child
    $('.work-entry:last').append(employerTitle);

    //get the date from the object and append it to the current job
    const dates = workDates.replace('datesEmployed', job.dates);
    $('.work-entry:last').append(dates);

    //get the location of the employer and append it to the current job
    const location = workLocation.replace('employerLocation', job.location);
    $('.work-entry:last').append(location);

    //get the description of the job and append it to the current job
    const description = workDescription.replace('jobDescription', job.description);
    $('.work-entry:last').append(description);
  });
}

/*
* function to display projects inside respective section
*/
function displayProjects(projects) {
  //append the project-entry element to resume to allow appending of individual projects
  $('#projects').append(projectStart);

  // loop over all projects in the projects array
  projects.forEach(project => {
    // append the title to the projects element
    let title = projectTitle.replace('projTitle', project.title);
    title = title.replace('#', project.url);
    $('.project-entry:last').append(title);

    //append repository link in projects element
    let repo = projectRepository.replace('projRepository', project.repository);
    repo = repo.replace('#', project.repository);
    $('.project-entry:last').append(repo);

    // append the dates the project was worked on
    const dates = projectDates.replace('projDates', project.dates);
    $('.project-entry:last').append(dates);

    // append project description
    const description = projectDescription.replace('projDesc', project.description);
    $('.project-entry:last').append(description);

    // append the project images
    project.images.forEach(image => {
      let singleImage = projectImage.replace('projImage', image);
      $('.project-entry:last').append(singleImage);
    });
  });
}

/*
* A function to iterate over education array and display information in respective section
*/
function displayEducation(schools) {
  // append all education to the education div
  $('#education').append(schoolStart);

  education.schools.forEach(school => {
    // for each school combine the name and degree to create an a tag link
    const nameAndDegree = schoolName.replace('name', school.name) + schoolDegree.replace('degree', school.degree);

    // replace the text with the dates attended
    const dates = schoolDates.replace('dates', school.dates);
    // replace the location with my location information
    const location = schoolLocation.replace('eduLocation', school.location);
    // replace major with my major information
    const major = schoolMajor.replace('myMajor', school.majors);

    // append all the created variables to the education section
    $('.education-entry:last').append(nameAndDegree);
    $('.education-entry:last').append(dates);
    $('.education-entry:last').append(location);
    $('.education-entry:last').append(major);
  });
}

/*
* A function to iterate over education array and display information in respective section
*/
function displayOnlineCourses(courses) {
  $('.education-entry:last').append(onlineClasses);

  education.onlineCourses.forEach(course => {
    let titleAndSchool = onlineTitle.replace('#', course.url);
    // onlineTitle.attr('href', course.url);

    titleAndSchool = onlineTitle.replace('title', course.title) + onlineSchool.replace('school', course.school);
    const dates = onlineDates.replace('dates', course.dates);
    const url = onlineURL.replace('url', course.url);

    $('.education-entry:last').append(titleAndSchool);
    $('.education-entry:last').append(dates);
    $('.education-entry:last').append(url);
  });
}
