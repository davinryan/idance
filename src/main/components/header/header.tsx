import * as React from 'react';

require('./header.scss');
class Header extends React.Component<{}, any> {
  public render() {
    return (
      <header className='header'>
        <div id='stripes'></div>
        <nav>
          <div className='col-12'>

            <div>
              <a className='logo' href='/'>
              </a>
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
    );
  }
}

export default Header;