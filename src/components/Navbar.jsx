//import React from 'react';
//import propTypes from 'prop-types';
//import './Navbar.css'; 
/*
class Navbar extends React.Component {
    render() {
        return <nav> </nav>
    }
} 

*/

/*
export default function Navbar ({color, size}) {
    const styles = {
        color,
        fontSize: Navbar.sizes[size],
    };

    return (
        <nav className="navbar" style={styles}>
        {children}
        </nav>
    );  
}

Navbar.propTypes = {
    color: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    children: {
        marginLeft: 'auto',
        marginRight: '-0.5em',
        [xsmal]: {
            margin: [[10, 0, 0]]
        }
    }
}

Navbar.defaultProps = {
    color: '#black',
    size: 'medium',
}

Navbar.sizes = {
    small: '10px',
    medium: '20px',
    large: '30px',
};*/

/*
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav> 
                    <a class="active" href="https://reactjs.org/">Tab1</a>
                    <a href="http://www.palisadoes.org/calico/">Tab2</a>
                    <a href="https://reactjs.org/">Tab3</a>
                    <a href="http://www.palisadoes.org/calico/">Tab4</a>
                </nav>
            </div>
        )
    };
}  

export default Navbar;  */

/*
<a class="active" href="https://reactjs.org/">Tab1</a>
<a href="http://www.palisadoes.org/calico/">Tab2</a>
<a href="https://reactjs.org/">Tab3</a>
<a href="http://www.palisadoes.org/calico/">Tab4</a>
*/

/*
function Navbar({color, size, tab}) {
    const styles = {
        color,
        fontSize: Navbar.sizes[size],
    };

    return (
        <div>
            <nav className="navbar" style={styles}>
            {children}
            </nav>
        </div>
    );  
}


Navbar.propTypes = {
    color: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
   /* children: {
        marginLeft: 'auto', 
        marginRight: '-0.5em',
    } *//*children: propTypes.node.isRequired,

} ;
 
Navbar.defaultProps = {
    color: 'blue',
    size: 'medium',
}

Navbar.sizes = {
    small: '10px',
    medium: '20px',
    large: '30px',
};

export default Navbar;

*/

/*
function Navbar (color, size, link, navbar, title){
    const styles = {
        color,
        fontSize: Navbar.sizes[size],
        link, 
        navbar,
    };

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="{this.props.link}">Navbar</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            <li class="nav-item active">
                <a class="nav-link" href="{this.props.link}">{this.props.title}<span class="sr-only">(current)</span></a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="{this.props.link}">{this.props.title}</a>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="{this.props.link}">{this.props.title}</a>
                    <a class="dropdown-item" href="{this.props.link}">{this.props.title}</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="{this.props.link}">{this.props.title}</a>
                </div>
            </li>

            <li class="nav-item">
                <a class="nav-link disabled" href="{0this.props.link}">{this.props.title}</a>
            </li>

            </ul>

            {/*<form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">   
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */

          /*  </div>
        </nav>   
    );
}


Navbar.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
    onClick: PropTypes.func,
  };
  
Navbar.defaultProps = {
    color: '#333',
    size: 'normal',
  };
  
Navbar.sizes = {
    small: '10px',
    normal: '14px',
    large: '18px',
  };
  

*/

import React, {Component} from "react";
import PropTypes from 'prop-types';
//import Nav = require '(react-bootstrap/lib/Nav)';
//require("react-bootstrap/lib/Nav");
import Nav from 'react-bootstrap/lib/Nav';

class Navbar extends React.Component {
    render () {
        const styles={
            color: PropTypes.string,
        };

        Navbar.PropTypes={
            children:PropTypes.node.isRequired
        }

        return (
            <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">React-Bootstrap</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>


        );
    }
}
  
export default Navbar;