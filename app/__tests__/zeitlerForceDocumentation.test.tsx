
import { describe, it, expect } from '@jest/globals';
import { ZeitlerForceDocumentation, ZeitlerForceDocumentationContext, type ZeitlerForceDocumentationContextType, type ZeitlerForceDocumentationProps } from '../zeitlerForceDocumentation';
import { render, screen, isMobileMediaQuery } from './testUtil';
import { MemoryRouter } from 'react-router';

describe('<ZeitlerForceDocumentation>', () => {

    it('should do the thing', () => {
        renderTestObject(isMobileMediaQuery());
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
