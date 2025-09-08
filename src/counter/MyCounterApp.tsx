import { useCounter } from './hooks/useCounter'

export const MyCounterApp = () => {

    const {counter} = useCounter()
    
    return (
        <div
            style={{ display: 'flex' }}>
            <h1>Count {counter}</h1>

            <div className=""></div>
        </div>
    )
}
