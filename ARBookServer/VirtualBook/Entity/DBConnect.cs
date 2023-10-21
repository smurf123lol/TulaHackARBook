using Microsoft.EntityFrameworkCore;

namespace VirtualBook.Entity
{
    public class DBConnect : DbContext
    {
        public DbSet<Book> Books { get; set; } = null!;
        public DbSet<BookTitles> BookTytles { get; set; } = null!;
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=VirtualBookDB.db");
        }
    }
}
