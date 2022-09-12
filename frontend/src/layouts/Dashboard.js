import React, { Component } from "react";
import SideBar from "../components/Sidebar";
import Content from "../components/Content";


class App extends Component {
    constructor(props) {
        super(props);

        // Moblie first
        this.state = {
            isOpen: false,
            isMobile: true
        };

        this.previousWidth = -1;
    }

    updateWidth() {
        const width = window.innerWidth;
        const widthLimit = 576;
        const isMobile = width <= widthLimit;
        const wasMobile = this.previousWidth <= widthLimit;

        if (isMobile !== wasMobile) {
            this.setState({
                isOpen: !isMobile
            });
        }

        this.previousWidth = width;
    }

    /**
     * Add event listener
     */
    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth.bind(this));
    }

    /**
     * Remove event listener
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth.bind(this));
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div className="dashboard wrapper">
                <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
                <Content toggle={this.toggle} isOpen={this.state.isOpen} />
            </div>
        );
    }
}

export default App;
