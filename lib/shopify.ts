const SHOPIFY_API_VERSION = "2025-01";

export type ShopifyMoney = {
  amount: string;
  currencyCode: string;
};

export type ShopifyImage = {
  id: string;
  url: string;
  altText: string | null;
  width: number;
  height: number;
};

export type ShopifyProduct = {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml: string;
  onlineStoreUrl: string | null;
  availableForSale: boolean;
  priceRange: {
    minVariantPrice: ShopifyMoney;
  };
  featuredImage: ShopifyImage | null;
  images: ShopifyImage[];
};

type ShopifyProductsResponse = {
  shop: {
    name: string;
  };
  products: {
    edges: Array<{
      node: Omit<ShopifyProduct, "images"> & {
        images: {
          edges: Array<{ node: ShopifyImage }>;
        };
      };
    }>;
  };
};

function getShopifyConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN?.replace(/^https?:\/\//, "");
  const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  if (!domain || !token) {
    return null;
  }

  return { domain, token };
}

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T | null> {
  const config = getShopifyConfig();
  if (!config) {
    console.error(
      "Missing SHOPIFY_STORE_DOMAIN or SHOPIFY_STOREFRONT_ACCESS_TOKEN",
    );
    return null;
  }

  const response = await fetch(
    `https://${config.domain}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Headless channel private tokens use this header (server-side only)
        "Shopify-Storefront-Private-Token": config.token,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    },
  );

  if (!response.ok) {
    console.error("Shopify Storefront API HTTP error:", response.status);
    return null;
  }

  const json = (await response.json()) as {
    data?: T;
    errors?: Array<{ message?: string }>;
  };

  if (json.errors?.length) {
    console.error("Shopify Storefront API errors:", json.errors);
    return null;
  }

  return json.data ?? null;
}

const STORE_CATALOG_QUERY = `
  query StoreCatalog($first: Int!, $imageCount: Int!) {
    shop {
      name
    }
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          onlineStoreUrl
          availableForSale
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          featuredImage {
            id
            url
            altText
            width
            height
          }
          images(first: $imageCount) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

export type ShopifyCatalog = {
  shopName: string;
  products: ShopifyProduct[];
};

export async function getShopifyCatalog(
  first = 20,
  imageCount = 50,
): Promise<ShopifyCatalog> {
  const data = await shopifyFetch<ShopifyProductsResponse>(STORE_CATALOG_QUERY, {
    first,
    imageCount,
  });

  if (!data) {
    return { shopName: "Store", products: [] };
  }

  return {
    shopName: data.shop.name || "Store",
    products: data.products.edges.map(({ node }) => ({
      id: node.id,
      title: node.title,
      handle: node.handle,
      description: node.description,
      descriptionHtml: node.descriptionHtml,
      onlineStoreUrl: node.onlineStoreUrl,
      availableForSale: node.availableForSale,
      priceRange: node.priceRange,
      featuredImage: node.featuredImage,
      images: node.images.edges.map((edge) => edge.node),
    })),
  };
}

/** @deprecated Prefer getShopifyCatalog */
export async function getShopifyProducts(
  first = 20,
): Promise<ShopifyProduct[]> {
  const catalog = await getShopifyCatalog(first);
  return catalog.products;
}

export function formatShopifyPrice(money: ShopifyMoney): string {
  const amount = Number.parseFloat(money.amount);
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: money.currencyCode,
  }).format(amount);
}

export function getShopifyProductUrl(
  product: ShopifyProduct,
  domain = process.env.SHOPIFY_STORE_DOMAIN,
): string {
  if (product.onlineStoreUrl) {
    return product.onlineStoreUrl;
  }

  const cleanDomain = domain?.replace(/^https?:\/\//, "");
  return `https://${cleanDomain}/products/${product.handle}`;
}

export function getShopifyBuyLabel(product: ShopifyProduct): string {
  return /pre-?order/i.test(product.title) ? "Pre-order now" : "Buy now";
}
