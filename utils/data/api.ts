"use server";

import { revalidateTag } from "next/cache";

export async function getProduct(params: any) {
  try {
    const limit = 10;
    const page = params.page || 1;
    const skip = limit * (page - 1);
    const search = params.search;
    let response;
    if (search) {
      response = await fetch(
        "https://dummyjson.com/products/search?q=" +
          search +
          "&limit=" +
          limit +
          "&skip=" +
          skip
      );
    } else {
      response = await fetch(
        "https://dummyjson.com/products?limit=" + limit + "&skip=" + skip,
        {next: {tags: ["product"], revalidate: 3600}}
      );
    }
    const data = await response.json();
    const pages = Math.ceil(data.total / limit);
    return { data, pages };
  } catch (e: any) {
    return { error: e.message };
  }
}


export async function deleteProduct(id:number){
  try {
    const response = await fetch("https://dummyjson.com/products/" + id, {
      method: "DELETE",
    });
    const data = await response.json();
    revalidateTag("product");
    return data;
  } catch (e: any) {
    return { error: e.message };
  }
}

export async function viewProduct(id: number) {
  try {
    const response = await fetch("https://dummyjson.com/products/" + id);
    const data = await response.json();
    return data;
  } catch (e: any) {
    return { error: e.message };
  }
}

