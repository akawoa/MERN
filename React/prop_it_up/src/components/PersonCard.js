import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        return <div>
            <h1 class="my-class">{this.props.name}</h1>
            <p>{this.props.age}</p>
            <p>{this.props.hair}</p>
        </div>
    }
}

export default PersonCard;