import React, {Component} from 'react';
import { ErrorMessageWrapper } from '../ComponentsStyles/FetchErrorMessage.s'

export class FetchErrorMessage extends Component {
    
    render() {
        return (
            <div>
              <ErrorMessageWrapper>
                <h1> Oup! something went wrong!</h1>
                <span> check internet connection and press F5 to reload. </span>
              </ErrorMessageWrapper>
            </div>
        )
    }
}