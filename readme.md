<h2 align = "center">The Blog Man</h2>

<p>A Blog Application built using React JS and Node JS that helps you to share your thoughts,experience with everyone else around the world! </p>

<h3 align = "center">Features</h3>

<ul>
  <li>Secure User Authentication using JSON Web Tokens, protected routes so that no non logged user can visit protected routes</li>
  <li>Logged In Users Add New Blogs in markdown format with an option to add a cover photgraph along with a preview option</li>
  <li>Logged In Users can comment or react on existing Blogs</li>
  <li>Logged In Users can edit their profiles as well add a profile picture on the Profile Page</li>
  <li>Guest Users can View existings blogs but can comment or add new Blogs</li>
</ul>

<h3 align = "center">Tech Stack</h3>

<div align = "center">
  
![alt HTML](https://camo.githubusercontent.com/d63d473e728e20a286d22bb2226a7bf45a2b9ac6c72c59c0e61e9730bfe4168c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465)   ![alt CSS](https://camo.githubusercontent.com/3a0f693cfa032ea4404e8e02d485599bd0d192282b921026e89d271aaa3d7565/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)  ![alt JS](https://camo.githubusercontent.com/93c855ae825c1757f3426f05a05f4949d3b786c5b22d0edb53143a9e8f8499f6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d3332333333303f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d463744463145) 
 <img src = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"  width="35px" />
  <img src = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"  width="32px"  />
  <h2></h2>
  
  
</div>

<h3>Installation</h3>
 <ol> 
  <li>
<p align="left">Clone the repo onto your local machine using the below link</p>
  </li>
  
```html
  https://github.com/kushpathak/BlogMan.git
```
 <li>
<p>Open the project in your favourite IDE (Mine is VSCode :sweat_smile: )</p>            
  </li>
  
   <li>
     Open terminal and split it into 2 parts (or you can open two terminals in the same directory). After that run the given commands
  </li>
  
  <p>Terminal 1 (for client) </p>
  
  
  ```html
     cd server
     npm install
     nodemon server
  ```
  
  <p>Terminal 2 (for server) </p>
  
  ```html
     cd client
     npm install
  ```
  <li>
    <p>In the server folder create a file name .env. Inside it create 4 variables as below</p>
  </li>
  
  ```html
     MONGO_URI = <your mongodb uri>
     TOKEN = <any string of your choice>
     SALT_ROUNDS = <any integer of your choice>
     JWT_SECRET = <any secure secret key>
  ```
  
  <li>
    <p>In the second terminal type the below command</p>
  </li>
  
  ```html
     nodemon server
  ```
  <li>
    Open a web browser and type the below url. You will see the homepage! :smile:
  </li>
  
  ```html
     http://localhost:3000/
  ```
</ol>
