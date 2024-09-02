import { setActivePinia, createPinia } from "pinia";
import { useProductStore } from "./productStore";
import { Product } from "../types/Product";
import { describe, it, expect, beforeEach } from "vitest";

describe("Product Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());

    // Мок для localStorage
    const localStorageMock = (() => {
      let store: { [key: string]: string } = {};
      return {
        getItem(key: string) {
          return store[key] || null;
        },
        setItem(key: string, value: string) {
          store[key] = value.toString();
        },
        removeItem(key: string) {
          delete store[key];
        },
        clear() {
          store = {};
        },
      };
    })();

    globalThis.localStorage = localStorageMock as any;
  });

  it("должен добавлять продукт", () => {
    const store = useProductStore();
    const newProduct: Product = {
      id: 1,
      name: "Товар 1",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    };

    store.addProduct(newProduct);

    expect(store.products).toContainEqual(newProduct);
  });

  it("должен редактировать продукт", () => {
    const store = useProductStore();
    const product: Product = {
      id: 1,
      name: "Товар 1",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    };
    store.addProduct(product);

    const updatedProduct: Product = {
      id: 1,
      name: "Обновленный Товар",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    };
    store.editProduct(updatedProduct);

    expect(store.products).toContainEqual(updatedProduct);
  });

  it("должен удалять продукт", () => {
    const store = useProductStore();
    const product: Product = {
      id: 1,
      name: "Товар 1",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    };
    store.addProduct(product);

    store.deleteProduct(1);

    expect(store.products).not.toContainEqual(product);
  });

  it("должен сохранять продукты в localStorage", () => {
    const store = useProductStore();
    const product: Product = {
      id: 1,
      name: "Товар 1",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    };
    store.addProduct(product);

    const savedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    expect(savedProducts).toContainEqual(product);
  });

  it("должен фильтровать продукты", () => {
    const store = useProductStore();
    store.addProduct({
      id: 1,
      name: "Товар 1",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    });
    store.addProduct({
      id: 2,
      name: "Товар 2",
      seller: "Продавец 2",
      integration: "Интеграция 2",
    });

    store.setFilter("Интеграция 1");

    expect(store.filteredProducts).toHaveLength(1);
    expect(store.filteredProducts[0].name).toBe("Товар 1");
  });

  it("должен сортировать продукты", () => {
    const store = useProductStore();
    store.addProduct({
      id: 1,
      name: "Банан",
      seller: "Продавец 1",
      integration: "Интеграция 1",
    });
    store.addProduct({
      id: 2,
      name: "Яблоко",
      seller: "Продавец 2",
      integration: "Интеграция 2",
    });

    store.setSortOrder("asc");
    expect(store.sortedProducts[0].name).toBe("Банан");

    store.setSortOrder("desc");
    expect(store.sortedProducts[0].name).toBe("Яблоко");
  });
});
