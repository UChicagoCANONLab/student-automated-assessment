/* --- Contains web-crawling functions. --- */

/* Parses out link to studio and initiates crawl. */
function crawlFromProject(string) {

  /* Variables */
  var id = 0;
  var page = 1;
  var res = string.split("/");

  /* Retrieve studio ID. */
  res.forEach(function(element){
    if(/^\d+$/.test(element)){
      id = element;
    }
  });

  /* Check for invalid URL. */
  if (id == 0)
  {
    linkError();
    return;
  }

  collectLinks (id);
}

/* Collects links to project pages from studio html and initiates JSON recovery. */
function collectLinks(id)
{
  /* Constants. */
  var pre = "https://cors-anywhere.herokuapp.com/http://projects.scratch.mit.edu/internalapi/project/";
  var post = "/get/";
  var ret_val = pre + id + post;   
  getJSON(ret_val,analyze,[]);

}