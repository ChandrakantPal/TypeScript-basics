interface MyUser {
  name: string
  id: number
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
      id: 1233,
      email: 'dontemail@dontemail.com',
    },
    {
      email: 'dontemailbaz@dontemail.com',
    }
  )
)

type RequiredMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>

type UserWithoutID = Omit<MyUser, 'id'>

const mapById = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
  return users.reduce((a, v) => {
    const { id, ...other } = v
    return {
      ...a,
      [id]: other,
    }
  }, {})
}

console.log(
  mapById([
    {
      id: 1,
      name: 'Mr. Foo',
    },
    {
      id: 2,
      name: 'Mrs. Baz',
    },
  ])
)
