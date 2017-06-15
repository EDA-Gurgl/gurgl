import knex from 'knex'
import config from '../../knexfile'

export default function(test, cb) {
  test.beforeEach(function (t) {
    t.context.db = knex(config.test)
    if (cb) { cb(t.context.db) }
    return t.context.db.migrate.latest()
      .then(function () {
        return t.context.db.seed.run()
      })
  })

  test.afterEach(function (t) {
    t.context.db.destroy()
  })
}
