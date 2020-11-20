
import React, {Component} from 'react';


class SizeSetting extends Component {
    

    changeSize(value) {
        this.props.onChangeSize(value);

    }
    

    render() {
        return(
           
            <div className ="size-picker">
                <div className ="size-picker__head">
                <span >Size : {this.props.fontsize}px</span>
                </div>
                <div className ="size-picker__body">
                    <button type= "button"
                    onClick = {() => this.changeSize(-2)}
                    >
                        Giảm
                    </button>
                    <button type= "button"
                    onClick = {() => this.changeSize(2)}
                    >
                        Tăng
                    </button>
                </div>
            </div> 
        )
    };
}
export default SizeSetting;

