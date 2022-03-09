/*! (c) gotoAndPlay | All rights reserved */
(window["webpackJsonpapplication"] = window["webpackJsonpapplication"] || []).push([["module-11~module-14~module-15"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvcmUvbW9kdWxlcy9tb2R1bGUtMTF+bW9kdWxlLTE0fm1vZHVsZS0xNS5idW5kbGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctY2hlY2stYm94LmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1kcm9wLWRvd24tbGlzdC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci9jb25maWctZHVhbC1saXN0LmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLWdyaWQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLWxhYmVsLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1udW1lcmljLXN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLXRleHQtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLXZlY3Rvci0zZC5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy9jb21wb25lbnRzL3VpYnVpbGRlci93aWRnZXRzL2xpc3QtaXRlbS1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy91aWJ1aWxkZXIvd2lkZ2V0cy92ZWN0b3ItM2QtaW5wdXQuanMiLCJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvdXRpbHMvdWlidWlsZGVyL2NvbmZpZy1mb3JtLWl0ZW0tZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9hcHBsaWNhdGlvbi8uL3NyYy91dGlscy91aWJ1aWxkZXIvY29uZmlnLWludGVyZmFjZS1idWlsZGVyLmpzIiwid2VicGFjazovL2FwcGxpY2F0aW9uLy4vc3JjL3V0aWxzL3VpYnVpbGRlci9jb25maWd1cmF0aW9uLXBhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbmZpZ0Zvcm1JdGVtfSBmcm9tICcuL2NvbmZpZy1mb3JtLWl0ZW0nO1xuaW1wb3J0IHtDb25maWdMYWJlbH0gZnJvbSAnLi9jb25maWctbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnQ2hlY2tCb3ggZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdFx0bGV0IGNvbmZpZyA9IHtcblx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0Y2xhc3M6ICcnLFxuXHRcdFx0XHRpZDogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHRuYW1lOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdCdkYXRhLXJvbGUnOiAnc3dpdGNoJyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKTtcblxuXHRcdFx0Ly8gU2V0IGFkZGl0aW9uYWwgd2lkZ2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gdmFsaWRhdGlvbiBydWxlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHdpZGdldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuICAgX2luaXRpYWxpemUoKVxuICAge1xuXHQgICBpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0ICAge1xuXHRcdCAgIC8vIEluaXRpYWxpemUga2VuZG8gd2lkZ2V0XG5cdFx0ICAga2VuZG8uaW5pdCh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdCAgIC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHQgICB0aGlzLl9pbm5lcldpZGdldCA9IHRoaXMuX3dpZGdldEh0bWwuZGF0YSgna2VuZG9Td2l0Y2gnKTtcblxuXHRcdCAgIC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdCAgIHRoaXMuX2lubmVyV2lkZ2V0LmJpbmQoJ2NoYW5nZScsICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSk7XG5cdCAgIH1cblxuXHQgICAvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0ICAgc3VwZXIuX2luaXRpYWxpemUoKTtcbiAgIH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCB0aGUgbGFiZWwgdGV4dCBpcyBzZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQudmFsdWUodGhpcy5fZGF0YS52YWx1ZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC52YWx1ZSA9IHRoaXMuX2RhdGEudmFsdWU7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIGRpc2FibGVkIHN0YXRlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHRcdHRoaXMuX2lubmVyV2lkZ2V0LmVuYWJsZSh0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5faW5uZXJXaWRnZXQudmFsdWUoKTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy1jaGVjay1ib3gnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWNoZWNrLWJveCcsIENvbmZpZ0NoZWNrQm94KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEcm9wRG93bkxpc3QgZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdFx0bGV0IGNvbmZpZyA9IHtcblx0XHRcdFx0Y2xhc3M6ICdmb3JtLWNvbnRyb2wnLFxuXHRcdFx0XHRpZDogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHRuYW1lOiB0aGlzLl9kYXRhLm5hbWUsXG5cdFx0XHRcdCdkYXRhLXJvbGUnOiAnZHJvcGRvd25saXN0Jyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKTtcblxuXHRcdFx0Ly8gU2V0IGFkZGl0aW9uYWwgd2lkZ2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gdmFsaWRhdGlvbiBydWxlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHdpZGdldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuICAgX2luaXRpYWxpemUoKVxuICAge1xuXHQgICBpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0ICAge1xuXHRcdCAgIC8vIEluaXRpYWxpemUga2VuZG8gd2lkZ2V0XG5cdFx0ICAga2VuZG8uaW5pdCh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdCAgIC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHQgICB0aGlzLl9pbm5lcldpZGdldCA9IHRoaXMuX3dpZGdldEh0bWwuZGF0YSgna2VuZG9Ecm9wRG93bkxpc3QnKTtcblxuXHRcdCAgIC8vIFNldCBsaXN0IGl0ZW1zXG5cdFx0ICAgdGhpcy5faW5uZXJXaWRnZXQuc2V0RGF0YVNvdXJjZSh0aGlzLl9nZXREYXRhU291cmNlKHRoaXMuX2RhdGEuZGF0YVByb3ZpZGVyKSlcblxuXHRcdCAgIC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdCAgIHRoaXMuX3dpZGdldEh0bWwuYmluZCgnY2hhbmdlJywgJC5wcm94eSh0aGlzLl9vblZhbHVlSW5wdXQsIHRoaXMpKTtcblx0ICAgfVxuXG5cdCAgIC8vIFByb2NlZWQgd2l0aCBpbml0aWFsaXphdGlvblxuXHQgICBzdXBlci5faW5pdGlhbGl6ZSgpO1xuICAgfVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIHRoZSBsYWJlbCB0ZXh0IGlzIHNldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0VmFsdWUoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0XHR0aGlzLl9pbm5lcldpZGdldC52YWx1ZSh0aGlzLl9kYXRhLnZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLnZhbHVlID0gdGhpcy5fZGF0YS52YWx1ZTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQud3JhcHBlci5hdHRyKCdkaXNhYmxlZCcsICF0aGlzLl9lZGl0RW5hYmxlZCk7XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5faW5uZXJXaWRnZXQudmFsdWUoKTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdF9nZXREYXRhU291cmNlKGRwU3RyaW5nKVxuXHR7XG5cdFx0aWYgKGRwU3RyaW5nKVxuXHRcdFx0cmV0dXJuIGRwU3RyaW5nLnNwbGl0KCcsJyk7XG5cblx0XHQvLyBJbiBjYXNlIHRoZSBkYXRhcHJvdmlkZXIgaXMgZW1wdHksIGFkZCBhdCBsZWFzdCB0aGUgY3VycmVudCB2YWx1ZVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbdGhpcy5fZGF0YS52YWx1ZV07XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctZHJvcC1kb3duLWxpc3QnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLWRyb3AtZG93bi1saXN0JywgQ29uZmlnRHJvcERvd25MaXN0KTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW19IGZyb20gJy4vY29uZmlnLWZvcm0taXRlbSc7XG5pbXBvcnQge0NvbmZpZ0xhYmVsfSBmcm9tICcuL2NvbmZpZy1sYWJlbCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdEdWFsTGlzdCBleHRlbmRzIENvbmZpZ0Zvcm1JdGVtXG57XG5cdGNvbnN0cnVjdG9yKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpXG5cdHtcblx0ICAgIHN1cGVyKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB3aWRnZXQgdG8gcmVuZGVyIHRoZSBDb25maWdQYXJhbWV0ZXIuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X2dlbmVyYXRlSW5uZXJXaWRnZXQoKVxuXHR7XG5cdFx0dGhpcy5fd2lkZ2V0SHRtbCA9ICQoJzxkaXY+Jyk7XG5cblx0XHRjb25zdCBhdmFpbGFibGVJZCA9IHRoaXMuX2dldElkKHRoaXMuX2RhdGEubmFtZSwgJ2F2YWlsYWJsZScpO1xuXHRcdGNvbnN0IHNlbGVjdGVkSWQgPSB0aGlzLl9nZXRJZCh0aGlzLl9kYXRhLm5hbWUsICdzZWxlY3RlZCcpO1xuXG5cdFx0Ly8gQ3JlYXRlIGhlYWRlciBmb3IgbGFiZWxzXG5cdFx0bGV0IGhlYWRlciA9ICQoJzxkaXY+Jywge2NsYXNzOiAnZm9ybS1sYWJlbC1jb250YWluZXIgZHVhbC1saXN0LWxhYmVscyd9KTtcblxuXHRcdGhlYWRlci5hcHBlbmQoJCgnPGxhYmVsPicsIHtcblx0XHRcdGNsYXNzOiAnZm9udC1pdGFsaWMgZm9ybS1sYWJlbCBkdWFsLWxpc3QtbGVmdC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0XHRmb3I6IGF2YWlsYWJsZUlkLFxuXHRcdH0pLnRleHQoJ0F2YWlsYWJsZScpKTtcblxuXHRcdGhlYWRlci5hcHBlbmQoJCgnPGxhYmVsPicsIHtcblx0XHRcdGNsYXNzOiAnZm9udC1pdGFsaWMgZm9udC13ZWlnaHQtYm9sZCBmb3JtLWxhYmVsIGR1YWwtbGlzdC1yaWdodC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0XHRmb3I6IHNlbGVjdGVkSWQsXG5cdFx0fSkudGV4dCgnU2VsZWN0ZWQnKSk7XG5cblx0XHR0aGlzLl93aWRnZXRIdG1sLmFwcGVuZChoZWFkZXIpO1xuXG5cdFx0Ly8gQWRkIGF2YWlsYWJsZSBpdGVtcyBsaXN0XG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdEh0bWwgPSAkKCc8c2VsZWN0PicsIHtcblx0XHRcdGlkOiBhdmFpbGFibGVJZCxcblx0XHRcdGNsYXNzOiAnZHVhbC1saXN0LWxlZnQtY29sJyArICghdGhpcy5fZGF0YS5lZGl0YWJsZSA/ICcgbm8taW50ZXJhY3QnIDogJycpLFxuXHRcdH0pO1xuXHRcdHRoaXMuX3dpZGdldEh0bWwuYXBwZW5kKHRoaXMuX2F2YWlsYWJsZUxpc3RIdG1sKTtcblxuXHRcdC8vIEFkZCBzZWxlY3RlZCBpdGVtcyBsaXN0XG5cdFx0dGhpcy5fc2VsZWN0ZWRMaXN0SHRtbCA9ICQoJzxzZWxlY3Q+Jywge1xuXHRcdFx0aWQ6IHNlbGVjdGVkSWQsXG5cdFx0XHRjbGFzczogJ2R1YWwtbGlzdC1yaWdodC1jb2wnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJyksXG5cdFx0fSk7XG5cdFx0dGhpcy5fd2lkZ2V0SHRtbC5hcHBlbmQodGhpcy5fc2VsZWN0ZWRMaXN0SHRtbCk7XG5cblx0XHQvLyBSZXR1cm4gY29tcG9uZW50XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldEh0bWw7XG5cdH1cblxuXHQvLyBJRHMgY29udGFpbmluZyBhIFwiLlwiIGNhdXNlIGlzc3VlcyB0byBjb25uZWN0ZWQgbGlzdHNcblx0X2dldElkKG5hbWUsIHN1ZmZpeClcblx0e1xuXHRcdHJldHVybiBuYW1lLnJlcGxhY2UoJy4nLCAnXycpICsgJy0nICsgc3VmZml4O1xuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgd2lkZ2V0LlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9pbml0aWFsaXplKClcblx0e1xuXHRcdC8vIEluaXRpYWxpemUgXCJhdmFsYWJsZVwiIGxpc3Rib3hcblx0XHR0aGlzLl9hdmFpbGFibGVMaXN0ID0gdGhpcy5fYXZhaWxhYmxlTGlzdEh0bWwua2VuZG9MaXN0Qm94KHtcbiAgICAgICAgICAgIGNvbm5lY3RXaXRoOiB0aGlzLl9nZXRJZCh0aGlzLl9kYXRhLm5hbWUsICdzZWxlY3RlZCcpLFxuICAgICAgICAgICAgdG9vbGJhcjoge1xuICAgICAgICAgICAgICAgIHRvb2xzOiB0aGlzLl9kYXRhLmVkaXRhYmxlID8gWyd0cmFuc2ZlclRvJywgJ3RyYW5zZmVyRnJvbScsICd0cmFuc2ZlckFsbFRvJywgJ3RyYW5zZmVyQWxsRnJvbSddIDogW11cbiAgICAgICAgICAgIH0sXG5cdFx0XHR0ZW1wbGF0ZTogXCI8ZGl2PiM6dmFsdWUjPC9kaXY+XCIsXG5cdFx0XHRzZWxlY3RhYmxlOiAnbXVsdGlwbGUnLFxuICAgICAgICB9KS5kYXRhKCdrZW5kb0xpc3RCb3gnKTtcblxuXHRcdC8vIEluaXRpYWxpemUgXCJzZWxlY3RlZFwiIGxpc3Rib3hcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRMaXN0ID0gdGhpcy5fc2VsZWN0ZWRMaXN0SHRtbC5rZW5kb0xpc3RCb3goe1xuXHRcdFx0dGVtcGxhdGU6IFwiPGRpdj4jOnZhbHVlIzwvZGl2PlwiLFxuXHRcdFx0c2VsZWN0YWJsZTogJ211bHRpcGxlJyxcblx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgbGlzdGVuZXJzIGNhbid0IGJlIHVzZWQgYmVjYXVzZSBldmVudHMgYXJlIGZpcmVkIGJlZm9yZSB0aGUgZGF0YXNvdXJjZSBpcyBhY3R1YWxseSB1cGRhdGVkXG5cdFx0XHQvLyBXZSBoYXZlIHRvIHVzZSBhIGNoYW5nZSBldmVudCBsaXN0ZW5lciBvbiB0aGUgZGF0YXNvdXJjZSAoc2VlIGJlbG93KSwgZXZlbiBpZiBub3Qgb3B0aW1hbFxuXHRcdFx0Ly9hZGQ6ICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSxcblx0XHRcdC8vcmVtb3ZlOiAkLnByb3h5KHRoaXMuX29uVmFsdWVJbnB1dCwgdGhpcyksXG5cdFx0fSkuZGF0YSgna2VuZG9MaXN0Qm94Jyk7XG5cblx0XHQvLyBQcm9jZWVkIHdpdGggaW5pdGlhbGl6YXRpb25cblx0XHRzdXBlci5faW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkYXRhc291cmNlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRWYWx1ZSgpXG5cdHtcblx0XHRsZXQgYXZhaWxhYmxlQXJyID0gdGhpcy5fZGF0YS5kYXRhUHJvdmlkZXIgIT0gJycgPyB0aGlzLl9kYXRhLmRhdGFQcm92aWRlci5zcGxpdCgnLCcpIDogW107XG5cdFx0bGV0IHNlbGVjdGVkQXJyID0gdGhpcy5fZGF0YS52YWx1ZSAhPSAnJyA/IHRoaXMuX2RhdGEudmFsdWUuc3BsaXQoJywnKSA6IFtdO1xuXG5cdFx0Ly8gUmVtb3ZlIHNlbGVjdGVkIHZhbHVlcyBmcm9tIGF2YWlsYWJsZSB2YWx1ZXNcblx0XHRpZiAoc2VsZWN0ZWRBcnIubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRsZXQgdGVtcCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCB2YWwgb2YgYXZhaWxhYmxlQXJyKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoc2VsZWN0ZWRBcnIuaW5kZXhPZih2YWwpID09IC0xKVxuXHRcdFx0XHRcdHRlbXAucHVzaCh2YWwpO1xuXHRcdFx0fVxuXG5cdFx0XHRhdmFpbGFibGVBcnIgPSB0ZW1wO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgbGlzdHMgb2Ygc3RyaW5ncyB0byBsaXN0cyBvZiBvYmplY3RzXG5cdFx0bGV0IGF2YWlsYWJsZVZhbHVlcyA9IFtdO1xuXHRcdGZvciAobGV0IHZhbCBvZiBhdmFpbGFibGVBcnIpXG5cdFx0XHRhdmFpbGFibGVWYWx1ZXMucHVzaCh7dmFsdWU6IHZhbH0pO1xuXG5cdFx0bGV0IHNlbGVjdGVkVmFsdWVzID0gW107XG5cdFx0Zm9yIChsZXQgdmFsIG9mIHNlbGVjdGVkQXJyKVxuXHRcdFx0c2VsZWN0ZWRWYWx1ZXMucHVzaCh7dmFsdWU6IHZhbH0pO1xuXG5cdFx0Ly8gQ2xlYXIgc2VsZWN0aW9uXG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXHRcdHRoaXMuX3NlbGVjdGVkTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXG5cdFx0Ly8gU2V0IGRhdGFzb3VyY2VzXG5cdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5zZXREYXRhU291cmNlKG5ldyBrZW5kby5kYXRhLkRhdGFTb3VyY2Uoe1xuXHRcdFx0ZGF0YTogYXZhaWxhYmxlVmFsdWVzXG5cdFx0fSkpO1xuXG5cdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LnNldERhdGFTb3VyY2UobmV3IGtlbmRvLmRhdGEuRGF0YVNvdXJjZSh7XG5cdFx0XHRkYXRhOiBzZWxlY3RlZFZhbHVlcyxcblx0XHRcdC8vIFdlIGxpc3RlbiB0byB0aGUgY2hhbmdlIGV2ZW50IGluc3RlYWQgb2YgdGhlIGFkZC9yZW1vdmUgZXZlbnRzIG9uIHRoZSBsaXN0Ym94LCBiZWNhdXNlIHRob3NlIGFyZSBmaXJlZCBiZWZvcmUgdGhlIGRhdGFzb3VyY2UgaXMgdXBkYXRlZFxuXHRcdFx0Ly8gVGhpcyBpcyBub3Qgb3B0aW1hbCBiZWNhdXNlIHRoZSBldmVudCBpcyBmaXJlZCBmb3IgZWFjaCBpdGVtIGFkZGVkIHRvIG9yIHJlbW92ZWQgZnJvbSB0aGUgZGF0YXNvdXJjZVxuXHRcdFx0Y2hhbmdlOiAkLnByb3h5KHRoaXMuX29uVmFsdWVJbnB1dCwgdGhpcylcblx0XHR9KSk7XG5cblx0XHQvLyBEaXNhYmxlIGVkaXRpbmdcblx0XHRpZiAoIXRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5lbmFibGUoJy5rLWl0ZW0nLCBmYWxzZSk7XG5cdFx0XHR0aGlzLl9zZWxlY3RlZExpc3QuZW5hYmxlKCcuay1pdGVtJywgZmFsc2UpO1xuXHRcdH1cblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIENsZWFyIHNlbGVjdGlvblxuXHRcdFx0dGhpcy5fYXZhaWxhYmxlTGlzdC5jbGVhclNlbGVjdGlvbigpO1xuXHRcdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LmNsZWFyU2VsZWN0aW9uKCk7XG5cblx0XHRcdC8vIEVuYWJsZS9kaXNhYmxlIGxpc3RzXG5cdFx0XHR0aGlzLl9hdmFpbGFibGVMaXN0LndyYXBwZXIuYXR0cignZGlzYWJsZWQnLCAhdGhpcy5fZWRpdEVuYWJsZWQpO1xuXHRcdFx0dGhpcy5fc2VsZWN0ZWRMaXN0LndyYXBwZXIuYXR0cignZGlzYWJsZWQnLCAhdGhpcy5fZWRpdEVuYWJsZWQpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgQ29uZmlndXJhdGlvbiBQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uVmFsdWVJbnB1dChlKVxuXHR7XG5cdFx0bGV0IGxpc3REYXRhID0gdGhpcy5fc2VsZWN0ZWRMaXN0LmRhdGFTb3VyY2UuZGF0YSgpO1xuXG5cdFx0Ly8gVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHRvIG5ldyB2YWx1ZVxuXHRcdHRoaXMuX2RhdGEudmFsdWUgPSBsaXN0RGF0YS5tYXAoZSA9PiBlLnZhbHVlKS5qb2luKCcsJyk7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctZHVhbC1saXN0JykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbmZpZy1kdWFsLWxpc3QnLCBDb25maWdEdWFsTGlzdCk7XG4iLCJleHBvcnQgY2xhc3MgQ29uZmlnRm9ybUl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudFxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5pZCA9ICdmb3JtLWl0ZW0tJyArIGNvbmZpZ1BhcmFtLm5hbWU7XG5cdFx0dGhpcy5fZWRpdEVuYWJsZWQgPSBlZGl0RW5hYmxlZDtcblx0XHR0aGlzLl9kYXRhID0gY29uZmlnUGFyYW07XG5cblx0XHQvLyBDcmVhdGUgZm9ybSBpdGVtIHZpZXdcblx0XHR0aGlzLl9idWlsZFZpZXcoaW5EaWFsb2cpO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBmb3JtIGl0ZW1cblx0XHR0aGlzLl9pbml0aWFsaXplKCk7XG5cdH1cblxuXHRjb25uZWN0ZWRDYWxsYmFjaygpXG5cdHtcblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0Ly8gTk9URTogd2hlbiBhIENvbmZpZ0Zvcm1JdGVtIGlzIGluc3RhbnRpYXRlZCwgdGhlIF90cmlnZ2VyRXZlbnQgbWV0aG9kIGlzIGNhbGxlZCBhcyBzb29uIGFzIGl0cyB2YWx1ZSBpcyBzZXQuXG5cdFx0Ly8gV2hlbiB0aGlzIGhhcHBlbnNvLCBkdWUgdG8gdGhlIGZhY3QgdGhhdCB0aGUgb2JqZWN0IGlzIG5vdCB5ZXQgaW4gdGhlIERPTSwgdGhlIGV2ZW50IGlzIG5vdCBjYXRjaGVkIGJ5IHRoZSBsaXN0ZW5lclxuXHRcdC8vICh3aGljaCBpcyBhdHRhY2hlZCB0byB0aGUgb3V0ZXIgY29udGFpbmVyKS4gU28gZm9yY2luZyB0aGUgZXZlbnQgdG8gdHJpZ2dlciBhZ2FpbiBhcyBzb29uIGFzIHRoZSBDb25maWdGb3JtSXRlbVxuXHRcdC8vIGlzIGFwcGVuZGVkIHRvIHRoZSBET00gaXMgbmVlZGVkLlxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG5cblx0c2V0IGRhdGEoY29uZmlnUGFyYW0pXG5cdHtcblx0XHR0aGlzLl9kYXRhID0gY29uZmlnUGFyYW07XG5cdFx0dGhpcy5fc2V0V2lkZ2V0VmFsdWUoKTtcblx0fVxuXG5cdGdldCBkYXRhKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xuXHR9XG5cblx0c2V0IGVkaXRFbmFibGVkKGVuYWJsZSlcblx0e1xuXHRcdGlmIChlbmFibGUgIT0gdGhpcy5fZWRpdEVuYWJsZWQpXG5cdFx0e1xuXHRcdFx0dGhpcy5fZWRpdEVuYWJsZWQgPSBlbmFibGU7XG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpO1xuXHRcdH1cblx0fVxuXG5cdGdldCBlZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fZWRpdEVuYWJsZWQ7XG5cdH1cblxuXHRfYnVpbGRWaWV3KGlzSW5zaWRlRGlhbG9nKVxuXHR7XG5cdFx0aWYgKCFpc0luc2lkZURpYWxvZylcblx0XHR7XG5cdFx0XHQvLyBTZXQgYWRkaXRpb25hbCBjbGFzc2VzIGZvciBpbm5lciB3aWRnZXRcblx0XHRcdGxldCBjbGFzc05hbWVzID0gJyc7XG5cblx0XHRcdHN3aXRjaCAodGhpcy5fZGF0YS50eXBlKVxuXHRcdFx0e1xuXHRcdFx0XHRjYXNlICdEdWFsTGlzdCc6XG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9ICdjb2wtc20tNyBjb2wtbGctOCc7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ0RhdGFHcmlkJzpcblx0XHRcdFx0XHRjbGFzc05hbWVzID0gJ2NvbC1zbSc7IC8vIFVzZSAnY29sLXNtLTcgY29sLWxnLTgnIGZvciBEYXRhR3JpZCB0b28/XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9ICdjb2wtc20tYXV0byc7XG5cblx0XHRcdH1cblxuXHRcdFx0Ly8gR2VuZXJhdGUgYm9pbGVycGxhdGUgaHRtbCwgc3Vycm91bmRpbmcgdGhlIGFjdHVhbCB3aWRnZXQgKGxhYmVsLCBudW1lcmljIHN0ZXBwZXIsIGV0Yylcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBwb3NpdGlvbi1yZWxhdGl2ZSByb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXNtLTUgY29sLWxnLTQgY29sLWZvcm0tbGFiZWwgZm9ybS1sYWJlbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCIke3RoaXMuX2RhdGEubmFtZX1cIiBjbGFzcz1cImZvcm0tbGFiZWwgJHsodGhpcy5fZGF0YS5jbGllbnRPbmx5ID8gJ2NsaWVudC1vbmx5JyA6ICcnKX1cIj4ke3RoaXMuX2RhdGEubGFiZWx9IDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIiR7dGhpcy5fZGF0YS50b29sdGlwfVwiPjwvaT48L2xhYmVsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbm5lci13aWRnZXQgYWxpZ24tc2VsZi1jZW50ZXIgJHtjbGFzc05hbWVzfVwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnXCIgZGF0YS1mb3I9XCIke3RoaXMuX2RhdGEubmFtZX1cIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gYFxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbCBmb3JtLWxhYmVsLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIiR7dGhpcy5fZGF0YS5uYW1lfVwiIGNsYXNzPVwiZm9ybS1sYWJlbCAkeyh0aGlzLl9kYXRhLmNsaWVudE9ubHkgPyAnY2xpZW50LW9ubHknIDogJycpfVwiPiR7dGhpcy5fZGF0YS5sYWJlbH0gPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb24tY2lyY2xlIHRleHQtbXV0ZWQgaGVscFwiIHRpdGxlPVwiJHt0aGlzLl9kYXRhLnRvb2x0aXB9XCI+PC9pPjwvbGFiZWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImlubmVyLXdpZGdldFwiPlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnXCIgZGF0YS1mb3I9XCIke3RoaXMuX2RhdGEubmFtZX1cIj48L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0YDtcblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgaW5uZXIgd2lkZ2V0IChtdXN0IGJlIG92ZXJyaWRkZW4pXG5cdFx0bGV0IHdpZGdldCA9IHRoaXMuX2dlbmVyYXRlSW5uZXJXaWRnZXQoKTtcblxuXHRcdC8vIEFwcGVuZCBpbm5lciB3aWRnZXRcblx0XHQkKHRoaXMpLmZpbmQoJy5pbm5lci13aWRnZXQnKS5wcmVwZW5kKHdpZGdldCk7XG5cdH1cblxuXHQvKipcblx0ICogVE8gQkUgT1ZFUlJJRERFTlxuXHQgKi9cblx0X2dlbmVyYXRlSW5uZXJXaWRnZXQoKVxuXHR7XG5cdFx0Ly8gU2hvdyBhbiBlcnJvciwgc2hvdWxkIGJlIG92ZXJyaWRkZW5cblx0XHRjb25zb2xlLmVycm9yKGBVbmFibGUgdG8gY3JlYXRlICR7dGhpcy5fZGF0YS50eXBlfSBmb3JtIGl0ZW0gZm9yIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyICR7dGhpcy5pZH1gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgYXR0cmlidXRlcyBvbiB0aGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuXHQgKi9cblx0X3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKVxuXHR7XG5cdFx0Y29uc3QgYXR0cmlicyA9IHRoaXMuX2RhdGEuYXR0cmlidXRlcztcblxuXHRcdGlmIChhdHRyaWJzKVxuXHRcdHtcblx0XHRcdGZvciAobGV0IGF0dHIgaW4gYXR0cmlicylcblx0XHRcdHtcblx0XHRcdFx0Y29uZmlnW2F0dHJdID0gYXR0cmlic1thdHRyXTtcblxuXHRcdFx0XHRpZiAoYXR0ciA9PSAncGF0dGVybicpXG5cdFx0XHRcdFx0Y29uZmlnWydkYXRhLXBhdHRlcm4tbXNnJ10gPSAnQ29udGFpbnMgaW52YWxpZCBjaGFyYWN0ZXJzJztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogU2V0IGFkZGl0aW9uYWwgYXR0cmlidXRlcyBvbiB0aGUgd2lkZ2V0IGNvbmZpZ3VyYXRpb24gb2JqZWN0IHRvIHByb3Blcmx5IHZhbGlkYXRlIGlucHV0LlxuXHQgKi9cblx0X3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZylcblx0e1xuXHRcdGNvbnN0IHZhbCA9IHRoaXMuX2RhdGEudmFsaWRhdG9yO1xuXG5cdFx0aWYgKHZhbCAhPSBudWxsICYmIHZhbCAhPSAnJylcblx0XHR7XG5cdFx0XHRpZiAodmFsID09ICdpcCcpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbmZpZ1sncGF0dGVybiddID0gJ14oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLigyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pXFwuKDI1WzAtNV18MlswLTRdWzAtOV18WzAxXT9bMC05XVswLTldPylcXC4oMjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KSQnO1xuXHRcdFx0XHRjb25maWdbJ2RhdGEtcGF0dGVybi1tc2cnXSA9ICdJbnZhbGlkIElQIGFkZHJlc3MnO1xuXHRcdFx0XHRjb25maWdbJ3JlcXVpcmVkJ10gPSB0cnVlO1xuXHRcdFx0XHRjb25maWdbJ2RhdGEtcmVxdWlyZWQtbXNnJ10gPSAnUmVxdWlyZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIGlmICh2YWwgPT0gJ25vdE51bGwnKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25maWdbJ3JlcXVpcmVkJ10gPSB0cnVlO1xuXHRcdFx0XHRjb25maWdbJ2RhdGEtcmVxdWlyZWQtbXNnJ10gPSAnUmVxdWlyZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIGlmICh2YWwgPT0gJ3B3ZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGNvbmZpZ1sncGF0dGVybiddID0gJ14uezYsfSQnO1xuXHRcdFx0XHRjb25maWdbJ2RhdGEtcGF0dGVybi1tc2cnXSA9ICdNaW5pbXVtIGxlbmd0aDogNiBjaGFyYWN0ZXJzJztcblx0XHRcdH1cblxuXHRcdFx0ZWxzZSBpZiAodmFsID09ICdwb3NOdW0nKVxuXHRcdFx0e1xuXHRcdFx0XHRjb25maWdbJ3BhdHRlcm4nXSA9ICdeWzAtOV1cXGQqJCc7XG5cdFx0XHRcdGNvbmZpZ1snZGF0YS1wYXR0ZXJuLW1zZyddID0gJ05vbi1uZWdhdGl2ZSBudW1iZXIgcmVxdWlyZWQnO1xuXHRcdFx0fVxuXG5cdFx0XHRlbHNlIGlmICh2YWwgPT0gJ2FvaScpXG5cdFx0XHR7XG5cdFx0XHRcdC8vIE5vdGhpbmcgdG8gZG9cblx0XHRcdFx0Ly8gU2VlIEtlbmRvIHZhbGlkYXRpb24gaW5pdGlhbGl6YXRpb24gaW4gY29uZmlnLWludGVyZmFjZS1idWlsZGVyLmpzXG5cdFx0XHR9XG5cblx0XHRcdGVsc2UgaWYgKHZhbCA9PSAndXJsJylcblx0XHRcdHtcblx0XHRcdFx0Y29uZmlnWyd0eXBlJ10gPSAndXJsJztcblx0XHRcdFx0Y29uZmlnWydkYXRhLXVybC1tc2cnXSA9ICdJbnZhbGlkIFVSTCc7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemUgZm9ybSBpdGVtLlxuXHQgKlxuXHQgKiBOT1RFOiBtdXN0IGJlIG92ZXJyaWRkZW4gaWYgaW5uZXIgd2lkZ2V0IHJlcXVpcmVzIHNwZWNpYWwgaW5pdGlhbGl6YXRpb24gKGZvciBleGFtcGxlIEtlbmRvIHdpZGdldHMpXG5cdCAqL1xuXHRfaW5pdGlhbGl6ZSgpXG5cdHtcblx0XHQvLyBTZXQgdmFsdWVcbiBcdCAgIHRoaXMuX3NldFdpZGdldFZhbHVlKCk7XG5cbiBcdCAgIC8vIFNldCBlZGl0IGVuYWJsZWRcbiBcdCAgIHRoaXMuX3NldFdpZGdldEVkaXRFbmFibGVkKCk7XG5cdH1cblxuXHQvKipcblx0ICogVE8gQkUgT1ZFUlJJRERFTlxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdC8vIE5vdGhpbmcgdG8gZG8sIG11c3QgYmUgb3ZlcnJpZGRlblxuXHR9XG5cblx0LyoqXG5cdCAqIFRPIEJFIE9WRVJSSURERU5cblx0ICovXG5cdF9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpXG5cdHtcblx0XHQvLyBOb3RoaW5nIHRvIGRvLCBtdXN0IGJlIG92ZXJyaWRkZW5cblx0fVxuXG5cdC8qKlxuXHQgKiBUTyBCRSBPVkVSUklEREVOXG5cdCAqL1xuXHRfb25WYWx1ZUlucHV0KGUpXG5cdHtcblx0XHQvLyBOb3RoaW5nIHRvIGRvLCBtdXN0IGJlIG92ZXJyaWRkZW5cblx0fVxuXG5cdF90cmlnZ2VyRXZlbnQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEudHJpZ2dlcilcblx0XHR7XG5cdFx0XHRsZXQgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3ZhbHVlLXNldCcsIHtkZXRhaWw6IG51bGwsIGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWV9KTtcblx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnY29uZmlnLWZvcm0taXRlbScpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb25maWctZm9ybS1pdGVtJywgQ29uZmlnRm9ybUl0ZW0pO1xuIiwiaW1wb3J0IHtDb25maWdGb3JtSXRlbX0gZnJvbSAnLi9jb25maWctZm9ybS1pdGVtJztcbmltcG9ydCB7Q29uZmlnTGFiZWx9IGZyb20gJy4vY29uZmlnLWxhYmVsJztcbmltcG9ydCB7TGlzdEl0ZW1FZGl0b3J9IGZyb20gJy4vd2lkZ2V0cy9saXN0LWl0ZW0tZWRpdG9yJztcblxuZXhwb3J0IGNsYXNzIENvbmZpZ0dyaWQgZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdC8vIENyZWF0ZSBtYWluIHdpZGdldCdzIGh0bWxcblx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGRpdj4nLCB7Y2xhc3M6ICcnfSk7XG5cblx0XHQvLyBTZXQgZ3JpZCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdGxldCBncmlkQ29uZmlnID0ge1xuXHRcdFx0aWQ6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdG5hbWU6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdGNsYXNzOiAnbGltaXRlZC1oZWlnaHQnICsgKCF0aGlzLl9kYXRhLmVkaXRhYmxlID8gJyBuby1pbnRlcmFjdCcgOiAnJylcblx0XHR9O1xuXG5cdFx0Ly8gQXBwZW5kIGdyaWQgdG8gbWFpbiBodG1sOyBncmlkIHdpbGwgYmUgY29udmVydGVkIHRvIEtlbmRvIHdpZGdldCBkdXJpbmcgaW5pdGlhbGl6YXRpb25cblx0XHR0aGlzLl93aWRnZXRIdG1sLmFwcGVuZCgkKCc8ZGl2PicsIGdyaWRDb25maWcpKTtcblxuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIEJVVFRPTlNcblxuXHRcdFx0Ly8gQ3JlYXRlIGJ1dHRvbnMgY29udGFpbmVyXG5cdFx0XHRsZXQgYnV0dG9ucyA9ICQoJzxkaXY+Jywge2NsYXNzOiAnbXQtMiB0ZXh0LXJpZ2h0J30pO1xuXG5cdFx0XHQvLyBBcHBlbmQgYnV0dG9ucyB0byBjb250YWluZXJcblx0XHRcdHRoaXMuX2FkZEJ1dHRvbiA9ICQoJzxidXR0b24+Jywge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2stYnV0dG9uIGstc2Vjb25kYXJ5JywgdGl0bGU6ICdBZGQnfSkuYXBwZW5kKCQoJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIj48L2k+JykpO1xuXHRcdFx0dGhpcy5fZWRpdEJ1dHRvbiA9ICQoJzxidXR0b24+Jywge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2stYnV0dG9uIGstc2Vjb25kYXJ5IG1sLTInLCB0aXRsZTogJ0VkaXQnLCBkaXNhYmxlZDogdHJ1ZX0pLmFwcGVuZCgkKCc8aSBjbGFzcz1cImZhcyBmYS1wZW5cIj48L2k+JykpO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQnV0dG9uID0gJCgnPGJ1dHRvbj4nLCB7dHlwZTogJ2J1dHRvbicsIGNsYXNzOiAnay1idXR0b24gay1zZWNvbmRhcnkgbWwtMicsIHRpdGxlOiAnUmVtb3ZlJywgZGlzYWJsZWQ6IHRydWV9KS5hcHBlbmQoJCgnPGkgY2xhc3M9XCJmYXMgZmEtdGltZXNcIj48L2k+JykpO1xuXG5cdFx0XHRidXR0b25zLmFwcGVuZCh0aGlzLl9hZGRCdXR0b24pO1xuXHRcdFx0YnV0dG9ucy5hcHBlbmQodGhpcy5fZWRpdEJ1dHRvbik7XG5cdFx0XHRidXR0b25zLmFwcGVuZCh0aGlzLl9yZW1vdmVCdXR0b24pO1xuXG5cdFx0XHQvLyBBcHBlbmQgYnV0dG9ucyBjb250YWluZXIgdG8gbWFpbiBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLmFwcGVuZChidXR0b25zKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIGVkaXQgZGlhbG9nXG5cdFx0XHQvLyBOT1RFOiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uIHRoZSBjbG9zZS9jYW5jZWwgYnV0dG9ucyB3YXMgcmVtb3ZlZCB0byB3b3JrIGFyb3VuZCBhbiBpc3N1ZSB3aXRoIG5lc3RlZCBtb2RhbHM7XG5cdFx0XHQvLyB0aGUgY3VzdG9tIFwiZGF0YS1jYW5jZWxcIiBhdHRyaWJ1dGUgaXMgdXNlZCB0byBhZGQgYSBjdXN0b20gbGlzdGVuZXIgdG8gdGhlIGJ1dHRvbnNcblx0XHRcdHRoaXMuX2VkaXREaWFsb2cgPSAkKGBcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJtb2RhbFRpdGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1rZXlib2FyZD1cImZhbHNlXCIgZGF0YS1iYWNrZHJvcD1cInN0YXRpY1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzPVwibW9kYWwtdGl0bGUgdGV4dC1wcmltYXJ5XCIgaWQ9XCJtb2RhbFRpdGxlXCI+JHt0aGlzLl9kYXRhLmxhYmVsfTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIGRhdGEtY2FuY2VsPVwibW9kYWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtYm9keSBpbi1mbG93LWludmFsaWQtbXNnXCI+XG5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXIgZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiay1idXR0b24gay1wcmltYXJ5XCI+Li4uPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiay1idXR0b24gay1zZWNvbmRhcnlcIiBkYXRhLWNhbmNlbD1cIm1vZGFsXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRgKTtcblxuXHRcdFx0Ly8gQWRkIGxpc3RlbmVyIHRvIGRpYWxvZyBoaWRlIGV2ZW50XG5cdFx0XHR0aGlzLl9lZGl0RGlhbG9nLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAkLnByb3h5KHRoaXMuX29uRWRpdFBhbmVsSGlkZGVuLCB0aGlzKSk7XG5cblx0XHRcdC8vIEFkZCBsaXN0ZW5lciB0byBtYWluIGJ1dHRvbiBjbGljayBldmVudFxuXHRcdFx0JCgnYnV0dG9uLmstcHJpbWFyeScsIHRoaXMuX2VkaXREaWFsb2cpLm9uKCdjbGljaycsICQucHJveHkodGhpcy5fb25TdWJtaXRCdENsaWNrLCB0aGlzKSk7XG5cblx0XHRcdC8vIEFkZCBsaXN0ZW5lciB0byBjbG9zZS9jYW5jZWwgYnV0dG9ucyBjbGljayBldmVudFxuXHRcdFx0JCgnYnV0dG9uW2RhdGEtY2FuY2VsPVwibW9kYWxcIl0nLCB0aGlzLl9lZGl0RGlhbG9nKS5vbignY2xpY2snLCAkLnByb3h5KHRoaXMuX29uQ2FuY2VsQnRDbGljaywgdGhpcykpO1xuXG5cdFx0XHQvLyBBcHBlbmQgZWRpdCBkaWFsb2cgdG8gbWFpbiBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLmFwcGVuZCh0aGlzLl9lZGl0RGlhbG9nKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gY29tcG9uZW50XG5cdFx0cmV0dXJuIHRoaXMuX3dpZGdldEh0bWw7XG5cdH1cblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSB3aWRnZXQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X2luaXRpYWxpemUoKVxuXHR7XG5cdFx0bGV0IGNvbHVtbnMgPSBbXTtcblx0XHRmb3IgKGxldCBzdWJDb25maWdQYXJhbSBvZiB0aGlzLl9kYXRhLmRlZmF1bHRMaXN0SXRlbSlcblx0XHR7XG5cdFx0XHRsZXQgY29sID0ge1xuXHRcdFx0XHRmaWVsZDogc3ViQ29uZmlnUGFyYW0ubmFtZSxcblx0XHRcdFx0dGl0bGU6IHN1YkNvbmZpZ1BhcmFtLmxhYmVsLFxuXHRcdFx0XHR3aWR0aDogMTIwXG5cdFx0XHR9XG5cblx0XHRcdC8vIERpc3BsYXkgViBvciBYIGZvciBib29sZWFuc1xuXHRcdFx0aWYgKHR5cGVvZiBzdWJDb25maWdQYXJhbS52YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRjb2wudGVtcGxhdGUgPSBgIz0gJHtzdWJDb25maWdQYXJhbS5uYW1lfSA/ICc8aSBjbGFzcz1cImZhcyBmYS1jaGVja1wiPjwvaT4nIDogJzxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzXCI+PC9pPicgI2A7XG5cblx0XHRcdC8vIEhpZGUgcGFzc3dvcmRzXG5cdFx0XHRpZiAoc3ViQ29uZmlnUGFyYW0udHlwZSA9PSAnVGV4dElucHV0JyAmJiBzdWJDb25maWdQYXJhbS5hdHRyaWJ1dGVzICE9IG51bGwgJiYgc3ViQ29uZmlnUGFyYW0uYXR0cmlidXRlcy50eXBlID09ICdwYXNzd29yZCcpXG5cdFx0XHRcdGNvbC50ZW1wbGF0ZSA9IGAjPSAn4oCiJy5yZXBlYXQoZGF0YS4ke3N1YkNvbmZpZ1BhcmFtLm5hbWV9Lmxlbmd0aCkgI2A7XG5cblx0XHRcdGNvbHVtbnMucHVzaChjb2wpO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgZ3JpZFxuXHRcdGxldCBncmlkSHRtbCA9IHRoaXMuX3dpZGdldEh0bWwuZmluZChgIyR7JC5lc2NhcGVTZWxlY3Rvcih0aGlzLl9kYXRhLm5hbWUpfWApO1xuXG5cdFx0Z3JpZEh0bWwua2VuZG9HcmlkKHtcblx0XHRcdHJlc2l6YWJsZTogdHJ1ZSxcblx0XHRcdHNlbGVjdGFibGU6IHRoaXMuX2RhdGEuZWRpdGFibGUgPyAncm93JyA6IGZhbHNlLFxuXHRcdFx0Y2hhbmdlOiAkLnByb3h5KHRoaXMuX29uR3JpZFNlbGVjdGlvbkNoYW5nZSwgdGhpcyksXG5cdFx0XHRjb2x1bW5zOiBjb2x1bW5zLFxuXHRcdFx0bm9SZWNvcmRzOiB7XG5cdFx0XHRcdHRlbXBsYXRlOiAnTm8gaXRlbXMuJ1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gU2F2ZSByZWYuIHRvIHdpZGdldFxuXHRcdHRoaXMuX2dyaWRXaWRnZXQgPSBncmlkSHRtbC5kYXRhKCdrZW5kb0dyaWQnKTtcblxuXHRcdC8vIFNob3cgdG9vdGlwIGlmIGdyaWQncyBjZWxsIGNvbnRlbnQgZXhjZWVkcyBjZWxsIHdpZHRoIChlbGxpcHNpcyBpcyBkaXNwbGF5ZWQgYnkgS2VuZG8gR3JpZClcblx0XHRncmlkSHRtbC5rZW5kb1Rvb2x0aXAoe1xuXHRcdFx0ZmlsdGVyOiAndGQnLFxuXHRcdFx0c2hvdzogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHQvLyBOZXZlciBzaG93IHRvb2x0aXAuLi5cblx0XHRcdFx0dGhpcy5jb250ZW50LnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblxuXHRcdFx0XHQvLyAuLi51bmxlc3MgY29udGVudCBpcyByZXR1cm5lZCAoc2VlIGJlbG93KSBkdWUgdG8gY2VsbCB3aWR0aCBiZWluZyBleGNlZWRlZFxuXHRcdFx0XHRpZiAodGhpcy5jb250ZW50LnRleHQoKSAhPSAnJylcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQucGFyZW50KCkuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcblx0XHRcdH0sXG5cdFx0XHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5jb250ZW50LnBhcmVudCgpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcblx0XHRcdH0sXG5cdFx0XHRjb250ZW50OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gZS50YXJnZXRbMF07XG5cdFx0XHRcdGlmIChlbGVtZW50Lm9mZnNldFdpZHRoIDwgZWxlbWVudC5zY3JvbGxXaWR0aClcblx0XHRcdFx0XHRyZXR1cm4gZS50YXJnZXQudGV4dCgpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0cmV0dXJuICcnO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Lypcblx0XHQvLyBJbml0aWFsaXplIGJ1dHRvbiB0b29sdGlwc1xuXHRcdHRoaXMuX3dpZGdldEh0bWwua2VuZG9Ub29sdGlwKHtcblx0XHRcdGZpbHRlcjogJ2J1dHRvbicsXG5cdFx0XHRjb250ZW50OiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHJldHVybiBgPGRpdiBjbGFzcz1cImhlbHAtdG9vbHRpcFwiPiR7ZS50YXJnZXQuZGF0YSgndGl0bGUnKX08L2Rpdj5gO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdCovXG5cblx0XHQvLyBBZGQgYnV0dG9uIGxpc3RlbmVyc1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdHRoaXMuX2FkZEJ1dHRvbi5jbGljaygkLnByb3h5KHRoaXMuX29uQWRkQ2xpY2ssIHRoaXMpKTtcblx0XHRcdHRoaXMuX2VkaXRCdXR0b24uY2xpY2soJC5wcm94eSh0aGlzLl9vbkVkaXRDbGljaywgdGhpcykpO1xuXHRcdFx0dGhpcy5fcmVtb3ZlQnV0dG9uLmNsaWNrKCQucHJveHkodGhpcy5fb25SZW1vdmVDbGljaywgdGhpcykpO1xuXHRcdH1cblxuXHRcdC8vIFByb2NlZWQgd2l0aCBpbml0aWFsaXphdGlvblxuXHRcdHN1cGVyLl9pbml0aWFsaXplKCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIGRhdGFzb3VyY2UuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldFZhbHVlKClcblx0e1xuXHRcdGxldCBkYXRhU291cmNlID0gbmV3IGtlbmRvLmRhdGEuRGF0YVNvdXJjZSh7XG5cdFx0XHRkYXRhOiB0aGlzLl9kYXRhLmxpc3RWYWx1ZXNcblx0XHR9KTtcblxuXHRcdC8vIFJlYWQgY3VycmVudCBob3Jpem9udGFsIHNjcm9sbCB2YWx1ZVxuXHRcdGNvbnN0IHNjcm9sbExlZnQgPSAkKCcuay1ncmlkLWNvbnRlbnQnLCB0aGlzLl9ncmlkV2lkZ2V0LndyYXBwZXIpLnNjcm9sbExlZnQoKTtcblxuXHRcdC8vIENsZWFyIGdyaWQgc2VsZWN0aW9uIGlmIGFueVxuXHRcdHRoaXMuX2dyaWRXaWRnZXQuY2xlYXJTZWxlY3Rpb24oKTtcblxuXHRcdC8vIFNldCB1cGRhdGVkIGdyaWQncyBkYXRhc291cmNlXG5cdFx0dGhpcy5fZ3JpZFdpZGdldC5zZXREYXRhU291cmNlKGRhdGFTb3VyY2UpO1xuXG5cdFx0Ly8gU2V0IGhvcml6b250YWwgc2Nyb2xsXG5cdFx0JCgnLmstZ3JpZC1jb250ZW50JywgdGhpcy5fZ3JpZFdpZGdldC53cmFwcGVyKS5zY3JvbGxMZWZ0KHNjcm9sbExlZnQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkaXNhYmxlZCBzdGF0ZS5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0RWRpdEVuYWJsZWQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0Ly8gRGVzZWxlY3QgaXRlbVxuXHRcdFx0dGhpcy5fZ3JpZFdpZGdldC5jbGVhclNlbGVjdGlvbigpO1xuXG5cdFx0XHQvLyBFbmFibGUvZGlzYWJsZSBncmlkXG5cdFx0XHR0aGlzLl9ncmlkV2lkZ2V0LndyYXBwZXIuYXR0cignZGlzYWJsZWQnLCAhdGhpcy5fZWRpdEVuYWJsZWQpO1xuXG5cdFx0XHQvLyBFbmFibGUgXCJBZGRcIiBidXR0b25cblx0XHRcdGlmICh0aGlzLl9lZGl0RW5hYmxlZClcblx0XHRcdFx0dGhpcy5fYWRkQnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG5cdFx0XHQvLyBEaXNhYmxlIGFsbCBidXR0b25zXG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuX2FkZEJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLl9lZGl0QnV0dG9uLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cdFx0XHRcdHRoaXMuX3JlbW92ZUJ1dHRvbi5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdF9vbkdyaWRTZWxlY3Rpb25DaGFuZ2UoZSlcblx0e1xuXHRcdGxldCBzZWxlY3RlZFJvd3MgPSB0aGlzLl9ncmlkV2lkZ2V0LnNlbGVjdCgpO1xuXHRcdGxldCBzZWxlY3RlZERhdGFJdGVtcyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBpKyspXG5cdFx0e1xuXHRcdFx0bGV0IGRhdGFJdGVtID0gdGhpcy5fZ3JpZFdpZGdldC5kYXRhSXRlbShzZWxlY3RlZFJvd3NbaV0pO1xuXHRcdFx0c2VsZWN0ZWREYXRhSXRlbXMucHVzaChkYXRhSXRlbSk7XG5cdFx0fVxuXG5cdFx0Ly8gRW5hYmxlL2Rpc2FibGUgZWRpdCBidXR0b25cblx0XHRpZiAodGhpcy5fZWRpdEJ1dHRvbilcblx0XHRcdHRoaXMuX2VkaXRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBzZWxlY3RlZERhdGFJdGVtcy5sZW5ndGggPT0gMCk7XG5cblx0XHQvLyBFbmFibGUvZGlzYWJsZSByZW1vdmUgYnV0dG9uXG5cdFx0aWYgKHRoaXMuX3JlbW92ZUJ1dHRvbilcblx0XHR7XG5cdFx0XHQvLyBBbHdheXMgZGlzYWJsZSBidXR0b24gaWYgbm8gbGlzdCBpdGVtIGlzIHNlbGVjdGVkXG5cdFx0XHR0aGlzLl9yZW1vdmVCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBzZWxlY3RlZERhdGFJdGVtcy5sZW5ndGggPT0gMCk7XG5cblx0XHRcdC8vIEFsc28gZGlzYWJsZSBidXR0b24gaWYgZGVueUVtcHR5ID09IHRydWUgYW5kIGp1c3Qgb25lIGl0ZW0gcmVtYWlucyBpbiB0aGUgbGlzdFxuXHRcdFx0aWYgKHRoaXMuX2RhdGEuZGVueUVtcHR5KVxuXHRcdFx0XHR0aGlzLl9yZW1vdmVCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCB0aGlzLl9kYXRhLmxpc3RJdGVtcy5sZW5ndGggPD0gMSk7XG5cdFx0fVxuICAgIH1cblxuXHRfb25SZW1vdmVDbGljaygpXG5cdHtcblx0XHRsZXQgc2VsZWN0ZWRJbmRleCA9IHRoaXMuX2dyaWRXaWRnZXQuc2VsZWN0KCkuaW5kZXgoKTtcblxuXHRcdC8vIFJlbW92ZSBpdGVtIGZyb20gbGlzdFxuXHRcdHRoaXMuX2RhdGEucmVtb3ZlTGlzdEl0ZW0oc2VsZWN0ZWRJbmRleCk7XG5cblx0XHQvLyBSZWdlbmVyYXRlIGRhdGFncmlkJ3MgZGF0YXNvdXJjZVxuXHRcdHRoaXMuX3NldFdpZGdldFZhbHVlKCk7XG5cdH1cblxuXHRfb25BZGRDbGljaygpXG5cdHtcblx0XHQvLyBDbG9uZSBkZWZhdWx0IGl0ZW0gYW5kIGFkZCB0byBsaXN0XG5cdFx0bGV0IG5ld0xpc3RJdGVtID0gW107XG5cdFx0Zm9yIChsZXQgc3ViQ1Agb2YgdGhpcy5fZGF0YS5kZWZhdWx0TGlzdEl0ZW0pXG5cdFx0XHRuZXdMaXN0SXRlbS5wdXNoKHN1YkNQLmNsb25lKHRydWUpKTtcblxuXHRcdC8vIENyZWF0ZSBlZGl0IHBvcHVwXG5cdFx0dGhpcy5fb3BlbkVkaXRQYW5lbChuZXdMaXN0SXRlbSk7XG5cdH1cblxuXHRfb25FZGl0Q2xpY2soKVxuXHR7XG5cdFx0bGV0IHNlbGVjdGVkSW5kZXggPSB0aGlzLl9ncmlkV2lkZ2V0LnNlbGVjdCgpLmluZGV4KCk7XG5cblx0XHQvLyBDbG9uZSBzZWxlY3RlZCBpdGVtIGFuZCBhZGQgdG8gbGlzdFxuXHRcdGxldCBjbG9uZWRMaXN0SXRlbSA9IFtdO1xuXHRcdGZvciAobGV0IHN1YkNQIG9mIHRoaXMuX2RhdGEubGlzdEl0ZW1zW3NlbGVjdGVkSW5kZXhdKVxuXHRcdFx0Y2xvbmVkTGlzdEl0ZW0ucHVzaChzdWJDUC5jbG9uZSh0cnVlKSk7XG5cblx0XHQvLyBDcmVhdGUgZWRpdCBwb3B1cFxuXHRcdHRoaXMuX29wZW5FZGl0UGFuZWwoY2xvbmVkTGlzdEl0ZW0sIHNlbGVjdGVkSW5kZXgpO1xuXHR9XG5cblx0X29wZW5FZGl0UGFuZWwoc3ViQ29uZmlnUGFyYW1zQXJyYXksIGVkaXRJbmRleCA9IC0xKVxuXHR7XG5cdFx0Ly8gQ2hlY2sgaWYgdGhpcyBjb25maWd1cmF0aW9uIGl0ZW0gaXMgaW5zaWRlIGEgbW9kYWwgd2luZG93O1xuXHRcdC8vIGlmIHllcywgdGhlIGVkaXQgcGFuZWwgKHdoaWNoIGlzIGEgbW9kYWwgYXMgd2VsbCkgbXVzdCBiZSBjb25maWd1cmVkIHRvIHJlbW92ZSB0aGUgZGFyayBiYWNrZ3JvdW5kXG5cdFx0aWYgKCQodGhpcykucGFyZW50cygnLm1vZGFsJykubGVuZ3RoID4gMClcblx0XHRcdCQoJy5tb2RhbCcsICQodGhpcykpLmF0dHIoJ2RhdGEtYmFja2Ryb3AnLCBmYWxzZSk7XG5cblx0XHQvLyBDcmVhdGUgZGlhbG9nIGNvbnRlbnRcblx0XHR0aGlzLl9pdGVtRWRpdG9yID0gbmV3IExpc3RJdGVtRWRpdG9yKCk7XG5cdFx0dGhpcy5faXRlbUVkaXRvci5kYXRhID0gc3ViQ29uZmlnUGFyYW1zQXJyYXk7XG5cdFx0dGhpcy5faXRlbUVkaXRvci5pbmRleCA9IGVkaXRJbmRleDtcblxuXHRcdGxldCBpdGVtRWRpdG9yID0gJCh0aGlzLl9pdGVtRWRpdG9yKTtcblxuXHRcdC8vIEFwcGVuZCBjb250ZW50IHRvIGRpYWxvZ1xuXHRcdCQoJy5tb2RhbC1ib2R5JywgdGhpcy5fZWRpdERpYWxvZykuYXBwZW5kKGl0ZW1FZGl0b3IpO1xuXG5cdFx0Ly8gU2V0IGRpYWxvZyBtYWluIGJ1dHRvbiB0ZXh0XG5cdFx0JCgnYnV0dG9uLmstcHJpbWFyeScsIHRoaXMuX2VkaXREaWFsb2cpLmh0bWwoZWRpdEluZGV4ID4gLTEgPyAnPGkgY2xhc3M9XCJmYXMgZmEtcGVuIG1yLTFcIj48L2k+VXBkYXRlJyA6ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzIG1yLTFcIj48L2k+QWRkJyk7XG5cblx0XHQvLyBEaXNwbGF5IGRpYWxvZ1xuXHRcdHRoaXMuX2VkaXREaWFsb2cubW9kYWwoJ3Nob3cnKTtcblx0fVxuXG5cdF9vblN1Ym1pdEJ0Q2xpY2soKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2l0ZW1FZGl0b3IudmFsaWRhdGUoKSlcblx0XHR7XG5cdFx0XHRsZXQgZGF0YSA9IHRoaXMuX2l0ZW1FZGl0b3IuZGF0YTtcblx0XHRcdGxldCBpbmRleCA9IHRoaXMuX2l0ZW1FZGl0b3IuaW5kZXg7XG5cblx0XHRcdC8vIEhpZGUgbW9kYWxcblx0XHRcdHRoaXMuX2VkaXREaWFsb2cubW9kYWwoJ2hpZGUnKTtcblxuXHRcdFx0Ly8gQ29tcGxldGUgZWRpdGluZ1xuXHRcdFx0dGhpcy5fb25FZGl0Q29tcGxldGUoZGF0YSwgaW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdF9vbkNhbmNlbEJ0Q2xpY2soKVxuXHR7XG5cdFx0Ly8gSGlkZSBtb2RhbFxuXHRcdHRoaXMuX2VkaXREaWFsb2cubW9kYWwoJ2hpZGUnKTtcblx0fVxuXG5cdF9vbkVkaXRQYW5lbEhpZGRlbihlKVxuXHR7XG5cdFx0Ly8gUmVtb3ZlIGNvbnRlbnQgZnJvbSBkaWFsb2dcblx0XHR0aGlzLl9pdGVtRWRpdG9yLnJlbW92ZSgpO1xuXG5cdFx0Ly8gU2V0IGRpYWxvZyBtYWluIGJ1dHRvbiB0ZXh0XG5cdFx0JCgnYnV0dG9uLmstcHJpbWFyeScsIHRoaXMuX2VkaXREaWFsb2cpLmh0bWwoJy4uLicpO1xuXG5cdFx0dGhpcy5faXRlbUVkaXRvciA9IG51bGw7XG5cdH1cblxuXHRfb25FZGl0Q29tcGxldGUobGlzdEl0ZW0sIGVkaXRJbmRleClcblx0e1xuXHRcdC8vIEFuIGV4aXN0aW5nIGxpc3QgaXRlbSB3YXMgdXBkYXRlZFxuXHRcdGlmIChlZGl0SW5kZXggPiAtMSlcblx0XHRcdHRoaXMuX2RhdGEudXBkYXRlTGlzdEl0ZW0obGlzdEl0ZW0sIGVkaXRJbmRleCk7XG5cblx0XHQvLyBBIG5ldyBsaXN0IGl0ZW0gd2FzIGFkZGVkOyBhZGQgaXQgdG8gdGhlIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVyXG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5fZGF0YS5hZGRMaXN0SXRlbShsaXN0SXRlbSk7XG5cblx0XHQvLyBSZWdlbmVyYXRlIGRhdGFncmlkJ3MgZGF0YXNvdXJjZVxuXHRcdHRoaXMuX3NldFdpZGdldFZhbHVlKCk7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctZ3JpZCcpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb25maWctZ3JpZCcsIENvbmZpZ0dyaWQpO1xuIiwiZXhwb3J0IGNsYXNzIENvbmZpZ0xhYmVsIGV4dGVuZHMgSFRNTEVsZW1lbnRcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29uZmlnLWxhYmVsJyk7XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsKVxuXHR7XG5cdFx0aWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJylcblx0XHRcdHRoaXMuaW5uZXJIVE1MID0gKHZhbCA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXHRcdGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKVxuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSAodmFsID8gdmFsIDogMCk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5pbm5lckhUTUwgPSAodmFsICE9ICcnID8gdmFsIDogJyZtZGFzaDsnKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy50ZXh0Q29udGVudDtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy1sYWJlbCcpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjb25maWctbGFiZWwnLCBDb25maWdMYWJlbCk7XG4iLCJpbXBvcnQge0NvbmZpZ0Zvcm1JdGVtfSBmcm9tICcuL2NvbmZpZy1mb3JtLWl0ZW0nO1xuaW1wb3J0IHtDb25maWdMYWJlbH0gZnJvbSAnLi9jb25maWctbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnTnVtZXJpY1N0ZXBwZXIgZXh0ZW5kcyBDb25maWdGb3JtSXRlbVxue1xuXHRjb25zdHJ1Y3Rvcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKVxuXHR7XG5cdCAgICBzdXBlcihjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgd2lkZ2V0IHRvIHJlbmRlciB0aGUgQ29uZmlnUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBJZiBwYXJhbWV0ZXIgaXMgbm90IGVkaXRhYmxlLCBhIHNpbXBsZSBsYWJlbCBpcyB1c2VkLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9nZW5lcmF0ZUlubmVyV2lkZ2V0KClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdHtcblx0XHRcdC8vIFNldCB3aWRnZXQgY29uZmlndXJhdGlvblxuXHRcdFx0bGV0IGNvbmZpZyA9IHtcblx0XHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRcdGNsYXNzOiAnZm9ybS1jb250cm9sJyxcblx0XHRcdFx0aWQ6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdFx0bmFtZTogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHQnZGF0YS1yb2xlJzogJ251bWVyaWN0ZXh0Ym94Jyxcblx0XHRcdFx0J2RhdGEtcmVxdWlyZWQtbXNnJzogJ1JlcXVpcmVkJyxcblx0XHRcdFx0J2RhdGEtZm9ybWF0JzogJyMnLFxuXHRcdFx0XHRyZXF1aXJlZDogJ3JlcXVpcmVkJyxcblx0XHRcdH07XG5cblx0XHRcdC8vIFNldCB3aWRnZXQgYXR0cmlidXRlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldEF0dHJpYnV0ZXMoY29uZmlnKTtcblxuXHRcdFx0Ly8gU2V0IGFkZGl0aW9uYWwgd2lkZ2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gdmFsaWRhdGlvbiBydWxlcyAoc2VlIHBhcmVudCBjbGFzcylcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIHdpZGdldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuICAgX2luaXRpYWxpemUoKVxuICAge1xuXHQgICBpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0ICAge1xuXHRcdCAgIC8vIEluaXRpYWxpemUga2VuZG8gd2lkZ2V0XG5cdFx0ICAga2VuZG8uaW5pdCh0aGlzLl93aWRnZXRIdG1sKTtcblxuXHRcdCAgIC8vIFNhdmUgcmVmLiB0byB3aWRnZXRcblx0XHQgICB0aGlzLl9pbm5lcldpZGdldCA9IHRoaXMuX3dpZGdldEh0bWwuZGF0YSgna2VuZG9OdW1lcmljVGV4dEJveCcpO1xuXG5cdFx0ICAgLy8gRW5hYmxlIHZhbHVlIGNvbW1pdCBiaW5kaW5nXG5cdFx0ICAgdGhpcy5faW5uZXJXaWRnZXQuYmluZCgnY2hhbmdlJywgJC5wcm94eSh0aGlzLl9vblZhbHVlSW5wdXQsIHRoaXMpKTtcblx0ICAgfVxuXG5cdCAgIC8vIFByb2NlZWQgd2l0aCBpbml0aWFsaXphdGlvblxuXHQgICBzdXBlci5faW5pdGlhbGl6ZSgpO1xuICAgfVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIHRoZSBsYWJlbCB0ZXh0IGlzIHNldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0VmFsdWUoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0XHR0aGlzLl9pbm5lcldpZGdldC52YWx1ZSh0aGlzLl9kYXRhLnZhbHVlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLnZhbHVlID0gdGhpcy5fZGF0YS52YWx1ZTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgZGlzYWJsZWQgc3RhdGUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X3NldFdpZGdldEVkaXRFbmFibGVkKClcblx0e1xuXHRcdGlmICh0aGlzLl9kYXRhLmVkaXRhYmxlKVxuXHRcdFx0dGhpcy5faW5uZXJXaWRnZXQuZW5hYmxlKHRoaXMuX2VkaXRFbmFibGVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgQ29uZmlndXJhdGlvbiBQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uVmFsdWVJbnB1dChlKVxuXHR7XG5cdFx0Ly8gVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHRvIG5ldyB2YWx1ZVxuXHRcdHRoaXMuX2RhdGEudmFsdWUgPSBOdW1iZXIodGhpcy5faW5uZXJXaWRnZXQudmFsdWUoKSk7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cbn1cblxuLy8gREVGSU5FIENPTVBPTkVOVFxuaWYgKCF3aW5kb3cuY3VzdG9tRWxlbWVudHMuZ2V0KCdjb25maWctbnVtZXJpYy1zdGVwcGVyJykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NvbmZpZy1udW1lcmljLXN0ZXBwZXInLCBDb25maWdOdW1lcmljU3RlcHBlcik7XG4iLCJpbXBvcnQge0NvbmZpZ0Zvcm1JdGVtfSBmcm9tICcuL2NvbmZpZy1mb3JtLWl0ZW0nO1xuaW1wb3J0IHtDb25maWdMYWJlbH0gZnJvbSAnLi9jb25maWctbGFiZWwnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlnVGV4dElucHV0IGV4dGVuZHMgQ29uZmlnRm9ybUl0ZW1cbntcblx0Y29uc3RydWN0b3IoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZylcblx0e1xuXHQgICAgc3VwZXIoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIHdpZGdldCB0byByZW5kZXIgdGhlIENvbmZpZ1BhcmFtZXRlciB2YWx1ZS5cblx0ICogSWYgcGFyYW1ldGVyIGlzIG5vdCBlZGl0YWJsZSwgYSBzaW1wbGUgbGFiZWwgaXMgdXNlZC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfZ2VuZXJhdGVJbm5lcldpZGdldCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHR7XG5cdFx0XHQvLyBTZXQgd2lkZ2V0IGNvbmZpZ3VyYXRpb25cblx0XHRcdGxldCBjb25maWcgPSB7XG5cdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0Y2xhc3M6ICdmb3JtLWNvbnRyb2wgay10ZXh0Ym94Jyxcblx0XHRcdFx0aWQ6IHRoaXMuX2RhdGEubmFtZSxcblx0XHRcdFx0bmFtZTogdGhpcy5fZGF0YS5uYW1lLFxuXHRcdFx0XHRhdXRvY29tcGxldGU6ICdvZmYnLFxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gU2V0IHdpZGdldCBhdHRyaWJ1dGVzXG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRBdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIFNldCBhZGRpdGlvbmFsIHdpZGdldCBhdHRyaWJ1dGVzIGJhc2VkIG9uIHZhbGlkYXRpb24gcnVsZXNcblx0XHRcdHRoaXMuX3NldFdpZGdldFZhbGlkYXRpb25BdHRyaWJ1dGVzKGNvbmZpZyk7XG5cblx0XHRcdC8vIENyZWF0ZSB3aWRnZXQncyBodG1sXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sID0gJCgnPGlucHV0PicsIGNvbmZpZyk7XG5cblx0XHRcdC8vIEVuYWJsZSB2YWx1ZSBjb21taXQgYmluZGluZ1xuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbC5vbignY2hhbmdlJywgJC5wcm94eSh0aGlzLl9vblZhbHVlSW5wdXQsIHRoaXMpKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5fd2lkZ2V0SHRtbCA9IG5ldyBDb25maWdMYWJlbCgpO1xuXG5cdFx0Ly8gUmV0dXJuIGNvbXBvbmVudFxuXHRcdHJldHVybiB0aGlzLl93aWRnZXRIdG1sO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyB2YWx1ZS5cblx0ICogSWYgcGFyYW1ldGVyIGlzIG5vdCBlZGl0YWJsZSwgdGhlIGxhYmVsIHRleHQgaXMgc2V0LlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRWYWx1ZSgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwudmFsKHRoaXMuX2RhdGEudmFsdWUpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwudmFsdWUgPSB0aGlzLl9kYXRhLnZhbHVlO1xuXG5cdFx0Ly8gVHJpZ2dlciBldmVudFxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB3aWRnZXQncyBkaXNhYmxlZCBzdGF0ZS5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0RWRpdEVuYWJsZWQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0XHR0aGlzLl93aWRnZXRIdG1sLmF0dHIoJ2Rpc2FibGVkJywgIXRoaXMuX2VkaXRFbmFibGVkKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgQ29uZmlndXJhdGlvbiBQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X29uVmFsdWVJbnB1dChlKVxuXHR7XG5cdFx0Ly8gVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHRvIG5ldyB2YWx1ZVxuXHRcdHRoaXMuX2RhdGEudmFsdWUgPSB0aGlzLl93aWRnZXRIdG1sLnZhbCgpO1xuXG5cdFx0Ly8gVHJpZ2dlciBldmVudFxuXHRcdHRoaXMuX3RyaWdnZXJFdmVudCgpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnY29uZmlnLXRleHQtaW5wdXQnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLXRleHQtaW5wdXQnLCBDb25maWdUZXh0SW5wdXQpO1xuIiwiaW1wb3J0IHtDb25maWdGb3JtSXRlbX0gZnJvbSAnLi9jb25maWctZm9ybS1pdGVtJztcbmltcG9ydCB7Q29uZmlnTGFiZWx9IGZyb20gJy4vY29uZmlnLWxhYmVsJztcbmltcG9ydCB7VmVjdG9yM0RJbnB1dH0gZnJvbSAnLi93aWRnZXRzL3ZlY3Rvci0zZC1pbnB1dCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdWZWN0b3IzRCBleHRlbmRzIENvbmZpZ0Zvcm1JdGVtXG57XG5cdGNvbnN0cnVjdG9yKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpXG5cdHtcblx0ICAgIHN1cGVyKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSB3aWRnZXQgdG8gcmVuZGVyIHRoZSBDb25maWdQYXJhbWV0ZXIgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIGEgc2ltcGxlIGxhYmVsIGlzIHVzZWQuXG5cdCAqIEBvdmVycmlkZVxuXHQgKi9cblx0X2dlbmVyYXRlSW5uZXJXaWRnZXQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2RhdGEuZWRpdGFibGUpXG5cdFx0e1xuXHRcdFx0Ly8gQ3JlYXRlIHdpZGdldCdzIGh0bWxcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgVmVjdG9yM0RJbnB1dCh0aGlzLl9kYXRhLm5hbWUsIHRoaXMuX2RhdGEudmFsaWRhdG9yID09ICdhb2knKTtcblxuXHRcdFx0Ly8gU2V0IHdpZGdldCBhdHRyaWJ1dGVzXG5cdFx0XHR0aGlzLl9zZXRXaWRnZXRBdHRyaWJ1dGVzKHRoaXMuX3dpZGdldEh0bWwpO1xuXG5cdFx0XHQvLyBFbmFibGUgdmFsdWUgY29tbWl0IGJpbmRpbmdcblx0XHRcdCQodGhpcy5fd2lkZ2V0SHRtbCkub24oJ2NoYW5nZScsICQucHJveHkodGhpcy5fb25WYWx1ZUlucHV0LCB0aGlzKSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX3dpZGdldEh0bWwgPSBuZXcgQ29uZmlnTGFiZWwoKTtcblxuXHRcdC8vIFJldHVybiBjb21wb25lbnRcblx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0SHRtbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgd2lkZ2V0J3MgdmFsdWUuXG5cdCAqIElmIHBhcmFtZXRlciBpcyBub3QgZWRpdGFibGUsIHRoZSBsYWJlbCB0ZXh0IGlzIHNldC5cblx0ICogQG92ZXJyaWRlXG5cdCAqL1xuXHRfc2V0V2lkZ2V0VmFsdWUoKVxuXHR7XG5cdFx0dGhpcy5fd2lkZ2V0SHRtbC52YWx1ZSA9IHRoaXMuX2RhdGEudmFsdWU7XG5cblx0XHQvLyBUcmlnZ2VyIGV2ZW50XG5cdFx0dGhpcy5fdHJpZ2dlckV2ZW50KCk7XG5cdH1cblxuXHQvKipcblx0ICogU2V0IHdpZGdldCdzIGRpc2FibGVkIHN0YXRlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9zZXRXaWRnZXRFZGl0RW5hYmxlZCgpXG5cdHtcblx0XHRpZiAodGhpcy5fZGF0YS5lZGl0YWJsZSlcblx0XHR7XG5cdFx0XHQkKHRoaXMuX3dpZGdldEh0bWwpLmF0dHIoJ2Rpc2FibGVkJywgIXRoaXMuX2VkaXRFbmFibGVkKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVXBkYXRlIENvbmZpZ3VyYXRpb24gUGFyYW1ldGVyIHZhbHVlLlxuXHQgKiBAb3ZlcnJpZGVcblx0ICovXG5cdF9vblZhbHVlSW5wdXQoZSlcblx0e1xuXHRcdC8vIFVwZGF0ZSBDb25maWd1cmF0aW9uIFBhcmFtZXRlciB0byBuZXcgdmFsdWVcblx0XHR0aGlzLl9kYXRhLnZhbHVlID0gdGhpcy5fd2lkZ2V0SHRtbC52YWx1ZTtcblxuXHRcdC8vIFRyaWdnZXIgZXZlbnRcblx0XHR0aGlzLl90cmlnZ2VyRXZlbnQoKTtcblx0fVxufVxuXG4vLyBERUZJTkUgQ09NUE9ORU5UXG5pZiAoIXdpbmRvdy5jdXN0b21FbGVtZW50cy5nZXQoJ2NvbmZpZy12ZWN0b3ItM2QnKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY29uZmlnLXZlY3Rvci0zZCcsIENvbmZpZ1ZlY3RvcjNEKTtcbiIsImltcG9ydCB7Q29uZmlnRm9ybUl0ZW1GYWN0b3J5fSBmcm9tICcuLi8uLi8uLi91dGlscy91aWJ1aWxkZXIvY29uZmlnLWZvcm0taXRlbS1mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIExpc3RJdGVtRWRpdG9yIGV4dGVuZHMgSFRNTEVsZW1lbnRcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXHR9XG5cblx0c2V0IGRhdGEoc3ViQ29uZmlnUGFyYW1zQXJyYXkpXG5cdHtcblx0XHR0aGlzLl9kYXRhID0gc3ViQ29uZmlnUGFyYW1zQXJyYXk7XG5cblx0XHR0aGlzLl9idWlsZFZpZXcoKTtcblx0fVxuXG5cdGdldCBkYXRhKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9kYXRhO1xuXHR9XG5cblx0c2V0IGluZGV4KGluZGV4KVxuXHR7XG5cdFx0dGhpcy5faW5kZXggPSBpbmRleDtcblx0fVxuXG5cdGdldCBpbmRleCgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5faW5kZXg7XG5cdH1cblxuXHRfYnVpbGRWaWV3KClcblx0e1xuXHRcdC8vIEdlbmVyYXRlIGNvbnRhaW5lciBmb3JtXG5cdFx0dGhpcy5fZm9ybSA9ICQoJzxmb3JtPicsIHt9KTtcblxuXHRcdC8vIEFwcGVuZCBmb3JtXG5cdFx0JCh0aGlzKS5hcHBlbmQodGhpcy5fZm9ybSk7XG5cblx0XHQvLyBHZW5lcmF0ZSBmb3JtIGZpZWxkc1xuXHRcdGZvciAobGV0IGNvbmZpZ1BhcmFtIG9mIHRoaXMuX2RhdGEpXG5cdFx0e1xuXHRcdFx0Ly8gQ3JlYXRlIGZvcm0gaXRlbVxuXHRcdFx0bGV0IGZvcm1JdGVtID0gQ29uZmlnRm9ybUl0ZW1GYWN0b3J5LmNyZWF0ZShjb25maWdQYXJhbSwgdHJ1ZSwgdHJ1ZSk7XG5cdFx0XHRmb3JtSXRlbS5kYXRhID0gY29uZmlnUGFyYW07XG5cblx0XHRcdC8vIEFkZCBmb3JtIGl0ZW0gdG8gZm9ybVxuXHRcdFx0dGhpcy5fZm9ybS5hcHBlbmQoZm9ybUl0ZW0pO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUga2VuZG8gdmFsaWRhdGlvbiBvbiBmb3JtXG5cdFx0dGhpcy5fdmFsaWRhdG9yID0gdGhpcy5fZm9ybS5rZW5kb1ZhbGlkYXRvcih7XG5cdFx0XHR2YWxpZGF0ZU9uQmx1cjogdHJ1ZSxcblx0XHRcdHJ1bGVzOiB7XG5cdFx0XHRcdC8vIEFkZCBydWxlIHRvIHZhbGlkYXRlIEFPSSBmb3JtIGl0ZW1zP1xuXHRcdFx0XHQvLyAoc2VlOiBodHRwczovL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL3ZhbGlkYXRvci9jdXN0b20tdmFsaWRhdGlvbilcblx0XHRcdFx0YW9pOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoaW5wdXQuaXMoJ1tkYXRhLWFvaS1tc2ddJykgJiYgaW5wdXQudmFsKCkgIT0gJycpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKGlucHV0LnZhbCgpID09ICcwLDAsMCcpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHR9KS5kYXRhKCdrZW5kb1ZhbGlkYXRvcicpO1xuXHR9XG5cblx0dmFsaWRhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbGlkYXRvci52YWxpZGF0ZSgpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnbGlzdC1pdGVtLWVkaXRvcicpKVxuXHR3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsaXN0LWl0ZW0tZWRpdG9yJywgTGlzdEl0ZW1FZGl0b3IpO1xuIiwiZXhwb3J0IGNsYXNzIFZlY3RvcjNESW5wdXQgZXh0ZW5kcyBIVE1MRWxlbWVudFxue1xuXHRjb25zdHJ1Y3RvcihpZCwgaXNWYWxpZGFibGUpXG5cdHtcblx0ICAgIHN1cGVyKCk7XG5cblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5uYW1lID0gaWQ7XG5cblx0XHR0aGlzLl9pc1ZhbGlkYWJsZSA9IGlzVmFsaWRhYmxlO1xuXG5cdFx0dGhpcy5faW5pdGlhbGl6ZSgpO1xuXHR9XG5cblx0c2V0IGVuYWJsZUNsZWFyKHZhbHVlKVxuXHR7XG5cdFx0aWYgKHZhbHVlKVxuXHRcdFx0dGhpcy5fY2xlYXJCdXR0b24uc2hvdygpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuX2NsZWFyQnV0dG9uLmhpZGUoKTtcblx0fVxuXG5cdHNldCBhbGxvd05lZ2F0aXZlKHZhbHVlKVxuXHR7XG5cdFx0aWYgKHZhbHVlKVxuXHRcdHtcblx0XHRcdHRoaXMuX3dpZGdldFguc2V0T3B0aW9ucygge21pbjogbnVsbH0gKTtcblx0XHRcdHRoaXMuX3dpZGdldFkuc2V0T3B0aW9ucygge21pbjogbnVsbH0gKTtcblx0XHRcdHRoaXMuX3dpZGdldFouc2V0T3B0aW9ucygge21pbjogbnVsbH0gKTtcblx0XHR9XG5cdH1cblxuXHRzZXQgdmFsdWUodmFsKVxuXHR7XG5cdFx0dmFyIGNvb3JkcyA9IHZhbC5zcGxpdCgnLCcpO1xuXG5cdFx0aWYgKGNvb3Jkcy5sZW5ndGggPj0gMSlcblx0XHRcdHRoaXMuX3dpZGdldFgudmFsdWUoY29vcmRzWzBdKTtcblxuXHRcdGlmIChjb29yZHMubGVuZ3RoID49IDIpXG5cdFx0XHR0aGlzLl93aWRnZXRZLnZhbHVlKGNvb3Jkc1sxXSk7XG5cblx0XHRpZiAoY29vcmRzLmxlbmd0aCA+PSAzKVxuXHRcdFx0dGhpcy5fd2lkZ2V0Wi52YWx1ZShjb29yZHNbMl0pO1xuXG5cdFx0aWYgKHRoaXMuX2lzVmFsaWRhYmxlKVxuXHRcdFx0dGhpcy5faW5wdXRWYWwudmFsKHRoaXMudmFsdWUpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKClcblx0e1xuXHRcdGlmICh0aGlzLl93aWRnZXRYLnZhbHVlKCkgPT0gbnVsbCAmJiB0aGlzLl93aWRnZXRZLnZhbHVlKCkgPT0gbnVsbCAmJiB0aGlzLl93aWRnZXRaLnZhbHVlKCkgPT0gbnVsbClcblx0XHRcdHJldHVybiAnJztcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gdGhpcy5fd2lkZ2V0WC52YWx1ZSgpICsgJywnICsgdGhpcy5fd2lkZ2V0WS52YWx1ZSgpICsgJywnICsgdGhpcy5fd2lkZ2V0Wi52YWx1ZSgpO1xuXHR9XG5cblx0X2luaXRpYWxpemUoKVxuXHR7XG5cdFx0Ly8gR2VuZXJhdGUgY29udGFpbmVyIGZvcm1cblx0XHR0aGlzLl9jb250YWluZXIgPSAkKCc8ZGl2PicsIHtcblx0XHRcdGNsYXNzOiAnZm9ybS1pbmxpbmUnXG5cdFx0fSk7XG5cblx0XHQvLyBBcHBlbmQgY29udGFpbmVyXG5cdFx0JCh0aGlzKS5hcHBlbmQodGhpcy5fY29udGFpbmVyKTtcblxuXHRcdC8vIFNldCBpbnB1dHMgY29uZmlndXJhdGlvblxuXHRcdGxldCBjb25maWdIdG1sID0ge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRjbGFzczogJ2Zvcm0tY29udHJvbCBzaG9ydC00Jyxcblx0XHR9O1xuXG5cdFx0Ly8gU2V0IHdpZGdldCBjb25maWd1cmF0aW9uXG5cdFx0bGV0IGNvbmZpZ1dpZGdldCA9IHtcblx0XHRcdG1pbjogMCxcblx0XHRcdHNwaW5uZXJzOiBmYWxzZSxcblx0XHRcdGZvcm1hdDogJyMuIyMjIyMjJyxcblx0XHRcdGRlY2ltYWxzOiA2LFxuXHRcdFx0cm91bmQ6IGZhbHNlLFxuXHRcdFx0c3Bpbm5lcnM6IGZhbHNlLFxuXHRcdFx0cmVzdHJpY3REZWNpbWFsczogZmFsc2UsXG5cdFx0XHRjaGFuZ2U6ICQucHJveHkodGhpcy5fb25DaGFuZ2UsIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIENyZWF0ZSB3aWRnZXRzXG5cdFx0dGhpcy5faW5wdXRYID0gJCgnPGlucHV0PicsIGNvbmZpZ0h0bWwpO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5hcHBlbmQodGhpcy5faW5wdXRYKTtcblx0XHR0aGlzLl93aWRnZXRYID0gdGhpcy5faW5wdXRYLmtlbmRvTnVtZXJpY1RleHRCb3goY29uZmlnV2lkZ2V0KS5kYXRhKCdrZW5kb051bWVyaWNUZXh0Qm94Jyk7XG5cblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cInB4LTFcIj4sPC9zcGFuPicpO1xuXG5cdFx0dGhpcy5faW5wdXRZID0gJCgnPGlucHV0PicsIGNvbmZpZ0h0bWwpO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5hcHBlbmQodGhpcy5faW5wdXRZKTtcblx0XHR0aGlzLl93aWRnZXRZID0gdGhpcy5faW5wdXRZLmtlbmRvTnVtZXJpY1RleHRCb3goY29uZmlnV2lkZ2V0KS5kYXRhKCdrZW5kb051bWVyaWNUZXh0Qm94Jyk7XG5cblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cInB4LTFcIj4sPC9zcGFuPicpO1xuXG5cdFx0dGhpcy5faW5wdXRaID0gJCgnPGlucHV0PicsIGNvbmZpZ0h0bWwpO1xuXHRcdHRoaXMuX2NvbnRhaW5lci5hcHBlbmQodGhpcy5faW5wdXRaKTtcblx0XHR0aGlzLl93aWRnZXRaID0gdGhpcy5faW5wdXRaLmtlbmRvTnVtZXJpY1RleHRCb3goY29uZmlnV2lkZ2V0KS5kYXRhKCdrZW5kb051bWVyaWNUZXh0Qm94Jyk7XG5cblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKCc8c3BhbiBjbGFzcz1cInB4LTFcIj48L3NwYW4+Jyk7IC8vIEFkZGl0aW9uYWwgc3BhY2VyXG5cblx0XHQvLyBDcmVhdGUgaW52aXNpYmxlIGZpZWxkIHRvIGFwcGx5IG92ZXJhbGwgdmFsaWRhdGlvblxuXHRcdGlmICh0aGlzLl9pc1ZhbGlkYWJsZSlcblx0XHR7XG5cdFx0XHR0aGlzLl9pbnB1dFZhbCA9ICQoJzxpbnB1dD4nLCB7bmFtZTogYCR7dGhpcy5uYW1lfS1jdXN0b20tdmFsaWRhdGVgLCAnZGF0YS1hb2ktbXNnJzogJ1ZhbHVlcyBjYW5cXCd0IGFsbCBiZSAwJ30pO1xuXHRcdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZCh0aGlzLl9pbnB1dFZhbCk7XG5cdFx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKGA8c3BhbiBjbGFzcz1cImstaW52YWxpZC1tc2dcIiBkYXRhLWZvcj1cIiR7dGhpcy5uYW1lfS1jdXN0b20tdmFsaWRhdGVcIj48L3NwYW4+YClcblx0XHRcdHRoaXMuX2lucHV0VmFsLmhpZGUoKTtcblx0XHR9XG5cblx0XHQvLyBDcmVhdGUgYW5kIGFwcGVuZCBDbGVhciBidXR0b25cblx0XHR0aGlzLl9jbGVhckJ1dHRvbiA9ICQoJzxidXR0b24+Jywge3R5cGU6ICdidXR0b24nLCBjbGFzczogJ2stYnV0dG9uIGstc2Vjb25kYXJ5IG15LTEnLCB0aXRsZTogJ0NsZWFyJ30pLmFwcGVuZCgkKCc8aSBjbGFzcz1cImZhcyBmYS10aW1lc1wiPjwvaT4nKSk7XG5cdFx0dGhpcy5fY2xlYXJCdXR0b24ub24oJ2NsaWNrJywgJC5wcm94eSh0aGlzLl9vbkNsZWFyQ2xpY2ssIHRoaXMpKTtcblx0XHR0aGlzLl9jb250YWluZXIuYXBwZW5kKHRoaXMuX2NsZWFyQnV0dG9uKTtcblxuXHRcdC8vIEhpZGUgYnV0dG9uIGJ5IGRlZmF1bHRcblx0XHR0aGlzLl9jbGVhckJ1dHRvbi5oaWRlKCk7XG5cdH1cblxuXHRfb25DaGFuZ2UoKVxuXHR7XG5cdFx0Ly8gRW1wdHkgc3RyaW5ncyBhcmUgbm90IGFsbG93ZWRcblx0XHRpZiAodGhpcy5fd2lkZ2V0WC52YWx1ZSgpID09IG51bGwpXG5cdFx0XHR0aGlzLl93aWRnZXRYLnZhbHVlKDApO1xuXG5cdFx0aWYgKHRoaXMuX3dpZGdldFkudmFsdWUoKSA9PSBudWxsKVxuXHRcdFx0dGhpcy5fd2lkZ2V0WS52YWx1ZSgwKTtcblxuXHRcdGlmICh0aGlzLl93aWRnZXRaLnZhbHVlKCkgPT0gbnVsbClcblx0XHRcdHRoaXMuX3dpZGdldFoudmFsdWUoMCk7XG5cblx0XHR0aGlzLl9kaXNwYXRjaENvbW1pdCgpO1xuXHR9XG5cblx0X29uQ2xlYXJDbGljaygpXG5cdHtcblx0XHR0aGlzLl93aWRnZXRYLnZhbHVlKCcnKTtcblx0XHR0aGlzLl93aWRnZXRZLnZhbHVlKCcnKTtcblx0XHR0aGlzLl93aWRnZXRaLnZhbHVlKCcnKTtcblxuXHRcdHRoaXMuX2Rpc3BhdGNoQ29tbWl0KCk7XG5cdH1cblxuXHRfZGlzcGF0Y2hDb21taXQoKVxuXHR7XG5cdFx0aWYgKHRoaXMuX2lzVmFsaWRhYmxlKVxuXHRcdFx0dGhpcy5faW5wdXRWYWwudmFsKHRoaXMudmFsdWUpO1xuXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgndmVjdG9yLTNkLWlucHV0JykpXG5cdHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3ZlY3Rvci0zZC1pbnB1dCcsIFZlY3RvcjNESW5wdXQpO1xuIiwiaW1wb3J0IHtDb25maWdGb3JtSXRlbX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLWZvcm0taXRlbSc7XG5cbmltcG9ydCB7Q29uZmlnTnVtZXJpY1N0ZXBwZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1udW1lcmljLXN0ZXBwZXInO1xuaW1wb3J0IHtDb25maWdUZXh0SW5wdXR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy10ZXh0LWlucHV0JztcbmltcG9ydCB7Q29uZmlnQ2hlY2tCb3h9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1jaGVjay1ib3gnO1xuaW1wb3J0IHtDb25maWdEcm9wRG93bkxpc3R9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1kcm9wLWRvd24tbGlzdCc7XG5pbXBvcnQge0NvbmZpZ0dyaWR9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1ncmlkJztcbmltcG9ydCB7Q29uZmlnRHVhbExpc3R9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdWlidWlsZGVyL2NvbmZpZy1kdWFsLWxpc3QnO1xuaW1wb3J0IHtDb25maWdWZWN0b3IzRH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91aWJ1aWxkZXIvY29uZmlnLXZlY3Rvci0zZCc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdGb3JtSXRlbUZhY3Rvcnlcbntcblx0c3RhdGljIGNyZWF0ZShjb25maWdQYXJhbSwgZWRpdEVuYWJsZWQsIGluRGlhbG9nID0gZmFsc2UpXG5cdHtcblx0XHRzd2l0Y2ggKGNvbmZpZ1BhcmFtLnR5cGUpXG5cdFx0e1xuXHRcdFx0Y2FzZSAnVGV4dElucHV0Jzpcblx0XHRcdFx0cmV0dXJuIG5ldyBDb25maWdUZXh0SW5wdXQoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdDaGVja0JveCc6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnQ2hlY2tCb3goY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdOdW1lcmljU3RlcHBlcic6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnTnVtZXJpY1N0ZXBwZXIoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdDb21ib0JveCc6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnRHJvcERvd25MaXN0KGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnRGF0YUdyaWQnOlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ0dyaWQoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdEdWFsTGlzdCc6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnRHVhbExpc3QoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdWZWN0b3IzRCc6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29uZmlnVmVjdG9yM0QoY29uZmlnUGFyYW0sIGVkaXRFbmFibGVkLCBpbkRpYWxvZyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbmZpZ0Zvcm1JdGVtKGNvbmZpZ1BhcmFtLCBlZGl0RW5hYmxlZCwgaW5EaWFsb2cpOyAvLyBXaWxsIGxvZyBhbiBlcnJvciBmb3IgbWlzc2luZyBmb3JtIGl0ZW0gdHlwZVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHtDb25maWd1cmF0aW9uUGFyYW1ldGVyfSBmcm9tICcuL2NvbmZpZ3VyYXRpb24tcGFyYW1ldGVyJztcbmltcG9ydCB7Q29uZmlnRm9ybUl0ZW1GYWN0b3J5fSBmcm9tICcuL2NvbmZpZy1mb3JtLWl0ZW0tZmFjdG9yeSc7XG5cbmV4cG9ydCBjbGFzcyBDb25maWdJbnRlcmZhY2VCdWlsZGVyXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdC8vIFNldCBzb21lIGNvbnN0YW50c1xuXHRcdHRoaXMuVEFCX1BSRUZJWCA9ICd0YWItJ1xuXHRcdHRoaXMuVEFCX1BBTkVfUFJFRklYID0gJ3RhYnBhbmUtJztcblx0XHR0aGlzLlNFUEFSQVRPUl9CRUZPUkUgPSAnYmVmb3JlJztcblx0XHR0aGlzLlNFUEFSQVRPUl9BRlRFUiA9ICdhZnRlcic7XG5cdH1cblxuXHRkdW1wKG1vZGlmaWVkT25seSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGR1bXBTdHIgPSAnJztcblxuXHRcdGZvciAobGV0IGNwIG9mIHRoaXMuX2NvbmZpZ1BhcmFtcylcblx0XHR7XG5cdFx0XHRpZiAobW9kaWZpZWRPbmx5KVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoY3AuaXNNb2RpZmllZClcblx0XHRcdFx0XHRkdW1wU3RyICs9IGNwLnRvU3RyaW5nKCkgKyAnXFxuJztcblx0XHRcdH1cblx0XHRcdGVsc2Vcblx0XHRcdFx0ZHVtcFN0ciArPSBjcC50b1N0cmluZygpICsgJ1xcbic7XG5cdFx0fVxuXG5cdFx0Y29uc29sZS5sb2coZHVtcFN0cik7XG5cdH1cblxuXHRidWlsZEludGVyZmFjZShkYXRhLCBtYWluQ29udGFpbmVySWQsIGRpc2FibGVFZGl0ID0gZmFsc2UsIHRhYlN1ZmZpeCA9ICcnKVxuXHR7XG5cdFx0dGhpcy5fbWFpbkNvbnRhaW5lcklkID0gbWFpbkNvbnRhaW5lcklkO1xuXHRcdHRoaXMuX2NvbmZpZ1BhcmFtcyA9IG5ldyBBcnJheSgpO1xuXHRcdHRoaXMuX3ZhbGlkYXRvciA9IG51bGw7XG5cblx0XHRsZXQgaGFzTmV3Rm9ybUl0ZW0gPSBmYWxzZTtcblxuXHRcdC8vY29uc29sZS5sb2coZGF0YS5nZXREdW1wKCkpXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuc2l6ZSgpOyBpKyspXG5cdFx0e1xuXHRcdFx0Ly8gUEFSU0UgREFUQVxuXG5cdFx0XHRsZXQgY29uZmlnUGFyYW0gPSBDb25maWd1cmF0aW9uUGFyYW1ldGVyLmZyb21TZnNPYmplY3QoZGF0YS5nZXQoaSkpO1xuXHRcdFx0dGhpcy5fY29uZmlnUGFyYW1zLnB1c2goY29uZmlnUGFyYW0pO1xuXG5cdFx0XHQvLyBHZXQgdGFiIGFuZCB0YWIgcGFuZSBpZCBmcm9tIGdyb3VwIGlkXG5cdFx0XHRjb25zdCB0YWJJZCA9IHRoaXMuVEFCX1BSRUZJWCArIGNvbmZpZ1BhcmFtLmNhdGVnb3J5SWQgKyAodGFiU3VmZml4ID8gJ18nICsgdGFiU3VmZml4IDogJycpO1xuXHRcdFx0Y29uc3QgdGFiUGFuZUlkID0gdGhpcy5UQUJfUEFORV9QUkVGSVggKyBjb25maWdQYXJhbS5jYXRlZ29yeUlkICsgKHRhYlN1ZmZpeCA/ICdfJyArIHRhYlN1ZmZpeCA6ICcnKTtcblxuXHRcdFx0Ly8gQlVJTEQgSU5URVJGQUNFIDo6IFRBQlNcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSB0YWIgc3BlY2lmaWMgZm9yIHRoaXMgZ3JvdXAgYWxyZWFkeSBleGlzdHMgaW5zaWRlIHRoZSBtYWluQ29udGFpbmVyOiBpZiBub3QsIGNyZWF0ZSBpdFxuXHRcdFx0Ly8gKGEgdGFiIGFscmVhZHkgZXhpc3RzIGlmIGl0IHdhcyBjcmVhdGVkIGluIGEgcHJldmlvdXMgbG9vcClcblx0XHRcdGxldCB0YWIgPSAkKGAjJHttYWluQ29udGFpbmVySWR9ID4gI3RhYnMgIyR7dGFiSWR9YCk7XG5cblx0XHRcdGlmICh0YWIubGVuZ3RoID09IDApXG5cdFx0XHR7XG5cdFx0XHRcdC8vIENyZWF0ZSB0YWIgZm9yIHRhYiBwYW5lXG5cdFx0XHRcdHRhYiA9ICQoJzxsaT4nLCB7Y2xhc3M6ICduYXYtaXRlbSd9KTtcblx0XHRcdFx0dGFiLmFwcGVuZCgkKCc8YT4nLCB7XG5cdFx0XHRcdFx0Y2xhc3M6ICduYXYtbGluaycgKyAoaSA9PSAwID8gJyBhY3RpdmUnIDogJycpLFxuXHRcdFx0XHRcdGlkOiB0YWJJZCxcblx0XHRcdFx0XHQnZGF0YS10b2dnbGUnOiAndGFiJyxcblx0XHRcdFx0XHRocmVmOiAnIycgKyB0YWJQYW5lSWQsXG5cdFx0XHRcdFx0cm9sZTogJ3RhYicsXG5cdFx0XHRcdFx0J2FyaWEtY29udHJvbHMnOiB0YWJQYW5lSWQsXG5cdFx0XHRcdFx0J2FyaWEtc2VsZWN0ZWQnOiAoaSA9PSAwID8gJ3RydWUnIDogJ2ZhbHNlJyksXG5cdFx0XHRcdFx0aHRtbDogY29uZmlnUGFyYW0uY2F0ZWdvcnksXG5cdFx0XHRcdH0pKTtcblxuXHRcdFx0XHQvLyBBZGQgdGFiIHRvIGNvbnRhaW5lclxuXHRcdFx0XHQkKGAjJHttYWluQ29udGFpbmVySWR9ID4gI3RhYnNgKS5hcHBlbmQodGFiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQlVJTEQgSU5URVJGQUNFIDo6IFRBQiBQQU5FU1xuXG5cdFx0XHQvLyBDaGVjayBpZiBhIHRhYiBwYW5lIHNwZWNpZmljIGZvciB0aGlzIGdyb3VwIGFscmVhZHkgZXhpc3RzIGluc2lkZSB0aGUgbWFpbkNvbnRhaW5lcjogaWYgbm90LCBjcmVhdGUgaXRcblx0XHRcdC8vIChhIHRhYiBwYW5lIGFscmVhZHkgZXhpc3RzIGlmIGl0IHdhcyBjcmVhdGVkIGluIGEgcHJldmlvdXMgbG9vcCBvciBpZiBpdCBleGlzdHMgc3RhdGljYWxseSBpbiB0aGUgaHRtbCAtIGluIGNhc2UgaXQgaXMgbmVlZGVkIHRvIGFkZCBzb21lIHN0YXRpYyBjb250ZW50KVxuXHRcdFx0bGV0IHRhYlBhbmUgPSAkKGAjJHttYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVscyA+ICMke3RhYlBhbmVJZH1gKTtcblxuXHRcdFx0aWYgKHRhYlBhbmUubGVuZ3RoID09IDApXG5cdFx0XHR7XG5cdFx0XHRcdC8vIENyZWF0ZSB0YWIgcGFuZVxuXHRcdFx0XHR0YWJQYW5lID0gJCgnPGRpdj4nLCB7XG5cdFx0XHRcdFx0Y2xhc3M6ICd0YWItcGFuZScgKyAoaSA9PSAwID8gJyBzaG93IGFjdGl2ZScgOiAnJyksXG5cdFx0XHRcdFx0aWQ6IHRhYlBhbmVJZCxcblx0XHRcdFx0XHRyb2xlOiAndGFicGFuZWwnLFxuXHRcdFx0XHRcdCdhcmlhLWxhYmVsbGVkYnknOiB0YWJJZCxcblx0XHRcdFx0XHQnZGF0YS1keW5hbWljJzogJ3RydWUnLFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZGQgdGFiIHBhbmUgdG8gY29udGFpbmVyXG5cdFx0XHRcdCQoYCMke21haW5Db250YWluZXJJZH0gPiAjdGFiUGFuZWxzYCkuYXBwZW5kKHRhYlBhbmUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCVUlMRCBJTlRFUkZBQ0UgOjogVEFCIFBBTkVTJyBGT1JNXG5cblx0XHRcdC8vIENoZWNrIGlmIGEgZm9ybSBhbHJlYWR5IGV4aXN0cyBpbnNpZGUgdGhlIHRhYiBwYW5lOiBpZiBub3QsIGNyZWF0ZSBpdFxuXHRcdFx0bGV0IGZvcm0gPSB0YWJQYW5lLmZpbmQoJ2Zvcm0nKTtcblxuXHRcdFx0aWYgKGZvcm0ubGVuZ3RoID09IDApXG5cdFx0XHR7XG5cdFx0XHRcdC8vIENyZWF0ZSBmb3JtXG5cdFx0XHRcdGZvcm0gPSAkKCc8Zm9ybT4nLCB7XG5cdFx0XHRcdFx0Y2xhc3M6ICcnLFxuXHRcdFx0XHRcdGF1dG9jb21wbGV0ZTogJ29mZidcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIGFuIGlubmVyIGZpZWxkc2V0OyB0aGlzIG1pZ2h0IGJlIHVzZWZ1bCB0byBlYXNpbHkgZGlzYWJsZSB0aGUgd2hvbGUgZm9ybSBhdCBvbmNlIChhY3R1YWxseSB3ZSBkb24ndCB1c2UgaXQgYmVjYXVzZSBLZW5kbyB3aWRnZXRzIGFyZSBub3QgZGlzYWJsZWQgYXV0b21hdGljYWxseSlcblx0XHRcdFx0Zm9ybS5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGZpZWxkc2V0PicsIHtcblx0XHRcdFx0XHRcdGNsYXNzOiAnJ1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gQWRkIGZvcm0gdG8gdGFiIHBhbmVcblx0XHRcdFx0dGFiUGFuZS5wcmVwZW5kKGZvcm0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgZmllbGRzZXQsIHdoaWNoIGlzIHRoZSBhY3R1YWwgZm9ybSBpdGVtcyBjb250YWluZXJcblx0XHRcdGxldCBmaWVsZHNldCA9IGZvcm0uZmluZCgnZmllbGRzZXQnKTtcblxuXHRcdFx0Ly8gQlVJTEQgSU5URVJGQUNFIDo6IFRBQiBQQU5FUycgRk9STSBJVEVNU1xuXG5cdFx0XHQvLyBDaGVjayBpZiBmb3JtIGl0ZW0gYWxyZWFkeSBleGlzdHMgaW4gZmllbGRzZXQ7IGlmIHllcywganVzdCB1cGRhdGUgaXRzIGRhdGFcblx0XHRcdGxldCBmb3JtSXRlbSA9IGZpZWxkc2V0LmZpbmQoYCNmb3JtLWl0ZW0tJHskLmVzY2FwZVNlbGVjdG9yKGNvbmZpZ1BhcmFtLm5hbWUpfWApO1xuXG5cdFx0XHRpZiAoZm9ybUl0ZW0ubGVuZ3RoID09IDApXG5cdFx0XHR7XG5cdFx0XHRcdGhhc05ld0Zvcm1JdGVtID0gdHJ1ZTtcblxuXHRcdFx0XHRmb3JtSXRlbSA9IENvbmZpZ0Zvcm1JdGVtRmFjdG9yeS5jcmVhdGUoY29uZmlnUGFyYW0sICFkaXNhYmxlRWRpdCk7XG5cblx0XHRcdFx0Ly8gQWRkIHNlcGFyYXRvciBiZWZvcmVcblx0XHRcdFx0aWYgKGNvbmZpZ1BhcmFtLnNlcGFyYXRvciAhPSBudWxsICYmIGNvbmZpZ1BhcmFtLnNlcGFyYXRvci5wb3MgPT0gJ2JlZm9yZScpXG5cdFx0XHRcdFx0ZmllbGRzZXQuYXBwZW5kKHRoaXMuX2J1aWxkU2VwYXJhdG9yKGNvbmZpZ1BhcmFtLnNlcGFyYXRvcikpO1xuXG5cdFx0XHRcdC8vIEFkZCBmb3JtIGl0ZW0gdG8gZm9ybVxuXHRcdFx0XHRmaWVsZHNldC5hcHBlbmQoZm9ybUl0ZW0pO1xuXG5cdFx0XHRcdC8vIEFkZCBzZXBhcmF0b3IgYWZ0ZXJcblx0XHRcdFx0aWYgKGNvbmZpZ1BhcmFtLnNlcGFyYXRvciAhPSBudWxsICYmIGNvbmZpZ1BhcmFtLnNlcGFyYXRvci5wb3MgPT0gJ2FmdGVyJylcblx0XHRcdFx0XHRmaWVsZHNldC5hcHBlbmQodGhpcy5fYnVpbGRTZXBhcmF0b3IoY29uZmlnUGFyYW0uc2VwYXJhdG9yKSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGZvcm1JdGVtWzBdLmRhdGEgPSBjb25maWdQYXJhbTtcblx0XHR9XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gc2hvdyBoZWxwIHRvb2x0aXBzXG5cdFx0bGV0IGFsbFRhYlBhbmVzID0gJChgIyR7bWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiBkaXYudGFiLXBhbmVgKTtcblx0XHRhbGxUYWJQYW5lcy5rZW5kb1Rvb2x0aXAoe1xuXHRcdFx0ZmlsdGVyOiAnaVt0aXRsZV0uaGVscCcsXG5cdFx0XHRwb3NpdGlvbjogJ3JpZ2h0Jyxcblx0XHRcdHdpZHRoOiAnMjUwcHgnLFxuXHRcdFx0Y29udGVudDogZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJoZWxwLXRvb2x0aXBcIj4ke2UudGFyZ2V0LmRhdGEoJ3RpdGxlJyl9PC9kaXY+YDtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEluaXRpYWxpemUga2VuZG8gdmFsaWRhdGlvbiBvbiBmb3JtcycgbWFpbiBjb250YWluZXJcblx0XHR0aGlzLl92YWxpZGF0b3IgPSAkKGAjJHttYWluQ29udGFpbmVySWR9YCkua2VuZG9WYWxpZGF0b3Ioe1xuXHRcdFx0dmFsaWRhdGVPbkJsdXI6IHRydWUsXG5cdFx0XHRydWxlczoge1xuXHRcdFx0XHQvLyBBZGQgcnVsZSB0byB2YWxpZGF0ZSBBT0kgZm9ybSBpdGVtc1xuXHRcdFx0XHQvLyAoc2VlOiBodHRwczovL2RlbW9zLnRlbGVyaWsuY29tL2tlbmRvLXVpL3ZhbGlkYXRvci9jdXN0b20tdmFsaWRhdGlvbilcblx0XHRcdFx0YW9pOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHRcdFx0XHRpZiAoaW5wdXQuaXMoJ1tkYXRhLWFvaS1tc2ddJykgJiYgaW5wdXQudmFsKCkgIT0gJycpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKGlucHV0LnZhbCgpID09ICcwLDAsMCcpXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblx0XHR9KS5kYXRhKCdrZW5kb1ZhbGlkYXRvcicpO1xuXHR9XG5cblx0ZGVzdHJveUludGVyZmFjZSgpXG5cdHtcblx0XHQvLyBEZXN0cm95IGFsbCBLZW5kbyB3aWRnZXRzIGluIGZvcm1zXG5cdFx0a2VuZG8uZGVzdHJveSgkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVscyA+IGRpdi50YWItcGFuZSA+IGZvcm1gKSk7XG5cblx0XHQvLyBSZW1vdmUgYWxsIHRhYnNcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ID4gI3RhYnNgKS5lbXB0eSgpO1xuXG5cdFx0Ly8gUmVtb3ZlIGR5bmFtaWMgdGFiIHBhbmVzICh0YWIgcGFuZXMgY3JlYXRlZCBieSBJbnRlcmZhY2UgQnVpbGRlcilcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVscyA+IGRpdi50YWItcGFuZVtkYXRhLWR5bmFtaWM9XCJ0cnVlXCJdYCkucmVtb3ZlKCk7XG5cblx0XHQvLyBSZW1vdmUgZm9ybSBpbnNpZGUgc3RhdGljIHRhYiBwYW5lcyAocHJlZGVmaW5lZCB0YWIgcGFuZXMgaW4gaHRtbClcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVscyA+IGRpdi50YWItcGFuZSA+IGZvcm1gKS5yZW1vdmUoKTtcblxuXHRcdC8vIFJlbW92ZSBcImFjdGl2ZVwiIGNsYXNzIGZyb20gc3RhdGljIHRhYiBwYW5lcyAob3RoZXJ3aXNlIHRoaXMgY2xhc3MgbWVzc2VzIHdpdGggdGhlIHRhYiBuYXZpZ2F0b3IgZnVuY3Rpb25pbmcpXG5cdFx0JChgIyR7dGhpcy5fbWFpbkNvbnRhaW5lcklkfSA+ICN0YWJQYW5lbHMgPiBkaXYudGFiLXBhbmVgKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdH1cblxuXHRkaXNhYmxlSW50ZXJmYWNlKGRpc2FibGUpXG5cdHtcblx0XHQvLyBFbmFibGUvZGlzYWJsZSBhbGwgY29uZmlnIGZvcm0gaXRlbXNcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ICpbaWRePSdmb3JtLWl0ZW0tJ11gKS5wcm9wKCdlZGl0RW5hYmxlZCcsICFkaXNhYmxlKTtcblx0fVxuXG5cdF9idWlsZFNlcGFyYXRvcihzZXBhcmF0b3IpXG5cdHtcblx0XHRpZiAoc2VwYXJhdG9yLnRleHQgPT0gbnVsbClcblx0XHRcdHJldHVybiAkKGA8aHIgY2xhc3M9XCJjb25maWctZm9ybS1zZXBhcmF0b3JcIj5gKTtcblxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAkKGA8bGFiZWwgY2xhc3M9XCJjb25maWctZm9ybS1zZXBhcmF0b3ItbGFiZWwgbWItM1wiPiR7c2VwYXJhdG9yLnRleHR9PC9sYWJlbD5gKTtcblx0fVxuXG5cdGdldENoYW5nZWREYXRhKClcblx0e1xuXHRcdGxldCBjaGFuZ2VzID0gbmV3IFNGUzJYLlNGU0FycmF5KCk7XG5cblx0XHRmb3IgKHZhciBjcCBvZiB0aGlzLl9jb25maWdQYXJhbXMpXG5cdFx0e1xuXHRcdFx0aWYgKGNwLmlzTW9kaWZpZWQpXG5cdFx0XHRcdGNoYW5nZXMuYWRkU0ZTT2JqZWN0KGNwLnRvU2ZzT2JqZWN0KCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjaGFuZ2VzO1xuXHR9XG5cblx0cmVzZXRJc01vZGlmaWVkKClcblx0e1xuXHRcdGZvciAobGV0IGNwIG9mIHRoaXMuX2NvbmZpZ1BhcmFtcylcblx0XHR7XG5cdFx0XHRpZiAoY3AuaXNNb2RpZmllZClcblx0XHRcdFx0Y3AucmVzZXRJc01vZGlmaWVkKCk7XG5cdFx0fVxuXHR9XG5cblx0Y2hlY2tJc1ZhbGlkKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGF0b3IudmFsaWRhdGUoKTtcblx0fVxuXG5cdHJlc2V0VmFsaWRhdGlvbigpXG5cdHtcblx0XHR0aGlzLl92YWxpZGF0b3IuaGlkZU1lc3NhZ2VzKCk7XG5cblx0XHQvLyBUaGUgbWV0aG9kIGFib3ZlIGRvZXNuJ3QgcmVtb3ZlIHRoZSBrLWludmFsaWQgY2xhc3NlcyBhbmQgYXJpYS1pbnZhbGlkPVwidHJ1ZVwiIGF0dHJpYnV0ZXMgZnJvbSBpbnB1dHNcblx0XHQvLyBMZXQncyBkbyBpdCBtYW51YWxseVxuXHRcdCQoYCMke3RoaXMuX21haW5Db250YWluZXJJZH0gLmstaW52YWxpZGApLnJlbW92ZUNsYXNzKCdrLWludmFsaWQnKTtcblx0XHQkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9IFthcmlhLWludmFsaWQ9XCJ0cnVlXCJdYCkucmVtb3ZlQXR0cignYXJpYS1pbnZhbGlkJyk7XG5cdH1cblxuXHRnZXRDb25maWdGb3JtSXRlbShjb25maWdQYXJhbU5hbWUpXG5cdHtcblx0XHRsZXQgZm9ybUl0ZW0gPSAkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9YCkuZmluZChgI2Zvcm0taXRlbS0keyQuZXNjYXBlU2VsZWN0b3IoY29uZmlnUGFyYW1OYW1lKX1gKTtcblxuXHRcdGlmIChmb3JtSXRlbS5sZW5ndGggPiAwKVxuXHRcdFx0cmV0dXJuIGZvcm1JdGVtWzBdO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0YWN0aXZhdGVGaXJzdFRhYlBhbmVsKClcblx0e1xuXHRcdGxldCBjb25maWdQYXJhbSA9IHRoaXMuX2NvbmZpZ1BhcmFtc1swXTtcblx0XHRjb25zdCB0YWJQYW5lSWQgPSB0aGlzLlRBQl9QQU5FX1BSRUZJWCArIGNvbmZpZ1BhcmFtLmNhdGVnb3J5SWQ7XG5cdFx0bGV0IHRhYlBhbmUgPSAkKGAjJHt0aGlzLl9tYWluQ29udGFpbmVySWR9ID4gI3RhYlBhbmVscyA+ICMke3RhYlBhbmVJZH1gKTtcblx0XHR0YWJQYW5lLmFkZENsYXNzKCdzaG93IGFjdGl2ZScpO1xuXHR9XG59XG4iLCJleHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblBhcmFtZXRlclxue1xuXHRzdGF0aWMgZnJvbVNmc09iamVjdChlbGVtZW50KVxuXHR7XG5cdFx0bGV0IGNwID0gbmV3IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXIoKTtcblxuXHRcdC8vIFBhcnNlIGNvbW1vbiBkYXRhXG5cdFx0Y3AubmFtZSA9IGVsZW1lbnQuZ2V0VXRmU3RyaW5nKCduYW1lJyk7XG5cdFx0Y3AubGFiZWwgPSBlbGVtZW50LmdldFV0ZlN0cmluZygnbGFiZWwnKTtcblx0XHRjcC5jYXRlZ29yeSA9IGVsZW1lbnQuZ2V0VXRmU3RyaW5nKCdjYXRlZ29yeScpO1xuXHRcdGNwLnRvb2x0aXAgPSBlbGVtZW50LmdldFV0ZlN0cmluZygndG9vbHRpcCcpO1xuXHRcdGNwLnR5cGUgPSBlbGVtZW50LmdldFV0ZlN0cmluZygndHlwZScpO1xuXHRcdGNwLnZhbHVlID0gZWxlbWVudC5nZXQoJ3ZhbHVlJyk7XG5cdFx0Y3AudmFsaWRhdG9yID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ3ZhbGlkYXRvcicpO1xuXHRcdGNwLmVkaXRhYmxlID0gKGVsZW1lbnQuY29udGFpbnNLZXkoJ2VkaXQnKSA/IGVsZW1lbnQuZ2V0Qm9vbCgnZWRpdCcpIDogdHJ1ZSk7XG5cdFx0Y3AudHJpZ2dlciA9IChlbGVtZW50LmNvbnRhaW5zS2V5KCd0cmlnZ2VyJykgPyBlbGVtZW50LmdldEJvb2woJ3RyaWdnZXInKSA6IGZhbHNlKTtcblx0XHRjcC50cmlnZ2VyRGF0YSA9IGVsZW1lbnQuZ2V0U0ZTQXJyYXkoJ3RyaWdnZXJEYXRhJyk7XG5cdFx0Y3AuY2xpZW50T25seSA9IChlbGVtZW50LmNvbnRhaW5zS2V5KCdjbGllbnRPbmx5JykgPyBlbGVtZW50LmdldEJvb2woJ2NsaWVudE9ubHknKSA6IGZhbHNlKTtcblx0XHRjcC5kYXRhUHJvdmlkZXIgPSBlbGVtZW50LmdldFV0ZlN0cmluZygnZGF0YVByb3ZpZGVyJyk7XG5cblx0XHQvLyBQYXJzZSBjb21wb25lbnQgc3BlY2lmaWMgYXR0cmlidXRlc1xuXHRcdGxldCB0bXBBdHRyaWJ1dGVzID0gZWxlbWVudC5nZXRTRlNPYmplY3QoJ2F0dHJpYnV0ZXMnKTtcblx0XHRpZiAodG1wQXR0cmlidXRlcyAhPSBudWxsKVxuXHRcdHtcblx0XHRcdGxldCBhdHRyaWJ1dGVzID0ge307XG5cblx0XHRcdGxldCBrZXlzID0gdG1wQXR0cmlidXRlcy5nZXRLZXlzQXJyYXkoKTtcblx0XHRcdGZvciAobGV0IGtleSBvZiBrZXlzKVxuXHRcdFx0XHRhdHRyaWJ1dGVzW2tleV0gPSB0bXBBdHRyaWJ1dGVzLmdldChrZXkpO1xuXG5cdFx0XHRjcC5hdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBzZXBhcmF0b3Igc2V0dGluZ3Ncblx0XHRsZXQgdG1wU2VwYXJhdG9yID0gZWxlbWVudC5nZXRTRlNPYmplY3QoJ3NlcGFyYXRvcicpO1xuXHRcdGlmICh0bXBTZXBhcmF0b3IgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRsZXQgc2VwYXJhdG9yID0ge307XG5cblx0XHRcdGxldCBrZXlzMSA9IHRtcFNlcGFyYXRvci5nZXRLZXlzQXJyYXkoKTtcblx0XHRcdGZvciAobGV0IGtleTEgb2Yga2V5czEpXG5cdFx0XHRcdHNlcGFyYXRvcltrZXkxXSA9IHRtcFNlcGFyYXRvci5nZXQoa2V5MSk7XG5cblx0XHRcdGNwLnNlcGFyYXRvciA9IHNlcGFyYXRvcjtcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBkZWZhdWx0IGxpc3QgaXRlbVxuXHRcdGxldCB0bXBEZWZhdWx0TGlzdEl0ZW0gPSBlbGVtZW50LmdldFNGU0FycmF5KCdkZWZhdWx0TGlzdEl0ZW0nKTtcblx0XHRpZiAodG1wRGVmYXVsdExpc3RJdGVtICE9IG51bGwgJiYgdG1wRGVmYXVsdExpc3RJdGVtLnNpemUoKSA+IDApXG5cdFx0e1xuXHRcdFx0bGV0IGRlZmF1bHRMaXN0SXRlbSA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRtcERlZmF1bHRMaXN0SXRlbS5zaXplKCk7IGkrKylcblx0XHRcdFx0ZGVmYXVsdExpc3RJdGVtLnB1c2goQ29uZmlndXJhdGlvblBhcmFtZXRlci5mcm9tU2ZzT2JqZWN0KHRtcERlZmF1bHRMaXN0SXRlbS5nZXRTRlNPYmplY3QoaSkpKTtcblxuXHRcdFx0Y3AuZGVmYXVsdExpc3RJdGVtID0gZGVmYXVsdExpc3RJdGVtO1xuXG5cdFx0XHQvLyBQYXJzZSBsaXN0IHZhbHVlc1xuXHRcdFx0bGV0IGxpc3RWYWx1ZXMgPSBbXTtcblxuXHRcdFx0bGV0IHRtcExpc3RWYWx1ZXMgPSBlbGVtZW50LmdldFNGU0FycmF5KCdsaXN0VmFsdWVzJyk7XG5cdFx0XHRpZiAodG1wTGlzdFZhbHVlcyAhPSBudWxsICYmIHRtcExpc3RWYWx1ZXMuc2l6ZSgpID4gMClcblx0XHRcdHtcblx0XHRcdFx0Zm9yIChsZXQgdiA9IDA7IHYgPCB0bXBMaXN0VmFsdWVzLnNpemUoKTsgdisrKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bGV0IGxpc3RWYWx1ZU9iaiA9IHRtcExpc3RWYWx1ZXMuZ2V0U0ZTT2JqZWN0KHYpO1xuXHRcdFx0XHRcdGxldCBvYmogPSB7fTtcblxuXHRcdFx0XHRcdGxldCBrZXlzMiA9IGxpc3RWYWx1ZU9iai5nZXRLZXlzQXJyYXkoKTtcblx0XHRcdFx0XHRmb3IgKGxldCBrZXkyIG9mIGtleXMyKVxuXHRcdFx0XHRcdFx0b2JqW2tleTJdID0gbGlzdFZhbHVlT2JqLmdldChrZXkyKTtcblxuXHRcdFx0XHRcdGxpc3RWYWx1ZXMucHVzaChvYmopO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNwLmxpc3RWYWx1ZXMgPSBsaXN0VmFsdWVzO1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgbGlzdCwgb24gdGhlIHNlcnZlci1zaWRlIGl0ZW1zIGNvdWxkIGJlIHJlcHJlc2VudGVkIGJ5IGEgY2xhc3Ncblx0XHRcdGNwLmNsYXp6ID0gZWxlbWVudC5nZXRVdGZTdHJpbmcoJ2NsYXp6Jyk7XG5cblx0XHRcdC8vIEF2b2lkIGxpc3QgdG8gYmUgZW1wdGllZFxuXHRcdFx0Y3AuZGVueUVtcHR5ID0gKGVsZW1lbnQuY29udGFpbnNLZXkoJ2RlbnlFbXB0eScpID8gZWxlbWVudC5nZXRCb29sKCdkZW55RW1wdHknKSA6IGZhbHNlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY3A7XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHQvKiBDT05TVEFOVFMgKi9cblx0XHR0aGlzLkRFRkFVTFRfQ0FURUdPUllfTkFNRSA9ICdHZW5lcmFsJztcblx0XHR0aGlzLkRFRkFVTFRfQ0FURUdPUllfSUQgPSAnZ2VuZXJhbCc7XG5cblx0XHQvKiBQVUJMSUMgVkFSUyAqL1xuXG5cdFx0dGhpcy5uYW1lID0gJyc7XG5cdFx0dGhpcy5sYWJlbCA9ICcnO1xuXHRcdHRoaXMudG9vbHRpcCA9ICcnO1xuXHRcdHRoaXMudHlwZSA9IG51bGw7XG5cdFx0dGhpcy50cmlnZ2VyID0gZmFsc2U7XG5cdFx0dGhpcy50cmlnZ2VyRGF0YSA9IG51bGw7XG5cdFx0dGhpcy5jbGllbnRPbmx5ID0gZmFsc2U7XG5cdFx0dGhpcy5lZGl0YWJsZSA9IHRydWU7XG5cdFx0dGhpcy5hdHRyaWJ1dGVzID0gbnVsbDtcblx0XHR0aGlzLmRhdGFQcm92aWRlciA9IG51bGw7XG5cblx0XHR0aGlzLnNlcGFyYXRvciA9IG51bGw7XHRcdFx0Ly8gUGFyYW1ldGVyIHVzZWQgdG8gY3JlYXRlIGEgc2VwYXJhdG9yIGJlZm9yZSBvciBhZnRlciB0aGUgY29uZmlnIHBhcmFtZXRlclxuXHRcdHRoaXMuZGVmYXVsdExpc3RJdGVtID0gbnVsbDtcdC8vIExpc3Qgb2Ygc3ViLUNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLCBlYWNoIGNvbnRhaW5pbmcgdGhlIGRlZmF1bHQgdmFsdWVzXG5cdFx0dGhpcy5jbGF6eiA9IG51bGw7XHRcdFx0XHQvLyBOYW1lIG9mIHRoZSBjbGFzcyByZXByZXNlbnRpbmcgdGhlIGxpc3QgaXRlbSAobm90IHVzZWQgaW4gY2FzZSBvZiBwcmltaXRldmUgZGF0YSB0eXBlcylcblx0XHR0aGlzLmRlbnlFbXB0eSA9IGZhbHNlO1x0XHRcdC8vIERpc2FsbG93IHRvIGVtcHR5IGEgbGlzdCAoRGF0YUdyaWQgY29uZmlnIHBhcmFtZXRlciB0eXBlIG9ubHkpXG5cblx0XHQvKiBQUklWQVRFIFZBUlMgKi9cblxuXHRcdHRoaXMuX2NhdGVnb3J5ID0gdGhpcy5ERUZBVUxUX0NBVEVHT1JZX05BTUU7XG5cdFx0dGhpcy5fY2F0ZWdvcnlJZCA9IHRoaXMuREVGQVVMVF9DQVRFR09SWV9JRDtcblx0XHR0aGlzLl92YWx1ZSA9IG51bGw7XG5cdFx0dGhpcy5faW5pdGlhbFZhbHVlID0gbnVsbDtcdFx0Ly8gU2F2ZSB0aGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgY29uZmlndXJhdGlvbiBwYXJhbWV0ZXIsIHRvIGNoZWNrIGlmIHRoZSB2YWx1ZSB3YXMgbW9kaWZpZWRcblx0XHR0aGlzLl92YWxpZGF0b3IgPSBudWxsO1xuXG5cdFx0dGhpcy5fbGlzdEl0ZW1zID0gW107XHRcdFx0Ly8gQXJyYXkgb2YgYXJyYXlzIG9mIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzXG5cdFx0dGhpcy5fbGlzdEl0ZW1zQ2hhbmdlZCA9IGZhbHNlO1x0Ly8gRmxhZyB0byBiZSBzZXQgaW4gY2FzZSBhIGxpc3QgaXRlbSBpcyBhZGRlZCBvciByZW1vdmVkXG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBHRVRURVJTIC8gU0VUVEVSU1xuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdHNldCBjYXRlZ29yeSh2YWwpXG5cdHtcblx0XHRpZiAodmFsKVxuXHRcdHtcblx0XHRcdHRoaXMuX2NhdGVnb3J5ID0gdmFsO1xuXHRcdFx0dGhpcy5fc2V0SWRGcm9tQ2F0ZWdvcnlOYW1lKHRoaXMuX2NhdGVnb3J5KTtcblx0XHR9XG5cdH1cblxuXHRnZXQgY2F0ZWdvcnkoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2NhdGVnb3J5O1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbClcblx0e1xuXHRcdGlmICh0aGlzLl92YWx1ZSAhPSB2YWwpXG5cdFx0e1xuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgbnVsbCwgdGhlbiB3ZSBhcmUgc2V0dGluZyB0aGlzIGZvciB0aGUgZmlyc3QgdGltZSBhbmRcblx0XHRcdC8vIHdlIHdhbnQgdG8gc2F2ZSB0aGUgaW5pdGlhbCB2YWx1ZSwgdG8gY2hlY2sgbGF0ZXIgaWYgaXQgaGFzIGJlZW4gbW9kaWZpZWRcblx0XHRcdGlmICh0aGlzLl92YWx1ZSA9PSBudWxsKVxuXHRcdFx0XHR0aGlzLl9pbml0aWFsVmFsdWUgPSB2YWw7XG5cblx0XHRcdHRoaXMuX3ZhbHVlID0gdmFsO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fdmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsaWRhdG9yKHZhbClcblx0e1xuXHRcdGlmICh2YWwpXG5cdFx0XHR0aGlzLl92YWxpZGF0b3IgPSB2YWw7XG5cdH1cblxuXHRnZXQgdmFsaWRhdG9yKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl92YWxpZGF0b3I7XG5cdH1cblxuXHQvKipcblx0ICogQW4gYXJyYXkgb2Ygb2JqZWN0czsgZWFjaCBvYmplY3QgY29udGFpbnMgdGhlIG5hbWUtdmFsdWUgcGFpcnMgdXNlZCB0b1xuXHQgKiBwb3B1bGF0ZSB0aGUgbGlzdCBvZiBzdWItY29uZmlndXJhdGlvbiBwYXJhbWV0ZXJzIGFycmF5cywgYmFzZWQgb24gZGVmYXVsdExpc3RJdGVtLlxuXHQgKi9cblx0c2V0IGxpc3RWYWx1ZXMoYXJyKVxuXHR7XG5cdFx0dGhpcy5fc2V0U3ViQ29uZmlndXJhdGlvblBhcmFtcyhhcnIpO1xuXHR9XG5cblx0Z2V0IGxpc3RWYWx1ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX2dldFN1YkNvbmZpZ3VyYXRpb25QYXJhbXNWYWx1ZXMoKTtcblx0fVxuXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIEdFVFRFUlMgT05MWVxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdGdldCBpc01vZGlmaWVkKClcblx0e1xuXHRcdGxldCBfaXNNb2RpZmllZCA9IGZhbHNlO1xuXG5cdFx0Ly8gSWYgdGhlIHBhcmFtZXRlciBpcyB1c2VkIG9uIHRoZSBjbGllbnQgb25seSAoZm9yIGV4YW1wbGUgaW4gYSBjdXN0b20gdHJpZ2dlcilcblx0XHQvLyB0aGVuIHdlIG5ldmVyIGhhdmUgdG8gY29uc2lkZXIgaXQgYXMgbW9kaWZpZWQsIHRvIHByZXZlbnQgaXQgYmVpbmcgc2VudCB0byB0aGUgc2VydmVyXG5cdFx0aWYgKCF0aGlzLmNsaWVudE9ubHkpXG5cdFx0e1xuXHRcdFx0aWYgKHRoaXMuX3ZhbHVlICE9IHRoaXMuX2luaXRpYWxWYWx1ZSB8fCB0aGlzLl9saXN0SXRlbXNDaGFuZ2VkKVxuXHRcdFx0XHRfaXNNb2RpZmllZCA9IHRydWU7XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdC8vIENoZWNrIHN1YiBwYXJhbWV0ZXJzXG5cdFx0XHRcdG91dGVyTG9vcDogZm9yIChsZXQgbGlzdEl0ZW0gb2YgdGhpcy5fbGlzdEl0ZW1zKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Zm9yIChsZXQgc3ViQ1Agb2YgbGlzdEl0ZW0pXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aWYgKHN1YkNQLmlzTW9kaWZpZWQpXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdF9pc01vZGlmaWVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0YnJlYWsgb3V0ZXJMb29wO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBfaXNNb2RpZmllZDtcblx0fVxuXG5cdGdldCBjYXRlZ29yeUlkKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9jYXRlZ29yeUlkO1xuXHR9XG5cblx0Z2V0IGxpc3RJdGVtcygpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5fbGlzdEl0ZW1zO1xuXHR9XG5cblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gUFVCTElDIE1FVEhPRFNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgY2xvbmUgb2YgdGhpcyBDb25maWd1cmF0aW9uUGFyYW1ldGVyLlxuXHQgKi9cblx0Y2xvbmUoY2xvbmVWYWx1ZSA9IGZhbHNlKVxuXHR7XG5cdFx0bGV0IGNwID0gbmV3IENvbmZpZ3VyYXRpb25QYXJhbWV0ZXIoKTtcblx0XHRjcC5uYW1lID0gdGhpcy5uYW1lO1xuXHRcdGNwLmxhYmVsID0gdGhpcy5sYWJlbDtcblx0XHRjcC5jYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcnk7XG5cdFx0Y3AudG9vbHRpcCA9IHRoaXMudG9vbHRpcDtcblx0XHRjcC50eXBlID0gdGhpcy50eXBlO1xuXHRcdGNwLnZhbGlkYXRvciA9IHRoaXMudmFsaWRhdG9yO1xuXHRcdGNwLnRyaWdnZXIgPSB0aGlzLnRyaWdnZXI7XG5cdFx0Y3AudHJpZ2dlckRhdGEgPSAodGhpcy50cmlnZ2VyRGF0YSAhPSBudWxsID8gU0ZTMlguU0ZTQXJyYXkubmV3RnJvbUJpbmFyeURhdGEodGhpcy50cmlnZ2VyRGF0YS50b0JpbmFyeSgpKSA6IG51bGwpO1xuXHRcdGNwLmNsaWVudE9ubHkgPSB0aGlzLmNsaWVudE9ubHk7XG5cdFx0Y3AuZGF0YVByb3ZpZGVyID0gdGhpcy5kYXRhUHJvdmlkZXI7XG5cblx0XHRpZiAoY2xvbmVWYWx1ZSlcblx0XHRcdGNwLnZhbHVlID0gdGhpcy52YWx1ZTtcblxuXHRcdGlmICh0aGlzLmF0dHJpYnV0ZXMgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRjcC5hdHRyaWJ1dGVzID0gbmV3IE9iamVjdCgpO1xuXHRcdFx0Zm9yIChsZXQgczEgaW4gdGhpcy5hdHRyaWJ1dGVzKVxuXHRcdFx0XHRjcC5hdHRyaWJ1dGVzW3MxXSA9IHRoaXMuYXR0cmlidXRlc1tzMV07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VwYXJhdG9yICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0Y3Auc2VwYXJhdG9yID0gbmV3IE9iamVjdCgpXG5cdFx0XHRmb3IgKGxldCBzMiBpbiB0aGlzLnNlcGFyYXRvcilcblx0XHRcdFx0Y3Auc2VwYXJhdG9yW3MyXSA9IHRoaXMuc2VwYXJhdG9yW3MyXTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5kZWZhdWx0TGlzdEl0ZW0gIT0gbnVsbClcblx0XHR7XG5cdFx0XHRsZXQgY2xvbmVkRGVmYXVsdExpc3RJdGVtcyA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBzdWJDUCBvZiB0aGlzLmRlZmF1bHRMaXN0SXRlbSlcblx0XHRcdFx0Y2xvbmVkRGVmYXVsdExpc3RJdGVtcy5wdXNoKHN1YkNQLmNsb25lKGNsb25lVmFsdWUpKTtcblxuXHRcdFx0Y3AuZGVmYXVsdExpc3RJdGVtID0gY2xvbmVkRGVmYXVsdExpc3RJdGVtcztcblx0XHR9XG5cblx0XHRjcC5saXN0VmFsdWVzID0gdGhpcy5saXN0VmFsdWVzOyAvLyBObyBuZWVkIHRvIGNsb25lIHRoaXMsIGFzIHRoZSBsaXN0VmFsdWVzIHNldHRlciBhbHJlYWR5IGRvZXMgaXRcblx0XHRjcC5jbGF6eiA9IHRoaXMuY2xheno7XG5cdFx0Y3AuZGVueUVtcHR5ID0gdGhpcy5kZW55RW1wdHk7XG5cblx0XHRyZXR1cm4gY3A7XG5cdH1cblxuXHQvKipcblx0ICogUmVzZXQgaW5pdGlhbCB2YWx1ZSBieSBjb3B5aW5nIHRoZSBjdXJyZW50IHZhbHVlLlxuXHQgKi9cblx0cmVzZXRJc01vZGlmaWVkKClcblx0e1xuXHRcdHRoaXMuX2luaXRpYWxWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xuXG5cdFx0Ly8gUmVzZXQgc3ViLXBhcmFtZXRlcnNcblx0XHRpZiAodGhpcy5fbGlzdEl0ZW1zICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0Zm9yIChsZXQgbGlzdEl0ZW0gb2YgdGhpcy5fbGlzdEl0ZW1zKVxuXHRcdFx0e1xuXHRcdFx0XHRmb3IgKGxldCBzdWJDUCBvZiBsaXN0SXRlbSlcblx0XHRcdFx0XHRzdWJDUC5yZXNldElzTW9kaWZpZWQoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLl9saXN0SXRlbXNDaGFuZ2VkID0gZmFsc2U7XG5cdH1cblxuXHRhZGRMaXN0SXRlbShuZXdMaXN0SXRlbSlcblx0e1xuXHRcdHRoaXMuX2xpc3RJdGVtcy5wdXNoKG5ld0xpc3RJdGVtKTtcblx0XHR0aGlzLl9saXN0SXRlbXNDaGFuZ2VkID0gdHJ1ZTtcblx0fVxuXG5cdHVwZGF0ZUxpc3RJdGVtKGxpc3RJdGVtLCBpdGVtSW5kZXgpXG5cdHtcblx0XHR0aGlzLl9saXN0SXRlbXNbaXRlbUluZGV4XSA9IGxpc3RJdGVtO1xuXHRcdHRoaXMuX2xpc3RJdGVtc0NoYW5nZWQgPSB0cnVlO1xuXHR9XG5cblx0cmVtb3ZlTGlzdEl0ZW0oaXRlbUluZGV4KVxuXHR7XG5cdFx0dGhpcy5fbGlzdEl0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xuXHRcdHRoaXMuX2xpc3RJdGVtc0NoYW5nZWQgPSB0cnVlO1xuXHR9XG5cblx0dG9TZnNPYmplY3QoKVxuXHR7XG5cdFx0bGV0IG9iaiA9IG5ldyBTRlMyWC5TRlNPYmplY3QoKTtcblxuXHRcdC8vIFNldCBjaGFuZ2VkIHNldHRpbmcgbmFtZVxuXHRcdG9iai5wdXRVdGZTdHJpbmcoJ25hbWUnLCB0aGlzLm5hbWUpO1xuXG5cdFx0Ly8gU2V0IGNoYW5nZWQgc2V0dGluZyBjbGFzcywgaWYgYW55XG5cdFx0aWYgKHRoaXMuY2xhenogIT0gbnVsbClcblx0XHRcdG9iai5wdXRVdGZTdHJpbmcoJ2NsYXp6JywgdGhpcy5jbGF6eik7XG5cblx0XHRpZiAodGhpcy52YWx1ZSAhPSBudWxsKVxuXHRcdHtcblx0XHRcdC8vIFNldCBjaGFuZ2VkIHNldHRpbmcgdmFsdWVcblx0XHRcdGlmICh0eXBlb2YgdGhpcy52YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHRcdFx0XHRvYmoucHV0Qm9vbCgndmFsdWUnLCB0aGlzLnZhbHVlKTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiB0aGlzLnZhbHVlID09PSAnbnVtYmVyJylcblx0XHRcdFx0b2JqLnB1dEludCgndmFsdWUnLCB0aGlzLnZhbHVlKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0b2JqLnB1dFRleHQoJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHQvLyBTZXQgY2hhbmdlZCBzZXR0aW5nIGxpc3Qgb2YgdmFsdWVzXG5cblx0XHRcdGxldCBsaXN0SXRlbXMgPSBuZXcgU0ZTMlguU0ZTQXJyYXkoKTtcblxuXHRcdFx0Zm9yIChsZXQgYSBvZiB0aGlzLl9saXN0SXRlbXMpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChhLmxlbmd0aCA9PSAxKSAvLyBXZSBoYXZlIGp1c3Qgb25lIHN1YiBjb25maWcgcGFyYW07IG5vIG5lZWQgdG8gcGFyc2UgaXQgY29tcGxpdGVseVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ly8gU2ltcGxlIGxpc3Rcblx0XHRcdFx0XHRsZXQgdGVtcE9iaiA9IGFbMF0udG9TZnNPYmplY3QoKTtcblx0XHRcdFx0XHRsZXQgd2EgPSB0ZW1wT2JqLmdldFdyYXBwZWRJdGVtKCd2YWx1ZScpO1xuXHRcdFx0XHRcdGxpc3RJdGVtcy5hZGQod2EudmFsdWUsIHdhLnR5cGUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdC8vIENvbXBsZXggbGlzdFxuXG5cdFx0XHRcdFx0bGV0IHZhbHVlcyA9IG5ldyBTRlMyWC5TRlNBcnJheSgpO1xuXG5cdFx0XHRcdFx0Zm9yIChsZXQgc3ViQ3Agb2YgYSlcblx0XHRcdFx0XHRcdHZhbHVlcy5hZGRTRlNPYmplY3Qoc3ViQ3AudG9TZnNPYmplY3QoKSk7XG5cblx0XHRcdFx0XHRsaXN0SXRlbXMuYWRkU0ZTQXJyYXkodmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRvYmoucHV0U0ZTQXJyYXkoJ3ZhbHVlJywgbGlzdEl0ZW1zKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIGRlc2NyaXB0aW9uIG9mIHRoZSBDb25maWd1cmF0aW9uUGFyYW1ldGVyIGluc3RhbmNlLlxuXHQgKi9cblx0dG9TdHJpbmcoKVxuXHR7XG5cdFx0bGV0IHMgPSBgYDtcblx0XHRzICs9IGBDb25maWd1cmF0aW9uIHBhcmFtZXRlcjogJHt0aGlzLm5hbWV9XFxuYDtcblx0XHRzICs9IGBcXHR0eXBlOiAke3RoaXMudHlwZX1cXG5gO1xuXHRcdHMgKz0gYFxcdGxhYmVsOiAke3RoaXMubGFiZWx9XFxuYDtcblx0XHRzICs9IGBcXHRjYXRlZ29yeSBuYW1lOiAke3RoaXMuY2F0ZWdvcnl9XFxuYDtcblx0XHRzICs9IGBcXHRjYXRlZ29yeSBpZDogJHt0aGlzLmNhdGVnb3J5SWR9XFxuYDtcblx0XHRzICs9IGBcXHR0b29sdGlwOiAke3RoaXMudG9vbHRpcH1cXG5gO1xuXHRcdHMgKz0gYFxcdHZhbHVlOiAke3RoaXMudmFsdWV9XFxuYDtcblx0XHRzICs9IGBcXHR0cmlnZ2VyOiAke3RoaXMudHJpZ2dlcn1cXG5gO1xuXHRcdHMgKz0gYFxcdHRyaWdnZXIgZGF0YTogJHt0aGlzLnRyaWdnZXJEYXRhfVxcbmA7XG5cdFx0cyArPSBgXFx0Y2xpZW50IG9ubHk6ICR7dGhpcy5jbGllbnRPbmx5fVxcbmA7XG5cdFx0cyArPSBgXFx0dmFsaWRhdG9yOiAke3RoaXMudmFsaWRhdG9yfVxcbmA7XG5cdFx0cyArPSBgXFx0aXMgbW9kaWZpZWQ6ICR7dGhpcy5pc01vZGlmaWVkfVxcbmA7XG5cblx0XHRpZiAodGhpcy5hdHRyaWJ1dGVzICE9IG51bGwpXG5cdFx0e1xuXHRcdFx0cyArPSBgXFx0Y29tcG9uZW50IGF0dHJpYnV0ZXM6XFxuYDtcblxuXHRcdFx0Zm9yIChsZXQgczEgaW4gdGhpcy5hdHRyaWJ1dGVzKVxuXHRcdFx0XHRzICs9IGBcXHRcXHQke3MxfSAtLT4gJHt0aGlzLmF0dHJpYnV0ZXNbczFdfVxcbmA7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZGF0YVByb3ZpZGVyICE9IG51bGwpXG5cdFx0XHRzICs9IGBcXHRkYXRhIHByb3ZpZGVyOiAke3RoaXMuZGF0YVByb3ZpZGVyfVxcbmA7XG5cblx0XHRpZiAodGhpcy5zZXBhcmF0b3IgIT0gbnVsbClcblx0XHR7XG5cdFx0XHRzICs9IGBcXHRzZXBhcmF0b3I6XFxuYDtcblxuXHRcdFx0Zm9yIChsZXQgczIgaW4gdGhpcy5zZXBhcmF0b3IpXG5cdFx0XHRcdHMgKz0gYFxcdFxcdCR7czJ9IC0tPiAke3RoaXMuc2VwYXJhdG9yW3MyXX1cXG5gO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl9saXN0SXRlbXMgIT0gbnVsbCAmJiB0aGlzLl9saXN0SXRlbXMubGVuZ3RoID4gMClcblx0XHR7XG5cdFx0XHRzICs9IGBcXHQjIGxpc3QgaXRlbXM6ICR7dGhpcy5fbGlzdEl0ZW1zLmxlbmd0aH1cXG5gO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xpc3RJdGVtcy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0cyArPSBgXFx0bGlzdCBpdGVtICR7aX0gc3ViLXBhcmFtZXRlcnM6XFxuYDtcblx0XHRcdFx0Zm9yIChsZXQgZSA9IDA7IGUgPCB0aGlzLl9saXN0SXRlbXNbaV0ubGVuZ3RoOyBlKyspXG5cdFx0XHRcdFx0cyArPSBgXFx0XFx0JHt0aGlzLl9saXN0SXRlbXNbaV1bZV0udG9Db21wYWN0U3RyaW5nKCl9XFxuYDtcblx0XHRcdH1cblxuXHRcdFx0cyArPSBgXFx0Y2xhc3MgbmFtZTogJHt0aGlzLmNsYXp6fVxcbmA7XG5cdFx0XHRzICs9IGBcXHRkZW55IGVtcHR5IGxpc3Q6ICR7dGhpcy5kZW55RW1wdHl9XFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBjb21wYWN0IGRlc2NyaXB0aW9uIG9mIHRoZSBDb25maWd1cmF0aW9uUGFyYW1ldGVyIGluc3RhbmNlLlxuXHQgKi9cblx0dG9Db21wYWN0U3RyaW5nKClcblx0e1xuXHRcdHJldHVybiBgQ29uZmlndXJhdGlvbiBwYXJhbWV0ZXIgJyR7dGhpcy5uYW1lfSc6ICR7dGhpcy52YWx1ZX0gJHt0aGlzLmlzTW9kaWZpZWQgPyAnW1hdJyA6ICdbIF0nfWA7XG5cdH1cblxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBQUklWQVRFIE1FVEhPRFNcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvKipcblx0ICogUmV0cmlldmUgdGhlIGNhdGVnb3J5IGlkIGZvcm0gdGhlIGNhdGVnb3J5IG5hbWUuXG5cdCAqIFNwYWNlcyBhbmQgaW52YWxpZCBjaGFyYWN0ZXJzIGFyZSByZW1vdmVkOyB3b3JkcyBhcmUgc2VwYXJhdGVkIHVzaW5nIGNhcGl0YWxzLlxuXHQgKi9cblx0X3NldElkRnJvbUNhdGVnb3J5TmFtZShjYXRlZ29yeU5hbWUpXG5cdHtcblx0XHR0aGlzLl9jYXRlZ29yeUlkID0gY2F0ZWdvcnlOYW1lO1xuXG5cdFx0Ly8gU3RyaXAgaW52YWxpZCBjaGFyYWN0ZXJzXG5cdFx0dmFyIHBhdHRlcm4gPSAvW14wLTlhLXpBLVpdL2c7XG5cdFx0dGhpcy5fY2F0ZWdvcnlJZCA9IHRoaXMuX2NhdGVnb3J5SWQucmVwbGFjZShwYXR0ZXJuLCAnICcpO1xuXG5cdFx0Ly8gQ2FwaXRhbGl6ZSB3b3Jkc1xuXHRcdHZhciB3b3JkcyA9IHRoaXMuX2NhdGVnb3J5SWQuc3BsaXQoJyAnKTtcblx0XHR0aGlzLl9jYXRlZ29yeUlkID0gJyc7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKVxuXHRcdHtcblx0XHRcdGxldCB3b3JkID0gd29yZHNbaV07XG5cdFx0XHRpZiAod29yZC5sZW5ndGggPiAwKVxuXHRcdFx0XHR0aGlzLl9jYXRlZ29yeUlkICs9IChpID4gMCA/IHdvcmQuc3Vic3RyKDAsMSkudG9VcHBlckNhc2UoKSA6IHdvcmQuc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSkgKyAod29yZC5sZW5ndGggPiAxID8gd29yZC5zdWJzdHIoMSkgOiBcIlwiKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5fY2F0ZWdvcnlJZC5sZW5ndGggPT0gMClcblx0XHRcdHRoaXMuX2NhdGVnb3J5SWQgPSB0aGlzLkRFRkFVTFRfQ0FURUdPUllfSUQ7XG5cdH1cblxuXHRfc2V0U3ViQ29uZmlndXJhdGlvblBhcmFtcyhfbGlzdFZhbHVlcylcblx0e1xuXHRcdHRoaXMuX2xpc3RJdGVtcyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgb2JqIG9mIF9saXN0VmFsdWVzKVxuXHRcdHtcblx0XHRcdGxldCBsaXN0SXRlbSA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCBkZWZhdWx0Q1Agb2YgdGhpcy5kZWZhdWx0TGlzdEl0ZW0pXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBzdWJDUCA9IGRlZmF1bHRDUC5jbG9uZShmYWxzZSk7XG5cdFx0XHRcdHN1YkNQLnZhbHVlID0gb2JqW3N1YkNQLm5hbWVdO1xuXG5cdFx0XHRcdGxpc3RJdGVtLnB1c2goc3ViQ1ApO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9saXN0SXRlbXMucHVzaChsaXN0SXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0X2dldFN1YkNvbmZpZ3VyYXRpb25QYXJhbXNWYWx1ZXMoKVxuXHR7XG5cdFx0bGV0IF9saXN0VmFsdWVzID0gW107XG5cblx0XHRmb3IgKGxldCBsaXN0SXRlbSBvZiB0aGlzLl9saXN0SXRlbXMpXG5cdFx0e1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXG5cdFx0XHRmb3IgKGxldCBzdWJDUCBvZiBsaXN0SXRlbSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKHN1YkNQLnZhbHVlICE9IG51bGwpXG5cdFx0XHRcdFx0b2JqW3N1YkNQLm5hbWVdID0gc3ViQ1AudmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdF9saXN0VmFsdWVzLnB1c2gob2JqKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gX2xpc3RWYWx1ZXM7XG5cdH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6TEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeE9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xYQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDN1FBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9