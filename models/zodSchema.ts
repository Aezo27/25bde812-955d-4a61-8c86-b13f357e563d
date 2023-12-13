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
  description: z.string().min(1, {
    message: "Product description is required",
  }),
  brand: z.string().min(1, { message: "Product brand is required" }),
  price: z.coerce
    .number()
    .min(1, {
      message: "Price must be greater than or equal to 1",
    })
    .positive(),
  category: z.string().min(1, { message: "Product category is required" }),
  stock: z.coerce
    .number()
    .min(1, { message: "Product stock must be greater than or equal to 1" })
    .positive(),
  discountPercentage: z.coerce
    .number()
    .positive({
      message: "Discount must be greater than 0 or just leave this field",
    })
    .max(100, { message: "Discount must be less than or equal to 100" })
    .optional()
    .or(z.literal("")),
  rating: z.coerce
    .number()
    .positive({
      message: "Rating must be greater than 0 or just leave this field",
    })
    .max(5, {
      message: "Rating must be less than or equal to 5",
    })
    .optional()
    .or(z.literal("")),
});
export type ProductSchemaType = z.infer<typeof ProductSchema>;

export default ProductSchema;
