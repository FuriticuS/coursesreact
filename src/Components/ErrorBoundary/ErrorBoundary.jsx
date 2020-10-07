import React, {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // отлавливание ошибок
    componentDidCatch(error, info) {
        this.state({
            hasError: true
        })
    }

    render() {
        return (
            this.state.hasError ? <h1>Ошибка</h1> : this.props.children
        )
    }
}

export default ErrorBoundary;
