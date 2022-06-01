interface MyUser {
  name: string
  id: string
  email?: string
  phone?: string
}
// Partial makes all the fields optional
type MyUserOptionals = Partial<MyUser>

// interface MyUserOptionals {
//   name?: string
//   id?: string
//   email?: string
// }

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  }
}

console.log(
  merge(
    {
      name: 'Bob',
      id: '1233',
      email: 'dontemail@dontemail.com',
    },
    {
      email: 'dontemailbaz@dontemail.com',
    }
  )
)

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>

const mapById = (users: MyUser[]): Record<string, MyUser> => {
  return users.reduce((a, v) => {
    return {
      ...a,
      [v.id]: v,
    }
  }, {})
}

console.log(
  mapById([
    {
      id: 'foo',
      name: 'Mr. Foo',
    },
    {
      id: 'baz',
      name: 'Mrs. Baz',
    },
  ])
)
