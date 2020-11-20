


import React, {Component} from 'react';
import classNames  from 'classnames';


class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', 'yellow']
        }
    }
    colorChoice(color) {
        this.props.onReceiveColor(color);
        if(this.props.active === true) {
            
        }

    }
    render() {
        const elColors = this.state.colors.map((color, index) => {
            const classColor = 'color-picker--'+ color;
            return (
                
                <span key ={index}
                className = {classNames(classColor, {'active' : this.props.color === color})}
                onClick = {() => this.colorChoice(color)}></span>
            )
        })
        return (
            <div className="color-picker">
                <div className="color-picker__head">
                    <span>Color Picker</span>
                </div>
                <div className="color-picker__body">
                    {elColors}
                </div>
            </div>
        )
    }

}

export default ColorPicker;