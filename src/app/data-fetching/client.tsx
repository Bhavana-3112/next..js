'use client'
import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function ClientUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-10 text-xl">Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Fetched Users (Client Component)</h1>
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
