import React from "react";
import { getProductsByLocale } from "@/lib/data/products";
import { ProductDetailClient } from "./ProductDetailClient";
import { getLocale } from "next-intl/server";
import { Metadata } from "next";

interface ProductDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: ProductDetailProps): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const products = getProductsByLocale(locale);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return {
      title: 'Product Not Found | Maze Group',
      description: 'The product you are looking for could not be found.',
    };
  }

  return {
    title: `${product.name} | Hotel Equipment Supplier Georgia | Maze Group`,
    description: product.description?.slice(0, 160) || `${product.name} - Professional hotel equipment supplier in Georgia. ${product.category}. Contact for pricing and installation.`,
    keywords: [
      product.name,
      `${product.name} Georgia`,
      `${product.name} Tbilisi`,
      `${product.category} hotel equipment`,
      `${product.category} supplier Georgia`,
      'hotel equipment Georgia',
      'hospitality equipment Tbilisi',
    ],
    openGraph: {
      title: `${product.name} | Maze Group`,
      description: product.description?.slice(0, 160) || `${product.name} for hotels in Georgia`,
      images: product.images?.slice(0, 1),
    },
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params;
  const locale = await getLocale();
  const products = getProductsByLocale(locale);
  const product = products.find((p) => p.id === parseInt(id));

  return <ProductDetailClient product={product} productId={id} />;
}
