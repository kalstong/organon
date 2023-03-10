const { ConnectionError,
        CriticalError,
        ExecutionError } = require('../errors')

test('Test creation of ConnectionError', () => {
    const err = new ConnectionError('Sample message', { extra: 'information' })

    expect(err instanceof ConnectionError).toBe(true);
    expect(err.isOperational).toBe(false);
    expect(err.extra).toStrictEqual({ "extra": "information" });
    expect(err.message).toStrictEqual('Sample message');
    expect(err.name).toStrictEqual('Error');
});

test('Test creation of CriticalError', () => {
    const err = new CriticalError('Sample message', { extra: 'information' })

    expect(err instanceof CriticalError).toBe(true);
    expect(err.isOperational).toBe(false);
    expect(err.extra).toStrictEqual({ "extra": "information" });
    expect(err.message).toStrictEqual('Sample message');
    expect(err.name).toStrictEqual('Error');
});

test('Test creation of ExecutionError', () => {
    const err = new ExecutionError('Sample message', { extra: 'information' })

    expect(err instanceof ExecutionError).toBe(true);
    expect(err.isOperational).toBe(false);
    expect(err.extra).toStrictEqual({ "extra": "information" });
    expect(err.message).toStrictEqual('Sample message');
    expect(err.name).toStrictEqual('Error');
});