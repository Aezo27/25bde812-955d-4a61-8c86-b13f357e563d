import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("https://dummyjson.com/products/categories", () => {
    // Note that you DON'T have to stringify the JSON!
    return HttpResponse.json({
      0: [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        "tops",
        "womens-dresses",
        "womens-shoes",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "womens-watches",
        "womens-bags",
        "womens-jewellery",
        "sunglasses",
        "automotive",
        "motorcycle",
        "lighting",
      ],
    });
  }),
];
