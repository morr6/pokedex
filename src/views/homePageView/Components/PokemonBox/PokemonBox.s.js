import glamorous from 'glamorous';

export const PokemonWrapper = glamorous.div(props => {
    return {
        height:'210px',
        width:'175px',
        margin:'0 100px 100px 0',
        float:'left',
        transition: '.6s',
        cursor: 'pointer',
        textAlign: 'center',     
    }
})

export const NameWrapper = glamorous.div(props => {
    return {
        marginTop: '5%',
        height:'20px', width:'100%',
        textAlign: 'center',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize: '20px'
    }
})

export const PokemonImage = glamorous.img(propst => {
    return {
        margin: '5% 0 0 7.5%',
        width: '90%', height:'70%',
        transition: '.5s',

        ':hover': {
            transform: 'scale(1.15)'
        }
    }
})
export const IdWrapper = glamorous.div(props => {
    return {
        color: 'grey',
        float:'right',
        textAlign: 'center',
        fontFamily: '"Comic Sans MS", cursive, sans-serif'
    }
})