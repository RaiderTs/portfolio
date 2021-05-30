import barbershopImg from '../../img/myProjects/barbershop.jpg';
import filmotekaImg from '../../img/myProjects/filmoteka.jpg';
import webStudioImg from '../../img/myProjects/webStudio.jpg';
import clockImg from '../../img/myProjects/clock.jpg';
import imageFinder from '../../img/myProjects/imageFinder.jpg';
import moviesImg from '../../img/myProjects/movies.jpg';
import phonebookImg from '../../img/myProjects/phonebook.jpg';
import proTestImg from '../../img/myProjects/proTestImg.jpg';

export const ownProjects = [
  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://raiderts.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/RaiderTs/goit-markup-hw-08',
    preview: webStudioImg,
    info:
      'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  },
  {
    id: 'id-2',
    label: 'Timer',
    link: 'https://raiderts.github.io/goit-js-hw-11-timer/',
    repo: 'https://github.com/RaiderTs/goit-js-hw-11-timer',
    preview: clockImg,
    info: 'Timer to count down to a specified date.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-3',
    label: 'Image Finder',
    link: 'https://raiderts.github.io/goit-js-hw-13-image-finder/',
    repo: 'https://github.com/RaiderTs/goit-js-hw-13-image-finder',
    preview: imageFinder,
    info:
      'Keyword search image app. The public image search service Pixabay was used for HTTP requests.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Axios' },
    ],
  },
  {
    id: 'id-4',
    label: 'Movies',
    link: 'https://rts-movie.netlify.app/',
    repo: 'https://github.com/RaiderTs/goit-react-hw-04-movies',
    preview: moviesImg,
    info:
      'App for watching popular and searching films. The application uses themoviedb.org API.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'AJAX' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'Material-UI' },
      { id: 'id-7', name: 'Slugify' },
    ],
  },
  {
    id: 'id-5',
    label: 'Phonebook',
    link: 'https://rts-phonebook.netlify.app',
    repo: 'https://github.com/RaiderTs/goit-react-hw-08-phonebook',
    preview: phonebookImg,
    info:
      'Phonebook application with the ability to register users and work with private collections of contacts.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-4', name: 'Redux' },
      { id: 'id-5', name: 'AJAX' },
      { id: 'id-6', name: 'REST API' },
      { id: 'id-7', name: 'Axios' },
      { id: 'id-8', name: 'Material-UI' },
      { id: 'id-9', name: 'Framer Motion' },
    ],
  },
];

export const commandProjects = [
  {
    id: 'id-1',
    label: 'Pro Test',
    link: 'https://fin-proj-gr7.netlify.app/',
    repo: 'https://github.com/RaiderTs/goit21-22-final-proj-gr7-frontend',
    preview: proTestImg,
    info:
      'This app will help you find weak points in knowledge for a QA Engineer so that you can strengthen it.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'React.js' },
      { id: 'id-3', name: 'Axios' },
      { id: 'id-3', name: 'Styled components' },
      { id: 'id-3', name: 'Node.js' },
      { id: 'id-3', name: 'Mongoose' },
      { id: 'id-3', name: 'Express' },
      { id: 'id-3', name: 'Swagger' },
    ],
  },
  {
    id: 'id-2',
    label: 'BarberShop',
    link: 'https://kuysolov.github.io/final_project_group_6/',
    repo: 'https://github.com/RaiderTs/final_project_group_6',
    preview: barbershopImg,
    info:
      'Responsive web page layout for BarberShop - a hair salon for men in Kyiv.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'CSS3' },
      { id: 'id-3', name: 'JavaScript' },
    ],
  },
  {
    id: 'id-3',
    label: 'Filmoteka',
    repo: 'https://github.com/RaiderTs/goit-group_14-filmoteka',
    preview: filmotekaImg,
    info: 'Team project Filmoteka - help yourself with choosing a movie.',
    link: 'https://mykhailoiskra.github.io/goit-group_14-filmoteka/index.html',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Handlebars' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  },
];
