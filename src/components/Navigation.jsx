import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    /*propType = ({
        tab: React.PropTypes.string,
        subtab: React.PropTypes.string,
        link: React.PropTypes.string,
    });

    getDefaultProps(){
        return{
            tab: 'Tab',
            subtab: 'SubTab',
            link: '<a href = "https://reactjs.org"/></a>'
        }
    }
*/
    render () {   
       /* const{
            tab,
            Sybtab,
            link

        }  */
        return (     
      
            <div>
                <ul>
                    <li><a href = "/">{this.props.tab}</a></li>
                    <li><a href = "/">{this.props.tab}</a>
                        <ul>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
                        </ul>
                    </li>

                    <li><a href = "/">{this.props.tab}</a></li>
                    <li><a href = "/">{this.props.tab}</a>
                        <ul>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
                        </ul>
                    </li>
                    <li><a href = "/">{this.props.tab}</a></li>
                </ul>
            </div>

        );
    }

}
  


export default Navigation;