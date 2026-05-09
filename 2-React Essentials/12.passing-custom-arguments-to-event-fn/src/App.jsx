import {CORE_CONCEPTS} from "./data.js";
import Header from './components/Header/Header.jsx';
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from './components/TabButton.jsx';

function App(){
  function handleSelect(SelectButton){
    console.log(SelectButton);
  }
  return (
      <div>
        <Header />
        <main>
          <section id='core-concepts'>
            <h1>
              Core Concepts
            </h1>
            <ul>
              <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
                />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} />
            </ul>
          </section>
          <section id='examples'>
            <h1>Examples</h1>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>
                Components
              </TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>
                JSX
              </TabButton>
              <TabButton onSelect={() => handleSelect('props')}>
                Props
              </TabButton>
              <TabButton onSelect={() => handleSelect('state')}>
                State
              </TabButton>
            </menu>
          </section>
        </main>
      </div>
  );
}
export default App;