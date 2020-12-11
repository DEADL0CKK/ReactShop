import {useState, useEffect} from 'react'

const shuffle = a => {
    for(let i = a.length -1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1))
        let x = a[i]
        a[i] = a[j]
        a[j] = x
    }

    return a
}

const useFetch = url => {
    const[state, setState] = useState({
        items: [],
        loading: true,
    })

    useEffect(() => {
        (async () => {
            const res = await fetch(url)
            const data = await res.json()
            if (res.ok){
                setState({
                    items:shuffle(data),
                    loading: false,
                })
            }else {
                console.log(JSON.stringify(data))
                setState({
                    items:[],
                    loading: false
                })
            }
        })()
    }, [url])

    return[
        state.loading,
        state.items
    ]
}

export default useFetch