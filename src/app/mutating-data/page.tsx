'use client';

import { useState } from 'react';

type Invoice = {
  id: number;
  customer: string;
};

export default function InvoicePage() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: 1, customer: 'Kookie' },
    { id: 2, customer: 'Arya' },
  ]);
  
//this is used for the add and edit functionality

  const [customerName, setCustomerName] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);

  // Add or Update Invoice
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!customerName.trim()) return;

    if (editingId !== null) {
      // Update
      setInvoices((prev) =>
        prev.map((inv) =>
          inv.id === editingId ? { ...inv, customer: customerName } : inv
        )
      );
      setEditingId(null); // reset edit mode
    } else {
      // Add
      const newInvoice = {
        id: Date.now(),
        customer: customerName,
      };
      setInvoices((prev) => [...prev, newInvoice]);
    }

    setCustomerName('');
  };

  // Handle Edit
  const handleEdit = (invoice: Invoice) => {
    setCustomerName(invoice.customer);
    setEditingId(invoice.id);
  };

  // Handle Delete
  const handleDelete = (id: number) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Invoices List</h1>

      {/* Show invoices */}
      <ul className="space-y-2 mb-6">
        {invoices.map((inv) => (
          <li
            key={inv.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <span>{inv.customer}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(inv)}
                className="bg-pink-500 px-2 py-1 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(inv.id)}
                className="bg-red-500 px-2 py-1 text-white rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add/Edit Form */}
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          className="border px-3 py-1 rounded"
          placeholder="Customer name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
        >
          {editingId ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}
