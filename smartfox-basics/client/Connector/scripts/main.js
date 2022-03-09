var sfs;

//------------------------------------
// USER INTERFACE HANDLERS
//------------------------------------

function onConnectBtClick()
{
	// Clear log window
	document.getElementById("log").innerHTML = "";

	// Disable interface
	enableInterface(false);

	// Log message
	trace("Connecting...");

	// Create configuration object
	var config = {};
	config.host = document.getElementById("addressIn").value;
	config.port = Number(document.getElementById("portIn").value);
	config.debug = document.getElementById("debugCb").checked;
	config.zone = "JavaHelloWorld";
	config.useSSL = false;

	// Create SmartFox client instance
	sfs = new SFS2X.SmartFox(config);

	// Set logging
	sfs.logger.level = SFS2X.LogLevel.INFO;
	sfs.logger.enableConsoleOutput = true;
	sfs.logger.enableEventDispatching = true;

	sfs.logger.addEventListener(SFS2X.LoggerEvent.DEBUG, onDebugLogged, this);
	sfs.logger.addEventListener(SFS2X.LoggerEvent.INFO, onInfoLogged, this);
	sfs.logger.addEventListener(SFS2X.LoggerEvent.WARNING, onWarningLogged, this);
	sfs.logger.addEventListener(SFS2X.LoggerEvent.ERROR, onErrorLogged, this);

	// Add event listeners
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, onConnection, this);
	sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost, this);

	// Attempt connection
	sfs.connect();
}

function onDisconnectBtClick()
{
	// Log message
	trace("Disconnecting...");

	// Disconnect
	sfs.disconnect();
}

function onLoginBtClick() {
	var name = document.getElementById("nameIn").value;
	sfs.send(new SFS2X.LoginRequest(name));
}

function onHiBtClick() {
	sfs.send(new SFS2X.ExtensionRequest("Hi", new SFS2X.SFSObject()));
}

//------------------------------------
// LOGGER EVENT HANDLERS
//------------------------------------

function onDebugLogged(event)
{
	trace(event.message, "DEBUG", true);
}

function onInfoLogged(event)
{
	trace(event.message, "INFO", true);
}

function onWarningLogged(event)
{
	trace(event.message, "WARN", true);
}

function onErrorLogged(event)
{
	trace(event.message, "ERROR", true);
}

//------------------------------------
// SFS EVENT HANDLERS
//------------------------------------

function onConnection(event)
{
	if (event.success)
	{
		trace("Connected to SmartFoxServer 2X!<br>SFS2X API version: " + sfs.version);

		// Show disconnect button
		switchButtons();
	}
	else
	{
		trace("Connection failed: " + (event.errorMessage ? event.errorMessage + " (" + event.errorCode + ")" : "Is the server running at all?"));

		// Reset
		reset();
	}
}

function onConnectionLost(event)
{
	trace("Disconnection occurred; reason is: " + event.reason);

	// Hide disconnect button
	switchButtons();

	// Reset
	reset();
}

//------------------------------------
// OTHER METHODS
//------------------------------------

function enableInterface(enabled)
{
	document.getElementById("addressIn").disabled = !enabled;
	document.getElementById("portIn").disabled = !enabled;
	document.getElementById("debugCb").disabled = !enabled;
	document.getElementById("connectBt").disabled = !enabled;
}

function trace(message, prefix, isDebug)
{
	var text = document.getElementById("log").innerHTML;

	var open = "<div" + (isDebug ? " class='debug'" : "") + ">" + (prefix ? "<strong>[SFS2X " + prefix + "]</strong><br>" : "");
	var close = "</div>";

	if (isDebug)
		message = "<pre>" + message.replace(/(?:\r\n|\r|\n)/g, "<br>") + "</pre>";

	document.getElementById("log").innerHTML = text + open + message + close;
}

function switchButtons()
{
    var connectBt = document.getElementById("connectBt");
    var disconnectBt = document.getElementById("disconnectBt");

    if (connectBt.style.display === "none")
    {
        connectBt.style.display = "block";
        disconnectBt.style.display = "none";
		connectedOptions.style.display = "none";
    }
    else
    {
        connectBt.style.display = "none";
        disconnectBt.style.display = "block";
		connectedOptions.style.display = "block";
    }
}

function reset()
{
	// Enable interface
	enableInterface(true);

	// Remove SFS2X listeners
	sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, onConnection);
	sfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, onConnectionLost);
	
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.DEBUG, onDebugLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.INFO, onInfoLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.WARNING, onWarningLogged);
	sfs.logger.removeEventListener(SFS2X.LoggerEvent.ERROR, onErrorLogged);
	
	sfs = null;
}




