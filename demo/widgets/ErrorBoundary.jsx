import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: undefined };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        this.setState((state) => {
            return { ...state, error: error };
        });
    }

    render() {
        if (this.state.hasError) {
            return <>
                <div>{this.state.error?.message}</div>
                <div>Line Number {this.state.error?.lineNumber} in {this.state.error?.fileName}</div>
            </>;

        }
        return this.props.children;
    }
}


export { ErrorBoundary }