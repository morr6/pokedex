import React, {Component} from 'react';
import { ErrorMessageWrapper,Message } from './FetchErrorMessage.s'

export class FetchErrorMessage extends Component {
    
    render() {
        return (    
            <div>
              <ErrorMessageWrapper>
                <Message> Oup! something went wrong! </Message>
                <Message> check internet connection and press F5 to reload. </Message>
              </ErrorMessageWrapper>
            </div>
        )
    }
}