import Footer from "@/app/(site)/components/Footer";
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
const pages = 4;

describe("Footer Testing", () => {

  describe("Rendering", () => {
    it("should have page info", async () => {
      render(<Footer pages={pages} />);
      const pageInfo = screen.getByText((_, element) => element?.textContent === "Page 1 of " + pages);
      await waitFor(() => {
        expect(pageInfo).toBeInTheDocument();
      })
    })

    it("should have nuber pagination", async () => {
      render(<Footer pages={pages} />);
      const pagination = screen.getByRole("button", { name: "3" });
      await waitFor(() => {
        expect(pagination).toBeInTheDocument();
      })
    })
  })
  
  describe("Behavior", () => {
    it("footer nav should update routes", async () => {
      render(<Footer pages={pages} />);

      const nextBtn = screen.getByRole("button", {name: /Next/i});
      await userEvent.click(nextBtn);
      expect(useRouter().push).toHaveBeenCalledWith("?page=2", { "scroll": false} );

      const pagination = screen.getByRole("button", {name: "4"});
      await userEvent.click(pagination);
      expect(useRouter().push).toHaveBeenCalledWith("?page=4", { "scroll": false} );

    })
  })

})