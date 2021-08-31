import React, { Component } from 'react';


class MyNewComponent extends Component {
    render() {
        return <div>
            <h1 class="my-class">Hello Dojo</h1>
            <h2>Things I need to do:</h2>
            <ul>
                <li>Learn JSX and React</li>
                <li>Learn to connect App.js to logic</li>
                <li>Learn routing within express and react</li>
                <li>Have fun!</li>
                <li>{this.props.someText}</li>
            </ul>
        </div>
    }
}

export default MyNewComponent;