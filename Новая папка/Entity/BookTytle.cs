using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("BookTitles")]
    public class BookTytle
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public Book Book { get; set; }
        public int No { get; set; }
        public int Name { get; set; }
        public BookTytle() { }
    }
}
