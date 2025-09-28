
import { describe, it, expect } from '@jest/globals';
import { ZeitlerForceDocumentation, ZeitlerForceDocumentationContext, type ZeitlerForceDocumentationContextType, type ZeitlerForceDocumentationProps } from '../zeitlerForceDocumentation';
import { render, isMobileMediaQuery, screen, isDesktopMediaQuery } from './testUtil';
import { MemoryRouter } from 'react-router';
import { act } from 'react';
import { beforeEach } from 'node:test';

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

            clickOnMenuItem('Deployments');
            clickOnMenuItem('Deploy on Save');
        });
    });

    function clickOnMenuItem(label: string) {
        const element = screen.getByText(label);
        act(() => {
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
