import { useState } from "react"
import type {MenuItem, OrderItem} from '../types'


export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])    // uso de generic "<>" de TypeScript. Especifica el tipo.
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if (itemExist) {
            const updatedOrder = order.map( orderItem => orderItem.id === itemExist.id ? 
                {...orderItem, quantity: itemExist.quantity + 1} :
                orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
}