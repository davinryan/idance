import * as React from 'react';

require('./mainPage.scss');

interface IMainPage {
  location: any;
  router: any;
}

class MainPage extends React.Component<IMainPage, any> {

  constructor(props: IMainPage) {
    super(props);

  }

  public render() {
    document.title = 'iDance Wellington';

    const options = {
      responsive: true
    };

    return (
        <div className='mainPage'>
          <header className='header'>

            <div id='stripes'></div>

            <nav>
              <div className='col-12 spread'>

                <div>
                  <a className='logo' href='/'>
                    <img src='http://classic.idance.co.nz/images/iDance-logo-1.png' width='100px'/>
                  </a>
                  <p>Wellington</p>
                </div>

                <div>
                  <ul>
                    <li>
                      <a className='nav-link' href='/'>
                        Home
                      </a>
                    </li>

                    <li>
                      <a className='nav-link' href='/about'>
                        About
                      </a>
                    </li>

                    <li>
                      <a className='nav-link' href='/classes'>
                        Classes
                      </a>
                    </li>

                    <li>
                      <a className='nav-link' href='/events'>
                        Events
                      </a>
                    </li>

                    <li>
                      <a className='nav-link' href='/weddings'>
                        Weddings
                      </a>
                    </li>

                    <li>
                      <a className='nav-link' href='/crew'>
                        Crew
                      </a>
                    </li>
                    <li>
                      <a className='nav-bt' href='/more'>
                        More
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>

            <div className='container-lrg flex'>
              <div className='col-6 centervertical'>
                <h1 className='heading'>
                  Modern Jive - the biggest partner dance on the planet
                </h1>
                <h2 className='paragraph'>
                  Why spend your nights on the couch? Come join us and dance the night away! Modern Jive, Fun, Fit &amp;
                  Easy!
                  BUT it is not just a dance class, it is a whole night out. Be prepared to enjoy yourselves
                </h2>
                <div className='bt'>
                  <a className='bt-button' href='/getting-started'>
                    Get Started
                  </a>
                </div>
              </div>
              <div className='col-6 sidedevices'>
                <img className='mask-img'
                     src='https://static.wixstatic.com/media/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.jpg/v1/fill/w_613,h_266,al_c,q_80,usm_0.66_1.00_0.01/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.webp'/>
              </div>
            </div>
          </header>

          <div className='content-block'>

            <div className='content'>

              <section className='container-lrg flex'>

                <div className='col-4'>
                  <h3 className='subheading'>
                    Whole night out
                  </h3>
                  <p className='paragraph'>
                    it is not just a dance class, it is a whole night out
                  </p>
                </div>

                <div className='col-4'>
                  <h3 className='subheading'>
                    Fun, Fit &amp; Easy!
                  </h3>
                  <p className='paragraph'>
                    Be prepared to enjoy yourselves
                  </p>
                </div>

                <div className='col-4'>
                  <h3 className='subheading'>
                    Teens!
                  </h3>
                  <p className='paragraph'>
                    NOW classes for TEENS CLASSES too!
                  </p>
                </div>

              </section>

            </div>
          </div>

          <div className='content-block'>

            <div className='content'>

              <section className='container-lrg'>
                <div className='centerText'>

            <span className='code icon'>
                <div className='bt'>
                  <a className='bt-button' href='/events'>
                    Events
                  </a>
                </div>
            </span>

                  <h3>Welcome to iDance</h3>

                  <p>
                    Classes every Wednesday and Thursday

                    Whitireia Performance Centre
                    25 Vivian Street, Wellington

                    Beginners class 7pm
                    $15 for a whole night out

                    Have a look through our website to find all the information you need
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className='content-block'>
            <div className='content'>
              <section className='container-sml text-center'>
                <div className='col-12'>
                  <h3 className='heading'>
                    It's easy and fun
                  </h3>
                </div>
              </section>
              <section className='container-lrg flex'>
                <div className='col-5 centervertical'>
                  <div className='steps'>
                    <div className='emoji'>
                      <span className='glyphicon glyphicon-ok-circle' aria-hidden='true'></span>
                    </div>
                    <h3 className='subheading'>
                      Start Now
                    </h3>
                    <p className='paragraph'>
                      Learn to dance Modern Jive
                      Have a great night out
                      Make new friends
                      It's easy and fun
                      On your own or with friends
                      No need to book
                      Start anytime
                      Two left feet, no problem
                    </p>
                  </div>
                  <div className='steps'>
                    <div className='emoji'>
                      <span className='glyphicon glyphicon-ok-circle' aria-hidden='true'></span>
                    </div>
                    <h3 className='subheading'>
                      Parties and Events
                    </h3>
                    <p className='paragraph'>
                      Keep up to date with all the dance parties and events throughout the year
                    </p>
                  </div>
                  <div className='steps'>
                    <div className='emoji'>
                      <span className='glyphicon glyphicon-ok-circle' aria-hidden='true'></span>
                    </div>
                    <h3 className='subheading'>
                      Insanely Awesome
                    </h3>
                    <p className='paragraph'>
                      DO IT TODAY AND MAKE LIFE AWESOME
                    </p>
                  </div>
                </div>
                <div className='col-1'>
                </div>
                <div className='col-6'>
                  <div className='sidedevices'>
                          <img className='mask-img'
                               src='https://static.wixstatic.com/media/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.jpg/v1/fill/w_613,h_266,al_c,q_80,usm_0.66_1.00_0.01/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.webp'/>
                  </div>
                </div>
              </section>

            </div>
          </div>

          <footer>
            <div className='container-sml flex text-center'>
              <div className='col-12'>
                <h3 className='heading'>
                  Don't waste time, come along to iDance
                </h3>
                <div className='bt'>
                  <a className='bt-button' href='/getting-started'>
                    Get started!
                  </a>
                </div>
              </div>
            </div>
            <div className='container-lrg footer-nav flex'>
              <div className='col-3 vertical'>
                <a className='logo' href='/'>
                  <img src='http://classic.idance.co.nz/images/iDance-logo-1.png' width='100px'/>
                </a>
                <a className='nav-link2'>
                  &copy; 2017 iDance Digital Team
                </a>
              </div>
              <div className='col-3 vertical'>
                <a className='nav-link2' href='/'>
                  Home
                </a>
                <a className='nav-link2' href='/features'>
                  About
                </a>
                <a className='nav-link2' href='/getting-started'>
                  Classes
                </a>
              </div>
              <div className='col-3 vertical'>
                <a className='nav-link2' href='/docs'>
                  Events
                </a>
                <a className='nav-link2' href='/repo'>
                  Wedding
                </a>
                <a className='nav-link2' href='/repo'>
                  Crew
                </a>
              </div>
              <div className='col-3 vertical'>
                <div className='nav-link2 credits'>
                  <span className='glyphicon glyphicon-heart' aria-hidden='true'></span>
                  <div>
                    <small>Made by Davin Ryan</small>
                    <small>Digital Team</small>
                    <small>Wellington, New Zealand</small>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
    );
  }
}

export default MainPage;
