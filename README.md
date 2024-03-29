
<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/kaiorosa1/exercise-tracker-api">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Exercise Tracker API</h3>

  <p align="center">
    A project based on the exercise tracker from FCC
    <br />
    <a href="https://github.com/kaiorosa1/exercise-tracker-api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/kaiorosa1/exercise-tracker-api">View Demo</a>
    ·
    <a href="https://github.com/kaiorosa1/exercise-tracker-api/issues">Report Bug</a>
    ·
    <a href="https://github.com/kaiorosa1/exercise-tracker-api/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a simple CRUD project for users to log their exercises.

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->


<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p> -->



### Built With

* [![Node][Node.js]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

If you want to run this project locally you need to have Node.js (At least 14.x) installed in your machine. 

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kaiorosa1/exercise-tracker-api.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Run the project
   ```sh
   yarn dev
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In this project you will be able to create a user and then log their
exercises

To create a user you send a POST to /users with the following payload as an example: 

```sh
{
	"name": "John Smith",
	"email": "johnsmith@email.com",
	"password": "senhanaosalvaassim"
}
```

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Create Users
- [ ] Create Categories
- [ ] Create Exercises


See the [open issues](https://github.com/kaiorosa1/exercise-tracker-api/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Kaio Rosa - [@Kaio_Rosa](https://twitter.com/Kaio_Rosa) - kaiosrosa@gmail.com

Project Link: [https://github.com/kaiorosa1/exercise-tracker-api](https://github.com/kaiorosa1/exercise-tracker-api)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/kaiorosa1/exercise-tracker-api.svg?style=for-the-badge
[contributors-url]: https://github.com/kaiorosa1/exercise-tracker-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/kaiorosa1/exercise-tracker-api.svg?style=for-the-badge
[forks-url]: https://github.com/kaiorosa1/exercise-tracker-api/network/members
[stars-shield]: https://img.shields.io/github/stars/kaiorosa1/exercise-tracker-api.svg?style=for-the-badge
[stars-url]: https://github.com/kaiorosa1/exercise-tracker-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/kaiorosa1/exercise-tracker-api.svg?style=for-the-badge
[issues-url]: https://github.com/kaiorosa1/exercise-tracker-api/issues
[license-shield]: https://img.shields.io/github/license/kaiorosa1/exercise-tracker-api.svg?style=for-the-badge
[license-url]: https://github.com/kaiorosa1/exercise-tracker-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/kaio-rosa
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
