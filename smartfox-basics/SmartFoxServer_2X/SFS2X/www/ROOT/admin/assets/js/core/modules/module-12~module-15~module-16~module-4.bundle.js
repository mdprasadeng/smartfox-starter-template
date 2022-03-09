/*! (c) gotoAndPlay | All rights reserved */
(window["webpackJsonpapplication"] = window["webpackJsonpapplication"] || []).push([["module-12~module-15~module-16~module-4"],{

/***/ "./src/components/uibuilder/config-check-box.js":
/*!******************************************************!*\
  !*** ./src/components/uibuilder/config-check-box.js ***!
  \******************************************************/
/*! exports provided: ConfigCheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigCheckBox", function() { return ConfigCheckBox; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");



class ConfigCheckBox extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter value.
	 * If parameter is not editable, a simple label is used.
	 * @override
	 */
	_generateInnerWidget()
	{
		if (this._data.editable)
		{
			// Set widget configuration
			let config = {
				type: 'checkbox',
				class: '',
				id: this._data.name,
				name: this._data.name,
				'data-role': 'switch',
			};

			// Set widget attributes (see parent class)
			this._setWidgetAttributes(config);

			// Set additional widget attributes based on validation rules (see parent class)
			this._setWidgetValidationAttributes(config);

			// Create widget's html
			this._widgetHtml = $('<input>', config);
		}
		else
			this._widgetHtml = new _config_label__WEBPACK_IMPORTED_MODULE_1__["ConfigLabel"]();

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Initialize widget.
	 * @override
	 */
   _initialize()
   {
	   if (this._data.editable)
	   {
		   // Initialize kendo widget
		   kendo.init(this._widgetHtml);

		   // Save ref. to widget
		   this._innerWidget = this._widgetHtml.data('kendoSwitch');

		   // Enable value commit binding
		   this._innerWidget.bind('change', $.proxy(this._onValueInput, this));
	   }

	   // Proceed with initialization
	   super._initialize();
   }

	/**
	 * Set widget's value.
	 * If parameter is not editable, the label text is set.
	 * @override
	 */
	_setWidgetValue()
	{
		if (this._data.editable)
			this._innerWidget.value(this._data.value);
		else
			this._widgetHtml.value = this._data.value;

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
			this._innerWidget.enable(this._editEnabled);
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		// Update Configuration Parameter to new value
		this._data.value = this._innerWidget.value();

		// Trigger event
		this._triggerEvent();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-check-box'))
	window.customElements.define('config-check-box', ConfigCheckBox);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-drop-down-list.js":
/*!***********************************************************!*\
  !*** ./src/components/uibuilder/config-drop-down-list.js ***!
  \***********************************************************/
/*! exports provided: ConfigDropDownList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDropDownList", function() { return ConfigDropDownList; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");



class ConfigDropDownList extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter value.
	 * If parameter is not editable, a simple label is used.
	 * @override
	 */
	_generateInnerWidget()
	{
		if (this._data.editable)
		{
			// Set widget configuration
			let config = {
				class: 'form-control',
				id: this._data.name,
				name: this._data.name,
				'data-role': 'dropdownlist',
			};

			// Set widget attributes (see parent class)
			this._setWidgetAttributes(config);

			// Set additional widget attributes based on validation rules (see parent class)
			this._setWidgetValidationAttributes(config);

			// Create widget's html
			this._widgetHtml = $('<input>', config);
		}
		else
			this._widgetHtml = new _config_label__WEBPACK_IMPORTED_MODULE_1__["ConfigLabel"]();

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Initialize widget.
	 * @override
	 */
   _initialize()
   {
	   if (this._data.editable)
	   {
		   // Initialize kendo widget
		   kendo.init(this._widgetHtml);

		   // Save ref. to widget
		   this._innerWidget = this._widgetHtml.data('kendoDropDownList');

		   // Set list items
		   this._innerWidget.setDataSource(this._getDataSource(this._data.dataProvider))

		   // Enable value commit binding
		   this._widgetHtml.bind('change', $.proxy(this._onValueInput, this));
	   }

	   // Proceed with initialization
	   super._initialize();
   }

	/**
	 * Set widget's value.
	 * If parameter is not editable, the label text is set.
	 * @override
	 */
	_setWidgetValue()
	{
		if (this._data.editable)
			this._innerWidget.value(this._data.value);
		else
			this._widgetHtml.value = this._data.value;

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
			this._innerWidget.wrapper.attr('disabled', !this._editEnabled);
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		// Update Configuration Parameter to new value
		this._data.value = this._innerWidget.value();

		// Trigger event
		this._triggerEvent();
	}

	_getDataSource(dpString)
	{
		if (dpString)
			return dpString.split(',');

		// In case the dataprovider is empty, add at least the current value
		else
			return [this._data.value];
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-drop-down-list'))
	window.customElements.define('config-drop-down-list', ConfigDropDownList);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-dual-list.js":
/*!******************************************************!*\
  !*** ./src/components/uibuilder/config-dual-list.js ***!
  \******************************************************/
/*! exports provided: ConfigDualList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigDualList", function() { return ConfigDualList; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");



class ConfigDualList extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter.
	 * @override
	 */
	_generateInnerWidget()
	{
		this._widgetHtml = $('<div>');

		const availableId = this._getId(this._data.name, 'available');
		const selectedId = this._getId(this._data.name, 'selected');

		// Create header for labels
		let header = $('<div>', {class: 'form-label-container dual-list-labels'});

		header.append($('<label>', {
			class: 'font-italic form-label dual-list-left-col' + (!this._data.editable ? ' no-interact' : ''),
			for: availableId,
		}).text('Available'));

		header.append($('<label>', {
			class: 'font-italic font-weight-bold form-label dual-list-right-col' + (!this._data.editable ? ' no-interact' : ''),
			for: selectedId,
		}).text('Selected'));

		this._widgetHtml.append(header);

		// Add available items list
		this._availableListHtml = $('<select>', {
			id: availableId,
			class: 'dual-list-left-col' + (!this._data.editable ? ' no-interact' : ''),
		});
		this._widgetHtml.append(this._availableListHtml);

		// Add selected items list
		this._selectedListHtml = $('<select>', {
			id: selectedId,
			class: 'dual-list-right-col' + (!this._data.editable ? ' no-interact' : ''),
		});
		this._widgetHtml.append(this._selectedListHtml);

		// Return component
		return this._widgetHtml;
	}

	// IDs containing a "." cause issues to connected lists
	_getId(name, suffix)
	{
		return name.replace('.', '_') + '-' + suffix;
	}

	/**
	 * Initialize widget.
	 * @override
	 */
	_initialize()
	{
		// Initialize "avalable" listbox
		this._availableList = this._availableListHtml.kendoListBox({
            connectWith: this._getId(this._data.name, 'selected'),
            toolbar: {
                tools: this._data.editable ? ['transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom'] : []
            },
			template: "<div>#:value#</div>",
			selectable: 'multiple',
        }).data('kendoListBox');

		// Initialize "selected" listbox
        this._selectedList = this._selectedListHtml.kendoListBox({
			template: "<div>#:value#</div>",
			selectable: 'multiple',
			// The following listeners can't be used because events are fired before the datasource is actually updated
			// We have to use a change event listener on the datasource (see below), even if not optimal
			//add: $.proxy(this._onValueInput, this),
			//remove: $.proxy(this._onValueInput, this),
		}).data('kendoListBox');

		// Proceed with initialization
		super._initialize();
	}

	/**
	 * Set widget's datasource.
	 * @override
	 */
	_setWidgetValue()
	{
		let availableArr = this._data.dataProvider != '' ? this._data.dataProvider.split(',') : [];
		let selectedArr = this._data.value != '' ? this._data.value.split(',') : [];

		// Remove selected values from available values
		if (selectedArr.length > 0)
		{
			let temp = [];

			for (let val of availableArr)
			{
				if (selectedArr.indexOf(val) == -1)
					temp.push(val);
			}

			availableArr = temp;
		}

		// Convert lists of strings to lists of objects
		let availableValues = [];
		for (let val of availableArr)
			availableValues.push({value: val});

		let selectedValues = [];
		for (let val of selectedArr)
			selectedValues.push({value: val});

		// Clear selection
		this._availableList.clearSelection();
		this._selectedList.clearSelection();

		// Set datasources
		this._availableList.setDataSource(new kendo.data.DataSource({
			data: availableValues
		}));

		this._selectedList.setDataSource(new kendo.data.DataSource({
			data: selectedValues,
			// We listen to the change event instead of the add/remove events on the listbox, because those are fired before the datasource is updated
			// This is not optimal because the event is fired for each item added to or removed from the datasource
			change: $.proxy(this._onValueInput, this)
		}));

		// Disable editing
		if (!this._data.editable)
		{
			this._availableList.enable('.k-item', false);
			this._selectedList.enable('.k-item', false);
		}

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
		{
			// Clear selection
			this._availableList.clearSelection();
			this._selectedList.clearSelection();

			// Enable/disable lists
			this._availableList.wrapper.attr('disabled', !this._editEnabled);
			this._selectedList.wrapper.attr('disabled', !this._editEnabled);
		}
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		let listData = this._selectedList.dataSource.data();

		// Update Configuration Parameter to new value
		this._data.value = listData.map(e => e.value).join(',');

		// Trigger event
		this._triggerEvent();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-dual-list'))
	window.customElements.define('config-dual-list', ConfigDualList);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-form-item.js":
/*!******************************************************!*\
  !*** ./src/components/uibuilder/config-form-item.js ***!
  \******************************************************/
/*! exports provided: ConfigFormItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigFormItem", function() { return ConfigFormItem; });
class ConfigFormItem extends HTMLElement
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super();

		this.id = 'form-item-' + configParam.name;
		this._editEnabled = editEnabled;
		this._data = configParam;

		// Create form item view
		this._buildView(inDialog);

		// Initialize form item
		this._initialize();
	}

	connectedCallback()
	{
		// Trigger event
		// NOTE: when a ConfigFormItem is instantiated, the _triggerEvent method is called as soon as its value is set.
		// When this happenso, due to the fact that the object is not yet in the DOM, the event is not catched by the listener
		// (which is attached to the outer container). So forcing the event to trigger again as soon as the ConfigFormItem
		// is appended to the DOM is needed.
		this._triggerEvent();
	}

	set data(configParam)
	{
		this._data = configParam;
		this._setWidgetValue();
	}

	get data()
	{
		return this._data;
	}

	set editEnabled(enable)
	{
		if (enable != this._editEnabled)
		{
			this._editEnabled = enable;
			this._setWidgetEditEnabled();
		}
	}

	get editEnabled()
	{
		return this._editEnabled;
	}

	_buildView(isInsideDialog)
	{
		if (!isInsideDialog)
		{
			// Set additional classes for inner widget
			let classNames = '';

			switch (this._data.type)
			{
				case 'DualList':
					classNames = 'col-sm-7 col-lg-8';
					break;
				case 'DataGrid':
					classNames = 'col-sm'; // Use 'col-sm-7 col-lg-8' for DataGrid too?
					break;
				case 'TextInput':
					classNames = 'col-sm col-lg-5 col-xl-4';
					break;
				default:
					classNames = 'col-sm-auto';

			}

			// Generate boilerplate html, surrounding the actual widget (label, numeric stepper, etc)
			this.innerHTML = `
				<div class="form-group position-relative row">
					<div class="col-sm-5 col-lg-4 col-form-label form-label-container">
						<label for="${this._data.name}" class="form-label ${(this._data.clientOnly ? 'client-only' : '')}">${this._data.label} <i class="fas fa-question-circle text-muted help" title="${this._data.tooltip}"></i></label>
					</div>
					<div class="inner-widget align-self-center ${classNames}">
						<span class="k-invalid-msg" data-for="${this._data.name}"></span>
					</div>
				</div>
			`;
		}
		else
		{
			this.innerHTML = `
				<div class="form-group position-relative">
					<div class="col-form-label form-label-container">
						<label for="${this._data.name}" class="form-label ${(this._data.clientOnly ? 'client-only' : '')}">${this._data.label} <i class="fas fa-question-circle text-muted help" title="${this._data.tooltip}"></i></label>
					</div>
					<div class="inner-widget">
						<span class="k-invalid-msg" data-for="${this._data.name}"></span>
					</div>
				</div>
			`;
		}

		// Create inner widget (must be overridden)
		let widget = this._generateInnerWidget();

		// Append inner widget
		$(this).find('.inner-widget').prepend(widget);
	}

	/**
	 * TO BE OVERRIDDEN
	 */
	_generateInnerWidget()
	{
		// Show an error, should be overridden
		console.error(`Unable to create ${this._data.type} form item for configuration parameter ${this.id}`);
	}

	/**
	 * Set attributes on the widget configuration object.
	 */
	_setWidgetAttributes(config)
	{
		const attribs = this._data.attributes;

		if (attribs)
		{
			for (let attr in attribs)
			{
				config[attr] = attribs[attr];

				if (attr == 'pattern')
					config['data-pattern-msg'] = 'Contains invalid characters';
			}
		}
	}

	/**
	 * Set additional attributes on the widget configuration object to properly validate input.
	 */
	_setWidgetValidationAttributes(config)
	{
		const val = this._data.validator;

		if (val != null && val != '')
		{
			if (val == 'ip')
			{
				config['pattern'] = '^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$';
				config['data-pattern-msg'] = 'Invalid IP address';
				config['required'] = true;
				config['data-required-msg'] = 'Required';
			}

			else if (val == 'notNull')
			{
				config['required'] = true;
				config['data-required-msg'] = 'Required';
			}

			else if (val == 'pwd')
			{
				config['pattern'] = '^.{6,}$';
				config['data-pattern-msg'] = 'Minimum length: 6 characters';
			}

			else if (val == 'posNum')
			{
				config['pattern'] = '^[0-9]\d*$';
				config['data-pattern-msg'] = 'Non-negative number required';
			}

			else if (val == 'aoi')
			{
				// Nothing to do
				// See Kendo validation initialization in config-interface-builder.js
			}

			else if (val == 'url')
			{
				config['type'] = 'url';
				config['data-url-msg'] = 'Invalid URL';
			}
		}
	}

	/**
	 * Initialize form item.
	 *
	 * NOTE: must be overridden if inner widget requires special initialization (for example Kendo widgets)
	 */
	_initialize()
	{
		// Set value
 	   this._setWidgetValue();

 	   // Set edit enabled
 	   this._setWidgetEditEnabled();
	}

	/**
	 * TO BE OVERRIDDEN
	 */
	_setWidgetValue()
	{
		// Nothing to do, must be overridden
	}

	/**
	 * TO BE OVERRIDDEN
	 */
	_setWidgetEditEnabled()
	{
		// Nothing to do, must be overridden
	}

	/**
	 * TO BE OVERRIDDEN
	 */
	_onValueInput(e)
	{
		// Nothing to do, must be overridden
	}

	_triggerEvent()
	{
		if (this._data.trigger)
		{
			let event = new CustomEvent('value-set', {detail: null, bubbles: true, cancelable: true});
			this.dispatchEvent(event);
		}
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-form-item'))
	window.customElements.define('config-form-item', ConfigFormItem);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-grid.js":
/*!*************************************************!*\
  !*** ./src/components/uibuilder/config-grid.js ***!
  \*************************************************/
/*! exports provided: ConfigGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigGrid", function() { return ConfigGrid; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");
/* harmony import */ var _widgets_list_item_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/list-item-editor */ "./src/components/uibuilder/widgets/list-item-editor.js");




class ConfigGrid extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter.
	 * @override
	 */
	_generateInnerWidget()
	{
		// Create main widget's html
		this._widgetHtml = $('<div>', {class: ''});

		// Set grid widget configuration
		let gridConfig = {
			id: this._data.name,
			name: this._data.name,
			class: 'limited-height' + (!this._data.editable ? ' no-interact' : '')
		};

		// Append grid to main html; grid will be converted to Kendo widget during initialization
		this._widgetHtml.append($('<div>', gridConfig));

		if (this._data.editable)
		{
			// BUTTONS

			// Create buttons container
			let buttons = $('<div>', {class: 'mt-2 text-right'});

			// Append buttons to container
			this._addButton = $('<button>', {type: 'button', class: 'k-button k-secondary', title: 'Add'}).append($('<i class="fas fa-plus"></i>'));
			this._editButton = $('<button>', {type: 'button', class: 'k-button k-secondary ml-2', title: 'Edit', disabled: true}).append($('<i class="fas fa-pen"></i>'));
			this._removeButton = $('<button>', {type: 'button', class: 'k-button k-secondary ml-2', title: 'Remove', disabled: true}).append($('<i class="fas fa-times"></i>'));

			buttons.append(this._addButton);
			buttons.append(this._editButton);
			buttons.append(this._removeButton);

			// Append buttons container to main html
			this._widgetHtml.append(buttons);

			// Create edit dialog
			// NOTE: data-dismiss="modal" on the close/cancel buttons was removed to work around an issue with nested modals;
			// the custom "data-cancel" attribute is used to add a custom listener to the buttons
			this._editDialog = $(`
				<div class="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true" data-keyboard="false" data-backdrop="static">
					<div class="modal-dialog modal-dialog-centered" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title text-primary" id="modalTitle">${this._data.label}</h5>
								<button type="button" class="close" aria-label="Close" data-cancel="modal">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body in-flow-invalid-msg">

							</div>
							<div class="modal-footer flex-column">
								<div class="d-flex w-100">
									<div class="flex-grow-1 text-left">
										<button type="button" class="k-button k-primary">...</button>
									</div>
									<div class="flex-grow-1 text-right">
										<button type="button" class="k-button k-secondary" data-cancel="modal">Cancel</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`);

			// Add listener to dialog hide event
			this._editDialog.on('hidden.bs.modal', $.proxy(this._onEditPanelHidden, this));

			// Add listener to main button click event
			$('button.k-primary', this._editDialog).on('click', $.proxy(this._onSubmitBtClick, this));

			// Add listener to close/cancel buttons click event
			$('button[data-cancel="modal"]', this._editDialog).on('click', $.proxy(this._onCancelBtClick, this));

			// Append edit dialog to main html
			this._widgetHtml.append(this._editDialog);
		}

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Initialize widget.
	 * @override
	 */
	_initialize()
	{
		let columns = [];
		for (let subConfigParam of this._data.defaultListItem)
		{
			let col = {
				field: subConfigParam.name,
				title: subConfigParam.label,
				width: 120
			}

			// Display V or X for booleans
			if (typeof subConfigParam.value === 'boolean')
				col.template = `#= ${subConfigParam.name} ? '<i class="fas fa-check"></i>' : '<i class="fas fa-times"></i>' #`;

			// Hide passwords
			if (subConfigParam.type == 'TextInput' && subConfigParam.attributes != null && subConfigParam.attributes.type == 'password')
				col.template = `#= '•'.repeat(data.${subConfigParam.name}.length) #`;

			columns.push(col);
		}

		// Initialize grid
		let gridHtml = this._widgetHtml.find(`#${$.escapeSelector(this._data.name)}`);

		gridHtml.kendoGrid({
			resizable: true,
			selectable: this._data.editable ? 'row' : false,
			change: $.proxy(this._onGridSelectionChange, this),
			columns: columns,
			noRecords: {
				template: 'No items.'
			}
		});

		// Save ref. to widget
		this._gridWidget = gridHtml.data('kendoGrid');

		// Show tootip if grid's cell content exceeds cell width (ellipsis is displayed by Kendo Grid)
		gridHtml.kendoTooltip({
			filter: 'td',
			show: function(e) {
				// Never show tooltip...
				this.content.parent().css('visibility', 'hidden');

				// ...unless content is returned (see below) due to cell width being exceeded
				if (this.content.text() != '')
					this.content.parent().css('visibility', 'visible');
			},
			hide: function() {
				this.content.parent().css('visibility', 'hidden');
			},
			content: function(e) {
				let element = e.target[0];
				if (element.offsetWidth < element.scrollWidth)
					return e.target.text();
				else
					return '';
			}
		});

		/*
		// Initialize button tooltips
		this._widgetHtml.kendoTooltip({
			filter: 'button',
			content: function(e) {
				return `<div class="help-tooltip">${e.target.data('title')}</div>`;
			}
		});
		*/

		// Add button listeners
		if (this._data.editable)
		{
			this._addButton.click($.proxy(this._onAddClick, this));
			this._editButton.click($.proxy(this._onEditClick, this));
			this._removeButton.click($.proxy(this._onRemoveClick, this));
		}

		// Proceed with initialization
		super._initialize();
	}

	/**
	 * Set widget's datasource.
	 * @override
	 */
	_setWidgetValue()
	{
		let dataSource = new kendo.data.DataSource({
			data: this._data.listValues
		});

		// Read current horizontal scroll value
		const scrollLeft = $('.k-grid-content', this._gridWidget.wrapper).scrollLeft();

		// Clear grid selection if any
		this._gridWidget.clearSelection();

		// Set updated grid's datasource
		this._gridWidget.setDataSource(dataSource);

		// Set horizontal scroll
		$('.k-grid-content', this._gridWidget.wrapper).scrollLeft(scrollLeft);
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
		{
			// Deselect item
			this._gridWidget.clearSelection();

			// Enable/disable grid
			this._gridWidget.wrapper.attr('disabled', !this._editEnabled);

			// Enable "Add" button
			if (this._editEnabled)
				this._addButton.attr('disabled', false);

			// Disable all buttons
			else
			{
				this._addButton.attr('disabled', true);
				this._editButton.attr('disabled', true);
				this._removeButton.attr('disabled', true);
			}
		}
	}

	_onGridSelectionChange(e)
	{
		let selectedRows = this._gridWidget.select();
		let selectedDataItems = [];

		for (let i = 0; i < selectedRows.length; i++)
		{
			let dataItem = this._gridWidget.dataItem(selectedRows[i]);
			selectedDataItems.push(dataItem);
		}

		// Enable/disable edit button
		if (this._editButton)
			this._editButton.prop('disabled', selectedDataItems.length == 0);

		// Enable/disable remove button
		if (this._removeButton)
		{
			// Always disable button if no list item is selected
			this._removeButton.prop('disabled', selectedDataItems.length == 0);

			// Also disable button if denyEmpty == true and just one item remains in the list
			if (this._data.denyEmpty)
				this._removeButton.prop('disabled', this._data.listItems.length <= 1);
		}
    }

	_onRemoveClick()
	{
		let selectedIndex = this._gridWidget.select().index();

		// Remove item from list
		this._data.removeListItem(selectedIndex);

		// Regenerate datagrid's datasource
		this._setWidgetValue();
	}

	_onAddClick()
	{
		// Clone default item and add to list
		let newListItem = [];
		for (let subCP of this._data.defaultListItem)
			newListItem.push(subCP.clone(true));

		// Create edit popup
		this._openEditPanel(newListItem);
	}

	_onEditClick()
	{
		let selectedIndex = this._gridWidget.select().index();

		// Clone selected item and add to list
		let clonedListItem = [];
		for (let subCP of this._data.listItems[selectedIndex])
			clonedListItem.push(subCP.clone(true));

		// Create edit popup
		this._openEditPanel(clonedListItem, selectedIndex);
	}

	_openEditPanel(subConfigParamsArray, editIndex = -1)
	{
		// Check if this configuration item is inside a modal window;
		// if yes, the edit panel (which is a modal as well) must be configured to remove the dark background
		if ($(this).parents('.modal').length > 0)
			$('.modal', $(this)).attr('data-backdrop', false);

		// Create dialog content
		this._itemEditor = new _widgets_list_item_editor__WEBPACK_IMPORTED_MODULE_2__["ListItemEditor"]();
		this._itemEditor.data = subConfigParamsArray;
		this._itemEditor.index = editIndex;

		let itemEditor = $(this._itemEditor);

		// Append content to dialog
		$('.modal-body', this._editDialog).append(itemEditor);

		// Set dialog main button text
		$('button.k-primary', this._editDialog).html(editIndex > -1 ? '<i class="fas fa-pen mr-1"></i>Update' : '<i class="fas fa-plus mr-1"></i>Add');

		// Display dialog
		this._editDialog.modal('show');
	}

	_onSubmitBtClick()
	{
		if (this._itemEditor.validate())
		{
			let data = this._itemEditor.data;
			let index = this._itemEditor.index;

			// Hide modal
			this._editDialog.modal('hide');

			// Complete editing
			this._onEditComplete(data, index);
		}
	}

	_onCancelBtClick()
	{
		// Hide modal
		this._editDialog.modal('hide');
	}

	_onEditPanelHidden(e)
	{
		// Remove content from dialog
		this._itemEditor.remove();

		// Set dialog main button text
		$('button.k-primary', this._editDialog).html('...');

		this._itemEditor = null;
	}

	_onEditComplete(listItem, editIndex)
	{
		// An existing list item was updated
		if (editIndex > -1)
			this._data.updateListItem(listItem, editIndex);

		// A new list item was added; add it to the configuration parameter
		else
			this._data.addListItem(listItem);

		// Regenerate datagrid's datasource
		this._setWidgetValue();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-grid'))
	window.customElements.define('config-grid', ConfigGrid);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-label.js":
/*!**************************************************!*\
  !*** ./src/components/uibuilder/config-label.js ***!
  \**************************************************/
/*! exports provided: ConfigLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigLabel", function() { return ConfigLabel; });
class ConfigLabel extends HTMLElement
{
	constructor()
	{
	    super();

		this.setAttribute('class','config-label');
	}

	set value(val)
	{
		if (typeof val === 'boolean')
			this.innerHTML = (val ? 'true' : 'false');
		else if (typeof val === 'number')
			this.innerHTML = (val ? val : 0);
		else
			this.innerHTML = (val != '' ? val : '&mdash;');
	}

	get value()
	{
		return this.textContent;
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-label'))
	window.customElements.define('config-label', ConfigLabel);


/***/ }),

/***/ "./src/components/uibuilder/config-numeric-stepper.js":
/*!************************************************************!*\
  !*** ./src/components/uibuilder/config-numeric-stepper.js ***!
  \************************************************************/
/*! exports provided: ConfigNumericStepper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigNumericStepper", function() { return ConfigNumericStepper; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");



class ConfigNumericStepper extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter value.
	 * If parameter is not editable, a simple label is used.
	 * @override
	 */
	_generateInnerWidget()
	{
		if (this._data.editable)
		{
			// Set widget configuration
			let config = {
				type: 'number',
				class: 'form-control',
				id: this._data.name,
				name: this._data.name,
				'data-role': 'numerictextbox',
				'data-required-msg': 'Required',
				'data-format': '#',
				required: 'required',
			};

			// Set widget attributes (see parent class)
			this._setWidgetAttributes(config);

			// Set additional widget attributes based on validation rules (see parent class)
			this._setWidgetValidationAttributes(config);

			// Create widget's html
			this._widgetHtml = $('<input>', config);
		}
		else
			this._widgetHtml = new _config_label__WEBPACK_IMPORTED_MODULE_1__["ConfigLabel"]();

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Initialize widget.
	 * @override
	 */
   _initialize()
   {
	   if (this._data.editable)
	   {
		   // Initialize kendo widget
		   kendo.init(this._widgetHtml);

		   // Save ref. to widget
		   this._innerWidget = this._widgetHtml.data('kendoNumericTextBox');

		   // Enable value commit binding
		   this._innerWidget.bind('change', $.proxy(this._onValueInput, this));
	   }

	   // Proceed with initialization
	   super._initialize();
   }

	/**
	 * Set widget's value.
	 * If parameter is not editable, the label text is set.
	 * @override
	 */
	_setWidgetValue()
	{
		if (this._data.editable)
			this._innerWidget.value(this._data.value);
		else
			this._widgetHtml.value = this._data.value;

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
			this._innerWidget.enable(this._editEnabled);
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		// Update Configuration Parameter to new value
		this._data.value = Number(this._innerWidget.value());

		// Trigger event
		this._triggerEvent();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-numeric-stepper'))
	window.customElements.define('config-numeric-stepper', ConfigNumericStepper);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-text-input.js":
/*!*******************************************************!*\
  !*** ./src/components/uibuilder/config-text-input.js ***!
  \*******************************************************/
/*! exports provided: ConfigTextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigTextInput", function() { return ConfigTextInput; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");



class ConfigTextInput extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter value.
	 * If parameter is not editable, a simple label is used.
	 * @override
	 */
	_generateInnerWidget()
	{
		if (this._data.editable)
		{
			// Set widget configuration
			let config = {
				type: 'text',
				class: 'form-control k-textbox',
				id: this._data.name,
				name: this._data.name,
				autocomplete: 'off',
			};

			// Set widget attributes
			this._setWidgetAttributes(config);

			// Set additional widget attributes based on validation rules
			this._setWidgetValidationAttributes(config);

			// Create widget's html
			this._widgetHtml = $('<input>', config);

			// Enable value commit binding
			this._widgetHtml.on('change', $.proxy(this._onValueInput, this));
		}
		else
			this._widgetHtml = new _config_label__WEBPACK_IMPORTED_MODULE_1__["ConfigLabel"]();

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Set widget's value.
	 * If parameter is not editable, the label text is set.
	 * @override
	 */
	_setWidgetValue()
	{
		if (this._data.editable)
			this._widgetHtml.val(this._data.value);
		else
			this._widgetHtml.value = this._data.value;

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
			this._widgetHtml.attr('disabled', !this._editEnabled);
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		// Update Configuration Parameter to new value
		this._data.value = this._widgetHtml.val();

		// Trigger event
		this._triggerEvent();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-text-input'))
	window.customElements.define('config-text-input', ConfigTextInput);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/config-vector-3d.js":
/*!******************************************************!*\
  !*** ./src/components/uibuilder/config-vector-3d.js ***!
  \******************************************************/
/*! exports provided: ConfigVector3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigVector3D", function() { return ConfigVector3D; });
/* harmony import */ var _config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _config_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-label */ "./src/components/uibuilder/config-label.js");
/* harmony import */ var _widgets_vector_3d_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/vector-3d-input */ "./src/components/uibuilder/widgets/vector-3d-input.js");




class ConfigVector3D extends _config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"]
{
	constructor(configParam, editEnabled, inDialog)
	{
	    super(configParam, editEnabled, inDialog);
	}

	/**
	 * Create widget to render the ConfigParameter value.
	 * If parameter is not editable, a simple label is used.
	 * @override
	 */
	_generateInnerWidget()
	{
		if (this._data.editable)
		{
			// Create widget's html
			this._widgetHtml = new _widgets_vector_3d_input__WEBPACK_IMPORTED_MODULE_2__["Vector3DInput"](this._data.name, this._data.validator == 'aoi');

			// Set widget attributes
			this._setWidgetAttributes(this._widgetHtml);

			// Enable value commit binding
			$(this._widgetHtml).on('change', $.proxy(this._onValueInput, this));
		}
		else
			this._widgetHtml = new _config_label__WEBPACK_IMPORTED_MODULE_1__["ConfigLabel"]();

		// Return component
		return this._widgetHtml;
	}

	/**
	 * Set widget's value.
	 * If parameter is not editable, the label text is set.
	 * @override
	 */
	_setWidgetValue()
	{
		this._widgetHtml.value = this._data.value;

		// Trigger event
		this._triggerEvent();
	}

	/**
	 * Set widget's disabled state.
	 * @override
	 */
	_setWidgetEditEnabled()
	{
		if (this._data.editable)
		{
			$(this._widgetHtml).attr('disabled', !this._editEnabled);
		}
	}

	/**
	 * Update Configuration Parameter value.
	 * @override
	 */
	_onValueInput(e)
	{
		// Update Configuration Parameter to new value
		this._data.value = this._widgetHtml.value;

		// Trigger event
		this._triggerEvent();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('config-vector-3d'))
	window.customElements.define('config-vector-3d', ConfigVector3D);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/widgets/list-item-editor.js":
/*!**************************************************************!*\
  !*** ./src/components/uibuilder/widgets/list-item-editor.js ***!
  \**************************************************************/
/*! exports provided: ListItemEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemEditor", function() { return ListItemEditor; });
/* harmony import */ var _utils_uibuilder_config_form_item_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/uibuilder/config-form-item-factory */ "./src/utils/uibuilder/config-form-item-factory.js");


class ListItemEditor extends HTMLElement
{
	constructor()
	{
	    super();
	}

	set data(subConfigParamsArray)
	{
		this._data = subConfigParamsArray;

		this._buildView();
	}

	get data()
	{
		return this._data;
	}

	set index(index)
	{
		this._index = index;
	}

	get index()
	{
		return this._index;
	}

	_buildView()
	{
		// Generate container form
		this._form = $('<form>', {});

		// Append form
		$(this).append(this._form);

		// Generate form fields
		for (let configParam of this._data)
		{
			// Create form item
			let formItem = _utils_uibuilder_config_form_item_factory__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItemFactory"].create(configParam, true, true);
			formItem.data = configParam;

			// Add form item to form
			this._form.append(formItem);
		}

		// Initialize kendo validation on form
		this._validator = this._form.kendoValidator({
			validateOnBlur: true,
			rules: {
				// Add rule to validate AOI form items?
				// (see: https://demos.telerik.com/kendo-ui/validator/custom-validation)
				aoi: function (input) {
					if (input.is('[data-aoi-msg]') && input.val() != '')
					{
						if (input.val() == '0,0,0')
							return false;
                    }

                    return true;
                }
			}
		}).data('kendoValidator');
	}

	validate()
	{
		return this._validator.validate();
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('list-item-editor'))
	window.customElements.define('list-item-editor', ListItemEditor);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/components/uibuilder/widgets/vector-3d-input.js":
/*!*************************************************************!*\
  !*** ./src/components/uibuilder/widgets/vector-3d-input.js ***!
  \*************************************************************/
/*! exports provided: Vector3DInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector3DInput", function() { return Vector3DInput; });
class Vector3DInput extends HTMLElement
{
	constructor(id, isValidable)
	{
	    super();

		this.id = id;
		this.name = id;

		this._isValidable = isValidable;

		this._initialize();
	}

	set enableClear(value)
	{
		if (value)
			this._clearButton.show();
		else
			this._clearButton.hide();
	}

	set allowNegative(value)
	{
		if (value)
		{
			this._widgetX.setOptions( {min: null} );
			this._widgetY.setOptions( {min: null} );
			this._widgetZ.setOptions( {min: null} );
		}
	}

	set value(val)
	{
		var coords = val.split(',');

		if (coords.length >= 1)
			this._widgetX.value(coords[0]);

		if (coords.length >= 2)
			this._widgetY.value(coords[1]);

		if (coords.length >= 3)
			this._widgetZ.value(coords[2]);

		if (this._isValidable)
			this._inputVal.val(this.value);
	}

	get value()
	{
		if (this._widgetX.value() == null && this._widgetY.value() == null && this._widgetZ.value() == null)
			return '';
		else
			return this._widgetX.value() + ',' + this._widgetY.value() + ',' + this._widgetZ.value();
	}

	_initialize()
	{
		// Generate container form
		this._container = $('<div>', {
			class: 'form-inline'
		});

		// Append container
		$(this).append(this._container);

		// Set inputs configuration
		let configHtml = {
			type: 'number',
			class: 'form-control short-4',
		};

		// Set widget configuration
		let configWidget = {
			min: 0,
			spinners: false,
			format: '#.######',
			decimals: 6,
			round: false,
			spinners: false,
			restrictDecimals: false,
			change: $.proxy(this._onChange, this)
		};

		// Create widgets
		this._inputX = $('<input>', configHtml);
		this._container.append(this._inputX);
		this._widgetX = this._inputX.kendoNumericTextBox(configWidget).data('kendoNumericTextBox');

		this._container.append('<span class="px-1">,</span>');

		this._inputY = $('<input>', configHtml);
		this._container.append(this._inputY);
		this._widgetY = this._inputY.kendoNumericTextBox(configWidget).data('kendoNumericTextBox');

		this._container.append('<span class="px-1">,</span>');

		this._inputZ = $('<input>', configHtml);
		this._container.append(this._inputZ);
		this._widgetZ = this._inputZ.kendoNumericTextBox(configWidget).data('kendoNumericTextBox');

		this._container.append('<span class="px-1"></span>'); // Additional spacer

		// Create invisible field to apply overall validation
		if (this._isValidable)
		{
			this._inputVal = $('<input>', {name: `${this.name}-custom-validate`, 'data-aoi-msg': 'Values can\'t all be 0'});
			this._container.append(this._inputVal);
			this._container.append(`<span class="k-invalid-msg" data-for="${this.name}-custom-validate"></span>`)
			this._inputVal.hide();
		}

		// Create and append Clear button
		this._clearButton = $('<button>', {type: 'button', class: 'k-button k-secondary my-1', title: 'Clear'}).append($('<i class="fas fa-times"></i>'));
		this._clearButton.on('click', $.proxy(this._onClearClick, this));
		this._container.append(this._clearButton);

		// Hide button by default
		this._clearButton.hide();
	}

	_onChange()
	{
		// Empty strings are not allowed
		if (this._widgetX.value() == null)
			this._widgetX.value(0);

		if (this._widgetY.value() == null)
			this._widgetY.value(0);

		if (this._widgetZ.value() == null)
			this._widgetZ.value(0);

		this._dispatchCommit();
	}

	_onClearClick()
	{
		this._widgetX.value('');
		this._widgetY.value('');
		this._widgetZ.value('');

		this._dispatchCommit();
	}

	_dispatchCommit()
	{
		if (this._isValidable)
			this._inputVal.val(this.value);

		this.dispatchEvent(new Event('change'));
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('vector-3d-input'))
	window.customElements.define('vector-3d-input', Vector3DInput);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/utils/uibuilder/config-form-item-factory.js":
/*!*********************************************************!*\
  !*** ./src/utils/uibuilder/config-form-item-factory.js ***!
  \*********************************************************/
/*! exports provided: ConfigFormItemFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigFormItemFactory", function() { return ConfigFormItemFactory; });
/* harmony import */ var _components_uibuilder_config_form_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/uibuilder/config-form-item */ "./src/components/uibuilder/config-form-item.js");
/* harmony import */ var _components_uibuilder_config_numeric_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/uibuilder/config-numeric-stepper */ "./src/components/uibuilder/config-numeric-stepper.js");
/* harmony import */ var _components_uibuilder_config_text_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/uibuilder/config-text-input */ "./src/components/uibuilder/config-text-input.js");
/* harmony import */ var _components_uibuilder_config_check_box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/uibuilder/config-check-box */ "./src/components/uibuilder/config-check-box.js");
/* harmony import */ var _components_uibuilder_config_drop_down_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/uibuilder/config-drop-down-list */ "./src/components/uibuilder/config-drop-down-list.js");
/* harmony import */ var _components_uibuilder_config_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/uibuilder/config-grid */ "./src/components/uibuilder/config-grid.js");
/* harmony import */ var _components_uibuilder_config_dual_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/uibuilder/config-dual-list */ "./src/components/uibuilder/config-dual-list.js");
/* harmony import */ var _components_uibuilder_config_vector_3d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/uibuilder/config-vector-3d */ "./src/components/uibuilder/config-vector-3d.js");










class ConfigFormItemFactory
{
	static create(configParam, editEnabled, inDialog = false)
	{
		switch (configParam.type)
		{
			case 'TextInput':
				return new _components_uibuilder_config_text_input__WEBPACK_IMPORTED_MODULE_2__["ConfigTextInput"](configParam, editEnabled, inDialog);
				break;

			case 'CheckBox':
				return new _components_uibuilder_config_check_box__WEBPACK_IMPORTED_MODULE_3__["ConfigCheckBox"](configParam, editEnabled, inDialog);
				break;

			case 'NumericStepper':
				return new _components_uibuilder_config_numeric_stepper__WEBPACK_IMPORTED_MODULE_1__["ConfigNumericStepper"](configParam, editEnabled, inDialog);
				break;

			case 'ComboBox':
				return new _components_uibuilder_config_drop_down_list__WEBPACK_IMPORTED_MODULE_4__["ConfigDropDownList"](configParam, editEnabled, inDialog);
				break;

			case 'DataGrid':
				return new _components_uibuilder_config_grid__WEBPACK_IMPORTED_MODULE_5__["ConfigGrid"](configParam, editEnabled, inDialog);
				break;

			case 'DualList':
				return new _components_uibuilder_config_dual_list__WEBPACK_IMPORTED_MODULE_6__["ConfigDualList"](configParam, editEnabled, inDialog);
				break;

			case 'Vector3D':
				return new _components_uibuilder_config_vector_3d__WEBPACK_IMPORTED_MODULE_7__["ConfigVector3D"](configParam, editEnabled, inDialog);
				break;

			default:
				return new _components_uibuilder_config_form_item__WEBPACK_IMPORTED_MODULE_0__["ConfigFormItem"](configParam, editEnabled, inDialog); // Will log an error for missing form item type
		}
	}
}


/***/ }),

/***/ "./src/utils/uibuilder/config-interface-builder.js":
/*!*********************************************************!*\
  !*** ./src/utils/uibuilder/config-interface-builder.js ***!
  \*********************************************************/
/*! exports provided: ConfigInterfaceBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigInterfaceBuilder", function() { return ConfigInterfaceBuilder; });
/* harmony import */ var _configuration_parameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-parameter */ "./src/utils/uibuilder/configuration-parameter.js");
/* harmony import */ var _config_form_item_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-form-item-factory */ "./src/utils/uibuilder/config-form-item-factory.js");



class ConfigInterfaceBuilder
{
	constructor()
	{
		// Set some constants
		this.TAB_PREFIX = 'tab-'
		this.TAB_PANE_PREFIX = 'tabpane-';
		this.SEPARATOR_BEFORE = 'before';
		this.SEPARATOR_AFTER = 'after';
	}

	dump(modifiedOnly = false)
	{
		let dumpStr = '';

		for (let cp of this._configParams)
		{
			if (modifiedOnly)
			{
				if (cp.isModified)
					dumpStr += cp.toString() + '\n';
			}
			else
				dumpStr += cp.toString() + '\n';
		}

		console.log(dumpStr);
	}

	buildInterface(data, mainContainerId, disableEdit = false, tabSuffix = '')
	{
		this._mainContainerId = mainContainerId;
		this._configParams = new Array();
		this._validator = null;

		let hasNewFormItem = false;

		//console.log(data.getDump())

		for (let i = 0; i < data.size(); i++)
		{
			// PARSE DATA

			let configParam = _configuration_parameter__WEBPACK_IMPORTED_MODULE_0__["ConfigurationParameter"].fromSfsObject(data.get(i));
			this._configParams.push(configParam);

			// Get tab and tab pane id from group id
			const tabId = this.TAB_PREFIX + configParam.categoryId + (tabSuffix ? '_' + tabSuffix : '');
			const tabPaneId = this.TAB_PANE_PREFIX + configParam.categoryId + (tabSuffix ? '_' + tabSuffix : '');

			// BUILD INTERFACE :: TABS

			// Check if a tab specific for this group already exists inside the mainContainer: if not, create it
			// (a tab already exists if it was created in a previous loop)
			let tab = $(`#${mainContainerId} > #tabs #${tabId}`);

			if (tab.length == 0)
			{
				// Create tab for tab pane
				tab = $('<li>', {class: 'nav-item'});
				tab.append($('<a>', {
					class: 'nav-link' + (i == 0 ? ' active' : ''),
					id: tabId,
					'data-toggle': 'tab',
					href: '#' + tabPaneId,
					role: 'tab',
					'aria-controls': tabPaneId,
					'aria-selected': (i == 0 ? 'true' : 'false'),
					html: configParam.category,
				}));

				// Add tab to container
				$(`#${mainContainerId} > #tabs`).append(tab);
			}

			// BUILD INTERFACE :: TAB PANES

			// Check if a tab pane specific for this group already exists inside the mainContainer: if not, create it
			// (a tab pane already exists if it was created in a previous loop or if it exists statically in the html - in case it is needed to add some static content)
			let tabPane = $(`#${mainContainerId} > #tabPanels > #${tabPaneId}`);

			if (tabPane.length == 0)
			{
				// Create tab pane
				tabPane = $('<div>', {
					class: 'tab-pane' + (i == 0 ? ' show active' : ''),
					id: tabPaneId,
					role: 'tabpanel',
					'aria-labelledby': tabId,
					'data-dynamic': 'true',
				});

				// Add tab pane to container
				$(`#${mainContainerId} > #tabPanels`).append(tabPane);
			}

			// BUILD INTERFACE :: TAB PANES' FORM

			// Check if a form already exists inside the tab pane: if not, create it
			let form = tabPane.find('form');

			if (form.length == 0)
			{
				// Create form
				form = $('<form>', {
					class: '',
					autocomplete: 'off'
				});

				// Create an inner fieldset; this might be useful to easily disable the whole form at once (actually we don't use it because Kendo widgets are not disabled automatically)
				form.append(
					$('<fieldset>', {
						class: ''
					})
				);

				// Add form to tab pane
				tabPane.prepend(form);
			}

			// Get fieldset, which is the actual form items container
			let fieldset = form.find('fieldset');

			// BUILD INTERFACE :: TAB PANES' FORM ITEMS

			// Check if form item already exists in fieldset; if yes, just update its data
			let formItem = fieldset.find(`#form-item-${$.escapeSelector(configParam.name)}`);

			if (formItem.length == 0)
			{
				hasNewFormItem = true;

				formItem = _config_form_item_factory__WEBPACK_IMPORTED_MODULE_1__["ConfigFormItemFactory"].create(configParam, !disableEdit);

				// Add separator before
				if (configParam.separator != null && configParam.separator.pos == 'before')
					fieldset.append(this._buildSeparator(configParam.separator));

				// Add form item to form
				fieldset.append(formItem);

				// Add separator after
				if (configParam.separator != null && configParam.separator.pos == 'after')
					fieldset.append(this._buildSeparator(configParam.separator));
			}
			else
				formItem[0].data = configParam;
		}

		// Add listener to show help tooltips
		let allTabPanes = $(`#${mainContainerId} > #tabPanels > div.tab-pane`);
		allTabPanes.kendoTooltip({
			filter: 'i[title].help',
			position: 'right',
			width: '250px',
			content: function(e) {
				return `<div class="help-tooltip">${e.target.data('title')}</div>`;
			}
		});

		// Initialize kendo validation on forms' main container
		this._validator = $(`#${mainContainerId}`).kendoValidator({
			validateOnBlur: true,
			rules: {
				// Add rule to validate AOI form items
				// (see: https://demos.telerik.com/kendo-ui/validator/custom-validation)
				aoi: function (input) {
					if (input.is('[data-aoi-msg]') && input.val() != '')
					{
						if (input.val() == '0,0,0')
							return false;
                    }

                    return true;
                }
			}
		}).data('kendoValidator');
	}

	destroyInterface()
	{
		// Destroy all Kendo widgets in forms
		kendo.destroy($(`#${this._mainContainerId} > #tabPanels > div.tab-pane > form`));

		// Remove all tabs
		$(`#${this._mainContainerId} > #tabs`).empty();

		// Remove dynamic tab panes (tab panes created by Interface Builder)
		$(`#${this._mainContainerId} > #tabPanels > div.tab-pane[data-dynamic="true"]`).remove();

		// Remove form inside static tab panes (predefined tab panes in html)
		$(`#${this._mainContainerId} > #tabPanels > div.tab-pane > form`).remove();

		// Remove "active" class from static tab panes (otherwise this class messes with the tab navigator functioning)
		$(`#${this._mainContainerId} > #tabPanels > div.tab-pane`).removeClass('active');
	}

	disableInterface(disable)
	{
		// Enable/disable all config form items
		$(`#${this._mainContainerId} *[id^='form-item-']`).prop('editEnabled', !disable);
	}

	_buildSeparator(separator)
	{
		if (separator.text == null)
			return $(`<hr class="config-form-separator">`);

		else
			return $(`<label class="config-form-separator-label mb-3">${separator.text}</label>`);
	}

	getChangedData()
	{
		let changes = new SFS2X.SFSArray();

		for (var cp of this._configParams)
		{
			if (cp.isModified)
				changes.addSFSObject(cp.toSfsObject());
		}

		return changes;
	}

	resetIsModified()
	{
		for (let cp of this._configParams)
		{
			if (cp.isModified)
				cp.resetIsModified();
		}
	}

	checkIsValid()
	{
		return this._validator.validate();
	}

	resetValidation()
	{
		this._validator.hideMessages();

		// The method above doesn't remove the k-invalid classes and aria-invalid="true" attributes from inputs
		// Let's do it manually
		$(`#${this._mainContainerId} .k-invalid`).removeClass('k-invalid');
		$(`#${this._mainContainerId} [aria-invalid="true"]`).removeAttr('aria-invalid');
	}

	getConfigFormItem(configParamName)
	{
		let formItem = $(`#${this._mainContainerId}`).find(`#form-item-${$.escapeSelector(configParamName)}`);

		if (formItem.length > 0)
			return formItem[0];
		else
			return null;
	}

	activateFirstTabPanel()
	{
		let configParam = this._configParams[0];
		const tabPaneId = this.TAB_PANE_PREFIX + configParam.categoryId;
		let tabPane = $(`#${this._mainContainerId} > #tabPanels > #${tabPaneId}`);
		tabPane.addClass('show active');
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/utils/uibuilder/configuration-parameter.js":
/*!********************************************************!*\
  !*** ./src/utils/uibuilder/configuration-parameter.js ***!
  \********************************************************/
/*! exports provided: ConfigurationParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationParameter", function() { return ConfigurationParameter; });
class ConfigurationParameter
{
	static fromSfsObject(element)
	{
		let cp = new ConfigurationParameter();

		// Parse common data
		cp.name = element.getUtfString('name');
		cp.label = element.getUtfString('label');
		cp.category = element.getUtfString('category');
		cp.tooltip = element.getUtfString('tooltip');
		cp.type = element.getUtfString('type');
		cp.value = element.get('value');
		cp.validator = element.getUtfString('validator');
		cp.editable = (element.containsKey('edit') ? element.getBool('edit') : true);
		cp.trigger = (element.containsKey('trigger') ? element.getBool('trigger') : false);
		cp.triggerData = element.getSFSArray('triggerData');
		cp.clientOnly = (element.containsKey('clientOnly') ? element.getBool('clientOnly') : false);
		cp.dataProvider = element.getUtfString('dataProvider');

		// Parse component specific attributes
		let tmpAttributes = element.getSFSObject('attributes');
		if (tmpAttributes != null)
		{
			let attributes = {};

			let keys = tmpAttributes.getKeysArray();
			for (let key of keys)
				attributes[key] = tmpAttributes.get(key);

			cp.attributes = attributes;
		}

		// Parse separator settings
		let tmpSeparator = element.getSFSObject('separator');
		if (tmpSeparator != null)
		{
			let separator = {};

			let keys1 = tmpSeparator.getKeysArray();
			for (let key1 of keys1)
				separator[key1] = tmpSeparator.get(key1);

			cp.separator = separator;
		}

		// Parse default list item
		let tmpDefaultListItem = element.getSFSArray('defaultListItem');
		if (tmpDefaultListItem != null && tmpDefaultListItem.size() > 0)
		{
			let defaultListItem = [];

			for (let i = 0; i < tmpDefaultListItem.size(); i++)
				defaultListItem.push(ConfigurationParameter.fromSfsObject(tmpDefaultListItem.getSFSObject(i)));

			cp.defaultListItem = defaultListItem;

			// Parse list values
			let listValues = [];

			let tmpListValues = element.getSFSArray('listValues');
			if (tmpListValues != null && tmpListValues.size() > 0)
			{
				for (let v = 0; v < tmpListValues.size(); v++)
				{
					let listValueObj = tmpListValues.getSFSObject(v);
					let obj = {};

					let keys2 = listValueObj.getKeysArray();
					for (let key2 of keys2)
						obj[key2] = listValueObj.get(key2);

					listValues.push(obj);
				}
			}

			cp.listValues = listValues;

			// If we have a list, on the server-side items could be represented by a class
			cp.clazz = element.getUtfString('clazz');

			// Avoid list to be emptied
			cp.denyEmpty = (element.containsKey('denyEmpty') ? element.getBool('denyEmpty') : false);
		}

		return cp;
	}

	constructor()
	{
		/* CONSTANTS */
		this.DEFAULT_CATEGORY_NAME = 'General';
		this.DEFAULT_CATEGORY_ID = 'general';

		/* PUBLIC VARS */

		this.name = '';
		this.label = '';
		this.tooltip = '';
		this.type = null;
		this.trigger = false;
		this.triggerData = null;
		this.clientOnly = false;
		this.editable = true;
		this.attributes = null;
		this.dataProvider = null;

		this.separator = null;			// Parameter used to create a separator before or after the config parameter
		this.defaultListItem = null;	// List of sub-ConfigurationParameters, each containing the default values
		this.clazz = null;				// Name of the class representing the list item (not used in case of primiteve data types)
		this.denyEmpty = false;			// Disallow to empty a list (DataGrid config parameter type only)

		/* PRIVATE VARS */

		this._category = this.DEFAULT_CATEGORY_NAME;
		this._categoryId = this.DEFAULT_CATEGORY_ID;
		this._value = null;
		this._initialValue = null;		// Save the initial value of the configuration parameter, to check if the value was modified
		this._validator = null;

		this._listItems = [];			// Array of arrays of ConfigurationParameters
		this._listItemsChanged = false;	// Flag to be set in case a list item is added or removed
	}

	//---------------------------------------------
	// GETTERS / SETTERS
	//---------------------------------------------

	set category(val)
	{
		if (val)
		{
			this._category = val;
			this._setIdFromCategoryName(this._category);
		}
	}

	get category()
	{
		return this._category;
	}

	set value(val)
	{
		if (this._value != val)
		{
			// If value is null, then we are setting this for the first time and
			// we want to save the initial value, to check later if it has been modified
			if (this._value == null)
				this._initialValue = val;

			this._value = val;
		}
	}

	get value()
	{
		return this._value;
	}

	set validator(val)
	{
		if (val)
			this._validator = val;
	}

	get validator()
	{
		return this._validator;
	}

	/**
	 * An array of objects; each object contains the name-value pairs used to
	 * populate the list of sub-configuration parameters arrays, based on defaultListItem.
	 */
	set listValues(arr)
	{
		this._setSubConfigurationParams(arr);
	}

	get listValues()
	{
		return this._getSubConfigurationParamsValues();
	}

	//---------------------------------------------
	// GETTERS ONLY
	//---------------------------------------------

	get isModified()
	{
		let _isModified = false;

		// If the parameter is used on the client only (for example in a custom trigger)
		// then we never have to consider it as modified, to prevent it being sent to the server
		if (!this.clientOnly)
		{
			if (this._value != this._initialValue || this._listItemsChanged)
				_isModified = true;
			else
			{
				// Check sub parameters
				outerLoop: for (let listItem of this._listItems)
				{
					for (let subCP of listItem)
					{
						if (subCP.isModified)
						{
							_isModified = true;
							break outerLoop;
						}
					}
				}
			}
		}

		return _isModified;
	}

	get categoryId()
	{
		return this._categoryId;
	}

	get listItems()
	{
		return this._listItems;
	}

	//---------------------------------------------
	// PUBLIC METHODS
	//---------------------------------------------

	/**
	 * Return a clone of this ConfigurationParameter.
	 */
	clone(cloneValue = false)
	{
		let cp = new ConfigurationParameter();
		cp.name = this.name;
		cp.label = this.label;
		cp.category = this.category;
		cp.tooltip = this.tooltip;
		cp.type = this.type;
		cp.validator = this.validator;
		cp.trigger = this.trigger;
		cp.triggerData = (this.triggerData != null ? SFS2X.SFSArray.newFromBinaryData(this.triggerData.toBinary()) : null);
		cp.clientOnly = this.clientOnly;
		cp.dataProvider = this.dataProvider;

		if (cloneValue)
			cp.value = this.value;

		if (this.attributes != null)
		{
			cp.attributes = new Object();
			for (let s1 in this.attributes)
				cp.attributes[s1] = this.attributes[s1];
		}

		if (this.separator != null)
		{
			cp.separator = new Object()
			for (let s2 in this.separator)
				cp.separator[s2] = this.separator[s2];
		}

		if (this.defaultListItem != null)
		{
			let clonedDefaultListItems = [];

			for (let subCP of this.defaultListItem)
				clonedDefaultListItems.push(subCP.clone(cloneValue));

			cp.defaultListItem = clonedDefaultListItems;
		}

		cp.listValues = this.listValues; // No need to clone this, as the listValues setter already does it
		cp.clazz = this.clazz;
		cp.denyEmpty = this.denyEmpty;

		return cp;
	}

	/**
	 * Reset initial value by copying the current value.
	 */
	resetIsModified()
	{
		this._initialValue = this._value;

		// Reset sub-parameters
		if (this._listItems != null)
		{
			for (let listItem of this._listItems)
			{
				for (let subCP of listItem)
					subCP.resetIsModified();
			}
		}

		this._listItemsChanged = false;
	}

	addListItem(newListItem)
	{
		this._listItems.push(newListItem);
		this._listItemsChanged = true;
	}

	updateListItem(listItem, itemIndex)
	{
		this._listItems[itemIndex] = listItem;
		this._listItemsChanged = true;
	}

	removeListItem(itemIndex)
	{
		this._listItems.splice(itemIndex, 1);
		this._listItemsChanged = true;
	}

	toSfsObject()
	{
		let obj = new SFS2X.SFSObject();

		// Set changed setting name
		obj.putUtfString('name', this.name);

		// Set changed setting class, if any
		if (this.clazz != null)
			obj.putUtfString('clazz', this.clazz);

		if (this.value != null)
		{
			// Set changed setting value
			if (typeof this.value === 'boolean')
				obj.putBool('value', this.value);
			else if (typeof this.value === 'number')
				obj.putInt('value', this.value);
			else
				obj.putText('value', this.value);
		}
		else
		{
			// Set changed setting list of values

			let listItems = new SFS2X.SFSArray();

			for (let a of this._listItems)
			{
				if (a.length == 1) // We have just one sub config param; no need to parse it complitely
				{
					// Simple list
					let tempObj = a[0].toSfsObject();
					let wa = tempObj.getWrappedItem('value');
					listItems.add(wa.value, wa.type);
				}
				else
				{
					// Complex list

					let values = new SFS2X.SFSArray();

					for (let subCp of a)
						values.addSFSObject(subCp.toSfsObject());

					listItems.addSFSArray(values);
				}
			}

			obj.putSFSArray('value', listItems);
		}

		return obj;
	}

	/**
	 * Return a description of the ConfigurationParameter instance.
	 */
	toString()
	{
		let s = ``;
		s += `Configuration parameter: ${this.name}\n`;
		s += `\ttype: ${this.type}\n`;
		s += `\tlabel: ${this.label}\n`;
		s += `\tcategory name: ${this.category}\n`;
		s += `\tcategory id: ${this.categoryId}\n`;
		s += `\ttooltip: ${this.tooltip}\n`;
		s += `\tvalue: ${this.value}\n`;
		s += `\ttrigger: ${this.trigger}\n`;
		s += `\ttrigger data: ${this.triggerData}\n`;
		s += `\tclient only: ${this.clientOnly}\n`;
		s += `\tvalidator: ${this.validator}\n`;
		s += `\tis modified: ${this.isModified}\n`;

		if (this.attributes != null)
		{
			s += `\tcomponent attributes:\n`;

			for (let s1 in this.attributes)
				s += `\t\t${s1} --> ${this.attributes[s1]}\n`;
		}

		if (this.dataProvider != null)
			s += `\tdata provider: ${this.dataProvider}\n`;

		if (this.separator != null)
		{
			s += `\tseparator:\n`;

			for (let s2 in this.separator)
				s += `\t\t${s2} --> ${this.separator[s2]}\n`;
		}

		if (this._listItems != null && this._listItems.length > 0)
		{
			s += `\t# list items: ${this._listItems.length}\n`;

			for (let i = 0; i < this._listItems.length; i++)
			{
				s += `\tlist item ${i} sub-parameters:\n`;
				for (let e = 0; e < this._listItems[i].length; e++)
					s += `\t\t${this._listItems[i][e].toCompactString()}\n`;
			}

			s += `\tclass name: ${this.clazz}\n`;
			s += `\tdeny empty list: ${this.denyEmpty}\n`;
		}

		return s;
	}

	/**
	 * Return a compact description of the ConfigurationParameter instance.
	 */
	toCompactString()
	{
		return `Configuration parameter '${this.name}': ${this.value} ${this.isModified ? '[X]' : '[ ]'}`;
	}

	//---------------------------------------------
	// PRIVATE METHODS
	//---------------------------------------------

	/**
	 * Retrieve the category id form the category name.
	 * Spaces and invalid characters are removed; words are separated using capitals.
	 */
	_setIdFromCategoryName(categoryName)
	{
		this._categoryId = categoryName;

		// Strip invalid characters
		var pattern = /[^0-9a-zA-Z]/g;
		this._categoryId = this._categoryId.replace(pattern, ' ');

		// Capitalize words
		var words = this._categoryId.split(' ');
		this._categoryId = '';

		for (let i = 0; i < words.length; i++)
		{
			let word = words[i];
			if (word.length > 0)
				this._categoryId += (i > 0 ? word.substr(0,1).toUpperCase() : word.substr(0,1).toLowerCase()) + (word.length > 1 ? word.substr(1) : "");
		}

		if (this._categoryId.length == 0)
			this._categoryId = this.DEFAULT_CATEGORY_ID;
	}

	_setSubConfigurationParams(_listValues)
	{
		this._listItems = [];

		for (let obj of _listValues)
		{
			let listItem = [];

			for (let defaultCP of this.defaultListItem)
			{
				let subCP = defaultCP.clone(false);
				subCP.value = obj[subCP.name];

				listItem.push(subCP);
			}

			this._listItems.push(listItem);
		}
	}

	_getSubConfigurationParamsValues()
	{
		let _listValues = [];

		for (let listItem of this._listItems)
		{
			let obj = {};

			for (let subCP of listItem)
			{
				if (subCP.value != null)
					obj[subCP.name] = subCP.value;
			}

			_listValues.push(obj);
		}

		return _listValues;
	}
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvcmUvbW9kdWxlcy9tb2R1bGUtMTJ+bW9kdWxlLTE1fm1vZHVsZS0xNn5tb2R1bGUtNC5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctY2hlY2stYm94LmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1kcm9wLWRvd24tbGlzdC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctZHVhbC1saXN0LmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLWdyaWQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLWxhYmVsLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1udW1lcmljLXN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLXRleHQtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLXZlY3Rvci0zZC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci93aWRnZXRzL2xpc3QtaXRlbS1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvd2lkZ2V0cy92ZWN0b3ItM2QtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvdXRpbHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy91dGlscy91aWJ1aWxkZXIvY29uZmlnLWludGVyZmFjZS1idWlsZGVyLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL3V0aWxzL3VpYnVpbGRlci9jb25maWd1cmF0aW9uLXBhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmZpZ0Zvcm1JdGVtfSBmcm9tICcuL2NvbmZpZy1mb3JtLWl0ZW0nO1xuaW1wb3J0IHtDb25maWdMYWJlbH0gZnJvbSAnLi9jb25maWctbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ2hlY2tCb3ggZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdFx0bGV0IGNvbmZpZyA9IHtcblx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0Y2xhc3M6ICcnLFxuXHRcdFx0XHRpZDogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHRuYW1lOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdCdkYXRhLXJvbGUnOiAnc3dpdGNoJyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKTtcblxuXHRcdFx0Ly8gU2V0IGFkZGl0aW9uYWwgd2lkZ2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gdmFsaWRhdGlvbiBydWxlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHdpZGdldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuICAgX2luaXRpYWxpemUoKVxuICAge1xuXHQgICBpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0ICAge1xuXHRcdCAgIC8vIEluaXRpYWxpemUga2VuZG8gd2lkZ2V0XG5cdFx0ICAga2VuZG8uaW5pdCh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdCAgIC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHQgICB0aGlzLl9pbm5lcldpZGdldCA9IHRoaXMuX3dpZGdldEh0bWwuZGF0YSgna2VuZG9Td2l0Y2gnKTtcblxuXHRcdCAgIC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdCAgIHRoaXMuX2lubmVyV2lkZ2V0LmJpbmQoJ2NoYW5nZScsICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSk7XG5cdCAgIH1cblxuXHQgICAvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0ICAgc3VwZXIuX2luaXRpYWxpemUoKTtcbiAgIH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCB0aGUgbGFiZWwgdGV4dCBpcyBzZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQudmFsdWUodGhpcy5fZGF0YS52YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC52YWx1ZSA9IHRoaXMuX2RhdGEudmFsdWU7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIGRpc2FibGVkIHN0YXRlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHRcdHRoaXMuX2lubmVyV2lkZ2V0LmVuYWJsZSh0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5faW5uZXJXaWRnZXQudmFsdWUoKTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy1jaGVjay1ib3gnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWNoZWNrLWJveCcsIENvbmZpZ0NoZWNrQm94KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEcm9wRG93bkxpc3QgZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdFx0bGV0IGNvbmZpZyA9IHtcblx0XHRcdFx0Y2xhc3M6ICdmb3JtLWNvbnRyb2wnLFxuXHRcdFx0XHRpZDogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHRuYW1lOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdCdkYXRhLXJvbGUnOiAnZHJvcGRvd25saXN0Jyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKTtcblxuXHRcdFx0Ly8gU2V0IGFkZGl0aW9uYWwgd2lkZ2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gdmFsaWRhdGlvbiBydWxlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHdpZGdldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuICAgX2luaXRpYWxpemUoKVxuICAge1xuXHQgICBpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0ICAge1xuXHRcdCAgIC8vIEluaXRpYWxpemUga2VuZG8gd2lkZ2V0XG5cdFx0ICAga2VuZG8uaW5pdCh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdCAgIC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHQgICB0aGlzLl9pbm5lcldpZGdldCA9IHRoaXMuX3dpZGdldEh0bWwuZGF0YSgna2VuZG9Ecm9wRG93bkxpc3QnKTtcblxuXHRcdCAgIC8vIFNldCBsaXN0IGl0ZW1zXG5cdFx0ICAgdGhpcy5faW5uZXJXaWRnZXQuc2V0RGF0YVNvdXJjZSh0aGlzLl9nZXREYXRhU291cmNlKHRoaXMuX2RhdGEuZGF0YVByb3ZpZGVyKSlcblxuXHRcdCAgIC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdCAgIHRoaXMuX3dpZGdldEh0bWwuYmluZCgnY2hhbmdlJywgJC5wcm94eSh0aGlzLl9vblZhbHVlSW5wdXQsIHRoaXMpKTtcblx0ICAgfVxuXG5cdCAgIC8vIFByb2NlZWQgd2l0aCBpbml0aWFsaXphdGlvblxuXHQgICBzdXBlci5faW5pdGlhbGl6ZSgpO1xuICAgfVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIHRoZSBsYWJlbCB0ZXh0IGlzIHNldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0VmFsdWUoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0XHR0aGlzLl9pbm5lcldpZGdldC52YWx1ZSh0aGlzLl9kYXRhLnZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLnZhbHVlID0gdGhpcy5fZGF0YS52YWx1ZTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQud3JhcHBlci5hdHRyKCdkaXNhYmxlZCcsICF0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5faW5uZXJXaWRnZXQudmFsdWUoKTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdF9nZXREYXRhU291cmNlKGRwU3RyaW5nKVxuXHR7XG5cdFx0aWYgKGRwU3RyaW5nKVxuXHRcdFx0cmV0dXJuIGRwU3RyaW5nLnNwbGl0KCcsJyk7XG5cblx0XHQvLyBJbiBjYXNlIHRoZSBkYXRhcHJvdmlkZXIgaXMgZW1wdHksIGFkZCBhdCBsZWFzdCB0aGUgY3VycmVudCB2YWx1ZVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbdGhpcy5fZGF0YS52YWx1ZV07XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctZHJvcC1kb3duLWxpc3QnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWRyb3AtZG93bi1saXN0JywgQ29uZmlnRHJvcERvd25MaXN0KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEdWFsTGlzdCBleHRlbmRzIENvbmZpZ0Zvcm1JdGVtXG57XG5cdGNvbnN0cnVjdG9yKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpXG5cdHtcblx0ICAgIHN1cGVyKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB3aWRnZXQgdG8gcmVuZGVyIHRoZSBDb25maWdQYXJhbWV0ZXIuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X2dlbmVyYXRlSW5uZXJXaWRnZXQoKVxuXHR7XG5cdFx0dGhpcy5fd2lkZ2V0SHRtbCA9ICQoJzxkaXY+Jyk7XG5cblx0XHRjb25zdCBhdmFpbGFibGVJZCA9IHRoaXMuX2dldElkKHRoaXMuX2RhdGEubmFtZSwgJ2F2YWlsYWJsZScpO1xuXHRcdGNvbnN0IHNlbGVjdGVkSWQgPSB0aGlzLl9nZXRJZCh0aGlzLl9kYXRhLm5hbWUsICdzZWxlY3RlZCcpO1xuXG5cdFx0Ly8gQ3JlYXRlIGhlYWRlciBmb3IgbGFiZWxzXG5cdFx0bGV0IGhlYWRlciA9ICQoJzxkaXY+Jywge2NsYXNzOiAnZm9ybS1sYWJlbC1jb250YWluZXIgZHVhbC1saXN0LWxhYmVscyd9KTtcblxuXHRcdGhlYWRlci5hcHBlbmQoJCgnPGxhYmVsPicsIHtcblx0XHRcdGNsYXNzOiAnZm9udC1pdGFsaWMgZm9ybS1sYWJlbCBkdWFsLWxpc3QtbGVmdC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0XHRmb3I6IGF2YWlsYWJsZUlkLFxuXHRcdH0pLnRleHQoJ0F2YWlsYWJsZScpKTtcblxuXHRcdGhlYWRlci5hcHBlbmQoJCgnPGxhYmVsPicsIHtcblx0XHRcdGNsYXNzOiAnZm9udC1pdGFsaWMgZm9udC13ZWlnaHQtYm9sZCBmb3JtLWxhYmVsIGR1YWwtbGlzdC1yaWdodC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0XHRmb3I6IHNlbGVjdGVkSWQsXG5cdFx0fSkudGV4dCgnU2VsZWN0ZWQnKSk7XG5cblx0XHR0aGlzLl93aWRnZXRIdG1sLmFwcGVuZChoZWFkZXIpO1xuXG5cdFx0Ly8gQWRkIGF2YWlsYWJsZSBpdGVtcyBsaXN0XG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdEh0bWwgPSAkKCc8c2VsZWN0PicsIHtcblx0XHRcdGlkOiBhdmFpbGFibGVJZCxcblx0XHRcdGNsYXNzOiAnZHVhbC1saXN0LWxlZnQtY29sJyArICghdGhpcy5fZGF0YS5lZGl0YWJsZSA/ICcgbm8taW50ZXJhY3QnIDogJycpLFxuXHRcdH0pO1xuXHRcdHRoaXMuX3dpZGdldEh0bWwuYXBwZW5kKHRoaXMuX2F2YWlsYWJsZUxpc3RIdG1sKTtcblxuXHRcdC8vIEFkZCBzZWxlY3RlZCBpdGVtcyBsaXN0XG5cdFx0dGhpcy5fc2VsZWN0ZWRMaXN0SHRtbCA9ICQoJzxzZWxlY3Q+Jywge1xuXHRcdFx0aWQ6IHNlbGVjdGVkSWQsXG5cdFx0XHRjbGFzczogJ2R1YWwtbGlzdC1yaWdodC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0fSk7XG5cdFx0dGhpcy5fd2lkZ2V0SHRtbC5hcHBlbmQodGhpcy5fc2VsZWN0ZWRMaXN0SHRtbCk7XG5cblx0XHQvLyBSZXR1cm4gY29tcG9uZW50XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldEh0bWw7XG5cdH1cblxuXHQvLyBJRHMgY29udGFpbmluZyBhIFwiLlwiIGNhdXNlIGlzc3VlcyB0byBjb25uZWN0ZWQgbGlzdHNcblx0X2dldElkKG5hbWUsIHN1ZmZpeClcblx0e1xuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoJy4nLCAnXycpICsgJy0nICsgc3VmZml4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgd2lkZ2V0LlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9pbml0aWFsaXplKClcblx0e1xuXHRcdC8vIEluaXRpYWxpemUgXCJhdmFsYWJsZVwiIGxpc3Rib3hcblx0XHR0aGlzLl9hdmFpbGFibGVMaXN0ID0gdGhpcy5fYXZhaWxhYmxlTGlzdEh0bWwua2VuZG9MaXN0Qm94KHtcbiAgICAgICAgICAgIGNvbm5lY3RXaXRoOiB0aGlzLl9nZXRJZCh0aGlzLl9kYXRhLm5hbWUsICdzZWxlY3RlZCcpLFxuICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgIHRvb2xzOiB0aGlzLl9kYXRhLmVkaXRhYmxlID8gWyd0cmFuc2ZlclRvJywgJ3RyYW5zZmVyRnJvbScsICd0cmFuc2ZlckFsbFRvJywgJ3RyYW5zZmVyQWxsRnJvbSddIDogW11cbiAgICAgICAgICAgIH0sXG5cdFx0XHR0ZW1wbGF0ZTogXCI8ZGl2PiM6dmFsdWUjPC9kaXY+XCIsXG5cdFx0XHRzZWxlY3RhYmxlOiAnbXVsdGlwbGUnLFxuICAgICAgICB9KS5kYXRhKCdrZW5kb0xpc3RCb3gnKTtcblxuXHRcdC8vIEluaXRpYWxpemUgXCJzZWxlY3RlZFwiIGxpc3Rib3hcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRMaXN0ID0gdGhpcy5fc2VsZWN0ZWRMaXN0SHRtbC5rZW5kb0xpc3RCb3goe1xuXHRcdFx0dGVtcGxhdGU6IFwiPGRpdj4jOnZhbHVlIzwvZGl2PlwiLFxuXHRcdFx0c2VsZWN0YWJsZTogJ211bHRpcGxlJyxcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgbGlzdGVuZXJzIGNhbid0IGJlIHVzZWQgYmVjYXVzZSBldmVudHMgYXJlIGZpcmVkIGJlZm9yZSB0aGUgZGF0YXNvdXJjZSBpcyBhY3R1YWxseSB1cGRhdGVkXG5cdFx0XHQvLyBXZSBoYXZlIHRvIHVzZSBhIGNoYW5nZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgZGF0YXNvdXJjZSAoc2VlIGJlbG93KSwgZXZlbiBpZiBub3Qgb3B0aW1hbFxuXHRcdFx0Ly9hZGQ6ICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSxcblx0XHRcdC8vcmVtb3ZlOiAkLnByb3h5KHRoaXMuX29uVmFsdWVJbnB1dCwgdGhpcyksXG5cdFx0fSkuZGF0YSgna2VuZG9MaXN0Qm94Jyk7XG5cblx0XHQvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlci5faW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkYXRhc291cmNlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRWYWx1ZSgpXG5cdHtcblx0XHRsZXQgYXZhaWxhYmxlQXJyID0gdGhpcy5fZGF0YS5kYXRhUHJvdmlkZXIgIT0gJycgPyB0aGlzLl9kYXRhLmRhdGFQcm92aWRlci5zcGxpdCgnLCcpIDogW107XG5cdFx0bGV0IHNlbGVjdGVkQXJyID0gdGhpcy5fZGF0YS52YWx1ZSAhPSAnJyA/IHRoaXMuX2RhdGEudmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuXG5cdFx0Ly8gUmVtb3ZlIHNlbGVjdGVkIHZhbHVlcyBmcm9tIGF2YWlsYWJsZSB2YWx1ZXNcblx0XHRpZiAoc2VsZWN0ZWRBcnIubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRsZXQgdGVtcCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCB2YWwgb2YgYXZhaWxhYmxlQXJyKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRBcnIuaW5kZXhPZih2YWwpID09IC0xKVxuXHRcdFx0XHRcdHRlbXAucHVzaCh2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRhdmFpbGFibGVBcnIgPSB0ZW1wO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgbGlzdHMgb2Ygc3RyaW5ncyB0byBsaXN0cyBvZiBvYmplY3RzXG5cdFx0bGV0IGF2YWlsYWJsZVZhbHVlcyA9IFtdO1xuXHRcdGZvciAobGV0IHZhbCBvZiBhdmFpbGFibGVBcnIpXG5cdFx0XHRhdmFpbGFibGVWYWx1ZXMucHVzaCh7dmFsdWU6IHZhbH0pO1xuXG5cdFx0bGV0IHNlbGVjdGVkVmFsdWVzID0gW107XG5cdFx0Zm9yIChsZXQgdmFsIG9mIHNlbGVjdGVkQXJyKVxuXHRcdFx0c2VsZWN0ZWRWYWx1ZXMucHVzaCh7dmFsdWU6IHZhbH0pO1xuXG5cdFx0Ly8gQ2xlYXIgc2VsZWN0aW9uXG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXHRcdHRoaXMuX3NlbGVjdGVkTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXG5cdFx0Ly8gU2V0IGRhdGFzb3VyY2VzXG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5zZXREYXRhU291cmNlKG5ldyBrZW5kby5kYXRhLkRhdGFTb3VyY2Uoe1xuXHRcdFx0ZGF0YTogYXZhaWxhYmxlVmFsdWVzXG5cdFx0fSkpO1xuXG5cdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LnNldERhdGFTb3VyY2UobmV3IGtlbmRvLmRhdGEuRGF0YVNvdXJjZSh7XG5cdFx0XHRkYXRhOiBzZWxlY3RlZFZhbHVlcyxcblx0XHRcdC8vIFdlIGxpc3RlbiB0byB0aGUgY2hhbmdlIGV2ZW50IGluc3RlYWQgb2YgdGhlIGFkZC9yZW1vdmUgZXZlbnRzIG9uIHRoZSBsaXN0Ym94LCBiZWNhdXNlIHRob3NlIGFyZSBmaXJlZCBiZWZvcmUgdGhlIGRhdGFzb3VyY2UgaXMgdXBkYXRlZFxuXHRcdFx0Ly8gVGhpcyBpcyBub3Qgb3B0aW1hbCBiZWNhdXNlIHRoZSBldmVudCBpcyBmaXJlZCBmb3IgZWFjaCBpdGVtIGFkZGVkIHRvIG9yIHJlbW92ZWQgZnJvbSB0aGUgZGF0YXNvdXJjZVxuXHRcdFx0Y2hhbmdlOiAkLnByb3h5KHRoaXMuX29uVmFsdWVJbnB1dCwgdGhpcylcblx0XHR9KSk7XG5cblx0XHQvLyBEaXNhYmxlIGVkaXRpbmdcblx0XHRpZiAoIXRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5lbmFibGUoJy5rLWl0ZW0nLCBmYWxzZSk7XG5cdFx0XHR0aGlzLl9zZWxlY3RlZExpc3QuZW5hYmxlKCcuay1pdGVtJywgZmFsc2UpO1xuXHRcdH1cblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIENsZWFyIHNlbGVjdGlvblxuXHRcdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXHRcdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG5cblx0XHRcdC8vIEVuYWJsZS9kaXNhYmxlIGxpc3RzXG5cdFx0XHR0aGlzLl9hdmFpbGFibGVMaXN0LndyYXBwZXIuYXR0cignZGlzYWJsZWQnLCAhdGhpcy5fZWRpdEVuYWJsZWQpO1xuXHRcdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LndyYXBwZXIuYXR0cignZGlzYWJsZWQnLCAhdGhpcy5fZWRpdEVuYWJsZWQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgQ29uZmlndXJhdGlvbiBQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uVmFsdWVJbnB1dChlKVxuXHR7XG5cdFx0bGV0IGxpc3REYXRhID0gdGhpcy5fc2VsZWN0ZWRMaXN0LmRhdGFTb3VyY2UuZGF0YSgpO1xuXG5cdFx0Ly8gVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHRvIG5ldyB2YWx1ZVxuXHRcdHRoaXMuX2RhdGEudmFsdWUgPSBsaXN0RGF0YS5tYXAoZSA9PiBlLnZhbHVlKS5qb2luKCcsJyk7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctZHVhbC1saXN0JykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbmZpZy1kdWFsLWxpc3QnLCBDb25maWdEdWFsTGlzdCk7XG4iLCJleHBvcnQgY2xhc3MgQ29uZmlnRm9ybUl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudFxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5pZCA9ICdmb3JtLWl0ZW0tJyArIGNvbmZpZ1BhcmFtLm5hbWU7XG5cdFx0dGhpcy5fZWRpdEVuYWJsZWQgPSBlZGl0RW5hYmxlZDtcblx0XHR0aGlzLl9kYXRhID0gY29uZmlnUGFyYW07XG5cblx0XHQvLyBDcmVhdGUgZm9ybSBpdGVtIHZpZXdcblx0XHR0aGlzLl9idWlsZFZpZXcoaW5EaWFsb2cpO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBmb3JtIGl0ZW1cblx0XHR0aGlzLl9pbml0aWFsaXplKCk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpXG5cdHtcblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0Ly8gTk9URTogd2hlbiBhIENvbmZpZ0Zvcm1JdGVtIGlzIGluc3RhbnRpYXRlZCwgdGhlIF90cmlnZ2VyRXZlbnQgbWV0aG9kIGlzIGNhbGxlZCBhcyBzb29uIGFzIGl0cyB2YWx1ZSBpcyBzZXQuXG5cdFx0Ly8gV2hlbiB0aGlzIGhhcHBlbnNvLCBkdWUgdG8gdGhlIGZhY3QgdGhhdCB0aGUgb2JqZWN0IGlzIG5vdCB5ZXQgaW4gdGhlIERPTSwgdGhlIGV2ZW50IGlzIG5vdCBjYXRjaGVkIGJ5IHRoZSBsaXN0ZW5lclxuXHRcdC8vICh3aGljaCBpcyBhdHRhY2hlZCB0byB0aGUgb3V0ZXIgY29udGFpbmVyKS4gU28gZm9yY2luZyB0aGUgZXZlbnQgdG8gdHJpZ2dlciBhZ2FpbiBhcyBzb29uIGFzIHRoZSBDb25maWdGb3JtSXRlbVxuXHRcdC8vIGlzIGFwcGVuZGVkIHRvIHRoZSBET00gaXMgbmVlZGVkLlxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG5cblx0c2V0IGRhdGEoY29uZmlnUGFyYW0pXG5cdHtcblx0XHR0aGlzLl9kYXRhID0gY29uZmlnUGFyYW07XG5cdFx0dGhpcy5fc2V0V2lkZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGdldCBkYXRhKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xuXHR9XG5cblx0c2V0IGVkaXRFbmFibGVkKGVuYWJsZSlcblx0e1xuXHRcdGlmIChlbmFibGUgIT0gdGhpcy5fZWRpdEVuYWJsZWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5fZWRpdEVuYWJsZWQgPSBlbmFibGU7XG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBlZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fZWRpdEVuYWJsZWQ7XG5cdH1cblxuXHRfYnVpbGRWaWV3KGlzSW5zaWRlRGlhbG9nKVxuXHR7XG5cdFx0aWYgKCFpc0luc2lkZURpYWxvZylcblx0XHR7XG5cdFx0XHQvLyBTZXQgYWRkaXRpb25hbCBjbGFzc2VzIGZvciBpbm5lciB3aWRnZXRcblx0XHRcdGxldCBjbGFzc05hbWVzID0gJyc7XG5cblx0XHRcdHN3aXRjaCAodGhpcy5fZGF0YS50eXBlKVxuXHRcdFx0e1xuXHRcdFx0XHRjYXNlICdEdWFsTGlzdCc6XG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9ICdjb2wtc20tNyBjb2wtbGctOCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0RhdGFHcmlkJzpcblx0XHRcdFx0XHRjbGFzc05hbWVzID0gJ2NvbC1zbSc7IC8vIFVzZSAnY29sLXNtLTcgY29sLWxnLTgnIGZvciBEYXRhR3JpZCB0b28/XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ1RleHRJbnB1dCc6XG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9ICdjb2wtc20gY29sLWxnLTUgY29sLXhsLTQnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGNsYXNzTmFtZXMgPSAnY29sLXNtLWF1dG8nO1xuXG5cdFx0XHR9XG5cblx0XHRcdC8vIEdlbmVyYXRlIGJvaWxlcnBsYXRlIGh0bWwsIHN1cnJvdW5kaW5nIHRoZSBhY3R1YWwgd2lkZ2V0IChsYWJlbCwgbnVtZXJpYyBzdGVwcGVyLCBldGMpXG5cdFx0XHR0aGlzLmlubmVySFRNTCA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmUgcm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS01IGNvbC1sZy00IGNvbC1mb3JtLWxhYmVsIGZvcm0tbGFiZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiJHt0aGlzLl9kYXRhLm5hbWV9XCIgY2xhc3M9XCJmb3JtLWxhYmVsICR7KHRoaXMuX2RhdGEuY2xpZW50T25seSA/ICdjbGllbnQtb25seScgOiAnJyl9XCI+JHt0aGlzLl9kYXRhLmxhYmVsfSA8aSBjbGFzcz1cImZhcyBmYS1xdWVzdGlvbi1jaXJjbGUgdGV4dC1tdXRlZCBoZWxwXCIgdGl0bGU9XCIke3RoaXMuX2RhdGEudG9vbHRpcH1cIj48L2k+PC9sYWJlbD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5uZXItd2lkZ2V0IGFsaWduLXNlbGYtY2VudGVyICR7Y2xhc3NOYW1lc31cIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiay1pbnZhbGlkLW1zZ1wiIGRhdGEtZm9yPVwiJHt0aGlzLl9kYXRhLm5hbWV9XCI+PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHR0aGlzLmlubmVySFRNTCA9IGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgZm9ybS1sYWJlbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCIke3RoaXMuX2RhdGEubmFtZX1cIiBjbGFzcz1cImZvcm0tbGFiZWwgJHsodGhpcy5fZGF0YS5jbGllbnRPbmx5ID8gJ2NsaWVudC1vbmx5JyA6ICcnKX1cIj4ke3RoaXMuX2RhdGEubGFiZWx9IDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIiR7dGhpcy5fZGF0YS50b29sdGlwfVwiPjwvaT48L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbm5lci13aWRnZXRcIj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiay1pbnZhbGlkLW1zZ1wiIGRhdGEtZm9yPVwiJHt0aGlzLl9kYXRhLm5hbWV9XCI+PC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdGA7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIGlubmVyIHdpZGdldCAobXVzdCBiZSBvdmVycmlkZGVuKVxuXHRcdGxldCB3aWRnZXQgPSB0aGlzLl9nZW5lcmF0ZUlubmVyV2lkZ2V0KCk7XG5cblx0XHQvLyBBcHBlbmQgaW5uZXIgd2lkZ2V0XG5cdFx0JCh0aGlzKS5maW5kKCcuaW5uZXItd2lkZ2V0JykucHJlcGVuZCh3aWRnZXQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRPIEJFIE9WRVJSSURERU5cblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdC8vIFNob3cgYW4gZXJyb3IsIHNob3VsZCBiZSBvdmVycmlkZGVuXG5cdFx0Y29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGNyZWF0ZSAke3RoaXMuX2RhdGEudHlwZX0gZm9ybSBpdGVtIGZvciBjb25maWd1cmF0aW9uIHBhcmFtZXRlciAke3RoaXMuaWR9YCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGF0dHJpYnV0ZXMgb24gdGhlIHdpZGdldCBjb25maWd1cmF0aW9uIG9iamVjdC5cblx0ICovXG5cdF9zZXRXaWRnZXRBdHRyaWJ1dGVzKGNvbmZpZylcblx0e1xuXHRcdGNvbnN0IGF0dHJpYnMgPSB0aGlzLl9kYXRhLmF0dHJpYnV0ZXM7XG5cblx0XHRpZiAoYXR0cmlicylcblx0XHR7XG5cdFx0XHRmb3IgKGxldCBhdHRyIGluIGF0dHJpYnMpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbmZpZ1thdHRyXSA9IGF0dHJpYnNbYXR0cl07XG5cblx0XHRcdFx0aWYgKGF0dHIgPT0gJ3BhdHRlcm4nKVxuXHRcdFx0XHRcdGNvbmZpZ1snZGF0YS1wYXR0ZXJuLW1zZyddID0gJ0NvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFNldCBhZGRpdGlvbmFsIGF0dHJpYnV0ZXMgb24gdGhlIHdpZGdldCBjb25maWd1cmF0aW9uIG9iamVjdCB0byBwcm9wZXJseSB2YWxpZGF0ZSBpbnB1dC5cblx0ICovXG5cdF9zZXRXaWRnZXRWYWxpZGF0aW9uQXR0cmlidXRlcyhjb25maWcpXG5cdHtcblx0XHRjb25zdCB2YWwgPSB0aGlzLl9kYXRhLnZhbGlkYXRvcjtcblxuXHRcdGlmICh2YWwgIT0gbnVsbCAmJiB2YWwgIT0gJycpXG5cdFx0e1xuXHRcdFx0aWYgKHZhbCA9PSAnaXAnKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25maWdbJ3BhdHRlcm4nXSA9ICdeKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPykkJztcblx0XHRcdFx0Y29uZmlnWydkYXRhLXBhdHRlcm4tbXNnJ10gPSAnSW52YWxpZCBJUCBhZGRyZXNzJztcblx0XHRcdFx0Y29uZmlnWydyZXF1aXJlZCddID0gdHJ1ZTtcblx0XHRcdFx0Y29uZmlnWydkYXRhLXJlcXVpcmVkLW1zZyddID0gJ1JlcXVpcmVkJztcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSBpZiAodmFsID09ICdub3ROdWxsJylcblx0XHRcdHtcblx0XHRcdFx0Y29uZmlnWydyZXF1aXJlZCddID0gdHJ1ZTtcblx0XHRcdFx0Y29uZmlnWydkYXRhLXJlcXVpcmVkLW1zZyddID0gJ1JlcXVpcmVkJztcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSBpZiAodmFsID09ICdwd2QnKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25maWdbJ3BhdHRlcm4nXSA9ICdeLns2LH0kJztcblx0XHRcdFx0Y29uZmlnWydkYXRhLXBhdHRlcm4tbXNnJ10gPSAnTWluaW11bSBsZW5ndGg6IDYgY2hhcmFjdGVycyc7XG5cdFx0XHR9XG5cblx0XHRcdGVsc2UgaWYgKHZhbCA9PSAncG9zTnVtJylcblx0XHRcdHtcblx0XHRcdFx0Y29uZmlnWydwYXR0ZXJuJ10gPSAnXlswLTldXFxkKiQnO1xuXHRcdFx0XHRjb25maWdbJ2RhdGEtcGF0dGVybi1tc2cnXSA9ICdOb24tbmVnYXRpdmUgbnVtYmVyIHJlcXVpcmVkJztcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSBpZiAodmFsID09ICdhb2knKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBOb3RoaW5nIHRvIGRvXG5cdFx0XHRcdC8vIFNlZSBLZW5kbyB2YWxpZGF0aW9uIGluaXRpYWxpemF0aW9uIGluIGNvbmZpZy1pbnRlcmZhY2UtYnVpbGRlci5qc1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIGlmICh2YWwgPT0gJ3VybCcpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbmZpZ1sndHlwZSddID0gJ3VybCc7XG5cdFx0XHRcdGNvbmZpZ1snZGF0YS11cmwtbXNnJ10gPSAnSW52YWxpZCBVUkwnO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIGZvcm0gaXRlbS5cblx0ICpcblx0ICogTk9URTogbXVzdCBiZSBvdmVycmlkZGVuIGlmIGlubmVyIHdpZGdldCByZXF1aXJlcyBzcGVjaWFsIGluaXRpYWxpemF0aW9uIChmb3IgZXhhbXBsZSBLZW5kbyB3aWRnZXRzKVxuXHQgKi9cblx0X2luaXRpYWxpemUoKVxuXHR7XG5cdFx0Ly8gU2V0IHZhbHVlXG4gXHQgICB0aGlzLl9zZXRXaWRnZXRWYWx1ZSgpO1xuXG4gXHQgICAvLyBTZXQgZWRpdCBlbmFibGVkXG4gXHQgICB0aGlzLl9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRPIEJFIE9WRVJSSURERU5cblx0ICovXG5cdF9zZXRXaWRnZXRWYWx1ZSgpXG5cdHtcblx0XHQvLyBOb3RoaW5nIHRvIGRvLCBtdXN0IGJlIG92ZXJyaWRkZW5cblx0fVxuXG5cdC8qKlxuXHQgKiBUTyBCRSBPVkVSUklEREVOXG5cdCAqL1xuXHRfc2V0V2lkZ2V0RWRpdEVuYWJsZWQoKVxuXHR7XG5cdFx0Ly8gTm90aGluZyB0byBkbywgbXVzdCBiZSBvdmVycmlkZGVuXG5cdH1cblxuXHQvKipcblx0ICogVE8gQkUgT1ZFUlJJRERFTlxuXHQgKi9cblx0X29uVmFsdWVJbnB1dChlKVxuXHR7XG5cdFx0Ly8gTm90aGluZyB0byBkbywgbXVzdCBiZSBvdmVycmlkZGVuXG5cdH1cblxuXHRfdHJpZ2dlckV2ZW50KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLnRyaWdnZXIpXG5cdFx0e1xuXHRcdFx0bGV0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWx1ZS1zZXQnLCB7ZGV0YWlsOiBudWxsLCBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy1mb3JtLWl0ZW0nKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWZvcm0taXRlbScsIENvbmZpZ0Zvcm1JdGVtKTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5pbXBvcnQge0xpc3RJdGVtRWRpdG9yfSBmcm9tICcuL3dpZGdldHMvbGlzdC1pdGVtLWVkaXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdHcmlkIGV4dGVuZHMgQ29uZmlnRm9ybUl0ZW1cbntcblx0Y29uc3RydWN0b3IoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZylcblx0e1xuXHQgICAgc3VwZXIoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHdpZGdldCB0byByZW5kZXIgdGhlIENvbmZpZ1BhcmFtZXRlci5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfZ2VuZXJhdGVJbm5lcldpZGdldCgpXG5cdHtcblx0XHQvLyBDcmVhdGUgbWFpbiB3aWRnZXQncyBodG1sXG5cdFx0dGhpcy5fd2lkZ2V0SHRtbCA9ICQoJzxkaXY+Jywge2NsYXNzOiAnJ30pO1xuXG5cdFx0Ly8gU2V0IGdyaWQgd2lkZ2V0IGNvbmZpZ3VyYXRpb25cblx0XHRsZXQgZ3JpZENvbmZpZyA9IHtcblx0XHRcdGlkOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRuYW1lOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRjbGFzczogJ2xpbWl0ZWQtaGVpZ2h0JyArICghdGhpcy5fZGF0YS5lZGl0YWJsZSA/ICcgbm8taW50ZXJhY3QnIDogJycpXG5cdFx0fTtcblxuXHRcdC8vIEFwcGVuZCBncmlkIHRvIG1haW4gaHRtbDsgZ3JpZCB3aWxsIGJlIGNvbnZlcnRlZCB0byBLZW5kbyB3aWRnZXQgZHVyaW5nIGluaXRpYWxpemF0aW9uXG5cdFx0dGhpcy5fd2lkZ2V0SHRtbC5hcHBlbmQoJCgnPGRpdj4nLCBncmlkQ29uZmlnKSk7XG5cblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHR7XG5cdFx0XHQvLyBCVVRUT05TXG5cblx0XHRcdC8vIENyZWF0ZSBidXR0b25zIGNvbnRhaW5lclxuXHRcdFx0bGV0IGJ1dHRvbnMgPSAkKCc8ZGl2PicsIHtjbGFzczogJ210LTIgdGV4dC1yaWdodCd9KTtcblxuXHRcdFx0Ly8gQXBwZW5kIGJ1dHRvbnMgdG8gY29udGFpbmVyXG5cdFx0XHR0aGlzLl9hZGRCdXR0b24gPSAkKCc8YnV0dG9uPicsIHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdrLWJ1dHRvbiBrLXNlY29uZGFyeScsIHRpdGxlOiAnQWRkJ30pLmFwcGVuZCgkKCc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCI+PC9pPicpKTtcblx0XHRcdHRoaXMuX2VkaXRCdXR0b24gPSAkKCc8YnV0dG9uPicsIHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdrLWJ1dHRvbiBrLXNlY29uZGFyeSBtbC0yJywgdGl0bGU6ICdFZGl0JywgZGlzYWJsZWQ6IHRydWV9KS5hcHBlbmQoJCgnPGkgY2xhc3M9XCJmYXMgZmEtcGVuXCI+PC9pPicpKTtcblx0XHRcdHRoaXMuX3JlbW92ZUJ1dHRvbiA9ICQoJzxidXR0b24+Jywge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2stYnV0dG9uIGstc2Vjb25kYXJ5IG1sLTInLCB0aXRsZTogJ1JlbW92ZScsIGRpc2FibGVkOiB0cnVlfSkuYXBwZW5kKCQoJzxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPicpKTtcblxuXHRcdFx0YnV0dG9ucy5hcHBlbmQodGhpcy5fYWRkQnV0dG9uKTtcblx0XHRcdGJ1dHRvbnMuYXBwZW5kKHRoaXMuX2VkaXRCdXR0b24pO1xuXHRcdFx0YnV0dG9ucy5hcHBlbmQodGhpcy5fcmVtb3ZlQnV0dG9uKTtcblxuXHRcdFx0Ly8gQXBwZW5kIGJ1dHRvbnMgY29udGFpbmVyIHRvIG1haW4gaHRtbFxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC5hcHBlbmQoYnV0dG9ucyk7XG5cblx0XHRcdC8vIENyZWF0ZSBlZGl0IGRpYWxvZ1xuXHRcdFx0Ly8gTk9URTogZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbiB0aGUgY2xvc2UvY2FuY2VsIGJ1dHRvbnMgd2FzIHJlbW92ZWQgdG8gd29yayBhcm91bmQgYW4gaXNzdWUgd2l0aCBuZXN0ZWQgbW9kYWxzO1xuXHRcdFx0Ly8gdGhlIGN1c3RvbSBcImRhdGEtY2FuY2VsXCIgYXR0cmlidXRlIGlzIHVzZWQgdG8gYWRkIGEgY3VzdG9tIGxpc3RlbmVyIHRvIHRoZSBidXR0b25zXG5cdFx0XHR0aGlzLl9lZGl0RGlhbG9nID0gJChgXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWxUaXRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEta2V5Ym9hcmQ9XCJmYWxzZVwiIGRhdGEtYmFja2Ryb3A9XCJzdGF0aWNcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlIHRleHQtcHJpbWFyeVwiIGlkPVwibW9kYWxUaXRsZVwiPiR7dGhpcy5fZGF0YS5sYWJlbH08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBkYXRhLWNhbmNlbD1cIm1vZGFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHkgaW4tZmxvdy1pbnZhbGlkLW1zZ1wiPlxuXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyIGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xIHRleHQtbGVmdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImstYnV0dG9uIGstcHJpbWFyeVwiPi4uLjwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImstYnV0dG9uIGstc2Vjb25kYXJ5XCIgZGF0YS1jYW5jZWw9XCJtb2RhbFwiPkNhbmNlbDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YCk7XG5cblx0XHRcdC8vIEFkZCBsaXN0ZW5lciB0byBkaWFsb2cgaGlkZSBldmVudFxuXHRcdFx0dGhpcy5fZWRpdERpYWxvZy5vbignaGlkZGVuLmJzLm1vZGFsJywgJC5wcm94eSh0aGlzLl9vbkVkaXRQYW5lbEhpZGRlbiwgdGhpcykpO1xuXG5cdFx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gbWFpbiBidXR0b24gY2xpY2sgZXZlbnRcblx0XHRcdCQoJ2J1dHRvbi5rLXByaW1hcnknLCB0aGlzLl9lZGl0RGlhbG9nKS5vbignY2xpY2snLCAkLnByb3h5KHRoaXMuX29uU3VibWl0QnRDbGljaywgdGhpcykpO1xuXG5cdFx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gY2xvc2UvY2FuY2VsIGJ1dHRvbnMgY2xpY2sgZXZlbnRcblx0XHRcdCQoJ2J1dHRvbltkYXRhLWNhbmNlbD1cIm1vZGFsXCJdJywgdGhpcy5fZWRpdERpYWxvZykub24oJ2NsaWNrJywgJC5wcm94eSh0aGlzLl9vbkNhbmNlbEJ0Q2xpY2ssIHRoaXMpKTtcblxuXHRcdFx0Ly8gQXBwZW5kIGVkaXQgZGlhbG9nIHRvIG1haW4gaHRtbFxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC5hcHBlbmQodGhpcy5fZWRpdERpYWxvZyk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGNvbXBvbmVudFxuXHRcdHJldHVybiB0aGlzLl93aWRnZXRIdG1sO1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgd2lkZ2V0LlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9pbml0aWFsaXplKClcblx0e1xuXHRcdGxldCBjb2x1bW5zID0gW107XG5cdFx0Zm9yIChsZXQgc3ViQ29uZmlnUGFyYW0gb2YgdGhpcy5fZGF0YS5kZWZhdWx0TGlzdEl0ZW0pXG5cdFx0e1xuXHRcdFx0bGV0IGNvbCA9IHtcblx0XHRcdFx0ZmllbGQ6IHN1YkNvbmZpZ1BhcmFtLm5hbWUsXG5cdFx0XHRcdHRpdGxlOiBzdWJDb25maWdQYXJhbS5sYWJlbCxcblx0XHRcdFx0d2lkdGg6IDEyMFxuXHRcdFx0fVxuXG5cdFx0XHQvLyBEaXNwbGF5IFYgb3IgWCBmb3IgYm9vbGVhbnNcblx0XHRcdGlmICh0eXBlb2Ygc3ViQ29uZmlnUGFyYW0udmFsdWUgPT09ICdib29sZWFuJylcblx0XHRcdFx0Y29sLnRlbXBsYXRlID0gYCM9ICR7c3ViQ29uZmlnUGFyYW0ubmFtZX0gPyAnPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2tcIj48L2k+JyA6ICc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nICNgO1xuXG5cdFx0XHQvLyBIaWRlIHBhc3N3b3Jkc1xuXHRcdFx0aWYgKHN1YkNvbmZpZ1BhcmFtLnR5cGUgPT0gJ1RleHRJbnB1dCcgJiYgc3ViQ29uZmlnUGFyYW0uYXR0cmlidXRlcyAhPSBudWxsICYmIHN1YkNvbmZpZ1BhcmFtLmF0dHJpYnV0ZXMudHlwZSA9PSAncGFzc3dvcmQnKVxuXHRcdFx0XHRjb2wudGVtcGxhdGUgPSBgIz0gJ+KAoicucmVwZWF0KGRhdGEuJHtzdWJDb25maWdQYXJhbS5uYW1lfS5sZW5ndGgpICNgO1xuXG5cdFx0XHRjb2x1bW5zLnB1c2goY29sKTtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIGdyaWRcblx0XHRsZXQgZ3JpZEh0bWwgPSB0aGlzLl93aWRnZXRIdG1sLmZpbmQoYCMkeyQuZXNjYXBlU2VsZWN0b3IodGhpcy5fZGF0YS5uYW1lKX1gKTtcblxuXHRcdGdyaWRIdG1sLmtlbmRvR3JpZCh7XG5cdFx0XHRyZXNpemFibGU6IHRydWUsXG5cdFx0XHRzZWxlY3RhYmxlOiB0aGlzLl9kYXRhLmVkaXRhYmxlID8gJ3JvdycgOiBmYWxzZSxcblx0XHRcdGNoYW5nZTogJC5wcm94eSh0aGlzLl9vbkdyaWRTZWxlY3Rpb25DaGFuZ2UsIHRoaXMpLFxuXHRcdFx0Y29sdW1uczogY29sdW1ucyxcblx0XHRcdG5vUmVjb3Jkczoge1xuXHRcdFx0XHR0ZW1wbGF0ZTogJ05vIGl0ZW1zLidcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHR0aGlzLl9ncmlkV2lkZ2V0ID0gZ3JpZEh0bWwuZGF0YSgna2VuZG9HcmlkJyk7XG5cblx0XHQvLyBTaG93IHRvb3RpcCBpZiBncmlkJ3MgY2VsbCBjb250ZW50IGV4Y2VlZHMgY2VsbCB3aWR0aCAoZWxsaXBzaXMgaXMgZGlzcGxheWVkIGJ5IEtlbmRvIEdyaWQpXG5cdFx0Z3JpZEh0bWwua2VuZG9Ub29sdGlwKHtcblx0XHRcdGZpbHRlcjogJ3RkJyxcblx0XHRcdHNob3c6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0Ly8gTmV2ZXIgc2hvdyB0b29sdGlwLi4uXG5cdFx0XHRcdHRoaXMuY29udGVudC5wYXJlbnQoKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cblx0XHRcdFx0Ly8gLi4udW5sZXNzIGNvbnRlbnQgaXMgcmV0dXJuZWQgKHNlZSBiZWxvdykgZHVlIHRvIGNlbGwgd2lkdGggYmVpbmcgZXhjZWVkZWRcblx0XHRcdFx0aWYgKHRoaXMuY29udGVudC50ZXh0KCkgIT0gJycpXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50LnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XG5cdFx0XHR9LFxuXHRcdFx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMuY29udGVudC5wYXJlbnQoKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y29udGVudDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRsZXQgZWxlbWVudCA9IGUudGFyZ2V0WzBdO1xuXHRcdFx0XHRpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCA8IGVsZW1lbnQuc2Nyb2xsV2lkdGgpXG5cdFx0XHRcdFx0cmV0dXJuIGUudGFyZ2V0LnRleHQoKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8qXG5cdFx0Ly8gSW5pdGlhbGl6ZSBidXR0b24gdG9vbHRpcHNcblx0XHR0aGlzLl93aWRnZXRIdG1sLmtlbmRvVG9vbHRpcCh7XG5cdFx0XHRmaWx0ZXI6ICdidXR0b24nLFxuXHRcdFx0Y29udGVudDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJoZWxwLXRvb2x0aXBcIj4ke2UudGFyZ2V0LmRhdGEoJ3RpdGxlJyl9PC9kaXY+YDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQqL1xuXG5cdFx0Ly8gQWRkIGJ1dHRvbiBsaXN0ZW5lcnNcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9hZGRCdXR0b24uY2xpY2soJC5wcm94eSh0aGlzLl9vbkFkZENsaWNrLCB0aGlzKSk7XG5cdFx0XHR0aGlzLl9lZGl0QnV0dG9uLmNsaWNrKCQucHJveHkodGhpcy5fb25FZGl0Q2xpY2ssIHRoaXMpKTtcblx0XHRcdHRoaXMuX3JlbW92ZUJ1dHRvbi5jbGljaygkLnByb3h5KHRoaXMuX29uUmVtb3ZlQ2xpY2ssIHRoaXMpKTtcblx0XHR9XG5cblx0XHQvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlci5faW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkYXRhc291cmNlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRWYWx1ZSgpXG5cdHtcblx0XHRsZXQgZGF0YVNvdXJjZSA9IG5ldyBrZW5kby5kYXRhLkRhdGFTb3VyY2Uoe1xuXHRcdFx0ZGF0YTogdGhpcy5fZGF0YS5saXN0VmFsdWVzXG5cdFx0fSk7XG5cblx0XHQvLyBSZWFkIGN1cnJlbnQgaG9yaXpvbnRhbCBzY3JvbGwgdmFsdWVcblx0XHRjb25zdCBzY3JvbGxMZWZ0ID0gJCgnLmstZ3JpZC1jb250ZW50JywgdGhpcy5fZ3JpZFdpZGdldC53cmFwcGVyKS5zY3JvbGxMZWZ0KCk7XG5cblx0XHQvLyBDbGVhciBncmlkIHNlbGVjdGlvbiBpZiBhbnlcblx0XHR0aGlzLl9ncmlkV2lkZ2V0LmNsZWFyU2VsZWN0aW9uKCk7XG5cblx0XHQvLyBTZXQgdXBkYXRlZCBncmlkJ3MgZGF0YXNvdXJjZVxuXHRcdHRoaXMuX2dyaWRXaWRnZXQuc2V0RGF0YVNvdXJjZShkYXRhU291cmNlKTtcblxuXHRcdC8vIFNldCBob3Jpem9udGFsIHNjcm9sbFxuXHRcdCQoJy5rLWdyaWQtY29udGVudCcsIHRoaXMuX2dyaWRXaWRnZXQud3JhcHBlcikuc2Nyb2xsTGVmdChzY3JvbGxMZWZ0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIERlc2VsZWN0IGl0ZW1cblx0XHRcdHRoaXMuX2dyaWRXaWRnZXQuY2xlYXJTZWxlY3Rpb24oKTtcblxuXHRcdFx0Ly8gRW5hYmxlL2Rpc2FibGUgZ3JpZFxuXHRcdFx0dGhpcy5fZ3JpZFdpZGdldC53cmFwcGVyLmF0dHIoJ2Rpc2FibGVkJywgIXRoaXMuX2VkaXRFbmFibGVkKTtcblxuXHRcdFx0Ly8gRW5hYmxlIFwiQWRkXCIgYnV0dG9uXG5cdFx0XHRpZiAodGhpcy5fZWRpdEVuYWJsZWQpXG5cdFx0XHRcdHRoaXMuX2FkZEJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuXHRcdFx0Ly8gRGlzYWJsZSBhbGwgYnV0dG9uc1xuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHR0aGlzLl9hZGRCdXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdFx0dGhpcy5fZWRpdEJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLl9yZW1vdmVCdXR0b24uYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfb25HcmlkU2VsZWN0aW9uQ2hhbmdlKGUpXG5cdHtcblx0XHRsZXQgc2VsZWN0ZWRSb3dzID0gdGhpcy5fZ3JpZFdpZGdldC5zZWxlY3QoKTtcblx0XHRsZXQgc2VsZWN0ZWREYXRhSXRlbXMgPSBbXTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGxldCBkYXRhSXRlbSA9IHRoaXMuX2dyaWRXaWRnZXQuZGF0YUl0ZW0oc2VsZWN0ZWRSb3dzW2ldKTtcblx0XHRcdHNlbGVjdGVkRGF0YUl0ZW1zLnB1c2goZGF0YUl0ZW0pO1xuXHRcdH1cblxuXHRcdC8vIEVuYWJsZS9kaXNhYmxlIGVkaXQgYnV0dG9uXG5cdFx0aWYgKHRoaXMuX2VkaXRCdXR0b24pXG5cdFx0XHR0aGlzLl9lZGl0QnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgc2VsZWN0ZWREYXRhSXRlbXMubGVuZ3RoID09IDApO1xuXG5cdFx0Ly8gRW5hYmxlL2Rpc2FibGUgcmVtb3ZlIGJ1dHRvblxuXHRcdGlmICh0aGlzLl9yZW1vdmVCdXR0b24pXG5cdFx0e1xuXHRcdFx0Ly8gQWx3YXlzIGRpc2FibGUgYnV0dG9uIGlmIG5vIGxpc3QgaXRlbSBpcyBzZWxlY3RlZFxuXHRcdFx0dGhpcy5fcmVtb3ZlQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgc2VsZWN0ZWREYXRhSXRlbXMubGVuZ3RoID09IDApO1xuXG5cdFx0XHQvLyBBbHNvIGRpc2FibGUgYnV0dG9uIGlmIGRlbnlFbXB0eSA9PSB0cnVlIGFuZCBqdXN0IG9uZSBpdGVtIHJlbWFpbnMgaW4gdGhlIGxpc3Rcblx0XHRcdGlmICh0aGlzLl9kYXRhLmRlbnlFbXB0eSlcblx0XHRcdFx0dGhpcy5fcmVtb3ZlQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgdGhpcy5fZGF0YS5saXN0SXRlbXMubGVuZ3RoIDw9IDEpO1xuXHRcdH1cbiAgICB9XG5cblx0X29uUmVtb3ZlQ2xpY2soKVxuXHR7XG5cdFx0bGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9ncmlkV2lkZ2V0LnNlbGVjdCgpLmluZGV4KCk7XG5cblx0XHQvLyBSZW1vdmUgaXRlbSBmcm9tIGxpc3Rcblx0XHR0aGlzLl9kYXRhLnJlbW92ZUxpc3RJdGVtKHNlbGVjdGVkSW5kZXgpO1xuXG5cdFx0Ly8gUmVnZW5lcmF0ZSBkYXRhZ3JpZCdzIGRhdGFzb3VyY2Vcblx0XHR0aGlzLl9zZXRXaWRnZXRWYWx1ZSgpO1xuXHR9XG5cblx0X29uQWRkQ2xpY2soKVxuXHR7XG5cdFx0Ly8gQ2xvbmUgZGVmYXVsdCBpdGVtIGFuZCBhZGQgdG8gbGlzdFxuXHRcdGxldCBuZXdMaXN0SXRlbSA9IFtdO1xuXHRcdGZvciAobGV0IHN1YkNQIG9mIHRoaXMuX2RhdGEuZGVmYXVsdExpc3RJdGVtKVxuXHRcdFx0bmV3TGlzdEl0ZW0ucHVzaChzdWJDUC5jbG9uZSh0cnVlKSk7XG5cblx0XHQvLyBDcmVhdGUgZWRpdCBwb3B1cFxuXHRcdHRoaXMuX29wZW5FZGl0UGFuZWwobmV3TGlzdEl0ZW0pO1xuXHR9XG5cblx0X29uRWRpdENsaWNrKClcblx0e1xuXHRcdGxldCBzZWxlY3RlZEluZGV4ID0gdGhpcy5fZ3JpZFdpZGdldC5zZWxlY3QoKS5pbmRleCgpO1xuXG5cdFx0Ly8gQ2xvbmUgc2VsZWN0ZWQgaXRlbSBhbmQgYWRkIHRvIGxpc3Rcblx0XHRsZXQgY2xvbmVkTGlzdEl0ZW0gPSBbXTtcblx0XHRmb3IgKGxldCBzdWJDUCBvZiB0aGlzLl9kYXRhLmxpc3RJdGVtc1tzZWxlY3RlZEluZGV4XSlcblx0XHRcdGNsb25lZExpc3RJdGVtLnB1c2goc3ViQ1AuY2xvbmUodHJ1ZSkpO1xuXG5cdFx0Ly8gQ3JlYXRlIGVkaXQgcG9wdXBcblx0XHR0aGlzLl9vcGVuRWRpdFBhbmVsKGNsb25lZExpc3RJdGVtLCBzZWxlY3RlZEluZGV4KTtcblx0fVxuXG5cdF9vcGVuRWRpdFBhbmVsKHN1YkNvbmZpZ1BhcmFtc0FycmF5LCBlZGl0SW5kZXggPSAtMSlcblx0e1xuXHRcdC8vIENoZWNrIGlmIHRoaXMgY29uZmlndXJhdGlvbiBpdGVtIGlzIGluc2lkZSBhIG1vZGFsIHdpbmRvdztcblx0XHQvLyBpZiB5ZXMsIHRoZSBlZGl0IHBhbmVsICh3aGljaCBpcyBhIG1vZGFsIGFzIHdlbGwpIG11c3QgYmUgY29uZmlndXJlZCB0byByZW1vdmUgdGhlIGRhcmsgYmFja2dyb3VuZFxuXHRcdGlmICgkKHRoaXMpLnBhcmVudHMoJy5tb2RhbCcpLmxlbmd0aCA+IDApXG5cdFx0XHQkKCcubW9kYWwnLCAkKHRoaXMpKS5hdHRyKCdkYXRhLWJhY2tkcm9wJywgZmFsc2UpO1xuXG5cdFx0Ly8gQ3JlYXRlIGRpYWxvZyBjb250ZW50XG5cdFx0dGhpcy5faXRlbUVkaXRvciA9IG5ldyBMaXN0SXRlbUVkaXRvcigpO1xuXHRcdHRoaXMuX2l0ZW1FZGl0b3IuZGF0YSA9IHN1YkNvbmZpZ1BhcmFtc0FycmF5O1xuXHRcdHRoaXMuX2l0ZW1FZGl0b3IuaW5kZXggPSBlZGl0SW5kZXg7XG5cblx0XHRsZXQgaXRlbUVkaXRvciA9ICQodGhpcy5faXRlbUVkaXRvcik7XG5cblx0XHQvLyBBcHBlbmQgY29udGVudCB0byBkaWFsb2dcblx0XHQkKCcubW9kYWwtYm9keScsIHRoaXMuX2VkaXREaWFsb2cpLmFwcGVuZChpdGVtRWRpdG9yKTtcblxuXHRcdC8vIFNldCBkaWFsb2cgbWFpbiBidXR0b24gdGV4dFxuXHRcdCQoJ2J1dHRvbi5rLXByaW1hcnknLCB0aGlzLl9lZGl0RGlhbG9nKS5odG1sKGVkaXRJbmRleCA+IC0xID8gJzxpIGNsYXNzPVwiZmFzIGZhLXBlbiBtci0xXCI+PC9pPlVwZGF0ZScgOiAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1cyBtci0xXCI+PC9pPkFkZCcpO1xuXG5cdFx0Ly8gRGlzcGxheSBkaWFsb2dcblx0XHR0aGlzLl9lZGl0RGlhbG9nLm1vZGFsKCdzaG93Jyk7XG5cdH1cblxuXHRfb25TdWJtaXRCdENsaWNrKClcblx0e1xuXHRcdGlmICh0aGlzLl9pdGVtRWRpdG9yLnZhbGlkYXRlKCkpXG5cdFx0e1xuXHRcdFx0bGV0IGRhdGEgPSB0aGlzLl9pdGVtRWRpdG9yLmRhdGE7XG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLl9pdGVtRWRpdG9yLmluZGV4O1xuXG5cdFx0XHQvLyBIaWRlIG1vZGFsXG5cdFx0XHR0aGlzLl9lZGl0RGlhbG9nLm1vZGFsKCdoaWRlJyk7XG5cblx0XHRcdC8vIENvbXBsZXRlIGVkaXRpbmdcblx0XHRcdHRoaXMuX29uRWRpdENvbXBsZXRlKGRhdGEsIGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRfb25DYW5jZWxCdENsaWNrKClcblx0e1xuXHRcdC8vIEhpZGUgbW9kYWxcblx0XHR0aGlzLl9lZGl0RGlhbG9nLm1vZGFsKCdoaWRlJyk7XG5cdH1cblxuXHRfb25FZGl0UGFuZWxIaWRkZW4oZSlcblx0e1xuXHRcdC8vIFJlbW92ZSBjb250ZW50IGZyb20gZGlhbG9nXG5cdFx0dGhpcy5faXRlbUVkaXRvci5yZW1vdmUoKTtcblxuXHRcdC8vIFNldCBkaWFsb2cgbWFpbiBidXR0b24gdGV4dFxuXHRcdCQoJ2J1dHRvbi5rLXByaW1hcnknLCB0aGlzLl9lZGl0RGlhbG9nKS5odG1sKCcuLi4nKTtcblxuXHRcdHRoaXMuX2l0ZW1FZGl0b3IgPSBudWxsO1xuXHR9XG5cblx0X29uRWRpdENvbXBsZXRlKGxpc3RJdGVtLCBlZGl0SW5kZXgpXG5cdHtcblx0XHQvLyBBbiBleGlzdGluZyBsaXN0IGl0ZW0gd2FzIHVwZGF0ZWRcblx0XHRpZiAoZWRpdEluZGV4ID4gLTEpXG5cdFx0XHR0aGlzLl9kYXRhLnVwZGF0ZUxpc3RJdGVtKGxpc3RJdGVtLCBlZGl0SW5kZXgpO1xuXG5cdFx0Ly8gQSBuZXcgbGlzdCBpdGVtIHdhcyBhZGRlZDsgYWRkIGl0IHRvIHRoZSBjb25maWd1cmF0aW9uIHBhcmFtZXRlclxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX2RhdGEuYWRkTGlzdEl0ZW0obGlzdEl0ZW0pO1xuXG5cdFx0Ly8gUmVnZW5lcmF0ZSBkYXRhZ3JpZCdzIGRhdGFzb3VyY2Vcblx0XHR0aGlzLl9zZXRXaWRnZXRWYWx1ZSgpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnY29uZmlnLWdyaWQnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWdyaWQnLCBDb25maWdHcmlkKTtcbiIsImV4cG9ydCBjbGFzcyBDb25maWdMYWJlbCBleHRlbmRzIEhUTUxFbGVtZW50XG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHQgICAgc3VwZXIoKTtcblxuXHRcdHRoaXMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2NvbmZpZy1sYWJlbCcpO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbClcblx0e1xuXHRcdGlmICh0eXBlb2YgdmFsID09PSAnYm9vbGVhbicpXG5cdFx0XHR0aGlzLmlubmVySFRNTCA9ICh2YWwgPyAndHJ1ZScgOiAnZmFsc2UnKTtcblx0XHRlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJylcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKHZhbCA/IHZhbCA6IDApO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKHZhbCAhPSAnJyA/IHZhbCA6ICcmbWRhc2g7Jyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudGV4dENvbnRlbnQ7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctbGFiZWwnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWxhYmVsJywgQ29uZmlnTGFiZWwpO1xuIiwiaW1wb3J0IHtDb25maWdGb3JtSXRlbX0gZnJvbSAnLi9jb25maWctZm9ybS1pdGVtJztcbmltcG9ydCB7Q29uZmlnTGFiZWx9IGZyb20gJy4vY29uZmlnLWxhYmVsJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ051bWVyaWNTdGVwcGVyIGV4dGVuZHMgQ29uZmlnRm9ybUl0ZW1cbntcblx0Y29uc3RydWN0b3IoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZylcblx0e1xuXHQgICAgc3VwZXIoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHdpZGdldCB0byByZW5kZXIgdGhlIENvbmZpZ1BhcmFtZXRlciB2YWx1ZS5cblx0ICogSWYgcGFyYW1ldGVyIGlzIG5vdCBlZGl0YWJsZSwgYSBzaW1wbGUgbGFiZWwgaXMgdXNlZC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfZ2VuZXJhdGVJbm5lcldpZGdldCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHR7XG5cdFx0XHQvLyBTZXQgd2lkZ2V0IGNvbmZpZ3VyYXRpb25cblx0XHRcdGxldCBjb25maWcgPSB7XG5cdFx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0XHRjbGFzczogJ2Zvcm0tY29udHJvbCcsXG5cdFx0XHRcdGlkOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdG5hbWU6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdFx0J2RhdGEtcm9sZSc6ICdudW1lcmljdGV4dGJveCcsXG5cdFx0XHRcdCdkYXRhLXJlcXVpcmVkLW1zZyc6ICdSZXF1aXJlZCcsXG5cdFx0XHRcdCdkYXRhLWZvcm1hdCc6ICcjJyxcblx0XHRcdFx0cmVxdWlyZWQ6ICdyZXF1aXJlZCcsXG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBTZXQgd2lkZ2V0IGF0dHJpYnV0ZXMgKHNlZSBwYXJlbnQgY2xhc3MpXG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRBdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIFNldCBhZGRpdGlvbmFsIHdpZGdldCBhdHRyaWJ1dGVzIGJhc2VkIG9uIHZhbGlkYXRpb24gcnVsZXMgKHNlZSBwYXJlbnQgY2xhc3MpXG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRWYWxpZGF0aW9uQXR0cmlidXRlcyhjb25maWcpO1xuXG5cdFx0XHQvLyBDcmVhdGUgd2lkZ2V0J3MgaHRtbFxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbCA9ICQoJzxpbnB1dD4nLCBjb25maWcpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gbmV3IENvbmZpZ0xhYmVsKCk7XG5cblx0XHQvLyBSZXR1cm4gY29tcG9uZW50XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldEh0bWw7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB3aWRnZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cbiAgIF9pbml0aWFsaXplKClcbiAgIHtcblx0ICAgaWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdCAgIHtcblx0XHQgICAvLyBJbml0aWFsaXplIGtlbmRvIHdpZGdldFxuXHRcdCAgIGtlbmRvLmluaXQodGhpcy5fd2lkZ2V0SHRtbCk7XG5cblx0XHQgICAvLyBTYXZlIHJlZi4gdG8gd2lkZ2V0XG5cdFx0ICAgdGhpcy5faW5uZXJXaWRnZXQgPSB0aGlzLl93aWRnZXRIdG1sLmRhdGEoJ2tlbmRvTnVtZXJpY1RleHRCb3gnKTtcblxuXHRcdCAgIC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdCAgIHRoaXMuX2lubmVyV2lkZ2V0LmJpbmQoJ2NoYW5nZScsICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSk7XG5cdCAgIH1cblxuXHQgICAvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0ICAgc3VwZXIuX2luaXRpYWxpemUoKTtcbiAgIH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCB0aGUgbGFiZWwgdGV4dCBpcyBzZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQudmFsdWUodGhpcy5fZGF0YS52YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC52YWx1ZSA9IHRoaXMuX2RhdGEudmFsdWU7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIGRpc2FibGVkIHN0YXRlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHRcdHRoaXMuX2lubmVyV2lkZ2V0LmVuYWJsZSh0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gTnVtYmVyKHRoaXMuX2lubmVyV2lkZ2V0LnZhbHVlKCkpO1xuXG5cdFx0Ly8gVHJpZ2dlciBldmVudFxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnY29uZmlnLW51bWVyaWMtc3RlcHBlcicpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb25maWctbnVtZXJpYy1zdGVwcGVyJywgQ29uZmlnTnVtZXJpY1N0ZXBwZXIpO1xuIiwiaW1wb3J0IHtDb25maWdGb3JtSXRlbX0gZnJvbSAnLi9jb25maWctZm9ybS1pdGVtJztcbmltcG9ydCB7Q29uZmlnTGFiZWx9IGZyb20gJy4vY29uZmlnLWxhYmVsJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ1RleHRJbnB1dCBleHRlbmRzIENvbmZpZ0Zvcm1JdGVtXG57XG5cdGNvbnN0cnVjdG9yKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpXG5cdHtcblx0ICAgIHN1cGVyKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB3aWRnZXQgdG8gcmVuZGVyIHRoZSBDb25maWdQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIGEgc2ltcGxlIGxhYmVsIGlzIHVzZWQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X2dlbmVyYXRlSW5uZXJXaWRnZXQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0Ly8gU2V0IHdpZGdldCBjb25maWd1cmF0aW9uXG5cdFx0XHRsZXQgY29uZmlnID0ge1xuXHRcdFx0XHR0eXBlOiAndGV4dCcsXG5cdFx0XHRcdGNsYXNzOiAnZm9ybS1jb250cm9sIGstdGV4dGJveCcsXG5cdFx0XHRcdGlkOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdG5hbWU6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdFx0YXV0b2NvbXBsZXRlOiAnb2ZmJyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlc1xuXHRcdFx0dGhpcy5fc2V0V2lkZ2V0QXR0cmlidXRlcyhjb25maWcpO1xuXG5cdFx0XHQvLyBTZXQgYWRkaXRpb25hbCB3aWRnZXQgYXR0cmlidXRlcyBiYXNlZCBvbiB2YWxpZGF0aW9uIHJ1bGVzXG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRWYWxpZGF0aW9uQXR0cmlidXRlcyhjb25maWcpO1xuXG5cdFx0XHQvLyBDcmVhdGUgd2lkZ2V0J3MgaHRtbFxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbCA9ICQoJzxpbnB1dD4nLCBjb25maWcpO1xuXG5cdFx0XHQvLyBFbmFibGUgdmFsdWUgY29tbWl0IGJpbmRpbmdcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwub24oJ2NoYW5nZScsICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIHRoZSBsYWJlbCB0ZXh0IGlzIHNldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0VmFsdWUoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLnZhbCh0aGlzLl9kYXRhLnZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLnZhbHVlID0gdGhpcy5fZGF0YS52YWx1ZTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC5hdHRyKCdkaXNhYmxlZCcsICF0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5fd2lkZ2V0SHRtbC52YWwoKTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy10ZXh0LWlucHV0JykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbmZpZy10ZXh0LWlucHV0JywgQ29uZmlnVGV4dElucHV0KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5pbXBvcnQge1ZlY3RvcjNESW5wdXR9IGZyb20gJy4vd2lkZ2V0cy92ZWN0b3ItM2QtaW5wdXQnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnVmVjdG9yM0QgZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gbmV3IFZlY3RvcjNESW5wdXQodGhpcy5fZGF0YS5uYW1lLCB0aGlzLl9kYXRhLnZhbGlkYXRvciA9PSAnYW9pJyk7XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlc1xuXHRcdFx0dGhpcy5fc2V0V2lkZ2V0QXR0cmlidXRlcyh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdFx0Ly8gRW5hYmxlIHZhbHVlIGNvbW1pdCBiaW5kaW5nXG5cdFx0XHQkKHRoaXMuX3dpZGdldEh0bWwpLm9uKCdjaGFuZ2UnLCAkLnByb3h5KHRoaXMuX29uVmFsdWVJbnB1dCwgdGhpcykpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gbmV3IENvbmZpZ0xhYmVsKCk7XG5cblx0XHQvLyBSZXR1cm4gY29tcG9uZW50XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldEh0bWw7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCB0aGUgbGFiZWwgdGV4dCBpcyBzZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdHRoaXMuX3dpZGdldEh0bWwudmFsdWUgPSB0aGlzLl9kYXRhLnZhbHVlO1xuXG5cdFx0Ly8gVHJpZ2dlciBldmVudFxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkaXNhYmxlZCBzdGF0ZS5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0RWRpdEVuYWJsZWQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0JCh0aGlzLl93aWRnZXRIdG1sKS5hdHRyKCdkaXNhYmxlZCcsICF0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB2YWx1ZS5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfb25WYWx1ZUlucHV0KGUpXG5cdHtcblx0XHQvLyBVcGRhdGUgQ29uZmlndXJhdGlvbiBQYXJhbWV0ZXIgdG8gbmV3IHZhbHVlXG5cdFx0dGhpcy5fZGF0YS52YWx1ZSA9IHRoaXMuX3dpZGdldEh0bWwudmFsdWU7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctdmVjdG9yLTNkJykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbmZpZy12ZWN0b3ItM2QnLCBDb25maWdWZWN0b3IzRCk7XG4iLCJpbXBvcnQge0NvbmZpZ0Zvcm1JdGVtRmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0tZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0SXRlbUVkaXRvciBleHRlbmRzIEhUTUxFbGVtZW50XG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHQgICAgc3VwZXIoKTtcblx0fVxuXG5cdHNldCBkYXRhKHN1YkNvbmZpZ1BhcmFtc0FycmF5KVxuXHR7XG5cdFx0dGhpcy5fZGF0YSA9IHN1YkNvbmZpZ1BhcmFtc0FycmF5O1xuXG5cdFx0dGhpcy5fYnVpbGRWaWV3KCk7XG5cdH1cblxuXHRnZXQgZGF0YSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fZGF0YTtcblx0fVxuXG5cdHNldCBpbmRleChpbmRleClcblx0e1xuXHRcdHRoaXMuX2luZGV4ID0gaW5kZXg7XG5cdH1cblxuXHRnZXQgaW5kZXgoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2luZGV4O1xuXHR9XG5cblx0X2J1aWxkVmlldygpXG5cdHtcblx0XHQvLyBHZW5lcmF0ZSBjb250YWluZXIgZm9ybVxuXHRcdHRoaXMuX2Zvcm0gPSAkKCc8Zm9ybT4nLCB7fSk7XG5cblx0XHQvLyBBcHBlbmQgZm9ybVxuXHRcdCQodGhpcykuYXBwZW5kKHRoaXMuX2Zvcm0pO1xuXG5cdFx0Ly8gR2VuZXJhdGUgZm9ybSBmaWVsZHNcblx0XHRmb3IgKGxldCBjb25maWdQYXJhbSBvZiB0aGlzLl9kYXRhKVxuXHRcdHtcblx0XHRcdC8vIENyZWF0ZSBmb3JtIGl0ZW1cblx0XHRcdGxldCBmb3JtSXRlbSA9IENvbmZpZ0Zvcm1JdGVtRmFjdG9yeS5jcmVhdGUoY29uZmlnUGFyYW0sIHRydWUsIHRydWUpO1xuXHRcdFx0Zm9ybUl0ZW0uZGF0YSA9IGNvbmZpZ1BhcmFtO1xuXG5cdFx0XHQvLyBBZGQgZm9ybSBpdGVtIHRvIGZvcm1cblx0XHRcdHRoaXMuX2Zvcm0uYXBwZW5kKGZvcm1JdGVtKTtcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIGtlbmRvIHZhbGlkYXRpb24gb24gZm9ybVxuXHRcdHRoaXMuX3ZhbGlkYXRvciA9IHRoaXMuX2Zvcm0ua2VuZG9WYWxpZGF0b3Ioe1xuXHRcdFx0dmFsaWRhdGVPbkJsdXI6IHRydWUsXG5cdFx0XHRydWxlczoge1xuXHRcdFx0XHQvLyBBZGQgcnVsZSB0byB2YWxpZGF0ZSBBT0kgZm9ybSBpdGVtcz9cblx0XHRcdFx0Ly8gKHNlZTogaHR0cHM6Ly9kZW1vcy50ZWxlcmlrLmNvbS9rZW5kby11aS92YWxpZGF0b3IvY3VzdG9tLXZhbGlkYXRpb24pXG5cdFx0XHRcdGFvaTogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRcdFx0aWYgKGlucHV0LmlzKCdbZGF0YS1hb2ktbXNnXScpICYmIGlucHV0LnZhbCgpICE9ICcnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChpbnB1dC52YWwoKSA9PSAnMCwwLDAnKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cdFx0fSkuZGF0YSgna2VuZG9WYWxpZGF0b3InKTtcblx0fVxuXG5cdHZhbGlkYXRlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUoKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2xpc3QtaXRlbS1lZGl0b3InKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGlzdC1pdGVtLWVkaXRvcicsIExpc3RJdGVtRWRpdG9yKTtcbiIsImV4cG9ydCBjbGFzcyBWZWN0b3IzRElucHV0IGV4dGVuZHMgSFRNTEVsZW1lbnRcbntcblx0Y29uc3RydWN0b3IoaWQsIGlzVmFsaWRhYmxlKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMubmFtZSA9IGlkO1xuXG5cdFx0dGhpcy5faXNWYWxpZGFibGUgPSBpc1ZhbGlkYWJsZTtcblxuXHRcdHRoaXMuX2luaXRpYWxpemUoKTtcblx0fVxuXG5cdHNldCBlbmFibGVDbGVhcih2YWx1ZSlcblx0e1xuXHRcdGlmICh2YWx1ZSlcblx0XHRcdHRoaXMuX2NsZWFyQnV0dG9uLnNob3coKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl9jbGVhckJ1dHRvbi5oaWRlKCk7XG5cdH1cblxuXHRzZXQgYWxsb3dOZWdhdGl2ZSh2YWx1ZSlcblx0e1xuXHRcdGlmICh2YWx1ZSlcblx0XHR7XG5cdFx0XHR0aGlzLl93aWRnZXRYLnNldE9wdGlvbnMoIHttaW46IG51bGx9ICk7XG5cdFx0XHR0aGlzLl93aWRnZXRZLnNldE9wdGlvbnMoIHttaW46IG51bGx9ICk7XG5cdFx0XHR0aGlzLl93aWRnZXRaLnNldE9wdGlvbnMoIHttaW46IG51bGx9ICk7XG5cdFx0fVxuXHR9XG5cblx0c2V0IHZhbHVlKHZhbClcblx0e1xuXHRcdHZhciBjb29yZHMgPSB2YWwuc3BsaXQoJywnKTtcblxuXHRcdGlmIChjb29yZHMubGVuZ3RoID49IDEpXG5cdFx0XHR0aGlzLl93aWRnZXRYLnZhbHVlKGNvb3Jkc1swXSk7XG5cblx0XHRpZiAoY29vcmRzLmxlbmd0aCA+PSAyKVxuXHRcdFx0dGhpcy5fd2lkZ2V0WS52YWx1ZShjb29yZHNbMV0pO1xuXG5cdFx0aWYgKGNvb3Jkcy5sZW5ndGggPj0gMylcblx0XHRcdHRoaXMuX3dpZGdldFoudmFsdWUoY29vcmRzWzJdKTtcblxuXHRcdGlmICh0aGlzLl9pc1ZhbGlkYWJsZSlcblx0XHRcdHRoaXMuX2lucHV0VmFsLnZhbCh0aGlzLnZhbHVlKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpXG5cdHtcblx0XHRpZiAodGhpcy5fd2lkZ2V0WC52YWx1ZSgpID09IG51bGwgJiYgdGhpcy5fd2lkZ2V0WS52YWx1ZSgpID09IG51bGwgJiYgdGhpcy5fd2lkZ2V0Wi52YWx1ZSgpID09IG51bGwpXG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHRoaXMuX3dpZGdldFgudmFsdWUoKSArICcsJyArIHRoaXMuX3dpZGdldFkudmFsdWUoKSArICcsJyArIHRoaXMuX3dpZGdldFoudmFsdWUoKTtcblx0fVxuXG5cdF9pbml0aWFsaXplKClcblx0e1xuXHRcdC8vIEdlbmVyYXRlIGNvbnRhaW5lciBmb3JtXG5cdFx0dGhpcy5fY29udGFpbmVyID0gJCgnPGRpdj4nLCB7XG5cdFx0XHRjbGFzczogJ2Zvcm0taW5saW5lJ1xuXHRcdH0pO1xuXG5cdFx0Ly8gQXBwZW5kIGNvbnRhaW5lclxuXHRcdCQodGhpcykuYXBwZW5kKHRoaXMuX2NvbnRhaW5lcik7XG5cblx0XHQvLyBTZXQgaW5wdXRzIGNvbmZpZ3VyYXRpb25cblx0XHRsZXQgY29uZmlnSHRtbCA9IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0Y2xhc3M6ICdmb3JtLWNvbnRyb2wgc2hvcnQtNCcsXG5cdFx0fTtcblxuXHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdGxldCBjb25maWdXaWRnZXQgPSB7XG5cdFx0XHRtaW46IDAsXG5cdFx0XHRzcGlubmVyczogZmFsc2UsXG5cdFx0XHRmb3JtYXQ6ICcjLiMjIyMjIycsXG5cdFx0XHRkZWNpbWFsczogNixcblx0XHRcdHJvdW5kOiBmYWxzZSxcblx0XHRcdHNwaW5uZXJzOiBmYWxzZSxcblx0XHRcdHJlc3RyaWN0RGVjaW1hbHM6IGZhbHNlLFxuXHRcdFx0Y2hhbmdlOiAkLnByb3h5KHRoaXMuX29uQ2hhbmdlLCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBDcmVhdGUgd2lkZ2V0c1xuXHRcdHRoaXMuX2lucHV0WCA9ICQoJzxpbnB1dD4nLCBjb25maWdIdG1sKTtcblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX2lucHV0WCk7XG5cdFx0dGhpcy5fd2lkZ2V0WCA9IHRoaXMuX2lucHV0WC5rZW5kb051bWVyaWNUZXh0Qm94KGNvbmZpZ1dpZGdldCkuZGF0YSgna2VuZG9OdW1lcmljVGV4dEJveCcpO1xuXG5cdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJweC0xXCI+LDwvc3Bhbj4nKTtcblxuXHRcdHRoaXMuX2lucHV0WSA9ICQoJzxpbnB1dD4nLCBjb25maWdIdG1sKTtcblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX2lucHV0WSk7XG5cdFx0dGhpcy5fd2lkZ2V0WSA9IHRoaXMuX2lucHV0WS5rZW5kb051bWVyaWNUZXh0Qm94KGNvbmZpZ1dpZGdldCkuZGF0YSgna2VuZG9OdW1lcmljVGV4dEJveCcpO1xuXG5cdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJweC0xXCI+LDwvc3Bhbj4nKTtcblxuXHRcdHRoaXMuX2lucHV0WiA9ICQoJzxpbnB1dD4nLCBjb25maWdIdG1sKTtcblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX2lucHV0Wik7XG5cdFx0dGhpcy5fd2lkZ2V0WiA9IHRoaXMuX2lucHV0Wi5rZW5kb051bWVyaWNUZXh0Qm94KGNvbmZpZ1dpZGdldCkuZGF0YSgna2VuZG9OdW1lcmljVGV4dEJveCcpO1xuXG5cdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZCgnPHNwYW4gY2xhc3M9XCJweC0xXCI+PC9zcGFuPicpOyAvLyBBZGRpdGlvbmFsIHNwYWNlclxuXG5cdFx0Ly8gQ3JlYXRlIGludmlzaWJsZSBmaWVsZCB0byBhcHBseSBvdmVyYWxsIHZhbGlkYXRpb25cblx0XHRpZiAodGhpcy5faXNWYWxpZGFibGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5faW5wdXRWYWwgPSAkKCc8aW5wdXQ+Jywge25hbWU6IGAke3RoaXMubmFtZX0tY3VzdG9tLXZhbGlkYXRlYCwgJ2RhdGEtYW9pLW1zZyc6ICdWYWx1ZXMgY2FuXFwndCBhbGwgYmUgMCd9KTtcblx0XHRcdHRoaXMuX2NvbnRhaW5lci5hcHBlbmQodGhpcy5faW5wdXRWYWwpO1xuXHRcdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZChgPHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnXCIgZGF0YS1mb3I9XCIke3RoaXMubmFtZX0tY3VzdG9tLXZhbGlkYXRlXCI+PC9zcGFuPmApXG5cdFx0XHR0aGlzLl9pbnB1dFZhbC5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIGFuZCBhcHBlbmQgQ2xlYXIgYnV0dG9uXG5cdFx0dGhpcy5fY2xlYXJCdXR0b24gPSAkKCc8YnV0dG9uPicsIHt0eXBlOiAnYnV0dG9uJywgY2xhc3M6ICdrLWJ1dHRvbiBrLXNlY29uZGFyeSBteS0xJywgdGl0bGU6ICdDbGVhcid9KS5hcHBlbmQoJCgnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+JykpO1xuXHRcdHRoaXMuX2NsZWFyQnV0dG9uLm9uKCdjbGljaycsICQucHJveHkodGhpcy5fb25DbGVhckNsaWNrLCB0aGlzKSk7XG5cdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jbGVhckJ1dHRvbik7XG5cblx0XHQvLyBIaWRlIGJ1dHRvbiBieSBkZWZhdWx0XG5cdFx0dGhpcy5fY2xlYXJCdXR0b24uaGlkZSgpO1xuXHR9XG5cblx0X29uQ2hhbmdlKClcblx0e1xuXHRcdC8vIEVtcHR5IHN0cmluZ3MgYXJlIG5vdCBhbGxvd2VkXG5cdFx0aWYgKHRoaXMuX3dpZGdldFgudmFsdWUoKSA9PSBudWxsKVxuXHRcdFx0dGhpcy5fd2lkZ2V0WC52YWx1ZSgwKTtcblxuXHRcdGlmICh0aGlzLl93aWRnZXRZLnZhbHVlKCkgPT0gbnVsbClcblx0XHRcdHRoaXMuX3dpZGdldFkudmFsdWUoMCk7XG5cblx0XHRpZiAodGhpcy5fd2lkZ2V0Wi52YWx1ZSgpID09IG51bGwpXG5cdFx0XHR0aGlzLl93aWRnZXRaLnZhbHVlKDApO1xuXG5cdFx0dGhpcy5fZGlzcGF0Y2hDb21taXQoKTtcblx0fVxuXG5cdF9vbkNsZWFyQ2xpY2soKVxuXHR7XG5cdFx0dGhpcy5fd2lkZ2V0WC52YWx1ZSgnJyk7XG5cdFx0dGhpcy5fd2lkZ2V0WS52YWx1ZSgnJyk7XG5cdFx0dGhpcy5fd2lkZ2V0Wi52YWx1ZSgnJyk7XG5cblx0XHR0aGlzLl9kaXNwYXRjaENvbW1pdCgpO1xuXHR9XG5cblx0X2Rpc3BhdGNoQ29tbWl0KClcblx0e1xuXHRcdGlmICh0aGlzLl9pc1ZhbGlkYWJsZSlcblx0XHRcdHRoaXMuX2lucHV0VmFsLnZhbCh0aGlzLnZhbHVlKTtcblxuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ3ZlY3Rvci0zZC1pbnB1dCcpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCd2ZWN0b3ItM2QtaW5wdXQnLCBWZWN0b3IzRElucHV0KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0nO1xuXG5pbXBvcnQge0NvbmZpZ051bWVyaWNTdGVwcGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctbnVtZXJpYy1zdGVwcGVyJztcbmltcG9ydCB7Q29uZmlnVGV4dElucHV0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctdGV4dC1pbnB1dCc7XG5pbXBvcnQge0NvbmZpZ0NoZWNrQm94fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctY2hlY2stYm94JztcbmltcG9ydCB7Q29uZmlnRHJvcERvd25MaXN0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctZHJvcC1kb3duLWxpc3QnO1xuaW1wb3J0IHtDb25maWdHcmlkfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctZ3JpZCc7XG5pbXBvcnQge0NvbmZpZ0R1YWxMaXN0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctZHVhbC1saXN0JztcbmltcG9ydCB7Q29uZmlnVmVjdG9yM0R9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy12ZWN0b3ItM2QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnRm9ybUl0ZW1GYWN0b3J5XG57XG5cdHN0YXRpYyBjcmVhdGUoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyA9IGZhbHNlKVxuXHR7XG5cdFx0c3dpdGNoIChjb25maWdQYXJhbS50eXBlKVxuXHRcdHtcblx0XHRcdGNhc2UgJ1RleHRJbnB1dCc6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnVGV4dElucHV0KGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnQ2hlY2tCb3gnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ0NoZWNrQm94KGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnTnVtZXJpY1N0ZXBwZXInOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ051bWVyaWNTdGVwcGVyKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnQ29tYm9Cb3gnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ0Ryb3BEb3duTGlzdChjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ0RhdGFHcmlkJzpcblx0XHRcdFx0cmV0dXJuIG5ldyBDb25maWdHcmlkKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnRHVhbExpc3QnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ0R1YWxMaXN0KGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnVmVjdG9yM0QnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ1ZlY3RvcjNEKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIG5ldyBDb25maWdGb3JtSXRlbShjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTsgLy8gV2lsbCBsb2cgYW4gZXJyb3IgZm9yIG1pc3NpbmcgZm9ybSBpdGVtIHR5cGVcblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7Q29uZmlndXJhdGlvblBhcmFtZXRlcn0gZnJvbSAnLi9jb25maWd1cmF0aW9uLXBhcmFtZXRlcic7XG5pbXBvcnQge0NvbmZpZ0Zvcm1JdGVtRmFjdG9yeX0gZnJvbSAnLi9jb25maWctZm9ybS1pdGVtLWZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnSW50ZXJmYWNlQnVpbGRlclxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHQvLyBTZXQgc29tZSBjb25zdGFudHNcblx0XHR0aGlzLlRBQl9QUkVGSVggPSAndGFiLSdcblx0XHR0aGlzLlRBQl9QQU5FX1BSRUZJWCA9ICd0YWJwYW5lLSc7XG5cdFx0dGhpcy5TRVBBUkFUT1JfQkVGT1JFID0gJ2JlZm9yZSc7XG5cdFx0dGhpcy5TRVBBUkFUT1JfQUZURVIgPSAnYWZ0ZXInO1xuXHR9XG5cblx0ZHVtcChtb2RpZmllZE9ubHkgPSBmYWxzZSlcblx0e1xuXHRcdGxldCBkdW1wU3RyID0gJyc7XG5cblx0XHRmb3IgKGxldCBjcCBvZiB0aGlzLl9jb25maWdQYXJhbXMpXG5cdFx0e1xuXHRcdFx0aWYgKG1vZGlmaWVkT25seSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKGNwLmlzTW9kaWZpZWQpXG5cdFx0XHRcdFx0ZHVtcFN0ciArPSBjcC50b1N0cmluZygpICsgJ1xcbic7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGR1bXBTdHIgKz0gY3AudG9TdHJpbmcoKSArICdcXG4nO1xuXHRcdH1cblxuXHRcdGNvbnNvbGUubG9nKGR1bXBTdHIpO1xuXHR9XG5cblx0YnVpbGRJbnRlcmZhY2UoZGF0YSwgbWFpbkNvbnRhaW5lcklkLCBkaXNhYmxlRWRpdCA9IGZhbHNlLCB0YWJTdWZmaXggPSAnJylcblx0e1xuXHRcdHRoaXMuX21haW5Db250YWluZXJJZCA9IG1haW5Db250YWluZXJJZDtcblx0XHR0aGlzLl9jb25maWdQYXJhbXMgPSBuZXcgQXJyYXkoKTtcblx0XHR0aGlzLl92YWxpZGF0b3IgPSBudWxsO1xuXG5cdFx0bGV0IGhhc05ld0Zvcm1JdGVtID0gZmFsc2U7XG5cblx0XHQvL2NvbnNvbGUubG9nKGRhdGEuZ2V0RHVtcCgpKVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnNpemUoKTsgaSsrKVxuXHRcdHtcblx0XHRcdC8vIFBBUlNFIERBVEFcblxuXHRcdFx0bGV0IGNvbmZpZ1BhcmFtID0gQ29uZmlndXJhdGlvblBhcmFtZXRlci5mcm9tU2ZzT2JqZWN0KGRhdGEuZ2V0KGkpKTtcblx0XHRcdHRoaXMuX2NvbmZpZ1BhcmFtcy5wdXNoKGNvbmZpZ1BhcmFtKTtcblxuXHRcdFx0Ly8gR2V0IHRhYiBhbmQgdGFiIHBhbmUgaWQgZnJvbSBncm91cCBpZFxuXHRcdFx0Y29uc3QgdGFiSWQgPSB0aGlzLlRBQl9QUkVGSVggKyBjb25maWdQYXJhbS5jYXRlZ29yeUlkICsgKHRhYlN1ZmZpeCA/ICdfJyArIHRhYlN1ZmZpeCA6ICcnKTtcblx0XHRcdGNvbnN0IHRhYlBhbmVJZCA9IHRoaXMuVEFCX1BBTkVfUFJFRklYICsgY29uZmlnUGFyYW0uY2F0ZWdvcnlJZCArICh0YWJTdWZmaXggPyAnXycgKyB0YWJTdWZmaXggOiAnJyk7XG5cblx0XHRcdC8vIEJVSUxEIElOVEVSRkFDRSA6OiBUQUJTXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgdGFiIHNwZWNpZmljIGZvciB0aGlzIGdyb3VwIGFscmVhZHkgZXhpc3RzIGluc2lkZSB0aGUgbWFpbkNvbnRhaW5lcjogaWYgbm90LCBjcmVhdGUgaXRcblx0XHRcdC8vIChhIHRhYiBhbHJlYWR5IGV4aXN0cyBpZiBpdCB3YXMgY3JlYXRlZCBpbiBhIHByZXZpb3VzIGxvb3ApXG5cdFx0XHRsZXQgdGFiID0gJChgIyR7bWFpbkNvbnRhaW5lcklkfSA+ICN0YWJzICMke3RhYklkfWApO1xuXG5cdFx0XHRpZiAodGFiLmxlbmd0aCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDcmVhdGUgdGFiIGZvciB0YWIgcGFuZVxuXHRcdFx0XHR0YWIgPSAkKCc8bGk+Jywge2NsYXNzOiAnbmF2LWl0ZW0nfSk7XG5cdFx0XHRcdHRhYi5hcHBlbmQoJCgnPGE+Jywge1xuXHRcdFx0XHRcdGNsYXNzOiAnbmF2LWxpbmsnICsgKGkgPT0gMCA/ICcgYWN0aXZlJyA6ICcnKSxcblx0XHRcdFx0XHRpZDogdGFiSWQsXG5cdFx0XHRcdFx0J2RhdGEtdG9nZ2xlJzogJ3RhYicsXG5cdFx0XHRcdFx0aHJlZjogJyMnICsgdGFiUGFuZUlkLFxuXHRcdFx0XHRcdHJvbGU6ICd0YWInLFxuXHRcdFx0XHRcdCdhcmlhLWNvbnRyb2xzJzogdGFiUGFuZUlkLFxuXHRcdFx0XHRcdCdhcmlhLXNlbGVjdGVkJzogKGkgPT0gMCA/ICd0cnVlJyA6ICdmYWxzZScpLFxuXHRcdFx0XHRcdGh0bWw6IGNvbmZpZ1BhcmFtLmNhdGVnb3J5LFxuXHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0Ly8gQWRkIHRhYiB0byBjb250YWluZXJcblx0XHRcdFx0JChgIyR7bWFpbkNvbnRhaW5lcklkfSA+ICN0YWJzYCkuYXBwZW5kKHRhYik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJVSUxEIElOVEVSRkFDRSA6OiBUQUIgUEFORVNcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSB0YWIgcGFuZSBzcGVjaWZpYyBmb3IgdGhpcyBncm91cCBhbHJlYWR5IGV4aXN0cyBpbnNpZGUgdGhlIG1haW5Db250YWluZXI6IGlmIG5vdCwgY3JlYXRlIGl0XG5cdFx0XHQvLyAoYSB0YWIgcGFuZSBhbHJlYWR5IGV4aXN0cyBpZiBpdCB3YXMgY3JlYXRlZCBpbiBhIHByZXZpb3VzIGxvb3Agb3IgaWYgaXQgZXhpc3RzIHN0YXRpY2FsbHkgaW4gdGhlIGh0bWwgLSBpbiBjYXNlIGl0IGlzIG5lZWRlZCB0byBhZGQgc29tZSBzdGF0aWMgY29udGVudClcblx0XHRcdGxldCB0YWJQYW5lID0gJChgIyR7bWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiAjJHt0YWJQYW5lSWR9YCk7XG5cblx0XHRcdGlmICh0YWJQYW5lLmxlbmd0aCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDcmVhdGUgdGFiIHBhbmVcblx0XHRcdFx0dGFiUGFuZSA9ICQoJzxkaXY+Jywge1xuXHRcdFx0XHRcdGNsYXNzOiAndGFiLXBhbmUnICsgKGkgPT0gMCA/ICcgc2hvdyBhY3RpdmUnIDogJycpLFxuXHRcdFx0XHRcdGlkOiB0YWJQYW5lSWQsXG5cdFx0XHRcdFx0cm9sZTogJ3RhYnBhbmVsJyxcblx0XHRcdFx0XHQnYXJpYS1sYWJlbGxlZGJ5JzogdGFiSWQsXG5cdFx0XHRcdFx0J2RhdGEtZHluYW1pYyc6ICd0cnVlJyxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQWRkIHRhYiBwYW5lIHRvIGNvbnRhaW5lclxuXHRcdFx0XHQkKGAjJHttYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVsc2ApLmFwcGVuZCh0YWJQYW5lKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQlVJTEQgSU5URVJGQUNFIDo6IFRBQiBQQU5FUycgRk9STVxuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGZvcm0gYWxyZWFkeSBleGlzdHMgaW5zaWRlIHRoZSB0YWIgcGFuZTogaWYgbm90LCBjcmVhdGUgaXRcblx0XHRcdGxldCBmb3JtID0gdGFiUGFuZS5maW5kKCdmb3JtJyk7XG5cblx0XHRcdGlmIChmb3JtLmxlbmd0aCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDcmVhdGUgZm9ybVxuXHRcdFx0XHRmb3JtID0gJCgnPGZvcm0+Jywge1xuXHRcdFx0XHRcdGNsYXNzOiAnJyxcblx0XHRcdFx0XHRhdXRvY29tcGxldGU6ICdvZmYnXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIENyZWF0ZSBhbiBpbm5lciBmaWVsZHNldDsgdGhpcyBtaWdodCBiZSB1c2VmdWwgdG8gZWFzaWx5IGRpc2FibGUgdGhlIHdob2xlIGZvcm0gYXQgb25jZSAoYWN0dWFsbHkgd2UgZG9uJ3QgdXNlIGl0IGJlY2F1c2UgS2VuZG8gd2lkZ2V0cyBhcmUgbm90IGRpc2FibGVkIGF1dG9tYXRpY2FsbHkpXG5cdFx0XHRcdGZvcm0uYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxmaWVsZHNldD4nLCB7XG5cdFx0XHRcdFx0XHRjbGFzczogJydcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIEFkZCBmb3JtIHRvIHRhYiBwYW5lXG5cdFx0XHRcdHRhYlBhbmUucHJlcGVuZChmb3JtKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IGZpZWxkc2V0LCB3aGljaCBpcyB0aGUgYWN0dWFsIGZvcm0gaXRlbXMgY29udGFpbmVyXG5cdFx0XHRsZXQgZmllbGRzZXQgPSBmb3JtLmZpbmQoJ2ZpZWxkc2V0Jyk7XG5cblx0XHRcdC8vIEJVSUxEIElOVEVSRkFDRSA6OiBUQUIgUEFORVMnIEZPUk0gSVRFTVNcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgZm9ybSBpdGVtIGFscmVhZHkgZXhpc3RzIGluIGZpZWxkc2V0OyBpZiB5ZXMsIGp1c3QgdXBkYXRlIGl0cyBkYXRhXG5cdFx0XHRsZXQgZm9ybUl0ZW0gPSBmaWVsZHNldC5maW5kKGAjZm9ybS1pdGVtLSR7JC5lc2NhcGVTZWxlY3Rvcihjb25maWdQYXJhbS5uYW1lKX1gKTtcblxuXHRcdFx0aWYgKGZvcm1JdGVtLmxlbmd0aCA9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRoYXNOZXdGb3JtSXRlbSA9IHRydWU7XG5cblx0XHRcdFx0Zm9ybUl0ZW0gPSBDb25maWdGb3JtSXRlbUZhY3RvcnkuY3JlYXRlKGNvbmZpZ1BhcmFtLCAhZGlzYWJsZUVkaXQpO1xuXG5cdFx0XHRcdC8vIEFkZCBzZXBhcmF0b3IgYmVmb3JlXG5cdFx0XHRcdGlmIChjb25maWdQYXJhbS5zZXBhcmF0b3IgIT0gbnVsbCAmJiBjb25maWdQYXJhbS5zZXBhcmF0b3IucG9zID09ICdiZWZvcmUnKVxuXHRcdFx0XHRcdGZpZWxkc2V0LmFwcGVuZCh0aGlzLl9idWlsZFNlcGFyYXRvcihjb25maWdQYXJhbS5zZXBhcmF0b3IpKTtcblxuXHRcdFx0XHQvLyBBZGQgZm9ybSBpdGVtIHRvIGZvcm1cblx0XHRcdFx0ZmllbGRzZXQuYXBwZW5kKGZvcm1JdGVtKTtcblxuXHRcdFx0XHQvLyBBZGQgc2VwYXJhdG9yIGFmdGVyXG5cdFx0XHRcdGlmIChjb25maWdQYXJhbS5zZXBhcmF0b3IgIT0gbnVsbCAmJiBjb25maWdQYXJhbS5zZXBhcmF0b3IucG9zID09ICdhZnRlcicpXG5cdFx0XHRcdFx0ZmllbGRzZXQuYXBwZW5kKHRoaXMuX2J1aWxkU2VwYXJhdG9yKGNvbmZpZ1BhcmFtLnNlcGFyYXRvcikpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRmb3JtSXRlbVswXS5kYXRhID0gY29uZmlnUGFyYW07XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIGxpc3RlbmVyIHRvIHNob3cgaGVscCB0b29sdGlwc1xuXHRcdGxldCBhbGxUYWJQYW5lcyA9ICQoYCMke21haW5Db250YWluZXJJZH0gPiAjdGFiUGFuZWxzID4gZGl2LnRhYi1wYW5lYCk7XG5cdFx0YWxsVGFiUGFuZXMua2VuZG9Ub29sdGlwKHtcblx0XHRcdGZpbHRlcjogJ2lbdGl0bGVdLmhlbHAnLFxuXHRcdFx0cG9zaXRpb246ICdyaWdodCcsXG5cdFx0XHR3aWR0aDogJzI1MHB4Jyxcblx0XHRcdGNvbnRlbnQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwiaGVscC10b29sdGlwXCI+JHtlLnRhcmdldC5kYXRhKCd0aXRsZScpfTwvZGl2PmA7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBJbml0aWFsaXplIGtlbmRvIHZhbGlkYXRpb24gb24gZm9ybXMnIG1haW4gY29udGFpbmVyXG5cdFx0dGhpcy5fdmFsaWRhdG9yID0gJChgIyR7bWFpbkNvbnRhaW5lcklkfWApLmtlbmRvVmFsaWRhdG9yKHtcblx0XHRcdHZhbGlkYXRlT25CbHVyOiB0cnVlLFxuXHRcdFx0cnVsZXM6IHtcblx0XHRcdFx0Ly8gQWRkIHJ1bGUgdG8gdmFsaWRhdGUgQU9JIGZvcm0gaXRlbXNcblx0XHRcdFx0Ly8gKHNlZTogaHR0cHM6Ly9kZW1vcy50ZWxlcmlrLmNvbS9rZW5kby11aS92YWxpZGF0b3IvY3VzdG9tLXZhbGlkYXRpb24pXG5cdFx0XHRcdGFvaTogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHRcdFx0aWYgKGlucHV0LmlzKCdbZGF0YS1hb2ktbXNnXScpICYmIGlucHV0LnZhbCgpICE9ICcnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChpbnB1dC52YWwoKSA9PSAnMCwwLDAnKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHR9XG5cdFx0fSkuZGF0YSgna2VuZG9WYWxpZGF0b3InKTtcblx0fVxuXG5cdGRlc3Ryb3lJbnRlcmZhY2UoKVxuXHR7XG5cdFx0Ly8gRGVzdHJveSBhbGwgS2VuZG8gd2lkZ2V0cyBpbiBmb3Jtc1xuXHRcdGtlbmRvLmRlc3Ryb3koJChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiBkaXYudGFiLXBhbmUgPiBmb3JtYCkpO1xuXG5cdFx0Ly8gUmVtb3ZlIGFsbCB0YWJzXG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJzYCkuZW1wdHkoKTtcblxuXHRcdC8vIFJlbW92ZSBkeW5hbWljIHRhYiBwYW5lcyAodGFiIHBhbmVzIGNyZWF0ZWQgYnkgSW50ZXJmYWNlIEJ1aWxkZXIpXG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiBkaXYudGFiLXBhbmVbZGF0YS1keW5hbWljPVwidHJ1ZVwiXWApLnJlbW92ZSgpO1xuXG5cdFx0Ly8gUmVtb3ZlIGZvcm0gaW5zaWRlIHN0YXRpYyB0YWIgcGFuZXMgKHByZWRlZmluZWQgdGFiIHBhbmVzIGluIGh0bWwpXG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiBkaXYudGFiLXBhbmUgPiBmb3JtYCkucmVtb3ZlKCk7XG5cblx0XHQvLyBSZW1vdmUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIHN0YXRpYyB0YWIgcGFuZXMgKG90aGVyd2lzZSB0aGlzIGNsYXNzIG1lc3NlcyB3aXRoIHRoZSB0YWIgbmF2aWdhdG9yIGZ1bmN0aW9uaW5nKVxuXHRcdCQoYCMke3RoaXMuX21haW5Db250YWluZXJJZH0gPiAjdGFiUGFuZWxzID4gZGl2LnRhYi1wYW5lYCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHR9XG5cblx0ZGlzYWJsZUludGVyZmFjZShkaXNhYmxlKVxuXHR7XG5cdFx0Ly8gRW5hYmxlL2Rpc2FibGUgYWxsIGNvbmZpZyBmb3JtIGl0ZW1zXG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSAqW2lkXj0nZm9ybS1pdGVtLSddYCkucHJvcCgnZWRpdEVuYWJsZWQnLCAhZGlzYWJsZSk7XG5cdH1cblxuXHRfYnVpbGRTZXBhcmF0b3Ioc2VwYXJhdG9yKVxuXHR7XG5cdFx0aWYgKHNlcGFyYXRvci50ZXh0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gJChgPGhyIGNsYXNzPVwiY29uZmlnLWZvcm0tc2VwYXJhdG9yXCI+YCk7XG5cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gJChgPGxhYmVsIGNsYXNzPVwiY29uZmlnLWZvcm0tc2VwYXJhdG9yLWxhYmVsIG1iLTNcIj4ke3NlcGFyYXRvci50ZXh0fTwvbGFiZWw+YCk7XG5cdH1cblxuXHRnZXRDaGFuZ2VkRGF0YSgpXG5cdHtcblx0XHRsZXQgY2hhbmdlcyA9IG5ldyBTRlMyWC5TRlNBcnJheSgpO1xuXG5cdFx0Zm9yICh2YXIgY3Agb2YgdGhpcy5fY29uZmlnUGFyYW1zKVxuXHRcdHtcblx0XHRcdGlmIChjcC5pc01vZGlmaWVkKVxuXHRcdFx0XHRjaGFuZ2VzLmFkZFNGU09iamVjdChjcC50b1Nmc09iamVjdCgpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY2hhbmdlcztcblx0fVxuXG5cdHJlc2V0SXNNb2RpZmllZCgpXG5cdHtcblx0XHRmb3IgKGxldCBjcCBvZiB0aGlzLl9jb25maWdQYXJhbXMpXG5cdFx0e1xuXHRcdFx0aWYgKGNwLmlzTW9kaWZpZWQpXG5cdFx0XHRcdGNwLnJlc2V0SXNNb2RpZmllZCgpO1xuXHRcdH1cblx0fVxuXG5cdGNoZWNrSXNWYWxpZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRhdG9yLnZhbGlkYXRlKCk7XG5cdH1cblxuXHRyZXNldFZhbGlkYXRpb24oKVxuXHR7XG5cdFx0dGhpcy5fdmFsaWRhdG9yLmhpZGVNZXNzYWdlcygpO1xuXG5cdFx0Ly8gVGhlIG1ldGhvZCBhYm92ZSBkb2Vzbid0IHJlbW92ZSB0aGUgay1pbnZhbGlkIGNsYXNzZXMgYW5kIGFyaWEtaW52YWxpZD1cInRydWVcIiBhdHRyaWJ1dGVzIGZyb20gaW5wdXRzXG5cdFx0Ly8gTGV0J3MgZG8gaXQgbWFudWFsbHlcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9IC5rLWludmFsaWRgKS5yZW1vdmVDbGFzcygnay1pbnZhbGlkJyk7XG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSBbYXJpYS1pbnZhbGlkPVwidHJ1ZVwiXWApLnJlbW92ZUF0dHIoJ2FyaWEtaW52YWxpZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlnRm9ybUl0ZW0oY29uZmlnUGFyYW1OYW1lKVxuXHR7XG5cdFx0bGV0IGZvcm1JdGVtID0gJChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfWApLmZpbmQoYCNmb3JtLWl0ZW0tJHskLmVzY2FwZVNlbGVjdG9yKGNvbmZpZ1BhcmFtTmFtZSl9YCk7XG5cblx0XHRpZiAoZm9ybUl0ZW0ubGVuZ3RoID4gMClcblx0XHRcdHJldHVybiBmb3JtSXRlbVswXTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGFjdGl2YXRlRmlyc3RUYWJQYW5lbCgpXG5cdHtcblx0XHRsZXQgY29uZmlnUGFyYW0gPSB0aGlzLl9jb25maWdQYXJhbXNbMF07XG5cdFx0Y29uc3QgdGFiUGFuZUlkID0gdGhpcy5UQUJfUEFORV9QUkVGSVggKyBjb25maWdQYXJhbS5jYXRlZ29yeUlkO1xuXHRcdGxldCB0YWJQYW5lID0gJChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiAjJHt0YWJQYW5lSWR9YCk7XG5cdFx0dGFiUGFuZS5hZGRDbGFzcygnc2hvdyBhY3RpdmUnKTtcblx0fVxufVxuIiwiZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJcbntcblx0c3RhdGljIGZyb21TZnNPYmplY3QoZWxlbWVudClcblx0e1xuXHRcdGxldCBjcCA9IG5ldyBDb25maWd1cmF0aW9uUGFyYW1ldGVyKCk7XG5cblx0XHQvLyBQYXJzZSBjb21tb24gZGF0YVxuXHRcdGNwLm5hbWUgPSBlbGVtZW50LmdldFV0ZlN0cmluZygnbmFtZScpO1xuXHRcdGNwLmxhYmVsID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ2xhYmVsJyk7XG5cdFx0Y3AuY2F0ZWdvcnkgPSBlbGVtZW50LmdldFV0ZlN0cmluZygnY2F0ZWdvcnknKTtcblx0XHRjcC50b29sdGlwID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ3Rvb2x0aXAnKTtcblx0XHRjcC50eXBlID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ3R5cGUnKTtcblx0XHRjcC52YWx1ZSA9IGVsZW1lbnQuZ2V0KCd2YWx1ZScpO1xuXHRcdGNwLnZhbGlkYXRvciA9IGVsZW1lbnQuZ2V0VXRmU3RyaW5nKCd2YWxpZGF0b3InKTtcblx0XHRjcC5lZGl0YWJsZSA9IChlbGVtZW50LmNvbnRhaW5zS2V5KCdlZGl0JykgPyBlbGVtZW50LmdldEJvb2woJ2VkaXQnKSA6IHRydWUpO1xuXHRcdGNwLnRyaWdnZXIgPSAoZWxlbWVudC5jb250YWluc0tleSgndHJpZ2dlcicpID8gZWxlbWVudC5nZXRCb29sKCd0cmlnZ2VyJykgOiBmYWxzZSk7XG5cdFx0Y3AudHJpZ2dlckRhdGEgPSBlbGVtZW50LmdldFNGU0FycmF5KCd0cmlnZ2VyRGF0YScpO1xuXHRcdGNwLmNsaWVudE9ubHkgPSAoZWxlbWVudC5jb250YWluc0tleSgnY2xpZW50T25seScpID8gZWxlbWVudC5nZXRCb29sKCdjbGllbnRPbmx5JykgOiBmYWxzZSk7XG5cdFx0Y3AuZGF0YVByb3ZpZGVyID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ2RhdGFQcm92aWRlcicpO1xuXG5cdFx0Ly8gUGFyc2UgY29tcG9uZW50IHNwZWNpZmljIGF0dHJpYnV0ZXNcblx0XHRsZXQgdG1wQXR0cmlidXRlcyA9IGVsZW1lbnQuZ2V0U0ZTT2JqZWN0KCdhdHRyaWJ1dGVzJyk7XG5cdFx0aWYgKHRtcEF0dHJpYnV0ZXMgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRsZXQgYXR0cmlidXRlcyA9IHt9O1xuXG5cdFx0XHRsZXQga2V5cyA9IHRtcEF0dHJpYnV0ZXMuZ2V0S2V5c0FycmF5KCk7XG5cdFx0XHRmb3IgKGxldCBrZXkgb2Yga2V5cylcblx0XHRcdFx0YXR0cmlidXRlc1trZXldID0gdG1wQXR0cmlidXRlcy5nZXQoa2V5KTtcblxuXHRcdFx0Y3AuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cdFx0fVxuXG5cdFx0Ly8gUGFyc2Ugc2VwYXJhdG9yIHNldHRpbmdzXG5cdFx0bGV0IHRtcFNlcGFyYXRvciA9IGVsZW1lbnQuZ2V0U0ZTT2JqZWN0KCdzZXBhcmF0b3InKTtcblx0XHRpZiAodG1wU2VwYXJhdG9yICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0bGV0IHNlcGFyYXRvciA9IHt9O1xuXG5cdFx0XHRsZXQga2V5czEgPSB0bXBTZXBhcmF0b3IuZ2V0S2V5c0FycmF5KCk7XG5cdFx0XHRmb3IgKGxldCBrZXkxIG9mIGtleXMxKVxuXHRcdFx0XHRzZXBhcmF0b3Jba2V5MV0gPSB0bXBTZXBhcmF0b3IuZ2V0KGtleTEpO1xuXG5cdFx0XHRjcC5zZXBhcmF0b3IgPSBzZXBhcmF0b3I7XG5cdFx0fVxuXG5cdFx0Ly8gUGFyc2UgZGVmYXVsdCBsaXN0IGl0ZW1cblx0XHRsZXQgdG1wRGVmYXVsdExpc3RJdGVtID0gZWxlbWVudC5nZXRTRlNBcnJheSgnZGVmYXVsdExpc3RJdGVtJyk7XG5cdFx0aWYgKHRtcERlZmF1bHRMaXN0SXRlbSAhPSBudWxsICYmIHRtcERlZmF1bHRMaXN0SXRlbS5zaXplKCkgPiAwKVxuXHRcdHtcblx0XHRcdGxldCBkZWZhdWx0TGlzdEl0ZW0gPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0bXBEZWZhdWx0TGlzdEl0ZW0uc2l6ZSgpOyBpKyspXG5cdFx0XHRcdGRlZmF1bHRMaXN0SXRlbS5wdXNoKENvbmZpZ3VyYXRpb25QYXJhbWV0ZXIuZnJvbVNmc09iamVjdCh0bXBEZWZhdWx0TGlzdEl0ZW0uZ2V0U0ZTT2JqZWN0KGkpKSk7XG5cblx0XHRcdGNwLmRlZmF1bHRMaXN0SXRlbSA9IGRlZmF1bHRMaXN0SXRlbTtcblxuXHRcdFx0Ly8gUGFyc2UgbGlzdCB2YWx1ZXNcblx0XHRcdGxldCBsaXN0VmFsdWVzID0gW107XG5cblx0XHRcdGxldCB0bXBMaXN0VmFsdWVzID0gZWxlbWVudC5nZXRTRlNBcnJheSgnbGlzdFZhbHVlcycpO1xuXHRcdFx0aWYgKHRtcExpc3RWYWx1ZXMgIT0gbnVsbCAmJiB0bXBMaXN0VmFsdWVzLnNpemUoKSA+IDApXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAobGV0IHYgPSAwOyB2IDwgdG1wTGlzdFZhbHVlcy5zaXplKCk7IHYrKylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBsaXN0VmFsdWVPYmogPSB0bXBMaXN0VmFsdWVzLmdldFNGU09iamVjdCh2KTtcblx0XHRcdFx0XHRsZXQgb2JqID0ge307XG5cblx0XHRcdFx0XHRsZXQga2V5czIgPSBsaXN0VmFsdWVPYmouZ2V0S2V5c0FycmF5KCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQga2V5MiBvZiBrZXlzMilcblx0XHRcdFx0XHRcdG9ialtrZXkyXSA9IGxpc3RWYWx1ZU9iai5nZXQoa2V5Mik7XG5cblx0XHRcdFx0XHRsaXN0VmFsdWVzLnB1c2gob2JqKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjcC5saXN0VmFsdWVzID0gbGlzdFZhbHVlcztcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIGxpc3QsIG9uIHRoZSBzZXJ2ZXItc2lkZSBpdGVtcyBjb3VsZCBiZSByZXByZXNlbnRlZCBieSBhIGNsYXNzXG5cdFx0XHRjcC5jbGF6eiA9IGVsZW1lbnQuZ2V0VXRmU3RyaW5nKCdjbGF6eicpO1xuXG5cdFx0XHQvLyBBdm9pZCBsaXN0IHRvIGJlIGVtcHRpZWRcblx0XHRcdGNwLmRlbnlFbXB0eSA9IChlbGVtZW50LmNvbnRhaW5zS2V5KCdkZW55RW1wdHknKSA/IGVsZW1lbnQuZ2V0Qm9vbCgnZGVueUVtcHR5JykgOiBmYWxzZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNwO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0LyogQ09OU1RBTlRTICovXG5cdFx0dGhpcy5ERUZBVUxUX0NBVEVHT1JZX05BTUUgPSAnR2VuZXJhbCc7XG5cdFx0dGhpcy5ERUZBVUxUX0NBVEVHT1JZX0lEID0gJ2dlbmVyYWwnO1xuXG5cdFx0LyogUFVCTElDIFZBUlMgKi9cblxuXHRcdHRoaXMubmFtZSA9ICcnO1xuXHRcdHRoaXMubGFiZWwgPSAnJztcblx0XHR0aGlzLnRvb2x0aXAgPSAnJztcblx0XHR0aGlzLnR5cGUgPSBudWxsO1xuXHRcdHRoaXMudHJpZ2dlciA9IGZhbHNlO1xuXHRcdHRoaXMudHJpZ2dlckRhdGEgPSBudWxsO1xuXHRcdHRoaXMuY2xpZW50T25seSA9IGZhbHNlO1xuXHRcdHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuXHRcdHRoaXMuYXR0cmlidXRlcyA9IG51bGw7XG5cdFx0dGhpcy5kYXRhUHJvdmlkZXIgPSBudWxsO1xuXG5cdFx0dGhpcy5zZXBhcmF0b3IgPSBudWxsO1x0XHRcdC8vIFBhcmFtZXRlciB1c2VkIHRvIGNyZWF0ZSBhIHNlcGFyYXRvciBiZWZvcmUgb3IgYWZ0ZXIgdGhlIGNvbmZpZyBwYXJhbWV0ZXJcblx0XHR0aGlzLmRlZmF1bHRMaXN0SXRlbSA9IG51bGw7XHQvLyBMaXN0IG9mIHN1Yi1Db25maWd1cmF0aW9uUGFyYW1ldGVycywgZWFjaCBjb250YWluaW5nIHRoZSBkZWZhdWx0IHZhbHVlc1xuXHRcdHRoaXMuY2xhenogPSBudWxsO1x0XHRcdFx0Ly8gTmFtZSBvZiB0aGUgY2xhc3MgcmVwcmVzZW50aW5nIHRoZSBsaXN0IGl0ZW0gKG5vdCB1c2VkIGluIGNhc2Ugb2YgcHJpbWl0ZXZlIGRhdGEgdHlwZXMpXG5cdFx0dGhpcy5kZW55RW1wdHkgPSBmYWxzZTtcdFx0XHQvLyBEaXNhbGxvdyB0byBlbXB0eSBhIGxpc3QgKERhdGFHcmlkIGNvbmZpZyBwYXJhbWV0ZXIgdHlwZSBvbmx5KVxuXG5cdFx0LyogUFJJVkFURSBWQVJTICovXG5cblx0XHR0aGlzLl9jYXRlZ29yeSA9IHRoaXMuREVGQVVMVF9DQVRFR09SWV9OQU1FO1xuXHRcdHRoaXMuX2NhdGVnb3J5SWQgPSB0aGlzLkRFRkFVTFRfQ0FURUdPUllfSUQ7XG5cdFx0dGhpcy5fdmFsdWUgPSBudWxsO1xuXHRcdHRoaXMuX2luaXRpYWxWYWx1ZSA9IG51bGw7XHRcdC8vIFNhdmUgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyLCB0byBjaGVjayBpZiB0aGUgdmFsdWUgd2FzIG1vZGlmaWVkXG5cdFx0dGhpcy5fdmFsaWRhdG9yID0gbnVsbDtcblxuXHRcdHRoaXMuX2xpc3RJdGVtcyA9IFtdO1x0XHRcdC8vIEFycmF5IG9mIGFycmF5cyBvZiBDb25maWd1cmF0aW9uUGFyYW1ldGVyc1xuXHRcdHRoaXMuX2xpc3RJdGVtc0NoYW5nZWQgPSBmYWxzZTtcdC8vIEZsYWcgdG8gYmUgc2V0IGluIGNhc2UgYSBsaXN0IGl0ZW0gaXMgYWRkZWQgb3IgcmVtb3ZlZFxuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gR0VUVEVSUyAvIFNFVFRFUlNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRzZXQgY2F0ZWdvcnkodmFsKVxuXHR7XG5cdFx0aWYgKHZhbClcblx0XHR7XG5cdFx0XHR0aGlzLl9jYXRlZ29yeSA9IHZhbDtcblx0XHRcdHRoaXMuX3NldElkRnJvbUNhdGVnb3J5TmFtZSh0aGlzLl9jYXRlZ29yeSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGNhdGVnb3J5KClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jYXRlZ29yeTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2YWwpXG5cdHtcblx0XHRpZiAodGhpcy5fdmFsdWUgIT0gdmFsKVxuXHRcdHtcblx0XHRcdC8vIElmIHZhbHVlIGlzIG51bGwsIHRoZW4gd2UgYXJlIHNldHRpbmcgdGhpcyBmb3IgdGhlIGZpcnN0IHRpbWUgYW5kXG5cdFx0XHQvLyB3ZSB3YW50IHRvIHNhdmUgdGhlIGluaXRpYWwgdmFsdWUsIHRvIGNoZWNrIGxhdGVyIGlmIGl0IGhhcyBiZWVuIG1vZGlmaWVkXG5cdFx0XHRpZiAodGhpcy5fdmFsdWUgPT0gbnVsbClcblx0XHRcdFx0dGhpcy5faW5pdGlhbFZhbHVlID0gdmFsO1xuXG5cdFx0XHR0aGlzLl92YWx1ZSA9IHZhbDtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlO1xuXHR9XG5cblx0c2V0IHZhbGlkYXRvcih2YWwpXG5cdHtcblx0XHRpZiAodmFsKVxuXHRcdFx0dGhpcy5fdmFsaWRhdG9yID0gdmFsO1xuXHR9XG5cblx0Z2V0IHZhbGlkYXRvcigpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsaWRhdG9yO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFuIGFycmF5IG9mIG9iamVjdHM7IGVhY2ggb2JqZWN0IGNvbnRhaW5zIHRoZSBuYW1lLXZhbHVlIHBhaXJzIHVzZWQgdG9cblx0ICogcG9wdWxhdGUgdGhlIGxpc3Qgb2Ygc3ViLWNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBhcnJheXMsIGJhc2VkIG9uIGRlZmF1bHRMaXN0SXRlbS5cblx0ICovXG5cdHNldCBsaXN0VmFsdWVzKGFycilcblx0e1xuXHRcdHRoaXMuX3NldFN1YkNvbmZpZ3VyYXRpb25QYXJhbXMoYXJyKTtcblx0fVxuXG5cdGdldCBsaXN0VmFsdWVzKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9nZXRTdWJDb25maWd1cmF0aW9uUGFyYW1zVmFsdWVzKCk7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBHRVRURVJTIE9OTFlcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRnZXQgaXNNb2RpZmllZCgpXG5cdHtcblx0XHRsZXQgX2lzTW9kaWZpZWQgPSBmYWxzZTtcblxuXHRcdC8vIElmIHRoZSBwYXJhbWV0ZXIgaXMgdXNlZCBvbiB0aGUgY2xpZW50IG9ubHkgKGZvciBleGFtcGxlIGluIGEgY3VzdG9tIHRyaWdnZXIpXG5cdFx0Ly8gdGhlbiB3ZSBuZXZlciBoYXZlIHRvIGNvbnNpZGVyIGl0IGFzIG1vZGlmaWVkLCB0byBwcmV2ZW50IGl0IGJlaW5nIHNlbnQgdG8gdGhlIHNlcnZlclxuXHRcdGlmICghdGhpcy5jbGllbnRPbmx5KVxuXHRcdHtcblx0XHRcdGlmICh0aGlzLl92YWx1ZSAhPSB0aGlzLl9pbml0aWFsVmFsdWUgfHwgdGhpcy5fbGlzdEl0ZW1zQ2hhbmdlZClcblx0XHRcdFx0X2lzTW9kaWZpZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBDaGVjayBzdWIgcGFyYW1ldGVyc1xuXHRcdFx0XHRvdXRlckxvb3A6IGZvciAobGV0IGxpc3RJdGVtIG9mIHRoaXMuX2xpc3RJdGVtcylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGZvciAobGV0IHN1YkNQIG9mIGxpc3RJdGVtKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGlmIChzdWJDUC5pc01vZGlmaWVkKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRfaXNNb2RpZmllZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdGJyZWFrIG91dGVyTG9vcDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gX2lzTW9kaWZpZWQ7XG5cdH1cblxuXHRnZXQgY2F0ZWdvcnlJZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fY2F0ZWdvcnlJZDtcblx0fVxuXG5cdGdldCBsaXN0SXRlbXMoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2xpc3RJdGVtcztcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFBVQkxJQyBNRVRIT0RTXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LyoqXG5cdCAqIFJldHVybiBhIGNsb25lIG9mIHRoaXMgQ29uZmlndXJhdGlvblBhcmFtZXRlci5cblx0ICovXG5cdGNsb25lKGNsb25lVmFsdWUgPSBmYWxzZSlcblx0e1xuXHRcdGxldCBjcCA9IG5ldyBDb25maWd1cmF0aW9uUGFyYW1ldGVyKCk7XG5cdFx0Y3AubmFtZSA9IHRoaXMubmFtZTtcblx0XHRjcC5sYWJlbCA9IHRoaXMubGFiZWw7XG5cdFx0Y3AuY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3J5O1xuXHRcdGNwLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG5cdFx0Y3AudHlwZSA9IHRoaXMudHlwZTtcblx0XHRjcC52YWxpZGF0b3IgPSB0aGlzLnZhbGlkYXRvcjtcblx0XHRjcC50cmlnZ2VyID0gdGhpcy50cmlnZ2VyO1xuXHRcdGNwLnRyaWdnZXJEYXRhID0gKHRoaXMudHJpZ2dlckRhdGEgIT0gbnVsbCA/IFNGUzJYLlNGU0FycmF5Lm5ld0Zyb21CaW5hcnlEYXRhKHRoaXMudHJpZ2dlckRhdGEudG9CaW5hcnkoKSkgOiBudWxsKTtcblx0XHRjcC5jbGllbnRPbmx5ID0gdGhpcy5jbGllbnRPbmx5O1xuXHRcdGNwLmRhdGFQcm92aWRlciA9IHRoaXMuZGF0YVByb3ZpZGVyO1xuXG5cdFx0aWYgKGNsb25lVmFsdWUpXG5cdFx0XHRjcC52YWx1ZSA9IHRoaXMudmFsdWU7XG5cblx0XHRpZiAodGhpcy5hdHRyaWJ1dGVzICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0Y3AuYXR0cmlidXRlcyA9IG5ldyBPYmplY3QoKTtcblx0XHRcdGZvciAobGV0IHMxIGluIHRoaXMuYXR0cmlidXRlcylcblx0XHRcdFx0Y3AuYXR0cmlidXRlc1tzMV0gPSB0aGlzLmF0dHJpYnV0ZXNbczFdO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlcGFyYXRvciAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGNwLnNlcGFyYXRvciA9IG5ldyBPYmplY3QoKVxuXHRcdFx0Zm9yIChsZXQgczIgaW4gdGhpcy5zZXBhcmF0b3IpXG5cdFx0XHRcdGNwLnNlcGFyYXRvcltzMl0gPSB0aGlzLnNlcGFyYXRvcltzMl07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZGVmYXVsdExpc3RJdGVtICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0bGV0IGNsb25lZERlZmF1bHRMaXN0SXRlbXMgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgc3ViQ1Agb2YgdGhpcy5kZWZhdWx0TGlzdEl0ZW0pXG5cdFx0XHRcdGNsb25lZERlZmF1bHRMaXN0SXRlbXMucHVzaChzdWJDUC5jbG9uZShjbG9uZVZhbHVlKSk7XG5cblx0XHRcdGNwLmRlZmF1bHRMaXN0SXRlbSA9IGNsb25lZERlZmF1bHRMaXN0SXRlbXM7XG5cdFx0fVxuXG5cdFx0Y3AubGlzdFZhbHVlcyA9IHRoaXMubGlzdFZhbHVlczsgLy8gTm8gbmVlZCB0byBjbG9uZSB0aGlzLCBhcyB0aGUgbGlzdFZhbHVlcyBzZXR0ZXIgYWxyZWFkeSBkb2VzIGl0XG5cdFx0Y3AuY2xhenogPSB0aGlzLmNsYXp6O1xuXHRcdGNwLmRlbnlFbXB0eSA9IHRoaXMuZGVueUVtcHR5O1xuXG5cdFx0cmV0dXJuIGNwO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlc2V0IGluaXRpYWwgdmFsdWUgYnkgY29weWluZyB0aGUgY3VycmVudCB2YWx1ZS5cblx0ICovXG5cdHJlc2V0SXNNb2RpZmllZCgpXG5cdHtcblx0XHR0aGlzLl9pbml0aWFsVmFsdWUgPSB0aGlzLl92YWx1ZTtcblxuXHRcdC8vIFJlc2V0IHN1Yi1wYXJhbWV0ZXJzXG5cdFx0aWYgKHRoaXMuX2xpc3RJdGVtcyAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGZvciAobGV0IGxpc3RJdGVtIG9mIHRoaXMuX2xpc3RJdGVtcylcblx0XHRcdHtcblx0XHRcdFx0Zm9yIChsZXQgc3ViQ1Agb2YgbGlzdEl0ZW0pXG5cdFx0XHRcdFx0c3ViQ1AucmVzZXRJc01vZGlmaWVkKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5fbGlzdEl0ZW1zQ2hhbmdlZCA9IGZhbHNlO1xuXHR9XG5cblx0YWRkTGlzdEl0ZW0obmV3TGlzdEl0ZW0pXG5cdHtcblx0XHR0aGlzLl9saXN0SXRlbXMucHVzaChuZXdMaXN0SXRlbSk7XG5cdFx0dGhpcy5fbGlzdEl0ZW1zQ2hhbmdlZCA9IHRydWU7XG5cdH1cblxuXHR1cGRhdGVMaXN0SXRlbShsaXN0SXRlbSwgaXRlbUluZGV4KVxuXHR7XG5cdFx0dGhpcy5fbGlzdEl0ZW1zW2l0ZW1JbmRleF0gPSBsaXN0SXRlbTtcblx0XHR0aGlzLl9saXN0SXRlbXNDaGFuZ2VkID0gdHJ1ZTtcblx0fVxuXG5cdHJlbW92ZUxpc3RJdGVtKGl0ZW1JbmRleClcblx0e1xuXHRcdHRoaXMuX2xpc3RJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcblx0XHR0aGlzLl9saXN0SXRlbXNDaGFuZ2VkID0gdHJ1ZTtcblx0fVxuXG5cdHRvU2ZzT2JqZWN0KClcblx0e1xuXHRcdGxldCBvYmogPSBuZXcgU0ZTMlguU0ZTT2JqZWN0KCk7XG5cblx0XHQvLyBTZXQgY2hhbmdlZCBzZXR0aW5nIG5hbWVcblx0XHRvYmoucHV0VXRmU3RyaW5nKCduYW1lJywgdGhpcy5uYW1lKTtcblxuXHRcdC8vIFNldCBjaGFuZ2VkIHNldHRpbmcgY2xhc3MsIGlmIGFueVxuXHRcdGlmICh0aGlzLmNsYXp6ICE9IG51bGwpXG5cdFx0XHRvYmoucHV0VXRmU3RyaW5nKCdjbGF6eicsIHRoaXMuY2xhenopO1xuXG5cdFx0aWYgKHRoaXMudmFsdWUgIT0gbnVsbClcblx0XHR7XG5cdFx0XHQvLyBTZXQgY2hhbmdlZCBzZXR0aW5nIHZhbHVlXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09ICdib29sZWFuJylcblx0XHRcdFx0b2JqLnB1dEJvb2woJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ251bWJlcicpXG5cdFx0XHRcdG9iai5wdXRJbnQoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdG9iai5wdXRUZXh0KCd2YWx1ZScsIHRoaXMudmFsdWUpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0Ly8gU2V0IGNoYW5nZWQgc2V0dGluZyBsaXN0IG9mIHZhbHVlc1xuXG5cdFx0XHRsZXQgbGlzdEl0ZW1zID0gbmV3IFNGUzJYLlNGU0FycmF5KCk7XG5cblx0XHRcdGZvciAobGV0IGEgb2YgdGhpcy5fbGlzdEl0ZW1zKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoYS5sZW5ndGggPT0gMSkgLy8gV2UgaGF2ZSBqdXN0IG9uZSBzdWIgY29uZmlnIHBhcmFtOyBubyBuZWVkIHRvIHBhcnNlIGl0IGNvbXBsaXRlbHlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIFNpbXBsZSBsaXN0XG5cdFx0XHRcdFx0bGV0IHRlbXBPYmogPSBhWzBdLnRvU2ZzT2JqZWN0KCk7XG5cdFx0XHRcdFx0bGV0IHdhID0gdGVtcE9iai5nZXRXcmFwcGVkSXRlbSgndmFsdWUnKTtcblx0XHRcdFx0XHRsaXN0SXRlbXMuYWRkKHdhLnZhbHVlLCB3YS50eXBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQvLyBDb21wbGV4IGxpc3RcblxuXHRcdFx0XHRcdGxldCB2YWx1ZXMgPSBuZXcgU0ZTMlguU0ZTQXJyYXkoKTtcblxuXHRcdFx0XHRcdGZvciAobGV0IHN1YkNwIG9mIGEpXG5cdFx0XHRcdFx0XHR2YWx1ZXMuYWRkU0ZTT2JqZWN0KHN1YkNwLnRvU2ZzT2JqZWN0KCkpO1xuXG5cdFx0XHRcdFx0bGlzdEl0ZW1zLmFkZFNGU0FycmF5KHZhbHVlcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0b2JqLnB1dFNGU0FycmF5KCd2YWx1ZScsIGxpc3RJdGVtcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iajtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBkZXNjcmlwdGlvbiBvZiB0aGUgQ29uZmlndXJhdGlvblBhcmFtZXRlciBpbnN0YW5jZS5cblx0ICovXG5cdHRvU3RyaW5nKClcblx0e1xuXHRcdGxldCBzID0gYGA7XG5cdFx0cyArPSBgQ29uZmlndXJhdGlvbiBwYXJhbWV0ZXI6ICR7dGhpcy5uYW1lfVxcbmA7XG5cdFx0cyArPSBgXFx0dHlwZTogJHt0aGlzLnR5cGV9XFxuYDtcblx0XHRzICs9IGBcXHRsYWJlbDogJHt0aGlzLmxhYmVsfVxcbmA7XG5cdFx0cyArPSBgXFx0Y2F0ZWdvcnkgbmFtZTogJHt0aGlzLmNhdGVnb3J5fVxcbmA7XG5cdFx0cyArPSBgXFx0Y2F0ZWdvcnkgaWQ6ICR7dGhpcy5jYXRlZ29yeUlkfVxcbmA7XG5cdFx0cyArPSBgXFx0dG9vbHRpcDogJHt0aGlzLnRvb2x0aXB9XFxuYDtcblx0XHRzICs9IGBcXHR2YWx1ZTogJHt0aGlzLnZhbHVlfVxcbmA7XG5cdFx0cyArPSBgXFx0dHJpZ2dlcjogJHt0aGlzLnRyaWdnZXJ9XFxuYDtcblx0XHRzICs9IGBcXHR0cmlnZ2VyIGRhdGE6ICR7dGhpcy50cmlnZ2VyRGF0YX1cXG5gO1xuXHRcdHMgKz0gYFxcdGNsaWVudCBvbmx5OiAke3RoaXMuY2xpZW50T25seX1cXG5gO1xuXHRcdHMgKz0gYFxcdHZhbGlkYXRvcjogJHt0aGlzLnZhbGlkYXRvcn1cXG5gO1xuXHRcdHMgKz0gYFxcdGlzIG1vZGlmaWVkOiAke3RoaXMuaXNNb2RpZmllZH1cXG5gO1xuXG5cdFx0aWYgKHRoaXMuYXR0cmlidXRlcyAhPSBudWxsKVxuXHRcdHtcblx0XHRcdHMgKz0gYFxcdGNvbXBvbmVudCBhdHRyaWJ1dGVzOlxcbmA7XG5cblx0XHRcdGZvciAobGV0IHMxIGluIHRoaXMuYXR0cmlidXRlcylcblx0XHRcdFx0cyArPSBgXFx0XFx0JHtzMX0gLS0+ICR7dGhpcy5hdHRyaWJ1dGVzW3MxXX1cXG5gO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmRhdGFQcm92aWRlciAhPSBudWxsKVxuXHRcdFx0cyArPSBgXFx0ZGF0YSBwcm92aWRlcjogJHt0aGlzLmRhdGFQcm92aWRlcn1cXG5gO1xuXG5cdFx0aWYgKHRoaXMuc2VwYXJhdG9yICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0cyArPSBgXFx0c2VwYXJhdG9yOlxcbmA7XG5cblx0XHRcdGZvciAobGV0IHMyIGluIHRoaXMuc2VwYXJhdG9yKVxuXHRcdFx0XHRzICs9IGBcXHRcXHQke3MyfSAtLT4gJHt0aGlzLnNlcGFyYXRvcltzMl19XFxuYDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fbGlzdEl0ZW1zICE9IG51bGwgJiYgdGhpcy5fbGlzdEl0ZW1zLmxlbmd0aCA+IDApXG5cdFx0e1xuXHRcdFx0cyArPSBgXFx0IyBsaXN0IGl0ZW1zOiAke3RoaXMuX2xpc3RJdGVtcy5sZW5ndGh9XFxuYDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9saXN0SXRlbXMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdHMgKz0gYFxcdGxpc3QgaXRlbSAke2l9IHN1Yi1wYXJhbWV0ZXJzOlxcbmA7XG5cdFx0XHRcdGZvciAobGV0IGUgPSAwOyBlIDwgdGhpcy5fbGlzdEl0ZW1zW2ldLmxlbmd0aDsgZSsrKVxuXHRcdFx0XHRcdHMgKz0gYFxcdFxcdCR7dGhpcy5fbGlzdEl0ZW1zW2ldW2VdLnRvQ29tcGFjdFN0cmluZygpfVxcbmA7XG5cdFx0XHR9XG5cblx0XHRcdHMgKz0gYFxcdGNsYXNzIG5hbWU6ICR7dGhpcy5jbGF6en1cXG5gO1xuXHRcdFx0cyArPSBgXFx0ZGVueSBlbXB0eSBsaXN0OiAke3RoaXMuZGVueUVtcHR5fVxcbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgY29tcGFjdCBkZXNjcmlwdGlvbiBvZiB0aGUgQ29uZmlndXJhdGlvblBhcmFtZXRlciBpbnN0YW5jZS5cblx0ICovXG5cdHRvQ29tcGFjdFN0cmluZygpXG5cdHtcblx0XHRyZXR1cm4gYENvbmZpZ3VyYXRpb24gcGFyYW1ldGVyICcke3RoaXMubmFtZX0nOiAke3RoaXMudmFsdWV9ICR7dGhpcy5pc01vZGlmaWVkID8gJ1tYXScgOiAnWyBdJ31gO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUFJJVkFURSBNRVRIT0RTXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LyoqXG5cdCAqIFJldHJpZXZlIHRoZSBjYXRlZ29yeSBpZCBmb3JtIHRoZSBjYXRlZ29yeSBuYW1lLlxuXHQgKiBTcGFjZXMgYW5kIGludmFsaWQgY2hhcmFjdGVycyBhcmUgcmVtb3ZlZDsgd29yZHMgYXJlIHNlcGFyYXRlZCB1c2luZyBjYXBpdGFscy5cblx0ICovXG5cdF9zZXRJZEZyb21DYXRlZ29yeU5hbWUoY2F0ZWdvcnlOYW1lKVxuXHR7XG5cdFx0dGhpcy5fY2F0ZWdvcnlJZCA9IGNhdGVnb3J5TmFtZTtcblxuXHRcdC8vIFN0cmlwIGludmFsaWQgY2hhcmFjdGVyc1xuXHRcdHZhciBwYXR0ZXJuID0gL1teMC05YS16QS1aXS9nO1xuXHRcdHRoaXMuX2NhdGVnb3J5SWQgPSB0aGlzLl9jYXRlZ29yeUlkLnJlcGxhY2UocGF0dGVybiwgJyAnKTtcblxuXHRcdC8vIENhcGl0YWxpemUgd29yZHNcblx0XHR2YXIgd29yZHMgPSB0aGlzLl9jYXRlZ29yeUlkLnNwbGl0KCcgJyk7XG5cdFx0dGhpcy5fY2F0ZWdvcnlJZCA9ICcnO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKylcblx0XHR7XG5cdFx0XHRsZXQgd29yZCA9IHdvcmRzW2ldO1xuXHRcdFx0aWYgKHdvcmQubGVuZ3RoID4gMClcblx0XHRcdFx0dGhpcy5fY2F0ZWdvcnlJZCArPSAoaSA+IDAgPyB3b3JkLnN1YnN0cigwLDEpLnRvVXBwZXJDYXNlKCkgOiB3b3JkLnN1YnN0cigwLDEpLnRvTG93ZXJDYXNlKCkpICsgKHdvcmQubGVuZ3RoID4gMSA/IHdvcmQuc3Vic3RyKDEpIDogXCJcIik7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2NhdGVnb3J5SWQubGVuZ3RoID09IDApXG5cdFx0XHR0aGlzLl9jYXRlZ29yeUlkID0gdGhpcy5ERUZBVUxUX0NBVEVHT1JZX0lEO1xuXHR9XG5cblx0X3NldFN1YkNvbmZpZ3VyYXRpb25QYXJhbXMoX2xpc3RWYWx1ZXMpXG5cdHtcblx0XHR0aGlzLl9saXN0SXRlbXMgPSBbXTtcblxuXHRcdGZvciAobGV0IG9iaiBvZiBfbGlzdFZhbHVlcylcblx0XHR7XG5cdFx0XHRsZXQgbGlzdEl0ZW0gPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgZGVmYXVsdENQIG9mIHRoaXMuZGVmYXVsdExpc3RJdGVtKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgc3ViQ1AgPSBkZWZhdWx0Q1AuY2xvbmUoZmFsc2UpO1xuXHRcdFx0XHRzdWJDUC52YWx1ZSA9IG9ialtzdWJDUC5uYW1lXTtcblxuXHRcdFx0XHRsaXN0SXRlbS5wdXNoKHN1YkNQKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fbGlzdEl0ZW1zLnB1c2gobGlzdEl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRTdWJDb25maWd1cmF0aW9uUGFyYW1zVmFsdWVzKClcblx0e1xuXHRcdGxldCBfbGlzdFZhbHVlcyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgbGlzdEl0ZW0gb2YgdGhpcy5fbGlzdEl0ZW1zKVxuXHRcdHtcblx0XHRcdGxldCBvYmogPSB7fTtcblxuXHRcdFx0Zm9yIChsZXQgc3ViQ1Agb2YgbGlzdEl0ZW0pXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChzdWJDUC52YWx1ZSAhPSBudWxsKVxuXHRcdFx0XHRcdG9ialtzdWJDUC5uYW1lXSA9IHN1YkNQLnZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRfbGlzdFZhbHVlcy5wdXNoKG9iaik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIF9saXN0VmFsdWVzO1xuXHR9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4SEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekxBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsWEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==