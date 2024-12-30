import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './script.js'
function App() {

  return (
    <div id = "homecontainer">
          <div class = "section1">
            {/* <img src='./src/assets/food1.avif'></img> */}
            <div class = "subsection">
              <div class = "navbar">Investor Relations</div>
              <div class = "navbar">Add Restaurants</div>
              <div class = "navbar">Log in</div>
              <div class = "navbar">Sign Up</div>
              


            </div>
            <div class = "subheading">
              <h1 id = "heading1">ZOMATO</h1>
              <h2 id = "heading2">Discover the best food & drinks in Chhindwara</h2>
                {/* <form id="form" role="search">
                  <input type="search" id="query" name="q"
                  placeholder="Search..."
                  aria-label="Search through site content"/>
                  <button>Search</button>
                </form> */}
            </div>
          </div>
          <div class = "section2">
            <div class = "subsection2">
              <div class = "imagesection">
                <img src = "./src/assets/food2.avif"></img>
                  <div class = "content">
                  <h4>Order Online</h4>
                  <p>Stay home and order to you door step</p>
                </div>
              </div>
            {/* <div class = "imagesection">
              <img src = "./src/assets/food2.avif"></img>
                <div class = "content">
                  <h4>Order Online</h4>
                  <p>Stay home and order to you door step</p>
                </div>
            </div> */}
            {/* <div>
              <img src = "./src/assets/food2.avif"></img>
                <div class = "content">
                  <h4>Order Online</h4>
                  <p>Stay home and order to you door step</p>
                </div>
            </div> */}
            </div>
          </div>
          <div class = "section3">
            <div class = "main-subsection">
              <div class = "subsection3">
              <img src='./src/assets/food3.avif'></img>
              </div>
              <div class = "subdivision">
                <h1>Get the Zomato app</h1>
                <p>We will send you a link, open it on your phone to download the app</p>
                <div class = "radiobtn">
                  <input type="radio" id="email" name="contact" value="EMAIL"/>
                  <label for="html">Email</label>
                  <input type="radio" id="phone" name="contact" value="PHONE"/>
                  <label for="css">Phone</label>
                  <div>
                    <input type='text' name = "email" placeholder='email' class = 'textfield'></input>
                    <button class = "btn btn-primary" id = "button">share App link</button>
                  </div>
                </div>
                <div class = "download">
                  <p>Download app from</p>
                  <button class = "app" id = "iphone"><img src="./src/assets/download1.webp"></img></button>
                  <button class = "app" id = "android"><img src="./src/assets/download2.webp"></img></button>
                </div>
              </div>
            </div>
          </div>
          <div class = "section4">
              <div class = "subsection4">
                  <h4>Collections</h4>
                  <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Chennai, based on trends</p>
                </div>
                <div class = "image-alignment">
                  <div class = "foodimages">
                    <img src='./src/assets/salads.jpg'></img>
                      <h4>North Indian Dishes</h4>
                  </div>
                  <div class = "foodimages">
                    <img src='./src/assets/soft-drinks.jpg'></img>
                      <h4>Top Trending</h4>
                  </div>
                  <div class = "foodimages">
                    <img src='./src/assets/vegies.jpg'></img>
                      <h4>Vegies Varities</h4>
                  </div>
            </div>           
          </div>
          <div class = "section5">
            <div class = "subsection5">
              <h3>Popular localities in and around Chennai</h3>
            </div>
            <div class = "main-places">
              <div class = "places">
                <h6>T.Nagar</h6>
                <p>386 Places</p>
              </div>
              <div class = "places">
                <h6>Nungambakkam</h6>
                <p>330 Places</p>
              </div>
              <div class = "places">
                <h6>Adayar</h6>
                <p>320 Places</p>
              </div>
              <div class = "places">
                <h6>Velachery</h6>
                <p>350 Places</p>
              </div>
              <div class = "places">
                <h6>Anna Nagar</h6>
                <p>360 Places</p>
              </div>
              <div class = "places">
                <h6>Mylapore</h6>
                <p>370 Places</p>
              </div>
              <div class = "places">
                <h6>Alwarpet</h6>
                <p>380 Places</p>
              </div>
              <div class = "places">
                <h6>vadapalani</h6>
                <p>380 Places</p>
              </div>
            </div>
          </div>
          <footer class = "Finalsection">
            <div class = "heading">
              <h5>ZOMATO</h5>

              <div class = "main">
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" id="country" data-bs-toggle="dropdown" aria-expanded="false">country</button>
                  <ul class="dropdown-menu" id="country_list" aria-labelledby="country">
                      <li><a class="dropdown-item" href="#" data-code="AF">India</a></li>
                      <li><a class="dropdown-item" href="#" data-code="AF">UAE</a></li>
                  </ul>
                </div>
              </div>

            </div>
            <div class= "list">
              <ul>
                <li><h6>About Zomato</h6></li>
                <li>Who we are</li>
                <li>Blog</li>
                <li>Work with us</li>
              </ul>
              <ul>
                <li><h6>For Restaurants</h6></li>
                <li>Partner With Us</li>
                <li>Apps For You</li>
              </ul>
              <ul>
                <li><h6>Learn More</h6></li>
                <li>Privacy</li>
                <li>Security</li>
                <li>Terms</li>
              </ul>
              <ul id='sociallinks'>
                <li><h6>Social Links</h6></li>
                <li>
                  <i class="fa fa-instagram sub-icons" aria-hidden="true"></i>
                  <i class="fa fa-facebook-official sub-icons" aria-hidden="true"></i>
                  <i class="fa fa-youtube-play sub-icons" aria-hidden="true"></i>
                  <i class="fa fa-twitter sub-icons" aria-hidden="true"></i>
                  <i class="fa fa-linkedin sub-icons" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </footer>
    </div>
  )
  
}

export default App
