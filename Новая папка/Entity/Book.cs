using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace VirtualBook.Entity
{
    [PrimaryKey("Id")]
    [Table("Books")]
    public class Book
    {
        public Book(string name, string author = "unknow", string description = "unknow", string imageURL = "http://localhost:5216/Book/Storage/placeHolder.png")
        {
            Name = name;
            Author = author;
            Description = description;
            ImageURL = imageURL;
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public string ImageURL { get; set; }
    }
}
