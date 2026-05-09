export default function TabButton({children,onSelect}){
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button onCLick={onSelect}>
                {children}
            </button>
        </li>
    )
}