using Microsoft.AspNetCore.Mvc;
using CustomerDashboardApi.Models;

namespace CustomerDashboardApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomersController : ControllerBase
    {
        private static List<Customer> _customers = new List<Customer>
        {
            new Customer { Id = 1, Name = "Customer1Name", Email = "Customer1Email", Status = "Active" },
            new Customer { Id = 2, Name = "Customer2Name", Email = "Customer2Email", Status = "Inactive" }
        };

        [HttpGet]
        public IActionResult GetCustomers()
        {
            return Ok(_customers);
        }

        [HttpPost]
        public IActionResult AddCustomer([FromBody] Customer newCustomer)
        {
            newCustomer.Id = _customers.Max(c => c.Id) + 1;
            
            _customers.Add(newCustomer);

            return Ok(newCustomer);
        }
    }
}

