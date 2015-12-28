// Use this file to include any custom functions for your app.

//Display current status
function currentstatus()
{
   var sregkey = "HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\Styles\\MaxScriptStatements";
   var currentvalue = null;
   var returnvalue = fnRegExists(sregkey);
   if (returnvalue)
   {
      currentvalue = fnReadReg(sregkey);
   }

   var objDiv = document.getElementById("currentsetting");

   if (currentvalue == -1)
   {
      objDiv.innerHTML = "CURRENT STATUS: Message prompts are currently hidden!";
   }
   else
   {
      objDiv.innerHTML = "CURRENT STATUS: Message prompts are currently set to appear!";
   }
   objDiv = null;
}

