import glamorous from "glamorous";

export const MainBox = glamorous.div(props => {
    return { 
        width:'100%', height:'100%',
        background:'white',
        marginTop:'50%',
        overflow:'hidden',
        paddingBottom: '20%'
    }
})

export const PokemonsContainer = glamorous.div(props => {
    return {
        position:'relative',
        top:'200px',left:'10%',bottom:'200px',
        width:'90%',
    }
})
export const LoadMorePokemons = glamorous.button(props => {
    return {
        margin:'5% 0 0 37.5%',
        background: 'white',
        border: '1px solid red',
        borderRadius:'50px',
        outline:'none',
        cursor: 'pointer',
        height:'50px', width:'200px',        
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        color:'red',
        transition:'.6s',

        ':hover': {
            color:'white',
            background:'red'
        }
    }
})