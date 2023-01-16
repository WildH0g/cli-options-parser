import { argsToObj } from '../src/app';

describe('import working', () => {
  const incl: [string, string] = ['/usr/bin/node', '/home/node/test/app.js'];
  it('importing a simple option', () => {
    const result = argsToObj(...incl, '--a-key', 'b');
    expect(result).toEqual({ '--a-key': 'b' });
  });

  it('importing multiple options', () => {
    const result = argsToObj(
      ...incl,
      '--a-key',
      'b',
      '--c-key',
      'd',
      '--e-key',
      'f'
    );
    expect(result).toEqual({ '--a-key': 'b', '--c-key': 'd', '--e-key': 'f' });
  });

  it('importing an option without value', () => {
    const result = argsToObj(...incl, '--a-key');
    expect(result).toEqual({ '--a-key': true });
  });

  it('importing options with and without values', () => {
    const result = argsToObj(
      ...incl,
      '--a-key',
      'b',
      '--c-key',
      '--d-key',
      'e'
    );
    expect(result).toEqual({ '--a-key': 'b', '--c-key': true, '--d-key': 'e' });
  });

  it('throw on wrong syntax', () => {
    expect(() =>
      argsToObj(...incl, '--a-key', 'b', '--c-key', 'd', 'e')
    ).toThrow();
  });

  it('works with shorthand -k syntax', () => {
    const result = argsToObj(...incl, '-a', 'a', '-B', '--c-key', 'c');
    expect(result).toEqual({
      '-a': 'a',
      '-B': true,
      '--c-key': 'c',
    });
  });
});
