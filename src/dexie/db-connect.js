import Dexie from 'dexie'
import { DEXIE_DB_NAME, DEXIE_DB_VERSION } from '@/config/setting'

class DBConnect {
  static DB_NAME = DEXIE_DB_NAME;
  static DB_VERSION = DEXIE_DB_VERSION;

  static createConnection (schema = {}) {
    const connection = new Dexie(this.DB_NAME)
    connection.version(this.DB_VERSION).stores(schema)
    return connection
  }
}

export default DBConnect
