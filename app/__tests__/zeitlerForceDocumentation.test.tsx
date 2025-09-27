
import { describe, it, expect } from '@jest/globals';
import { ZeitlerForceDocumentation } from '../zeitlerForceDocumentation';
import { render, screen } from './testUtil';
import { MemoryRouter } from 'react-router';

describe('<ZeitlerForceDocumentation>', () => {
    it('should do the thing', () => {
        renderTestObject();
    });

    function renderTestObject() {
        return render(
            <MemoryRouter>
                <ZeitlerForceDocumentation></ZeitlerForceDocumentation>
            </MemoryRouter>);
    }
});
