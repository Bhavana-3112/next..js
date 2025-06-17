// app/products/page.tsx
'use client';

//import { useSession } from "next-auth/react";
import { useState } from "react";

export default function ProductPage() {
  //const { data: session } = useSession();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleAdd = async () => {
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ name, price }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (res.status === 201) alert("Product added");
    else alert("You must be logged in!");
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Product Page</h1>
 
        <>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 m-2"
          />
          <input
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border p-2 m-2"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </button>
        </>
    
    </div>
  );
}
