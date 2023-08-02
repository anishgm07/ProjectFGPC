using Entities;
public class HomePageService
{
    public List<HomePageEntity> GetHomePage()
    {
        // Your logic to retrieve contents from the database using ADO.NET
        // (e.g., using SqlCommand, SqlDataReader, etc.)
        // For simplicity, this example returns mock data.
        return new List<HomePageEntity>
        {
            new HomePageEntity { Id = 1, Title = "Sample Title 1", Body = "Sample Body 1" },
            new HomePageEntity { Id = 2, Title = "Sample Title 2", Body = "Sample Body 2" },
            // Add more content items as needed
        };
    }
}