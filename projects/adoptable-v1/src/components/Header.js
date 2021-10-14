import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    state = {
        banner: this.props.banner
    }

    //Function to stop navigating to pages if no data is entered
    handleValidation = (e) => {
        e.preventDefault();
        if (this.state.banner == false) {
        alert("Please enter a zipcode and radius to view the animals!")
        }
    }

    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <h1 className="nav__title nav__container">
                        <Link to="/" className="nav__link nav__title">Adoptable</Link>
                    </h1>
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/dogs" onClick ={this.handleValidation} className="nav__link">Dogs</Link></li>
                        <li className="nav__item"><Link to="/cats" onClick ={this.handleValidation} className="nav__link">Cats</Link></li>
                        <li className="nav__item"><Link to="/bunnies" onClick ={this.handleValidation} className="nav__link">Bunnies</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}


export default Header;