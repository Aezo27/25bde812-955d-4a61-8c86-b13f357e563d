import z from "zod";

// for zod validation
const ProductSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, {
      message: "Product name at least 3 character",
    })
    .max(100, {
      message: "Product name maximal 100 character",
    }),
});
export type ProductSchemaType = z.infer<typeof ProductSchema>;

export default ProductSchema;
