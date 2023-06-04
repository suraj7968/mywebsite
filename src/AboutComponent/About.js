import './About.css';

function About() {
    return(
        <div>
            {/* out 2nd section start */}

    <section class="commen-section" id="section-two">
      <div class="left-side">

          <figure>
              <img src="./assets/images/section2pic.png" alt="section2"/>
          </figure>

      </div>
      <div class="right-side">
          <h2>
              Your Daily Healthy App
          </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui dignissimos doloribus sed aspernatur aliquid pariatur. Omnis possimus nam tenetur quas, velit vitae error explicabo consectetur reprehenderit consequuntur ad laudantium?</p>
          <div class="button-group">
              <button class="commen-button">Get Started</button>
              <button class="commen-button-normal">How Its Work?</button>
          </div>
          
      </div>

    </section>

        </div>

    );
}

export default About;