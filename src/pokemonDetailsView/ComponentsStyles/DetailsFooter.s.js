import glamorous from 'glamorous';

export const FooterBox = glamorous.div(props => {
    return {
        transition: '1s',
        position: 'absolute',
        bottom:'0',
        height: props.contactIsActive === true ? '200px' : '0px',
        width:'100%',
        background:'linear-gradient(#454545,#444444)'
    }
})