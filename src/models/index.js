import DBConnect from '@/dexie/db-connect'
import { UserSchema } from '@/models/users'
import { BundleSchema } from '@/models/bundle'

const SchemaModel = { ...UserSchema, ...BundleSchema }

export default DBConnect.createConnection(SchemaModel)
