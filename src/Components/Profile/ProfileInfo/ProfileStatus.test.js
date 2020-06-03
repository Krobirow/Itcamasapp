import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
	test("after cration span shoul be displayed", () => {
		const component = create(<ProfileStatusWithHooks status='It-cama' />);
        const root = component.root;
        let span = root.findByType("span");
		expect(span).not.toBeNull();
    });

    test("span shoul be displayed with correct status", () => {
		const component = create(<ProfileStatusWithHooks status='It-cama' />);
        const root = component.root;
        let span = root.findByType("span");
		expect(span.children[0]).toBe("It-cama");
    });
    
    test("after cration input shouldn't be displayed", () => {
		const component = create(<ProfileStatusWithHooks status='It-cama' />);
        const root = component.root;
        
		expect( () => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("input should be displayed in editMode instead of span", () => {
		const component = create(<ProfileStatusWithHooks status='It-cama' />);
        const root = component.root;
        
        let span = root.findByType("span");
        span.props.onDoubleClick()

        let input = root.findByType("input");
        
		expect(input.props.value).toBe("It-cama");
    });


    test("callback should be called", () => {
        const mockCallback = jest.fn();
		const component = create(<ProfileStatusWithHooks status='It-cama' updateStatus={mockCallback} />);
        const instance = component.getInstance();
        
        instance.deactivateEditMode();
        
		expect(mockCallback.mock.calls.length).toBe(1);
    });
});
