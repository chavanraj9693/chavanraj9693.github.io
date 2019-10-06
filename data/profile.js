const profileData = {
  title: 'Résumé',
  name: 'Vipin Yadav',
  sub_title: 'Software Engineer',
  logoURL: '/assets/images/dp.jpg',
  about: {
    intro: `I am a innovative and passionate developer with a primary interest in <strong>JavaScript</strong>.
        Experienced in designing and implementing sophisticated UI/UX with Progressive Web Application standards and application life-cycle management.`,
    contact: {
      email: 'imvpn22@gmail.com',
      phone: '+91-9919716378',
      address: 'Bengaluru, Karnataka 560035'
    }
  },
  links: [
    { title: 'Portfolio', src: 'https://imvpn22.github.io/' },
    { title: 'Github', src: 'https://github.com/imvpn22' },
    { title: 'HackerEarth', src: 'https://www.hackerearth.com/@imvpn22' },
    { title: 'LinkedIn', src: 'https://www.linkedin.com/in/imvpn22' },
    { title: 'Twitter', src: 'https://twitter.com/imvpn22' }
  ],
  education: [
    {
      alma: 'FET, GKV, Haridwar',
      duration: '2014 - 2018',
      std: 'Bachelor of Technology (Computer Science & Engineering)',
      score: '71%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '90%'
    },
    {
      alma: 'Jwala Devi SVMIC, Prayagraj',
      duration: '2011 - 2013',
      std: 'Class XI - XII (PCM)',
      score: '73%'
    }
  ],
  skills: [
    {
      graph: 'false',
      category: 'Programming Languages',
      topics: ['C', 'C++', 'JavaScript']
    },
    {
      graph: 'false',
      category: 'Databases',
      topics: ['MongoDB', 'PostgreSQL', 'Oracle PL/SQL']
    },
    {
      graph: 'false',
      category: 'Frameworks / Libraries',
      topics: ['NodeJS', 'Angular', 'ReactJS']
    }
  ],
  projects: [
    {
      title: 'Restaurant Review',
      duration: 'June - Nov 2018',
      link: 'https://github.com/imvpn22/restaurant-review-pwa',
      desc: `Udacity's 'Mobile Web Specialist Restaurant Reviews App' Project for  MWS Nanodegree`
    },
    {
      title: 'WhiteBoard',
      duration: 'Jul - Aug 2017',
      link: 'https://github.com/imvpn22/whiteboard',
      desc: `A simple web-app for collaborative brainstorming sessions. 
      The app includes a real-time messaging and sketching platform for collaboration with Peers. 
      Developed using Node.js, Express, Socket.io and vanilla JS.`
    },
    {
      title: 'Jnanagni 2017',
      duration: 'Jan - Mar 2017',
      link: 'https://github.com/methusael13/jnanagni17',
      desc: `Official website for Jnanagni 2017 - FET, GKV's Annual Techfest`
    }
  ],
  experiences: [
    {
      desc: `<strong>Project Engineer</strong> at  <a target='_blank' href='https://www.wipro.com/'> <strong> Wipro </strong> </a>`,
      date: 'Aug 2018 - Present',
      details: [
        'Working on a project with a tech-stack of Angular, Angular-Material and NodeJS-Express.',
        'Responsible for implementing reusable UI/UX components and interacting with backend service.'
      ]
    },
    {
      desc: `<strong>Full-Stack Developer intern</strong> at  <a target='_blank' href='https://www.venuemonk.com/'> <strong> Venuemonk </strong> </a> (<a target='_blank' href='https://drive.google.com/open?id=1ch_9x9jCp_TJwKY43FG-pCr_zV9H2iun'> https://goo.gl/Uz1gaf</a>)`,
      date: 'Jan - Apr 2018',
      details: [
        'Responsible for developing a web-application <strong>Venue OnBoarding</strong> from design to implementation.',
        'Work included developing ReactJS-Redux frontend and integrating it with NodeJS-ExpressJS-MongoDB backend.'
      ]
    },
    {
      desc: `<strong>Product development intern</strong> at <a target='_blank' href='https://hasura.io/'> <strong> Hasura </strong> </a> (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7UmlrUDlsMkVwajg/view?usp=sharing'> https://goo.gl/8V3jBy</a>)`,
      date: 'May - Aug 2017',
      details: [
        'Responsible for developing web-application using Hasura platform APIs.',
        'Work included designing and implementing frontend application in HTML5-CSS3-JavaScript.'
      ]
    }
  ],
  events: [
    {
      title: 'certifications',
      body: [
        {
          desc: `<strong>Mobile Web Specialist</strong>, a Nanodegree provided by <a target='_blank' href='https://in.udacity.com//'> <strong>Udacity</strong>  (<a target='_blank' href='https://confirm.udacity.com/RLMHXAWZ'> https://goo.gl/RGRzVn</a>)`,
          date: 'May - Nov 2018'
        },
        {
          desc: `<a target='_blank' href='https://www.imad.tech'><strong>IMAD</strong></a>, a MOOC provided by <a target='_blank' href='https://onlinecourses.nptel.ac.in/'> <strong>NPTEL</strong> </a> and <a target='_blank' href='https://hasura.io/'> <strong> Hasura</strong> </a> (<a target='_blank' href='http://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'> https://goo.gl/X3HEdR</a>)`,
          date: 'Jan - Mar 2017'
        },
        {
          desc: `<strong>ETCS</strong>, a Summer Training provided by <a href='http://www.mnnit.ac.in/' target='_blank'> <strong>MNNIT </strong> Allahabad</a> (<a target='_blank' href='https://drive.google.com/file/d/0B6uOcoHYLgJ7WEVmdlJDcWVZcEE/view?usp=sharing'>Certificate link</a>)`,
          date: 'Jun - July 2016'
        }
      ]
    },
    {
      title: 'Extracurricular Activities',
      body: [
        {
          desc: `Event Organizer in <strong>Jnanagni'17</strong> (Annual Techno-Cultural fest of FET, GKV)`,
          date: 'Mar 2017'
        },
        {
          desc:
            'Conducted a workshop for 1<sup>st</sup> and 2<sup>nd</sup> year students on <strong>Linux Essentials</strong>',
          date: 'Oct 2016'
        }
      ]
    }
  ]
};
