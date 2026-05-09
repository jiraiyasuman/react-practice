import componentsImg from './assets/react.svg';
import propsImg from './assets/vite.svg';
import jsxImg from './assets/react.svg';
import stateImg from './assets/hero.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description:
        'The core UI building block - compose the use interface by combining multiple components.'
    },
    {
        image: jsxImg,
        title: 'jsx',
        description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image:propsImg,
        title: 'Props',
        description:
        'Make components and configurable ( and therefore reusable) by passing input data to time'
    },
    {
        image : stateImg,
        title: 'State',
        description:
        'React-managed data which when changed, caused the component to re-render & the UI to update.'
    }
]