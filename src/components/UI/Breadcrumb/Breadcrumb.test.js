import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "components/UI/Breadcrumb/Breadcrumb";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);

  return {
    breadcrumb,
  };
};

test("Should have ol with classname .breadcrumb and have text Home and House Details", () => {
  const { breadcrumb } = setup();
  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
