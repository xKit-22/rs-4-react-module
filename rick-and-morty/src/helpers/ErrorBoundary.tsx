import {Component, ErrorInfo, ReactNode} from "react";

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {

    constructor(props: { children: ReactNode }) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        alert('Ошибка: ' + error.message)
        console.error('errorInfo: ' + errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h4>Что-то пошло не так</h4>
        }
        return this.props.children;
    }
}