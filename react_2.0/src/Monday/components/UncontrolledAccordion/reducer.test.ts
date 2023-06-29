import {reducer, StateType, TOGGLE_COLLAPSED} from './UncontrolledAccordion'


test('reducer should change value to true', () => {

    //data
    const testState: StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(testState, {type: TOGGLE_COLLAPSED})

    //expected result
    expect(newState.collapsed).toBe(true)
})
test('reducer should change value to false', () => {

    //data
    const testState: StateType = {
        collapsed: true
    }

    //action
    const newState = reducer(testState, {type: TOGGLE_COLLAPSED})

    //expected result
    expect(newState.collapsed).toBe(false)
})
test('reducer should change value to error', () => {

    //data
    const testState: StateType = {
        collapsed: true
    }

    //expected result
    expect(() => {
        reducer(testState, {type: 'FAKETYPE'})
    }).toThrowError()
})

