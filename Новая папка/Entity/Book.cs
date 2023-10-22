using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Books")]
    public class Book(string name, Author author, string description = "unknow", string imageURL = "http://localhost:5216/Book/Storage/placeHolder.png")
    {
        public int Id { get; set; }
        public string Name { get; set; } = name;
        public Author Author { get; set; } = author;
        public string Description { get; set; } = description;
        public string ImageURL { get; set; } = imageURL;
    }
}
