import { Suspense } from 'react'

// Static part - fast and pre-rendered
function StaticPart() {
  return (
    <p className="text-green-700">
      The static part will be rendered immediately.
    </p>
  )
}

// Dynamic part - fetched during runtime (simulated with delay)
async function DynamicPart() {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 3000))

  // Simulated data instead of real API
  const fakeData = {
    entries: 1234,
  }

  return (
    <p className="text-blue-700">
       Dynamic Part Loaded: {fakeData.entries} entries found.
    </p>
  )
}

export default function PartialRenderingPage() {
  return (
    <div className="p-10 space-y-4">
      <h1 className="text-2xl font-bold">Partial Prerendering</h1>

      <StaticPart />

      <Suspense fallback={<p className="text-gray-500">Loading dynamic content...</p>}>
        <DynamicPart />
      </Suspense>
    </div>
  )
}
