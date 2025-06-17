//streaming-->Streaming allows you to send data to the client as it's being generated, rather than waiting for the entire response to be ready.

// This is a Server Component
// we use....>When fetching data takes time.

//When a section of the page (like a graph, profile info, or a dashboard widget) loads slower than the rest.

// app/streaming/page.tsx
import { Suspense } from 'react'

function SlowComponent() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(<p className="text-green-600"> This part loaded after delay!</p>);
    }, 3000);
  });
}

export default function StreamingPage() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold"> Streaming Page</h1>

      <Suspense fallback={<p className="text-gray-500"> Loading content...</p>}>
        {/* Simulating a slow part */}
        {/* @ts-expect-error Async Server Component */}
        <SlowComponent />
      </Suspense>
    </div>
  );
}
