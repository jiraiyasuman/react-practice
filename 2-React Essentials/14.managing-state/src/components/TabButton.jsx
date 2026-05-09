export default function TabButton({children, onSelect}){
    console.log('TABBUTTON COMPONENT EXECUTION');
    return (
        <li>
            <button onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}