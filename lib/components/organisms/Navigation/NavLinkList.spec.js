import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLinkList from "./NavLinkList";

test("NavLinkList renders correctly", () => {
  const { getByText } = render(<NavLinkList />);

  const navPages = [
    "Home",
    "Services",
    "Features",
    "Products",
    "Testimonials",
    "FAQs",
  ];

  navPages.forEach((page) => {
    const pageName = getByText(page);
    expect(pageName).toBeInTheDocument();
  });
});
