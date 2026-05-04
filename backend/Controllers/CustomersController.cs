using Microsoft.AspNetCore.Mvc;
using CustomerDashboardApi.Models;

namespace CustomerDashboardApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = new List<Customer>
            {
                new Customer
                {
                    Id = 1,
                    Name = "Customer1Name",
                    Email = "Customer1Email",
                    Status = "Active"
                },
                new Customer
                {
                    Id = 2,
                    Name = "Customer2Name",
                    Email = "Customer2Email",
                    Status = "Inactive"
                }
            };
            
            return Ok(customers);
        }
    }
}

