import React from 'react';
{/* GOT TO FIX CSS, MAKE WIDTH 100% */}

export default class AutoCompleteText extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            'MATH 20A',
            'MATH 20B',
            'MATH 20C',
            'CSE 8A',
            'CSE 8B',
        ];
        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
            this.setState(() => ({suggestions}));
        }
        this.setState(() => ({suggestions, text: value}));
    }

    renderSuggestions() {
        const{suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value, 
            suggestions: [],
        }))
    }

    render() {
        const { text } = this.state;
        return (
            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged} type="text" />
                {this.renderSuggestions()}
            </div>
        )
    }
}