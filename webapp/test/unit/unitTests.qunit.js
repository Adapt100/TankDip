/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/json/Json/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});