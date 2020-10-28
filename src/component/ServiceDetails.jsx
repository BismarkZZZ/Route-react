import React from 'react'

export default function ServiceDetails(props) {
    return (
        <div>
            <h2> Service Details: {props.match.params.id} </h2>
            <br />
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis qui cum odit exercitationem eum explicabo officia. Error ex dolorem rem? Explicabo cum tenetur, veritatis a necessitatibus aut cumque provident quis.</p>
        </div>
    )
}
