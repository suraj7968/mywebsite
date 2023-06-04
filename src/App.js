import './App.css';
import { Routes , Route } from 'react-router-dom'; 

import Header from './HeaderComponent/Header.js';
import Home from './HomeComponent/Home';
import About from './AboutComponent/About';
import Goals from './GoalsComponent/Goals';
import Tips from './TipsComponent/Tips';

function App() {
  return (
    <div >
    <Header/>

    <Home/>

    <About/>

    <Goals/>

    <Tips/>

    {/* out 5th section start */}
    <section class="commen-section" id="section-five">
      <div class="left-side">
              <img src="./assets/images/section5.png" alt="section5"/>
      </div>
      <div class="right-side">
          <h2>
             We Will Take Care Of Your Fitness Goals
          </h2>
          <div class="fitness-goals">
              <div class="rule1">
                  <h3> <i class="fa-solid fa-heart"></i> We Will take care of your fitness goals</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a.</p>
              </div>

              <div class="rule2">
                  <h3> <i class="fa-solid fa-heart"></i> We Will take care of your fitness goals</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a.</p>
              </div>

              <div class="rule3">
                  <h3> <i class="fa-solid fa-heart"></i> We Will take care of your fitness goals</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, a.</p>
              </div>
          </div>
      </div>
    </section>

    {/* out 6th section start */}

    <footer>
      <div class="logo">
          <img src="./assets/images/logo1.png" alt="logo"/>
          <p>@2023 SurajVerma</p>
      </div>

      <div class="footer-menu">
          <div class="footer-div-2">
              <h4>Products</h4>
              <a href=""><li>Pricing</li></a>
              <a href=""><li>Pricing</li></a>
          </div>

          <div class="footer-div-3">
              <h4>About</h4>
              <a href=""><li>About Us </li></a>
              <a href=""><li>About Us</li></a>
          </div>

          <div class="footer-div-4">
              <h4>Blogs</h4>
              <a href=""><li>Blog</li></a>
              <a href=""><li>Blog</li></a>
          </div>

          <div class="footer-div-5">
              <h4>Get In Touch</h4>
              <a href=""><li>Question or Feedback</li></a>
              <a href=""><li>Question or Feedback</li></a>
          </div>
      </div>
    </footer>

    {/* out 7th section start */}

    <div class="icon-bar">
      <a href="https://www.facebook.com/profile.php?id=100010617765697" class="facebook" target="_suraj">Click Here To Visit <i class="fa-brands fa-facebook"></i></a>
      <a href="#" class="telegram" target="_suraj">Click Here To Visit <i class="fa-brands fa-telegram"></i>  </a>
      <a href="https://www.instagram.com/" class="instagram" target="_suraj">Click Here To Visit <i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/suraj-verma-513975234" class="linkedin" target="_suraj">Click Here To Visit <i class="fa-brands fa-linkedin"></i></a>
      <a href="https://youtube.com/@unboxingvideos423" class="youtube" target="_suraj">Click Here To Visit <i class="fa-brands fa-youtube"></i></a>
    </div>
      
    </div>
  )
  
}

export default App;
