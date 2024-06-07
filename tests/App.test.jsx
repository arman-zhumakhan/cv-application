/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App";

describe("App component", () => {
    it("renders correct heading", () => {
      render(<App />);
      expect(screen.getByText('CV Application')).toBeInTheDocument();
    });

    it('renders the sample data after clicking the Load Sample CV button', async () => { // Add 'async' keyword here
      const user = userEvent.setup();
      render(<App />);
      const loadSampleCVButton = screen.getByText('Load Sample CV');
      await user.click(loadSampleCVButton);
      
      expect(screen.getByText('Arman Zhumakhan')).toBeInTheDocument();
    });
  });
