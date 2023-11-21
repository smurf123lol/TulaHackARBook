using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Authors")]
    public class Author
    {     
        public int Id { get; set; }
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string MiddleName { get; set; } 
        public Author()
        {

        }
    }
}
