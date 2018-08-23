using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeServiceWebAPI.Controllers
{
    public class EmployeeController : ApiController
    {
        public IEnumerable<EmployeeAngular> Get()
        {
            using (EmployeePopupEntities entities = new EmployeePopupEntities())
            {
              return  entities.EmployeeAngulars.ToList();
            }
        }


        public EmployeeAngular Get(string empID)
        {
            using (EmployeePopupEntities entities = new EmployeePopupEntities())
            {
                return entities.EmployeeAngulars.FirstOrDefault(a => a.empID == empID);
            }
        }
    }
}
