import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Input } from "./Input.jsx";

test("renders compnent", async () => {
	const { getByText } = render(<Input />);
	expect(getByText("Execution time")).toBeInTheDocument();
});
