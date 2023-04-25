import DB_STORE from '@/models/index'

export async function saveUserInfo (row) {
  try {
    // const user = await DB_STORE.users.where('id').equals(1).first()
    const user = await DB_STORE.users.get(row.id)
    console.log(user)
    if (user) {
      const id = await DB_STORE.users.put(Object.assign(user, row))
      console.log(`Update user has been added with ID ${id}`)
    } else {
      const id = await DB_STORE.users.add(row)
      console.log(`New user has been added with ID ${id}`)
    }
  } catch (error) {
    console.error(`Failed to add user: ${error.stack || error}`)
  }
}

export async function getUserInfoById (id) {
  try {
    if (!id) return null
    return await DB_STORE.users.get(id)
  } catch (error) {
    console.error(`Failed to add user: ${error.stack || error}`)
  }
}

export async function getUserList () {
  try {
    return await DB_STORE.users.toArray()
  } catch (error) {
    console.error(`Failed to add user: ${error.stack || error}`)
  }
}
