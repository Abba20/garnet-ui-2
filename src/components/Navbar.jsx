import React from 'react';
import propTypes from 'prop-types';
import './Navbar.css'; 
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


export default function Navbar({color, size, tab}) {
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
    children: {
        marginLeft: 'auto',
        marginRight: '-0.5em'e: 'medium',
    }
} 

Navbar.defaultProps = {
    color: 'blue',
    size: 'medium',
}

Navbar.sizes = {
    small: '10px',
    medium: '20px',
    large: '30px',
};