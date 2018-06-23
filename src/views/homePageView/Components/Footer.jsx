import React , {Component} from 'react';
import { FooterBox, 
        GitLogo, 
        GitWrapper, 
        GitName, 
        PhoneWrapper, 
        NumberWrapper, 
        MailWrapper,
        Mail} from '../ComponentsStyles/Footer.s';
import { Link } from 'react-router-dom'
import PhoneIcon from '../../../../node_modules/react-material-icons/icons/communication/phone.js'
import MailIcon from '../../../../node_modules/react-material-icons/icons/communication/email.js'

const ContactIconStyle = {
    height:'27px',
    width:'27px',
    float:'left',
    paddingTop:'15px',
    paddingRight:'10px',
}

export class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <FooterBox>

                <GitWrapper>
                    <GitLogo 
                        src={ require('../../../assets/img/gitLogo.png') } 
                        alt='Git Logo' 
                    />
                    <a href='https://github.com/morr6' target='_blank' style={{textDecoration:'none'}}>
                        <GitName target='_blank'>
                            / morr6
                        </GitName>
                    </a>
                </GitWrapper>

                <PhoneWrapper>
                   <PhoneIcon style={ ContactIconStyle } />
                   <NumberWrapper>
                        123123123
                    </NumberWrapper> 
                </PhoneWrapper>

                <MailWrapper>  
                    <MailIcon style={ ContactIconStyle }/>
                    <Mail>
                        marcin.dobosz13@gmail.com
                    </Mail>
                </MailWrapper>

            </FooterBox>
        )
    }
}