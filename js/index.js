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
      description: 'Started Agile workflow using one week sprints for product development towards a MVP for a Proximity Based Ordering System (PBOS) on an 8- week project. I was included in user stories, product design, and new feature implementation. The technologies used were Node.js, Express.js, JQuery, WebSockets, AWS EC2 including a load balancer, Route 53 and SSL, Docker, Twitter API integration, Redis.js, React Native, and Git for version control. Selected 3rd party packages best fit for feature implementation in the native application for both android and iOS. I experienced a system architecture for a scalable application that used Docker containers for each of its processes to interact in production as well as maintained consistent development environments.'
    },
    {
      employer: 'Port City Brewing Company',
      title: ' Beer Guide & Brewery Representative',
      location: 'Alexandria, VA',
      dates: 'June 2015 - Present',
      description: 'Work in the tasting room and represent the 2015 Great American Beer Festival voted Best Small Craft Brewery in America delivering world class customer service, educating how Port City takes beer from grain to your glass.'
    },
    {
      employer: 'Neighborhood Restaurant Group',
      title: 'Bartender',
      location: 'Merrifield, VA',
      dates: 'January 2011 - June 2015',
      description: 'Worked as bartender of good beer and food.'
    },
    {
      employer: 'Aqueos',
      title: 'Commercial Diver / Tender',
      location: 'Lafayette, LA',
      dates: 'April 2009 - May 2011',
      description: 'Managed operations on deck to maintain and support any divers in water or in decompression. Responsible for full inventory of tools, gasses, and life support equipment.'
    },
    {
      employer: 'Hometown',
      title: 'Child',
      location: 'Port Orchard, WA',
      dates: 'May 1989 - March 2009',
      description: 'Lived'
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
* Initial JQuery functions to append info.
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

function displaySkills(skills) {
  skills.forEach(skill => {
    const skills = headerSkills.replace('mySkill', skill);
    $('#skills').append(skills);
  });
}

displaySkills(bio.skills);
