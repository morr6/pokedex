import React, {Component} from 'react';

export class FetchErrorMassage extends Component {
    
    render() {
        return (
            <div style={{ textAlign:'center' }}>
                <h1> Oup! something went wrong!</h1>
                <span> press F5 to reaload. </span>
            </div>
        )
    }
}