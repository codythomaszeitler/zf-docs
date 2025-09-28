import { describe, it, expect } from '@jest/globals';
import { type ZeitlerForceDocumentationContextType } from '../zeitlerForceDocumentation';
import { isMobileMediaQuery, screen, isDesktopMediaQuery, renderAppTestObject } from './testUtil';
import { act } from 'react';


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

        it('should "deploy on save" when you select deployments -> deploy on save', async () => {
            renderTestObject(isDesktopMediaQuery());

            await clickOnMenuItems('Deployments', 'Deploy on Save');
            const deployOnSaveScreen = screen.queryByTestId('deploy-on-save-screen');
            expect(deployOnSaveScreen).toBeTruthy();
        });
    });

    it('should navigation back to dashboard ', async () => {
        renderTestObject(isDesktopMediaQuery());
        await clickOnMenuItems('Deployments', 'Deploy on Save');

        const deployOnSaveScreen = screen.queryByTestId('deploy-on-save-screen');
        expect(deployOnSaveScreen).toBeTruthy();
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
        return renderAppTestObject(context);
    }
});
