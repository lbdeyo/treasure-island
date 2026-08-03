import {
  formatShopifyPrice,
  getShopifyBuyLabel,
  getShopifyCatalog,
  getShopifyProductUrl,
  type ShopifyProduct,
} from "@/lib/shopify";
import ProductImageGallery from "@/app/components/ProductImageGallery";

function ProductCard({ product }: { product: ShopifyProduct }) {
  const buyUrl = getShopifyProductUrl(product);
  const buyLabel = getShopifyBuyLabel(product);

  return (
    <article className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
      <div className="w-full lg:w-[320px] flex-shrink-0">
        <ProductImageGallery
          images={product.images}
          productTitle={product.title}
        />
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>

        {product.descriptionHtml ? (
          <div
            className="store-product-description text-lg sm:text-xl leading-relaxed space-y-4 mb-6 [&_p]:mb-4 [&_strong]:font-semibold [&_em]:italic [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        ) : product.description ? (
          <p className="text-lg sm:text-xl leading-relaxed mb-6 whitespace-pre-line">
            {product.description}
          </p>
        ) : null}

        <div className="space-y-4">
          <p className="text-2xl font-semibold">
            {formatShopifyPrice(product.priceRange.minVariantPrice)}
          </p>
          {product.availableForSale ? (
            <a
              href={buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border-3 border-black bg-amber-100/90 hover:bg-amber-200/95 text-base font-semibold tracking-wide shadow-sm transition-colors"
            >
              {buyLabel}
            </a>
          ) : (
            <p className="text-lg font-medium">Currently unavailable</p>
          )}
        </div>
      </div>
    </article>
  );
}

export default async function Store() {
  const { shopName, products } = await getShopifyCatalog();

  return (
    <div className="bg-[url('/img/art/p18.jpg')] bg-cover bg-top bg-repeat min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-4xl bg-[url('/img/art/paper-light.jpg')] bg-cover border-3 border-black p-5 sm:p-8">
          <div className="mb-8">
            <h1 className="pt-5 mb-8 whitespace-pre-line">{shopName}</h1>
          </div>

          {products.length > 0 ? (
            <div className="space-y-12">
              {products.map((product, index) => (
                <div key={product.id}>
                  {index > 0 && (
                    <hr className="border-0 border-t border-black/20 mb-12" />
                  )}
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl leading-relaxed">
              No products are available right now. Check back soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
