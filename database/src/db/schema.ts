import { sqliteTable, integer, text, real } from 'drizzle-orm/sqlite-core'

export const produtos = sqliteTable('produtos', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  desc: text('desc').notNull(),
  price: real('price').notNull(),
})

export type Produto = typeof produtos.$inferSelect       // resultado de SELECT
export type NovoProduto = typeof produtos.$inferInsert    // payload de INSERT