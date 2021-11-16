/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe('Spinner', () => {
    test('spinner contains three elements', () => {
        const { getByTestId } = render(<Spinner />);
        const elem = getByTestId('spinner');
        expect(elem.children.length).toBe(3);
    });
});
