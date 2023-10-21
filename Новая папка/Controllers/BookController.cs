using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VirtualBook.Entity;

namespace VirtualBook.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        [Route("GetBookByName")]
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBookByName(string partName)
        {

            DBConnect db = new();
            List<Book> books = db.Books.Where(book => EF.Functions.Like(book.Name, $"%{partName}%")).ToList();

            if (books.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return books;
        }
        [Route("GetBookByAuthor")]
        [HttpGet]
        public async Task<ActionResult<List<Book>>> GetBookByAuthor(string author)
        {
            DBConnect db = new();
            List<Book> books = db.Books.Where(book => EF.Functions.Like(book.Author, $"%{author}%")).ToList();

            if (books.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return books;
        }
        [Route("GetTitlesByBookName")]
        [HttpGet]
        public async Task<ActionResult<List<BookTitles>>> GetTitlesByBookName(string BookName)
        {
            DBConnect db = new();
            List<BookTitles> tytles = db.BookTytles.Where(tytle => tytle.Book.Name == BookName).ToList();

            if (tytles.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return tytles;
        }
        [Route("GetTitlesByBookId")]
        [HttpGet]
        public async Task<ActionResult<List<BookTitles>>> GetTitlesByBookId(int BookId)
        {
            DBConnect db = new();
            List<BookTitles> tytles = db.BookTytles.Where(tytle => tytle.Book.Id == BookId).ToList();

            if (tytles.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return tytles;
        }
    }
}
