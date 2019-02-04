import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends  React.Component {

    //exactly should have contextType
    static contextType = LanguageContext;

    render(){
        const text = this.context === 'english' ? 'Submit' : 'पेश';
        return (
            <button className="ui button primary">
                {text}
            </button>
        );
    }
}
export default Button;
