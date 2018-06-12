import glamorous from 'glamorous';

export const MainBox = glamorous.div(props => {
    return {
        overflow:'scroll',
        height:'92.5vh', width:'100%',
        background:'white',
    }
})
export const PokemonWrapper = glamorous.div(props => {
    return {
        width:'450px',
        margin: '0 0 0 10%',
        float:'left'
    }
})
export const NameWrapper = glamorous.div(props => {
    return {
        fontSize: '30px',
        fontFamily: '"Courier New", Courier',
        textAlign: 'center',
    }
})

export const TypesWrapper = glamorous.div(props => {
    return {
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        marginTop: '50px',
        fontSize:'25px',
        height:'60px',
    }
})
export const PokemonId = glamorous.div(props => {
    return {
        color:'grey',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize: '20px',
    }
})
export const StatsWrapper = glamorous.div(props => {
    return {
        width:'21%',
        margin:'2% 0 0 40%',
        fontFamily: '"Courier New", Courier',
    }
})
export const PokemonStatName = glamorous.div(props => {
    return {
        fontSize:'20px',
        fontWeight:'bold',
        float: 'left',
        width:'200px',
        margin:'0 150px 0 0'
    }
})
export const PokemonStatValue = glamorous.div(props => {
    return {
        fontSize:'20px',
        fontWeight:'bold',
    }
})
