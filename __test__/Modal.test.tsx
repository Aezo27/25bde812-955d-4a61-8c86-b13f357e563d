import Add from "@/app/(site)/components/modals/Add";
import Delete from "@/app/(site)/components/modals/Delete";
import Edit from "@/app/(site)/components/modals/Edit";
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react";


describe("Modal action test", () => {
  const isDelete = ["Iphone 9", 1, true]
  const setIsDelete = jest.fn();
  const setIsEdit = jest.fn();
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
  }

  it("delete modal should delete and open delete toast", async () => {
    render(<Delete deleteData={isDelete} setIsDelete={setIsDelete}/>);
    const deleteBtn =  screen.getByRole("button", {name: /Delete/!});
    const title = screen.getByRole("heading", { name: "Delete "+isDelete[0] });
    expect(title).toBeInTheDocument(); 

    await userEvent.click(deleteBtn);

    await waitFor(() => {
      const modalAfter = screen.getByLabelText("toast-danger");
      expect(modalAfter).toBeInTheDocument();
    })
  })

  it("edit modal should edit product and open success toast", async () => {
    render(<Edit product={product} setIsEdit={setIsEdit}/>);
    const saveBtn =  screen.getByRole("button", {name: /Save/!});
    const title = screen.getByRole("heading", { name: "Edit "+product.title });
    expect(title).toBeInTheDocument(); 

    const productName =  screen.getByRole("textbox", {name: /Product Name/i})
    expect(productName).toHaveValue(product.title);

    await userEvent.clear(productName);

    await userEvent.type(productName, "Xiaomi");
    await userEvent.click(saveBtn);

    await waitFor(() => {
      const modalAfter = screen.getByLabelText("toast-success");
      expect(modalAfter).toBeInTheDocument();
    })
  })

  it("add modal should add product and open success toast", async () => {
    render(<Add/>);
    const addBtn = screen.getByRole("button", { name: /Add product/i });
    await userEvent.click(addBtn);
    const saveBtn =  screen.getByRole("button", {name: /Save/!});

    const productName =  screen.getByRole("textbox", {name: /Product Name*/i})
    const productDesc =  screen.getByRole("textbox", {name: /Description*/i})
    const productBrand = screen.getByRole("textbox", { name: /Brand Name*/i})
    const category = screen.getByRole("textbox", { name: /Category*/i})
    const price = screen.getByRole("spinbutton", { name: /Price*/i})
    const stock = screen.getByRole("spinbutton", { name: /Stock*/i})

    await userEvent.type(productDesc, "Samsung is very powerfull");
    await userEvent.type(productBrand, "Samsung");
    await userEvent.type(category, "smartphones");
    await userEvent.type(price, "1000");
    await userEvent.type(stock, "100");
    await userEvent.click(saveBtn);

    const error = screen.getByText("Product name at least 3 character")
    expect(error).toBeInTheDocument();

    await userEvent.type(productName, "Samsung Galaxi 21");
    await userEvent.click(saveBtn);

    await waitFor(() => {
      const modalAfter = screen.getByLabelText("toast-success");
      expect(modalAfter).toBeInTheDocument();
    })
  })


})