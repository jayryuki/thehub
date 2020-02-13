import React from 'react';
{/* 
.AutoCompleteText{
    width: 100%;
    border: 1px solid grey;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1), 0 2px 4px 1px rgba(0,0,0,.18);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.73);
}
.AutoCompleteText input{
    width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.73);
    padding: 10px 5px;
    box-sizing: border-box;
    outline: none;
}
.AutoCompleteText ul{
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid grey;
}
.AutoCompleteText ul::before{
    content: "";
}
.AutoCompleteText li{
    padding: 10px 5px;
    cursor: pointer;
}
.AutoCompleteText li:hover {
    text-decoration: underline;
    background-color: rgba(128, 128, 128, 0.20);
}
*/}

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