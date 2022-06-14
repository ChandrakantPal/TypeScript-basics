import { introduceMyself } from '../src'

describe('introduceMyself', () => {
  it('should introduce me', () => {
    expect(introduceMyself('J', 'H')).toEqual('Hello J H')
  })
})
