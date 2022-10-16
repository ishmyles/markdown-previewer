import React, { Component } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import '../assets/styles/editor.css';

marked.setOptions({
    gfm: true,
    breaks: true
});

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            markdownMode: true,
            markdownInput: '',
            isMobileOrTablet: window.matchMedia("(max-width: 800px)").matches
        }
        this.changeMode = this.changeMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        const handler = e => this.setState({isMobileOrTablet: e.matches});
        window.matchMedia("(max-width: 800px)").addEventListener('change', handler);
        this.setState({
            markdownInput:
            `![MarkedUp Logo](https://i.ibb.co/JdG0Rwg/markedup-logo-xs.png)
            \n<p style="font-size: 12px;">This app was created by <a href="https://github.com/ishmyles">ishmyles</a> - check out the github repo for this project <a href="https://github.com/ishmyles/markdown-previewer">here</a>.<p>
            \n# Welcome to MarkedUp\nYour simplified Markdown Editor, compatible for both mobile & desktop. It's lightweight, minimal & very easy to use.\nType anything you want - let's get started!
            \n## Getting Started\nDelete everything in the **MARKDOWN** section (left on the side) to remove all this text.
            \n## Basic Syntax\nBelow are some examples, click [here](https://www.markdownguide.org/basic-syntax/) for full detailed information on markdown syntax.\n*MarkedUp also supports HTML input, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) for more information & basic syntax.*
            \n### Headings\nBelow are examples of headings:
            \n# Heading (Level 1)\n## Heading (Level 2)\n### Heading (Level 3)\n#### Heading (Level 4)\n##### Heading (Level 5)\n###### Heading (Level 6)
            \n### Paragraphs\nJust type normally to create a paragraph.
            \n### Line Breaks\nCreate a new line by pressing 'Enter' (or 'return') or just use \`<br>\`.\nRead [documentation](https://www.markdownguide.org/basic-syntax/) for more info.
            \n### Emphasis
            \n#### Bold Text\n- **This text is bold**\n- __This is also bold__
            \n#### Italic Text\n- *This text is italic*\n- _This is also italic_
            \n### Code block
            \n\`\`\`\nText can be written inside this code block\n\`\`\`
            \n### Blockquote\n   > This is a blockquote
            \n### Lists\nThe numbers do not have to be written in order:\n1. First item\n2. Second item\n3. Third item\n   1. Indented item
            \nThis also counts as a list \n- Item one\n- Item two\n- Item three\n   - Sub item
            \n### Images\n\`\`\`\n![Broken Link Description](www.linkToImg.com/imageFile.png)\n\`\`\`
            \n### Links\n\`\`\`\n[Clickable Text](www.example.com)\n\`\`\``
        });
    }

    changeMode() {
        this.setState((state, props) => ({
            markdownMode: !state.markdownMode
        }))
    }

    handleInputChange(e) {
        this.setState({
            markdownInput: e.target.value
        })
    }
    
    render() { 
        const darkStyling = {
            backgroundColor: "#20232a",
            color: "white"
        };

        const lightStyling = {
            backgroundColor: "white",
            color: "black"
        };

        let sectionClass = 'section border-bottom-';
        sectionClass += (this.props.darkTheme) ? 'dark' : 'light';

        let sectionHeading = 'section-heading text-';
        sectionHeading += (this.props.darkTheme) ? 'white' : 'grey';

        let markDownClass = 'md-right-'
        markDownClass += (this.props.darkTheme) ? 'dark' : 'light';

        return (
            <main style={(this.props.darkTheme) ? darkStyling : lightStyling}>
                <div id='markdown' className={markDownClass} style={(this.state.isMobileOrTablet && this.state.markdownMode) ? { display: "block" } : 
                    (!this.state.isMobileOrTablet) ? { display: "block" } : { display: "none" }}>
                    <div className={sectionClass}>
                       <p className={sectionHeading}>MARKDOWN</p>
                       {this.state.isMobileOrTablet && <i className="btn-icon bi bi-eye-fill" onClick={this.changeMode}></i>}
                    </div>
                    <textarea name="" id="editor" spellCheck="false" value={this.state.markdownInput} onChange={this.handleInputChange}></textarea>
                </div>
                <div id='render' style={(this.state.isMobileOrTablet && !this.state.markdownMode) ? { display: "block" } : 
                    (!this.state.isMobileOrTablet) ? { display: "block" } : { display: "none" }}>
                    <div className={sectionClass}>
                       <p className={sectionHeading}>PREVIEW</p>
                       {this.state.isMobileOrTablet && <i className="btn-icon bi bi-pencil-fill" onClick={this.changeMode}></i>}
                    </div>
                    <div id='preview' dangerouslySetInnerHTML={{ 
                            __html: DOMPurify.sanitize(marked.parse(this.state.markdownInput))
                        }}>
                    </div>
                </div>
            </main>
        );
    }
}
 
export default Editor;

/*
`![MarkedUp Logo](https://i.ibb.co/JdG0Rwg/markedup-logo-xs.png)
            \n# Welcome to MarkedUp\nYour simplified Markdown Editor built with React JS\nCheck out the github repo [here](https://github.com/ishmyles/markdown-previewer).\nCreate anything you want - let's get started!
            \n## Getting Started\nDelete everything on the **MARKDOWN** section (left side) to remove all this text.
            \n## Basic Syntax\nBelow are some examples, click [here](https://www.markdownguide.org/basic-syntax/) for full detailed information on markdown syntax.\nMarkedUp also supports HTML input, see [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML) for more information & basic syntax.
            \n### Headings\nBelow are examples of headings:
            \n# Heading (Level 1)\n## Heading (Level 2)\n### Heading (Level 3)\n#### Heading (Level 4)\n##### Heading (Level 5)\n###### Heading (Level 6)
            \n### Paragraphs\nJust type normally to create a paragraph.
            \n### Line Breaks\nCreate a new line by pressing 'Enter' (or 'return') - *read [doccumentation](https://www.markdownguide.org/basic-syntax/) for more info.*
            \n### Emphasis
            \n#### Bold Text\n**This text is bold**\n__This is also bold__
            \n#### Italic Text\n*This text is italic*\n_This is also italic_
            \n### Code block
            \n\`\`\`\nText can be written inside this code block\n\`\`\`
            \n### Blockquote\n   > This is a blockquote
            \n### Lists\nThe numbers do not have to be written in order:\n1. First item\n2. Second item\n3. Third item\n   1. Indented item
            \nThis also counts as a list \n- Item one\n- Item two\n- Item three\n   - Sub item
            \n### Images\n\`\`\`\n![Broken Link Description](www.linkToImg.com/imageFile.png)\n\`\`\`
            \n### Links\n\`\`\`\n[Clickable Text](www.example.com)\n\`\`\``
*/