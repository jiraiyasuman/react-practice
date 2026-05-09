import componentsImg from './assets/react.svg';
import propsImg from './assets/react.svg';
import jsxImg from './assets/vite.svg';
import stateImg from './assets/hero.png';

export const CORE_CONCEPTS = [
    {
        image: componentsImg,
        title: 'Components',
        description:
            'The core UI building block-compose the user interface by combining multiple components'
    },
    {
        image: jsxImg,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: propsImg,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing to them.'
    },
    {
        image: stateImg,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.'
    }
]