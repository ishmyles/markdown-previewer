import React, { Component } from 'react';
import '../assets/styles/editor.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            markdownMode: true,
            markdownInput: '',
            isMobileOrTablet: window.matchMedia("(max-width: 800px)").matches
        }
        this.changeMode = this.changeMode.bind(this);
    }

    componentDidMount() {
        const handler = e => this.setState({isMobileOrTablet: e.matches});
        window.matchMedia("(max-width: 800px)").addEventListener('change', handler);
    }

    changeMode() {
        this.setState((state, props) => ({
            markdownMode: !state.markdownMode
        }))
    }
    
    render() { 
        const darkStyling = {
            backgroundColor: "#20232a",
            color: "white"
        };

        const lightStyling = {
            backgroundColor: "white",
            color: "black"
        }
        return (
            <main style={(this.props.darkTheme) ? darkStyling : lightStyling}>
                <div id='markdown' style={(this.state.isMobileOrTablet && this.state.markdownMode) ? { display: "block" } : 
                    (!this.state.isMobileOrTablet) ? { display: "block" } : { display: "none" }}>
                    <div className='section'>
                       <p className="section-heading">MARKDOWN</p>
                       {this.state.isMobileOrTablet && <i className="btn-icon bi bi-eye-fill" onClick={this.changeMode}></i>}
                    </div>
                    <textarea name="" id="editor" spellCheck="false"></textarea>
                </div>
                <div id='render' style={(this.state.isMobileOrTablet && !this.state.markdownMode) ? { display: "block" } : 
                    (!this.state.isMobileOrTablet) ? { display: "block" } : { display: "none" }}>
                    <div className='section'>
                       <p className="section-heading">PREVIEW</p>
                       {this.state.isMobileOrTablet && <i className="btn-icon bi bi-pencil-fill" onClick={this.changeMode}></i>}
                    </div>
                    <div id='preview'></div>
                </div>
            </main>
        );
    }
}
 
export default Editor;