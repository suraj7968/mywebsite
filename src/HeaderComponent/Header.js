import './Header.css';

function Header() {
    return(
        <div>
            <header>
      <nav>
          {/* left side menu */}
          <div class="left-side-menu">
              <div class="logo">
                  <a href="">
                      <img src="./assets/images/logo1.png" alt="logo"/>
                  </a>
              </div>
              <div class="sub-menu">
                  <a href="#section-one">
                      <li>Home</li>
                  </a>
                  <a href="#section-two">
                      <li>About Us</li>
                  </a>
                  <a href="#section-third">
                      <li>Goals</li>
                  </a>
                  <a href="#section-four">
                      <li>Tips</li>
                  </a>
              </div>
          </div>

          {/* right side menu */}
          <div class="right-side-menu">

              <div class="sub-menu">
                  <a href="">
                      <li>Log In</li>
                  </a>
                  <button>Sign Up</button>
              </div>

          </div>
      </nav>
  </header>

        </div>

    );
}

export default Header;