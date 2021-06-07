import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});

it("works when you click on the left arrow", () => {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();

  const leftArrow = queryByTestId("left-arrow");
  fireEvent.click(leftArrow);
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
})

it("shows left arrow properly", () => {
  const { queryByTestId } = render(<Carousel />);

  let leftArrow = queryByTestId("left-arrow");
  const rightArrow = queryByTestId("right-arrow");
  expect(leftArrow).not.toBeInTheDocument();
  expect(rightArrow).toBeInTheDocument();

  fireEvent.click(rightArrow);
  leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).toHaveClass("fa-chevron-circle-left");
  expect(rightArrow).toBeInTheDocument();

  fireEvent.click(rightArrow);
  leftArrow = queryByTestId("left-arrow");
  expect(leftArrow).toHaveClass("fa-chevron-circle-left");
  expect(rightArrow).not.toBeInTheDocument();
})


//smoke test
test("Carousel loads properly", () => {
  render(<Carousel />);
});

//snapshot test
test("carousel should match snapshot", () => {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});