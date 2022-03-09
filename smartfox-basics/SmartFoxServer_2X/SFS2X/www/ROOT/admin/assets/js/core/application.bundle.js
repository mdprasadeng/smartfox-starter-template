/*! (c) gotoAndPlay | All rights reserved */
var application =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"application": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "assets/js/core/modules/" + ({"module-12~module-15~module-16~module-4":"module-12~module-15~module-16~module-4","module-15":"module-15","module-4":"module-4","module-13":"module-13","module-14":"module-14","module-3":"module-3","module-9":"module-9","vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8":"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8","module-10":"module-10","module-11":"module-11","module-16":"module-16","module-5":"module-5","module-6":"module-6","module-7":"module-7","module-8":"module-8","vendors~module-0":"vendors~module-0","module-0":"module-0","vendors~module-1":"vendors~module-1","module-1":"module-1","vendors~module-12":"vendors~module-12","module-12":"module-12"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonpapplication"] = window["webpackJsonpapplication"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/application.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/application.js":
/*!****************************!*\
  !*** ./src/application.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _shell_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell-controller */ "./src/shell-controller.js");


$( document ).ready(function()
{
    console.info("SmartFoxServer 2X AdminTool ready!");

	// Create shell controller instance
	this.controller = new _shell_controller__WEBPACK_IMPORTED_MODULE_0__["ShellController"]();
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/view-stack.js":
/*!**************************************!*\
  !*** ./src/components/view-stack.js ***!
  \**************************************/
/*! exports provided: ViewStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStack", function() { return ViewStack; });
class ViewStack extends HTMLElement
{
	constructor()
	{
	    super();

		// Attach a shadow root
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.innerHTML = `
			<style>
				:host {}

				::slotted(:not([aria-selected="true"])) {
			      display: none !important;
			    }
			</style>
			<slot></slot>
		`;

		// Select first item
		this.selectedIndex = 0;
	}

	get selectedElement()
	{
		return this._selectedElement;
	}

	set selectedElement(element)
	{
		if (element != null && element.parentNode == this)
		{
			this._selectedElement = element;

			for (let element of this.children)
			{
				if (element == this._selectedElement)
					element.setAttribute('aria-selected', 'true');
				else
					element.removeAttribute('aria-selected');
			}
		}
		else
		{
			console.error('Element is not a child of ViewStack');
		}
	}

	get selectedIndex()
	{
		return Array.from(this.children).indexOf(this._selectedElement);
	}

	set selectedIndex(index)
	{
		if (this.children.length > 0)
		{
			if (this.children[index] == null)
			{
				console.error("Invalid ViewStack index");
				return;
			}

			let element = this.children[index];
			this.selectedElement = element;
		}
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('view-stack'))
	window.customElements.define('view-stack', ViewStack);


/***/ }),

/***/ "./src/managers/chat-manager.js":
/*!**************************************!*\
  !*** ./src/managers/chat-manager.js ***!
  \**************************************/
/*! exports provided: ChatManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatManager", function() { return ChatManager; });
class ChatManager
{
	constructor(shellCtrl)
	{
		this.USERVAR_MODULE = 'mod';

		this.shellCtrl = shellCtrl;

		// TODO Implement chat manager after creating the chat UI in main shell
	}

	/**
	 * Called by the shell when the user loads a new module, so that this info
	 * can be saved in the user variables and displayed in the chat's userlist.
	 */
	setCurrentModule(moduleId)
	{
		// Save module id in user variables
		let userVar = new SFS2X.SFSUserVariable(this.USERVAR_MODULE, moduleId);
		this.shellCtrl.smartFox.send(new SFS2X.SetUserVariablesRequest([userVar]));
	}
}


/***/ }),

/***/ "./src/managers/connection-manager.js":
/*!********************************************!*\
  !*** ./src/managers/connection-manager.js ***!
  \********************************************/
/*! exports provided: ConnectionManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionManager", function() { return ConnectionManager; });
/* harmony import */ var _utils_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/event-dispatcher */ "./src/utils/event-dispatcher.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/events */ "./src/utils/events.js");



class ConnectionManager extends _utils_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]
{
	constructor(shellCtrl)
	{
		super();

		this.ADMIN_ZONE_NAME = "--=={{{ AdminZone }}}==--";
		this.EXTENSION_ERROR = "error";

		this.COMMANDS_PREFIX = "admin";
		this.COMMAND_RESTART = "restart";
		this.COMMAND_HALT = "halt";

		this.shellCtrl = shellCtrl;
	}

	get smartFox()
	{
		return this._sf;
	}

	connect(config, username, password)
	{
		// Set additional configuration options
		config.zone = this.ADMIN_ZONE_NAME;
		config.debug = false;

		// Create SmartFox instance
		this._sf = new SFS2X.SmartFox(config);

		// Add listeners to SmartFox events useful to the shell
		this._addSFSEventListeners();

		// Save reference to connection details
		this._config = config;
		this._username = username;
		this._password = password;

		// Connect to SmartFoxServer instance
		this._sf.connect();
	}

	disconnect()
	{
		this._sf.disconnect();
	}

	restartServer()
	{
		if (this._sf.isConnected)
			this._sf.send(new SFS2X.ExtensionRequest(this.COMMANDS_PREFIX + "." + this.COMMAND_RESTART));
	}

	haltServer()
	{
		if (this._sf.isConnected)
			this._sf.send(new SFS2X.ExtensionRequest(this.COMMANDS_PREFIX + "." + this.COMMAND_HALT));
	}

	/* --------- PRIVATE UTILITY METHODS --------- */

	_addSFSEventListeners()
	{
		this._sf.addEventListener(SFS2X.SFSEvent.CONNECTION, this._onConnection, this);
		this._sf.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this._onConnectionLost, this);
		this._sf.addEventListener(SFS2X.SFSEvent.LOGIN, this._onLogin, this);
		this._sf.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this._onLoginError, this);
		this._sf.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this._onExtensionResponse, this);
	}

	_reset()
	{
		// Remove SFS event listeners
		this._sf.removeEventListener(SFS2X.SFSEvent.CONNECTION, this._onConnection);
		this._sf.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this._onConnectionLost);
		this._sf.removeEventListener(SFS2X.SFSEvent.LOGIN, this._onLogin);
		this._sf.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this._onLoginError);
		this._sf.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this._onExtensionResponse);

		// Delete SmartFox class instance
		this._sf = null;

		// Delete connection details
		this._config = null;
		this._username = null;
		this._password = null;
	}

	_login()
	{
		// The current AdminTool version must be sent to the server during login, to check if it is up-to-date
		let params = new SFS2X.SFSObject();
		params.putInt('clientVer', this.shellCtrl.intVersion);

		// Login
		this._sf.send( new SFS2X.LoginRequest(this._username, this._password, params, this._config.zone) );
	}

	/* --------- SMARTFOX EVENT LISTENERS --------- */

	_onConnection(evtParams)
	{
		if (evtParams.success)
		{
			// Dispatch connection event
			this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].CONNECTION);

			// Send login request
			this._login();
		}
		else
		{
			// Dispatch error event
			this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].ERROR, {message: `Unable to connect to ${this._config.host}:${this._config.port}`});

			// Reset status
			this._reset();
		}
	}

	_onConnectionLost(evtParams)
	{
		let reason = evtParams.reason;

		if (reason != SFS2X.ClientDisconnectionReason.MANUAL)
		{
			var msg;

			// Log disconnection message stating the reason
			if (reason == SFS2X.ClientDisconnectionReason.IDLE)
				msg = 'inactivity';
			else
			{
				msg = 'unknown reason';

				if (reason != SFS2X.ClientDisconnectionReason.UNKNOWN)
					msg += ` (server reported: ${reason})`;
			}

			// Dispatch error event
			this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].ERROR, {message: `A disconnection occurred due to ${msg}; please reconnect`});
		}
		else
		{
			// Dispatch disconnection event
			this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].DISCONNECTION);
		}

		// Reset
		this._reset();
	}

	_onLogin(evtParams)
	{
		let data = evtParams.data;

		let params = {
			serverVersion: data.getUtfString('serverVer'),
			serverName: data.getUtfString('serverName'),
			serverUptime: data.getIntArray('uptime'),
			procControlEnabled: data.getBool('procCtrl'),
			allowHalt: data.getBool('allowHalt'),
			modules: data.getSFSArray('modules')
		};

		// Dispatch login event
		this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].LOGIN, params);
	}

	_onLoginError(evtParams)
	{
		// Disconnect from server
		this._sf.disconnect();

		// Dispatch error event
		this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].ERROR, {message: evtParams.errorMessage});
	}

	_onExtensionResponse(evtParams)
	{
		if (evtParams.cmd == this.EXTENSION_ERROR)
		{
			let data = evtParams.params;

			// An unexpected error occurred in the Admin Tool server-side extension
			this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ConnectionManagerEvent"].SERVER_ERROR, {message: 'An unexpected error occurred in the Admin Tool server-side extension, please check the server-side logs; the extension reported: ' + data.getUtfString('error')});
		}
	}
}


/***/ }),

/***/ "./src/managers/module-manager.js":
/*!****************************************!*\
  !*** ./src/managers/module-manager.js ***!
  \****************************************/
/*! exports provided: ModuleManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManager", function() { return ModuleManager; });
/* harmony import */ var _utils_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/event-dispatcher */ "./src/utils/event-dispatcher.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/events */ "./src/utils/events.js");
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utilities */ "./src/utils/utilities.js");
/* harmony import */ var _modules_base_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/base-module */ "./src/modules/base-module.js");





class ModuleManager extends _utils_event_dispatcher__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]
{
	constructor(shellCtrl, container)
	{
		super();

		// Make BaseModule class globally available, so it can be extended by custom modules
		window.BaseModule = _modules_base_module__WEBPACK_IMPORTED_MODULE_3__["BaseModule"]

		this._shellCtrl = shellCtrl;
		this._container = container;
		this._currentModuleId = null;

		// Add listener for navigation items click
		this._container.on('click', '.nav-item', $.proxy(function(event) {
			event.preventDefault();

			let moduleId = event.currentTarget.dataset.id;
			let moduleData = this._moduleConfigById[moduleId];

			if (moduleId != this._currentModuleId)
			{
				// Load selected module
				this._loadModule(moduleData);
			}

			// Close navigation
			this._shellCtrl._toggleNav(false);
		}, this));

		// Add listener to show tooltip
		this._container.kendoTooltip({
			filter: 'li[data-id]',
			content: $.proxy(function(event) {
				let moduleId = event.target[0].dataset.id;
				let moduleData = this._moduleConfigById[moduleId];
		        return `<strong>${moduleData.name}</strong><br><span>${moduleData.description}</span>`;
		    }, this)
		});

		/* TESTING MEMORY LEAKS IN MODULES LOADING
		ADD THIS IN THE MAIN VIEW TO START THE TEST: <div><button id="temp">test</button><span id="cnt"></span></div>
		$('#temp').click(
			$.proxy(function(event)
			{
				this.cnt = 0;
				if (this.timer == null)
				{
					this.timer = window.setInterval($.proxy(function() {

						$('#cnt').text(this.cnt++)
						if (this._currentModuleId == 'Dashboard')
							this._loadModule(this._moduleConfigById['ServerConfigurator']);
						else
							this._loadModule(this._moduleConfigById['Dashboard']);
					}, this), 500);
				}
				else
				{
					window.clearInterval(this.timer);
					this.timer = null;
				}
			}, this)
		);
		*/
	}

	initModulesList(modulesData, loadModuleId = null)
	{
		// SETUP MODULES LIST

		// Empty container of module selection buttons
		this._container.empty();

		this._moduleConfigById = {};
		var firstModule = null;
		var loadModule = null;

		for (let i = 0; i < modulesData.size(); i++)
		{
			let moduleData = this._getModuleObject(modulesData.getSFSObject(i));

			this._moduleConfigById[moduleData.id] = moduleData;

			// Get first module
			if (i == 0)
				firstModule = moduleData;

			// Get passed module
			if (moduleData.id == loadModuleId)
				loadModule = moduleData;

			// Display module button
			let moduleButton = this._createModuleButton(moduleData);
			let element = this._container.append(moduleButton);
		}

		// LOAD INITIAL MODULE

		// If module is not passed, load the first one of the modules list
		if (loadModule == null)
			loadModule = firstModule;

		this._loadModule(loadModule);
	}

	unloadModule()
	{
		this._destroyCurrentModule();
	}

	get currentModuleId()
	{
		return this._currentModuleId;
	}

	get currentModule()
	{
		return document.querySelector('.module');
	}

	_getModuleObject(sfsObj)
	{
		return {
			id: sfsObj.getUtfString('id'),
			name: sfsObj.getUtfString('name'),
			description: sfsObj.getUtfString('description'),
			spacing: sfsObj.getBool('spacing'),
			icon: sfsObj.containsKey('iconSvg') ? sfsObj.getUtfString('iconSvg') : '',
			tag: Object(_utils_utilities__WEBPACK_IMPORTED_MODULE_2__["toKebabCase"])(sfsObj.getUtfString('id')),
			isCustom: sfsObj.getBool('isCustom')
		}
	}

	_createModuleButton(moduleData)
	{
		return `
			<li class="nav-item ${moduleData.spacing ? 'mr-lg-3' : ''}" data-id="${moduleData.id}">
				<div class="module-icon">${moduleData.icon}</div>
				<label>${moduleData.name}</label>
			</li>
		`;
	}

	_loadModule(moduleData)
	{
		// Load the HTML file of a module
		$('<module/>').load(`modules/${moduleData.tag}.html`, $.proxy(function(html, status) {

			if (status != 'error')
			{
				if (!moduleData.isCustom)
				{
					// Load the JS file of a standard module
					__webpack_require__("./src/modules lazy recursive ^\\.\\/.*\\.js$")(`./${moduleData.tag}.js`).then(module => {
						this._onModuleControllerLoadSuccess(moduleData, html, module);
					})
					.catch(error => {
						this._onModuleControllerLoadError(moduleData, error);
					});
				}
				else
				{
					// Load the JS file of a custom module
					import(/* webpackIgnore: true */`../custom-modules/${moduleData.tag}.js`).then(module => {
						this._onModuleControllerLoadSuccess(moduleData, html, module);
					})
					.catch(error => {
						this._onModuleControllerLoadError(moduleData, error);
					});
				}
			}
			else
			{
				// Dispatch error event
				this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ModuleManagerEvent"].MODULE_LOAD_ERROR, {message: `${moduleData.name} module's view (html) not found.`});
			}
		}, this));
	}

	_onModuleControllerLoadSuccess(moduleData, html, module)
	{
		// Destroy current module
		this._destroyCurrentModule();

		// Define loaded module (if necessary)
		if (!window.customElements.get(moduleData.tag + '-module'))
			window.customElements.define(moduleData.tag + '-module', module.default);

		// Append new module
		$('div.module-loader').append(html);

		// Initialize module
		this.currentModule.initialize(moduleData, this._shellCtrl);

		// Save current module id
		this._currentModuleId = moduleData.id;

		// Dispatch event
		this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ModuleManagerEvent"].MODULE_LOADED, {moduleData: moduleData});
	}

	_onModuleControllerLoadError(moduleData, error)
	{
		// Log error details
		this._shellCtrl.logMessage(error, 'warn');

		// Dispatch error event
		this.dispatchEvent(_utils_events__WEBPACK_IMPORTED_MODULE_1__["ModuleManagerEvent"].MODULE_LOAD_ERROR, {message: `${moduleData.name} custom module's controller (js) couldn't be loaded.`});
	}

	_destroyCurrentModule()
	{
		// Get a reference to current module
		const mod = this.currentModule;

		// Call destroy method on module's class
		if (mod != null)
			mod.destroy();

		// Empty module container
		$('div.module-loader').empty();

		this._currentModuleId = null;
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/modules lazy recursive ^\\.\\/.*\\.js$":
/*!********************************************************!*\
  !*** ./src/modules lazy ^\.\/.*\.js$ namespace object ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./analytics.js": [
		"./src/modules/analytics.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"vendors~module-0",
		"module-0"
	],
	"./ban-manager.js": [
		"./src/modules/ban-manager.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"vendors~module-1",
		"module-1"
	],
	"./base-module.js": [
		"./src/modules/base-module.js"
	],
	"./blue-box-monitor.js": [
		"./src/modules/blue-box-monitor.js",
		"module-3"
	],
	"./cluster-configurator.js": [
		"./src/modules/cluster-configurator.js",
		"module-12~module-15~module-16~module-4",
		"module-4"
	],
	"./cluster-monitor.js": [
		"./src/modules/cluster-monitor.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-5"
	],
	"./console.js": [
		"./src/modules/console.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-6"
	],
	"./dashboard.js": [
		"./src/modules/dashboard.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-7"
	],
	"./extension-deployer.js": [
		"./src/modules/extension-deployer.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-8"
	],
	"./extension-manager.js": [
		"./src/modules/extension-manager.js",
		"module-9"
	],
	"./license-manager.js": [
		"./src/modules/license-manager.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-10"
	],
	"./log-viewer.js": [
		"./src/modules/log-viewer.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-11"
	],
	"./server-configurator.js": [
		"./src/modules/server-configurator.js",
		"vendors~module-12",
		"module-12~module-15~module-16~module-4",
		"module-12"
	],
	"./servlet-manager.js": [
		"./src/modules/servlet-manager.js",
		"module-13"
	],
	"./template.js": [
		"./src/modules/template.js",
		"module-14"
	],
	"./zone-configurator.js": [
		"./src/modules/zone-configurator.js",
		"module-12~module-15~module-16~module-4",
		"module-15"
	],
	"./zone-monitor.js": [
		"./src/modules/zone-monitor.js",
		"vendors~module-0~module-1~module-10~module-11~module-16~module-5~module-6~module-7~module-8",
		"module-12~module-15~module-16~module-4",
		"module-16"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/modules lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/modules/base-module.js":
/*!************************************!*\
  !*** ./src/modules/base-module.js ***!
  \************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
class BaseModule extends HTMLElement
{
	constructor(commandsPrefix)
	{
	    super();

		this._commandsPrefix = commandsPrefix;
	}

	get shellCtrl()
	{
		return this._shellCtrl;
	}

	get smartFox()
	{
		return this._shellCtrl.smartFox;
	}

	get idData()
	{
		return this._idData;
	}

	//---------------------------------
	// OVERRIDABLE METHODS
	//---------------------------------

	/**
	 * Called by the modules manager after loading the module.
	 * In case it is overridden, super must always be called!
	 */
	initialize(idData, shellController)
	{
		this._idData = idData;
		this._shellCtrl = shellController;

		// Add listener to Admin extension messages
		this.smartFox.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this._onExtensionResponse, this);
	}

	/**
	 * Called by the modules manager before unloading the module.
	 * In case it is overridden, super must always be called!
	 */
	destroy()
	{
		// Remove listener to Admin extension messages
		this.smartFox.removeEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this._onExtensionResponse);

		// Destroy all Kendo widgets
		kendo.destroy($('.module'));
	}

	/**
	 * Called by the onExtensionResponse listener below.
	 * Must be overridden.
	 */
	onExtensionCommand(cmd, data)
	{
		// Nothing to do
	}

	/**
	 * Called by the main shell whenever the server uptime changes.
	 * Can be overridden to display the uptime inside a module or make calculations on the server uptime.
	 */
	onUptimeUpdated(values)
	{
		// Nothing to do
	}

	//---------------------------------
	// PUBLIC METHODS
	//---------------------------------

	/**
	 * Send a request to Admin extension.
	 */
	sendExtensionRequest(command, data = null)
	{
		if (data == null)
			data = new SFS2X.SFSObject();

		this.smartFox.send(new SFS2X.ExtensionRequest(`${this._commandsPrefix}.${command}`, data));
	}

	//---------------------------------
	// PRIVATE METHODS
	//---------------------------------

	_onExtensionResponse(evtParams)
	{
		// Filter server responses
		let commands = evtParams.cmd.split('.');
		let data = evtParams.params;

		if (commands[0] == this._commandsPrefix)
		{
			if (commands.length > 1)
				this.onExtensionCommand(commands[1], data)
		}
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/shell-controller.js":
/*!*********************************!*\
  !*** ./src/shell-controller.js ***!
  \*********************************/
/*! exports provided: ShellController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellController", function() { return ShellController; });
/* harmony import */ var _components_view_stack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/view-stack */ "./src/components/view-stack.js");
/* harmony import */ var _managers_module_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/module-manager */ "./src/managers/module-manager.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/events */ "./src/utils/events.js");
/* harmony import */ var _managers_connection_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/connection-manager */ "./src/managers/connection-manager.js");
/* harmony import */ var _managers_chat_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managers/chat-manager */ "./src/managers/chat-manager.js");
/* harmony import */ var _utils_dot_properties_parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/dot-properties-parse */ "./src/utils/dot-properties-parse.js");
/* harmony import */ var _utils_dot_properties_parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_dot_properties_parse__WEBPACK_IMPORTED_MODULE_5__);








class ShellController
{
	constructor()
	{
		// Set constants and variables

		this.VERSION_MAJOR = 3;
		this.VERSION_MINOR = 2;
		this.VERSION_SUB = 7;

		this.DEFAULT_WS_PORT = 8080;
		this.DEFAULT_WSS_PORT = 8443;

		this.DEFAULT_USERNAME = 'sfsadmin';
		this.DEFAULT_PASSWORD = 'sfsadmin';

		this._loginValidator = null;

		// Display version
		$('.admin-version').text('v' + this.stringVersion);

		// Create modules manager instance and add event listeners
		this._modManager = new _managers_module_manager__WEBPACK_IMPORTED_MODULE_1__["ModuleManager"](this, $('.nav-main'));
		this._modManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ModuleManagerEvent"].MODULE_LOADED, this._onModuleLoaded, this);
		this._modManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ModuleManagerEvent"].MODULE_LOAD_ERROR, this._onModuleLoadError, this);

		// Create connection manager instance and add event listeners
		this._connManager = new _managers_connection_manager__WEBPACK_IMPORTED_MODULE_3__["ConnectionManager"](this);
		this._connManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ConnectionManagerEvent"].CONNECTION, this._onConnection, this);
		this._connManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ConnectionManagerEvent"].LOGIN, this._onLogin, this);
		this._connManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ConnectionManagerEvent"].DISCONNECTION, this._onDisconnection, this);
		this._connManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ConnectionManagerEvent"].ERROR, this._onConnManagerError, this);
		this._connManager.addEventListener(_utils_events__WEBPACK_IMPORTED_MODULE_2__["ConnectionManagerEvent"].SERVER_ERROR, this._onServerError, this);

		// Create admin chat manager
		this._chatManager = new _managers_chat_manager__WEBPACK_IMPORTED_MODULE_4__["ChatManager"](this);

		/* --------------------------- */

		// Initialize views
		this._initViews();

		// Show login view
		this._switchShellView('login-view');
	}

	//---------------------------------
	// VIEW INITIALIZERS
	//---------------------------------

	/**
	 * Initialize login view.
	 */
	_initLoginView()
	{
		// Set default input values (password never saved)
		let host = window.location.hostname;
		let port = this.DEFAULT_WS_PORT;
		let encrypt = false;
		let user = 'sfsadmin';
		let remember = false;

		// Load "last-server" cookie
		let data = Cookies.getJSON('last-server')
        if (data)
		{
			host = data.host;
            port = data.port;
			encrypt = data.encrypt;
			user = data.user;
			remember = true;
        }

		// Retrieve host from GET parameter
		let getHost = this._getUrlParameter('host');
		if (getHost)
			host = getHost;

		// Set input values
		$('#loginHost').val(host);
		$('#loginUsername').val(user);
		$('#loginEncrypt').prop('checked', encrypt);
		$('#rememberLogin').prop('checked', remember);

		// Initialize numeric input
		$('#loginPort').kendoNumericTextBox({
			format: '#####',
			value: port
		});

		// Initialize the Kendo UI Validator on the "form" container
		// (NOTE: does NOT have to be an actual <form> tag)
		this._loginValidator = $('#loginForm').kendoValidator({
			validateOnBlur: true
		}).data('kendoValidator');

		// Add listener to validate the form when the Connect button is clicked
		$('#loginButton').click($.proxy(this._onConnectClick, this));

		// Add listener to submit form on Enter key press
		$('#loginForm').keyup(function(event) {
			if (event.key !== 'Enter') return;

			$('#loginButton').click();
			event.preventDefault();
		});

		// Add listener to encrypt checkbox
		$('#loginEncrypt').change($.proxy(function(event) {
			let port = this.DEFAULT_WS_PORT;

			if ($('#loginEncrypt').prop('checked'))
				port = this.DEFAULT_WSS_PORT;

			$('#loginPort').data('kendoNumericTextBox').value(port);
		}, this));

		// Hide error message container
		$('#login-error').hide();
	}

	/**
	 * Initialize module view.
	 */
	_initModuleView()
	{
		// Add listeners to open/close menu buttons
		$('.nav-open').click($.proxy(function(event) {
			event.preventDefault();
			this._toggleNav(true);
		}, this));

		$('.nav-close, .nav-overlay').click($.proxy(function(event) {
			event.preventDefault();
			this._toggleNav(false);
		}, this));

		// Add listeners to service buttons
		$('#restart-button').click($.proxy(this._onRestartClick, this));
		$('#halt-button').click($.proxy(this._onHaltClick, this));
		$('#help-button').click($.proxy(this._onHelpClick, this));
		$('#disconnect-button').click($.proxy(this._onDisconnectClick, this));

		// Add listener to show tooltip on service buttons hover
		$('.nav-service').kendoTooltip({
			filter: 'li[title]'
		});

		// Add listener to scroll main view to top if status bar is clicked
		$('#status-bar').click(function(event) {
			event.preventDefault();
			$('main').animate({ scrollTop: 0 }, 'fast');
		});
	}

	//---------------------------------
	// UI EVENT LISTENERS
	//---------------------------------

	/**
	 * Validate login form and connect+login to SmartFoxServer.
	 */
	_onConnectClick(event)
	{
		// Hide any previous error message
		$('#login-error').hide();
		$('#login-error').text('');

		// Validate login form
		if (this._loginValidator.validate())
		{
			// Disable login form
			this._enableLoginForm(false);

			// Retrieve connection details
			let config = {};
			config.host = $('#loginHost').val().trim();
			config.port = $('#loginPort').data('kendoNumericTextBox').value();
			config.useSSL = $('#loginEncrypt').prop('checked');

			let username = $('#loginUsername').val().trim();
			let password = $('#loginPassword').val();

			// Save input values to cookie (except password)...
			// ...or clear previously saved cookie
			if ($('#rememberLogin').prop('checked'))
			{
				Cookies.set('last-server', {
					host: config.host,
					port: config.port,
					encrypt: config.useSSL,
					user: username

				}, {expires: 30});
			}
			else
			{
				Cookies.remove('last-server');
			}

			// Connect to SFS2X & login
			this._connManager.connect(config, username, password);
		}
	}

	/**
	 * Restart SmartFoxServer.
	 */
	_onRestartClick(event)
	{
		let message = 'Are you sure you want to stop and restart this instance of SmartFoxServer 2X?';
		this.showConfirmWarning(message, $.proxy(this._onRestartConfirmDialogConfirm, this));
	}

	/**
	 * Halt SmartFoxServer.
	 */
	_onHaltClick(event)
	{
		let message = 'Are you sure you want to stop this instance of SmartFoxServer 2X?<br>You won\'t be able to restart it using the Administration Tool.';
		this.showConfirmWarning(message, $.proxy(this._onHaltConfirmDialogConfirm, this));
	}

	/**
	 * Open online documentation.
	 */
	_onHelpClick(event)
	{
		// Open online doc
		window.open(`http://docs2x.smartfoxserver.com/GettingStarted/admintool-${this._modManager.currentModuleId}`, '_blank');
	}

	/**
	 * Disconnect from server.
	 */
	_onDisconnectClick(event)
	{
		this._connManager.disconnect();
	}

	//------------------------------------
	// CONNECTION MANAGER EVENT LISTENERS
	//------------------------------------

	_onConnection(evtParams)
	{
		// Log message
		this.logMessage(`Connection to ${this._connManager.smartFox.config.host}:${this._connManager.smartFox.config.port} established`);
	}

	_onLogin(evtParams)
	{
		// Log message
		this.logMessage(`Successful login to ${this._connManager.smartFox.config.host}:${this._connManager.smartFox.config.port} performed`);

		// Get last loaded module from cookies
		let loadModuleId = null;
		let data = Cookies.getJSON('last-module')
        if (data)
			loadModuleId = data.id;

		// Init the modules list with the configuration returned by the server and: load last saved module, or first module in the list, or passed module id
		this._modManager.initModulesList(evtParams.modules, loadModuleId);

		// Save current uptime
		this._uptime = evtParams.serverUptime;

		// Show/hide Halt and Restart buttons depending if:
		// 1) this feature is supported for the server operating system
		// 2) the administrator who just logged in has the permission to execute these actions
		this._showHaltRestartButtons(evtParams.procControlEnabled && evtParams.allowHalt);

		// Switch to modules view
		this._goToModulesView(evtParams.serverVersion, evtParams.serverName);

		// If default username and password have been used...
		if ($('#loginUsername').val() == this.DEFAULT_USERNAME && $('#loginPassword').val() == this.DEFAULT_PASSWORD)
		{
			// ...show alert
			this.showSimpleAlert('You are using the default administration profile which is highly insecure, please make sure to immediately change the password.');

			// ...show non-removable message in alert bar
			$('#alert-bar').show();
			$('#alert-bar').text('You are using the default administration profile which is highly insecure, please change the password.');
		}
	}

	/**
	 * Listener called when the user disconnected voluntarily.
	 */
	_onDisconnection(evtParams)
	{
		// Remove any popup or alert
		this.removeDialog();

		// Switch back to login view
		this._goToLoginView();

		// Hide navigation if open
		this._toggleNav(false);
	}

	/**
	 * Listener called when an error caused a disconnection.
	 */
	_onConnManagerError(evtParams)
	{
		// Remove any popup or alert
		this.removeDialog();

		// Log system message
		this.logMessage(evtParams.message, 'warn');

		// Switch back to login view
		this._goToLoginView();

		// Display error in login view
		$('#login-error').text(evtParams.message);
		$('#login-error').show();
	}

	/**
	 * Listener called when an unexpected server-side error occurs.
	 */
	_onServerError(evtParams)
	{
		// Show an alert
		this.showSimpleAlert(evtParams.message);
	}

	//---------------------------------
	// OTHER EVENT LISTENERS
	//---------------------------------

	_onModuleLoaded(evtParams)
	{
		const moduleData = evtParams.moduleData;

		// Save last loaded module to cookies
		Cookies.set('last-module', {
			id: moduleData.id
		}, {expires: 30});

		// Display module title
		$('#module-title').show();
		$('#module-title-label').text(moduleData.name);

		// Tell the chat manager which module has been loaded
		this._chatManager.setCurrentModule(moduleData.id);

		// Assign the .selected class to the selected navigation item
		$('.nav-main').find(`[data-id='${moduleData.id}']`).addClass('selected').siblings('.selected').removeClass('selected');
	}

	_onModuleLoadError(evtParams)
	{
		// Show an alert
		this.showSimpleAlert(evtParams.message);
	}

	_onRestartConfirmDialogConfirm()
	{
		// Send restart server request
		this._connManager.restartServer();
	}

	_onHaltConfirmDialogConfirm()
	{
		// Send halt server request
		this._connManager.haltServer();
	}

	//---------------------------------
	// PUBLIC METHODS
	// This members are used by the sub-managers (i.e. ConnectionManager)
	// or the modules to communicate with this shell controller.
	//---------------------------------

	get smartFox()
	{
		return this._connManager.smartFox;
	}

	get intVersion()
	{
		var version = this.VERSION_MAJOR;
		version += (this.VERSION_MINOR < 10 ? '0' : '') + this.VERSION_MINOR;
		version += (this.VERSION_SUB < 10 ? '0' : '') + this.VERSION_SUB;

		return Number(version);
	}

	get stringVersion()
	{
		return this.VERSION_MAJOR + '.' + this.VERSION_MINOR + '.' + this.VERSION_SUB;
	}

	logMessage(message, type = 'log')
	{
		switch (type) {
			case 'info':
				console.info('[ ADMINTOOL | INFO ] ' + message);
				break;
			case 'warn':
				console.warn('[ ADMINTOOL | WARN ] ' + message);
				break;
			case 'error':
				console.error('[ ADMINTOOL | ERROR ] ' + message);
				break;
			default:
				console.log('[ ADMINTOOL | INFO ] ' + message);
		}
	}

	removeDialog()
	{
		// Hide any showing modal
		$('.modal').modal('hide');

		// Hide any showing toast
		$('.toast').toast('hide');

		// Remove shell's dialog
		if (this._dialog != null)
		{
			this._dialog.close();
			this._dialog.destroy();
			this._dialog = null;
		}

		// Enable the following if other Kendo dialogs are used in modules
		/*
		// Remove any other dialog (inner to module)
		$('.k-dialog-content').each(function(index) {
			// Confirm dialog
			let confirm = $(this).data('kendoConfirm');
			if (confirm)
			{
				confirm.close();
				confirm.destroy();
			}
		});
		*/
	}

	/**
	 * Show simple alert.
	 */
	showSimpleAlert(text, isWarning = true)
	{
		// Create and show dialog
		this._dialog = kendo.alert(text);
		this._dialog.title(isWarning ? 'Warning' : 'Information');

		// Set custom class for styling
		this._dialog.wrapper.addClass(isWarning ? 'is-warning' : 'is-info');

		// Log message too
		// (we encapsule the text in a span and extract the text again to remove inner html tags)
		let html = $('<span>' + text + '</span>');
		this.logMessage(html.text(), isWarning ? 'warn' : 'info');
	}

	/**
	 * Show confirm alert.
	 */
	showConfirmWarning(text, confirmHandler)
	{
		// Create dialog
		this._dialog = $('<div></div>').kendoConfirm({
	      title: 'Warning',
	      content: text,
		  actions: [
	          {
	              text: 'OK',
	              primary: true,
	              action: confirmHandler
	          },
	      ]
	  	}).data('kendoConfirm');

		// Set custom class for styling
		this._dialog.wrapper.addClass('is-warning');

		// Show dialog
		this._dialog.open();
	}

	showNotification(title, message)
	{
		// Display notification
		let toast = $(`
			<div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="4000">
				<div class="toast-header">
					<strong class="mr-auto">${title}</strong>
					<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="toast-body">${message}</div>
			</div>
		`);

		$('.toast-container').append(toast);
		toast.toast('show');

		// Log message too
		// (we encapsule the text in a span and extract the text again to remove inner html tags)
		let html = $('<span>' + title + ' - ' + message + '</span>');
		this.logMessage(html.text(), 'info');
	}

	updateModuleTitle(title, asSuffix = false)
	{
		$('#module-title-label').text( (asSuffix ? $('#module-title-label').text() : '') + title );
	}

	//---------------------------------
	// PRIVATE METHODS
	//---------------------------------

	_initViews()
	{
		// Initialize login view
		this._initLoginView();

		// Initialize module view
		this._initModuleView();
	}

	/**
	 * Switch view in top view stack.
	 * @param  {string} viewId Identifier of the viewstask child to display.
	 */
	_switchShellView(viewId)
	{
		document.getElementById('shell').selectedElement = document.getElementById(viewId);

		// (jQuery alternative)
		// $('#shell')[0].selectedElement = $('#shell').children('#' + viewId)[0];
	}

	/**
	 * Enable/disable login form.
	 */
	_enableLoginForm(enable)
	{
		// Enable/disable fieldset (works for all non-kendo inputs)
		$('#loginForm fieldset').prop('disabled', !enable);

		// Enable/disable numeric textbox
		$('#loginPort').data('kendoNumericTextBox').enable(enable);
	}

	_toggleNav(bool)
	{
		$('.nav-container, .nav-overlay').toggleClass('is-visible', bool);
		$('.module-container').toggleClass('scale-down', bool);
	}

	_getUrlParameter(param)
	{
		let pageURL = window.location.search.substring(1);
		let urlVariables = pageURL.split('&');

		for (var i = 0; i < urlVariables.length; i++) {
			let paramName = urlVariables[i].split('=');
			if (paramName[0] == param && paramName[1] != '')
				return paramName[1];
		}

		return null;
	}

	_goToLoginView()
	{
		// Clear password field
		$('#loginPassword').val('');

		// Switch to login view
		this._switchShellView('login-view');

		// Unload current module
		this._modManager.unloadModule();

		// Enable login form
		this._enableLoginForm(true);

		// Remove uptime updater
		clearInterval(this._uptimeTimer);
	}

	_goToModulesView(serverVersion, serverName)
	{
		// Hide module title
		$('#module-title').hide();
		$('#module-title-label').text('');

		// Hide alert bar
		$('#alert-bar').hide();

		// Show server version in the header
		$('#sfs-version-value').text(serverVersion);

		// Set server name, IP and port in module's title bar
		let host = `${this._connManager.smartFox.config.host}:${this._connManager.smartFox.config.port}` + (serverName != '' ? ` [${serverName}]` : '');
		$('#host-label').text(host);

		// Save current SFS version
		this._currentSfsVersion = serverVersion;

		// Check new SFS version availability
		this._checkAvailableSfsVersion();

		// Start uptime updater
		this._uptimeTimer = setInterval($.proxy(this._updateUptime, this), 1000);

		// Switch to modules view
		this._switchShellView('module-view');
	}

	_showHaltRestartButtons(show)
	{
		if (show)
		{
			$('#restart-button').show();
			$('#halt-button').show();
		}
		else
		{
			$('#restart-button').hide();
			$('#halt-button').hide();
		}
	}

	_checkAvailableSfsVersion()
	{
		// Remove class to hide update button style and notification icon
		$('#sfs-version').removeClass('is-active');

		// Remove update button click listeners
		$('#sfs-version-button').off('click');

		// Load file containing latest SFS version info
		$.ajax({
			type: 'GET',
			url: 'https://www.smartfoxserver.com/downloads/sfs2x/latestVersion.txt',
        	dataType: 'text',
			success: $.proxy(this._onLatestSfsVersionInfoLoaded, this),
			error: $.proxy(function() {
				this.logMessage('Unable to check new server version availability on SmartFoxServer website', 'warn');
			}, this)
		});
	}

	_onLatestSfsVersionInfoLoaded(data)
	{
		// Parse returned data
		const v = Object(_utils_dot_properties_parse__WEBPACK_IMPORTED_MODULE_5__["parse"])(data);

		if (v.version != null && this._isSfsVersionNewer(v.version, this._currentSfsVersion))
		{
			this.tempflag = true;
			this.logMessage('An updated version of SmartFoxServer 2X is available for download', 'info');

			// Set upgrade dialog details
			this._sfsUpdateDetails = v;

			// Add listener to show SFS version update modal
			$('#sfs-version-button').click(function() {
				$('#serverUpdateModal').modal({
					backdrop: 'static',
					keyboard: false,
				});
			});

			// Set class to show update button style and notification icon
			$('#sfs-version').addClass('is-active');

			// Update modal content
			const newVer = this._sfsUpdateDetails;
			const currVer = this._currentSfsVersion;

			let modal = $('#serverUpdateModal');

			// Update modal content
			$('#newVersLb', modal).text(newVer.version);
			$('#updTypeLb', modal).text(newVer.isPatch ? 'patch' : 'full installer');
			$('#reqVersLb', modal).text(newVer.isPatch ? ' (requires version ' + newVer.requires + ' or later)' : '');
			$('#currVersLb', modal).text(currVer);
			$('#serverUpdateModalLink', modal).attr('href', newVer.url);
		}
	}

	_isSfsVersionNewer(availableVer, currentVer)
	{
		const MAJ = 0;
		const MIN = 1;
		const SUB = 2;

		const available = availableVer.split('.');
		const current = currentVer.split('.');

		// Check major version
		if (available[MAJ] > current[MAJ])
			return true;
		else if (available[MAJ] == current[MAJ])
		{
			// Check minor version
			if (available[MIN] > current[MIN])
				return true;
			else if (available[MIN] == current[MIN])
			{
				// Check sub version
				if (available[SUB] > current[SUB])
					return true;
			}
		}

		return false;
	}

	_updateUptime()
	{
		let days = this._uptime[0];
		let hours = this._uptime[1];
		let minutes = this._uptime[2];
		let seconds = this._uptime[3] + 1;

		if (seconds > 59)
		{
			seconds = 0;
			minutes += 1;

			if (minutes > 59)
			{
				minutes = 0;
				hours += 1;

				if (hours > 23)
				{
					hours = 0;
					days += 1;
				}
			}
		}

		this._uptime[3] = seconds;
		this._uptime[2] = minutes;
		this._uptime[1] = hours;
		this._uptime[0] = days;

		// Send updated uptime to current module (if loaded)
		let module = this._modManager.currentModule;
		if (module != null)
			module.onUptimeUpdated(this._uptime);
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/utils/dot-properties-parse.js":
/*!*******************************************!*\
  !*** ./src/utils/dot-properties-parse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const atComment = (src, offset) => {
  const ch = src[offset]
  return ch === '#' || ch === '!'
}

const atLineEnd = (src, offset) => {
  const ch = src[offset]
  return !ch || ch === '\r' || ch === '\n'
}

const endOfIndent = (src, offset) => {
  let ch = src[offset]
  while (ch === '\t' || ch === '\f' || ch === ' ') {
    offset += 1
    ch = src[offset]
  }
  return offset
}

const endOfComment = (src, offset) => {
  let ch = src[offset]
  while (ch && ch !== '\r' && ch !== '\n') {
    offset += 1
    ch = src[offset]
  }
  return offset
}

const endOfKey = (src, offset) => {
  let ch = src[offset]
  while (ch && ch !== '\r' && ch !== '\n' && ch !== '\t' && ch !== '\f' && ch !== ' ' && ch !== ':' && ch !== '=') {
    if (ch === '\\') {
      if (src[offset + 1] === '\n') {
        offset = endOfIndent(src, offset + 2)
      } else {
        offset += 2
      }
    } else {
      offset += 1
    }
    ch = src[offset]
  }
  return offset
}

const endOfSeparator = (src, offset) => {
  let ch = src[offset]
  let hasEqSign = false
  loop: while (ch === '\t' || ch === '\f' || ch === ' ' || ch === '=' || ch === ':' || ch === '\\') {
    switch (ch) {
      case '\\':
        if (src[offset + 1] !== '\n') break loop
        offset = endOfIndent(src, offset + 2)
        break
      case '=':
      case ':':
        if (hasEqSign) break loop
        hasEqSign = true
        // fallthrough
      default:
        offset += 1
    }
    ch = src[offset]
  }
  return offset
}

const endOfValue = (src, offset) => {
  let ch = src[offset]
  while (ch && ch !== '\r' && ch !== '\n') {
    offset += ch === '\\' ? 2 : 1
    ch = src[offset]
  }
  return offset
}

const unescape = (str) => str.replace(/\\(u[0-9a-fA-F]{4}|\r?\n[ \t\f]*|.)?/g, (match, code) => {
  switch (code && code[0]) {
    case 'f': return '\f'
    case 'n': return '\n'
    case 'r': return '\r'
    case 't': return '\t'
    case 'u':
      const c = parseInt(code.substr(1), 16)
      return isNaN(c) ? code : String.fromCharCode(c)
    case '\r':
    case '\n':
    case undefined:
      return ''
    default:
      return code
  }
})

/**
 * Splits the input string into an array of logical lines
 *
 * Key-value pairs are [key, value] arrays with string values. Escape sequences
 * in keys and values are parsed. Empty lines are included as empty strings, and
 * comments as strings that start with '#' or '! characters. Leading whitespace
 * is not included.
 *
 * @see https://docs.oracle.com/javase/9/docs/api/java/util/Properties.html#load(java.io.Reader)
 *
 * @param {string} src
 * @returns Array<string | string[]]>
 */
function parseLines (src) {
  const lines = []
  for (i = 0; i < src.length; ++i) {
    if (src[i] === '\n' && src[i - 1] === '\r') i += 1
    if (!src[i]) break
    const keyStart = endOfIndent(src, i)
    if (atLineEnd(src, keyStart)) {
      lines.push('')
      i = keyStart
      continue
    }
    if (atComment(src, keyStart)) {
      const commentEnd = endOfComment(src, keyStart)
      lines.push(src.slice(keyStart, commentEnd))
      i = commentEnd
      continue
    }
    const keyEnd = endOfKey(src, keyStart)
    const key = unescape(src.slice(keyStart, keyEnd))
    const valueStart = endOfSeparator(src, keyEnd)
    if (atLineEnd(src, valueStart)) {
      lines.push([key, ''])
      i = valueStart
      continue
    }
    const valueEnd = endOfValue(src, valueStart)
    const value = unescape(src.slice(valueStart, valueEnd))
    lines.push([key, value])
    i = valueEnd
  }
  return lines
}

/**
 * Parses an input string read from a .properties file into a JavaScript Object
 *
 * If the second `path` parameter is true, dots '.' in keys will result in a
 * multi-level object (use a string value to customise). If a parent level is
 * directly assigned a value while it also has a child with an assigned value,
 * the parent value will be assigned to its empty string '' key. Repeated keys
 * will take the last assigned value. Key order is not guaranteed, but is likely
 * to match the order of the input lines.
 *
 * @param {string} src
 * @param {boolean | string} [path=false]
 */
function parse (src, path) {
  const pathSep = typeof path === 'string' ? path : '.'
  return parseLines(src).reduce((res, line) => {
    if (Array.isArray(line)) {
      const [key, value] = line
      if (path) {
        const keyPath = key.split(pathSep)
        let parent = res
        while (keyPath.length >= 2) {
          const p = keyPath.shift()
          if (!parent[p]) {
            parent[p] = {}
          } else if (typeof parent[p] !== 'object') {
            parent[p] = { '': parent[p] }
          }
          parent = parent[p]
        }
        const leaf = keyPath[0]
        if (typeof parent[leaf] === 'object') {
          parent[leaf][''] = value
        } else {
          parent[leaf] = value
        }
      } else {
        res[key] = value
      }
    }
    return res
  }, {})
}

module.exports = { parse, parseLines }


/***/ }),

/***/ "./src/utils/event-dispatcher.js":
/*!***************************************!*\
  !*** ./src/utils/event-dispatcher.js ***!
  \***************************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
class EventDispatcher {
	constructor() {
		this._listenersByEvent = {};
	}

	/**
	 * Registers an event listener function that will receive notification of an event.
	 *
	 * <p>If you no longer need an event listener, remove it by calling the <em>removeEventListener()</em> method, or memory issues could arise.
	 * In fact event listeners are not automatically removed from memory.</p>
	 *
	 * @param	{string} evtType	The type of event to listen to.
	 * @param	{function} callback	The listener function that processes the event. This function should accept an object as its only parameter, which in turn contains the event parameters.
	 * @param	{object} scope		The object that acts as a context for the event listener: it is the object that acts as a "parent scope" for the callback function, thus providing context (i.e. access to variables and other mehtods) to the function itself.
	 */
	addEventListener(evtType, callback, scope)
	{
		if (!this._listenersByEvent[evtType])
			this._listenersByEvent[evtType] = [];

		this._listenersByEvent[evtType].push({callback:callback, scope:scope});
	}

	/**
	 * Removes an event listener.
	 *
	 * @param	{string} evtType	The type of event to remove.
	 * @param	{function} callback	The listener function to be removed.
	 */
	removeEventListener(evtType, callback)
	{
		const listeners = this._listenersByEvent[evtType];

		if (listeners)
		{
			for (let i = 0; i < listeners.length; i++)
			{
				if (listeners[i].callback === callback)
				{
					listeners.splice(i, 1);
					break;
				}
			}
		}
	}

	dispatchEvent(evtType, evtObj)
	{
		const listeners = this._listenersByEvent[evtType];

		if (listeners)
		{
			for (let listener of listeners)
				listener.callback.call(listener.scope, evtObj);
		}
	}
}


/***/ }),

/***/ "./src/utils/events.js":
/*!*****************************!*\
  !*** ./src/utils/events.js ***!
  \*****************************/
/*! exports provided: ConnectionManagerEvent, ModuleManagerEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionManagerEvent", function() { return ConnectionManagerEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManagerEvent", function() { return ModuleManagerEvent; });
const ConnectionManagerEvent = Object.freeze({
	CONNECTION: 'connection',
	LOGIN: 'login',
	DISCONNECTION: 'disconnection',
	ERROR: 'error',
	SERVER_ERROR: 'serverError',
});

const ModuleManagerEvent = Object.freeze({
	MODULE_LOADED: 'module-loaded',
	MODULE_LOAD_ERROR: 'module-load-error',
});


/***/ }),

/***/ "./src/utils/utilities.js":
/*!********************************!*\
  !*** ./src/utils/utilities.js ***!
  \********************************/
/*! exports provided: toKebabCase, bytesToSize, kBytesToSize, capitalizeFirst, filterClassName, roundToDecimals, scaleBytes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toKebabCase", function() { return toKebabCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToSize", function() { return bytesToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kBytesToSize", function() { return kBytesToSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirst", function() { return capitalizeFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterClassName", function() { return filterClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToDecimals", function() { return roundToDecimals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBytes", function() { return scaleBytes; });
const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

function bytesToSize(bytes, decimals = 1, zeroUnit = '', suffix = '') {
	if (bytes === 0)
		return '0 ' + zeroUnit + (zeroUnit != '' ? suffix : '');

	if (bytes < 1) // Can happen in chart axis labels!
	 	return `${bytes} Bytes${suffix}`;

    const k = 1000;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i] + suffix;
}

function kBytesToSize(kBytes, decimals = 1, zeroUnit = '', suffix = '') {
	return bytesToSize(kBytes * 1000, decimals, zeroUnit, suffix);
}

function capitalizeFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterClassName(element, index, array)
{
	if (element.endsWith('.py'))
		return (element.endsWith('Extension.py'));
	else if (element.endsWith('.js'))
		return (element.endsWith('Extension.js'));
	else
		return (element.endsWith('Extension'));
}

function roundToDecimals(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function scaleBytes(bytes, decimals = 1) {
	let obj = {};

	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	if (bytes > 0)
	{
		const k = 1000;
		const dm = decimals < 0 ? 0 : decimals;
		const i = Math.floor(Math.log(bytes) / Math.log(k));

		obj.value = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
		obj.unit = sizes[i];
	}
	else
	{
		obj.value = 0;
		obj.unit = sizes[0];
	}

	return obj;
}


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvcmUvYXBwbGljYXRpb24uYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvYXBwbGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy92aWV3LXN0YWNrLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL21hbmFnZXJzL2NoYXQtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9tYW5hZ2Vycy9jb25uZWN0aW9uLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvbWFuYWdlcnMvbW9kdWxlLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvbW9kdWxlcy9iYXNlLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9zaGVsbC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL3V0aWxzL2RvdC1wcm9wZXJ0aWVzLXBhcnNlLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL3V0aWxzL2V2ZW50LWRpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvdXRpbHMvZXZlbnRzLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL3V0aWxzL3V0aWxpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcGxpY2F0aW9uXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJhc3NldHMvanMvY29yZS9tb2R1bGVzL1wiICsgKHtcIm1vZHVsZS0xMn5tb2R1bGUtMTV+bW9kdWxlLTE2fm1vZHVsZS00XCI6XCJtb2R1bGUtMTJ+bW9kdWxlLTE1fm1vZHVsZS0xNn5tb2R1bGUtNFwiLFwibW9kdWxlLTE1XCI6XCJtb2R1bGUtMTVcIixcIm1vZHVsZS00XCI6XCJtb2R1bGUtNFwiLFwibW9kdWxlLTEzXCI6XCJtb2R1bGUtMTNcIixcIm1vZHVsZS0xNFwiOlwibW9kdWxlLTE0XCIsXCJtb2R1bGUtM1wiOlwibW9kdWxlLTNcIixcIm1vZHVsZS05XCI6XCJtb2R1bGUtOVwiLFwidmVuZG9yc35tb2R1bGUtMH5tb2R1bGUtMX5tb2R1bGUtMTB+bW9kdWxlLTExfm1vZHVsZS0xNn5tb2R1bGUtNX5tb2R1bGUtNn5tb2R1bGUtN35tb2R1bGUtOFwiOlwidmVuZG9yc35tb2R1bGUtMH5tb2R1bGUtMX5tb2R1bGUtMTB+bW9kdWxlLTExfm1vZHVsZS0xNn5tb2R1bGUtNX5tb2R1bGUtNn5tb2R1bGUtN35tb2R1bGUtOFwiLFwibW9kdWxlLTEwXCI6XCJtb2R1bGUtMTBcIixcIm1vZHVsZS0xMVwiOlwibW9kdWxlLTExXCIsXCJtb2R1bGUtMTZcIjpcIm1vZHVsZS0xNlwiLFwibW9kdWxlLTVcIjpcIm1vZHVsZS01XCIsXCJtb2R1bGUtNlwiOlwibW9kdWxlLTZcIixcIm1vZHVsZS03XCI6XCJtb2R1bGUtN1wiLFwibW9kdWxlLThcIjpcIm1vZHVsZS04XCIsXCJ2ZW5kb3Jzfm1vZHVsZS0wXCI6XCJ2ZW5kb3Jzfm1vZHVsZS0wXCIsXCJtb2R1bGUtMFwiOlwibW9kdWxlLTBcIixcInZlbmRvcnN+bW9kdWxlLTFcIjpcInZlbmRvcnN+bW9kdWxlLTFcIixcIm1vZHVsZS0xXCI6XCJtb2R1bGUtMVwiLFwidmVuZG9yc35tb2R1bGUtMTJcIjpcInZlbmRvcnN+bW9kdWxlLTEyXCIsXCJtb2R1bGUtMTJcIjpcIm1vZHVsZS0xMlwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucGFwcGxpY2F0aW9uXCJdID0gd2luZG93W1wid2VicGFja0pzb25wYXBwbGljYXRpb25cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHBsaWNhdGlvbi5qc1wiKTtcbiIsImltcG9ydCB7U2hlbGxDb250cm9sbGVyfSBmcm9tICcuL3NoZWxsLWNvbnRyb2xsZXInO1xuXG4kKCBkb2N1bWVudCApLnJlYWR5KGZ1bmN0aW9uKClcbntcbiAgICBjb25zb2xlLmluZm8oXCJTbWFydEZveFNlcnZlciAyWCBBZG1pblRvb2wgcmVhZHkhXCIpO1xuXG5cdC8vIENyZWF0ZSBzaGVsbCBjb250cm9sbGVyIGluc3RhbmNlXG5cdHRoaXMuY29udHJvbGxlciA9IG5ldyBTaGVsbENvbnRyb2xsZXIoKTtcbn0pO1xuIiwiZXhwb3J0IGNsYXNzIFZpZXdTdGFjayBleHRlbmRzIEhUTUxFbGVtZW50XG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHQgICAgc3VwZXIoKTtcblxuXHRcdC8vIEF0dGFjaCBhIHNoYWRvdyByb290XG5cdFx0Y29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcblx0XHRzaGFkb3dSb290LmlubmVySFRNTCA9IGBcblx0XHRcdDxzdHlsZT5cblx0XHRcdFx0Omhvc3Qge31cblxuXHRcdFx0XHQ6OnNsb3R0ZWQoOm5vdChbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0pKSB7XG5cdFx0XHQgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHQgICAgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHRcdDxzbG90Pjwvc2xvdD5cblx0XHRgO1xuXG5cdFx0Ly8gU2VsZWN0IGZpcnN0IGl0ZW1cblx0XHR0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuXHR9XG5cblx0Z2V0IHNlbGVjdGVkRWxlbWVudCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fc2VsZWN0ZWRFbGVtZW50O1xuXHR9XG5cblx0c2V0IHNlbGVjdGVkRWxlbWVudChlbGVtZW50KVxuXHR7XG5cdFx0aWYgKGVsZW1lbnQgIT0gbnVsbCAmJiBlbGVtZW50LnBhcmVudE5vZGUgPT0gdGhpcylcblx0XHR7XG5cdFx0XHR0aGlzLl9zZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIHRoaXMuY2hpbGRyZW4pXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChlbGVtZW50ID09IHRoaXMuX3NlbGVjdGVkRWxlbWVudClcblx0XHRcdFx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0Y29uc29sZS5lcnJvcignRWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBWaWV3U3RhY2snKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgc2VsZWN0ZWRJbmRleCgpXG5cdHtcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmNoaWxkcmVuKS5pbmRleE9mKHRoaXMuX3NlbGVjdGVkRWxlbWVudCk7XG5cdH1cblxuXHRzZXQgc2VsZWN0ZWRJbmRleChpbmRleClcblx0e1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuY2hpbGRyZW5baW5kZXhdID09IG51bGwpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIFZpZXdTdGFjayBpbmRleFwiKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgZWxlbWVudCA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuXHRcdFx0dGhpcy5zZWxlY3RlZEVsZW1lbnQgPSBlbGVtZW50O1xuXHRcdH1cblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ3ZpZXctc3RhY2snKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndmlldy1zdGFjaycsIFZpZXdTdGFjayk7XG4iLCJleHBvcnQgY2xhc3MgQ2hhdE1hbmFnZXJcbntcblx0Y29uc3RydWN0b3Ioc2hlbGxDdHJsKVxuXHR7XG5cdFx0dGhpcy5VU0VSVkFSX01PRFVMRSA9ICdtb2QnO1xuXG5cdFx0dGhpcy5zaGVsbEN0cmwgPSBzaGVsbEN0cmw7XG5cblx0XHQvLyBUT0RPIEltcGxlbWVudCBjaGF0IG1hbmFnZXIgYWZ0ZXIgY3JlYXRpbmcgdGhlIGNoYXQgVUkgaW4gbWFpbiBzaGVsbFxuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCBieSB0aGUgc2hlbGwgd2hlbiB0aGUgdXNlciBsb2FkcyBhIG5ldyBtb2R1bGUsIHNvIHRoYXQgdGhpcyBpbmZvXG5cdCAqIGNhbiBiZSBzYXZlZCBpbiB0aGUgdXNlciB2YXJpYWJsZXMgYW5kIGRpc3BsYXllZCBpbiB0aGUgY2hhdCdzIHVzZXJsaXN0LlxuXHQgKi9cblx0c2V0Q3VycmVudE1vZHVsZShtb2R1bGVJZClcblx0e1xuXHRcdC8vIFNhdmUgbW9kdWxlIGlkIGluIHVzZXIgdmFyaWFibGVzXG5cdFx0bGV0IHVzZXJWYXIgPSBuZXcgU0ZTMlguU0ZTVXNlclZhcmlhYmxlKHRoaXMuVVNFUlZBUl9NT0RVTEUsIG1vZHVsZUlkKTtcblx0XHR0aGlzLnNoZWxsQ3RybC5zbWFydEZveC5zZW5kKG5ldyBTRlMyWC5TZXRVc2VyVmFyaWFibGVzUmVxdWVzdChbdXNlclZhcl0pKTtcblx0fVxufVxuIiwiaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL3V0aWxzL2V2ZW50LWRpc3BhdGNoZXInO1xuaW1wb3J0IHtDb25uZWN0aW9uTWFuYWdlckV2ZW50fSBmcm9tICcuLi91dGlscy9ldmVudHMnO1xuXG5leHBvcnQgY2xhc3MgQ29ubmVjdGlvbk1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJcbntcblx0Y29uc3RydWN0b3Ioc2hlbGxDdHJsKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuQURNSU5fWk9ORV9OQU1FID0gXCItLT09e3t7IEFkbWluWm9uZSB9fX09PS0tXCI7XG5cdFx0dGhpcy5FWFRFTlNJT05fRVJST1IgPSBcImVycm9yXCI7XG5cblx0XHR0aGlzLkNPTU1BTkRTX1BSRUZJWCA9IFwiYWRtaW5cIjtcblx0XHR0aGlzLkNPTU1BTkRfUkVTVEFSVCA9IFwicmVzdGFydFwiO1xuXHRcdHRoaXMuQ09NTUFORF9IQUxUID0gXCJoYWx0XCI7XG5cblx0XHR0aGlzLnNoZWxsQ3RybCA9IHNoZWxsQ3RybDtcblx0fVxuXG5cdGdldCBzbWFydEZveCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fc2Y7XG5cdH1cblxuXHRjb25uZWN0KGNvbmZpZywgdXNlcm5hbWUsIHBhc3N3b3JkKVxuXHR7XG5cdFx0Ly8gU2V0IGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiBvcHRpb25zXG5cdFx0Y29uZmlnLnpvbmUgPSB0aGlzLkFETUlOX1pPTkVfTkFNRTtcblx0XHRjb25maWcuZGVidWcgPSBmYWxzZTtcblxuXHRcdC8vIENyZWF0ZSBTbWFydEZveCBpbnN0YW5jZVxuXHRcdHRoaXMuX3NmID0gbmV3IFNGUzJYLlNtYXJ0Rm94KGNvbmZpZyk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXJzIHRvIFNtYXJ0Rm94IGV2ZW50cyB1c2VmdWwgdG8gdGhlIHNoZWxsXG5cdFx0dGhpcy5fYWRkU0ZTRXZlbnRMaXN0ZW5lcnMoKTtcblxuXHRcdC8vIFNhdmUgcmVmZXJlbmNlIHRvIGNvbm5lY3Rpb24gZGV0YWlsc1xuXHRcdHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcblx0XHR0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xuXHRcdHRoaXMuX3Bhc3N3b3JkID0gcGFzc3dvcmQ7XG5cblx0XHQvLyBDb25uZWN0IHRvIFNtYXJ0Rm94U2VydmVyIGluc3RhbmNlXG5cdFx0dGhpcy5fc2YuY29ubmVjdCgpO1xuXHR9XG5cblx0ZGlzY29ubmVjdCgpXG5cdHtcblx0XHR0aGlzLl9zZi5kaXNjb25uZWN0KCk7XG5cdH1cblxuXHRyZXN0YXJ0U2VydmVyKClcblx0e1xuXHRcdGlmICh0aGlzLl9zZi5pc0Nvbm5lY3RlZClcblx0XHRcdHRoaXMuX3NmLnNlbmQobmV3IFNGUzJYLkV4dGVuc2lvblJlcXVlc3QodGhpcy5DT01NQU5EU19QUkVGSVggKyBcIi5cIiArIHRoaXMuQ09NTUFORF9SRVNUQVJUKSk7XG5cdH1cblxuXHRoYWx0U2VydmVyKClcblx0e1xuXHRcdGlmICh0aGlzLl9zZi5pc0Nvbm5lY3RlZClcblx0XHRcdHRoaXMuX3NmLnNlbmQobmV3IFNGUzJYLkV4dGVuc2lvblJlcXVlc3QodGhpcy5DT01NQU5EU19QUkVGSVggKyBcIi5cIiArIHRoaXMuQ09NTUFORF9IQUxUKSk7XG5cdH1cblxuXHQvKiAtLS0tLS0tLS0gUFJJVkFURSBVVElMSVRZIE1FVEhPRFMgLS0tLS0tLS0tICovXG5cblx0X2FkZFNGU0V2ZW50TGlzdGVuZXJzKClcblx0e1xuXHRcdHRoaXMuX3NmLmFkZEV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuQ09OTkVDVElPTiwgdGhpcy5fb25Db25uZWN0aW9uLCB0aGlzKTtcblx0XHR0aGlzLl9zZi5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkNPTk5FQ1RJT05fTE9TVCwgdGhpcy5fb25Db25uZWN0aW9uTG9zdCwgdGhpcyk7XG5cdFx0dGhpcy5fc2YuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5MT0dJTiwgdGhpcy5fb25Mb2dpbiwgdGhpcyk7XG5cdFx0dGhpcy5fc2YuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5MT0dJTl9FUlJPUiwgdGhpcy5fb25Mb2dpbkVycm9yLCB0aGlzKTtcblx0XHR0aGlzLl9zZi5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkVYVEVOU0lPTl9SRVNQT05TRSwgdGhpcy5fb25FeHRlbnNpb25SZXNwb25zZSwgdGhpcyk7XG5cdH1cblxuXHRfcmVzZXQoKVxuXHR7XG5cdFx0Ly8gUmVtb3ZlIFNGUyBldmVudCBsaXN0ZW5lcnNcblx0XHR0aGlzLl9zZi5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkNPTk5FQ1RJT04sIHRoaXMuX29uQ29ubmVjdGlvbik7XG5cdFx0dGhpcy5fc2YucmVtb3ZlRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5DT05ORUNUSU9OX0xPU1QsIHRoaXMuX29uQ29ubmVjdGlvbkxvc3QpO1xuXHRcdHRoaXMuX3NmLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuTE9HSU4sIHRoaXMuX29uTG9naW4pO1xuXHRcdHRoaXMuX3NmLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuTE9HSU5fRVJST1IsIHRoaXMuX29uTG9naW5FcnJvcik7XG5cdFx0dGhpcy5fc2YucmVtb3ZlRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5FWFRFTlNJT05fUkVTUE9OU0UsIHRoaXMuX29uRXh0ZW5zaW9uUmVzcG9uc2UpO1xuXG5cdFx0Ly8gRGVsZXRlIFNtYXJ0Rm94IGNsYXNzIGluc3RhbmNlXG5cdFx0dGhpcy5fc2YgPSBudWxsO1xuXG5cdFx0Ly8gRGVsZXRlIGNvbm5lY3Rpb24gZGV0YWlsc1xuXHRcdHRoaXMuX2NvbmZpZyA9IG51bGw7XG5cdFx0dGhpcy5fdXNlcm5hbWUgPSBudWxsO1xuXHRcdHRoaXMuX3Bhc3N3b3JkID0gbnVsbDtcblx0fVxuXG5cdF9sb2dpbigpXG5cdHtcblx0XHQvLyBUaGUgY3VycmVudCBBZG1pblRvb2wgdmVyc2lvbiBtdXN0IGJlIHNlbnQgdG8gdGhlIHNlcnZlciBkdXJpbmcgbG9naW4sIHRvIGNoZWNrIGlmIGl0IGlzIHVwLXRvLWRhdGVcblx0XHRsZXQgcGFyYW1zID0gbmV3IFNGUzJYLlNGU09iamVjdCgpO1xuXHRcdHBhcmFtcy5wdXRJbnQoJ2NsaWVudFZlcicsIHRoaXMuc2hlbGxDdHJsLmludFZlcnNpb24pO1xuXG5cdFx0Ly8gTG9naW5cblx0XHR0aGlzLl9zZi5zZW5kKCBuZXcgU0ZTMlguTG9naW5SZXF1ZXN0KHRoaXMuX3VzZXJuYW1lLCB0aGlzLl9wYXNzd29yZCwgcGFyYW1zLCB0aGlzLl9jb25maWcuem9uZSkgKTtcblx0fVxuXG5cdC8qIC0tLS0tLS0tLSBTTUFSVEZPWCBFVkVOVCBMSVNURU5FUlMgLS0tLS0tLS0tICovXG5cblx0X29uQ29ubmVjdGlvbihldnRQYXJhbXMpXG5cdHtcblx0XHRpZiAoZXZ0UGFyYW1zLnN1Y2Nlc3MpXG5cdFx0e1xuXHRcdFx0Ly8gRGlzcGF0Y2ggY29ubmVjdGlvbiBldmVudFxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuQ09OTkVDVElPTik7XG5cblx0XHRcdC8vIFNlbmQgbG9naW4gcmVxdWVzdFxuXHRcdFx0dGhpcy5fbG9naW4oKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdC8vIERpc3BhdGNoIGVycm9yIGV2ZW50XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoQ29ubmVjdGlvbk1hbmFnZXJFdmVudC5FUlJPUiwge21lc3NhZ2U6IGBVbmFibGUgdG8gY29ubmVjdCB0byAke3RoaXMuX2NvbmZpZy5ob3N0fToke3RoaXMuX2NvbmZpZy5wb3J0fWB9KTtcblxuXHRcdFx0Ly8gUmVzZXQgc3RhdHVzXG5cdFx0XHR0aGlzLl9yZXNldCgpO1xuXHRcdH1cblx0fVxuXG5cdF9vbkNvbm5lY3Rpb25Mb3N0KGV2dFBhcmFtcylcblx0e1xuXHRcdGxldCByZWFzb24gPSBldnRQYXJhbXMucmVhc29uO1xuXG5cdFx0aWYgKHJlYXNvbiAhPSBTRlMyWC5DbGllbnREaXNjb25uZWN0aW9uUmVhc29uLk1BTlVBTClcblx0XHR7XG5cdFx0XHR2YXIgbXNnO1xuXG5cdFx0XHQvLyBMb2cgZGlzY29ubmVjdGlvbiBtZXNzYWdlIHN0YXRpbmcgdGhlIHJlYXNvblxuXHRcdFx0aWYgKHJlYXNvbiA9PSBTRlMyWC5DbGllbnREaXNjb25uZWN0aW9uUmVhc29uLklETEUpXG5cdFx0XHRcdG1zZyA9ICdpbmFjdGl2aXR5Jztcblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0bXNnID0gJ3Vua25vd24gcmVhc29uJztcblxuXHRcdFx0XHRpZiAocmVhc29uICE9IFNGUzJYLkNsaWVudERpc2Nvbm5lY3Rpb25SZWFzb24uVU5LTk9XTilcblx0XHRcdFx0XHRtc2cgKz0gYCAoc2VydmVyIHJlcG9ydGVkOiAke3JlYXNvbn0pYDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGlzcGF0Y2ggZXJyb3IgZXZlbnRcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25uZWN0aW9uTWFuYWdlckV2ZW50LkVSUk9SLCB7bWVzc2FnZTogYEEgZGlzY29ubmVjdGlvbiBvY2N1cnJlZCBkdWUgdG8gJHttc2d9OyBwbGVhc2UgcmVjb25uZWN0YH0pO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0Ly8gRGlzcGF0Y2ggZGlzY29ubmVjdGlvbiBldmVudFxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuRElTQ09OTkVDVElPTik7XG5cdFx0fVxuXG5cdFx0Ly8gUmVzZXRcblx0XHR0aGlzLl9yZXNldCgpO1xuXHR9XG5cblx0X29uTG9naW4oZXZ0UGFyYW1zKVxuXHR7XG5cdFx0bGV0IGRhdGEgPSBldnRQYXJhbXMuZGF0YTtcblxuXHRcdGxldCBwYXJhbXMgPSB7XG5cdFx0XHRzZXJ2ZXJWZXJzaW9uOiBkYXRhLmdldFV0ZlN0cmluZygnc2VydmVyVmVyJyksXG5cdFx0XHRzZXJ2ZXJOYW1lOiBkYXRhLmdldFV0ZlN0cmluZygnc2VydmVyTmFtZScpLFxuXHRcdFx0c2VydmVyVXB0aW1lOiBkYXRhLmdldEludEFycmF5KCd1cHRpbWUnKSxcblx0XHRcdHByb2NDb250cm9sRW5hYmxlZDogZGF0YS5nZXRCb29sKCdwcm9jQ3RybCcpLFxuXHRcdFx0YWxsb3dIYWx0OiBkYXRhLmdldEJvb2woJ2FsbG93SGFsdCcpLFxuXHRcdFx0bW9kdWxlczogZGF0YS5nZXRTRlNBcnJheSgnbW9kdWxlcycpXG5cdFx0fTtcblxuXHRcdC8vIERpc3BhdGNoIGxvZ2luIGV2ZW50XG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuTE9HSU4sIHBhcmFtcyk7XG5cdH1cblxuXHRfb25Mb2dpbkVycm9yKGV2dFBhcmFtcylcblx0e1xuXHRcdC8vIERpc2Nvbm5lY3QgZnJvbSBzZXJ2ZXJcblx0XHR0aGlzLl9zZi5kaXNjb25uZWN0KCk7XG5cblx0XHQvLyBEaXNwYXRjaCBlcnJvciBldmVudFxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChDb25uZWN0aW9uTWFuYWdlckV2ZW50LkVSUk9SLCB7bWVzc2FnZTogZXZ0UGFyYW1zLmVycm9yTWVzc2FnZX0pO1xuXHR9XG5cblx0X29uRXh0ZW5zaW9uUmVzcG9uc2UoZXZ0UGFyYW1zKVxuXHR7XG5cdFx0aWYgKGV2dFBhcmFtcy5jbWQgPT0gdGhpcy5FWFRFTlNJT05fRVJST1IpXG5cdFx0e1xuXHRcdFx0bGV0IGRhdGEgPSBldnRQYXJhbXMucGFyYW1zO1xuXG5cdFx0XHQvLyBBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkIGluIHRoZSBBZG1pbiBUb29sIHNlcnZlci1zaWRlIGV4dGVuc2lvblxuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuU0VSVkVSX0VSUk9SLCB7bWVzc2FnZTogJ0FuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWQgaW4gdGhlIEFkbWluIFRvb2wgc2VydmVyLXNpZGUgZXh0ZW5zaW9uLCBwbGVhc2UgY2hlY2sgdGhlIHNlcnZlci1zaWRlIGxvZ3M7IHRoZSBleHRlbnNpb24gcmVwb3J0ZWQ6ICcgKyBkYXRhLmdldFV0ZlN0cmluZygnZXJyb3InKX0pO1xuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtFdmVudERpc3BhdGNoZXJ9IGZyb20gJy4uL3V0aWxzL2V2ZW50LWRpc3BhdGNoZXInO1xuaW1wb3J0IHtNb2R1bGVNYW5hZ2VyRXZlbnR9IGZyb20gJy4uL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQge3RvS2ViYWJDYXNlfSBmcm9tICcuLi91dGlscy91dGlsaXRpZXMnO1xuaW1wb3J0IHtCYXNlTW9kdWxlfSBmcm9tICcuLi9tb2R1bGVzL2Jhc2UtbW9kdWxlJztcblxuZXhwb3J0IGNsYXNzIE1vZHVsZU1hbmFnZXIgZXh0ZW5kcyBFdmVudERpc3BhdGNoZXJcbntcblx0Y29uc3RydWN0b3Ioc2hlbGxDdHJsLCBjb250YWluZXIpXG5cdHtcblx0XHRzdXBlcigpO1xuXG5cdFx0Ly8gTWFrZSBCYXNlTW9kdWxlIGNsYXNzIGdsb2JhbGx5IGF2YWlsYWJsZSwgc28gaXQgY2FuIGJlIGV4dGVuZGVkIGJ5IGN1c3RvbSBtb2R1bGVzXG5cdFx0d2luZG93LkJhc2VNb2R1bGUgPSBCYXNlTW9kdWxlXG5cblx0XHR0aGlzLl9zaGVsbEN0cmwgPSBzaGVsbEN0cmw7XG5cdFx0dGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuXHRcdHRoaXMuX2N1cnJlbnRNb2R1bGVJZCA9IG51bGw7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgZm9yIG5hdmlnYXRpb24gaXRlbXMgY2xpY2tcblx0XHR0aGlzLl9jb250YWluZXIub24oJ2NsaWNrJywgJy5uYXYtaXRlbScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGxldCBtb2R1bGVJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcblx0XHRcdGxldCBtb2R1bGVEYXRhID0gdGhpcy5fbW9kdWxlQ29uZmlnQnlJZFttb2R1bGVJZF07XG5cblx0XHRcdGlmIChtb2R1bGVJZCAhPSB0aGlzLl9jdXJyZW50TW9kdWxlSWQpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIExvYWQgc2VsZWN0ZWQgbW9kdWxlXG5cdFx0XHRcdHRoaXMuX2xvYWRNb2R1bGUobW9kdWxlRGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsb3NlIG5hdmlnYXRpb25cblx0XHRcdHRoaXMuX3NoZWxsQ3RybC5fdG9nZ2xlTmF2KGZhbHNlKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gc2hvdyB0b29sdGlwXG5cdFx0dGhpcy5fY29udGFpbmVyLmtlbmRvVG9vbHRpcCh7XG5cdFx0XHRmaWx0ZXI6ICdsaVtkYXRhLWlkXScsXG5cdFx0XHRjb250ZW50OiAkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdGxldCBtb2R1bGVJZCA9IGV2ZW50LnRhcmdldFswXS5kYXRhc2V0LmlkO1xuXHRcdFx0XHRsZXQgbW9kdWxlRGF0YSA9IHRoaXMuX21vZHVsZUNvbmZpZ0J5SWRbbW9kdWxlSWRdO1xuXHRcdCAgICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7bW9kdWxlRGF0YS5uYW1lfTwvc3Ryb25nPjxicj48c3Bhbj4ke21vZHVsZURhdGEuZGVzY3JpcHRpb259PC9zcGFuPmA7XG5cdFx0ICAgIH0sIHRoaXMpXG5cdFx0fSk7XG5cblx0XHQvKiBURVNUSU5HIE1FTU9SWSBMRUFLUyBJTiBNT0RVTEVTIExPQURJTkdcblx0XHRBREQgVEhJUyBJTiBUSEUgTUFJTiBWSUVXIFRPIFNUQVJUIFRIRSBURVNUOiA8ZGl2PjxidXR0b24gaWQ9XCJ0ZW1wXCI+dGVzdDwvYnV0dG9uPjxzcGFuIGlkPVwiY250XCI+PC9zcGFuPjwvZGl2PlxuXHRcdCQoJyN0ZW1wJykuY2xpY2soXG5cdFx0XHQkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLmNudCA9IDA7XG5cdFx0XHRcdGlmICh0aGlzLnRpbWVyID09IG51bGwpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gd2luZG93LnNldEludGVydmFsKCQucHJveHkoZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0XHRcdCQoJyNjbnQnKS50ZXh0KHRoaXMuY250KyspXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5fY3VycmVudE1vZHVsZUlkID09ICdEYXNoYm9hcmQnKVxuXHRcdFx0XHRcdFx0XHR0aGlzLl9sb2FkTW9kdWxlKHRoaXMuX21vZHVsZUNvbmZpZ0J5SWRbJ1NlcnZlckNvbmZpZ3VyYXRvciddKTtcblx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0dGhpcy5fbG9hZE1vZHVsZSh0aGlzLl9tb2R1bGVDb25maWdCeUlkWydEYXNoYm9hcmQnXSk7XG5cdFx0XHRcdFx0fSwgdGhpcyksIDUwMCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0KTtcblx0XHQqL1xuXHR9XG5cblx0aW5pdE1vZHVsZXNMaXN0KG1vZHVsZXNEYXRhLCBsb2FkTW9kdWxlSWQgPSBudWxsKVxuXHR7XG5cdFx0Ly8gU0VUVVAgTU9EVUxFUyBMSVNUXG5cblx0XHQvLyBFbXB0eSBjb250YWluZXIgb2YgbW9kdWxlIHNlbGVjdGlvbiBidXR0b25zXG5cdFx0dGhpcy5fY29udGFpbmVyLmVtcHR5KCk7XG5cblx0XHR0aGlzLl9tb2R1bGVDb25maWdCeUlkID0ge307XG5cdFx0dmFyIGZpcnN0TW9kdWxlID0gbnVsbDtcblx0XHR2YXIgbG9hZE1vZHVsZSA9IG51bGw7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXNEYXRhLnNpemUoKTsgaSsrKVxuXHRcdHtcblx0XHRcdGxldCBtb2R1bGVEYXRhID0gdGhpcy5fZ2V0TW9kdWxlT2JqZWN0KG1vZHVsZXNEYXRhLmdldFNGU09iamVjdChpKSk7XG5cblx0XHRcdHRoaXMuX21vZHVsZUNvbmZpZ0J5SWRbbW9kdWxlRGF0YS5pZF0gPSBtb2R1bGVEYXRhO1xuXG5cdFx0XHQvLyBHZXQgZmlyc3QgbW9kdWxlXG5cdFx0XHRpZiAoaSA9PSAwKVxuXHRcdFx0XHRmaXJzdE1vZHVsZSA9IG1vZHVsZURhdGE7XG5cblx0XHRcdC8vIEdldCBwYXNzZWQgbW9kdWxlXG5cdFx0XHRpZiAobW9kdWxlRGF0YS5pZCA9PSBsb2FkTW9kdWxlSWQpXG5cdFx0XHRcdGxvYWRNb2R1bGUgPSBtb2R1bGVEYXRhO1xuXG5cdFx0XHQvLyBEaXNwbGF5IG1vZHVsZSBidXR0b25cblx0XHRcdGxldCBtb2R1bGVCdXR0b24gPSB0aGlzLl9jcmVhdGVNb2R1bGVCdXR0b24obW9kdWxlRGF0YSk7XG5cdFx0XHRsZXQgZWxlbWVudCA9IHRoaXMuX2NvbnRhaW5lci5hcHBlbmQobW9kdWxlQnV0dG9uKTtcblx0XHR9XG5cblx0XHQvLyBMT0FEIElOSVRJQUwgTU9EVUxFXG5cblx0XHQvLyBJZiBtb2R1bGUgaXMgbm90IHBhc3NlZCwgbG9hZCB0aGUgZmlyc3Qgb25lIG9mIHRoZSBtb2R1bGVzIGxpc3Rcblx0XHRpZiAobG9hZE1vZHVsZSA9PSBudWxsKVxuXHRcdFx0bG9hZE1vZHVsZSA9IGZpcnN0TW9kdWxlO1xuXG5cdFx0dGhpcy5fbG9hZE1vZHVsZShsb2FkTW9kdWxlKTtcblx0fVxuXG5cdHVubG9hZE1vZHVsZSgpXG5cdHtcblx0XHR0aGlzLl9kZXN0cm95Q3VycmVudE1vZHVsZSgpO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRNb2R1bGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudE1vZHVsZUlkO1xuXHR9XG5cblx0Z2V0IGN1cnJlbnRNb2R1bGUoKVxuXHR7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2R1bGUnKTtcblx0fVxuXG5cdF9nZXRNb2R1bGVPYmplY3Qoc2ZzT2JqKVxuXHR7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlkOiBzZnNPYmouZ2V0VXRmU3RyaW5nKCdpZCcpLFxuXHRcdFx0bmFtZTogc2ZzT2JqLmdldFV0ZlN0cmluZygnbmFtZScpLFxuXHRcdFx0ZGVzY3JpcHRpb246IHNmc09iai5nZXRVdGZTdHJpbmcoJ2Rlc2NyaXB0aW9uJyksXG5cdFx0XHRzcGFjaW5nOiBzZnNPYmouZ2V0Qm9vbCgnc3BhY2luZycpLFxuXHRcdFx0aWNvbjogc2ZzT2JqLmNvbnRhaW5zS2V5KCdpY29uU3ZnJykgPyBzZnNPYmouZ2V0VXRmU3RyaW5nKCdpY29uU3ZnJykgOiAnJyxcblx0XHRcdHRhZzogdG9LZWJhYkNhc2Uoc2ZzT2JqLmdldFV0ZlN0cmluZygnaWQnKSksXG5cdFx0XHRpc0N1c3RvbTogc2ZzT2JqLmdldEJvb2woJ2lzQ3VzdG9tJylcblx0XHR9XG5cdH1cblxuXHRfY3JlYXRlTW9kdWxlQnV0dG9uKG1vZHVsZURhdGEpXG5cdHtcblx0XHRyZXR1cm4gYFxuXHRcdFx0PGxpIGNsYXNzPVwibmF2LWl0ZW0gJHttb2R1bGVEYXRhLnNwYWNpbmcgPyAnbXItbGctMycgOiAnJ31cIiBkYXRhLWlkPVwiJHttb2R1bGVEYXRhLmlkfVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kdWxlLWljb25cIj4ke21vZHVsZURhdGEuaWNvbn08L2Rpdj5cblx0XHRcdFx0PGxhYmVsPiR7bW9kdWxlRGF0YS5uYW1lfTwvbGFiZWw+XG5cdFx0XHQ8L2xpPlxuXHRcdGA7XG5cdH1cblxuXHRfbG9hZE1vZHVsZShtb2R1bGVEYXRhKVxuXHR7XG5cdFx0Ly8gTG9hZCB0aGUgSFRNTCBmaWxlIG9mIGEgbW9kdWxlXG5cdFx0JCgnPG1vZHVsZS8+JykubG9hZChgbW9kdWxlcy8ke21vZHVsZURhdGEudGFnfS5odG1sYCwgJC5wcm94eShmdW5jdGlvbihodG1sLCBzdGF0dXMpIHtcblxuXHRcdFx0aWYgKHN0YXR1cyAhPSAnZXJyb3InKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoIW1vZHVsZURhdGEuaXNDdXN0b20pXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBMb2FkIHRoZSBKUyBmaWxlIG9mIGEgc3RhbmRhcmQgbW9kdWxlXG5cdFx0XHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwibW9kdWxlLVwiICovIGAuLi9tb2R1bGVzLyR7bW9kdWxlRGF0YS50YWd9LmpzYCkudGhlbihtb2R1bGUgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5fb25Nb2R1bGVDb250cm9sbGVyTG9hZFN1Y2Nlc3MobW9kdWxlRGF0YSwgaHRtbCwgbW9kdWxlKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaChlcnJvciA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9vbk1vZHVsZUNvbnRyb2xsZXJMb2FkRXJyb3IobW9kdWxlRGF0YSwgZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIExvYWQgdGhlIEpTIGZpbGUgb2YgYSBjdXN0b20gbW9kdWxlXG5cdFx0XHRcdFx0aW1wb3J0KC8qIHdlYnBhY2tJZ25vcmU6IHRydWUgKi9gLi4vY3VzdG9tLW1vZHVsZXMvJHttb2R1bGVEYXRhLnRhZ30uanNgKS50aGVuKG1vZHVsZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLl9vbk1vZHVsZUNvbnRyb2xsZXJMb2FkU3VjY2Vzcyhtb2R1bGVEYXRhLCBodG1sLCBtb2R1bGUpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuX29uTW9kdWxlQ29udHJvbGxlckxvYWRFcnJvcihtb2R1bGVEYXRhLCBlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdHtcblx0XHRcdFx0Ly8gRGlzcGF0Y2ggZXJyb3IgZXZlbnRcblx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KE1vZHVsZU1hbmFnZXJFdmVudC5NT0RVTEVfTE9BRF9FUlJPUiwge21lc3NhZ2U6IGAke21vZHVsZURhdGEubmFtZX0gbW9kdWxlJ3MgdmlldyAoaHRtbCkgbm90IGZvdW5kLmB9KTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKSk7XG5cdH1cblxuXHRfb25Nb2R1bGVDb250cm9sbGVyTG9hZFN1Y2Nlc3MobW9kdWxlRGF0YSwgaHRtbCwgbW9kdWxlKVxuXHR7XG5cdFx0Ly8gRGVzdHJveSBjdXJyZW50IG1vZHVsZVxuXHRcdHRoaXMuX2Rlc3Ryb3lDdXJyZW50TW9kdWxlKCk7XG5cblx0XHQvLyBEZWZpbmUgbG9hZGVkIG1vZHVsZSAoaWYgbmVjZXNzYXJ5KVxuXHRcdGlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldChtb2R1bGVEYXRhLnRhZyArICctbW9kdWxlJykpXG5cdFx0XHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKG1vZHVsZURhdGEudGFnICsgJy1tb2R1bGUnLCBtb2R1bGUuZGVmYXVsdCk7XG5cblx0XHQvLyBBcHBlbmQgbmV3IG1vZHVsZVxuXHRcdCQoJ2Rpdi5tb2R1bGUtbG9hZGVyJykuYXBwZW5kKGh0bWwpO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBtb2R1bGVcblx0XHR0aGlzLmN1cnJlbnRNb2R1bGUuaW5pdGlhbGl6ZShtb2R1bGVEYXRhLCB0aGlzLl9zaGVsbEN0cmwpO1xuXG5cdFx0Ly8gU2F2ZSBjdXJyZW50IG1vZHVsZSBpZFxuXHRcdHRoaXMuX2N1cnJlbnRNb2R1bGVJZCA9IG1vZHVsZURhdGEuaWQ7XG5cblx0XHQvLyBEaXNwYXRjaCBldmVudFxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChNb2R1bGVNYW5hZ2VyRXZlbnQuTU9EVUxFX0xPQURFRCwge21vZHVsZURhdGE6IG1vZHVsZURhdGF9KTtcblx0fVxuXG5cdF9vbk1vZHVsZUNvbnRyb2xsZXJMb2FkRXJyb3IobW9kdWxlRGF0YSwgZXJyb3IpXG5cdHtcblx0XHQvLyBMb2cgZXJyb3IgZGV0YWlsc1xuXHRcdHRoaXMuX3NoZWxsQ3RybC5sb2dNZXNzYWdlKGVycm9yLCAnd2FybicpO1xuXG5cdFx0Ly8gRGlzcGF0Y2ggZXJyb3IgZXZlbnRcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoTW9kdWxlTWFuYWdlckV2ZW50Lk1PRFVMRV9MT0FEX0VSUk9SLCB7bWVzc2FnZTogYCR7bW9kdWxlRGF0YS5uYW1lfSBjdXN0b20gbW9kdWxlJ3MgY29udHJvbGxlciAoanMpIGNvdWxkbid0IGJlIGxvYWRlZC5gfSk7XG5cdH1cblxuXHRfZGVzdHJveUN1cnJlbnRNb2R1bGUoKVxuXHR7XG5cdFx0Ly8gR2V0IGEgcmVmZXJlbmNlIHRvIGN1cnJlbnQgbW9kdWxlXG5cdFx0Y29uc3QgbW9kID0gdGhpcy5jdXJyZW50TW9kdWxlO1xuXG5cdFx0Ly8gQ2FsbCBkZXN0cm95IG1ldGhvZCBvbiBtb2R1bGUncyBjbGFzc1xuXHRcdGlmIChtb2QgIT0gbnVsbClcblx0XHRcdG1vZC5kZXN0cm95KCk7XG5cblx0XHQvLyBFbXB0eSBtb2R1bGUgY29udGFpbmVyXG5cdFx0JCgnZGl2Lm1vZHVsZS1sb2FkZXInKS5lbXB0eSgpO1xuXG5cdFx0dGhpcy5fY3VycmVudE1vZHVsZUlkID0gbnVsbDtcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIEJhc2VNb2R1bGUgZXh0ZW5kcyBIVE1MRWxlbWVudFxue1xuXHRjb25zdHJ1Y3Rvcihjb21tYW5kc1ByZWZpeClcblx0e1xuXHQgICAgc3VwZXIoKTtcblxuXHRcdHRoaXMuX2NvbW1hbmRzUHJlZml4ID0gY29tbWFuZHNQcmVmaXg7XG5cdH1cblxuXHRnZXQgc2hlbGxDdHJsKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9zaGVsbEN0cmw7XG5cdH1cblxuXHRnZXQgc21hcnRGb3goKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3NoZWxsQ3RybC5zbWFydEZveDtcblx0fVxuXG5cdGdldCBpZERhdGEoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2lkRGF0YTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIE9WRVJSSURBQkxFIE1FVEhPRFNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogQ2FsbGVkIGJ5IHRoZSBtb2R1bGVzIG1hbmFnZXIgYWZ0ZXIgbG9hZGluZyB0aGUgbW9kdWxlLlxuXHQgKiBJbiBjYXNlIGl0IGlzIG92ZXJyaWRkZW4sIHN1cGVyIG11c3QgYWx3YXlzIGJlIGNhbGxlZCFcblx0ICovXG5cdGluaXRpYWxpemUoaWREYXRhLCBzaGVsbENvbnRyb2xsZXIpXG5cdHtcblx0XHR0aGlzLl9pZERhdGEgPSBpZERhdGE7XG5cdFx0dGhpcy5fc2hlbGxDdHJsID0gc2hlbGxDb250cm9sbGVyO1xuXG5cdFx0Ly8gQWRkIGxpc3RlbmVyIHRvIEFkbWluIGV4dGVuc2lvbiBtZXNzYWdlc1xuXHRcdHRoaXMuc21hcnRGb3guYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5FWFRFTlNJT05fUkVTUE9OU0UsIHRoaXMuX29uRXh0ZW5zaW9uUmVzcG9uc2UsIHRoaXMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCBieSB0aGUgbW9kdWxlcyBtYW5hZ2VyIGJlZm9yZSB1bmxvYWRpbmcgdGhlIG1vZHVsZS5cblx0ICogSW4gY2FzZSBpdCBpcyBvdmVycmlkZGVuLCBzdXBlciBtdXN0IGFsd2F5cyBiZSBjYWxsZWQhXG5cdCAqL1xuXHRkZXN0cm95KClcblx0e1xuXHRcdC8vIFJlbW92ZSBsaXN0ZW5lciB0byBBZG1pbiBleHRlbnNpb24gbWVzc2FnZXNcblx0XHR0aGlzLnNtYXJ0Rm94LnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuRVhURU5TSU9OX1JFU1BPTlNFLCB0aGlzLl9vbkV4dGVuc2lvblJlc3BvbnNlKTtcblxuXHRcdC8vIERlc3Ryb3kgYWxsIEtlbmRvIHdpZGdldHNcblx0XHRrZW5kby5kZXN0cm95KCQoJy5tb2R1bGUnKSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbGVkIGJ5IHRoZSBvbkV4dGVuc2lvblJlc3BvbnNlIGxpc3RlbmVyIGJlbG93LlxuXHQgKiBNdXN0IGJlIG92ZXJyaWRkZW4uXG5cdCAqL1xuXHRvbkV4dGVuc2lvbkNvbW1hbmQoY21kLCBkYXRhKVxuXHR7XG5cdFx0Ly8gTm90aGluZyB0byBkb1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCBieSB0aGUgbWFpbiBzaGVsbCB3aGVuZXZlciB0aGUgc2VydmVyIHVwdGltZSBjaGFuZ2VzLlxuXHQgKiBDYW4gYmUgb3ZlcnJpZGRlbiB0byBkaXNwbGF5IHRoZSB1cHRpbWUgaW5zaWRlIGEgbW9kdWxlIG9yIG1ha2UgY2FsY3VsYXRpb25zIG9uIHRoZSBzZXJ2ZXIgdXB0aW1lLlxuXHQgKi9cblx0b25VcHRpbWVVcGRhdGVkKHZhbHVlcylcblx0e1xuXHRcdC8vIE5vdGhpbmcgdG8gZG9cblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFBVQkxJQyBNRVRIT0RTXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LyoqXG5cdCAqIFNlbmQgYSByZXF1ZXN0IHRvIEFkbWluIGV4dGVuc2lvbi5cblx0ICovXG5cdHNlbmRFeHRlbnNpb25SZXF1ZXN0KGNvbW1hbmQsIGRhdGEgPSBudWxsKVxuXHR7XG5cdFx0aWYgKGRhdGEgPT0gbnVsbClcblx0XHRcdGRhdGEgPSBuZXcgU0ZTMlguU0ZTT2JqZWN0KCk7XG5cblx0XHR0aGlzLnNtYXJ0Rm94LnNlbmQobmV3IFNGUzJYLkV4dGVuc2lvblJlcXVlc3QoYCR7dGhpcy5fY29tbWFuZHNQcmVmaXh9LiR7Y29tbWFuZH1gLCBkYXRhKSk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBQUklWQVRFIE1FVEhPRFNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRfb25FeHRlbnNpb25SZXNwb25zZShldnRQYXJhbXMpXG5cdHtcblx0XHQvLyBGaWx0ZXIgc2VydmVyIHJlc3BvbnNlc1xuXHRcdGxldCBjb21tYW5kcyA9IGV2dFBhcmFtcy5jbWQuc3BsaXQoJy4nKTtcblx0XHRsZXQgZGF0YSA9IGV2dFBhcmFtcy5wYXJhbXM7XG5cblx0XHRpZiAoY29tbWFuZHNbMF0gPT0gdGhpcy5fY29tbWFuZHNQcmVmaXgpXG5cdFx0e1xuXHRcdFx0aWYgKGNvbW1hbmRzLmxlbmd0aCA+IDEpXG5cdFx0XHRcdHRoaXMub25FeHRlbnNpb25Db21tYW5kKGNvbW1hbmRzWzFdLCBkYXRhKVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtWaWV3U3RhY2t9IGZyb20gJy4vY29tcG9uZW50cy92aWV3LXN0YWNrJztcbmltcG9ydCB7TW9kdWxlTWFuYWdlcn0gZnJvbSAnLi9tYW5hZ2Vycy9tb2R1bGUtbWFuYWdlcic7XG5pbXBvcnQge01vZHVsZU1hbmFnZXJFdmVudH0gZnJvbSAnLi91dGlscy9ldmVudHMnO1xuaW1wb3J0IHtDb25uZWN0aW9uTWFuYWdlcn0gZnJvbSAnLi9tYW5hZ2Vycy9jb25uZWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IHtDb25uZWN0aW9uTWFuYWdlckV2ZW50fSBmcm9tICcuL3V0aWxzL2V2ZW50cyc7XG5pbXBvcnQge0NoYXRNYW5hZ2VyfSBmcm9tICcuL21hbmFnZXJzL2NoYXQtbWFuYWdlcic7XG5pbXBvcnQge3BhcnNlfSBmcm9tICcuL3V0aWxzL2RvdC1wcm9wZXJ0aWVzLXBhcnNlJztcblxuZXhwb3J0IGNsYXNzIFNoZWxsQ29udHJvbGxlclxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHQvLyBTZXQgY29uc3RhbnRzIGFuZCB2YXJpYWJsZXNcblxuXHRcdHRoaXMuVkVSU0lPTl9NQUpPUiA9IDM7XG5cdFx0dGhpcy5WRVJTSU9OX01JTk9SID0gMjtcblx0XHR0aGlzLlZFUlNJT05fU1VCID0gNztcblxuXHRcdHRoaXMuREVGQVVMVF9XU19QT1JUID0gODA4MDtcblx0XHR0aGlzLkRFRkFVTFRfV1NTX1BPUlQgPSA4NDQzO1xuXG5cdFx0dGhpcy5ERUZBVUxUX1VTRVJOQU1FID0gJ3Nmc2FkbWluJztcblx0XHR0aGlzLkRFRkFVTFRfUEFTU1dPUkQgPSAnc2ZzYWRtaW4nO1xuXG5cdFx0dGhpcy5fbG9naW5WYWxpZGF0b3IgPSBudWxsO1xuXG5cdFx0Ly8gRGlzcGxheSB2ZXJzaW9uXG5cdFx0JCgnLmFkbWluLXZlcnNpb24nKS50ZXh0KCd2JyArIHRoaXMuc3RyaW5nVmVyc2lvbik7XG5cblx0XHQvLyBDcmVhdGUgbW9kdWxlcyBtYW5hZ2VyIGluc3RhbmNlIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cdFx0dGhpcy5fbW9kTWFuYWdlciA9IG5ldyBNb2R1bGVNYW5hZ2VyKHRoaXMsICQoJy5uYXYtbWFpbicpKTtcblx0XHR0aGlzLl9tb2RNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoTW9kdWxlTWFuYWdlckV2ZW50Lk1PRFVMRV9MT0FERUQsIHRoaXMuX29uTW9kdWxlTG9hZGVkLCB0aGlzKTtcblx0XHR0aGlzLl9tb2RNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoTW9kdWxlTWFuYWdlckV2ZW50Lk1PRFVMRV9MT0FEX0VSUk9SLCB0aGlzLl9vbk1vZHVsZUxvYWRFcnJvciwgdGhpcyk7XG5cblx0XHQvLyBDcmVhdGUgY29ubmVjdGlvbiBtYW5hZ2VyIGluc3RhbmNlIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXJzXG5cdFx0dGhpcy5fY29ubk1hbmFnZXIgPSBuZXcgQ29ubmVjdGlvbk1hbmFnZXIodGhpcyk7XG5cdFx0dGhpcy5fY29ubk1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25uZWN0aW9uTWFuYWdlckV2ZW50LkNPTk5FQ1RJT04sIHRoaXMuX29uQ29ubmVjdGlvbiwgdGhpcyk7XG5cdFx0dGhpcy5fY29ubk1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25uZWN0aW9uTWFuYWdlckV2ZW50LkxPR0lOLCB0aGlzLl9vbkxvZ2luLCB0aGlzKTtcblx0XHR0aGlzLl9jb25uTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuRElTQ09OTkVDVElPTiwgdGhpcy5fb25EaXNjb25uZWN0aW9uLCB0aGlzKTtcblx0XHR0aGlzLl9jb25uTWFuYWdlci5hZGRFdmVudExpc3RlbmVyKENvbm5lY3Rpb25NYW5hZ2VyRXZlbnQuRVJST1IsIHRoaXMuX29uQ29ubk1hbmFnZXJFcnJvciwgdGhpcyk7XG5cdFx0dGhpcy5fY29ubk1hbmFnZXIuYWRkRXZlbnRMaXN0ZW5lcihDb25uZWN0aW9uTWFuYWdlckV2ZW50LlNFUlZFUl9FUlJPUiwgdGhpcy5fb25TZXJ2ZXJFcnJvciwgdGhpcyk7XG5cblx0XHQvLyBDcmVhdGUgYWRtaW4gY2hhdCBtYW5hZ2VyXG5cdFx0dGhpcy5fY2hhdE1hbmFnZXIgPSBuZXcgQ2hhdE1hbmFnZXIodGhpcyk7XG5cblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHRcdC8vIEluaXRpYWxpemUgdmlld3Ncblx0XHR0aGlzLl9pbml0Vmlld3MoKTtcblxuXHRcdC8vIFNob3cgbG9naW4gdmlld1xuXHRcdHRoaXMuX3N3aXRjaFNoZWxsVmlldygnbG9naW4tdmlldycpO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gVklFVyBJTklUSUFMSVpFUlNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBsb2dpbiB2aWV3LlxuXHQgKi9cblx0X2luaXRMb2dpblZpZXcoKVxuXHR7XG5cdFx0Ly8gU2V0IGRlZmF1bHQgaW5wdXQgdmFsdWVzIChwYXNzd29yZCBuZXZlciBzYXZlZClcblx0XHRsZXQgaG9zdCA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcblx0XHRsZXQgcG9ydCA9IHRoaXMuREVGQVVMVF9XU19QT1JUO1xuXHRcdGxldCBlbmNyeXB0ID0gZmFsc2U7XG5cdFx0bGV0IHVzZXIgPSAnc2ZzYWRtaW4nO1xuXHRcdGxldCByZW1lbWJlciA9IGZhbHNlO1xuXG5cdFx0Ly8gTG9hZCBcImxhc3Qtc2VydmVyXCIgY29va2llXG5cdFx0bGV0IGRhdGEgPSBDb29raWVzLmdldEpTT04oJ2xhc3Qtc2VydmVyJylcbiAgICAgICAgaWYgKGRhdGEpXG5cdFx0e1xuXHRcdFx0aG9zdCA9IGRhdGEuaG9zdDtcbiAgICAgICAgICAgIHBvcnQgPSBkYXRhLnBvcnQ7XG5cdFx0XHRlbmNyeXB0ID0gZGF0YS5lbmNyeXB0O1xuXHRcdFx0dXNlciA9IGRhdGEudXNlcjtcblx0XHRcdHJlbWVtYmVyID0gdHJ1ZTtcbiAgICAgICAgfVxuXG5cdFx0Ly8gUmV0cmlldmUgaG9zdCBmcm9tIEdFVCBwYXJhbWV0ZXJcblx0XHRsZXQgZ2V0SG9zdCA9IHRoaXMuX2dldFVybFBhcmFtZXRlcignaG9zdCcpO1xuXHRcdGlmIChnZXRIb3N0KVxuXHRcdFx0aG9zdCA9IGdldEhvc3Q7XG5cblx0XHQvLyBTZXQgaW5wdXQgdmFsdWVzXG5cdFx0JCgnI2xvZ2luSG9zdCcpLnZhbChob3N0KTtcblx0XHQkKCcjbG9naW5Vc2VybmFtZScpLnZhbCh1c2VyKTtcblx0XHQkKCcjbG9naW5FbmNyeXB0JykucHJvcCgnY2hlY2tlZCcsIGVuY3J5cHQpO1xuXHRcdCQoJyNyZW1lbWJlckxvZ2luJykucHJvcCgnY2hlY2tlZCcsIHJlbWVtYmVyKTtcblxuXHRcdC8vIEluaXRpYWxpemUgbnVtZXJpYyBpbnB1dFxuXHRcdCQoJyNsb2dpblBvcnQnKS5rZW5kb051bWVyaWNUZXh0Qm94KHtcblx0XHRcdGZvcm1hdDogJyMjIyMjJyxcblx0XHRcdHZhbHVlOiBwb3J0XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsaXplIHRoZSBLZW5kbyBVSSBWYWxpZGF0b3Igb24gdGhlIFwiZm9ybVwiIGNvbnRhaW5lclxuXHRcdC8vIChOT1RFOiBkb2VzIE5PVCBoYXZlIHRvIGJlIGFuIGFjdHVhbCA8Zm9ybT4gdGFnKVxuXHRcdHRoaXMuX2xvZ2luVmFsaWRhdG9yID0gJCgnI2xvZ2luRm9ybScpLmtlbmRvVmFsaWRhdG9yKHtcblx0XHRcdHZhbGlkYXRlT25CbHVyOiB0cnVlXG5cdFx0fSkuZGF0YSgna2VuZG9WYWxpZGF0b3InKTtcblxuXHRcdC8vIEFkZCBsaXN0ZW5lciB0byB2YWxpZGF0ZSB0aGUgZm9ybSB3aGVuIHRoZSBDb25uZWN0IGJ1dHRvbiBpcyBjbGlja2VkXG5cdFx0JCgnI2xvZ2luQnV0dG9uJykuY2xpY2soJC5wcm94eSh0aGlzLl9vbkNvbm5lY3RDbGljaywgdGhpcykpO1xuXG5cdFx0Ly8gQWRkIGxpc3RlbmVyIHRvIHN1Ym1pdCBmb3JtIG9uIEVudGVyIGtleSBwcmVzc1xuXHRcdCQoJyNsb2dpbkZvcm0nKS5rZXl1cChmdW5jdGlvbihldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50LmtleSAhPT0gJ0VudGVyJykgcmV0dXJuO1xuXG5cdFx0XHQkKCcjbG9naW5CdXR0b24nKS5jbGljaygpO1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9KTtcblxuXHRcdC8vIEFkZCBsaXN0ZW5lciB0byBlbmNyeXB0IGNoZWNrYm94XG5cdFx0JCgnI2xvZ2luRW5jcnlwdCcpLmNoYW5nZSgkLnByb3h5KGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRsZXQgcG9ydCA9IHRoaXMuREVGQVVMVF9XU19QT1JUO1xuXG5cdFx0XHRpZiAoJCgnI2xvZ2luRW5jcnlwdCcpLnByb3AoJ2NoZWNrZWQnKSlcblx0XHRcdFx0cG9ydCA9IHRoaXMuREVGQVVMVF9XU1NfUE9SVDtcblxuXHRcdFx0JCgnI2xvZ2luUG9ydCcpLmRhdGEoJ2tlbmRvTnVtZXJpY1RleHRCb3gnKS52YWx1ZShwb3J0KTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBIaWRlIGVycm9yIG1lc3NhZ2UgY29udGFpbmVyXG5cdFx0JCgnI2xvZ2luLWVycm9yJykuaGlkZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgbW9kdWxlIHZpZXcuXG5cdCAqL1xuXHRfaW5pdE1vZHVsZVZpZXcoKVxuXHR7XG5cdFx0Ly8gQWRkIGxpc3RlbmVycyB0byBvcGVuL2Nsb3NlIG1lbnUgYnV0dG9uc1xuXHRcdCQoJy5uYXYtb3BlbicpLmNsaWNrKCQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR0aGlzLl90b2dnbGVOYXYodHJ1ZSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0JCgnLm5hdi1jbG9zZSwgLm5hdi1vdmVybGF5JykuY2xpY2soJC5wcm94eShmdW5jdGlvbihldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMuX3RvZ2dsZU5hdihmYWxzZSk7XG5cdFx0fSwgdGhpcykpO1xuXG5cdFx0Ly8gQWRkIGxpc3RlbmVycyB0byBzZXJ2aWNlIGJ1dHRvbnNcblx0XHQkKCcjcmVzdGFydC1idXR0b24nKS5jbGljaygkLnByb3h5KHRoaXMuX29uUmVzdGFydENsaWNrLCB0aGlzKSk7XG5cdFx0JCgnI2hhbHQtYnV0dG9uJykuY2xpY2soJC5wcm94eSh0aGlzLl9vbkhhbHRDbGljaywgdGhpcykpO1xuXHRcdCQoJyNoZWxwLWJ1dHRvbicpLmNsaWNrKCQucHJveHkodGhpcy5fb25IZWxwQ2xpY2ssIHRoaXMpKTtcblx0XHQkKCcjZGlzY29ubmVjdC1idXR0b24nKS5jbGljaygkLnByb3h5KHRoaXMuX29uRGlzY29ubmVjdENsaWNrLCB0aGlzKSk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gc2hvdyB0b29sdGlwIG9uIHNlcnZpY2UgYnV0dG9ucyBob3ZlclxuXHRcdCQoJy5uYXYtc2VydmljZScpLmtlbmRvVG9vbHRpcCh7XG5cdFx0XHRmaWx0ZXI6ICdsaVt0aXRsZV0nXG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gc2Nyb2xsIG1haW4gdmlldyB0byB0b3AgaWYgc3RhdHVzIGJhciBpcyBjbGlja2VkXG5cdFx0JCgnI3N0YXR1cy1iYXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdCQoJ21haW4nKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdmYXN0Jyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBVSSBFVkVOVCBMSVNURU5FUlNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogVmFsaWRhdGUgbG9naW4gZm9ybSBhbmQgY29ubmVjdCtsb2dpbiB0byBTbWFydEZveFNlcnZlci5cblx0ICovXG5cdF9vbkNvbm5lY3RDbGljayhldmVudClcblx0e1xuXHRcdC8vIEhpZGUgYW55IHByZXZpb3VzIGVycm9yIG1lc3NhZ2Vcblx0XHQkKCcjbG9naW4tZXJyb3InKS5oaWRlKCk7XG5cdFx0JCgnI2xvZ2luLWVycm9yJykudGV4dCgnJyk7XG5cblx0XHQvLyBWYWxpZGF0ZSBsb2dpbiBmb3JtXG5cdFx0aWYgKHRoaXMuX2xvZ2luVmFsaWRhdG9yLnZhbGlkYXRlKCkpXG5cdFx0e1xuXHRcdFx0Ly8gRGlzYWJsZSBsb2dpbiBmb3JtXG5cdFx0XHR0aGlzLl9lbmFibGVMb2dpbkZvcm0oZmFsc2UpO1xuXG5cdFx0XHQvLyBSZXRyaWV2ZSBjb25uZWN0aW9uIGRldGFpbHNcblx0XHRcdGxldCBjb25maWcgPSB7fTtcblx0XHRcdGNvbmZpZy5ob3N0ID0gJCgnI2xvZ2luSG9zdCcpLnZhbCgpLnRyaW0oKTtcblx0XHRcdGNvbmZpZy5wb3J0ID0gJCgnI2xvZ2luUG9ydCcpLmRhdGEoJ2tlbmRvTnVtZXJpY1RleHRCb3gnKS52YWx1ZSgpO1xuXHRcdFx0Y29uZmlnLnVzZVNTTCA9ICQoJyNsb2dpbkVuY3J5cHQnKS5wcm9wKCdjaGVja2VkJyk7XG5cblx0XHRcdGxldCB1c2VybmFtZSA9ICQoJyNsb2dpblVzZXJuYW1lJykudmFsKCkudHJpbSgpO1xuXHRcdFx0bGV0IHBhc3N3b3JkID0gJCgnI2xvZ2luUGFzc3dvcmQnKS52YWwoKTtcblxuXHRcdFx0Ly8gU2F2ZSBpbnB1dCB2YWx1ZXMgdG8gY29va2llIChleGNlcHQgcGFzc3dvcmQpLi4uXG5cdFx0XHQvLyAuLi5vciBjbGVhciBwcmV2aW91c2x5IHNhdmVkIGNvb2tpZVxuXHRcdFx0aWYgKCQoJyNyZW1lbWJlckxvZ2luJykucHJvcCgnY2hlY2tlZCcpKVxuXHRcdFx0e1xuXHRcdFx0XHRDb29raWVzLnNldCgnbGFzdC1zZXJ2ZXInLCB7XG5cdFx0XHRcdFx0aG9zdDogY29uZmlnLmhvc3QsXG5cdFx0XHRcdFx0cG9ydDogY29uZmlnLnBvcnQsXG5cdFx0XHRcdFx0ZW5jcnlwdDogY29uZmlnLnVzZVNTTCxcblx0XHRcdFx0XHR1c2VyOiB1c2VybmFtZVxuXG5cdFx0XHRcdH0sIHtleHBpcmVzOiAzMH0pO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRDb29raWVzLnJlbW92ZSgnbGFzdC1zZXJ2ZXInKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29ubmVjdCB0byBTRlMyWCAmIGxvZ2luXG5cdFx0XHR0aGlzLl9jb25uTWFuYWdlci5jb25uZWN0KGNvbmZpZywgdXNlcm5hbWUsIHBhc3N3b3JkKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVzdGFydCBTbWFydEZveFNlcnZlci5cblx0ICovXG5cdF9vblJlc3RhcnRDbGljayhldmVudClcblx0e1xuXHRcdGxldCBtZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdG9wIGFuZCByZXN0YXJ0IHRoaXMgaW5zdGFuY2Ugb2YgU21hcnRGb3hTZXJ2ZXIgMlg/Jztcblx0XHR0aGlzLnNob3dDb25maXJtV2FybmluZyhtZXNzYWdlLCAkLnByb3h5KHRoaXMuX29uUmVzdGFydENvbmZpcm1EaWFsb2dDb25maXJtLCB0aGlzKSk7XG5cdH1cblxuXHQvKipcblx0ICogSGFsdCBTbWFydEZveFNlcnZlci5cblx0ICovXG5cdF9vbkhhbHRDbGljayhldmVudClcblx0e1xuXHRcdGxldCBtZXNzYWdlID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBzdG9wIHRoaXMgaW5zdGFuY2Ugb2YgU21hcnRGb3hTZXJ2ZXIgMlg/PGJyPllvdSB3b25cXCd0IGJlIGFibGUgdG8gcmVzdGFydCBpdCB1c2luZyB0aGUgQWRtaW5pc3RyYXRpb24gVG9vbC4nO1xuXHRcdHRoaXMuc2hvd0NvbmZpcm1XYXJuaW5nKG1lc3NhZ2UsICQucHJveHkodGhpcy5fb25IYWx0Q29uZmlybURpYWxvZ0NvbmZpcm0sIHRoaXMpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBPcGVuIG9ubGluZSBkb2N1bWVudGF0aW9uLlxuXHQgKi9cblx0X29uSGVscENsaWNrKGV2ZW50KVxuXHR7XG5cdFx0Ly8gT3BlbiBvbmxpbmUgZG9jXG5cdFx0d2luZG93Lm9wZW4oYGh0dHA6Ly9kb2NzMnguc21hcnRmb3hzZXJ2ZXIuY29tL0dldHRpbmdTdGFydGVkL2FkbWludG9vbC0ke3RoaXMuX21vZE1hbmFnZXIuY3VycmVudE1vZHVsZUlkfWAsICdfYmxhbmsnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBEaXNjb25uZWN0IGZyb20gc2VydmVyLlxuXHQgKi9cblx0X29uRGlzY29ubmVjdENsaWNrKGV2ZW50KVxuXHR7XG5cdFx0dGhpcy5fY29ubk1hbmFnZXIuZGlzY29ubmVjdCgpO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gQ09OTkVDVElPTiBNQU5BR0VSIEVWRU5UIExJU1RFTkVSU1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdF9vbkNvbm5lY3Rpb24oZXZ0UGFyYW1zKVxuXHR7XG5cdFx0Ly8gTG9nIG1lc3NhZ2Vcblx0XHR0aGlzLmxvZ01lc3NhZ2UoYENvbm5lY3Rpb24gdG8gJHt0aGlzLl9jb25uTWFuYWdlci5zbWFydEZveC5jb25maWcuaG9zdH06JHt0aGlzLl9jb25uTWFuYWdlci5zbWFydEZveC5jb25maWcucG9ydH0gZXN0YWJsaXNoZWRgKTtcblx0fVxuXG5cdF9vbkxvZ2luKGV2dFBhcmFtcylcblx0e1xuXHRcdC8vIExvZyBtZXNzYWdlXG5cdFx0dGhpcy5sb2dNZXNzYWdlKGBTdWNjZXNzZnVsIGxvZ2luIHRvICR7dGhpcy5fY29ubk1hbmFnZXIuc21hcnRGb3guY29uZmlnLmhvc3R9OiR7dGhpcy5fY29ubk1hbmFnZXIuc21hcnRGb3guY29uZmlnLnBvcnR9IHBlcmZvcm1lZGApO1xuXG5cdFx0Ly8gR2V0IGxhc3QgbG9hZGVkIG1vZHVsZSBmcm9tIGNvb2tpZXNcblx0XHRsZXQgbG9hZE1vZHVsZUlkID0gbnVsbDtcblx0XHRsZXQgZGF0YSA9IENvb2tpZXMuZ2V0SlNPTignbGFzdC1tb2R1bGUnKVxuICAgICAgICBpZiAoZGF0YSlcblx0XHRcdGxvYWRNb2R1bGVJZCA9IGRhdGEuaWQ7XG5cblx0XHQvLyBJbml0IHRoZSBtb2R1bGVzIGxpc3Qgd2l0aCB0aGUgY29uZmlndXJhdGlvbiByZXR1cm5lZCBieSB0aGUgc2VydmVyIGFuZDogbG9hZCBsYXN0IHNhdmVkIG1vZHVsZSwgb3IgZmlyc3QgbW9kdWxlIGluIHRoZSBsaXN0LCBvciBwYXNzZWQgbW9kdWxlIGlkXG5cdFx0dGhpcy5fbW9kTWFuYWdlci5pbml0TW9kdWxlc0xpc3QoZXZ0UGFyYW1zLm1vZHVsZXMsIGxvYWRNb2R1bGVJZCk7XG5cblx0XHQvLyBTYXZlIGN1cnJlbnQgdXB0aW1lXG5cdFx0dGhpcy5fdXB0aW1lID0gZXZ0UGFyYW1zLnNlcnZlclVwdGltZTtcblxuXHRcdC8vIFNob3cvaGlkZSBIYWx0IGFuZCBSZXN0YXJ0IGJ1dHRvbnMgZGVwZW5kaW5nIGlmOlxuXHRcdC8vIDEpIHRoaXMgZmVhdHVyZSBpcyBzdXBwb3J0ZWQgZm9yIHRoZSBzZXJ2ZXIgb3BlcmF0aW5nIHN5c3RlbVxuXHRcdC8vIDIpIHRoZSBhZG1pbmlzdHJhdG9yIHdobyBqdXN0IGxvZ2dlZCBpbiBoYXMgdGhlIHBlcm1pc3Npb24gdG8gZXhlY3V0ZSB0aGVzZSBhY3Rpb25zXG5cdFx0dGhpcy5fc2hvd0hhbHRSZXN0YXJ0QnV0dG9ucyhldnRQYXJhbXMucHJvY0NvbnRyb2xFbmFibGVkICYmIGV2dFBhcmFtcy5hbGxvd0hhbHQpO1xuXG5cdFx0Ly8gU3dpdGNoIHRvIG1vZHVsZXMgdmlld1xuXHRcdHRoaXMuX2dvVG9Nb2R1bGVzVmlldyhldnRQYXJhbXMuc2VydmVyVmVyc2lvbiwgZXZ0UGFyYW1zLnNlcnZlck5hbWUpO1xuXG5cdFx0Ly8gSWYgZGVmYXVsdCB1c2VybmFtZSBhbmQgcGFzc3dvcmQgaGF2ZSBiZWVuIHVzZWQuLi5cblx0XHRpZiAoJCgnI2xvZ2luVXNlcm5hbWUnKS52YWwoKSA9PSB0aGlzLkRFRkFVTFRfVVNFUk5BTUUgJiYgJCgnI2xvZ2luUGFzc3dvcmQnKS52YWwoKSA9PSB0aGlzLkRFRkFVTFRfUEFTU1dPUkQpXG5cdFx0e1xuXHRcdFx0Ly8gLi4uc2hvdyBhbGVydFxuXHRcdFx0dGhpcy5zaG93U2ltcGxlQWxlcnQoJ1lvdSBhcmUgdXNpbmcgdGhlIGRlZmF1bHQgYWRtaW5pc3RyYXRpb24gcHJvZmlsZSB3aGljaCBpcyBoaWdobHkgaW5zZWN1cmUsIHBsZWFzZSBtYWtlIHN1cmUgdG8gaW1tZWRpYXRlbHkgY2hhbmdlIHRoZSBwYXNzd29yZC4nKTtcblxuXHRcdFx0Ly8gLi4uc2hvdyBub24tcmVtb3ZhYmxlIG1lc3NhZ2UgaW4gYWxlcnQgYmFyXG5cdFx0XHQkKCcjYWxlcnQtYmFyJykuc2hvdygpO1xuXHRcdFx0JCgnI2FsZXJ0LWJhcicpLnRleHQoJ1lvdSBhcmUgdXNpbmcgdGhlIGRlZmF1bHQgYWRtaW5pc3RyYXRpb24gcHJvZmlsZSB3aGljaCBpcyBoaWdobHkgaW5zZWN1cmUsIHBsZWFzZSBjaGFuZ2UgdGhlIHBhc3N3b3JkLicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0ZW5lciBjYWxsZWQgd2hlbiB0aGUgdXNlciBkaXNjb25uZWN0ZWQgdm9sdW50YXJpbHkuXG5cdCAqL1xuXHRfb25EaXNjb25uZWN0aW9uKGV2dFBhcmFtcylcblx0e1xuXHRcdC8vIFJlbW92ZSBhbnkgcG9wdXAgb3IgYWxlcnRcblx0XHR0aGlzLnJlbW92ZURpYWxvZygpO1xuXG5cdFx0Ly8gU3dpdGNoIGJhY2sgdG8gbG9naW4gdmlld1xuXHRcdHRoaXMuX2dvVG9Mb2dpblZpZXcoKTtcblxuXHRcdC8vIEhpZGUgbmF2aWdhdGlvbiBpZiBvcGVuXG5cdFx0dGhpcy5fdG9nZ2xlTmF2KGZhbHNlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBMaXN0ZW5lciBjYWxsZWQgd2hlbiBhbiBlcnJvciBjYXVzZWQgYSBkaXNjb25uZWN0aW9uLlxuXHQgKi9cblx0X29uQ29ubk1hbmFnZXJFcnJvcihldnRQYXJhbXMpXG5cdHtcblx0XHQvLyBSZW1vdmUgYW55IHBvcHVwIG9yIGFsZXJ0XG5cdFx0dGhpcy5yZW1vdmVEaWFsb2coKTtcblxuXHRcdC8vIExvZyBzeXN0ZW0gbWVzc2FnZVxuXHRcdHRoaXMubG9nTWVzc2FnZShldnRQYXJhbXMubWVzc2FnZSwgJ3dhcm4nKTtcblxuXHRcdC8vIFN3aXRjaCBiYWNrIHRvIGxvZ2luIHZpZXdcblx0XHR0aGlzLl9nb1RvTG9naW5WaWV3KCk7XG5cblx0XHQvLyBEaXNwbGF5IGVycm9yIGluIGxvZ2luIHZpZXdcblx0XHQkKCcjbG9naW4tZXJyb3InKS50ZXh0KGV2dFBhcmFtcy5tZXNzYWdlKTtcblx0XHQkKCcjbG9naW4tZXJyb3InKS5zaG93KCk7XG5cdH1cblxuXHQvKipcblx0ICogTGlzdGVuZXIgY2FsbGVkIHdoZW4gYW4gdW5leHBlY3RlZCBzZXJ2ZXItc2lkZSBlcnJvciBvY2N1cnMuXG5cdCAqL1xuXHRfb25TZXJ2ZXJFcnJvcihldnRQYXJhbXMpXG5cdHtcblx0XHQvLyBTaG93IGFuIGFsZXJ0XG5cdFx0dGhpcy5zaG93U2ltcGxlQWxlcnQoZXZ0UGFyYW1zLm1lc3NhZ2UpO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gT1RIRVIgRVZFTlQgTElTVEVORVJTXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0X29uTW9kdWxlTG9hZGVkKGV2dFBhcmFtcylcblx0e1xuXHRcdGNvbnN0IG1vZHVsZURhdGEgPSBldnRQYXJhbXMubW9kdWxlRGF0YTtcblxuXHRcdC8vIFNhdmUgbGFzdCBsb2FkZWQgbW9kdWxlIHRvIGNvb2tpZXNcblx0XHRDb29raWVzLnNldCgnbGFzdC1tb2R1bGUnLCB7XG5cdFx0XHRpZDogbW9kdWxlRGF0YS5pZFxuXHRcdH0sIHtleHBpcmVzOiAzMH0pO1xuXG5cdFx0Ly8gRGlzcGxheSBtb2R1bGUgdGl0bGVcblx0XHQkKCcjbW9kdWxlLXRpdGxlJykuc2hvdygpO1xuXHRcdCQoJyNtb2R1bGUtdGl0bGUtbGFiZWwnKS50ZXh0KG1vZHVsZURhdGEubmFtZSk7XG5cblx0XHQvLyBUZWxsIHRoZSBjaGF0IG1hbmFnZXIgd2hpY2ggbW9kdWxlIGhhcyBiZWVuIGxvYWRlZFxuXHRcdHRoaXMuX2NoYXRNYW5hZ2VyLnNldEN1cnJlbnRNb2R1bGUobW9kdWxlRGF0YS5pZCk7XG5cblx0XHQvLyBBc3NpZ24gdGhlIC5zZWxlY3RlZCBjbGFzcyB0byB0aGUgc2VsZWN0ZWQgbmF2aWdhdGlvbiBpdGVtXG5cdFx0JCgnLm5hdi1tYWluJykuZmluZChgW2RhdGEtaWQ9JyR7bW9kdWxlRGF0YS5pZH0nXWApLmFkZENsYXNzKCdzZWxlY3RlZCcpLnNpYmxpbmdzKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0fVxuXG5cdF9vbk1vZHVsZUxvYWRFcnJvcihldnRQYXJhbXMpXG5cdHtcblx0XHQvLyBTaG93IGFuIGFsZXJ0XG5cdFx0dGhpcy5zaG93U2ltcGxlQWxlcnQoZXZ0UGFyYW1zLm1lc3NhZ2UpO1xuXHR9XG5cblx0X29uUmVzdGFydENvbmZpcm1EaWFsb2dDb25maXJtKClcblx0e1xuXHRcdC8vIFNlbmQgcmVzdGFydCBzZXJ2ZXIgcmVxdWVzdFxuXHRcdHRoaXMuX2Nvbm5NYW5hZ2VyLnJlc3RhcnRTZXJ2ZXIoKTtcblx0fVxuXG5cdF9vbkhhbHRDb25maXJtRGlhbG9nQ29uZmlybSgpXG5cdHtcblx0XHQvLyBTZW5kIGhhbHQgc2VydmVyIHJlcXVlc3Rcblx0XHR0aGlzLl9jb25uTWFuYWdlci5oYWx0U2VydmVyKCk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBQVUJMSUMgTUVUSE9EU1xuXHQvLyBUaGlzIG1lbWJlcnMgYXJlIHVzZWQgYnkgdGhlIHN1Yi1tYW5hZ2VycyAoaS5lLiBDb25uZWN0aW9uTWFuYWdlcilcblx0Ly8gb3IgdGhlIG1vZHVsZXMgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGlzIHNoZWxsIGNvbnRyb2xsZXIuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0Z2V0IHNtYXJ0Rm94KClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jb25uTWFuYWdlci5zbWFydEZveDtcblx0fVxuXG5cdGdldCBpbnRWZXJzaW9uKClcblx0e1xuXHRcdHZhciB2ZXJzaW9uID0gdGhpcy5WRVJTSU9OX01BSk9SO1xuXHRcdHZlcnNpb24gKz0gKHRoaXMuVkVSU0lPTl9NSU5PUiA8IDEwID8gJzAnIDogJycpICsgdGhpcy5WRVJTSU9OX01JTk9SO1xuXHRcdHZlcnNpb24gKz0gKHRoaXMuVkVSU0lPTl9TVUIgPCAxMCA/ICcwJyA6ICcnKSArIHRoaXMuVkVSU0lPTl9TVUI7XG5cblx0XHRyZXR1cm4gTnVtYmVyKHZlcnNpb24pO1xuXHR9XG5cblx0Z2V0IHN0cmluZ1ZlcnNpb24oKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuVkVSU0lPTl9NQUpPUiArICcuJyArIHRoaXMuVkVSU0lPTl9NSU5PUiArICcuJyArIHRoaXMuVkVSU0lPTl9TVUI7XG5cdH1cblxuXHRsb2dNZXNzYWdlKG1lc3NhZ2UsIHR5cGUgPSAnbG9nJylcblx0e1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnaW5mbyc6XG5cdFx0XHRcdGNvbnNvbGUuaW5mbygnWyBBRE1JTlRPT0wgfCBJTkZPIF0gJyArIG1lc3NhZ2UpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3dhcm4nOlxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1sgQURNSU5UT09MIHwgV0FSTiBdICcgKyBtZXNzYWdlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ1sgQURNSU5UT09MIHwgRVJST1IgXSAnICsgbWVzc2FnZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y29uc29sZS5sb2coJ1sgQURNSU5UT09MIHwgSU5GTyBdICcgKyBtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHRyZW1vdmVEaWFsb2coKVxuXHR7XG5cdFx0Ly8gSGlkZSBhbnkgc2hvd2luZyBtb2RhbFxuXHRcdCQoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG5cblx0XHQvLyBIaWRlIGFueSBzaG93aW5nIHRvYXN0XG5cdFx0JCgnLnRvYXN0JykudG9hc3QoJ2hpZGUnKTtcblxuXHRcdC8vIFJlbW92ZSBzaGVsbCdzIGRpYWxvZ1xuXHRcdGlmICh0aGlzLl9kaWFsb2cgIT0gbnVsbClcblx0XHR7XG5cdFx0XHR0aGlzLl9kaWFsb2cuY2xvc2UoKTtcblx0XHRcdHRoaXMuX2RpYWxvZy5kZXN0cm95KCk7XG5cdFx0XHR0aGlzLl9kaWFsb2cgPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIEVuYWJsZSB0aGUgZm9sbG93aW5nIGlmIG90aGVyIEtlbmRvIGRpYWxvZ3MgYXJlIHVzZWQgaW4gbW9kdWxlc1xuXHRcdC8qXG5cdFx0Ly8gUmVtb3ZlIGFueSBvdGhlciBkaWFsb2cgKGlubmVyIHRvIG1vZHVsZSlcblx0XHQkKCcuay1kaWFsb2ctY29udGVudCcpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdC8vIENvbmZpcm0gZGlhbG9nXG5cdFx0XHRsZXQgY29uZmlybSA9ICQodGhpcykuZGF0YSgna2VuZG9Db25maXJtJyk7XG5cdFx0XHRpZiAoY29uZmlybSlcblx0XHRcdHtcblx0XHRcdFx0Y29uZmlybS5jbG9zZSgpO1xuXHRcdFx0XHRjb25maXJtLmRlc3Ryb3koKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQqL1xuXHR9XG5cblx0LyoqXG5cdCAqIFNob3cgc2ltcGxlIGFsZXJ0LlxuXHQgKi9cblx0c2hvd1NpbXBsZUFsZXJ0KHRleHQsIGlzV2FybmluZyA9IHRydWUpXG5cdHtcblx0XHQvLyBDcmVhdGUgYW5kIHNob3cgZGlhbG9nXG5cdFx0dGhpcy5fZGlhbG9nID0ga2VuZG8uYWxlcnQodGV4dCk7XG5cdFx0dGhpcy5fZGlhbG9nLnRpdGxlKGlzV2FybmluZyA/ICdXYXJuaW5nJyA6ICdJbmZvcm1hdGlvbicpO1xuXG5cdFx0Ly8gU2V0IGN1c3RvbSBjbGFzcyBmb3Igc3R5bGluZ1xuXHRcdHRoaXMuX2RpYWxvZy53cmFwcGVyLmFkZENsYXNzKGlzV2FybmluZyA/ICdpcy13YXJuaW5nJyA6ICdpcy1pbmZvJyk7XG5cblx0XHQvLyBMb2cgbWVzc2FnZSB0b29cblx0XHQvLyAod2UgZW5jYXBzdWxlIHRoZSB0ZXh0IGluIGEgc3BhbiBhbmQgZXh0cmFjdCB0aGUgdGV4dCBhZ2FpbiB0byByZW1vdmUgaW5uZXIgaHRtbCB0YWdzKVxuXHRcdGxldCBodG1sID0gJCgnPHNwYW4+JyArIHRleHQgKyAnPC9zcGFuPicpO1xuXHRcdHRoaXMubG9nTWVzc2FnZShodG1sLnRleHQoKSwgaXNXYXJuaW5nID8gJ3dhcm4nIDogJ2luZm8nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTaG93IGNvbmZpcm0gYWxlcnQuXG5cdCAqL1xuXHRzaG93Q29uZmlybVdhcm5pbmcodGV4dCwgY29uZmlybUhhbmRsZXIpXG5cdHtcblx0XHQvLyBDcmVhdGUgZGlhbG9nXG5cdFx0dGhpcy5fZGlhbG9nID0gJCgnPGRpdj48L2Rpdj4nKS5rZW5kb0NvbmZpcm0oe1xuXHQgICAgICB0aXRsZTogJ1dhcm5pbmcnLFxuXHQgICAgICBjb250ZW50OiB0ZXh0LFxuXHRcdCAgYWN0aW9uczogW1xuXHQgICAgICAgICAge1xuXHQgICAgICAgICAgICAgIHRleHQ6ICdPSycsXG5cdCAgICAgICAgICAgICAgcHJpbWFyeTogdHJ1ZSxcblx0ICAgICAgICAgICAgICBhY3Rpb246IGNvbmZpcm1IYW5kbGVyXG5cdCAgICAgICAgICB9LFxuXHQgICAgICBdXG5cdCAgXHR9KS5kYXRhKCdrZW5kb0NvbmZpcm0nKTtcblxuXHRcdC8vIFNldCBjdXN0b20gY2xhc3MgZm9yIHN0eWxpbmdcblx0XHR0aGlzLl9kaWFsb2cud3JhcHBlci5hZGRDbGFzcygnaXMtd2FybmluZycpO1xuXG5cdFx0Ly8gU2hvdyBkaWFsb2dcblx0XHR0aGlzLl9kaWFsb2cub3BlbigpO1xuXHR9XG5cblx0c2hvd05vdGlmaWNhdGlvbih0aXRsZSwgbWVzc2FnZSlcblx0e1xuXHRcdC8vIERpc3BsYXkgbm90aWZpY2F0aW9uXG5cdFx0bGV0IHRvYXN0ID0gJChgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9hc3RcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWF0b21pYz1cInRydWVcIiBkYXRhLWRlbGF5PVwiNDAwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtaGVhZGVyXCI+XG5cdFx0XHRcdFx0PHN0cm9uZyBjbGFzcz1cIm1yLWF1dG9cIj4ke3RpdGxlfTwvc3Ryb25nPlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWwtMiBtYi0xIGNsb3NlXCIgZGF0YS1kaXNtaXNzPVwidG9hc3RcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidG9hc3QtYm9keVwiPiR7bWVzc2FnZX08L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGApO1xuXG5cdFx0JCgnLnRvYXN0LWNvbnRhaW5lcicpLmFwcGVuZCh0b2FzdCk7XG5cdFx0dG9hc3QudG9hc3QoJ3Nob3cnKTtcblxuXHRcdC8vIExvZyBtZXNzYWdlIHRvb1xuXHRcdC8vICh3ZSBlbmNhcHN1bGUgdGhlIHRleHQgaW4gYSBzcGFuIGFuZCBleHRyYWN0IHRoZSB0ZXh0IGFnYWluIHRvIHJlbW92ZSBpbm5lciBodG1sIHRhZ3MpXG5cdFx0bGV0IGh0bWwgPSAkKCc8c3Bhbj4nICsgdGl0bGUgKyAnIC0gJyArIG1lc3NhZ2UgKyAnPC9zcGFuPicpO1xuXHRcdHRoaXMubG9nTWVzc2FnZShodG1sLnRleHQoKSwgJ2luZm8nKTtcblx0fVxuXG5cdHVwZGF0ZU1vZHVsZVRpdGxlKHRpdGxlLCBhc1N1ZmZpeCA9IGZhbHNlKVxuXHR7XG5cdFx0JCgnI21vZHVsZS10aXRsZS1sYWJlbCcpLnRleHQoIChhc1N1ZmZpeCA/ICQoJyNtb2R1bGUtdGl0bGUtbGFiZWwnKS50ZXh0KCkgOiAnJykgKyB0aXRsZSApO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUFJJVkFURSBNRVRIT0RTXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0X2luaXRWaWV3cygpXG5cdHtcblx0XHQvLyBJbml0aWFsaXplIGxvZ2luIHZpZXdcblx0XHR0aGlzLl9pbml0TG9naW5WaWV3KCk7XG5cblx0XHQvLyBJbml0aWFsaXplIG1vZHVsZSB2aWV3XG5cdFx0dGhpcy5faW5pdE1vZHVsZVZpZXcoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTd2l0Y2ggdmlldyBpbiB0b3AgdmlldyBzdGFjay5cblx0ICogQHBhcmFtICB7c3RyaW5nfSB2aWV3SWQgSWRlbnRpZmllciBvZiB0aGUgdmlld3N0YXNrIGNoaWxkIHRvIGRpc3BsYXkuXG5cdCAqL1xuXHRfc3dpdGNoU2hlbGxWaWV3KHZpZXdJZClcblx0e1xuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGVsbCcpLnNlbGVjdGVkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdJZCk7XG5cblx0XHQvLyAoalF1ZXJ5IGFsdGVybmF0aXZlKVxuXHRcdC8vICQoJyNzaGVsbCcpWzBdLnNlbGVjdGVkRWxlbWVudCA9ICQoJyNzaGVsbCcpLmNoaWxkcmVuKCcjJyArIHZpZXdJZClbMF07XG5cdH1cblxuXHQvKipcblx0ICogRW5hYmxlL2Rpc2FibGUgbG9naW4gZm9ybS5cblx0ICovXG5cdF9lbmFibGVMb2dpbkZvcm0oZW5hYmxlKVxuXHR7XG5cdFx0Ly8gRW5hYmxlL2Rpc2FibGUgZmllbGRzZXQgKHdvcmtzIGZvciBhbGwgbm9uLWtlbmRvIGlucHV0cylcblx0XHQkKCcjbG9naW5Gb3JtIGZpZWxkc2V0JykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlKTtcblxuXHRcdC8vIEVuYWJsZS9kaXNhYmxlIG51bWVyaWMgdGV4dGJveFxuXHRcdCQoJyNsb2dpblBvcnQnKS5kYXRhKCdrZW5kb051bWVyaWNUZXh0Qm94JykuZW5hYmxlKGVuYWJsZSk7XG5cdH1cblxuXHRfdG9nZ2xlTmF2KGJvb2wpXG5cdHtcblx0XHQkKCcubmF2LWNvbnRhaW5lciwgLm5hdi1vdmVybGF5JykudG9nZ2xlQ2xhc3MoJ2lzLXZpc2libGUnLCBib29sKTtcblx0XHQkKCcubW9kdWxlLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdzY2FsZS1kb3duJywgYm9vbCk7XG5cdH1cblxuXHRfZ2V0VXJsUGFyYW1ldGVyKHBhcmFtKVxuXHR7XG5cdFx0bGV0IHBhZ2VVUkwgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTtcblx0XHRsZXQgdXJsVmFyaWFibGVzID0gcGFnZVVSTC5zcGxpdCgnJicpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB1cmxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBwYXJhbU5hbWUgPSB1cmxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdGlmIChwYXJhbU5hbWVbMF0gPT0gcGFyYW0gJiYgcGFyYW1OYW1lWzFdICE9ICcnKVxuXHRcdFx0XHRyZXR1cm4gcGFyYW1OYW1lWzFdO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0X2dvVG9Mb2dpblZpZXcoKVxuXHR7XG5cdFx0Ly8gQ2xlYXIgcGFzc3dvcmQgZmllbGRcblx0XHQkKCcjbG9naW5QYXNzd29yZCcpLnZhbCgnJyk7XG5cblx0XHQvLyBTd2l0Y2ggdG8gbG9naW4gdmlld1xuXHRcdHRoaXMuX3N3aXRjaFNoZWxsVmlldygnbG9naW4tdmlldycpO1xuXG5cdFx0Ly8gVW5sb2FkIGN1cnJlbnQgbW9kdWxlXG5cdFx0dGhpcy5fbW9kTWFuYWdlci51bmxvYWRNb2R1bGUoKTtcblxuXHRcdC8vIEVuYWJsZSBsb2dpbiBmb3JtXG5cdFx0dGhpcy5fZW5hYmxlTG9naW5Gb3JtKHRydWUpO1xuXG5cdFx0Ly8gUmVtb3ZlIHVwdGltZSB1cGRhdGVyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl91cHRpbWVUaW1lcik7XG5cdH1cblxuXHRfZ29Ub01vZHVsZXNWaWV3KHNlcnZlclZlcnNpb24sIHNlcnZlck5hbWUpXG5cdHtcblx0XHQvLyBIaWRlIG1vZHVsZSB0aXRsZVxuXHRcdCQoJyNtb2R1bGUtdGl0bGUnKS5oaWRlKCk7XG5cdFx0JCgnI21vZHVsZS10aXRsZS1sYWJlbCcpLnRleHQoJycpO1xuXG5cdFx0Ly8gSGlkZSBhbGVydCBiYXJcblx0XHQkKCcjYWxlcnQtYmFyJykuaGlkZSgpO1xuXG5cdFx0Ly8gU2hvdyBzZXJ2ZXIgdmVyc2lvbiBpbiB0aGUgaGVhZGVyXG5cdFx0JCgnI3Nmcy12ZXJzaW9uLXZhbHVlJykudGV4dChzZXJ2ZXJWZXJzaW9uKTtcblxuXHRcdC8vIFNldCBzZXJ2ZXIgbmFtZSwgSVAgYW5kIHBvcnQgaW4gbW9kdWxlJ3MgdGl0bGUgYmFyXG5cdFx0bGV0IGhvc3QgPSBgJHt0aGlzLl9jb25uTWFuYWdlci5zbWFydEZveC5jb25maWcuaG9zdH06JHt0aGlzLl9jb25uTWFuYWdlci5zbWFydEZveC5jb25maWcucG9ydH1gICsgKHNlcnZlck5hbWUgIT0gJycgPyBgIFske3NlcnZlck5hbWV9XWAgOiAnJyk7XG5cdFx0JCgnI2hvc3QtbGFiZWwnKS50ZXh0KGhvc3QpO1xuXG5cdFx0Ly8gU2F2ZSBjdXJyZW50IFNGUyB2ZXJzaW9uXG5cdFx0dGhpcy5fY3VycmVudFNmc1ZlcnNpb24gPSBzZXJ2ZXJWZXJzaW9uO1xuXG5cdFx0Ly8gQ2hlY2sgbmV3IFNGUyB2ZXJzaW9uIGF2YWlsYWJpbGl0eVxuXHRcdHRoaXMuX2NoZWNrQXZhaWxhYmxlU2ZzVmVyc2lvbigpO1xuXG5cdFx0Ly8gU3RhcnQgdXB0aW1lIHVwZGF0ZXJcblx0XHR0aGlzLl91cHRpbWVUaW1lciA9IHNldEludGVydmFsKCQucHJveHkodGhpcy5fdXBkYXRlVXB0aW1lLCB0aGlzKSwgMTAwMCk7XG5cblx0XHQvLyBTd2l0Y2ggdG8gbW9kdWxlcyB2aWV3XG5cdFx0dGhpcy5fc3dpdGNoU2hlbGxWaWV3KCdtb2R1bGUtdmlldycpO1xuXHR9XG5cblx0X3Nob3dIYWx0UmVzdGFydEJ1dHRvbnMoc2hvdylcblx0e1xuXHRcdGlmIChzaG93KVxuXHRcdHtcblx0XHRcdCQoJyNyZXN0YXJ0LWJ1dHRvbicpLnNob3coKTtcblx0XHRcdCQoJyNoYWx0LWJ1dHRvbicpLnNob3coKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdCQoJyNyZXN0YXJ0LWJ1dHRvbicpLmhpZGUoKTtcblx0XHRcdCQoJyNoYWx0LWJ1dHRvbicpLmhpZGUoKTtcblx0XHR9XG5cdH1cblxuXHRfY2hlY2tBdmFpbGFibGVTZnNWZXJzaW9uKClcblx0e1xuXHRcdC8vIFJlbW92ZSBjbGFzcyB0byBoaWRlIHVwZGF0ZSBidXR0b24gc3R5bGUgYW5kIG5vdGlmaWNhdGlvbiBpY29uXG5cdFx0JCgnI3Nmcy12ZXJzaW9uJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG5cdFx0Ly8gUmVtb3ZlIHVwZGF0ZSBidXR0b24gY2xpY2sgbGlzdGVuZXJzXG5cdFx0JCgnI3Nmcy12ZXJzaW9uLWJ1dHRvbicpLm9mZignY2xpY2snKTtcblxuXHRcdC8vIExvYWQgZmlsZSBjb250YWluaW5nIGxhdGVzdCBTRlMgdmVyc2lvbiBpbmZvXG5cdFx0JC5hamF4KHtcblx0XHRcdHR5cGU6ICdHRVQnLFxuXHRcdFx0dXJsOiAnaHR0cHM6Ly93d3cuc21hcnRmb3hzZXJ2ZXIuY29tL2Rvd25sb2Fkcy9zZnMyeC9sYXRlc3RWZXJzaW9uLnR4dCcsXG4gICAgICAgIFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdHN1Y2Nlc3M6ICQucHJveHkodGhpcy5fb25MYXRlc3RTZnNWZXJzaW9uSW5mb0xvYWRlZCwgdGhpcyksXG5cdFx0XHRlcnJvcjogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5sb2dNZXNzYWdlKCdVbmFibGUgdG8gY2hlY2sgbmV3IHNlcnZlciB2ZXJzaW9uIGF2YWlsYWJpbGl0eSBvbiBTbWFydEZveFNlcnZlciB3ZWJzaXRlJywgJ3dhcm4nKTtcblx0XHRcdH0sIHRoaXMpXG5cdFx0fSk7XG5cdH1cblxuXHRfb25MYXRlc3RTZnNWZXJzaW9uSW5mb0xvYWRlZChkYXRhKVxuXHR7XG5cdFx0Ly8gUGFyc2UgcmV0dXJuZWQgZGF0YVxuXHRcdGNvbnN0IHYgPSBwYXJzZShkYXRhKTtcblxuXHRcdGlmICh2LnZlcnNpb24gIT0gbnVsbCAmJiB0aGlzLl9pc1Nmc1ZlcnNpb25OZXdlcih2LnZlcnNpb24sIHRoaXMuX2N1cnJlbnRTZnNWZXJzaW9uKSlcblx0XHR7XG5cdFx0XHR0aGlzLnRlbXBmbGFnID0gdHJ1ZTtcblx0XHRcdHRoaXMubG9nTWVzc2FnZSgnQW4gdXBkYXRlZCB2ZXJzaW9uIG9mIFNtYXJ0Rm94U2VydmVyIDJYIGlzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQnLCAnaW5mbycpO1xuXG5cdFx0XHQvLyBTZXQgdXBncmFkZSBkaWFsb2cgZGV0YWlsc1xuXHRcdFx0dGhpcy5fc2ZzVXBkYXRlRGV0YWlscyA9IHY7XG5cblx0XHRcdC8vIEFkZCBsaXN0ZW5lciB0byBzaG93IFNGUyB2ZXJzaW9uIHVwZGF0ZSBtb2RhbFxuXHRcdFx0JCgnI3Nmcy12ZXJzaW9uLWJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKCcjc2VydmVyVXBkYXRlTW9kYWwnKS5tb2RhbCh7XG5cdFx0XHRcdFx0YmFja2Ryb3A6ICdzdGF0aWMnLFxuXHRcdFx0XHRcdGtleWJvYXJkOiBmYWxzZSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gU2V0IGNsYXNzIHRvIHNob3cgdXBkYXRlIGJ1dHRvbiBzdHlsZSBhbmQgbm90aWZpY2F0aW9uIGljb25cblx0XHRcdCQoJyNzZnMtdmVyc2lvbicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuXHRcdFx0Ly8gVXBkYXRlIG1vZGFsIGNvbnRlbnRcblx0XHRcdGNvbnN0IG5ld1ZlciA9IHRoaXMuX3Nmc1VwZGF0ZURldGFpbHM7XG5cdFx0XHRjb25zdCBjdXJyVmVyID0gdGhpcy5fY3VycmVudFNmc1ZlcnNpb247XG5cblx0XHRcdGxldCBtb2RhbCA9ICQoJyNzZXJ2ZXJVcGRhdGVNb2RhbCcpO1xuXG5cdFx0XHQvLyBVcGRhdGUgbW9kYWwgY29udGVudFxuXHRcdFx0JCgnI25ld1ZlcnNMYicsIG1vZGFsKS50ZXh0KG5ld1Zlci52ZXJzaW9uKTtcblx0XHRcdCQoJyN1cGRUeXBlTGInLCBtb2RhbCkudGV4dChuZXdWZXIuaXNQYXRjaCA/ICdwYXRjaCcgOiAnZnVsbCBpbnN0YWxsZXInKTtcblx0XHRcdCQoJyNyZXFWZXJzTGInLCBtb2RhbCkudGV4dChuZXdWZXIuaXNQYXRjaCA/ICcgKHJlcXVpcmVzIHZlcnNpb24gJyArIG5ld1Zlci5yZXF1aXJlcyArICcgb3IgbGF0ZXIpJyA6ICcnKTtcblx0XHRcdCQoJyNjdXJyVmVyc0xiJywgbW9kYWwpLnRleHQoY3VyclZlcik7XG5cdFx0XHQkKCcjc2VydmVyVXBkYXRlTW9kYWxMaW5rJywgbW9kYWwpLmF0dHIoJ2hyZWYnLCBuZXdWZXIudXJsKTtcblx0XHR9XG5cdH1cblxuXHRfaXNTZnNWZXJzaW9uTmV3ZXIoYXZhaWxhYmxlVmVyLCBjdXJyZW50VmVyKVxuXHR7XG5cdFx0Y29uc3QgTUFKID0gMDtcblx0XHRjb25zdCBNSU4gPSAxO1xuXHRcdGNvbnN0IFNVQiA9IDI7XG5cblx0XHRjb25zdCBhdmFpbGFibGUgPSBhdmFpbGFibGVWZXIuc3BsaXQoJy4nKTtcblx0XHRjb25zdCBjdXJyZW50ID0gY3VycmVudFZlci5zcGxpdCgnLicpO1xuXG5cdFx0Ly8gQ2hlY2sgbWFqb3IgdmVyc2lvblxuXHRcdGlmIChhdmFpbGFibGVbTUFKXSA+IGN1cnJlbnRbTUFKXSlcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdGVsc2UgaWYgKGF2YWlsYWJsZVtNQUpdID09IGN1cnJlbnRbTUFKXSlcblx0XHR7XG5cdFx0XHQvLyBDaGVjayBtaW5vciB2ZXJzaW9uXG5cdFx0XHRpZiAoYXZhaWxhYmxlW01JTl0gPiBjdXJyZW50W01JTl0pXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAoYXZhaWxhYmxlW01JTl0gPT0gY3VycmVudFtNSU5dKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDaGVjayBzdWIgdmVyc2lvblxuXHRcdFx0XHRpZiAoYXZhaWxhYmxlW1NVQl0gPiBjdXJyZW50W1NVQl0pXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0X3VwZGF0ZVVwdGltZSgpXG5cdHtcblx0XHRsZXQgZGF5cyA9IHRoaXMuX3VwdGltZVswXTtcblx0XHRsZXQgaG91cnMgPSB0aGlzLl91cHRpbWVbMV07XG5cdFx0bGV0IG1pbnV0ZXMgPSB0aGlzLl91cHRpbWVbMl07XG5cdFx0bGV0IHNlY29uZHMgPSB0aGlzLl91cHRpbWVbM10gKyAxO1xuXG5cdFx0aWYgKHNlY29uZHMgPiA1OSlcblx0XHR7XG5cdFx0XHRzZWNvbmRzID0gMDtcblx0XHRcdG1pbnV0ZXMgKz0gMTtcblxuXHRcdFx0aWYgKG1pbnV0ZXMgPiA1OSlcblx0XHRcdHtcblx0XHRcdFx0bWludXRlcyA9IDA7XG5cdFx0XHRcdGhvdXJzICs9IDE7XG5cblx0XHRcdFx0aWYgKGhvdXJzID4gMjMpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRob3VycyA9IDA7XG5cdFx0XHRcdFx0ZGF5cyArPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fdXB0aW1lWzNdID0gc2Vjb25kcztcblx0XHR0aGlzLl91cHRpbWVbMl0gPSBtaW51dGVzO1xuXHRcdHRoaXMuX3VwdGltZVsxXSA9IGhvdXJzO1xuXHRcdHRoaXMuX3VwdGltZVswXSA9IGRheXM7XG5cblx0XHQvLyBTZW5kIHVwZGF0ZWQgdXB0aW1lIHRvIGN1cnJlbnQgbW9kdWxlIChpZiBsb2FkZWQpXG5cdFx0bGV0IG1vZHVsZSA9IHRoaXMuX21vZE1hbmFnZXIuY3VycmVudE1vZHVsZTtcblx0XHRpZiAobW9kdWxlICE9IG51bGwpXG5cdFx0XHRtb2R1bGUub25VcHRpbWVVcGRhdGVkKHRoaXMuX3VwdGltZSk7XG5cdH1cbn1cbiIsImNvbnN0IGF0Q29tbWVudCA9IChzcmMsIG9mZnNldCkgPT4ge1xuICBjb25zdCBjaCA9IHNyY1tvZmZzZXRdXG4gIHJldHVybiBjaCA9PT0gJyMnIHx8IGNoID09PSAnISdcbn1cblxuY29uc3QgYXRMaW5lRW5kID0gKHNyYywgb2Zmc2V0KSA9PiB7XG4gIGNvbnN0IGNoID0gc3JjW29mZnNldF1cbiAgcmV0dXJuICFjaCB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXG4nXG59XG5cbmNvbnN0IGVuZE9mSW5kZW50ID0gKHNyYywgb2Zmc2V0KSA9PiB7XG4gIGxldCBjaCA9IHNyY1tvZmZzZXRdXG4gIHdoaWxlIChjaCA9PT0gJ1xcdCcgfHwgY2ggPT09ICdcXGYnIHx8IGNoID09PSAnICcpIHtcbiAgICBvZmZzZXQgKz0gMVxuICAgIGNoID0gc3JjW29mZnNldF1cbiAgfVxuICByZXR1cm4gb2Zmc2V0XG59XG5cbmNvbnN0IGVuZE9mQ29tbWVudCA9IChzcmMsIG9mZnNldCkgPT4ge1xuICBsZXQgY2ggPSBzcmNbb2Zmc2V0XVxuICB3aGlsZSAoY2ggJiYgY2ggIT09ICdcXHInICYmIGNoICE9PSAnXFxuJykge1xuICAgIG9mZnNldCArPSAxXG4gICAgY2ggPSBzcmNbb2Zmc2V0XVxuICB9XG4gIHJldHVybiBvZmZzZXRcbn1cblxuY29uc3QgZW5kT2ZLZXkgPSAoc3JjLCBvZmZzZXQpID0+IHtcbiAgbGV0IGNoID0gc3JjW29mZnNldF1cbiAgd2hpbGUgKGNoICYmIGNoICE9PSAnXFxyJyAmJiBjaCAhPT0gJ1xcbicgJiYgY2ggIT09ICdcXHQnICYmIGNoICE9PSAnXFxmJyAmJiBjaCAhPT0gJyAnICYmIGNoICE9PSAnOicgJiYgY2ggIT09ICc9Jykge1xuICAgIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICBpZiAoc3JjW29mZnNldCArIDFdID09PSAnXFxuJykge1xuICAgICAgICBvZmZzZXQgPSBlbmRPZkluZGVudChzcmMsIG9mZnNldCArIDIpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvZmZzZXQgKz0gMlxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXQgKz0gMVxuICAgIH1cbiAgICBjaCA9IHNyY1tvZmZzZXRdXG4gIH1cbiAgcmV0dXJuIG9mZnNldFxufVxuXG5jb25zdCBlbmRPZlNlcGFyYXRvciA9IChzcmMsIG9mZnNldCkgPT4ge1xuICBsZXQgY2ggPSBzcmNbb2Zmc2V0XVxuICBsZXQgaGFzRXFTaWduID0gZmFsc2VcbiAgbG9vcDogd2hpbGUgKGNoID09PSAnXFx0JyB8fCBjaCA9PT0gJ1xcZicgfHwgY2ggPT09ICcgJyB8fCBjaCA9PT0gJz0nIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICdcXFxcJykge1xuICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgIGNhc2UgJ1xcXFwnOlxuICAgICAgICBpZiAoc3JjW29mZnNldCArIDFdICE9PSAnXFxuJykgYnJlYWsgbG9vcFxuICAgICAgICBvZmZzZXQgPSBlbmRPZkluZGVudChzcmMsIG9mZnNldCArIDIpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICc9JzpcbiAgICAgIGNhc2UgJzonOlxuICAgICAgICBpZiAoaGFzRXFTaWduKSBicmVhayBsb29wXG4gICAgICAgIGhhc0VxU2lnbiA9IHRydWVcbiAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG9mZnNldCArPSAxXG4gICAgfVxuICAgIGNoID0gc3JjW29mZnNldF1cbiAgfVxuICByZXR1cm4gb2Zmc2V0XG59XG5cbmNvbnN0IGVuZE9mVmFsdWUgPSAoc3JjLCBvZmZzZXQpID0+IHtcbiAgbGV0IGNoID0gc3JjW29mZnNldF1cbiAgd2hpbGUgKGNoICYmIGNoICE9PSAnXFxyJyAmJiBjaCAhPT0gJ1xcbicpIHtcbiAgICBvZmZzZXQgKz0gY2ggPT09ICdcXFxcJyA/IDIgOiAxXG4gICAgY2ggPSBzcmNbb2Zmc2V0XVxuICB9XG4gIHJldHVybiBvZmZzZXRcbn1cblxuY29uc3QgdW5lc2NhcGUgPSAoc3RyKSA9PiBzdHIucmVwbGFjZSgvXFxcXCh1WzAtOWEtZkEtRl17NH18XFxyP1xcblsgXFx0XFxmXSp8Lik/L2csIChtYXRjaCwgY29kZSkgPT4ge1xuICBzd2l0Y2ggKGNvZGUgJiYgY29kZVswXSkge1xuICAgIGNhc2UgJ2YnOiByZXR1cm4gJ1xcZidcbiAgICBjYXNlICduJzogcmV0dXJuICdcXG4nXG4gICAgY2FzZSAncic6IHJldHVybiAnXFxyJ1xuICAgIGNhc2UgJ3QnOiByZXR1cm4gJ1xcdCdcbiAgICBjYXNlICd1JzpcbiAgICAgIGNvbnN0IGMgPSBwYXJzZUludChjb2RlLnN1YnN0cigxKSwgMTYpXG4gICAgICByZXR1cm4gaXNOYU4oYykgPyBjb2RlIDogU3RyaW5nLmZyb21DaGFyQ29kZShjKVxuICAgIGNhc2UgJ1xccic6XG4gICAgY2FzZSAnXFxuJzpcbiAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgIHJldHVybiAnJ1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY29kZVxuICB9XG59KVxuXG4vKipcbiAqIFNwbGl0cyB0aGUgaW5wdXQgc3RyaW5nIGludG8gYW4gYXJyYXkgb2YgbG9naWNhbCBsaW5lc1xuICpcbiAqIEtleS12YWx1ZSBwYWlycyBhcmUgW2tleSwgdmFsdWVdIGFycmF5cyB3aXRoIHN0cmluZyB2YWx1ZXMuIEVzY2FwZSBzZXF1ZW5jZXNcbiAqIGluIGtleXMgYW5kIHZhbHVlcyBhcmUgcGFyc2VkLiBFbXB0eSBsaW5lcyBhcmUgaW5jbHVkZWQgYXMgZW1wdHkgc3RyaW5ncywgYW5kXG4gKiBjb21tZW50cyBhcyBzdHJpbmdzIHRoYXQgc3RhcnQgd2l0aCAnIycgb3IgJyEgY2hhcmFjdGVycy4gTGVhZGluZyB3aGl0ZXNwYWNlXG4gKiBpcyBub3QgaW5jbHVkZWQuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2UvOS9kb2NzL2FwaS9qYXZhL3V0aWwvUHJvcGVydGllcy5odG1sI2xvYWQoamF2YS5pby5SZWFkZXIpXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNyY1xuICogQHJldHVybnMgQXJyYXk8c3RyaW5nIHwgc3RyaW5nW11dPlxuICovXG5mdW5jdGlvbiBwYXJzZUxpbmVzIChzcmMpIHtcbiAgY29uc3QgbGluZXMgPSBbXVxuICBmb3IgKGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKHNyY1tpXSA9PT0gJ1xcbicgJiYgc3JjW2kgLSAxXSA9PT0gJ1xccicpIGkgKz0gMVxuICAgIGlmICghc3JjW2ldKSBicmVha1xuICAgIGNvbnN0IGtleVN0YXJ0ID0gZW5kT2ZJbmRlbnQoc3JjLCBpKVxuICAgIGlmIChhdExpbmVFbmQoc3JjLCBrZXlTdGFydCkpIHtcbiAgICAgIGxpbmVzLnB1c2goJycpXG4gICAgICBpID0ga2V5U3RhcnRcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmIChhdENvbW1lbnQoc3JjLCBrZXlTdGFydCkpIHtcbiAgICAgIGNvbnN0IGNvbW1lbnRFbmQgPSBlbmRPZkNvbW1lbnQoc3JjLCBrZXlTdGFydClcbiAgICAgIGxpbmVzLnB1c2goc3JjLnNsaWNlKGtleVN0YXJ0LCBjb21tZW50RW5kKSlcbiAgICAgIGkgPSBjb21tZW50RW5kXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCBrZXlFbmQgPSBlbmRPZktleShzcmMsIGtleVN0YXJ0KVxuICAgIGNvbnN0IGtleSA9IHVuZXNjYXBlKHNyYy5zbGljZShrZXlTdGFydCwga2V5RW5kKSlcbiAgICBjb25zdCB2YWx1ZVN0YXJ0ID0gZW5kT2ZTZXBhcmF0b3Ioc3JjLCBrZXlFbmQpXG4gICAgaWYgKGF0TGluZUVuZChzcmMsIHZhbHVlU3RhcnQpKSB7XG4gICAgICBsaW5lcy5wdXNoKFtrZXksICcnXSlcbiAgICAgIGkgPSB2YWx1ZVN0YXJ0XG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBjb25zdCB2YWx1ZUVuZCA9IGVuZE9mVmFsdWUoc3JjLCB2YWx1ZVN0YXJ0KVxuICAgIGNvbnN0IHZhbHVlID0gdW5lc2NhcGUoc3JjLnNsaWNlKHZhbHVlU3RhcnQsIHZhbHVlRW5kKSlcbiAgICBsaW5lcy5wdXNoKFtrZXksIHZhbHVlXSlcbiAgICBpID0gdmFsdWVFbmRcbiAgfVxuICByZXR1cm4gbGluZXNcbn1cblxuLyoqXG4gKiBQYXJzZXMgYW4gaW5wdXQgc3RyaW5nIHJlYWQgZnJvbSBhIC5wcm9wZXJ0aWVzIGZpbGUgaW50byBhIEphdmFTY3JpcHQgT2JqZWN0XG4gKlxuICogSWYgdGhlIHNlY29uZCBgcGF0aGAgcGFyYW1ldGVyIGlzIHRydWUsIGRvdHMgJy4nIGluIGtleXMgd2lsbCByZXN1bHQgaW4gYVxuICogbXVsdGktbGV2ZWwgb2JqZWN0ICh1c2UgYSBzdHJpbmcgdmFsdWUgdG8gY3VzdG9taXNlKS4gSWYgYSBwYXJlbnQgbGV2ZWwgaXNcbiAqIGRpcmVjdGx5IGFzc2lnbmVkIGEgdmFsdWUgd2hpbGUgaXQgYWxzbyBoYXMgYSBjaGlsZCB3aXRoIGFuIGFzc2lnbmVkIHZhbHVlLFxuICogdGhlIHBhcmVudCB2YWx1ZSB3aWxsIGJlIGFzc2lnbmVkIHRvIGl0cyBlbXB0eSBzdHJpbmcgJycga2V5LiBSZXBlYXRlZCBrZXlzXG4gKiB3aWxsIHRha2UgdGhlIGxhc3QgYXNzaWduZWQgdmFsdWUuIEtleSBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCwgYnV0IGlzIGxpa2VseVxuICogdG8gbWF0Y2ggdGhlIG9yZGVyIG9mIHRoZSBpbnB1dCBsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBzdHJpbmd9IFtwYXRoPWZhbHNlXVxuICovXG5mdW5jdGlvbiBwYXJzZSAoc3JjLCBwYXRoKSB7XG4gIGNvbnN0IHBhdGhTZXAgPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoIDogJy4nXG4gIHJldHVybiBwYXJzZUxpbmVzKHNyYykucmVkdWNlKChyZXMsIGxpbmUpID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaW5lKSkge1xuICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gbGluZVxuICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgY29uc3Qga2V5UGF0aCA9IGtleS5zcGxpdChwYXRoU2VwKVxuICAgICAgICBsZXQgcGFyZW50ID0gcmVzXG4gICAgICAgIHdoaWxlIChrZXlQYXRoLmxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgY29uc3QgcCA9IGtleVBhdGguc2hpZnQoKVxuICAgICAgICAgIGlmICghcGFyZW50W3BdKSB7XG4gICAgICAgICAgICBwYXJlbnRbcF0gPSB7fVxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBhcmVudFtwXSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHBhcmVudFtwXSA9IHsgJyc6IHBhcmVudFtwXSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudFtwXVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlYWYgPSBrZXlQYXRoWzBdXG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50W2xlYWZdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHBhcmVudFtsZWFmXVsnJ10gPSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudFtsZWFmXSA9IHZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc1trZXldID0gdmFsdWVcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1xuICB9LCB7fSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IHBhcnNlLCBwYXJzZUxpbmVzIH1cbiIsImV4cG9ydCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLl9saXN0ZW5lcnNCeUV2ZW50ID0ge307XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIG5vdGlmaWNhdGlvbiBvZiBhbiBldmVudC5cblx0ICpcblx0ICogPHA+SWYgeW91IG5vIGxvbmdlciBuZWVkIGFuIGV2ZW50IGxpc3RlbmVyLCByZW1vdmUgaXQgYnkgY2FsbGluZyB0aGUgPGVtPnJlbW92ZUV2ZW50TGlzdGVuZXIoKTwvZW0+IG1ldGhvZCwgb3IgbWVtb3J5IGlzc3VlcyBjb3VsZCBhcmlzZS5cblx0ICogSW4gZmFjdCBldmVudCBsaXN0ZW5lcnMgYXJlIG5vdCBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBtZW1vcnkuPC9wPlxuXHQgKlxuXHQgKiBAcGFyYW1cdHtzdHJpbmd9IGV2dFR5cGVcdFRoZSB0eXBlIG9mIGV2ZW50IHRvIGxpc3RlbiB0by5cblx0ICogQHBhcmFtXHR7ZnVuY3Rpb259IGNhbGxiYWNrXHRUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdGhhdCBwcm9jZXNzZXMgdGhlIGV2ZW50LiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBhY2NlcHQgYW4gb2JqZWN0IGFzIGl0cyBvbmx5IHBhcmFtZXRlciwgd2hpY2ggaW4gdHVybiBjb250YWlucyB0aGUgZXZlbnQgcGFyYW1ldGVycy5cblx0ICogQHBhcmFtXHR7b2JqZWN0fSBzY29wZVx0XHRUaGUgb2JqZWN0IHRoYXQgYWN0cyBhcyBhIGNvbnRleHQgZm9yIHRoZSBldmVudCBsaXN0ZW5lcjogaXQgaXMgdGhlIG9iamVjdCB0aGF0IGFjdHMgYXMgYSBcInBhcmVudCBzY29wZVwiIGZvciB0aGUgY2FsbGJhY2sgZnVuY3Rpb24sIHRodXMgcHJvdmlkaW5nIGNvbnRleHQgKGkuZS4gYWNjZXNzIHRvIHZhcmlhYmxlcyBhbmQgb3RoZXIgbWVodG9kcykgdG8gdGhlIGZ1bmN0aW9uIGl0c2VsZi5cblx0ICovXG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgY2FsbGJhY2ssIHNjb3BlKVxuXHR7XG5cdFx0aWYgKCF0aGlzLl9saXN0ZW5lcnNCeUV2ZW50W2V2dFR5cGVdKVxuXHRcdFx0dGhpcy5fbGlzdGVuZXJzQnlFdmVudFtldnRUeXBlXSA9IFtdO1xuXG5cdFx0dGhpcy5fbGlzdGVuZXJzQnlFdmVudFtldnRUeXBlXS5wdXNoKHtjYWxsYmFjazpjYWxsYmFjaywgc2NvcGU6c2NvcGV9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyLlxuXHQgKlxuXHQgKiBAcGFyYW1cdHtzdHJpbmd9IGV2dFR5cGVcdFRoZSB0eXBlIG9mIGV2ZW50IHRvIHJlbW92ZS5cblx0ICogQHBhcmFtXHR7ZnVuY3Rpb259IGNhbGxiYWNrXHRUaGUgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgcmVtb3ZlZC5cblx0ICovXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgY2FsbGJhY2spXG5cdHtcblx0XHRjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNCeUV2ZW50W2V2dFR5cGVdO1xuXG5cdFx0aWYgKGxpc3RlbmVycylcblx0XHR7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0aWYgKGxpc3RlbmVyc1tpXS5jYWxsYmFjayA9PT0gY2FsbGJhY2spXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGlzcGF0Y2hFdmVudChldnRUeXBlLCBldnRPYmopXG5cdHtcblx0XHRjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNCeUV2ZW50W2V2dFR5cGVdO1xuXG5cdFx0aWYgKGxpc3RlbmVycylcblx0XHR7XG5cdFx0XHRmb3IgKGxldCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnMpXG5cdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmNhbGwobGlzdGVuZXIuc2NvcGUsIGV2dE9iaik7XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgY29uc3QgQ29ubmVjdGlvbk1hbmFnZXJFdmVudCA9IE9iamVjdC5mcmVlemUoe1xuXHRDT05ORUNUSU9OOiAnY29ubmVjdGlvbicsXG5cdExPR0lOOiAnbG9naW4nLFxuXHRESVNDT05ORUNUSU9OOiAnZGlzY29ubmVjdGlvbicsXG5cdEVSUk9SOiAnZXJyb3InLFxuXHRTRVJWRVJfRVJST1I6ICdzZXJ2ZXJFcnJvcicsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vZHVsZU1hbmFnZXJFdmVudCA9IE9iamVjdC5mcmVlemUoe1xuXHRNT0RVTEVfTE9BREVEOiAnbW9kdWxlLWxvYWRlZCcsXG5cdE1PRFVMRV9MT0FEX0VSUk9SOiAnbW9kdWxlLWxvYWQtZXJyb3InLFxufSk7XG4iLCJleHBvcnQgY29uc3QgdG9LZWJhYkNhc2UgPSAoc3RyKSA9PlxuICBzdHIgJiZcbiAgc3RyXG4gICAgLm1hdGNoKC9bQS1aXXsyLH0oPz1bQS1aXVthLXpdK1swLTldKnxcXGIpfFtBLVpdP1thLXpdK1swLTldKnxbQS1aXXxbMC05XSsvZylcbiAgICAubWFwKHggPT4geC50b0xvd2VyQ2FzZSgpKVxuICAgIC5qb2luKCctJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBieXRlc1RvU2l6ZShieXRlcywgZGVjaW1hbHMgPSAxLCB6ZXJvVW5pdCA9ICcnLCBzdWZmaXggPSAnJykge1xuXHRpZiAoYnl0ZXMgPT09IDApXG5cdFx0cmV0dXJuICcwICcgKyB6ZXJvVW5pdCArICh6ZXJvVW5pdCAhPSAnJyA/IHN1ZmZpeCA6ICcnKTtcblxuXHRpZiAoYnl0ZXMgPCAxKSAvLyBDYW4gaGFwcGVuIGluIGNoYXJ0IGF4aXMgbGFiZWxzIVxuXHQgXHRyZXR1cm4gYCR7Ynl0ZXN9IEJ5dGVzJHtzdWZmaXh9YDtcblxuICAgIGNvbnN0IGsgPSAxMDAwO1xuICAgIGNvbnN0IGRtID0gZGVjaW1hbHMgPCAwID8gMCA6IGRlY2ltYWxzO1xuICAgIGNvbnN0IHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddO1xuXG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldICsgc3VmZml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24ga0J5dGVzVG9TaXplKGtCeXRlcywgZGVjaW1hbHMgPSAxLCB6ZXJvVW5pdCA9ICcnLCBzdWZmaXggPSAnJykge1xuXHRyZXR1cm4gYnl0ZXNUb1NpemUoa0J5dGVzICogMTAwMCwgZGVjaW1hbHMsIHplcm9Vbml0LCBzdWZmaXgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0KHN0cmluZykge1xuXHRyZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ2xhc3NOYW1lKGVsZW1lbnQsIGluZGV4LCBhcnJheSlcbntcblx0aWYgKGVsZW1lbnQuZW5kc1dpdGgoJy5weScpKVxuXHRcdHJldHVybiAoZWxlbWVudC5lbmRzV2l0aCgnRXh0ZW5zaW9uLnB5JykpO1xuXHRlbHNlIGlmIChlbGVtZW50LmVuZHNXaXRoKCcuanMnKSlcblx0XHRyZXR1cm4gKGVsZW1lbnQuZW5kc1dpdGgoJ0V4dGVuc2lvbi5qcycpKTtcblx0ZWxzZVxuXHRcdHJldHVybiAoZWxlbWVudC5lbmRzV2l0aCgnRXh0ZW5zaW9uJykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmRUb0RlY2ltYWxzKHZhbHVlLCBkZWNpbWFscykge1xuICByZXR1cm4gTnVtYmVyKE1hdGgucm91bmQodmFsdWUgKyAnZScgKyBkZWNpbWFscykgKyAnZS0nICsgZGVjaW1hbHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVCeXRlcyhieXRlcywgZGVjaW1hbHMgPSAxKSB7XG5cdGxldCBvYmogPSB7fTtcblxuXHRjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTtcblxuXHRpZiAoYnl0ZXMgPiAwKVxuXHR7XG5cdFx0Y29uc3QgayA9IDEwMDA7XG5cdFx0Y29uc3QgZG0gPSBkZWNpbWFscyA8IDAgPyAwIDogZGVjaW1hbHM7XG5cdFx0Y29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuXG5cdFx0b2JqLnZhbHVlID0gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChkbSkpO1xuXHRcdG9iai51bml0ID0gc2l6ZXNbaV07XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0b2JqLnZhbHVlID0gMDtcblx0XHRvYmoudW5pdCA9IHNpemVzWzBdO1xuXHR9XG5cblx0cmV0dXJuIG9iajtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==