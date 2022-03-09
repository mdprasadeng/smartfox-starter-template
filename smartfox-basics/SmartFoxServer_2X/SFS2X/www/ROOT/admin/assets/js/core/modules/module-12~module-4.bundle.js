/*! (c) gotoAndPlay | All rights reserved */
(window["webpackJsonpapplication"] = window["webpackJsonpapplication"] || []).push([["module-12~module-4"],{

/***/ "./src/components/module-specific/ssl-certificate-manager.js":
/*!*******************************************************************!*\
  !*** ./src/components/module-specific/ssl-certificate-manager.js ***!
  \*******************************************************************/
/*! exports provided: SslCertificateManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SslCertificateManager", function() { return SslCertificateManager; });
/* harmony import */ var _utils_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/utilities */ "./src/utils/utilities.js");
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aes-js */ "./node_modules/aes-js/index.js");
/* harmony import */ var aes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aes_js__WEBPACK_IMPORTED_MODULE_1__);



class SslCertificateManager extends HTMLElement
{
	constructor()
	{
	    super();

		this._modalHtml = `
			<div class="modal" id="uploadModal" tabindex="-1" role="dialog" aria-labelledby="uploadModalTitle" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title text-primary" id="uploadModalTitle">SSL Certificate Manager</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body in-flow-invalid-msg">
							<fieldset id="uploadFieldset">
								<div id="uploaderSubform">
									<div class="form-group">
										<div class="col-form-label form-label-container">
											<label for="uploader" class="form-label">Certificate keystore (jks) <i class="fas fa-question-circle text-muted help" title="SSL certificate's protected keystore file to be uploaded to the server, in jks format"></i></label>
										</div>
										<div class="inner-widget">
											<input type="file" id="uploader" name="uploader" accept=".jks" data-upload-msg="Select a file">
											<span class="k-invalid-msg position-static" data-for="uploader"></span>
										</div>
									</div>
								</div>
								<div id="passwordsSubform">
									<div class="form-row">
										<div class="form-group col">
											<div class="col-form-label form-label-container">
												<label for="ksPassword" class="form-label">Keystore password <i class="fas fa-question-circle text-muted help" title="Password used to protect the certificate keystore"></i></label>
											</div>
											<div class="inner-widget">
												<input type="password" id="ksPassword" name="ksPassword" class="form-control k-textbox" autocomplete="off" required data-required-msg="Required" />
												<span class="k-invalid-msg position-static" data-for="ksPassword"></span>
											</div>
										</div>

										<div class="form-group col">
											<div class="col-form-label form-label-container">
												<label for="confirmKsPassword" class="form-label">Confirm password <i class="fas fa-question-circle text-muted help" title="Keystore password confirmation"></i></label>
											</div>
											<div class="inner-widget">
												<input type="password" id="confirmKsPassword" name="confirmKsPassword" class="form-control k-textbox" autocomplete="off" required data-required-msg="Required" />
												<span class="k-invalid-msg position-static" data-for="confirmKsPassword"></span>
											</div>
										</div>
									</div>

									<p><em>For additional security, enter again and confirm your SFS2X administration password.</em></p>

									<div class="form-row">
										<div class="form-group col">
											<div class="col-form-label form-label-container">
												<label for="adminPassword" class="form-label">Admin password <i class="fas fa-question-circle text-muted help" title="SmartFoxServer 2X remote administration password"></i></label>
											</div>
											<div class="inner-widget">
												<input type="password" id="adminPassword" name="adminPassword" class="form-control k-textbox" autocomplete="off" required data-required-msg="Required" />
												<span class="k-invalid-msg position-static" data-for="adminPassword"></span>
											</div>
										</div>

										<div class="form-group col">
											<div class="col-form-label form-label-container">
												<label for="confirmAdminPassword" class="form-label">Confirm password <i class="fas fa-question-circle text-muted help" title="SmartFoxServer 2X remote administration password confirmation"></i></label>
											</div>
											<div class="inner-widget">
												<input type="password" id="confirmAdminPassword" name="confirmAdminPassword" class="form-control k-textbox" autocomplete="off" required data-required-msg="Required" />
												<span class="k-invalid-msg position-static" data-for="confirmAdminPassword"></span>
											</div>
										</div>
									</div>
								</div>
							</fieldset>
						</div>
						<div class="modal-footer flex-column">
							<div class="d-flex w-100">
								<div class="flex-grow-1 text-left">
									<button id="uploadSslButton" type="button" class="k-button k-primary"><i class="fas fa-upload mr-1"></i>Upload certificate</button>
									<i id="uploadSpinner" class="fas fa-circle-notch fa-spin text-primary align-middle ml-1"></i>
								</div>
								<div class="flex-grow-1 text-right">
									<button type="button" class="k-button k-secondary" data-dismiss="modal">Cancel</button>
								</div>
							</div>
							<div id="uploadErrorMsg" class="text-danger mt-3"></div>
						</div>
					</div>
				</div>
			</div>
		`;

		//-------------------------------------------

		$(this).append(`
			<div class="col-sm-5 col-lg-4 col-form-label form-label-container">
				<label class="form-label">Upload certificate <i class="fas fa-question-circle text-muted help" title="Upload an SSL certificate's protected keystore to the server"></i></label>
			</div>
			<div class="inner-widget align-self-center align-self-sm-start col-auto">
				<button id="manageSslButton" type="button" class="k-button k-primary" disabled><i class="fas fa-cog mr-1"></i>Manage</button>
			</div>
		`);

		// Add listeners to Manage button click
		$('#manageSslButton', $(this)).on('click', $.proxy(this._onManageSslClick, this));
	}

	destroy()
	{
		// Remove event listener
		$('#manageSslButton', $(this)).off('click');

		// Hide modal (which in turn destroys it)
		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
			modalElement.modal('hide');
	}

	get enabled()
	{
		return this._isEnabled;
	}

	set enabled(value)
	{
		this._isEnabled = value;

		// Enable/disable Manage button
		$('#manageSslButton', $(this)).attr('disabled', !value);

		// Enable/disable modal
		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
		{
			// Disable modal close buttons
			$('button[data-dismiss="modal"]', modalElement).attr('disabled', !value);

			// Disable upload button
			$('#uploadSslButton', modalElement).attr('disabled', !value);

			// Disable fieldset
			$('#uploadFieldset', modalElement).attr('disabled', !value);
		}
	}

	get uploadTargetConfig()
	{
		return this._uploadTargetConfig;
	}

	set uploadTargetConfig(data)
	{
		this._uploadTargetConfig = data;
	}

	_onManageSslClick()
	{
		// Initialize and show modal
		this._showModal();
	}

	_onUploadSslClick()
	{
		if (this._validate())
			this._startSslCertUpload();
	}

	_showModal()
	{
		// Append modal html
		$(this).append(this._modalHtml);

		let modalElement = $('#uploadModal', $(this));

		// Hide SSL certificate upload spinner and error message container
		$('#uploadSpinner', modalElement).hide();
		$('#uploadErrorMsg', modalElement).hide();
		$('#uploadErrorMsg', modalElement).text('');

		// Add listener to Upload button click
		$('#uploadSslButton', modalElement).on('click', $.proxy(this._onUploadSslClick, this));

		// Add listener to modal hide event
		modalElement.on('hidden.bs.modal', $.proxy(this._destroyModal, this));

		// Initialize kendo uploader
		this._uploadWidget = modalElement.find('#uploader').kendoUpload({
			allowedExtensions: ['.jks'],
			multiple: false,
			template: function(dataItem) {
				dataItem.bytesToSize = _utils_utilities__WEBPACK_IMPORTED_MODULE_0__["bytesToSize"]; // Pass bytesToSize utility function to template
				return kendo.template(`
					<span class='k-progress w-100'></span>
					<span class="">
						<span class="k-file-name" title="#=name#">#=name#</span>
						<span class="k-file-size">Size: #=bytesToSize(size, 1, 'Bytes')#</span>
					</span>
				`)(dataItem);
			},
	        localization: {
	            select: 'Select file...'
	        }
        }).data('kendoUpload');

		// Initialize kendo validation on uploader subform
		// NOTE: we use separate validators to be able to disable 'validateOnBlur' on the uploader,
		// because it causes the error message to appear as soon as the "Select file" button is clicked
		this._validator1 = modalElement.find('#uploaderSubform').kendoValidator({
			validateOnBlur: false,
			rules: {
				upload: function(input) {
					let valid = false;
					if (input.is('[type=file]'))
						valid = input.closest('.k-upload').find('.k-file').length > 0;

					return valid;
	            }
			}
		}).data('kendoValidator');

		// Initialize kendo validation on passwords subform
		this._validator2 = modalElement.find('#passwordsSubform').kendoValidator({
			validateOnBlur: true,
			rules: {
				verifyKsPassword: $.proxy(function(input) {
					let valid = true;
					if (input.is('[name=confirmKsPassword]'))
						valid = input.val() === $(this).find('#ksPassword').val();
					return valid;
				}, this),
				verifyAdmPassword: $.proxy(function(input) {
					let valid = true;
					if (input.is('[name=confirmAdminPassword]'))
						valid = input.val() === $(this).find('#adminPassword').val();
					return valid;
				}, this)
			},
			messages: {
				verifyKsPassword: 'Password not matching',
				verifyAdmPassword: 'Password not matching',
			}
		}).data('kendoValidator');

		// Initialize bootstrap modal
		modalElement.modal({
			backdrop: 'static',
			keyboard: false,
		});
	}

	_destroyModal()
	{
		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
		{
			// Remove listeners
			$('#uploadSslButton', modalElement).off('click');
			modalElement.off('hidden.bs.modal');

			// Destroy everything Kendo
			kendo.destroy(modalElement);

			// Dispose modal
			modalElement.modal('dispose');

			// Remove html
			modalElement.remove();
			modalElement = null;
		}
	}

	_validate()
	{
		let val1 = this._validator1.validate();
		let val2 = this._validator2.validate();

		return val1 && val2;
	}

	_startSslCertUpload()
	{
		if (!this._uploadTargetConfig)
			throw new Error('Upload target configuration not set');

		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
		{
			let certData = {};
			certData.file = this._uploadWidget.getFiles()[0];
			certData.ksPassword = $('#ksPassword', modalElement).val();
			certData.adminPassword = $('#adminPassword', modalElement).val();

			// Disable modal
			this.enabled = false;

			// Hide previous error and show spinner
			$('#uploadSpinner', modalElement).show();
			$('#uploadErrorMsg', modalElement).hide();
			$('#uploadErrorMsg', modalElement).text('');

			//=================================================================

			// Generate Init Vector
			let rngValues = [];
			for (let i = 0; i < 16; i++)
				rngValues.push(Math.floor(Math.random() * 256));

			let iv = new Uint8Array(rngValues);

			// Generate secret key by MD5-encoding admin password + session token
			let md5Pass = this._binaryMD5(certData.adminPassword + this._uploadTargetConfig.sessionToken);

			// Encrypt keystore password via AES (128bit)
			let encryptedPwd = this._aesEncrypt(certData.ksPassword, md5Pass, iv);

			// Encode IV using Base64
			let encodedIv = this._b64Encode(iv);

			// Encode encrypted password using Base64
			let encodedPwd = this._b64Encode(encryptedPwd);

			//=================================================================

			// Set parameters to be sent with the certificate keystore file
			const params = new FormData();
			params.append('files[]', certData.file.rawFile);
			params.append('__iv', encodedIv);
			params.append('__password', encodedPwd);
			params.append('__module', this._uploadTargetConfig.moduleId);

			// Set destination url
			const url = this._uploadTargetConfig.protocol + '://' + this._uploadTargetConfig.host + ':' + this._uploadTargetConfig.port + '/BlueBox/SFS2XFileUpload?sessHashId=' + this._uploadTargetConfig.sessionToken;

			// Start upload
			fetch(url, {
				method: 'POST',
				body: params,
				mode: 'no-cors'
			}).then($.proxy(this._onSslCertUploadEnd, this));
		}
	}

	_onSslCertUploadEnd(response)
	{
		// Nothing to do: we have to wait the upload process completion to be signaled by the server through the dedicated Extension response

		//=================================================================

		// TODO Should we handle this response in some way? For some unknown reason we always get ok=false and status=0
		//console.log(response)
		//console.log(response.ok)
		//console.log(response.status)
	}

	/**
	 * Method called by parent when upload failed.
	 */
	onSslCertUploadError(error)
	{
		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
		{
			// Enable modal
			this.enabled = true;

			// Show upload error
			$('#uploadErrorMsg', modalElement).show();
			$('#uploadErrorMsg', modalElement).text(error + '.');

			// Hide spinner
			$('#uploadSpinner', modalElement).hide();
		}
	}

	/**
	 * Method called by parent when upload is completed successfully.
	 */
	onSslCertUploadSuccess()
	{
		let modalElement = $('#uploadModal', $(this));

		if (modalElement)
		{
			// Enable modal
			this.enabled = true;

			// Hide spinner
			$('#uploadSpinner', modalElement).hide();

			// Hide modal
			modalElement.modal('hide');
		}
	}

	// *****************************************************************

	/*
	 * Takes a string and returns the MD5 as Uint8Array
	 */
	_binaryMD5(str)
	{
		let MD5 = new SFS2X.MD5();
		let hexStr = MD5.hex_md5(str);

		return this._hexByteStringToByteArray(hexStr);
	}

	/*
	 * Hex bytes ---> Actual byte[] as Uint8Array
	 */
	_hexByteStringToByteArray(hexByteString)
	{
	    let bytes = new Uint8Array(16); // MD5 fixed output size

	    for (let i = 0; i < hexByteString.length;)
	    {
	        let hexByte = hexByteString[i++] + hexByteString[i++];
	        let byte = parseInt(hexByte, 16);

	        bytes[i / 2 - 1] = byte;
	    }

	    return bytes;
	}

	/*
	 * Encrypt using AES, mode CBC, PKCS#7 padding
	 *
	 * text 		-> the text we want to encode
	 * key 		-> the AES key
	 * iv  		-> the AES/CBC init vector
	 *
	 * Returns 	-> Uint8Array
	 */
	_aesEncrypt(text, key, iv)
	{
		let textBytes = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.utils.utf8.toBytes(text); 		// Get UTF-8 bytes
		let aesCBC = new aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.ModeOfOperation.cbc(key, iv);	// Init CBC mode
		textBytes = aes_js__WEBPACK_IMPORTED_MODULE_1___default.a.padding.pkcs7.pad(textBytes); 		// PKCS#7 padding

		// Encrypt
		return aesCBC.encrypt(textBytes);
	}

	/*
	 * Encode passed byte array --> Base64 representation
	 * Returns --> string
	 */
	_b64Encode(barray)
	{
		return btoa(String.fromCharCode.apply(null, barray));
	}
}

// DEFINE COMPONENT
if (!window.customElements.get('ssl-certificate-manager'))
	window.customElements.define('ssl-certificate-manager', SslCertificateManager);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzL2pzL2NvcmUvbW9kdWxlcy9tb2R1bGUtMTJ+bW9kdWxlLTQuYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwbGljYXRpb24vLi9zcmMvY29tcG9uZW50cy9tb2R1bGUtc3BlY2lmaWMvc3NsLWNlcnRpZmljYXRlLW1hbmFnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtieXRlc1RvU2l6ZX0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbGl0aWVzJztcbmltcG9ydCBhZXNqcyBmcm9tICdhZXMtanMnO1xuXG5leHBvcnQgY2xhc3MgU3NsQ2VydGlmaWNhdGVNYW5hZ2VyIGV4dGVuZHMgSFRNTEVsZW1lbnRcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdCAgICBzdXBlcigpO1xuXG5cdFx0dGhpcy5fbW9kYWxIdG1sID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsXCIgaWQ9XCJ1cGxvYWRNb2RhbFwiIHRhYmluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwidXBsb2FkTW9kYWxUaXRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZFwiIHJvbGU9XCJkb2N1bWVudFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1vZGFsLXRpdGxlIHRleHQtcHJpbWFyeVwiIGlkPVwidXBsb2FkTW9kYWxUaXRsZVwiPlNTTCBDZXJ0aWZpY2F0ZSBNYW5hZ2VyPC9oNT5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5IGluLWZsb3ctaW52YWxpZC1tc2dcIj5cblx0XHRcdFx0XHRcdFx0PGZpZWxkc2V0IGlkPVwidXBsb2FkRmllbGRzZXRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidXBsb2FkZXJTdWJmb3JtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgZm9ybS1sYWJlbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwidXBsb2FkZXJcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5DZXJ0aWZpY2F0ZSBrZXlzdG9yZSAoamtzKSA8aSBjbGFzcz1cImZhcyBmYS1xdWVzdGlvbi1jaXJjbGUgdGV4dC1tdXRlZCBoZWxwXCIgdGl0bGU9XCJTU0wgY2VydGlmaWNhdGUncyBwcm90ZWN0ZWQga2V5c3RvcmUgZmlsZSB0byBiZSB1cGxvYWRlZCB0byB0aGUgc2VydmVyLCBpbiBqa3MgZm9ybWF0XCI+PC9pPjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5uZXItd2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJ1cGxvYWRlclwiIG5hbWU9XCJ1cGxvYWRlclwiIGFjY2VwdD1cIi5qa3NcIiBkYXRhLXVwbG9hZC1tc2c9XCJTZWxlY3QgYSBmaWxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnIHBvc2l0aW9uLXN0YXRpY1wiIGRhdGEtZm9yPVwidXBsb2FkZXJcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBpZD1cInBhc3N3b3Jkc1N1YmZvcm1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2xcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWZvcm0tbGFiZWwgZm9ybS1sYWJlbC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJrc1Bhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWxhYmVsXCI+S2V5c3RvcmUgcGFzc3dvcmQgPGkgY2xhc3M9XCJmYXMgZmEtcXVlc3Rpb24tY2lyY2xlIHRleHQtbXV0ZWQgaGVscFwiIHRpdGxlPVwiUGFzc3dvcmQgdXNlZCB0byBwcm90ZWN0IHRoZSBjZXJ0aWZpY2F0ZSBrZXlzdG9yZVwiPjwvaT48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbm5lci13aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImtzUGFzc3dvcmRcIiBuYW1lPVwia3NQYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGstdGV4dGJveFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHJlcXVpcmVkIGRhdGEtcmVxdWlyZWQtbXNnPVwiUmVxdWlyZWRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnIHBvc2l0aW9uLXN0YXRpY1wiIGRhdGEtZm9yPVwia3NQYXNzd29yZFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGZvcm0tbGFiZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybUtzUGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Db25maXJtIHBhc3N3b3JkIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIktleXN0b3JlIHBhc3N3b3JkIGNvbmZpcm1hdGlvblwiPjwvaT48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbm5lci13aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImNvbmZpcm1Lc1Bhc3N3b3JkXCIgbmFtZT1cImNvbmZpcm1Lc1Bhc3N3b3JkXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgay10ZXh0Ym94XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQgZGF0YS1yZXF1aXJlZC1tc2c9XCJSZXF1aXJlZFwiIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImstaW52YWxpZC1tc2cgcG9zaXRpb24tc3RhdGljXCIgZGF0YS1mb3I9XCJjb25maXJtS3NQYXNzd29yZFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+PGVtPkZvciBhZGRpdGlvbmFsIHNlY3VyaXR5LCBlbnRlciBhZ2FpbiBhbmQgY29uZmlybSB5b3VyIFNGUzJYIGFkbWluaXN0cmF0aW9uIHBhc3N3b3JkLjwvZW0+PC9wPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGZvcm0tbGFiZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiYWRtaW5QYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1sYWJlbFwiPkFkbWluIHBhc3N3b3JkIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIlNtYXJ0Rm94U2VydmVyIDJYIHJlbW90ZSBhZG1pbmlzdHJhdGlvbiBwYXNzd29yZFwiPjwvaT48L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbm5lci13aWRnZXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cImFkbWluUGFzc3dvcmRcIiBuYW1lPVwiYWRtaW5QYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGstdGV4dGJveFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHJlcXVpcmVkIGRhdGEtcmVxdWlyZWQtbXNnPVwiUmVxdWlyZWRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnIHBvc2l0aW9uLXN0YXRpY1wiIGRhdGEtZm9yPVwiYWRtaW5QYXNzd29yZFwiPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgY29sXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1mb3JtLWxhYmVsIGZvcm0tbGFiZWwtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiY29uZmlybUFkbWluUGFzc3dvcmRcIiBjbGFzcz1cImZvcm0tbGFiZWxcIj5Db25maXJtIHBhc3N3b3JkIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIlNtYXJ0Rm94U2VydmVyIDJYIHJlbW90ZSBhZG1pbmlzdHJhdGlvbiBwYXNzd29yZCBjb25maXJtYXRpb25cIj48L2k+PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5uZXItd2lkZ2V0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgaWQ9XCJjb25maXJtQWRtaW5QYXNzd29yZFwiIG5hbWU9XCJjb25maXJtQWRtaW5QYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGstdGV4dGJveFwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIHJlcXVpcmVkIGRhdGEtcmVxdWlyZWQtbXNnPVwiUmVxdWlyZWRcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJrLWludmFsaWQtbXNnIHBvc2l0aW9uLXN0YXRpY1wiIGRhdGEtZm9yPVwiY29uZmlybUFkbWluUGFzc3dvcmRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZmllbGRzZXQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXIgZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3ctMSB0ZXh0LWxlZnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJ1cGxvYWRTc2xCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrLWJ1dHRvbiBrLXByaW1hcnlcIj48aSBjbGFzcz1cImZhcyBmYS11cGxvYWQgbXItMVwiPjwvaT5VcGxvYWQgY2VydGlmaWNhdGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpIGlkPVwidXBsb2FkU3Bpbm5lclwiIGNsYXNzPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluIHRleHQtcHJpbWFyeSBhbGlnbi1taWRkbGUgbWwtMVwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTEgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrLWJ1dHRvbiBrLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2FuY2VsPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwidXBsb2FkRXJyb3JNc2dcIiBjbGFzcz1cInRleHQtZGFuZ2VyIG10LTNcIj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdGA7XG5cblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHRcdCQodGhpcykuYXBwZW5kKGBcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tNSBjb2wtbGctNCBjb2wtZm9ybS1sYWJlbCBmb3JtLWxhYmVsLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJmb3JtLWxhYmVsXCI+VXBsb2FkIGNlcnRpZmljYXRlIDxpIGNsYXNzPVwiZmFzIGZhLXF1ZXN0aW9uLWNpcmNsZSB0ZXh0LW11dGVkIGhlbHBcIiB0aXRsZT1cIlVwbG9hZCBhbiBTU0wgY2VydGlmaWNhdGUncyBwcm90ZWN0ZWQga2V5c3RvcmUgdG8gdGhlIHNlcnZlclwiPjwvaT48L2xhYmVsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiaW5uZXItd2lkZ2V0IGFsaWduLXNlbGYtY2VudGVyIGFsaWduLXNlbGYtc20tc3RhcnQgY29sLWF1dG9cIj5cblx0XHRcdFx0PGJ1dHRvbiBpZD1cIm1hbmFnZVNzbEJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImstYnV0dG9uIGstcHJpbWFyeVwiIGRpc2FibGVkPjxpIGNsYXNzPVwiZmFzIGZhLWNvZyBtci0xXCI+PC9pPk1hbmFnZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0YCk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXJzIHRvIE1hbmFnZSBidXR0b24gY2xpY2tcblx0XHQkKCcjbWFuYWdlU3NsQnV0dG9uJywgJCh0aGlzKSkub24oJ2NsaWNrJywgJC5wcm94eSh0aGlzLl9vbk1hbmFnZVNzbENsaWNrLCB0aGlzKSk7XG5cdH1cblxuXHRkZXN0cm95KClcblx0e1xuXHRcdC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lclxuXHRcdCQoJyNtYW5hZ2VTc2xCdXR0b24nLCAkKHRoaXMpKS5vZmYoJ2NsaWNrJyk7XG5cblx0XHQvLyBIaWRlIG1vZGFsICh3aGljaCBpbiB0dXJuIGRlc3Ryb3lzIGl0KVxuXHRcdGxldCBtb2RhbEVsZW1lbnQgPSAkKCcjdXBsb2FkTW9kYWwnLCAkKHRoaXMpKTtcblxuXHRcdGlmIChtb2RhbEVsZW1lbnQpXG5cdFx0XHRtb2RhbEVsZW1lbnQubW9kYWwoJ2hpZGUnKTtcblx0fVxuXG5cdGdldCBlbmFibGVkKClcblx0e1xuXHRcdHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG5cdH1cblxuXHRzZXQgZW5hYmxlZCh2YWx1ZSlcblx0e1xuXHRcdHRoaXMuX2lzRW5hYmxlZCA9IHZhbHVlO1xuXG5cdFx0Ly8gRW5hYmxlL2Rpc2FibGUgTWFuYWdlIGJ1dHRvblxuXHRcdCQoJyNtYW5hZ2VTc2xCdXR0b24nLCAkKHRoaXMpKS5hdHRyKCdkaXNhYmxlZCcsICF2YWx1ZSk7XG5cblx0XHQvLyBFbmFibGUvZGlzYWJsZSBtb2RhbFxuXHRcdGxldCBtb2RhbEVsZW1lbnQgPSAkKCcjdXBsb2FkTW9kYWwnLCAkKHRoaXMpKTtcblxuXHRcdGlmIChtb2RhbEVsZW1lbnQpXG5cdFx0e1xuXHRcdFx0Ly8gRGlzYWJsZSBtb2RhbCBjbG9zZSBidXR0b25zXG5cdFx0XHQkKCdidXR0b25bZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLCBtb2RhbEVsZW1lbnQpLmF0dHIoJ2Rpc2FibGVkJywgIXZhbHVlKTtcblxuXHRcdFx0Ly8gRGlzYWJsZSB1cGxvYWQgYnV0dG9uXG5cdFx0XHQkKCcjdXBsb2FkU3NsQnV0dG9uJywgbW9kYWxFbGVtZW50KS5hdHRyKCdkaXNhYmxlZCcsICF2YWx1ZSk7XG5cblx0XHRcdC8vIERpc2FibGUgZmllbGRzZXRcblx0XHRcdCQoJyN1cGxvYWRGaWVsZHNldCcsIG1vZGFsRWxlbWVudCkuYXR0cignZGlzYWJsZWQnLCAhdmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB1cGxvYWRUYXJnZXRDb25maWcoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMuX3VwbG9hZFRhcmdldENvbmZpZztcblx0fVxuXG5cdHNldCB1cGxvYWRUYXJnZXRDb25maWcoZGF0YSlcblx0e1xuXHRcdHRoaXMuX3VwbG9hZFRhcmdldENvbmZpZyA9IGRhdGE7XG5cdH1cblxuXHRfb25NYW5hZ2VTc2xDbGljaygpXG5cdHtcblx0XHQvLyBJbml0aWFsaXplIGFuZCBzaG93IG1vZGFsXG5cdFx0dGhpcy5fc2hvd01vZGFsKCk7XG5cdH1cblxuXHRfb25VcGxvYWRTc2xDbGljaygpXG5cdHtcblx0XHRpZiAodGhpcy5fdmFsaWRhdGUoKSlcblx0XHRcdHRoaXMuX3N0YXJ0U3NsQ2VydFVwbG9hZCgpO1xuXHR9XG5cblx0X3Nob3dNb2RhbCgpXG5cdHtcblx0XHQvLyBBcHBlbmQgbW9kYWwgaHRtbFxuXHRcdCQodGhpcykuYXBwZW5kKHRoaXMuX21vZGFsSHRtbCk7XG5cblx0XHRsZXQgbW9kYWxFbGVtZW50ID0gJCgnI3VwbG9hZE1vZGFsJywgJCh0aGlzKSk7XG5cblx0XHQvLyBIaWRlIFNTTCBjZXJ0aWZpY2F0ZSB1cGxvYWQgc3Bpbm5lciBhbmQgZXJyb3IgbWVzc2FnZSBjb250YWluZXJcblx0XHQkKCcjdXBsb2FkU3Bpbm5lcicsIG1vZGFsRWxlbWVudCkuaGlkZSgpO1xuXHRcdCQoJyN1cGxvYWRFcnJvck1zZycsIG1vZGFsRWxlbWVudCkuaGlkZSgpO1xuXHRcdCQoJyN1cGxvYWRFcnJvck1zZycsIG1vZGFsRWxlbWVudCkudGV4dCgnJyk7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXIgdG8gVXBsb2FkIGJ1dHRvbiBjbGlja1xuXHRcdCQoJyN1cGxvYWRTc2xCdXR0b24nLCBtb2RhbEVsZW1lbnQpLm9uKCdjbGljaycsICQucHJveHkodGhpcy5fb25VcGxvYWRTc2xDbGljaywgdGhpcykpO1xuXG5cdFx0Ly8gQWRkIGxpc3RlbmVyIHRvIG1vZGFsIGhpZGUgZXZlbnRcblx0XHRtb2RhbEVsZW1lbnQub24oJ2hpZGRlbi5icy5tb2RhbCcsICQucHJveHkodGhpcy5fZGVzdHJveU1vZGFsLCB0aGlzKSk7XG5cblx0XHQvLyBJbml0aWFsaXplIGtlbmRvIHVwbG9hZGVyXG5cdFx0dGhpcy5fdXBsb2FkV2lkZ2V0ID0gbW9kYWxFbGVtZW50LmZpbmQoJyN1cGxvYWRlcicpLmtlbmRvVXBsb2FkKHtcblx0XHRcdGFsbG93ZWRFeHRlbnNpb25zOiBbJy5qa3MnXSxcblx0XHRcdG11bHRpcGxlOiBmYWxzZSxcblx0XHRcdHRlbXBsYXRlOiBmdW5jdGlvbihkYXRhSXRlbSkge1xuXHRcdFx0XHRkYXRhSXRlbS5ieXRlc1RvU2l6ZSA9IGJ5dGVzVG9TaXplOyAvLyBQYXNzIGJ5dGVzVG9TaXplIHV0aWxpdHkgZnVuY3Rpb24gdG8gdGVtcGxhdGVcblx0XHRcdFx0cmV0dXJuIGtlbmRvLnRlbXBsYXRlKGBcblx0XHRcdFx0XHQ8c3BhbiBjbGFzcz0nay1wcm9ncmVzcyB3LTEwMCc+PC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImstZmlsZS1uYW1lXCIgdGl0bGU9XCIjPW5hbWUjXCI+Iz1uYW1lIzwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiay1maWxlLXNpemVcIj5TaXplOiAjPWJ5dGVzVG9TaXplKHNpemUsIDEsICdCeXRlcycpIzwvc3Bhbj5cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdGApKGRhdGFJdGVtKTtcblx0XHRcdH0sXG5cdCAgICAgICAgbG9jYWxpemF0aW9uOiB7XG5cdCAgICAgICAgICAgIHNlbGVjdDogJ1NlbGVjdCBmaWxlLi4uJ1xuXHQgICAgICAgIH1cbiAgICAgICAgfSkuZGF0YSgna2VuZG9VcGxvYWQnKTtcblxuXHRcdC8vIEluaXRpYWxpemUga2VuZG8gdmFsaWRhdGlvbiBvbiB1cGxvYWRlciBzdWJmb3JtXG5cdFx0Ly8gTk9URTogd2UgdXNlIHNlcGFyYXRlIHZhbGlkYXRvcnMgdG8gYmUgYWJsZSB0byBkaXNhYmxlICd2YWxpZGF0ZU9uQmx1cicgb24gdGhlIHVwbG9hZGVyLFxuXHRcdC8vIGJlY2F1c2UgaXQgY2F1c2VzIHRoZSBlcnJvciBtZXNzYWdlIHRvIGFwcGVhciBhcyBzb29uIGFzIHRoZSBcIlNlbGVjdCBmaWxlXCIgYnV0dG9uIGlzIGNsaWNrZWRcblx0XHR0aGlzLl92YWxpZGF0b3IxID0gbW9kYWxFbGVtZW50LmZpbmQoJyN1cGxvYWRlclN1YmZvcm0nKS5rZW5kb1ZhbGlkYXRvcih7XG5cdFx0XHR2YWxpZGF0ZU9uQmx1cjogZmFsc2UsXG5cdFx0XHRydWxlczoge1xuXHRcdFx0XHR1cGxvYWQ6IGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0XHRcdFx0bGV0IHZhbGlkID0gZmFsc2U7XG5cdFx0XHRcdFx0aWYgKGlucHV0LmlzKCdbdHlwZT1maWxlXScpKVxuXHRcdFx0XHRcdFx0dmFsaWQgPSBpbnB1dC5jbG9zZXN0KCcuay11cGxvYWQnKS5maW5kKCcuay1maWxlJykubGVuZ3RoID4gMDtcblxuXHRcdFx0XHRcdHJldHVybiB2YWxpZDtcblx0ICAgICAgICAgICAgfVxuXHRcdFx0fVxuXHRcdH0pLmRhdGEoJ2tlbmRvVmFsaWRhdG9yJyk7XG5cblx0XHQvLyBJbml0aWFsaXplIGtlbmRvIHZhbGlkYXRpb24gb24gcGFzc3dvcmRzIHN1YmZvcm1cblx0XHR0aGlzLl92YWxpZGF0b3IyID0gbW9kYWxFbGVtZW50LmZpbmQoJyNwYXNzd29yZHNTdWJmb3JtJykua2VuZG9WYWxpZGF0b3Ioe1xuXHRcdFx0dmFsaWRhdGVPbkJsdXI6IHRydWUsXG5cdFx0XHRydWxlczoge1xuXHRcdFx0XHR2ZXJpZnlLc1Bhc3N3b3JkOiAkLnByb3h5KGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoaW5wdXQuaXMoJ1tuYW1lPWNvbmZpcm1Lc1Bhc3N3b3JkXScpKVxuXHRcdFx0XHRcdFx0dmFsaWQgPSBpbnB1dC52YWwoKSA9PT0gJCh0aGlzKS5maW5kKCcja3NQYXNzd29yZCcpLnZhbCgpO1xuXHRcdFx0XHRcdHJldHVybiB2YWxpZDtcblx0XHRcdFx0fSwgdGhpcyksXG5cdFx0XHRcdHZlcmlmeUFkbVBhc3N3b3JkOiAkLnByb3h5KGZ1bmN0aW9uKGlucHV0KSB7XG5cdFx0XHRcdFx0bGV0IHZhbGlkID0gdHJ1ZTtcblx0XHRcdFx0XHRpZiAoaW5wdXQuaXMoJ1tuYW1lPWNvbmZpcm1BZG1pblBhc3N3b3JkXScpKVxuXHRcdFx0XHRcdFx0dmFsaWQgPSBpbnB1dC52YWwoKSA9PT0gJCh0aGlzKS5maW5kKCcjYWRtaW5QYXNzd29yZCcpLnZhbCgpO1xuXHRcdFx0XHRcdHJldHVybiB2YWxpZDtcblx0XHRcdFx0fSwgdGhpcylcblx0XHRcdH0sXG5cdFx0XHRtZXNzYWdlczoge1xuXHRcdFx0XHR2ZXJpZnlLc1Bhc3N3b3JkOiAnUGFzc3dvcmQgbm90IG1hdGNoaW5nJyxcblx0XHRcdFx0dmVyaWZ5QWRtUGFzc3dvcmQ6ICdQYXNzd29yZCBub3QgbWF0Y2hpbmcnLFxuXHRcdFx0fVxuXHRcdH0pLmRhdGEoJ2tlbmRvVmFsaWRhdG9yJyk7XG5cblx0XHQvLyBJbml0aWFsaXplIGJvb3RzdHJhcCBtb2RhbFxuXHRcdG1vZGFsRWxlbWVudC5tb2RhbCh7XG5cdFx0XHRiYWNrZHJvcDogJ3N0YXRpYycsXG5cdFx0XHRrZXlib2FyZDogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblxuXHRfZGVzdHJveU1vZGFsKClcblx0e1xuXHRcdGxldCBtb2RhbEVsZW1lbnQgPSAkKCcjdXBsb2FkTW9kYWwnLCAkKHRoaXMpKTtcblxuXHRcdGlmIChtb2RhbEVsZW1lbnQpXG5cdFx0e1xuXHRcdFx0Ly8gUmVtb3ZlIGxpc3RlbmVyc1xuXHRcdFx0JCgnI3VwbG9hZFNzbEJ1dHRvbicsIG1vZGFsRWxlbWVudCkub2ZmKCdjbGljaycpO1xuXHRcdFx0bW9kYWxFbGVtZW50Lm9mZignaGlkZGVuLmJzLm1vZGFsJyk7XG5cblx0XHRcdC8vIERlc3Ryb3kgZXZlcnl0aGluZyBLZW5kb1xuXHRcdFx0a2VuZG8uZGVzdHJveShtb2RhbEVsZW1lbnQpO1xuXG5cdFx0XHQvLyBEaXNwb3NlIG1vZGFsXG5cdFx0XHRtb2RhbEVsZW1lbnQubW9kYWwoJ2Rpc3Bvc2UnKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIGh0bWxcblx0XHRcdG1vZGFsRWxlbWVudC5yZW1vdmUoKTtcblx0XHRcdG1vZGFsRWxlbWVudCA9IG51bGw7XG5cdFx0fVxuXHR9XG5cblx0X3ZhbGlkYXRlKClcblx0e1xuXHRcdGxldCB2YWwxID0gdGhpcy5fdmFsaWRhdG9yMS52YWxpZGF0ZSgpO1xuXHRcdGxldCB2YWwyID0gdGhpcy5fdmFsaWRhdG9yMi52YWxpZGF0ZSgpO1xuXG5cdFx0cmV0dXJuIHZhbDEgJiYgdmFsMjtcblx0fVxuXG5cdF9zdGFydFNzbENlcnRVcGxvYWQoKVxuXHR7XG5cdFx0aWYgKCF0aGlzLl91cGxvYWRUYXJnZXRDb25maWcpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1VwbG9hZCB0YXJnZXQgY29uZmlndXJhdGlvbiBub3Qgc2V0Jyk7XG5cblx0XHRsZXQgbW9kYWxFbGVtZW50ID0gJCgnI3VwbG9hZE1vZGFsJywgJCh0aGlzKSk7XG5cblx0XHRpZiAobW9kYWxFbGVtZW50KVxuXHRcdHtcblx0XHRcdGxldCBjZXJ0RGF0YSA9IHt9O1xuXHRcdFx0Y2VydERhdGEuZmlsZSA9IHRoaXMuX3VwbG9hZFdpZGdldC5nZXRGaWxlcygpWzBdO1xuXHRcdFx0Y2VydERhdGEua3NQYXNzd29yZCA9ICQoJyNrc1Bhc3N3b3JkJywgbW9kYWxFbGVtZW50KS52YWwoKTtcblx0XHRcdGNlcnREYXRhLmFkbWluUGFzc3dvcmQgPSAkKCcjYWRtaW5QYXNzd29yZCcsIG1vZGFsRWxlbWVudCkudmFsKCk7XG5cblx0XHRcdC8vIERpc2FibGUgbW9kYWxcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBIaWRlIHByZXZpb3VzIGVycm9yIGFuZCBzaG93IHNwaW5uZXJcblx0XHRcdCQoJyN1cGxvYWRTcGlubmVyJywgbW9kYWxFbGVtZW50KS5zaG93KCk7XG5cdFx0XHQkKCcjdXBsb2FkRXJyb3JNc2cnLCBtb2RhbEVsZW1lbnQpLmhpZGUoKTtcblx0XHRcdCQoJyN1cGxvYWRFcnJvck1zZycsIG1vZGFsRWxlbWVudCkudGV4dCgnJyk7XG5cblx0XHRcdC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRcdFx0Ly8gR2VuZXJhdGUgSW5pdCBWZWN0b3Jcblx0XHRcdGxldCBybmdWYWx1ZXMgPSBbXTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkrKylcblx0XHRcdFx0cm5nVmFsdWVzLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XG5cblx0XHRcdGxldCBpdiA9IG5ldyBVaW50OEFycmF5KHJuZ1ZhbHVlcyk7XG5cblx0XHRcdC8vIEdlbmVyYXRlIHNlY3JldCBrZXkgYnkgTUQ1LWVuY29kaW5nIGFkbWluIHBhc3N3b3JkICsgc2Vzc2lvbiB0b2tlblxuXHRcdFx0bGV0IG1kNVBhc3MgPSB0aGlzLl9iaW5hcnlNRDUoY2VydERhdGEuYWRtaW5QYXNzd29yZCArIHRoaXMuX3VwbG9hZFRhcmdldENvbmZpZy5zZXNzaW9uVG9rZW4pO1xuXG5cdFx0XHQvLyBFbmNyeXB0IGtleXN0b3JlIHBhc3N3b3JkIHZpYSBBRVMgKDEyOGJpdClcblx0XHRcdGxldCBlbmNyeXB0ZWRQd2QgPSB0aGlzLl9hZXNFbmNyeXB0KGNlcnREYXRhLmtzUGFzc3dvcmQsIG1kNVBhc3MsIGl2KTtcblxuXHRcdFx0Ly8gRW5jb2RlIElWIHVzaW5nIEJhc2U2NFxuXHRcdFx0bGV0IGVuY29kZWRJdiA9IHRoaXMuX2I2NEVuY29kZShpdik7XG5cblx0XHRcdC8vIEVuY29kZSBlbmNyeXB0ZWQgcGFzc3dvcmQgdXNpbmcgQmFzZTY0XG5cdFx0XHRsZXQgZW5jb2RlZFB3ZCA9IHRoaXMuX2I2NEVuY29kZShlbmNyeXB0ZWRQd2QpO1xuXG5cdFx0XHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0XHRcdC8vIFNldCBwYXJhbWV0ZXJzIHRvIGJlIHNlbnQgd2l0aCB0aGUgY2VydGlmaWNhdGUga2V5c3RvcmUgZmlsZVxuXHRcdFx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0XHRwYXJhbXMuYXBwZW5kKCdmaWxlc1tdJywgY2VydERhdGEuZmlsZS5yYXdGaWxlKTtcblx0XHRcdHBhcmFtcy5hcHBlbmQoJ19faXYnLCBlbmNvZGVkSXYpO1xuXHRcdFx0cGFyYW1zLmFwcGVuZCgnX19wYXNzd29yZCcsIGVuY29kZWRQd2QpO1xuXHRcdFx0cGFyYW1zLmFwcGVuZCgnX19tb2R1bGUnLCB0aGlzLl91cGxvYWRUYXJnZXRDb25maWcubW9kdWxlSWQpO1xuXG5cdFx0XHQvLyBTZXQgZGVzdGluYXRpb24gdXJsXG5cdFx0XHRjb25zdCB1cmwgPSB0aGlzLl91cGxvYWRUYXJnZXRDb25maWcucHJvdG9jb2wgKyAnOi8vJyArIHRoaXMuX3VwbG9hZFRhcmdldENvbmZpZy5ob3N0ICsgJzonICsgdGhpcy5fdXBsb2FkVGFyZ2V0Q29uZmlnLnBvcnQgKyAnL0JsdWVCb3gvU0ZTMlhGaWxlVXBsb2FkP3Nlc3NIYXNoSWQ9JyArIHRoaXMuX3VwbG9hZFRhcmdldENvbmZpZy5zZXNzaW9uVG9rZW47XG5cblx0XHRcdC8vIFN0YXJ0IHVwbG9hZFxuXHRcdFx0ZmV0Y2godXJsLCB7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRib2R5OiBwYXJhbXMsXG5cdFx0XHRcdG1vZGU6ICduby1jb3JzJ1xuXHRcdFx0fSkudGhlbigkLnByb3h5KHRoaXMuX29uU3NsQ2VydFVwbG9hZEVuZCwgdGhpcykpO1xuXHRcdH1cblx0fVxuXG5cdF9vblNzbENlcnRVcGxvYWRFbmQocmVzcG9uc2UpXG5cdHtcblx0XHQvLyBOb3RoaW5nIHRvIGRvOiB3ZSBoYXZlIHRvIHdhaXQgdGhlIHVwbG9hZCBwcm9jZXNzIGNvbXBsZXRpb24gdG8gYmUgc2lnbmFsZWQgYnkgdGhlIHNlcnZlciB0aHJvdWdoIHRoZSBkZWRpY2F0ZWQgRXh0ZW5zaW9uIHJlc3BvbnNlXG5cblx0XHQvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cblx0XHQvLyBUT0RPIFNob3VsZCB3ZSBoYW5kbGUgdGhpcyByZXNwb25zZSBpbiBzb21lIHdheT8gRm9yIHNvbWUgdW5rbm93biByZWFzb24gd2UgYWx3YXlzIGdldCBvaz1mYWxzZSBhbmQgc3RhdHVzPTBcblx0XHQvL2NvbnNvbGUubG9nKHJlc3BvbnNlKVxuXHRcdC8vY29uc29sZS5sb2cocmVzcG9uc2Uub2spXG5cdFx0Ly9jb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpXG5cdH1cblxuXHQvKipcblx0ICogTWV0aG9kIGNhbGxlZCBieSBwYXJlbnQgd2hlbiB1cGxvYWQgZmFpbGVkLlxuXHQgKi9cblx0b25Tc2xDZXJ0VXBsb2FkRXJyb3IoZXJyb3IpXG5cdHtcblx0XHRsZXQgbW9kYWxFbGVtZW50ID0gJCgnI3VwbG9hZE1vZGFsJywgJCh0aGlzKSk7XG5cblx0XHRpZiAobW9kYWxFbGVtZW50KVxuXHRcdHtcblx0XHRcdC8vIEVuYWJsZSBtb2RhbFxuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gU2hvdyB1cGxvYWQgZXJyb3Jcblx0XHRcdCQoJyN1cGxvYWRFcnJvck1zZycsIG1vZGFsRWxlbWVudCkuc2hvdygpO1xuXHRcdFx0JCgnI3VwbG9hZEVycm9yTXNnJywgbW9kYWxFbGVtZW50KS50ZXh0KGVycm9yICsgJy4nKTtcblxuXHRcdFx0Ly8gSGlkZSBzcGlubmVyXG5cdFx0XHQkKCcjdXBsb2FkU3Bpbm5lcicsIG1vZGFsRWxlbWVudCkuaGlkZSgpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBNZXRob2QgY2FsbGVkIGJ5IHBhcmVudCB3aGVuIHVwbG9hZCBpcyBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LlxuXHQgKi9cblx0b25Tc2xDZXJ0VXBsb2FkU3VjY2VzcygpXG5cdHtcblx0XHRsZXQgbW9kYWxFbGVtZW50ID0gJCgnI3VwbG9hZE1vZGFsJywgJCh0aGlzKSk7XG5cblx0XHRpZiAobW9kYWxFbGVtZW50KVxuXHRcdHtcblx0XHRcdC8vIEVuYWJsZSBtb2RhbFxuXHRcdFx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gSGlkZSBzcGlubmVyXG5cdFx0XHQkKCcjdXBsb2FkU3Bpbm5lcicsIG1vZGFsRWxlbWVudCkuaGlkZSgpO1xuXG5cdFx0XHQvLyBIaWRlIG1vZGFsXG5cdFx0XHRtb2RhbEVsZW1lbnQubW9kYWwoJ2hpZGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG5cdC8qXG5cdCAqIFRha2VzIGEgc3RyaW5nIGFuZCByZXR1cm5zIHRoZSBNRDUgYXMgVWludDhBcnJheVxuXHQgKi9cblx0X2JpbmFyeU1ENShzdHIpXG5cdHtcblx0XHRsZXQgTUQ1ID0gbmV3IFNGUzJYLk1ENSgpO1xuXHRcdGxldCBoZXhTdHIgPSBNRDUuaGV4X21kNShzdHIpO1xuXG5cdFx0cmV0dXJuIHRoaXMuX2hleEJ5dGVTdHJpbmdUb0J5dGVBcnJheShoZXhTdHIpO1xuXHR9XG5cblx0Lypcblx0ICogSGV4IGJ5dGVzIC0tLT4gQWN0dWFsIGJ5dGVbXSBhcyBVaW50OEFycmF5XG5cdCAqL1xuXHRfaGV4Qnl0ZVN0cmluZ1RvQnl0ZUFycmF5KGhleEJ5dGVTdHJpbmcpXG5cdHtcblx0ICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KDE2KTsgLy8gTUQ1IGZpeGVkIG91dHB1dCBzaXplXG5cblx0ICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4Qnl0ZVN0cmluZy5sZW5ndGg7KVxuXHQgICAge1xuXHQgICAgICAgIGxldCBoZXhCeXRlID0gaGV4Qnl0ZVN0cmluZ1tpKytdICsgaGV4Qnl0ZVN0cmluZ1tpKytdO1xuXHQgICAgICAgIGxldCBieXRlID0gcGFyc2VJbnQoaGV4Qnl0ZSwgMTYpO1xuXG5cdCAgICAgICAgYnl0ZXNbaSAvIDIgLSAxXSA9IGJ5dGU7XG5cdCAgICB9XG5cblx0ICAgIHJldHVybiBieXRlcztcblx0fVxuXG5cdC8qXG5cdCAqIEVuY3J5cHQgdXNpbmcgQUVTLCBtb2RlIENCQywgUEtDUyM3IHBhZGRpbmdcblx0ICpcblx0ICogdGV4dCBcdFx0LT4gdGhlIHRleHQgd2Ugd2FudCB0byBlbmNvZGVcblx0ICoga2V5IFx0XHQtPiB0aGUgQUVTIGtleVxuXHQgKiBpdiAgXHRcdC0+IHRoZSBBRVMvQ0JDIGluaXQgdmVjdG9yXG5cdCAqXG5cdCAqIFJldHVybnMgXHQtPiBVaW50OEFycmF5XG5cdCAqL1xuXHRfYWVzRW5jcnlwdCh0ZXh0LCBrZXksIGl2KVxuXHR7XG5cdFx0bGV0IHRleHRCeXRlcyA9IGFlc2pzLnV0aWxzLnV0ZjgudG9CeXRlcyh0ZXh0KTsgXHRcdC8vIEdldCBVVEYtOCBieXRlc1xuXHRcdGxldCBhZXNDQkMgPSBuZXcgYWVzanMuTW9kZU9mT3BlcmF0aW9uLmNiYyhrZXksIGl2KTtcdC8vIEluaXQgQ0JDIG1vZGVcblx0XHR0ZXh0Qnl0ZXMgPSBhZXNqcy5wYWRkaW5nLnBrY3M3LnBhZCh0ZXh0Qnl0ZXMpOyBcdFx0Ly8gUEtDUyM3IHBhZGRpbmdcblxuXHRcdC8vIEVuY3J5cHRcblx0XHRyZXR1cm4gYWVzQ0JDLmVuY3J5cHQodGV4dEJ5dGVzKTtcblx0fVxuXG5cdC8qXG5cdCAqIEVuY29kZSBwYXNzZWQgYnl0ZSBhcnJheSAtLT4gQmFzZTY0IHJlcHJlc2VudGF0aW9uXG5cdCAqIFJldHVybnMgLS0+IHN0cmluZ1xuXHQgKi9cblx0X2I2NEVuY29kZShiYXJyYXkpXG5cdHtcblx0XHRyZXR1cm4gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJhcnJheSkpO1xuXHR9XG59XG5cbi8vIERFRklORSBDT01QT05FTlRcbmlmICghd2luZG93LmN1c3RvbUVsZW1lbnRzLmdldCgnc3NsLWNlcnRpZmljYXRlLW1hbmFnZXInKSlcblx0d2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc3NsLWNlcnRpZmljYXRlLW1hbmFnZXInLCBTc2xDZXJ0aWZpY2F0ZU1hbmFnZXIpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9