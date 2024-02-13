/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./utils/noir/noir.ts":
/*!****************************!*\
  !*** ./utils/noir/noir.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Noir: () => (/* binding */ Noir)\n/* harmony export */ });\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noir-lang/barretenberg */ \"@noir-lang/barretenberg\");\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_0__);\n// @ts-ignore\n\nclass Noir {\n    async createProof({ input }) {\n        const proof = await (0,_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_0__.create_proof)(this.prover, this.acir, input);\n        return proof;\n    }\n    async verifyProof({ proof }) {\n        const verification = await (0,_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_0__.verify_proof)(this.verifier, proof);\n        return verification;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ub2lyL25vaXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsYUFBYTtBQUN3RDtBQUU5RCxNQUFNRTtJQU1ULE1BQU1DLFlBQVksRUFBQ0MsS0FBSyxFQUFnQixFQUFFO1FBQ3RDLE1BQU1DLFFBQVEsTUFBTUwscUVBQVlBLENBQUMsSUFBSSxDQUFDTSxNQUFNLEVBQUUsSUFBSSxDQUFDQyxJQUFJLEVBQUVIO1FBQ3pELE9BQU9DO0lBQ1g7SUFFQSxNQUFNRyxZQUFZLEVBQUNILEtBQUssRUFBZ0IsRUFBRTtRQUN0QyxNQUFNSSxlQUFlLE1BQU1SLHFFQUFZQSxDQUFDLElBQUksQ0FBQ1MsUUFBUSxFQUFFTDtRQUN2RCxPQUFPSTtJQUNYO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxzL25vaXIvbm9pci50cz82MDUzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGNyZWF0ZV9wcm9vZiwgdmVyaWZ5X3Byb29mIH0gZnJvbSAnQG5vaXItbGFuZy9iYXJyZXRlbmJlcmcnO1xuXG5leHBvcnQgY2xhc3MgTm9pciB7XG4gICAgcHJvdmVyOiBhbnk7XG4gICAgdmVyaWZpZXI6IGFueTtcbiAgICBhY2lyOiBhbnk7XG4gICAgY29tcGlsZWQ6IGFueTtcblxuICAgIGFzeW5jIGNyZWF0ZVByb29mKHtpbnB1dH0gOiB7aW5wdXQ6IGFueX0pIHtcbiAgICAgICAgY29uc3QgcHJvb2YgPSBhd2FpdCBjcmVhdGVfcHJvb2YodGhpcy5wcm92ZXIsIHRoaXMuYWNpciwgaW5wdXQpO1xuICAgICAgICByZXR1cm4gcHJvb2Y7XG4gICAgfVxuXG4gICAgYXN5bmMgdmVyaWZ5UHJvb2Yoe3Byb29mfSA6IHtwcm9vZjogYW55fSkge1xuICAgICAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCB2ZXJpZnlfcHJvb2YodGhpcy52ZXJpZmllciwgcHJvb2YpO1xuICAgICAgICByZXR1cm4gdmVyaWZpY2F0aW9uO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVfcHJvb2YiLCJ2ZXJpZnlfcHJvb2YiLCJOb2lyIiwiY3JlYXRlUHJvb2YiLCJpbnB1dCIsInByb29mIiwicHJvdmVyIiwiYWNpciIsInZlcmlmeVByb29mIiwidmVyaWZpY2F0aW9uIiwidmVyaWZpZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/noir/noir.ts\n");

/***/ }),

/***/ "./utils/noir/noirBrowser.ts":
/*!***********************************!*\
  !*** ./utils/noir/noirBrowser.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoirBrowser: () => (/* binding */ NoirBrowser)\n/* harmony export */ });\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noir-lang/noir_wasm */ \"@noir-lang/noir_wasm\");\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noir-lang/noir-source-resolver */ \"@noir-lang/noir-source-resolver\");\n/* harmony import */ var _noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noir-lang/aztec_backend */ \"@noir-lang/aztec_backend\");\n/* harmony import */ var _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @noir-lang/barretenberg */ \"@noir-lang/barretenberg\");\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _noir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noir */ \"./utils/noir/noir.ts\");\n\n// @ts-ignore\n\n\n// @ts-ignore\n\n\nconst listCircuits = async ()=>{\n    const response = await fetch(\"./../../pages/api/listDirectory\");\n    const data = await response.json();\n    const files = data.files;\n    return files;\n};\nconst getCode = async ()=>{\n    let code = {};\n    for (const path of (await listCircuits())){\n        const fileUrl = `./../../pages/api/readCircuitFile?filename=${path.replace(\"/\", \"\")}`;\n        code[path.replace(\"/\", \"\")] = await fetch(fileUrl).then((r)=>r.text()).then((code)=>code);\n    }\n    return code;\n};\nclass NoirBrowser extends _noir__WEBPACK_IMPORTED_MODULE_4__.Noir {\n    async compile() {\n        // if running on the browser, we need to fetch the code from the server\n        // that's why we have this parameter codeURL\n        await _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0___default()();\n        const code = await getCode();\n        (0,_noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__.initialiseResolver)((id)=>{\n            console.log(id);\n            return code[id];\n        });\n        const compiled_noir = (0,_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__.compile)({\n            entry_point: \"main.nr\"\n        });\n        this.compiled = compiled_noir;\n        await _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2___default()();\n        this.acir = (0,_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__.acir_read_bytes)(this.compiled.circuit);\n        [this.prover, this.verifier] = await (0,_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__.setup_generic_prover_and_verifier)(this.acir);\n    }\n    getSmartContract() {\n        const sc = this.verifier.SmartContract();\n        return sc;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ub2lyL25vaXJCcm93c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDOUUsYUFBYTtBQUN3RDtBQUNQO0FBQzlELGFBQWE7QUFDK0Q7QUFDOUM7QUFFOUIsTUFBTU8sZUFBZTtJQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLE1BQU1DLFFBQVFGLEtBQUtFLEtBQUs7SUFDeEIsT0FBT0E7QUFDVDtBQUVBLE1BQU1DLFVBQVU7SUFDZCxJQUFJQyxPQUFrQyxDQUFDO0lBQ3ZDLEtBQUssTUFBTUMsUUFBUSxPQUFNUixjQUFhLEVBQUc7UUFDdkMsTUFBTVMsVUFBVSxDQUFDLDJDQUEyQyxFQUFFRCxLQUFLRSxPQUFPLENBQ3hFLEtBQ0EsSUFDQSxDQUFDO1FBQ0hILElBQUksQ0FBQ0MsS0FBS0UsT0FBTyxDQUFDLEtBQUssSUFBSSxHQUFHLE1BQU1SLE1BQU1PLFNBQ3ZDRSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRUMsSUFBSSxJQUNsQkYsSUFBSSxDQUFDLENBQUNKLE9BQVNBO0lBQ3BCO0lBQ0EsT0FBT0E7QUFDVDtBQUVPLE1BQU1PLG9CQUFvQmYsdUNBQUlBO0lBQ25DLE1BQU1KLFVBQVU7UUFDZCx1RUFBdUU7UUFDdkUsNENBQTRDO1FBQzVDLE1BQU1GLDJEQUFZQTtRQUNsQixNQUFNYyxPQUFPLE1BQU1EO1FBQ25CVixtRkFBa0JBLENBQUMsQ0FBQ21CO1lBQ2xCQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1osT0FBT1IsSUFBSSxDQUFDUSxHQUFHO1FBQ2pCO1FBRUEsTUFBTUcsZ0JBQWdCdkIsNkRBQU9BLENBQUM7WUFDNUJ3QixhQUFhO1FBQ2Y7UUFDQSxJQUFJLENBQUNDLFFBQVEsR0FBR0Y7UUFDaEIsTUFBTXJCLCtEQUFzQkE7UUFFNUIsSUFBSSxDQUFDd0IsSUFBSSxHQUFHM0IscUVBQWVBLENBQUMsSUFBSSxDQUFDMEIsUUFBUSxDQUFDRSxPQUFPO1FBRWpELENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUMsR0FBRyxNQUFNMUIsMEZBQWlDQSxDQUNwRSxJQUFJLENBQUN1QixJQUFJO0lBRWI7SUFFQUksbUJBQW1CO1FBQ2pCLE1BQU1DLEtBQUssSUFBSSxDQUFDRixRQUFRLENBQUNHLGFBQWE7UUFDdEMsT0FBT0Q7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi91dGlscy9ub2lyL25vaXJCcm93c2VyLnRzPzYwMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXROb2lyV2FzbSwgeyBhY2lyX3JlYWRfYnl0ZXMsIGNvbXBpbGUgfSBmcm9tIFwiQG5vaXItbGFuZy9ub2lyX3dhc21cIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGluaXRpYWxpc2VSZXNvbHZlciB9IGZyb20gXCJAbm9pci1sYW5nL25vaXItc291cmNlLXJlc29sdmVyXCI7XG5pbXBvcnQgaW5pdGlhbGlzZUF6dGVjQmFja2VuZCBmcm9tIFwiQG5vaXItbGFuZy9henRlY19iYWNrZW5kXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBzZXR1cF9nZW5lcmljX3Byb3Zlcl9hbmRfdmVyaWZpZXIgfSBmcm9tIFwiQG5vaXItbGFuZy9iYXJyZXRlbmJlcmdcIjtcbmltcG9ydCB7IE5vaXIgfSBmcm9tIFwiLi9ub2lyXCI7XG5cbmNvbnN0IGxpc3RDaXJjdWl0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi4vLi4vLi4vcGFnZXMvYXBpL2xpc3REaXJlY3RvcnlcIik7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGZpbGVzID0gZGF0YS5maWxlcztcbiAgcmV0dXJuIGZpbGVzO1xufTtcblxuY29uc3QgZ2V0Q29kZSA9IGFzeW5jICgpID0+IHtcbiAgbGV0IGNvZGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgZm9yIChjb25zdCBwYXRoIG9mIGF3YWl0IGxpc3RDaXJjdWl0cygpKSB7XG4gICAgY29uc3QgZmlsZVVybCA9IGAuLy4uLy4uL3BhZ2VzL2FwaS9yZWFkQ2lyY3VpdEZpbGU/ZmlsZW5hbWU9JHtwYXRoLnJlcGxhY2UoXG4gICAgICBcIi9cIixcbiAgICAgIFwiXCJcbiAgICApfWA7XG4gICAgY29kZVtwYXRoLnJlcGxhY2UoXCIvXCIsIFwiXCIpXSA9IGF3YWl0IGZldGNoKGZpbGVVcmwpXG4gICAgICAudGhlbigocikgPT4gci50ZXh0KCkpXG4gICAgICAudGhlbigoY29kZSkgPT4gY29kZSk7XG4gIH1cbiAgcmV0dXJuIGNvZGU7XG59O1xuXG5leHBvcnQgY2xhc3MgTm9pckJyb3dzZXIgZXh0ZW5kcyBOb2lyIHtcbiAgYXN5bmMgY29tcGlsZSgpIHtcbiAgICAvLyBpZiBydW5uaW5nIG9uIHRoZSBicm93c2VyLCB3ZSBuZWVkIHRvIGZldGNoIHRoZSBjb2RlIGZyb20gdGhlIHNlcnZlclxuICAgIC8vIHRoYXQncyB3aHkgd2UgaGF2ZSB0aGlzIHBhcmFtZXRlciBjb2RlVVJMXG4gICAgYXdhaXQgaW5pdE5vaXJXYXNtKCk7XG4gICAgY29uc3QgY29kZSA9IGF3YWl0IGdldENvZGUoKTtcbiAgICBpbml0aWFsaXNlUmVzb2x2ZXIoKGlkOiBhbnkpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgIHJldHVybiBjb2RlW2lkXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbXBpbGVkX25vaXIgPSBjb21waWxlKHtcbiAgICAgIGVudHJ5X3BvaW50OiBcIm1haW4ubnJcIixcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBpbGVkID0gY29tcGlsZWRfbm9pcjtcbiAgICBhd2FpdCBpbml0aWFsaXNlQXp0ZWNCYWNrZW5kKCk7XG5cbiAgICB0aGlzLmFjaXIgPSBhY2lyX3JlYWRfYnl0ZXModGhpcy5jb21waWxlZC5jaXJjdWl0KTtcblxuICAgIFt0aGlzLnByb3ZlciwgdGhpcy52ZXJpZmllcl0gPSBhd2FpdCBzZXR1cF9nZW5lcmljX3Byb3Zlcl9hbmRfdmVyaWZpZXIoXG4gICAgICB0aGlzLmFjaXJcbiAgICApO1xuICB9XG5cbiAgZ2V0U21hcnRDb250cmFjdCgpIHtcbiAgICBjb25zdCBzYyA9IHRoaXMudmVyaWZpZXIuU21hcnRDb250cmFjdCgpO1xuICAgIHJldHVybiBzYztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaXROb2lyV2FzbSIsImFjaXJfcmVhZF9ieXRlcyIsImNvbXBpbGUiLCJpbml0aWFsaXNlUmVzb2x2ZXIiLCJpbml0aWFsaXNlQXp0ZWNCYWNrZW5kIiwic2V0dXBfZ2VuZXJpY19wcm92ZXJfYW5kX3ZlcmlmaWVyIiwiTm9pciIsImxpc3RDaXJjdWl0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZpbGVzIiwiZ2V0Q29kZSIsImNvZGUiLCJwYXRoIiwiZmlsZVVybCIsInJlcGxhY2UiLCJ0aGVuIiwiciIsInRleHQiLCJOb2lyQnJvd3NlciIsImlkIiwiY29uc29sZSIsImxvZyIsImNvbXBpbGVkX25vaXIiLCJlbnRyeV9wb2ludCIsImNvbXBpbGVkIiwiYWNpciIsImNpcmN1aXQiLCJwcm92ZXIiLCJ2ZXJpZmllciIsImdldFNtYXJ0Q29udHJhY3QiLCJzYyIsIlNtYXJ0Q29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/noir/noirBrowser.ts\n");

/***/ }),

/***/ "./utils/prover.ts":
/*!*************************!*\
  !*** ./utils/prover.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_noir_noirBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/noir/noirBrowser */ \"./utils/noir/noirBrowser.ts\");\n// @ts-ignore\n\n// // Add an event listener for the message event\nonmessage = async (event)=>{\n    try {\n        console.log(event.data);\n        const { input } = event.data;\n        console.log(input.A);\n        function changeValues(a) {\n            const val = a[0] == \"-\" ? a.substring(1) : a;\n            return val;\n        }\n        const input_2 = {\n            c1: {\n                real: {\n                    sign: input.A[0] == \"-\",\n                    value: changeValues(input.A)\n                },\n                imag: {\n                    sign: input.B[0] == \"-\",\n                    value: changeValues(input.B)\n                }\n            },\n            c2: {\n                real: {\n                    sign: input.C[0] == \"-\",\n                    value: changeValues(input.C)\n                },\n                imag: {\n                    sign: input.D[0] == \"-\",\n                    value: changeValues(input.D)\n                }\n            },\n            out_sub: input.subAns,\n            out_mul: input.mulAns,\n            out_div: input.divAns\n        };\n        // console.log(input_2);\n        // const input_2 = Object.entries(input).reduce((newObj, [key, value]) => {\n        //   //changed format a bit\n        //   newObj[key] = (value as number).toString();\n        //   return newObj;\n        // }, {});\n        const noir = new _utils_noir_noirBrowser__WEBPACK_IMPORTED_MODULE_0__.NoirBrowser();\n        await noir.compile();\n        const proof = await noir.createProof({\n            input: input_2\n        });\n        console.log(input_2);\n        postMessage(proof);\n    } catch (err) {\n        console.log(err);\n        postMessage(err);\n    } finally{\n        close();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9wcm92ZXIudHMiLCJtYXBwaW5ncyI6Ijs7QUFBQSxhQUFhO0FBQzZDO0FBRTFELGlEQUFpRDtBQUNqREMsWUFBWSxPQUFPQztJQUNqQixJQUFJO1FBQ0ZDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsSUFBSTtRQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSixNQUFNRyxJQUFJO1FBQzVCRixRQUFRQyxHQUFHLENBQUNFLE1BQU1DLENBQUM7UUFFbkIsU0FBU0MsYUFBYUMsQ0FBUztZQUM3QixNQUFNQyxNQUFNRCxDQUFDLENBQUMsRUFBRSxJQUFJLE1BQU1BLEVBQUVFLFNBQVMsQ0FBQyxLQUFLRjtZQUMzQyxPQUFPQztRQUNUO1FBQ0EsTUFBTUUsVUFBVTtZQUNkQyxJQUFJO2dCQUNGQyxNQUFNO29CQUNKQyxNQUFNVCxNQUFNQyxDQUFDLENBQUMsRUFBRSxJQUFJO29CQUNwQlMsT0FBT1IsYUFBYUYsTUFBTUMsQ0FBQztnQkFDN0I7Z0JBQ0FVLE1BQU07b0JBQ0pGLE1BQU1ULE1BQU1ZLENBQUMsQ0FBQyxFQUFFLElBQUk7b0JBQ3BCRixPQUFPUixhQUFhRixNQUFNWSxDQUFDO2dCQUM3QjtZQUNGO1lBQ0FDLElBQUk7Z0JBQ0ZMLE1BQU07b0JBQ0pDLE1BQU1ULE1BQU1jLENBQUMsQ0FBQyxFQUFFLElBQUk7b0JBQ3BCSixPQUFPUixhQUFhRixNQUFNYyxDQUFDO2dCQUM3QjtnQkFDQUgsTUFBTTtvQkFDSkYsTUFBTVQsTUFBTWUsQ0FBQyxDQUFDLEVBQUUsSUFBSTtvQkFDcEJMLE9BQU9SLGFBQWFGLE1BQU1lLENBQUM7Z0JBQzdCO1lBQ0Y7WUFDQUMsU0FBU2hCLE1BQU1pQixNQUFNO1lBQ3JCQyxTQUFTbEIsTUFBTW1CLE1BQU07WUFDckJDLFNBQVNwQixNQUFNcUIsTUFBTTtRQUN2QjtRQUNBLHdCQUF3QjtRQUN4QiwyRUFBMkU7UUFDM0UsMkJBQTJCO1FBQzNCLGdEQUFnRDtRQUNoRCxtQkFBbUI7UUFDbkIsVUFBVTtRQUVWLE1BQU1DLE9BQU8sSUFBSTVCLGdFQUFXQTtRQUM1QixNQUFNNEIsS0FBS0MsT0FBTztRQUNsQixNQUFNQyxRQUFRLE1BQU1GLEtBQUtHLFdBQVcsQ0FBQztZQUFFekIsT0FBT007UUFBUTtRQUN0RFQsUUFBUUMsR0FBRyxDQUFDUTtRQUNab0IsWUFBWUY7SUFDZCxFQUFFLE9BQU9HLEtBQUs7UUFDWjlCLFFBQVFDLEdBQUcsQ0FBQzZCO1FBQ1pELFlBQVlDO0lBQ2QsU0FBVTtRQUNSQztJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3V0aWxzL3Byb3Zlci50cz85OGJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IE5vaXJCcm93c2VyIH0gZnJvbSBcIi4vLi4vdXRpbHMvbm9pci9ub2lyQnJvd3NlclwiO1xuXG4vLyAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBtZXNzYWdlIGV2ZW50XG5vbm1lc3NhZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhldmVudC5kYXRhKTtcbiAgICBjb25zdCB7IGlucHV0IH0gPSBldmVudC5kYXRhO1xuICAgIGNvbnNvbGUubG9nKGlucHV0LkEpO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlVmFsdWVzKGE6IHN0cmluZykge1xuICAgICAgY29uc3QgdmFsID0gYVswXSA9PSBcIi1cIiA/IGEuc3Vic3RyaW5nKDEpIDogYTtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0XzIgPSB7XG4gICAgICBjMToge1xuICAgICAgICByZWFsOiB7XG4gICAgICAgICAgc2lnbjogaW5wdXQuQVswXSA9PSBcIi1cIixcbiAgICAgICAgICB2YWx1ZTogY2hhbmdlVmFsdWVzKGlucHV0LkEpLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnOiB7XG4gICAgICAgICAgc2lnbjogaW5wdXQuQlswXSA9PSBcIi1cIixcbiAgICAgICAgICB2YWx1ZTogY2hhbmdlVmFsdWVzKGlucHV0LkIpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGMyOiB7XG4gICAgICAgIHJlYWw6IHtcbiAgICAgICAgICBzaWduOiBpbnB1dC5DWzBdID09IFwiLVwiLFxuICAgICAgICAgIHZhbHVlOiBjaGFuZ2VWYWx1ZXMoaW5wdXQuQyksXG4gICAgICAgIH0sXG4gICAgICAgIGltYWc6IHtcbiAgICAgICAgICBzaWduOiBpbnB1dC5EWzBdID09IFwiLVwiLFxuICAgICAgICAgIHZhbHVlOiBjaGFuZ2VWYWx1ZXMoaW5wdXQuRCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb3V0X3N1YjogaW5wdXQuc3ViQW5zLFxuICAgICAgb3V0X211bDogaW5wdXQubXVsQW5zLFxuICAgICAgb3V0X2RpdjogaW5wdXQuZGl2QW5zLFxuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coaW5wdXRfMik7XG4gICAgLy8gY29uc3QgaW5wdXRfMiA9IE9iamVjdC5lbnRyaWVzKGlucHV0KS5yZWR1Y2UoKG5ld09iaiwgW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgLy8gICAvL2NoYW5nZWQgZm9ybWF0IGEgYml0XG4gICAgLy8gICBuZXdPYmpba2V5XSA9ICh2YWx1ZSBhcyBudW1iZXIpLnRvU3RyaW5nKCk7XG4gICAgLy8gICByZXR1cm4gbmV3T2JqO1xuICAgIC8vIH0sIHt9KTtcblxuICAgIGNvbnN0IG5vaXIgPSBuZXcgTm9pckJyb3dzZXIoKTtcbiAgICBhd2FpdCBub2lyLmNvbXBpbGUoKTtcbiAgICBjb25zdCBwcm9vZiA9IGF3YWl0IG5vaXIuY3JlYXRlUHJvb2YoeyBpbnB1dDogaW5wdXRfMiB9KTtcbiAgICBjb25zb2xlLmxvZyhpbnB1dF8yKTtcbiAgICBwb3N0TWVzc2FnZShwcm9vZik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgcG9zdE1lc3NhZ2UoZXJyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbG9zZSgpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk5vaXJCcm93c2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImlucHV0IiwiQSIsImNoYW5nZVZhbHVlcyIsImEiLCJ2YWwiLCJzdWJzdHJpbmciLCJpbnB1dF8yIiwiYzEiLCJyZWFsIiwic2lnbiIsInZhbHVlIiwiaW1hZyIsIkIiLCJjMiIsIkMiLCJEIiwib3V0X3N1YiIsInN1YkFucyIsIm91dF9tdWwiLCJtdWxBbnMiLCJvdXRfZGl2IiwiZGl2QW5zIiwibm9pciIsImNvbXBpbGUiLCJwcm9vZiIsImNyZWF0ZVByb29mIiwicG9zdE1lc3NhZ2UiLCJlcnIiLCJjbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/prover.ts\n");

/***/ }),

/***/ "@noir-lang/aztec_backend":
/*!*******************************************!*\
  !*** external "@noir-lang/aztec_backend" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@noir-lang/aztec_backend");

/***/ }),

/***/ "@noir-lang/barretenberg":
/*!******************************************!*\
  !*** external "@noir-lang/barretenberg" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@noir-lang/barretenberg");

/***/ }),

/***/ "@noir-lang/noir-source-resolver":
/*!**************************************************!*\
  !*** external "@noir-lang/noir-source-resolver" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@noir-lang/noir-source-resolver");

/***/ }),

/***/ "@noir-lang/noir_wasm":
/*!***************************************!*\
  !*** external "@noir-lang/noir_wasm" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@noir-lang/noir_wasm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./utils/prover.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;