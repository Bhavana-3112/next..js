//dyna,ic-->Dynamic routes allow you to capture part of the URL as a variable using square brackets [].

//params.id comes from the dynamic part of the URL.




type Props = {
  params: { id: string }
}

export default  async function DynamicPage({ params }: Props) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700">Dynamic Page</h1>

      <p>You visited: <strong>{params.id}</strong></p>
    </div>
  );
}
