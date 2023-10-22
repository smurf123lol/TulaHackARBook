using Microsoft.EntityFrameworkCore;

namespace VirtualBook.Entity
{
    public class DBConnect : DbContext
    {
        public DbSet<Book> Books { get; set; } = null!;
        public DbSet<BookTytle> BookTytles { get; set; } = null!;
        public DbSet<Author> Authors { get; set; } = null!;
        public DbSet<ARObject> ARObjects { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=VirtualBookDB.db");
        }
    }
}
