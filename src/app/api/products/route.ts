// app/api/products/route.ts
import { connectDB } from "../../lib/mongodb";
import { Product } from "../../mongodb/models/product";
//import { getServerSession } from "next-auth";
//import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req: Request) {
 

  const data = await req.json();
  await connectDB();
  const newProduct = await Product.create(data);
  return Response.json(newProduct, { status: 201 });
}
