



import React, {Component} from 'react';
import classNames  from 'classnames';


class Result extends Component {
    
    render() {
        const classColor = 'app-type__input--' + this.props.color;
        return (
            <div className="app-type">
                <div className="app-type__context">
        <span>Color: {this.props.color} - FontSize: {this.props.fontsize}px</span>
                </div>
                <div style={{fontSize: this.props.fontsize+'px'}} className={classNames('app-type__input', classColor)} >
                    Nội dung Context
                </div>
            </div>
        )
    }

}

export default Result;