using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Entity")]
    public class ARObject
    {
        public int Id { get; set; }
        public Book Book { get; set; }
        public BookTytle BookTytle { get; set; }
        public string Name{ get; set; }
        public string Description { get; set; }
        public string ARObjectURL { get; set; }
    }
}
