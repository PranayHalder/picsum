<div align="center">

<h3 align="center">Picsum</h3>

  <p align="center">
    An Image Downloader Website
    <br /> 
    <br />
    <br />
  </p>
</div>

<details>
  <summary>Tech Stack</summary>
  <ol>
    <li><a href="https://reactjs.org/docs/getting-started.html">React Js</a></li>
    <li><a href="https://tailwindcss.com/docs/installation">Tailwind Css</a></li>
    <li><a href="https://babeljs.io](https://babeljs.io/docs/en/">Babel Js</a></li>
    <li><a href="https://www.php.net/docs.php">PHP</a></li>
    <li><a href="https://dev.mysql.com/doc/">MySql</a></li>
  </ol>
</details>

## Getting Started

Follow below steps to run this project in your local machine

### Prerequisites

Download and install this softwares to run this project
* npm
* xampp / mamp or any local server that supports php@8.0
* composer

### Installation
1. Clone the repo

   ```sh
   git clone git@github.com:PranayHalder/picsum.git
   ```
   
2. Create .env file inside your picsum folder and add these lines

   ```sh
   REACT_APP_GOOGLE_OAUTH_API_KEY=
   REACT_APP_LOCATIONIQ_API_KEY=
   ```

3. Get Api Key From <a href="https://developers.google.com/identity/protocols/oauth2">Google OAUTH</a> and paste it here

   ```sh
   REACT_APP_GOOGLE_OAUTH_API_KEY= //Paste the API KEY
   
   ```
4. Get Api Key From <a href="https://locationiq.com">LocationIQ</a> and paste it here

   ```sh
   REACT_APP_LOCATIONIQ_API_KEY= //Paste the API KEY
   ```

   
5. Go inside the picsum folder and run

   ```sh
   npm install
   ```
6. Copy the api folder and paste inside you local server's htdocs/www folder and run

   ```sh
   composer install
   ```
7. Start your local server
   
8. Create a database **picsum** inside phpmyadmin 

9. Import the sql file(inside the database folder) into your database in phpmyadmin 

   ```sh
   picsum.sql
   ```

10. Now run this command inside picsum folder to start the project 

    ```sh
    npm start
    ```
 
 
 ## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature`)
3. Commit your Changes (`git commit -m 'Added some Feature'`)
4. Push to the Branch (`git push origin feature`)
5. Open a Pull Request

