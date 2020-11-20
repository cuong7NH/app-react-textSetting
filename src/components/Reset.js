
import React, {Component} from 'react';


class Reset extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    reset() {
        this.props.reset();
    }

    render() {
        return(
            <div className="btn-reset">
                <button onClick = {this.reset}>reset</button>
             </div>
        )
    };
}
export default Reset;