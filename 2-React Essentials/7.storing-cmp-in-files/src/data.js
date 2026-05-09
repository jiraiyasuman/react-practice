import componentsImg from './assets/vite.svg';
import propsImg from './assets/react.svg';
import jsxImg from './assets/hero.png';
import stateImg from './assets/react.svg';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description:
            'The core UI building block-compose the user interface by combining multiple components'
    },
    {
        image : jsxImg,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered'
    },
    {
        image : propsImg,
        title : 'Props',
        description:
        'The components configurable (and therefore reusable) by passing input data to them'
    },
    {
        image: stateImg,
        title: 'State',
        description:
        'React-managed data when changed, causes the componenet to re-render and the UI to update'
    }
]