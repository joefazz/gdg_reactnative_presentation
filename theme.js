// example theme.js
import theme from 'mdx-deck/themes';
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';

export default {
    // extends the default theme
    ...theme,
    // add a custom font
    font: 'Fira Code, sans-serif',
    p: {
        fontSize: '32px'
    },
    ul: {
        listStyle: 'square'
    },
    colors: {
        text: 'black',
        background: '#F7E652',
        link: '#5C0899'
    },
    prism: {
        style: okaidia
    }
};
