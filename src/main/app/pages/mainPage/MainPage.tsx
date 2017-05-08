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

  render() {
    document.title = 'MainPage';

    const options = {
      responsive: true
    };

    return (
        <div className="mainPage">
          <header className="header">

            <div id="stripes"></div>

            <nav>
              <div className="col-12 spread">

                <div>
                  <a className="logo" href="/">
                    <img src="/img/logo.png" width="29px"/>
                    Bluefish
                  </a>
                </div>

                <div>
                  <ul>
                    <li>
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/features">
                        Features
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/examples">
                        Examples
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/docs/">
                        Docs
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/repo">
                        Repo
                      </a>
                    </li>

                    <li>
                      <a className="nav-link" href="/contactus">
                        Contact Us
                      </a>
                    </li>


                    <li>
                      <a className="nav-bt" href="/getting-started">
                        Getting started
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>

            <div className="container-lrg flex">
              <div className="col-6 centervertical">
                <h1 className="heading">
                  The first Content Framework!
                </h1>
                <h2 className="paragraph">
                  We're creating the best place to go when starting a new business or company. Create any content to the
                  web, we support any kind, e-commerce, blog, cms, anything!
                </h2>
                <div className="bt">
                  <a className="bt-button" href="/getting-started">
                    Explore
                  </a>
                </div>
              </div>
              <div className="col-6 sidedevices">
                <div className="browserwrapper">
                  <div className="browser">
                    <div className="mask">
                      <img className="mask-img"
                           src="https://static.wixstatic.com/media/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.jpg/v1/fill/w_613,h_266,al_c,q_80,usm_0.66_1.00_0.01/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.webp"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="content-block">

            <div className="content">

              <section className="container-lrg flex">

                <div className="col-4">
                  <h3 className="subheading">
                    API First
                  </h3>
                  <p className="paragraph">
                    Manage your content by just defining an API route and object, developer friendly baby!
                  </p>
                </div>

                <div className="col-4">
                  <h3 className="subheading">
                    Build anything!
                  </h3>
                  <p className="paragraph">
                    It's too easy to get involved with Bluefish, define a scope of goal, apis, models and the DB is
                    automatically manageable.
                  </p>
                </div>

                <div className="col-4">
                  <h3 className="subheading">
                    Gorgeous Simplicity
                  </h3>
                  <p className="paragraph">
                    If it's a website builder, CMS, Blog, whatever you want, easy to create any content
                  </p>
                </div>

              </section>

            </div>
          </div>

          <div className="content-block">

            <div className="content">

              <section className="container-lrg">
                <div className="centerText">

            <span className="code icon">
                <div className="bt">
                  <a className="bt-button" href="/getting-started">
                    Explore
                  </a>
                </div>
            </span>

                  <h3>DEVELOPERS FIRST</h3>

                  <p>
                    Bluefish is a constantly involving platform, we are always
                    trying to stay a head of your project needs.
                    We are always asking for advice on how to make
                    things better and greater!
                  </p>
                </div>


                <div id="editor">
                  <div className="line-numbers">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <span>6</span>
                    <span>7</span>
                  </div>
                </div>

              </section>


            </div>
          </div>

          <div className="content-block">

            <div className="content">

              <section className="container-sml text-center">
                <div className="col-12">
                  <h3 className="heading">
                    Brilliant API control
                  </h3>
                </div>
              </section>
              <section className="container-lrg flex">
                <div className="col-5 centervertical">
                  <div className="steps">
                    <div className="emoji">
                      <i className="material-icons">lightbulb_outline</i>
                    </div>
                    <h3 className="subheading">
                      Instant Handles
                    </h3>
                    <p className="paragraph">
                      instantly shows you the most relevant data.
                    </p>
                  </div>
                  <div className="steps">
                    <div className="emoji">
                      <i className="material-icons">favorite</i>
                    </div>
                    <h3 className="subheading">
                      Any Types
                    </h3>
                    <p className="paragraph">
                      Doesn't matter what type of site you're going to create: Static site, CMS, Blog or a e-Commerce
                      site, Bluefish can do it all.
                    </p>
                  </div>
                  <div className="steps">
                    <div className="emoji">
                      <i className="material-icons">airplanemode_active</i>
                    </div>
                    <h3 className="subheading">
                      Insanely Fast
                    </h3>
                    <p className="paragraph">
                      Built on top of Express you can push it as fast as you would with Express!
                    </p>
                  </div>
                </div>
                <div className="col-1">
                </div>
                <div className="col-6">
                  <div className="sidedevices">
                    <div className="browserwrapper">
                      <div className="browser">
                        <div className="mask">
                          <img className="mask-img"
                               src="https://static.wixstatic.com/media/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.jpg/v1/fill/w_613,h_266,al_c,q_80,usm_0.66_1.00_0.01/1b63f7_1926711db343492985fdd0e9f128347a~mv2_d_2560_1536_s_2.webp"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          <footer>
            <div className="container-sml flex text-center">
              <div className="col-12">
                <h3 className="heading">
                  Don't waste time, create something new today with Bluefish
                </h3>
                <div className="bt">
                  <a className="bt-button" href="/getting-started">
                    Get started!
                  </a>
                </div>
              </div>
            </div>
            <div className="container-lrg footer-nav flex">
              <div className="col-3 vertical">
                <a className="logo" href="/">
                  Bluefish
                </a>
                <a className="nav-link2">
                  &copy; 2017 Solnet Solutions
                </a>
              </div>
              <div className="col-3 vertical">
                <a className="nav-link2" href="/">
                  Home
                </a>
                <a className="nav-link2" href="/features">
                  Features
                </a>
                <a className="nav-link2" href="/getting-started">
                  Getting started
                </a>
              </div>
              <div className="col-3 vertical">
                <a className="nav-link2" href="/docs">
                  Documentation
                </a>
                <a className="nav-link2" href="/repo">
                  Repo
                </a>

              </div>
              <div className="col-3 vertical">
                <div className="nav-link2 credits">
                  <i className="material-icons">favorite</i>
                  <div>
                    <small>Made with Love by Ryan Clough at Solnet!</small>
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
