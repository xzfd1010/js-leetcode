import restoreIpAddress from '../../code/recursion/restoreIpAddress'

test('25525511135', () => {
  expect(restoreIpAddress('25525511135')).toEqual(['255.255.11.135', '255.255.111.35'])
})
