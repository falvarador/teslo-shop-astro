import { column, defineDb, defineTable } from "astro:db";

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    username: column.text({ uniqueKey: true, optional: false }),
    password: column.text({ optional: true }),
  },
});

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id,
    }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Session,
  },
});
