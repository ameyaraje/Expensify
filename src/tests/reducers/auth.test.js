import authReducer from '../../reducers/auth';

test('should set default state for auth reducer', () => {
    const state = authReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({});
});

test('should test login', () => {
    const uid = 'abc123';
    const action = {
        type: 'LOGIN',
        uid: uid
    };
    const state = authReducer({}, action);

    expect(state.uid).toBe(uid);
});

test('should test logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({}, action);

    expect(state).toEqual({});
});