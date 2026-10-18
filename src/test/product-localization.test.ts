import { describe, expect, it } from "vitest";
import { products, locProduct } from "@/data/products";

describe("Bilingual product catalog", () => {
  it("includes all 18 products with matching information blocks in both languages", () => {
    expect(products).toHaveLength(18);
    for (const product of products) {
      expect(product.tr.body.length, product.id).toBe(product.body.length);
      if (product.id !== "demand-control-device") {
        expect(product.body.length, product.id).toBeGreaterThan(0);
        expect(product.tr.body).not.toEqual(product.body);
      }
    }
  });

  it.each(products)("selects only the requested language for $id", (product) => {
    expect(locProduct(product, "tr").body).toBe(product.tr.body);
    expect(locProduct(product, "en").body).toBe(product.body);
  });

  it("does not invent details for the demand control device", () => {
    const product = products.find((p) => p.id === "demand-control-device");
    expect(product).toBeDefined();
    expect(product?.body).toHaveLength(0);
    expect(product?.tr.body).toHaveLength(0);
  });
});