// app/components/FeaturedProducts.jsx
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedProducts() {
  // this fetch api to change later
  const res = await fetch("https://dummyjson.com/products?limit=8", { next: { revalidate: 60 } });
  const data = await res.json();
  const products = data.products || [];

  return (
    <section id="featured" className="py-10 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 md:px-6 text-center">
<h2 className="text-3xl md:text-5xl font-extrabold mb-4">Featured Drops</h2> 
<p className="text-muted-foreground mb-6 md:mb-8">
  Explore our latest limited-edition tees — designed for expression and comfort.
</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 gap-2.5">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group ">
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="border-t whitespace-nowrap text-gray-700  truncate pt-3 mt-2 text-sm ms:text-md text-left">{product.title}</h3>
              <p className="text-gray-600 text-lg mt-1 font-semibold text-left">₹{product.price}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="btn-primary inline-block px-6 py-3 rounded-none font-semibold"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
