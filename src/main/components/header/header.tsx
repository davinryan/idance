import * as React from 'react';
require('./header.scss');

// Required for bootstraps third party dependencies
require('../../../../node_modules/jquery/dist/jquery.js');
require('../../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js');
class Header extends React.Component<{}, any> {

  constructor(props) {
    super(props);
    this.state = {
      navbarCollapsed: true
    };
    this.toggleNavBarExpanded = this.toggleNavBarExpanded.bind(this);
  }

  public render() {
    return (
      <header className='header'>
        <div className='stripes'></div>
        {this.renderHeader()}
        {this.renderDesktopHeader()}
        {this.renderHeaderContents()}
      </header>
    );
  }

  private toggleNavBarExpanded() {
    this.setState({navbarCollapsed: !this.state.navbarCollapsed});
  }

  private renderHeader() {
    return (
      <nav className={`navbar navbar-default navbar-fixed-top ${this.state.navbarCollapsed ? 'navbar-opaque' : ''}`}>
        <div className='container-fluid'>
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse'
                    data-target='#bs-example-navbar-collapse-1' aria-expanded='false'
                    onClick={this.toggleNavBarExpanded}>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <a className='navbar-brand' href='#'><span className='logo' href='/'></span></a>
          </div>

          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li><a href='https://www.idance.co.nz/' className='nav-link'>Home</a></li>
              <li><a href='https://www.idance.co.nz/about' className='nav-link'>About</a></li>
              <li><a href='https://www.idance.co.nz/classes' className='nav-link'>Classes</a></li>
              <li><a href='https://www.idance.co.nz/events' className='nav-link'>Events</a></li>
              <li><a href='https://www.idance.co.nz/wedding-dance-lessons-wellington'
                     className='nav-link'>Weddings</a></li>
              <li><a href='https://www.idance.co.nz/cal' className='nav-link'>Crew</a></li>
              <li className='dropdown'>
                <a href='#' className='dropdown-toggle nav-link' data-toggle='dropdown' role='button'
                   aria-haspopup='true' aria-expanded='false'>More <span className='caret'></span></a>
                <ul className='dropdown-menu'>
                  <li><a href='https://www.idance.co.nz/beginners-moves-rota' className='nav-link'>Beginners Moves
                    Rota</a></li>
                  <li><a href='https://www.idance.co.nz/contact' className='nav-link'>Contact</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  private renderDesktopHeader() {
    return (
      <div className='navbar-desktop'>
        <span className='logo' href='/'></span>
        <div>
          <ul>
            <li>
              <a className='nav-link' href='https://www.idance.co.nz'>
                Home
              </a>
            </li>

            <li>
              <a className='nav-link' href='https://www.idance.co.nz/about'>
                About
              </a>
            </li>

            <li>
              <a className='nav-link' href='https://www.idance.co.nz/classes'>
                Classes
              </a>
            </li>

            <li>
              <a className='nav-link' href='https://www.idance.co.nz/events'>
                Events
              </a>
            </li>

            <li>
              <a className='nav-link' href='https://www.idance.co.nz/wedding-dance-lessons-wellington'>
                Weddings
              </a>
            </li>

            <li>
              <a className='nav-link' href='https://www.idance.co.nz/cal'>
                Crew
              </a>
            </li>
            <li>
              <div className='dropdown'>
                <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1'
                        data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
                  More&nbsp;
                  <span className='caret'></span>
                </button>
                <ul className='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenu1'>
                  <li><a href='https://www.idance.co.nz/beginners-moves-rota'>Beginners Moves Rota</a></li>
                  <li><a href='https://www.idance.co.nz/contact'>Contact</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  private renderHeaderContents() {
    return (
      <div className='container-lrg'>
        <div className='col-12 centervertical'>
          <h1 className='heading'>
            Modern Jive
          </h1>
          <h2 className='heading'>The biggest partner dance on the planet</h2>
          <div className='bt'>
            <a className='bt-button' href='https://www.idance.co.nz/classes'>
              Get Started
            </a>
          </div>
          <h2 className='paragraph'>
            Why spend your nights on the couch? Join us and dance the night away! Modern Jive, Fun, Fit &amp; Easy!
            NOT just a dance class, it is a whole night out. Be prepared to enjoy yourselves!
          </h2>
        </div>
      </div>
    );
  }
}

export default Header;