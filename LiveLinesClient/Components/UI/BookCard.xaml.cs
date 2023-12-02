namespace LiveLinesClient.Components.UI;

public partial class BookCard : ContentView
{
    public static readonly BindableProperty _imgSrc =
        BindableProperty.Create(nameof(ImageSource), typeof(string), typeof(BookCard));
    public static readonly BindableProperty bookName = 
        BindableProperty.Create(nameof(BookName), typeof(string), typeof(BookCard));

    public string ImageSource
    {
        get => (string)GetValue(_imgSrc);
        set => SetValue(_imgSrc, value);
    }
    public string BookName
    {
        get => (string)GetValue(bookName);
        set => SetValue(bookName, value);
    }
    public BookCard()
	{
		InitializeComponent();
	}

    private void OnTapped(object sender, EventArgs e)
    {
        
    }
}