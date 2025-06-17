// This is a Server Component
//It runs on the server, not the browser.
import React from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

async function getUsers(): Promise<User[]> {
  // Simulate data fetching (like from an API)
  await new Promise((res) => setTimeout(res, 1000)); // fake delay
  return [
    { id: 1, name: 'Kookie', email: 'kookie@example.com' },
    { id: 2, name: 'Arya', email: 'arya@example.com' },
    { id: 3, name: 'Zara', email: 'zara@example.com' },
  ];
}

export default async function DataFetchPage() {
  const users = await getUsers();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4 text-black">Fetched Users (Server Component)</h1>
      <ul className="space-y-3">
        {users.map((user) => (
          <li key={user.id} className="border p-4 rounded shadow bg-white">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
// This component fetches data on the server side and renders it