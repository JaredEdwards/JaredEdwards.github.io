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

const headerName = `<h1 id='headerName'>name</h1><br />`;
const headerRole = `<span id='headerRole'>role</span><hr>`;

/*
* Initial JQuery functions to append info.
*/

// header
const name = headerName.replace('name', bio.name);
const role = headerRole.replace('role', bio.role);
$('#header').prepend(role);
$('#header').prepend(name);
