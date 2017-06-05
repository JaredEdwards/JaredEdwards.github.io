/*
* Information to Display using JQuery
*/
const bio = {
  name: 'Jared Edwards',
  role: 'Front End Developer',
  welcomeMessage: '“Do not overestimate the competition and underestimate yourself. You are better than you think.” Tim Ferriss',
  biopic: 'need image here',
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

$('#header').prepend(role);
$('#header').prepend(name);
$('#topContacts').append(mobile);
$('#topContacts').append(email);
$('#topContacts').append(twitter);
$('#topContacts').append(bitbucket);
$('#topContacts').append(myLocation);
