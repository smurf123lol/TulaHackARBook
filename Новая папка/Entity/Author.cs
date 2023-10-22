using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Authors")]
    public class Author(string firtstName, string lastName, string middleName)
    {     
        public int Id { get; set; }
        public string FirtstName { get; set; } = firtstName;
        public string LastName { get; set; } = lastName;
        public string MiddleName { get; set; } = middleName;
    }
}
