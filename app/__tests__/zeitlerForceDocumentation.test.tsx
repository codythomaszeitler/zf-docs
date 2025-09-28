
import { describe, it, expect } from '@jest/globals';
import { ZeitlerForceDocumentation, ZeitlerForceDocumentationContext, type ZeitlerForceDocumentationContextType, type ZeitlerForceDocumentationProps } from '../zeitlerForceDocumentation';
import { render, isMobileMediaQuery, screen, isDesktopMediaQuery } from './testUtil';
import { createRoutesStub, MemoryRouter } from 'react-router';
import { act } from 'react';
import { URL } from 'url';
import { waitFor } from '@testing-library/dom';

describe('<ZeitlerForceDocumentation>', () => {

    describe('isMobileMediaQuery', () => {

        it('should show the tree when the menu button is pressed', () => {
            renderTestObject(isMobileMediaQuery());
            const button = screen.getByRole('button', {
                name: 'menu'
            });
            act(() => {
                button.click();
            });

            const tree = screen.getByRole('tree');
            expect(tree).toBeDefined();
        });

        it('should not show the tree when the menu button is not pressed', () => {
            renderTestObject(isMobileMediaQuery());
            const tree = screen.queryByRole('tree');
            expect(tree).toBeFalsy();
        });
    });

    describe('isDesktopMediaQuery', () => {
        it('should show the tree by default', () => {
            renderTestObject(isDesktopMediaQuery());
            const tree = screen.getByRole('tree');
            expect(tree).toBeDefined();
        });

        it('should "deploy on save" when you select deployments -> deploy on save', () => {
            renderTestObject(isDesktopMediaQuery());

            clickOnMenuItems('Deployments', 'Deploy on Save');
        });
    });

    it('should navigation back to dashboard ', async () => {

        const Stub = createRoutesStub([
            {
                path : 'deploy-on-save',
                
            }
        ])

        renderTestObject(isDesktopMediaQuery());
        await clickOnMenuItems('Deployments', 'Deploy on Save');

        await waitFor(() => {
            const url = new URL(window.location.href);
            expect(url.pathname).not.toBe('/')
        });

        console.log(window.location.href);
    });

    async function clickOnMenuItems(...labels: string[]) {
        for (let i = 0; i < labels.length; i++) {
            await clickOnMenuItem(labels[i]);
        }
    }

    async function clickOnMenuItem(label: string) {
        const element = screen.getByText(label);
        await act(async () => {
            element.click();
        });
    }

    function renderTestObject(context: ZeitlerForceDocumentationContextType) {
        return render(
            <ZeitlerForceDocumentationContext.Provider value={context}>
                <MemoryRouter>
                    <ZeitlerForceDocumentation></ZeitlerForceDocumentation>
                </MemoryRouter>
            </ZeitlerForceDocumentationContext.Provider>);
    }
});
