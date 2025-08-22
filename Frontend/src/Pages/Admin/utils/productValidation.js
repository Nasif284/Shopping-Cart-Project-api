import * as yup from 'yup'

export const productValidationSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  description: yup.string().required("Description is required"),
  category: yup.string().required("Category is required"),
  subCategory: yup.string().required("Sub Category is required"),
  thirdCategory: yup.string().required("Third Level Category is required"),
  brand: yup.string().required("Brand is required"),
  variants:yup.array().of(
    yup.object().shape({
      size: yup.string().required("Size is required"),
      price: yup
        .number()
        .transform((value, originalValue) => 
          String(originalValue).trim() === "" ? null : value
        )
        .typeError("Price must be a number")
        .required("Price is required")
        .positive("Price must be positive"),
      oldPrice: yup
        .number()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        ),
      stock: yup
        .number()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        )
        .typeError("Stock must be a number")
        .required("Stock is required")
        .integer("Stock must be an integer")
        .min(0, "Stock cannot be negative"),
      discount: yup
        .number()
        .nullable()
        .transform((value, originalValue) =>
          String(originalValue).trim() === "" ? null : value
        ),
      isFeatured: yup.boolean(),
      color: yup.string().required("Color is required"),
    })
  ),
});
