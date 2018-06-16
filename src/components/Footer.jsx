import React from "react";
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends React.Component {
    render() {
        const styles={
            color: PropTypes.string,
           // children: PropTypes.node.isRequired,
        };

        Footer.PropTypes = {
            children:PropTypes.node.isRequired
        }
    
        Footer.defaultProps = {
            color: 'purple',
        };

        return(
            <footer className="footer" style={styles}>
                <div>
                    <container>
                        {this.props.children} 
                        {/*color={this.props.color}*/} 
                    </container>
                </div>
            </footer>
        );
    }
}

export default Footer; 
