/**
 * Prints a message only if the debug flag was set on the command line
 *
 * @function debug
 * @param {(string|string[])} message - One message or an array of messages
 * @param {(Object)} argv - Command line arguments parsed by 'yargs'.
 *
 * @example <caption>Basic</caption>
 * var argv = require('yargs').argv;
 * var log = require("geodash-build-log");
 * var project = {"name": "Untitled", "path": ... };
 * ...
 * log.debug(project, argv);
 * @example <caption>Multiple Lines</caption>
 * var argv = require('yargs').argv;
 * var log = require("geodash-build-log");
 * ...
 * var project = {"name": "Untitled", "path": ... };
 * ...
  * log.debug(["Project", JSON.stringify(project), "Command Line Arguments", JSON.stringify(argv), "#############"], argv);
 */

var gutil = require('gulp-util');

module.exports = function(message, argv)
{
  if(argv != undefined && (argv.debug == true || argv.debug == "true" || argv.debug == "t"))
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
  }
};
