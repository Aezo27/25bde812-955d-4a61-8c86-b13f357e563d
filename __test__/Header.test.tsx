import Header from "@/app/(site)/components/Header";
import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

// variable
const total = "0";

describe("Header Testing", () => {

  describe("Rendering", () => {
    it("should have Header", async () => {
      act(() => {
        render(<Header total={total} />);
      });
      const header = screen.findByTestId("header");
      expect(header).toBeTruthy();
    })
  
    it("should have Add Button", () => {
      render(<Header total={total} />);
      const addBtn = screen.getByRole("button", { name: /Add product/i });
      expect(addBtn).toBeInTheDocument();
    })
  
    it("should have Search Input", () => {
      render(<Header total={total} />);
      const search = screen.getByPlaceholderText(/Search/i);
      expect(search).toBeInTheDocument();
    })
  
    it("should have Category Selector", () => {
      render(<Header total={total} />);
      const categoryBtn = screen.getByLabelText(/Category Selector/i);
      expect(categoryBtn).toBeInTheDocument();
    })
  })
  
  describe("Behavior", () => {
    it("should open add new product modal", async () => {
      render(<Header total={total} />);
      const addBtn = screen.getByRole("button", { name: /Add product/i });
      await userEvent.click(addBtn);
      // const addModal = screen.getByLabelText("add-product");
      // expect(addModal).toBeInTheDocument();
    })
  })

})