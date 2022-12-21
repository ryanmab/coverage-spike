import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {SimpleComponent} from "../SimpleComponent";

it('The simple component renders', () => {
    render(<SimpleComponent />);
    expect(screen.getByText("This is a simple frontend component")).toBeInTheDocument();
});