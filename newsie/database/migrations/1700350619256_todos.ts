import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Todos extends BaseSchema {
	protected tableName = "todos"

	public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id")
            table.string("title").notNullable()
            table.string("desc").notNullable()
            table.boolean("done").nullable()

            table.timestamp('created_at', { useTz: true })
            table.timestamp('updated_at', { useTz: true })
		})
	}

	public async down() {
		this.schema.dropTable(this.tableName)
	}
}
