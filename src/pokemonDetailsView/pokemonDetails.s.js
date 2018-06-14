import glamorous from 'glamorous';

export const MainBox = glamorous.div(props => {
    return {
        overflow:'scroll',
        height:'92.5vh', width:'100%',
        background:'white',
    }
})

export const NameWrapper = glamorous.div(props => {
    return {
        fontSize: '30px',
        fontFamily: '"Courier New", Courier',
        textAlign: 'center',
    }
})

export const PokemonImageWrapper = glamorous.div(props => {
    return {
        width:'400px', height:'400px',
        margin: '0 0 0 10%',
        float:'left'
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

export const CenterBox = glamorous.div(props => {
    return {
        float:'left',
        margin:'0 0 0 14%'
    }
})

export const AbilitiesWrapper = glamorous.div(props => {
    return {
        fontSize:'25px',
        margin:'100px 0 0 0',
        width:'200px',
        textAlign:'center',
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
        float:'left',
        margin:'2% 0 0 15%',
        fontFamily: '"Courier New", Courier',
    }
})

export const PokemonStatName = glamorous.span(props => {
    return {
        fontSize:'20px',
        fontWeight:'bold',
        float: 'left',
        width:'200px',
        margin:'0 150px 0 0'
    }
})

export const PokemonStatValue = glamorous.span(props => {
    return {
        fontSize:'20px',
        fontWeight:'bold',
    }
})

export const StatsBox = glamorous.div(props => {
    return {
        marginBottom: '50px',
        width:'100%'
    }
})
export const TypeIcon = glamorous.img(props => {
    return {
        height: '60px', width: '60px',
        float: 'left',
        cursor: 'pointer'
    }
})