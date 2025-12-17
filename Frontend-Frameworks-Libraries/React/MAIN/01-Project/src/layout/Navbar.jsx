import './Navbar.scss';

function Navbar(){
    return(
        <header className="header">
            <div className="container">
                <div className="logo">
                    <h2>Bijaya.</h2>
                </div>
                <nav className="nav">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#Skills">skills</a>
                    <a href="#projects">projects</a>
                    <a href="#experience">experience</a>
                    <a href="#Contact">contact</a>
                </nav>
                <div className="social-media-link">
                    <div className="media-link">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>
                    <div className="media-link">
                        <i class="fa-brands fa-github"></i>
                    </div>
                    <div className="media-link">
                        <i class="fa-brands fa-discord"></i>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        Copyright@2026 Bijaya
                        <br />
                        Bijaya. All rights reserved.
                    </p>
                </div>
                <div className="toggle-menu"></div>
            </div>
        </header>
    );
};
export default Navbar;