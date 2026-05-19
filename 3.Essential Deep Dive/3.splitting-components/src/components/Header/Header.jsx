import reactImg from '../../assets/react.svg';
import './Header.css';

const reactDescrptions = ['Fundamental','Crucial','Core'];

function genRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}

export default function Header(){
    const description = reactDescrptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt='Stylized Atom' />
            <h1>React Essentials</h1>
            <p>
                {description}
            </p>
        </header>
    );
}