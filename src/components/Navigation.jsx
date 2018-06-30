import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Navigation.css';

/*
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }1 077 320 350

    /*propType = ({
        tab: React.PropTypes.string,
        subtab: React.PropTypes.string,
        link: React.PropTypes.string,
    });
JM
    getDefaultProps(){
        return{
            tab: 'Tab',
            subtab: 'SubTab',
            link: '<a href = "https://reactjs.org"/></a>'
        }
    }

    render () {   
       /* const{
            tab,
            Sybtab,
            link

    }  *//*
        return (     
      
            <div>
                <ul>
                    <li><a href = "/">{this.props.tab}</a></li>
                    <li><a href = "/">{this.props.tab}</a>
                        <ul>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
                            <li><a href = "/">{this.props.subtab}</a></li>
  NavigationNavigationNavigationNavigationNavigation                      </ul>
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
  


export default Navigation; */


const Tab = () => {
    return <li> tab={this.props.tab} </li>
}

const SubTab = () => {
    <li> subtab={this.props.subtab} </li>
}

export class Navigation extends React.component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Tab/>
                <Subtab/>
            </div>
        );
    }
}

Navigation.PropTypes = {
    tab: React.PropTypes.string,
    subtab: React.PropTypes.string
}



/* For Something else 

class Next extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <ul>
                    <li>Data</li>
                    <li>Hosts</li>
                    <li><img src = "" alt = "ruby"/></li>
                    <li>Agents</li>
                    <li>Settings</li>
                </ul>
            </div>

        );
    }

}


ul {
	margin: 0px;
	padding: 0px;
	list-style: none;
}

ul li {
	float: left;
	width: 160px;
	height: 40px;
	background-color: white;
  	line-height: center;
  	text-align: center;
	font-size: 20px;
    margin-right: 2px; 
    text-color: red;
}


*/