import React, { Component } from 'react';

class MyClassComponent extends Component {
    static defaultProps = {};

    static propTypes = {};

    render() {
        return (<div onClick={e => {
            console.log('Hello World!')
            console.log(e)
        }}>Class Component</div>)
    }
}

export default MyClassComponent;