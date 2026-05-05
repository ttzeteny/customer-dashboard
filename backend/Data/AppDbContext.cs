using Microsoft.EntityFrameworkCore;
using CustomerDashboardApi.Models;

namespace CustomerDashboardApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        
        public DbSet<Customer> Customers { get; set; }
        public DbSet<User> Users { get; set; }
    }
}