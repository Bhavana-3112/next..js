// app/invoices/page.tsx
'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { invoices } from './data';

//only 3 items will be displayed for the page
const ITEMS_PER_PAGE = 3;

export default function InvoicesPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const search = searchParams.get('search') || '';
  const page = parseInt(searchParams.get('page') || '1');

  const [input, setInput] = useState(search);

  // Filter invoices based on search input
  const filtered = invoices.filter((invoice) =>
    invoice.customer.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // Handle Search Submit
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search', input);
    params.set('page', '1'); // Reset to first page on search
    router.push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Invoices</h1>

      <div className="mb-4 space-x-2">
        <input
          className="border p-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search customer..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <ul className="space-y-2">
        {paginated.map((inv) => (
          <li key={inv.id} className="border p-2 rounded bg-white shadow">
            {inv.customer}
          </li>
        ))}
      </ul>

      <div className="mt-4 space-x-2">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page * ITEMS_PER_PAGE >= filtered.length}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
