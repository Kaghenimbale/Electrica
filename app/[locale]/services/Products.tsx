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
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const formatPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
  });
  const selectedProducts = products.filter(
    (product) => (quantities[product.id] ?? 0) > 0,
  );
  const itemCount = selectedProducts.reduce(
    (total, product) => total + quantities[product.id],
    0,
  );
  const orderTotal = selectedProducts.reduce(
    (total, product) => total + product.price * quantities[product.id],
    0,
  );
  const orderMessage = [
    t("orderMessageIntro"),
    ...selectedProducts.map((product) =>
      t("orderMessageItem", {
        product: product.title,
        quantity: quantities[product.id],
        unitPrice: formatPrice.format(product.price),
        total: formatPrice.format(product.price * quantities[product.id]),
      }),
    ),
    t("orderMessageTotal", {
      quantity: itemCount,
      total: formatPrice.format(orderTotal),
    }),
  ].join("\n");

  const toggleLike = (productId: string) => {
    setLikedProducts((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  };

  const updateQuantity = (productId: string, value: string) => {
    const quantity = Math.min(99, Math.max(0, Math.floor(Number(value) || 0)));
    setQuantities((current) => ({ ...current, [productId]: quantity }));
  };

  return (
    <>
      <p className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-950">
        {t("samplePriceNote")}
      </p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => {
          const isLiked = likedProducts.includes(product.id);
          const quantity = quantities[product.id] ?? 0;

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
                <label className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-slate-700">
                  {t("quantity")}
                  <input
                    type="number"
                    min="0"
                    max="99"
                    step="1"
                    value={quantity}
                    onChange={(event) =>
                      updateQuantity(product.id, event.target.value)
                    }
                    aria-label={t("quantityForProduct", {
                      product: product.title,
                    })}
                    className="w-20 rounded-lg border border-slate-200 bg-slate-50 p-2 text-center text-slate-900 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                  />
                </label>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title)}`}
                  className="mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-red-700 px-4 py-3 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  {t("bookProduct")}
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
      <section
        aria-labelledby="order-summary-heading"
        className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >
        <h2
          id="order-summary-heading"
          className="text-2xl font-bold text-slate-950"
        >
          {t("orderSummary")}
        </h2>
        {selectedProducts.length > 0 ? (
          <ul className="mt-5 divide-y divide-slate-200">
            {selectedProducts.map((product) => {
              const quantity = quantities[product.id];
              return (
                <li
                  key={product.id}
                  className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm"
                >
                  <span className="font-medium text-slate-800">
                    {product.title} × {quantity}
                  </span>
                  <span className="font-semibold text-slate-950">
                    {formatPrice.format(product.price * quantity)}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {t("emptyOrder")}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
          <p className="font-semibold text-slate-800">
            {t("itemCount", { count: itemCount })}
          </p>
          <p className="text-lg font-extrabold text-slate-950">
            {t("estimatedTotal")}: {formatPrice.format(orderTotal)}
          </p>
        </div>
        {selectedProducts.length > 0 && (
          <Link
            href={`/contact?message=${encodeURIComponent(orderMessage)}`}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-red-700 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-800 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:w-auto"
          >
            {t("sendOrderRequest")}
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        )}
      </section>
    </>
  );
}
