(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Companies.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companies/Companies.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/components/companies/Form.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'companies-view',
  components: {
    'companies-form': _Form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      pageName: this.$t('companies-view.name'),
      pageBreadCrumb: [{
        name: this.$t('home-view.name'),
        active: false,
        url: '/home'
      }, {
        name: this.$t('companies-view.name'),
        active: true,
        url: '/companies'
      }],
      inEdition: false,
      companyInEdition: {}
    };
  },
  created: function created() {
    this.init();
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    companies: 'companies'
  }),
  methods: {
    init: function init() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$store.dispatch('fetchCompanies', {
        page: page
      });
    },
    editCompany: function editCompany(id) {
      this.inEdition = true;
      this.companyInEdition = this.companies.data.find(function (company) {
        return company.id === id;
      });
    },
    deleteCompany: function deleteCompany(id) {
      var _this = this;

      axios["delete"]("/company/".concat(id)).then(function (_ref) {
        var status = _ref.status;

        if (status === 200) {
          _this.$store.dispatch('fetchCompanies', {
            page: 1
          });

          _this.$swal.fire({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            title: _this.$t('messages.success'),
            text: _this.$t('companies-view.messages.deleted'),
            type: 'success'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companies/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/dist/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'companies-form',
  props: {
    inEdition: {
      type: Boolean,
      "default": false
    },
    data: {
      type: Object
    }
  },
  data: function data() {
    return {
      form: new Form({
        id: '',
        name: '',
        email: '',
        logo: null,
        website: ''
      })
    };
  },
  watch: {
    inEdition: function inEdition(newValue, oldValue) {
      if (newValue && !oldValue) {
        if (Object.keys(this.$props.data).length > 0) {
          this.setFormData();
        }
      }
    }
  },
  methods: {
    saveCompany: function saveCompany() {
      var _ref, status;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function saveCompany$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.post('/company', {
                transformRequest: [function (data, headers) {
                  return Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
                }]
              }));

            case 2:
              _ref = _context.sent;
              status = _ref.status;

              if (status === 200) {
                this.resetForm();
                this.$store.dispatch('fetchCompanies', {
                  page: 1
                });
                this.$swal.fire({
                  toast: true,
                  position: 'bottom-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  title: this.$t('messages.success'),
                  text: this.$t('companies-view.messages.saved'),
                  type: 'success'
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    updateCompany: function updateCompany() {
      var _ref2, status, _ref3, statusLogo;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updateCompany$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.put("/company/".concat(this.form.id)));

            case 2:
              _ref2 = _context2.sent;
              status = _ref2.status;

              if (!(status === 200)) {
                _context2.next = 13;
                break;
              }

              if (!this.form.logo) {
                _context2.next = 10;
                break;
              }

              _context2.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.form.post('/company/update/logo', {
                transformRequest: [function (data, headers) {
                  return Object(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
                }]
              }));

            case 8:
              _ref3 = _context2.sent;
              statusLogo = _ref3.statusLogo;

            case 10:
              this.resetForm();
              this.$store.dispatch('fetchCompanies', {
                page: 1
              });
              this.$swal.fire({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: this.$t('messages.success'),
                text: this.$t('companies-view.messages.updated'),
                type: 'success'
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    setFormData: function setFormData() {
      var _this$$props$data = this.$props.data,
          id = _this$$props$data.id,
          name = _this$$props$data.name,
          email = _this$$props$data.email,
          website = _this$$props$data.website;
      this.form = new Form({
        id: id,
        name: name,
        email: email,
        website: website,
        logo: null
      });
    },
    selectFile: function selectFile(e) {
      var file = e.target.files[0];
      this.form.logo = file;
    },
    resetForm: function resetForm() {
      $('#modal-companies-form').modal('hide');
      this.form.clear();
      this.form.reset();
      this.form = new Form({
        id: '',
        name: '',
        email: '',
        logo: null,
        website: ''
      });
      this.$emit('onClearModal');
    }
  }
});

/***/ }),

/***/ "./node_modules/object-to-formdata/dist/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/object-to-formdata/dist/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var e=function(n){return void 0===n},t=function(n){return Array.isArray(n)},o=function(n){return n&&"number"==typeof n.size&&"string"==typeof n.type&&"function"==typeof n.slice};function i(r,f,u,s){if((f=f||{}).indices=!e(f.indices)&&f.indices,f.nullsAsUndefineds=!e(f.nullsAsUndefineds)&&f.nullsAsUndefineds,u=u||new FormData,e(r))return u;if(null===r)f.nullsAsUndefineds||u.append(s,"");else if(t(r))if(r.length)r.forEach(function(n,e){var t=s+"["+(f.indices?e:"")+"]";i(n,f,u,t)});else{var l=s+"[]";u.append(l,"")}else!function(n){return n instanceof Date}(r)?!function(n){return n===Object(n)}(r)||function(e){return o(e)&&"string"==typeof e.name&&("object"===n(e.lastModifiedDate)||"number"==typeof e.lastModified)}(r)||o(r)?u.append(s,r):Object.keys(r).forEach(function(n){var e=r[n];if(t(e))for(;n.length>2&&n.lastIndexOf("[]")===n.length-2;)n=n.substring(0,n.length-2);i(e,f,u,s?s+"["+n+"]":n)}):u.append(s,r.toISOString());return u}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page-header", {
        attrs: { pageName: _vm.pageName, pageBreadCrumb: _vm.pageBreadCrumb }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-title" }, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-12 col-md-6" }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-12 col-md-6 text-right" },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-md mt-3 mr-4",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": "#modal-companies-form"
                            },
                            on: {
                              click: function($event) {
                                _vm.companyInEdition = {}
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-plus" }),
                            _vm._v(
                              "\n                                        " +
                                _vm._s(_vm.$t("companies-view.btn-new")) +
                                "\n                                    "
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "table",
                    {
                      staticClass:
                        "table table-bordered table-hover table-condensed"
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("companies-view.company-fields.name")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("companies-view.company-fields.email")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("companies-view.company-fields.logo")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("companies-view.company-fields.website")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-center" }, [
                            _vm._v(
                              _vm._s(
                                _vm.$t("companies-view.company-fields.actions")
                              )
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.companies.data, function(company, c) {
                          return _c("tr", { key: c }, [
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(company.name))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(company.email))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(company.logo))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _vm._v(_vm._s(company.website))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-center" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-primary btn-xs",
                                  attrs: {
                                    type: "button",
                                    "data-toggle": "modal",
                                    "data-target": "#modal-companies-form"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editCompany(company.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-danger btn-xs",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteCompany(company.id)
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-trash" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-footer" },
                  [
                    _c("pagination", {
                      attrs: { data: _vm.companies },
                      on: { "pagination-change-page": _vm.init }
                    })
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "modal fade", attrs: { id: "modal-companies-form" } },
        [
          _c(
            "div",
            { staticClass: "modal-dialog" },
            [
              _c("companies-form", {
                attrs: { inEdition: _vm.inEdition, data: _vm.companyInEdition },
                on: {
                  onClearModal: function($event) {
                    _vm.inEdition = false
                  }
                }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal-content" }, [
    _c("div", { staticClass: "modal-header" }, [
      !_vm.inEdition
        ? _c("h4", { staticClass: "modal-title" }, [
            _vm._v(_vm._s(_vm.$t("companies-view.new-company")))
          ])
        : _c("h4", { staticClass: "modal-title" }, [
            _vm._v(_vm._s(_vm.$t("companies-view.update-company")))
          ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { type: "button", "aria-label": "Close" },
          on: { click: _vm.resetForm }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal-body" }, [
      _c("form", [
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", { attrs: { for: "companyName" } }, [
              _vm._v(_vm._s(_vm.$t("companies-view.company-fields.name")))
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.name,
                  expression: "form.name"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("name") },
              attrs: {
                type: "text",
                id: "companyName",
                placeholder: _vm.$t("companies-view.company-fields.name")
              },
              domProps: { value: _vm.form.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "name", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "name" } })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", { attrs: { for: "companyEmail" } }, [
              _vm._v(_vm._s(_vm.$t("companies-view.company-fields.email")))
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.email,
                  expression: "form.email"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("email") },
              attrs: {
                type: "email",
                id: "companyEmail",
                placeholder: _vm.$t("companies-view.company-fields.email")
              },
              domProps: { value: _vm.form.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "email", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "email" } })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", { attrs: { for: "companyLogo" } }, [
              _vm._v(_vm._s(_vm.$t("companies-view.company-fields.logo")))
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("logo") },
              attrs: {
                type: "file",
                id: "companyLogo",
                placeholder: _vm.$t("companies-view.company-fields.logo")
              },
              on: { change: _vm.selectFile }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "logo" } })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "form-group" },
          [
            _c("label", { attrs: { for: "companyWebsite" } }, [
              _vm._v(_vm._s(_vm.$t("companies-view.company-fields.website")))
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.form.website,
                  expression: "form.website"
                }
              ],
              staticClass: "form-control",
              class: { "is-invalid": _vm.form.errors.has("website") },
              attrs: {
                type: "text",
                id: "companyWebsite",
                placeholder: _vm.$t("companies-view.company-fields.website")
              },
              domProps: { value: _vm.form.website },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.form, "website", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c("has-error", { attrs: { form: _vm.form, field: "website" } })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal-footer justify-content-between" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-default",
          attrs: { type: "button" },
          on: { click: _vm.resetForm }
        },
        [_vm._v(_vm._s(_vm.$t("commons.close")))]
      ),
      _vm._v(" "),
      !_vm.inEdition
        ? _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: { click: _vm.saveCompany }
            },
            [_vm._v(_vm._s(_vm.$t("commons.save")))]
          )
        : _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: { click: _vm.updateCompany }
            },
            [_vm._v(_vm._s(_vm.$t("commons.update")))]
          )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/companies/Companies.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/companies/Companies.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Companies.vue?vue&type=template&id=3d8b85e8&scoped=true& */ "./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true&");
/* harmony import */ var _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Companies.vue?vue&type=script&lang=js& */ "./resources/js/components/companies/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3d8b85e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companies/Companies.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companies/Companies.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/companies/Companies.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Companies.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Companies.vue?vue&type=template&id=3d8b85e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Companies.vue?vue&type=template&id=3d8b85e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Companies_vue_vue_type_template_id_3d8b85e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/companies/Form.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/companies/Form.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=1f1a83a3&scoped=true& */ "./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/components/companies/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f1a83a3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/companies/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/companies/Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/companies/Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=1f1a83a3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/companies/Form.vue?vue&type=template&id=1f1a83a3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_1f1a83a3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);