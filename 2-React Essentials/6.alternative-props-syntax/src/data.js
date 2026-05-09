import componentsImg from './assets/hero.png';
import propsImg from './assets/vite.svg';
import jsxImg from './assets/hero.png';
import stateImg from './assets/react.svg';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description:
        'The core UI building block - compose the user interface by combining multiple components.'
    },
    {
        image: jsxImg,
        title: 'jsx',
        description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: propsImg,
        title: 'props',
        description:
        'Make components configurable (and therefore reusable) by passing input data to time.'
    },
    {
        image: stateImg,
        title: 'state',
        description:
        'React-managed data which when changed, causes the compound to render and the UI to update.'
    }
];