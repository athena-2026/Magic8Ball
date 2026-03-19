import { expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import InputField from '../src/Components/InputField';
import ImageHolder from '../src/Components/ImageHolder'

import {AppProviders} from'../src/Context/ContextProvider'


describe('Input Field component', ()=> {
    test('input without ? should not be accepted', () => {
        
        render(
        <AppProviders>
            <InputField/>
        </AppProviders>)

        const button = screen.getByRole("button", {name:"Submit question" });
        const inputBox = screen.getByRole("textbox")
        inputBox.textContent = "This should not be valid"

        fireEvent.click(button)

        expect(button.hasAttribute('disabled')).toBe(false)
    })
    test ('input 1 character or below should not be accepted', () => {
        render(
        <AppProviders>
            <InputField/>
        </AppProviders>)

        const button = screen.getByRole("button", {name:"Submit question" });
        const inputBox = screen.getByRole("textbox")
        inputBox.textContent = "1"

        fireEvent.click(button)

        expect(button.hasAttribute('disabled')).toBe(false)
    })
    test ('input with ? and length above 1 should be accepted', () => {
        render(
        <AppProviders>
            <InputField/>
        </AppProviders>)

        const button = screen.getByRole("button", {name:"Submit question" });
        const inputBox = screen.getByRole("textbox")
        inputBox.textContent = "Will this be accepted?"

        fireEvent.click(button)

        setTimeout(()=>{
            expect(button.hasAttribute('disabled')).toBe(true)
        }, 1000)

    })
})

describe('Integration testing between input field component and image holder component', ()=> {
    test('answer should be cleared/empty before displaying random answer', ()=> {
        render(
        <AppProviders>
            <ImageHolder/>
            <InputField/>
        </AppProviders>)
        const button = screen.getByRole("button", {name:"Submit question"})
        const inputField = screen.getByRole("textbox")
        inputField.textContent = "Will this test work?"

        fireEvent.click(button)
        
        const answer = screen.getByTestId("answer")
        expect(answer.textContent).toBe('')
    })

        test('answer should display a random phrase 2 seconds after button is clicked', ()=> {
        render(
        <AppProviders>
            <ImageHolder/>
            <InputField/>
        </AppProviders>)

        let options = ['Maybe..', 'Not too sure..', 'Possibly..', 'I think so', 'Ask me another time..', 'No'];
        const button = screen.getByRole("button", {name:"Submit question"})
        const inputField = screen.getByRole("textbox")
        inputField.textContent = "Will this test work?"

        fireEvent.click(button)
        
        setTimeout( ()=> {
            expect(options).toContain(screen.getByTestId("answer").textContent)
        }, 2000)
        
    })
})
