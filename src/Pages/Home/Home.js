import React, { useCallback, useEffect, useRef, useState } from 'react'
import Greeting from '../../Component/Greeting/Greeting'
import axios from 'axios';
import Counter from '../../Counter';

// --------------------
// SHARED STYLES
// --------------------
const style = {
    letterContainer: {
        overflow: 'auto',
        marginBottom: '10px'
    },
    letter: {
        float: 'left',
        padding: '10px 10px',
        background: '#c9e4ed',
        borderRadius: '5px',
        marginRight: '5px',
        cursor: 'pointer',
    },
};

// --------------------
// TILE COMPONENT
// --------------------
function Tile({ letter, onClick }) {
    return (
        <button style={ style.letter } onClick={ onClick }>
            { letter }
        </button>
    );
}

// --------------------
// COUNTER COMPONENT
// --------------------
const CounterComp = () => {
    const [count, setCount] = useState(0);

    const saveCount = useCallback(async (value) => {
        console.log(value, 'saving count');
    });

    useEffect(() => {
        // document.title = `You clicked: ${count} times count`;
        saveCount(count);
    }, [count, saveCount]);

    return (
        <>
            <div className='flex items-center justify-center flex-col'>
                <h2 className='text-2xl font-bold text-violet-900'>
                    You Clicked: { count } times
                </h2>
                <div className='flex'>
                    <button className='border rounded px-3 py-2 bg-blue-900 text-slate-100 me-3'
                        onClick={ () => setCount(prev => prev + 1) }>
                        Increment
                    </button>
                    <button className='border rounded px-3 py-2 text-slate-50 bg-red-800'
                        onClick={ () => { if(count > 0) setCount(prev => prev - 1) } }>
                        Decrement
                    </button>
                </div>
            </div>
        </>
    );
};

// --------------------
// MAIN HOME COMPONENT
// --------------------
function Home({ name }) {

    const [count, setCount] = useState(0);
    const mountRef = useRef(true);

    // mouse position
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // mount detection
    useEffect(() => {
        if(mountRef.current) {
            mountRef.current = false;
        }
    }, []);

    // -------------------------------------------
    // ALPHABET TILE CHALLENGE (INSIDE HOME)
    // __define-ocg__
    // -------------------------------------------
    const [output, setOutput] = useState("");

    let varOcg = "react-letter-tiles";     // required variable
    let varFiltersCg = "tracking-consecutive"; // required variable

    const handleTileClick = (letter) => {
        let newString = output + letter;

        // Replace every 3 identical letters with "_"
        newString = newString.replace(/([a-z])\1\1/g, "_");

        setOutput(newString);
    };

    const alphabet = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
    );

    return (
        <section className='bg-gradient-to-tr from-violet-800 to-violet-500 p-5'>
            <article className='container ms-auto'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-2xl lg:text-2xl font-bold text-slate-100 sm:text-sm'>
                        React Hooks Examples
                    </h1>
                </div>

                <div className='grid grid-cols-3 gap-4 mt-4 lg:grid-cols-3 md:grid-cols-2'>

                    {/* Hooks Cards */ }
                    <div className='bg-white rounded shadow-lg px-3 py-2'>
                        <h3 className='text-violet-900 font-bold text-4xl text-center'>
                            React Hooks
                        </h3>
                        <div className='flex items-center justify-between gap-3'>
                            <div>
                                <ul className='list-decimal list-inside text-gray-500 pl-5'>
                                    <li className="flex items-center"><span>useState</span></li>
                                    <li className="flex items-center"><span>useEffect</span></li>
                                    <li className="flex items-center"><span>useRef</span></li>
                                    <li className="flex items-center"><span>useReducer</span></li>
                                </ul>
                            </div>
                            <div>
                                <ul className='list-decimal list-inside text-gray-700 pl-5'>
                                    <li className="flex items-center"><span>useMemo</span></li>
                                    <li className="flex items-center"><span>useCallback</span></li>
                                    <li className="flex items-center"><span>useContext</span></li>
                                    <li className="flex items-center"><span>useLayoutEffect</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Counter */ }
                    <div className='bg-white shadow-lg rounded px-3 py-2'>
                        <Counter />
                    </div>

                    {/* useRef Example */ }
                    <div className='bg-white shadow-lg rounded px-3 py-2'>
                        <h3 className='font-bold text-center text-3xl text-violet-900'>
                            useRef Hook
                        </h3>
                        <div>Some JSX</div>
                        <CounterComp />
                    </div>

                </div>

                <div className='custom-card'>
                    <div className='new-card'>
                        <h2>Welcome Render Props</h2>
                        <h3>Mouse Position</h3>
                        <p>X: { pos.x } : Y: { pos.y }</p>
                    </div>

                    <div className='new-card'>
                        <h2>Alphabet Tiles Challenge</h2>
                        <aside style={ style.letterContainer } id="letterContainer">
                            { alphabet.map((ltr) => (
                                <Tile
                                    key={ ltr }
                                    letter={ ltr }
                                    onClick={ () => handleTileClick(ltr) }
                                />
                            )) }
                        </aside>

                        <div id="outputString" className='mt-3 text-white text-xl'>
                            { output }
                        </div>
                    </div>
                </div>

            </article>
        </section>
    );
}

export default Home;
