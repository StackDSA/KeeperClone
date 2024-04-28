/* eslint-disable react/prop-types */
function Note(props){
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
        )
}

export default Note