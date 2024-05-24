import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 mt-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            { menuItems.map(item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded space-y-10">
            <OrderContent 
              order={order}
              removeItem={removeItem}
            />
        </div>
      </main>
    </>
  )
}

export default App

// className="space-y-3" se aplica sobre cada hijo por herencia de clases.