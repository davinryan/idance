import * as React from 'react';
import Header from '../header';

require('./mainPage.scss');
require('../../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
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
          <Header />

          <br />
          <div className='sidedevices'>
            <img className='mask-img main-image'
                 src='https://static.wixstatic.com/media/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.jpg/v1/fill/w_613,h_266,al_c,q_80,usm_0.66_1.00_0.01/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.webp'/>
          </div>

          <div className='content-block'>

            <div className='content'>

              <section className='container-lrg'>

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
                  <a className='bt-button' href='https://www.idance.co.nz/events'>
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
                    <p className='paragraph'>Learn to dance Modern Jive</p>
                    <p className='paragraph'>Have a great night out</p>
                    <p className='paragraph'>Make new friends</p>
                    <p className='paragraph'>It's easy and fun</p>
                    <p className='paragraph'>On your own or with friends</p>
                    <p className='paragraph'>No need to book</p>
                    <p className='paragraph'>Start anytime</p>
                    <p className='paragraph'>Two left feet, no problem</p>
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
            <div className='container-sml text-center'>
              <div className='col-12'>
                <h3 className='heading'>
                  Don't waste time, come along to iDance
                </h3>
                <div className='bt'>
                  <a className='bt-button' href='https://www.idance.co.nz/classes'>
                    Get started!
                  </a>
                </div>
              </div>
            </div>
            <div className='container-lrg footer-nav'>
              <div className='col-3'>
                <a className='nav-link2'>
                  &copy; 2017 iDance Digital Team
                </a>
              </div>
              <div className='footer-links'>
              <div className='col-3'>
                <a className='nav-link2' href='https://www.idance.co.nz/'>
                  Home
                </a>
                <a className='nav-link2' href='https://www.idance.co.nz/about'>
                  About
                </a>
                <a className='nav-link2' href='https://www.idance.co.nz/classes'>
                  Classes
                </a>
              </div>
              <div className='col-3'>
                <a className='nav-link2' href='https://www.idance.co.nz/events'>
                  Events
                </a>
                <a className='nav-link2' href='https://www.idance.co.nz/wedding-dance-lessons-wellington'>
                  Wedding
                </a>
                <a className='nav-link2' href='https://www.idance.co.nz/cal'>
                  Crew
                </a>
              </div>
              </div>
              <div className='col-3'>
                <div className='nav-link2 credits'>
                  <span className='glyphicon glyphicon-heart' aria-hidden='true'></span>
                  <div>
                    <small>Made by the </small>
                    <small>Digital Team </small>
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
