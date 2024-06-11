import { vi } from 'vitest'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderEdit from "../src/components/HeaderEdit";


describe("HeaderEdit component", () => {
    it("renders correct heading", () => {
      render(<HeaderEdit />);
      expect(screen.getByText('CV Application')).toBeInTheDocument();
    });

    it('renders the sample data after clicking the Load Sample CV button', async () => {
        const loadSampleCV = vi.fn();
        const handlePrint = vi.fn();
        const user = userEvent.setup();
        render(<HeaderEdit loadSampleCV={loadSampleCV} handlePrint={handlePrint}/>);
        const loadSampleCVButton = screen.getByRole('button', {name: 'Load Sample CV'});
        await user.click(loadSampleCVButton);
        expect(loadSampleCV).toHaveBeenCalled();
        expect(handlePrint).not.toHaveBeenCalled();
    });
  }
)