using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;


[ApiController]
public class HomePageController : ControllerBase
{
    private readonly HomePageService _homePageService;

    public HomePageController(HomePageService homePageService)
    {
        _homePageService = homePageService;
    }

    [Route("api/homepagecontent")]
    [HttpGet]
    public IActionResult GetHomePage()
    {
        var contents = _homePageService.GetHomePage();
        return Ok(contents);
    }
}