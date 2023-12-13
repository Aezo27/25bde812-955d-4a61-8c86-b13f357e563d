import TableAction from "@/app/(site)/components/modals/TableAction"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Table action test", () => {
  it("view btn should open modal and showing detail of product", async () => {
    render(<TableAction name="Iphone 9" id={1}/>);
    const viewBtn =  screen.getByRole("button", {name: /View Product/!});
    const modal = screen.queryByLabelText("view-product-modal");
    expect(modal).not.toBeInTheDocument();

    await userEvent.click(viewBtn);

    await waitFor(() => {
      const modalAfter = screen.getByLabelText("view-product-modal");
      expect(modalAfter).toBeInTheDocument();
    })
  })

  it("edit btn should open modal and showing edit form of product", async () => {
    render(<TableAction name="Iphone 9" id={1}/>);
    const viewBtn =  screen.getByRole("button", {name: /Edit Product/!});
    const modal = screen.queryByLabelText("edit-product-modal");
    expect(modal).not.toBeInTheDocument();

    await userEvent.click(viewBtn);

    await waitFor(() => {
      const modalAfter = screen.getByLabelText("edit-product-modal");
      expect(modalAfter).toBeInTheDocument();
    })
  })

  it("delete btn should open modal", async () => {
    render(<TableAction name="Iphone 9" id={1}/>);
    const deleteBtn =  screen.getByRole("button", {name: /Delete Product/!});
    const modal = screen.queryByLabelText("delete-product-modal");
    expect(modal).not.toBeInTheDocument();
    
    await userEvent.click(deleteBtn);

    const modalAfter = screen.getByLabelText("delete-product-modal");
    expect(modalAfter).toBeInTheDocument();
  })
})