const timedoutPromise = require('../timedoutPromise');

describe('timedoutPromise test', () => {

  test('should throw if ms is not a number', () => {
    expect(() => {
      timedoutPromise('2000', () => { });
    }).toThrowError('ms must be a number');
  });

  test('should throw if ms is less than 1', () => {
    expect(() => {
      timedoutPromise(0, () => { });
    }).toThrow('ms must be greater than 1');
  });

  test('should throw if promiseFunc is not provided', () => {
    expect(() => {
      timedoutPromise(42);
    }).toThrow('promiseFunc is required');
  });

  test('should reject if timeout occures before promiseFunc resolves', () => {
    const hundredMillisecondPromise = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 100);
    });
    return expect(timedoutPromise(50, hundredMillisecondPromise())).rejects.toBe('Timed out in 50ms.');
  });

  test('should resolve if timeout occures after promiseFunc resolves', () => {
    const hundredMillisecondPromise = () => new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Resolved after 100ms.');
      }, 100);
    });
    return expect(timedoutPromise(200, hundredMillisecondPromise())).resolves.toBe('Resolved after 100ms.');
  });

});
