import React, { useState } from 'react'

export default function App(){
  const [cart, setCart] = useState([])

  const products = [
    { id: 1, title: 'CUDA GPU for ML', price: 89999, desc: 'High-performance GPU for training models', img: 'https://via.placeholder.com/400x240?text=GPU' },
    { id: 2, title: 'ML Dataset Pack', price: 1499, desc: 'Curated datasets for computer vision and NLP', img: 'https://via.placeholder.com/400x240?text=Datasets' },
    { id: 3, title: 'Deep Learning Course', price: 4999, desc: 'Comprehensive course on neural networks', img: 'https://via.placeholder.com/400x240?text=Course' },
    { id: 4, title: 'Research Paper Bundle', price: 999, desc: 'Seminal AI/ML papers summarized', img: 'https://via.placeholder.com/400x240?text=Papers' }
  ]

  function addToCart(p){
    setCart(c => {
      const ex = c.find(it => it.id === p.id)
      if(ex) return c.map(it => it.id === p.id ? {...it, qty: it.qty+1} : it)
      return [...c, {...p, qty:1}]
    })
  }

  function changeQty(id, qty){
    if(qty < 1) return
    setCart(c => c.map(it => it.id === id ? {...it, qty} : it))
  }

  function removeFromCart(id){
    setCart(c => c.filter(it => it.id !== id))
  }

  const subtotal = cart.reduce((s, it) => s + it.price * it.qty, 0)

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-md w-12 h-12 bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">KS</div>
            <div>
              <h1 className="text-lg font-semibold">Kunal Singh</h1>
              <p className="text-xs text-slate-500">I'm Kunal Singh, an Indian IT student exploring Artificial Intelligence and Machine Learning.</p>
            </div>
          </div>

          <nav className="flex items-center gap-4">
            <button className="px-3 py-1 rounded-md text-sm hover:bg-slate-100">Home</button>
            <button className="px-3 py-1 rounded-md text-sm hover:bg-slate-100">Shop</button>
            <button className="px-3 py-1 rounded-md text-sm hover:bg-slate-100">About</button>
            <div className="relative">
              <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Cart ({cart.length})</button>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-3">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">AI & ML Resources</h2>
                <p className="text-sm text-slate-500">Curated tools, courses, and datasets for learners and researchers.</p>
              </div>
              <div className="hidden sm:block">
                <button className="px-4 py-2 border rounded-md text-sm">Filter</button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(p => (
                <article key={p.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                  <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold">₹{p.price}</span>
                      </div>
                      <div>
                        <button onClick={() => addToCart(p)} className="px-3 py-1 bg-indigo-600 text-white rounded-md text-sm">Add</button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <aside className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-4">Your Cart</h3>

            {cart.length === 0 ? (
              <div className="text-sm text-slate-500">Cart is empty. Add some items.</div>
            ) : (
              <div className="space-y-4">
                {cart.map(it => (
                  <div key={it.id} className="flex items-center gap-3">
                    <img src={it.img} alt={it.title} className="w-16 h-12 object-cover rounded-md" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{it.title}</div>
                      <div className="text-xs text-slate-500">₹{it.price} x {it.qty}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <input type="number" value={it.qty} min={1} onChange={(e) => changeQty(it.id, Number(e.target.value))} className="w-16 px-2 py-1 border rounded-md text-sm" />
                        <button onClick={() => removeFromCart(it.id)} className="text-red-500 text-sm">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm text-slate-700">
                    <div>Subtotal</div>
                    <div className="font-semibold">₹{subtotal}</div>
                  </div>

                  <button className="mt-4 w-full px-3 py-2 bg-green-600 text-white rounded-md">Checkout</button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <p className="mb-2">This is supposedly only a working model unless.</p>
          </div>
        </aside>
      </main>

      <footer className="bg-white border-t mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-slate-600">
          <div>© {new Date().getFullYear()} Kunal Singh</div>
          <div>Built for Artificial Intelligence & Machine Learning showcase</div>
        </div>
      </footer>
    </div>
  )
}
