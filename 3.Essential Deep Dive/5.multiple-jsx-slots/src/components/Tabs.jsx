import App from "../App.jsx";

export default function Tabs({children, buttons}){
   return (
     <div>
         <menu>{buttons}</menu>
         {children}
     </div>
   );
}