using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Books")]
    public class Book
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int AuthorId { get; set; }
        public Author Author { get; set; } 
        public string Description { get; set; } 
        public string ImageURL { get; set; } 
        public Book()
        {

        }
    }
}
