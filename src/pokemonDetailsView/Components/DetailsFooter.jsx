import React , {Component} from 'react';
import { FooterBox } from '../ComponentsStyles/DetailsFooter.s';

export class DetailsFooter extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <FooterBox contactIsActive={ this.props.contactIsActive }>
            </FooterBox>
        )
    }
}