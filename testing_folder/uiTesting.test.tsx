import { expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import InputField from '../src/Components/InputField';

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

        const text = screen.getByRole("textbox").textContent
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

        const text = screen.getByRole("textbox").textContent
        expect(button.hasAttribute('disabled')).toBe(false)
    })
})

describe('Integration testing between input field component and image holder component', ()=> {
    test('')
})
