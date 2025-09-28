import { describe, it } from "@jest/globals";
import { render } from "./testUtil";
import App from "../root";


describe('<App>', () => {
    it('should do the thing', () => {
        renderTestObject();
    });

    function renderTestObject() {
        return render(<App></App>)
    }
});