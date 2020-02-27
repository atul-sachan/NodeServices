using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using Microsoft.AspNetCore.SpaServices.Prerendering;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public async Task<IActionResult> Dchart([FromServices] INodeServices nodeServices)
        {
            var options = new { width = 400, height = 200 };

            var data = new[] {
        new { label = "Abulia", count = 10 },
        new { label = "Betelgeuse", count = 20 },
        new { label = "Cantaloupe", count = 30 },
        new { label = "Dijkstra", count = 40 }
    };

            ViewData["ChartImage"] = await nodeServices.InvokeAsync<string>("./NodeCode/dchart.js", options, data);

            return View();
        }

        public async Task<IActionResult> Prerendering([FromServices] ISpaPrerenderer prerenderer)
        {
            var result = await prerenderer.RenderToString("./NodeCode/prerenderPage.js");

            if (!string.IsNullOrEmpty(result.RedirectUrl))
            {
                return Redirect(result.RedirectUrl);
            }

            ViewData["PrerenderedHtml"] = result.Html;
            ViewData["PrerenderedGlobals"] = result.CreateGlobalsAssignmentScript();
            return View();
        }
        public async Task<IActionResult> Chart([FromServices] INodeServices nodeServices)
        {
            var options = new { width = 400, height = 200, showArea = true, showPoint = true, fullWidth = true };
            var data = new
            {
                labels = new[] { "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" },
                series = new[] {
                    new[] { 1, 5, 2, 5, 4, 3 },
                    new[] { 2, 3, 4, 8, 1, 2 },
                    new[] { 5, 4, 3, 2, 1, 0 }
                }
            };

            ViewData["ChartMarkup"] = await nodeServices.InvokeAsync<string>("./NodeCode/renderChart.js", "line", options, data);

            return View();
        }

        public async Task<IActionResult> Node([FromServices] INodeServices nodeServices)
        {
            int[] arr = {1,2,3,4,5};
            int chunk = 2;
            var result = await nodeServices.InvokeAsync<int[][]>("./NodeCode/lodashservice.js", arr, chunk);
            ViewData["result"] = string.Join(',', result[0]);
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
