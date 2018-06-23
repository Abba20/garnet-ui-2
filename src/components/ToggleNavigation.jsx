import React, {Component} from "react";
import PropTypes from 'prop-types';
import './ToggleNavigation.css';

class ToggleNavigation extends React.Component {

    render () {     
        return (     
      
            <div>
                <ul>
                    <li><a href = "/">Tab 1</a></li>
                    <li><a href = "/">Tab 2</a>
                        <ul>
                            <li><a href = "/">Subtab 1</a></li>
                            <li><a href = "/">Subtab 2</a></li>
                            <li><a href = "/">Subtab 3</a></li>
                            <li><a href = "/">Subtab 4</a></li>
                            <li><a href = "/">Subtab 5</a></li>
                            <li><a href = "/">Subtab 6</a></li>
                        </ul>
                    </li>

                    <li><a href = "/">Tab 3</a></li>
                    <li><a href = "/">Tab 4</a>
                        <ul>
                            <li><a href = "/">Subtab 1</a></li>
                            <li><a href = "/">Subtab 2</a></li>
                            <li><a href = "/">Subtab 3</a></li>
                        </ul>
                    </li>
                    <li><a href = "/">Tab 5</a></li>
                </ul>
            </div>

        );
    }

}
  


export default ToggleNavigation;