
import { describe, it, expect } from '@jest/globals';
import { ZeitlerForceDocumentation, ZeitlerForceDocumentationContext, type ZeitlerForceDocumentationContextType, type ZeitlerForceDocumentationProps } from '../zeitlerForceDocumentation';
import { render, isMobileMediaQuery, screen } from './testUtil';
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

    function renderTestObject(context: ZeitlerForceDocumentationContextType) {
        return render(
            <ZeitlerForceDocumentationContext.Provider value={context}>
                <MemoryRouter>
                    <ZeitlerForceDocumentation></ZeitlerForceDocumentation>
                </MemoryRouter>
            </ZeitlerForceDocumentationContext.Provider>);
    }
});
