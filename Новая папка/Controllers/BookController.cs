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
            List<Book> books = db.Books.Where(book => 
                EF.Functions.Like(book.Author.FirtstName, $"%{author}%") ||
                EF.Functions.Like(book.Author.LastName, $"%{author}%")   ||
                EF.Functions.Like(book.Author.MiddleName, $"%{author}%")
            ).ToList();

            if (books.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return books;
        }
        [Route("GetTitlesByBookId")]
        [HttpGet]
        public async Task<ActionResult<List<BookTytle>>> GetTitlesByBookId(int BookId)
        {
            DBConnect db = new();
            List<BookTytle> tytles = db.BookTytles.Where(tytle => tytle.Book.Id == BookId).ToList();

            if (tytles.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return tytles;
        }
        [Route("GetEntity")]
        [HttpGet]
        public async Task<ActionResult<List<ARObject>>> GetEntity(int BookId, int TytleId, string partName)
        {
            DBConnect db = new();
            List<ARObject> objects = db.ARObjects.Where(obj => obj.Book.Id == BookId && obj.BookTytle.Id == TytleId && EF.Functions.Like(obj.Name, $"%{partName}%")).ToList();

            if (objects.Count == 0)
                this.HttpContext.Response.StatusCode = 404;

            return objects;
        }
    }
}
