import ImageHolder from "../src/Components/ImageHolder"
import InputField from "../src/Components/InputField"
import {  render, screen, fireEvent } from '@testing-library/react';


describe("Image holder tests", () => {

    it("displays random answer from table on answers", async() => {

        //arrange 
        
        render(<>
        <ImageHolder/>
        <InputField/>
        </>)
        const button = screen.getByRole("button", { name: "Submit question" })
        const answers = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No'];

        //act
        fireEvent.click(button);
        const p =  await screen.findByTestId("answer", {}, {timeout:1950})
        const answerText: string = p.textContent?? "";
        console.log(answerText)
        
        // assertion
        expect(answers).toContain(answerText);
    })


})