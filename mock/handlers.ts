import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/products/categories", () => {
    return HttpResponse.json(["smartphones", "skincare"]);
  }),
  
  http.get("https://dummyjson.com/products/1", () => {
    return HttpResponse.json({
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
    });
  }),

  http.delete("https://dummyjson.com/products/1", () => {
    return HttpResponse.json({
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
      isDeleted: true,
      deletedOn: "2023-12-10T14:54:11.651Z",
    });
  }),

  http.put("https://dummyjson.com/products/1", () => {
    return HttpResponse.json({
      id: 1,
      title: "Xiaomi",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
    });
  }),

  http.post("https://dummyjson.com/products/add", () => {
    return HttpResponse.json({
      title: "Samsung",
      description: "Samsung is very powerfull",
      price: 1000,
      rating: 5,
      stock: 100,
      brand: "Samsung",
      category: "smartphones",
    });
  }),
];