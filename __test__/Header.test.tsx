import Header from "@/app/(site)/components/Header";
import { act, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { useRouter } from 'next/navigation'

// Mock useRouter:
jest.mock('next/navigation', () => {
  const router = {
    push: jest.fn(),
    query: {},
  }
  return {
    useRouter: jest.fn().mockReturnValue(router),
    useSearchParams: () => ({ get: () => { } }),
  }
})

// variable
const total = 1;

describe("Header Testing", () => {

  describe("Rendering", () => {
    it("should have Add Button", async () => {
      render(<Header total={total} />);
      const addBtn = screen.getByRole("button", { name: /Add product/i });
      await waitFor(() => {
        expect(addBtn).toBeInTheDocument();
      })
    })
  
    it("should have Search Input", async () => {
      render(<Header total={total} />);
      const search = screen.getByPlaceholderText(/Search/i);
      await waitFor(() => {
        expect(search).toBeInTheDocument();
      })
    })
  
    it("should have Category Selector", async() => {
      render(<Header total={total} />);
      const categoryBtn = screen.getByLabelText(/Category Selector/i);
      await waitFor(() => {
        expect(categoryBtn).toBeInTheDocument();
      });
    })
  })
  
  describe("Behavior", () => {
    it("add button should open add new product modal", async () => {
      render(<Header total={total} />);
      const addModal = screen.queryByLabelText("add-product-modal");
      expect(addModal).not.toBeInTheDocument();

      const addBtn = screen.getByRole("button", { name: /Add product/i });
      await userEvent.click(addBtn);

      const addModalAfter = screen.getByLabelText("add-product-modal");
      expect(addModalAfter).toBeInTheDocument();
    })

    it("search should update routes and showing X button", async () => {
      const searchText = "Rtx";

      render(<Header total={total}/>);
      const searchBtn = screen.getByLabelText(/Search Product/);
      const search = screen.getByPlaceholderText(/Search/i);
      
      const resetBtn = screen.queryByLabelText(/Reset Search/i)
      expect(resetBtn).not.toBeInTheDocument();

      await userEvent.type(search, searchText);
      await userEvent.click(searchBtn);
      expect(useRouter().push).toHaveBeenCalledWith("?search="+searchText, { "scroll": false, "shallow": true } )

      render(<Header total={total} search={searchText} />);
      const resetBtnAfter = await screen.findByLabelText("Reset search");
      expect(resetBtnAfter).toBeInTheDocument();
    })

    it("filter btn should showing list then list must update routes when click", async () => {
      render(<Header total={total}/>);
      const categoryBtn = screen.getByLabelText(/Category Selector/i);

      const menuList = screen.queryByLabelText(/Category list/i)
      expect(menuList).not.toHaveClass("visible");
      
      await userEvent.click(categoryBtn);
      
      expect(menuList).toHaveClass("visible");
      
      const selectedCategory = screen.getByText("smartphones");
      expect(selectedCategory).toBeInTheDocument();

      await userEvent.click(selectedCategory);

      expect(useRouter().push).toHaveBeenCalledWith("?category=smartphones", { "scroll": false, "shallow": true } )
    })

  })

})