/**
 * Prints a message
 *
 * @function info
 * @param {(string|string[])} message - One message or an array of messages
 *
 * @example <caption>Basic</caption>
 * var log = require("geodash-build-log");
 * var project = {"name": "Untitled", "path": ... };
 * ...
 * log.info(project);
 * @example <caption>Multiple Lines</caption>
 * var log = require("geodash-build-log");
 * ...
 * var project = {"name": "Untitled", "path": ... };
 * ...
  * log.info(["Project", JSON.stringify(project), "#############"]);
 */


var gutil = require('gulp-util');

module.exports = function(message)
{
  if(Array.isArray(message))
  {
    for(var i = 0; i < message.length; i++)
    {
      gutil.log(gutil.colors.magenta(message[i]));
    }
  }
  else
  {
    gutil.log(gutil.colors.magenta(message));
  }
};
