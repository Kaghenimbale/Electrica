"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "@/i18n/navigation";

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function Products({ products }: { products: Product[] }) {
  const t = useTranslations("ServicesPage");
  const locale = useLocale();
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const formatPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  });

  const toggleLike = (productId: string) => {
    setLikedProducts((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  return (
    <>
      <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
        {t("samplePriceNote")}
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const isLiked = likedProducts.includes(product.id);

          return (
            <article
              key={product.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transition-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={320}
                  height={240}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
                />
                <button
                  type="button"
                  aria-label={t(isLiked ? "unlikeProduct" : "likeProduct", {
                    product: product.title,
                  })}
                  aria-pressed={isLiked}
                  onClick={() => toggleLike(product.id)}
                  className="absolute right-3 top-3 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 text-red-700 shadow-sm transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  {isLiked ? (
                    <FaHeart aria-hidden="true" />
                  ) : (
                    <FaRegHeart aria-hidden="true" />
                  )}
                  <span className="sr-only">
                    {t(isLiked ? "unlike" : "like")}
                  </span>
                </button>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold leading-snug text-slate-950">
                  {product.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {product.description}
                </p>
                <div className="mt-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {t("samplePriceLabel")}
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-slate-950">
                    {formatPrice.format(product.price)}
                  </p>
                </div>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-800 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  {t("bookProduct")}
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
