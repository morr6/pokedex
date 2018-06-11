import glamorous from 'glamorous';

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
        borderBottom: props.mouseOver ? '1px solid silver' : 'none'
    }
})

export const PokemonDetailsBox = glamorous.div(props => {
    return {
        overflow:'hidden',
        height:'100vh', width:'100%',
        background:'white',
        margin:'70px 0 0 0'
    }
})