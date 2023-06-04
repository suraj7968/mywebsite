import './Home.css';

function Home() {
    return(
        <div>
 {/* out hero section start */}
      <section class="main-hero-section" id="section-one">
      {/* left side code  */}
      <div class="hero-left-side">
          <h1>Healthy living simplified</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo cum alias ipsa consequatur. Nobis veritatis neque vitae  quo iure dignissimos porro esse voluptatum unde incidunt at! Reiciendis repellat laborum nisi veniam corrupti dolorum rem? Delectus, aperiam?</p>
          <div class="button-group">
              <a href="">
                  <img src="./assets/images/icons/appstore.png" class="appstore" alt="appstore"/>
              </a>
              <a href="">
                  <img src="./assets/images/icons/googlePlay.png" alt="googlePlay"/>
              </a>
          </div>
      </div>
      <div class="hero-right-side">

          <img src="./assets/images/heropage.png" alt="heropageimg"/>
      </div>
  </section>

        </div>

    );
}

export default Home;