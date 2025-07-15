import React, { useEffect, useMemo, useRef, useState } from 'react'

function ReactHooks() {

    // useState // 

    const [count, setCount] = useState(0)
    const [data, setData] = useState(null)
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const [num, setNum] = useState(0)
    const inputref = useRef(null)

    const handleRef = (event) =>{
        inputref.current.focus(event)
        console.log(inputref.current.focus, 'ref the element')
    }

    useEffect(() => {
        document.title = `You Clicked ${count}`
    }, [count])

    const handleCount = () => {
        setCount((prev) => prev + 1)
    }

    const handleDeCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1)
        } else {
            setCount(0)
        }
    }

    const handleReset = () => {
        setCount(0)
    }

    // end //

    // useEffevt //

    const getProduct = async () => {

        setLoading(true)

        try {

            const response = await fetch('https://dummyjson.com/products')
            const datares = response.json()
            setProduct(datares)
            console.log(datares, 'producat awaited display the data')

        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getProduct()
    }, [])

    //      useEffect(()=>{
    //     setLoading(true)
    //     fetch('https://dummyjson.com/products').then((res) => res.json)
    //     .then((response)=>{
    //         setData(response)
    //         console.log(response, 'get the product data')
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => (
            res.json()
        )).then((data) =>
            setData(data),
            console.log(data, 'data received')
        )
    }, [])

    // end //

    // usMmemo //

    function ExpectionCalculation({ num }) {
        const squared = useMemo(() => {
            console.log('...colculation useMemo')
            return num * num
        }, [num])
        return (
            <h2 className='text-3xl font-bold text-red-800 text-center mb-3'>
                Squared useMemo: {squared}
            </h2>
        )
    }

    const apiUrl = useMemo(() => {
        console.log('genrating api url')
        return `https://dummyjson.com/products?limit=${num}`
    }, [num])

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            try {
                const respro = await fetch(apiUrl)
                const datapro = respro.json()
                setProduct(datapro.products)
                console.log(datapro.products, 'usememo data api call')
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [apiUrl])


    // end //



    return (
        <section className='bg-gradient-to-tr from-lime-700 to-lime-500 p-6'>
            <main>
                <article className='container ms-auto'>

                    <div className='flex items-center justify-center my-3'>
                        <h1 className='text-4xl sm:text-sm md:text-xl lg:text-4xl mb-3 font-bold text-center text-slate-50'>
                            Welcome To The ReactHooks
                        </h1>
                    </div>

                    <div className='grid grid-cols-4 lg:grid-cols-4 md:grid-cols-4 my-1 gap-3 mb-5'>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useState</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>2.useEffect</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useMemo</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useCallback</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useRef</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useContext</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useReducer</li>
                            </ul>
                        </div>
                        <div className='border-1 dark:border-gray-700 border-slate-600 px-2 py-2 
                        shadow-lg rounded bg-green-300'>
                            <ul className='ps-0 space-y-1 list-disc list-inside text-center'>
                                <li className='text-3xl font-bold text-green-800'>useLayoutEffect</li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-3'>

                    </div>

                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                        {/* usestate */}
                        <div className='bg-white rounded-md shadow-lg px-3 py-3'>
                            <div className='text-center'>
                                <h2 className='text-3xl text-orange-800 font-bold'>useState</h2>
                                <p className='text-sm text-slate-800 mb-2'>useState state values updated method
                                    and it Returns a stateful values and function to updated
                                </p>
                                <h3 className='text-2xl font-semibold mb-3'>Count: {count}</h3>
                                <div className=' flex items-center justify-center gap-3'>
                                    <button className='bg-blue-600 text-slate-50 px-3 py-2 rounded shadow-lg'
                                        onClick={handleCount}>
                                        Increment
                                    </button>
                                    <button className='bg-orange-800 text-slate-50 px-3 py-2 rounded shadow-lg'
                                        onClick={handleDeCount}>
                                        Decrement
                                    </button>
                                    <button className='bg-green-700 text-slate-100 rounded shadow-lg px-3 py-2'
                                        onClick={handleReset}>Reset</button>
                                </div>
                            </div>
                        </div>
                        {/* end */}

                        {/* useEffect */}
                        <div className='bg-white shadow-lg px-3 py-3 rounded text-center'>
                            <h2 className='text-3xl text-orange-800 font-bold'>useEffect</h2>
                            {JSON.stringify(data, null, 2)}
                        </div>
                        {/* end */}

                        {/* useMemo */}
                        <div className='bg-white shadow-lg px-3 py-3 rounded text-center'>
                            <ExpectionCalculation num={num} />
                            <button onClick={() => setNum(num + 1)}
                                className='bg-green-800 text-slate-50 px-2 py-2 rounded shadow-lg'>Increase Num</button>


                            {/* usememo-api-call */}
                            <div>
                               {loading ? (
                                    <p>...Loading</p>
                                ) : (
                                    <div>
                                        {product?.length > 0 ? (
                                            product.slice(0, 5).map((item, index) => (
                                                <p key={index.id}>{item.title}</p>
                                            ))
                                        ) : (
                                            <p>No Data Found</p>
                                        )}
                                    </div>
                                )}


                            </div>

                            {/* end */}

                        </div>
                        {/* end */}

                        {/* useRef */}
                        
                        <div className='bg-white shadow-lg rounded px-3 py-3 text-center'>
                            <h2 className='text-3xl text-orange-800 font-bold'>useRef</h2>
                            <p className='text-sm text-slate-800 mb-2'>useRef is reference to the react element to interact with react component
                                and it will way to provide node dom only itself.
                            </p>

                            <div className='text-left w-full'>
                                <label for="ref" className='block text-lg mb-2 text-gray-900'>useRef</label>
                                <input type="text" id='ref' 
                                className='border bottom-2 border-slate-800 px-2 py-2 rounded shadow-lg w-full 
                                focus:no-underline focus-visible:no-underline mb-3' 
                                placeholder='useRef-element' ref={inputref} />
                                <button className='px-2 py-2 bg-lime-800 text-slate-50 rounded shadow-lg w-full'
                                onClick={handleRef}>
                                    useref
                                </button>
                            </div>

                        </div>

                        {/* end */}

                    </div>

                </article>
            </main>
        </section>
    )

}

export default ReactHooks