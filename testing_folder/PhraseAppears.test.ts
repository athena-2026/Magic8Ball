import ImageHolder from "../src/Components/ImageHolder"
import { fireEvent, render, screen } from '@testing-library/react';

test("displays random answer", ()=> {
    render(<ImageHolder/>)
    const button = screen.getByText("Submit")
    fireEvent.click(button)
    const answers = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No']
    const p = screen.getByText((content)=>answers.includes(content))
    
    expect(p).toBeInTheDocument();
})