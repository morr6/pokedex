import glamorous from "glamorous";

export const MainBox = glamorous.div(props => {
    return { 
        width:'100%', height:'100%',
        background:'white',
        marginTop:'25%',
        overflow:'hidden',
        paddingBottom: '20%'
    }
})

export const PokemonsContainer = glamorous.div(props => {
    return {
        position:'relative',
        top:'150px',left:'10%',bottom:'200px',
        width:'90%',
    }
})
export const LoadMorePokemons = glamorous.button(props => {
    return {
        margin:'5% 0 0 37.5%',
        background: 'white',
        border: '1px solid green',
        borderRadius:'50px',
        outline:'none',
        cursor: 'pointer',
        height:'50px', width:'200px',        
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        color:'green',
        transition:'.6s',

        ':hover': {
            color:'white',
            background:'green'
        },
        ':active': {
            transform:'scale(1.3)'
        }
    }
})
export const SortingButtonsBox = glamorous.div(props => {
    return {
        position:'absolute',
        left: '60%',
        top: '-100'
    }
})
export const SortingButton = glamorous.button(props => {
    return {
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        fontSize:'20px',
        borderRadius:'50px',
        background:'white',
        color:'red',
        border:'1px solid red',
        height:'50px',
        width:'250px',
        float:'left',
        margin:'0 50px 0 0',
        transition:'.6s',
        cursor:'pointer',
        outline:'none',

        ':hover': {
            background: 'red',
            color:'white'
        }
    }
})