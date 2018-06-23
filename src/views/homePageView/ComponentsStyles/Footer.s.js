import glamorous from 'glamorous';

export const FooterBox = glamorous.div(props => {
    return {
        height:'50px',
        width:'100%',
        background:'linear-gradient(#454545,#444444)'
    }
})

export const GitWrapper = glamorous.div(props => {
    return {
        height:'50px',
        width: '150px',
        marginLeft:'10%',
        float:'left'
    }
})

export const GitLogo = glamorous.img(props => {
    return {
        paddingTop:'10px',
        paddingRight:'10px',
        height:'27px',
        width:'27px',
        float:'left',
    }
})
export const GitName = glamorous.span(props => {
    return {
        paddingTop:'10px',
        color: 'black',
        fontSize:'20px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        transition:'.81s',
        float:'left',

        ':hover': {
            color:'#9a0000'
        }
    }
})

export const PhoneWrapper = glamorous.div(props => {
    return {
        height:'50px',
        width:'200px',
        float: 'right'
    }
})
export const NumberWrapper = glamorous.span(props => {
    return {
        paddingTop:'12px',
        color: 'black',
        fontSize:'20px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        transition:'.81s',
        float:'left',

        ':hover': {
            color:'#9a0000',
        }
    }
})
export const MailWrapper = glamorous.div(props => {
    return {
        height:'50px',
        float:'right',
        marginRight:'100px'
    }
})

export const Mail = glamorous.span(props => {
    return {
        paddingTop:'12px',
        color: 'black',
        fontSize:'20px',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        transition:'.81s',
        float:'left',

        ':hover': {
            color:'#9a0000'
        }
    }
})