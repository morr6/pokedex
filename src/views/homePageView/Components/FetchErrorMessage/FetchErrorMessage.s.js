import glamorous from 'glamorous';

export const ErrorMessageWrapper = glamorous.div(props => {
    return {
        textAlign: 'center',    
        paddingTop: '2%',
        width: '100%'
    }
})

export const Message = glamorous.div(props => {
    return {
        fontSize: '20px'
    }
})
