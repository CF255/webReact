import { useEffect, useRef, useState } from 'react'


export default function useNearScreen ({distance = '100px', externalReft, once = true} = {}){
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() =>{
        let observer

        const element = externalReft ? externalReft.current : fromRef.current

        const onChange = (entries, observer) =>{
       
            const el = entries[0]
           if(el.isIntersecting){
            setShow(true)
           once && observer.disconnect()
           }else {
            !once && setShow(false)
           }
        }

        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
            ? IntersectionObserver
            : import ('intersection-observer')
        ).then (() =>{
             observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
           if(element) observer.observe(element)
        })

        

        return()=> observer && observer.disconnect() 
    })

    return {isNearScreen, fromRef}
}