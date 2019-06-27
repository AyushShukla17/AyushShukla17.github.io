(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: 'dashboard' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout></app-layout>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'classroom';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph/graph.component */ "./src/app/graph/graph.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
                _graph_graph_component__WEBPACK_IMPORTED_MODULE_6__["GraphComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/utility/data.service.ts":
/*!***************************************************!*\
  !*** ./src/app/dashboard/utility/data.service.ts ***!
  \***************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.allFailStudents$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.allPassStudents$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.allStudentsData$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/graph/graph.component.css":
/*!*******************************************!*\
  !*** ./src/app/graph/graph.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyYXBoL2dyYXBoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/graph/graph.component.html":
/*!********************************************!*\
  !*** ./src/app/graph/graph.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"graphContainer\" style=\"height:180px; margin: 0\"></div>"

/***/ }),

/***/ "./src/app/graph/graph.component.ts":
/*!******************************************!*\
  !*** ./src/app/graph/graph.component.ts ***!
  \******************************************/
/*! exports provided: GraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphComponent", function() { return GraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashboard_utility_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/utility/data.service */ "./src/app/dashboard/utility/data.service.ts");




var GraphComponent = /** @class */ (function () {
    function GraphComponent(dataService) {
        this.dataService = dataService;
        this.allStudentData = [];
        this.options = {
            chart: {
                backgroundColor: '#375A69',
                type: 'areaspline'
            },
            title: {
                text: ''
            },
            xAxis: {
                labels: {
                    style: {
                        color: '#C0D9E4'
                    }
                },
                categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                ]
            },
            yAxis: {
                max: 100,
                min: 0,
                title: {
                    text: ''
                },
                labels: {
                    style: {
                        color: '#C0D9E4'
                    }
                },
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                areaspline: {
                    // fillOpacity: 0.3,
                    lineWidth: 1,
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        fillOpacity: 0.3,
                        stops: [
                            [0, '#FAD961'],
                            [1, 'rgba(247,107,28,0) ']
                        ]
                    }
                },
            },
            series: [{
                    color: '#f88f39',
                    name: 'Attendence (%)',
                    showInLegend: false,
                    data: [3, 4, 3, 5, 4]
                }]
        };
    }
    GraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.allStudentsData$.subscribe(function (data) {
            _this.allStudentData = data;
            if (_this.allStudentData.length) {
                _this.formatAttendanceData();
                _this.options.xAxis.categories = Object.keys(_this.allStudentData[0].attendance);
            }
        });
    };
    GraphComponent.prototype.formatAttendanceData = function () {
        var _this = this;
        var length = Object.keys(this.allStudentData[0].attendance).length;
        var sum = new Array(length).fill(0);
        this.allStudentData.map(function (student) {
            var i = 0;
            for (var month in student.attendance) {
                if (student.attendance.hasOwnProperty(month)) {
                    sum[i] = sum[i] + Number(student.attendance[month].replace("%", ""));
                    i++;
                }
            }
        });
        sum = sum.map(function (v) { return Number((v / _this.allStudentData.length).toFixed(2)); });
        this.options.series[0].data = sum;
        highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"]('graphContainer', this.options);
    };
    GraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-graph',
            template: __webpack_require__(/*! ./graph.component.html */ "./src/app/graph/graph.component.html"),
            styles: [__webpack_require__(/*! ./graph.component.css */ "./src/app/graph/graph.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dashboard_utility_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], GraphComponent);
    return GraphComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\n    background: #253C45;\n    padding: 14px;\n    height: 80px;\n    position: fixed;\n    top:0;\n    left:0;\n    right:0;\n    z-index: 999;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n}\n\n.class-details{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    color: #fff;\n    position: absolute;\n    top: 20px;\n    left:20px;\n    right:20px;\n    bottom:20px;\n    z-index: -1;\n}\n\n.class-details a{\n    color: #89DEFF;\n   font-family: 'Montserrat-SemiBold';\n    margin: 0 10px;\n\n}\n\n.settings, .dropdown{\n    margin:0 10px;\n}\n\n.dropdown{\n    position: relative;\n}\n\n.settings{\n    padding:10px;\n    border-radius: 4px;\n    background: #768e98;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 32px;\n    height: 32px;\n}\n\n.dropdown-list{\n    display: none;\n    position: absolute;\n    top:50px;\n    right:0;\n    background: #768e98;;\n    width:180px\n}\n\n.dropdown-list li a{\n    padding: 10px 20px;\n    border-bottom: 1px solid #f9f9f9;\n    color: #ffffff;\n}\n\n.dropdown-list li:last-child a{\n    border:none\n}\n\n.dropdown.open .dropdown-list{\n    display: block;\n}\n\n.user-name{\n    width:32px;\n    height:32px;\n    background: #f3f6f9;\n    border-radius: 50%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n.side-bar{\n    position: fixed;\n    top:80px;\n    left:0;\n    bottom:0;\n    background: -webkit-gradient(linear, left top, left bottom, from(#2E4E5C), to(#142329));\n    background: linear-gradient(180deg, #2E4E5C 0%, #142329 100%);\n    z-index: 99;\n}\n\n.menu-list li a{\n    padding: 20px;\n}\n\n.menu-list li i:before{\n   font-size: 20px;\n   color: #AEC7CB;\n}\n\n.menu-list li.active{\n    background: #375a69;\n}\n\n.menu-list li.active i:before{\n    color: #ffffff\n}\n\n.metrics-section{\n    position: fixed;\n    top:80px;\n    right:0;\n    bottom:0;\n    width: 320px;\n    background: -webkit-gradient(linear, left top, left bottom, from(#2e4d5b), to(#1e333c));\n    background: linear-gradient(to bottom, #2e4d5b, #1e333c);\n    z-index: 99;\n    padding: 16px\n}\n\n.metrics-header{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.metrics-header h5{\n    color: #ffffff;\n}\n\n.metrics-header a{\n    color: #89DEFF;\n    font-size: 12px;\n   font-family: 'Montserrat-SemiBold';\n    margin: 0 10px;\n}\n\n.metrics-body{\n    margin: 20px 0;\n    padding: 16px;\n    background: #375A69;\n    border-radius: 3px; \n}\n\n.metrics-body p{\n   color: #C0D9E4;\n   font-family: 'Montserrat-SemiBold';\n   padding: 0 0 20px;\n}\n\n.metrics-body p i{\n    margin: 0 0 0 10px;\n}\n\nfooter{\n    background: #375a69;\n    padding: 10px 20px;\n    color: #ffffff;\n    font-size: 10px;\n    position: absolute;\n    left:60px;\n    bottom:0;\n    right: 0;\n    z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHFCQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUNBO0lBQ0ksY0FBYztHQUNmLGtDQUFrQztJQUNqQyxjQUFjOztBQUVsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsdUZBQTZEO0lBQTdELDZEQUE2RDtJQUM3RCxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0dBQ0csZUFBZTtHQUNmLGNBQWM7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWix1RkFBd0Q7SUFBeEQsd0RBQXdEO0lBQ3hELFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtHQUNoQixrQ0FBa0M7SUFDakMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtHQUNHLGNBQWM7R0FDZCxrQ0FBa0M7R0FDbEMsaUJBQWlCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFFBQVE7SUFDUixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGJhY2tncm91bmQ6ICMyNTNDNDU7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICByaWdodDowO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNsYXNzLWRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDoyMHB4O1xuICAgIHJpZ2h0OjIwcHg7XG4gICAgYm90dG9tOjIwcHg7XG4gICAgei1pbmRleDogLTE7XG59XG4uY2xhc3MtZGV0YWlscyBhe1xuICAgIGNvbG9yOiAjODlERUZGO1xuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcbiAgICBtYXJnaW46IDAgMTBweDtcblxufVxuXG4uc2V0dGluZ3MsIC5kcm9wZG93bntcbiAgICBtYXJnaW46MCAxMHB4O1xufVxuLmRyb3Bkb3due1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNldHRpbmdze1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZDogIzc2OGU5ODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uZHJvcGRvd24tbGlzdHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NTBweDtcbiAgICByaWdodDowO1xuICAgIGJhY2tncm91bmQ6ICM3NjhlOTg7O1xuICAgIHdpZHRoOjE4MHB4XG59XG5cbi5kcm9wZG93bi1saXN0IGxpIGF7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjlmOWY5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZHJvcGRvd24tbGlzdCBsaTpsYXN0LWNoaWxkIGF7XG4gICAgYm9yZGVyOm5vbmVcbn1cblxuLmRyb3Bkb3duLm9wZW4gLmRyb3Bkb3duLWxpc3R7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51c2VyLW5hbWV7XG4gICAgd2lkdGg6MzJweDtcbiAgICBoZWlnaHQ6MzJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmNmY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlLWJhcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjgwcHg7XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTowO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyRTRFNUMgMCUsICMxNDIzMjkgMTAwJSk7XG4gICAgei1pbmRleDogOTk7XG59XG4ubWVudS1saXN0IGxpIGF7XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLm1lbnUtbGlzdCBsaSBpOmJlZm9yZXtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIGNvbG9yOiAjQUVDN0NCO1xufVxuXG4ubWVudS1saXN0IGxpLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kOiAjMzc1YTY5O1xufVxuXG4ubWVudS1saXN0IGxpLmFjdGl2ZSBpOmJlZm9yZXtcbiAgICBjb2xvcjogI2ZmZmZmZlxufVxuXG4ubWV0cmljcy1zZWN0aW9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6ODBweDtcbiAgICByaWdodDowO1xuICAgIGJvdHRvbTowO1xuICAgIHdpZHRoOiAzMjBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMmU0ZDViLCAjMWUzMzNjKTtcbiAgICB6LWluZGV4OiA5OTtcbiAgICBwYWRkaW5nOiAxNnB4XG59XG5cbi5tZXRyaWNzLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZXRyaWNzLWhlYWRlciBoNXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5tZXRyaWNzLWhlYWRlciBhe1xuICAgIGNvbG9yOiAjODlERUZGO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCc7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5tZXRyaWNzLWJvZHl7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzc1QTY5O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXG59XG5cbi5tZXRyaWNzLWJvZHkgcHtcbiAgIGNvbG9yOiAjQzBEOUU0O1xuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJztcbiAgIHBhZGRpbmc6IDAgMCAyMHB4O1xufVxuXG4ubWV0cmljcy1ib2R5IHAgaXtcbiAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG59XG5cbmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kOiAjMzc1YTY5O1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6NjBweDtcbiAgICBib3R0b206MDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"class-details\">\n      <p> Class - 4 </p>\n      <a href=\"javascript:void(0)\">Change</a>\n  </div>\n  <div class=\"profile-section flex align-items-center justify-content-between\">\n  <div class=\"settings\"><a href=\"jaascript:void(0);\"><i class=\"cr-settings\"></i> </a></div>\n  <div>\n      <div class=\"dropdown\">\n          <div class=\"user-name \">IA</div>\n          <ul class=\"dropdown-list\">\n              <li>\n                  <a href=\"javascript:void(0);\">Profile</a>\n              </li>\n              <li>\n                  <a href=\"javascript:void(0);\">Logout</a>\n              </li>\n          </ul>\n      </div>\n  </div>\n  </div>\n</header>\n<div class=\"side-bar\">\n  <ul class=\"menu-list\">\n      <li>\n          <a href=\"javascript:void(0);\"><i class=\"cr-menu\"></i></a>\n      </li>\n      <li class=\"active\">\n          <a href=\"javascript:void(0);\"><i class=\"cr-dashboard\"></i></a>\n      </li>\n      <li>\n          <a href=\"javascript:void(0);\"><i class=\"cr-storage\"></i></a>\n      </li>\n      <li>\n          <a href=\"javascript:void(0);\"><i class=\"cr-recover\"></i></a>\n      </li>\n      <li>\n          <a href=\"javascript:void(0);\"><i class=\"cr-server\"></i></a>\n      </li>\n  </ul>\n</div>\n<div class=\"metrics-section\">\n  <div class=\"metrics-header\">\n      <h5>Metrics</h5>\n      <a href=\"javascript:void(0);\">View all</a>\n  </div>\n  <div class=\"metrics-body\">\n      <p class=\"flex align-items-center\">Attendance (%) <i class=\"cr-help\"></i></p>\n    <app-graph></app-graph>\n  </div>\n</div>\n<router-outlet></router-outlet>\n<footer>\n  <p>Copyright &copy; 2019 UX Reactor. All rights reserved. </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ayush/Desktop/classroom/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map