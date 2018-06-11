import glamorous from 'glamorous';

export const MenuBox = glamorous.div(props => {
    return {
        top:0,
        zIndex:9999,
        position:'fixed',
        height: '70px',
        width: '100%',
        background:'linear-gradient(#9a0000,#850000)' 
    }
})

export const LogoWrapper = glamorous.div(props => {
    return {
        margin:'7.5px 0 0 10%',
        float:'left'
    }
})

export const Logo = glamorous.img(props => {
    return {
        height:'50px',
        width:'250px',
    }
})

export const ButtonsBox = glamorous.div(props => {
    return {
        transition:'1s',
        display:'flex',
        flexWap: 'nowrap',
        margin:'22px 0 0 20%',
        marginLeft: '20%',
        float:'left',
    }
})
export const MenuButton = glamorous.div(props => {
    return {
        cursor: 'pointer',
        fontFamily: '"Lucida Console", Monaco, monospace',
        fontSize:'15px',
        fontWeight: 'bold',
        color:'white',
        float: 'left',
        margin: '5px 0 0 0',
        textAlign:'center',
        padding:'0 30px 0 30px',
        height: '20px',
    }
})
export const SearchInput = glamorous.input(props => {
    return {
        outline:'none',
        padding:'5px 15px 2px 15px',
        background:'transparent',
        border:'none',
        width:'75%'
        
    }
})
export const SearchWrapper = glamorous.div(props => {
    return {
        border:'1px solid grey',
        margin:'20px 0 0 5%',
        float:'left',
        background:'rgba(255,250,250,1)',
        height:'25px', width:'250px',
        borderRadius:'50px'
    }
})