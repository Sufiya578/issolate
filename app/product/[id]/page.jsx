import { notFound } from "next/navigation";
import Image from "next/image";
import products from "@/public/data/products.json";
import { ShoppingBag, Heart } from "lucide-react";


export default async function ProductPage({ params }) {
  // 🔹 CURRENT: using static local data
  const product = products.find(p => p.id === Number(params.id));

  // 🔹 FUTURE: when backend/API is ready
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`, {
  //   cache: "no-store", // ensures fresh data (optional)
  // });
  // const product = await res.json();

  if (!product) {
    return <div className="text-center py-20 text-gray-500">Product not found.</div>;
  }
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Product Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center rounded-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-extrabold">{product.name}</h1>
          <p className="text-xl font-semibold text-primary">{product.price}</p>

          <p className="text-gray-700 leading-relaxed">
            {product.description ||
              "Experience premium comfort and bold style with our exclusive tee — crafted for those who stand out."}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="border border-border px-5 py-3 rounded-full flex items-center gap-2 hover:bg-muted transition">
              <Heart className="w-5 h-5" />
              Wishlist
            </button>
          </div>

          <div className="pt-6 text-sm text-muted-foreground">
            <p>Category: {product.category || "T-Shirts"}</p>
            <p>Availability: {product.inStock ? "In Stock" : "Out of Stock"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
