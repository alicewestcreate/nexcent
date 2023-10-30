// I want to test that the each link has href

import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NavLink from "./NavLink";

test("NavLink generates correct href attribute based on page title", () => {
  const title = "Page";
  const slug = "/page";

  const { getByRole } = render(<NavLink slug={slug}>{title}</NavLink>);
  const linkElement = getByRole("link", { name: title });
  const expectedSlugValue = `/${title.toLowerCase().split(" ").join("-")}`;
  const hrefValue = linkElement.getAttribute("href");

  expect(expectedSlugValue).toBe(hrefValue);
});

test("NavLink changes colour on hover", () => {
  render(<NavLink slug={"/page"}>Page</NavLink>);
  const element = screen.getByTestId("navigation-link");

 fireEvent.mouseOver(element)
  const computedStyle = window.getComputedStyle(element)

});
