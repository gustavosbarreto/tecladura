window.Keyboards = window.Keyboards || {};

window.Keyboards['pt_BR'] = {
    shift: [ 'dead_grave', 'dead_circumflex', 'plus', 'numbersign', 'ampersand', 'colon', 'percent', 'dollar', 'exclam', 'at', 'question' ],

    mainLayout: [
        [
            { label: 'q' }, { label: 'w' }, { label: 'e', alt: { 'é': 'dead_acute', 'ê': 'dead_circumflex' } },
            { label: 'r' }, { label: 't' }, { label: 'y' }, { label: 'u', alt: { 'ú': 'dead_acute' } },
            { label: 'i', alt: { 'í': 'dead_acute' } },
            { label: 'o', alt: { 'ó': 'dead_acute', 'õ': 'dead_tilde', 'ô': 'dead_circumflex' } }, { label: 'p' }
        ],

        [
            { label: 'a', alt: { 'á': 'dead_acute', 'à': 'dead_grave', 'ã': 'dead_tilde' } }, { label: 's' }, { label: 'd' }, { label: 'f' }, { label: 'g' },
            { label: 'h' }, { label: 'j' }, { label: 'k' }, { label: 'l' }, { label: 'ç', code: 'ccedilla' }
        ],

        [
            { label: '⇪', ratio: 1.5, code: 'Caps_Lock' },
            { label: 'z' }, { label: 'x' }, { label: 'c' }, { label: 'v' },
            { label: 'b' }, { label: 'n' }, { label: 'm' },
            { label: '⌫', ratio: 1.5, code: 'BackSpace' }
        ],

        [
            { label: '?123', isLayoutSwitcher: true, layout: 'alternativeLayout' },
            { label: '&nbsp', ratio: 7, code: 'space' },
            { label: '↵', ratio: 2, code: 'Return' }
        ]
    ],

    alternativeLayout: [
        [
            { label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }, { label: '6' }, { label: '7' }, { label: '8' }, { label: '9' }, { label: '0' }
        ],


        [
            { label: '-', code: 'minus' }, { label: '+', code: 'plus' }, { label: '=', code: 'equal' },
            { label: '#', code: 'numbersign' }, { label: '/', code: 'slash' }, { label: '&', code: 'ampersand' },
            { label: ':', code: 'colon' }, { label: ';', code: 'semicolon' }, { label: '%', code: 'percent' }, { label: '$', code: 'dollar' }
        ],


        [
            { label: 'ABC', isLayoutSwitcher: true, layout: 'mainLayout', ratio: 5 }, { label: '?', code: 'question' },
            { label: '.', code: 'period' }, { label: ',', code: 'comma' }, { label: '@', code: 'at' }, { label: '!', code: 'exclam' }
        ]
    ]
};
