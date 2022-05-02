import React from 'react';
import './App.css';
import Button from './conponenten/Button';
import Product from "./conponenten/Product";

import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    consoleDescription={'To the collection'}
                    description={'to the collection'}
                /><Button
                    consoleDescription={'To the shop'}
                    description={'shop all bags'}
                /><Button
                    consoleDescription={'Go pre-order'}
                    description={'pre-order'}
                />
            </nav>
            <main>
                <Product
                status={'Besteler'}
                photo={bag_1}
                nameBag={'The handy bag'}
                price={400}
                />
                <Product
                status={'Besteler'}
                photo={bag_2}
                nameBag={'The stylish bag'}
                price={250}
                />  <Product
                status={'New collection'}
                photo={bag_3}
                nameBag={'The simple bag'}
                price={300}
                />  <Product
                status={'New collection'}
                photo={bag_4}
                nameBag={'The trendy bag'}
                price={150}
                />

            </main>
            <footer>
                <section>
                    <img/>
                    <h2></h2>
                    <p></p>
                </section>
            </footer>

        </>

    );
}

export default App;



