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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NoirBrowser: () => (/* binding */ NoirBrowser)\n/* harmony export */ });\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @noir-lang/noir_wasm */ \"@noir-lang/noir_wasm\");\n/* harmony import */ var _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @noir-lang/noir-source-resolver */ \"@noir-lang/noir-source-resolver\");\n/* harmony import */ var _noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @noir-lang/aztec_backend */ \"@noir-lang/aztec_backend\");\n/* harmony import */ var _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @noir-lang/barretenberg */ \"@noir-lang/barretenberg\");\n/* harmony import */ var _noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _noir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./noir */ \"./utils/noir/noir.ts\");\n\n// @ts-ignore\n\n\n// @ts-ignore\n\n\nconst listCircuits = async ()=>{\n    const response = await fetch(\"http://localhost:3000/api/listDirectory\");\n    const data = await response.json();\n    //console.log(data);\n    const files = data.files;\n    return files;\n};\nconst getCode = async ()=>{\n    let code = {};\n    for (const path of (await listCircuits())){\n        const fileUrl = `../../../api/readCircuitFile?filename=${path.replace(\"/\", \"\")}`;\n        code[path.replace(\"/\", \"\")] = await fetch(fileUrl).then((r)=>r.text()).then((code)=>code);\n    }\n    console.log(code);\n    //console.log(\"printed\");\n    return code;\n};\nclass NoirBrowser extends _noir__WEBPACK_IMPORTED_MODULE_4__.Noir {\n    async compile() {\n        // if running on the browser, we need to fetch the code from the server\n        // that's why we have this parameter codeURL\n        await _noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0___default()();\n        const code = await getCode();\n        //console.log(code);\n        await (0,_noir_lang_noir_source_resolver__WEBPACK_IMPORTED_MODULE_1__.initialiseResolver)((id)=>{\n            console.log(id);\n            //console.log(code[id]);\n            return code[id];\n        });\n        const compiled_noir = (0,_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__.compile)({\n            entry_point: \"main.nr\"\n        });\n        this.compiled = compiled_noir;\n        await _noir_lang_aztec_backend__WEBPACK_IMPORTED_MODULE_2___default()();\n        this.acir = (0,_noir_lang_noir_wasm__WEBPACK_IMPORTED_MODULE_0__.acir_read_bytes)(this.compiled.circuit);\n        [this.prover, this.verifier] = await (0,_noir_lang_barretenberg__WEBPACK_IMPORTED_MODULE_3__.setup_generic_prover_and_verifier)(this.acir);\n    }\n    getSmartContract() {\n        const sc = this.verifier.SmartContract();\n        return sc;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ub2lyL25vaXJCcm93c2VyLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEU7QUFDOUUsYUFBYTtBQUN3RDtBQUNQO0FBQzlELGFBQWE7QUFDK0Q7QUFDOUM7QUFFOUIsTUFBTU8sZUFBZTtJQUNuQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07SUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO0lBQ2hDLG9CQUFvQjtJQUNwQixNQUFNQyxRQUFRRixLQUFLRSxLQUFLO0lBQ3hCLE9BQU9BO0FBQ1Q7QUFFQSxNQUFNQyxVQUFVO0lBQ2QsSUFBSUMsT0FBa0MsQ0FBQztJQUN2QyxLQUFLLE1BQU1DLFFBQVEsT0FBTVIsY0FBYSxFQUFHO1FBQ3ZDLE1BQU1TLFVBQVUsQ0FBQyxzQ0FBc0MsRUFBRUQsS0FBS0UsT0FBTyxDQUNuRSxLQUNBLElBQ0EsQ0FBQztRQUNISCxJQUFJLENBQUNDLEtBQUtFLE9BQU8sQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNUixNQUFNTyxTQUN2Q0UsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLElBQUksSUFDbEJGLElBQUksQ0FBQyxDQUFDSixPQUFTQTtJQUNwQjtJQUNBTyxRQUFRQyxHQUFHLENBQUNSO0lBQ1oseUJBQXlCO0lBQ3pCLE9BQU9BO0FBQ1Q7QUFFTyxNQUFNUyxvQkFBb0JqQix1Q0FBSUE7SUFDbkMsTUFBTUosVUFBVTtRQUNkLHVFQUF1RTtRQUN2RSw0Q0FBNEM7UUFDNUMsTUFBTUYsMkRBQVlBO1FBQ2xCLE1BQU1jLE9BQU8sTUFBTUQ7UUFDbkIsb0JBQW9CO1FBQ3BCLE1BQU1WLG1GQUFrQkEsQ0FBQyxDQUFDcUI7WUFDeEJILFFBQVFDLEdBQUcsQ0FBQ0U7WUFDWix3QkFBd0I7WUFDeEIsT0FBT1YsSUFBSSxDQUFDVSxHQUFHO1FBQ2pCO1FBRUEsTUFBTUMsZ0JBQWdCdkIsNkRBQU9BLENBQUM7WUFDNUJ3QixhQUFhO1FBQ2Y7UUFDQSxJQUFJLENBQUNDLFFBQVEsR0FBR0Y7UUFDaEIsTUFBTXJCLCtEQUFzQkE7UUFFNUIsSUFBSSxDQUFDd0IsSUFBSSxHQUFHM0IscUVBQWVBLENBQUMsSUFBSSxDQUFDMEIsUUFBUSxDQUFDRSxPQUFPO1FBRWpELENBQUMsSUFBSSxDQUFDQyxNQUFNLEVBQUUsSUFBSSxDQUFDQyxRQUFRLENBQUMsR0FBRyxNQUFNMUIsMEZBQWlDQSxDQUNwRSxJQUFJLENBQUN1QixJQUFJO0lBRWI7SUFFQUksbUJBQW1CO1FBQ2pCLE1BQU1DLEtBQUssSUFBSSxDQUFDRixRQUFRLENBQUNHLGFBQWE7UUFDdEMsT0FBT0Q7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi91dGlscy9ub2lyL25vaXJCcm93c2VyLnRzPzYwMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGluaXROb2lyV2FzbSwgeyBhY2lyX3JlYWRfYnl0ZXMsIGNvbXBpbGUgfSBmcm9tIFwiQG5vaXItbGFuZy9ub2lyX3dhc21cIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCB7IGluaXRpYWxpc2VSZXNvbHZlciB9IGZyb20gXCJAbm9pci1sYW5nL25vaXItc291cmNlLXJlc29sdmVyXCI7XG5pbXBvcnQgaW5pdGlhbGlzZUF6dGVjQmFja2VuZCBmcm9tIFwiQG5vaXItbGFuZy9henRlY19iYWNrZW5kXCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBzZXR1cF9nZW5lcmljX3Byb3Zlcl9hbmRfdmVyaWZpZXIgfSBmcm9tIFwiQG5vaXItbGFuZy9iYXJyZXRlbmJlcmdcIjtcbmltcG9ydCB7IE5vaXIgfSBmcm9tIFwiLi9ub2lyXCI7XG5cbmNvbnN0IGxpc3RDaXJjdWl0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbGlzdERpcmVjdG9yeVwiKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgZmlsZXMgPSBkYXRhLmZpbGVzO1xuICByZXR1cm4gZmlsZXM7XG59O1xuXG5jb25zdCBnZXRDb2RlID0gYXN5bmMgKCkgPT4ge1xuICBsZXQgY29kZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBmb3IgKGNvbnN0IHBhdGggb2YgYXdhaXQgbGlzdENpcmN1aXRzKCkpIHtcbiAgICBjb25zdCBmaWxlVXJsID0gYC4uLy4uLy4uL2FwaS9yZWFkQ2lyY3VpdEZpbGU/ZmlsZW5hbWU9JHtwYXRoLnJlcGxhY2UoXG4gICAgICBcIi9cIixcbiAgICAgIFwiXCJcbiAgICApfWA7XG4gICAgY29kZVtwYXRoLnJlcGxhY2UoXCIvXCIsIFwiXCIpXSA9IGF3YWl0IGZldGNoKGZpbGVVcmwpXG4gICAgICAudGhlbigocikgPT4gci50ZXh0KCkpXG4gICAgICAudGhlbigoY29kZSkgPT4gY29kZSk7XG4gIH1cbiAgY29uc29sZS5sb2coY29kZSk7XG4gIC8vY29uc29sZS5sb2coXCJwcmludGVkXCIpO1xuICByZXR1cm4gY29kZTtcbn07XG5cbmV4cG9ydCBjbGFzcyBOb2lyQnJvd3NlciBleHRlbmRzIE5vaXIge1xuICBhc3luYyBjb21waWxlKCkge1xuICAgIC8vIGlmIHJ1bm5pbmcgb24gdGhlIGJyb3dzZXIsIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGNvZGUgZnJvbSB0aGUgc2VydmVyXG4gICAgLy8gdGhhdCdzIHdoeSB3ZSBoYXZlIHRoaXMgcGFyYW1ldGVyIGNvZGVVUkxcbiAgICBhd2FpdCBpbml0Tm9pcldhc20oKTtcbiAgICBjb25zdCBjb2RlID0gYXdhaXQgZ2V0Q29kZSgpO1xuICAgIC8vY29uc29sZS5sb2coY29kZSk7XG4gICAgYXdhaXQgaW5pdGlhbGlzZVJlc29sdmVyKChpZDogYW55KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhpZCk7XG4gICAgICAvL2NvbnNvbGUubG9nKGNvZGVbaWRdKTtcbiAgICAgIHJldHVybiBjb2RlW2lkXTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbXBpbGVkX25vaXIgPSBjb21waWxlKHtcbiAgICAgIGVudHJ5X3BvaW50OiBcIm1haW4ubnJcIixcbiAgICB9KTtcbiAgICB0aGlzLmNvbXBpbGVkID0gY29tcGlsZWRfbm9pcjtcbiAgICBhd2FpdCBpbml0aWFsaXNlQXp0ZWNCYWNrZW5kKCk7XG5cbiAgICB0aGlzLmFjaXIgPSBhY2lyX3JlYWRfYnl0ZXModGhpcy5jb21waWxlZC5jaXJjdWl0KTtcblxuICAgIFt0aGlzLnByb3ZlciwgdGhpcy52ZXJpZmllcl0gPSBhd2FpdCBzZXR1cF9nZW5lcmljX3Byb3Zlcl9hbmRfdmVyaWZpZXIoXG4gICAgICB0aGlzLmFjaXJcbiAgICApO1xuICB9XG5cbiAgZ2V0U21hcnRDb250cmFjdCgpIHtcbiAgICBjb25zdCBzYyA9IHRoaXMudmVyaWZpZXIuU21hcnRDb250cmFjdCgpO1xuICAgIHJldHVybiBzYztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImluaXROb2lyV2FzbSIsImFjaXJfcmVhZF9ieXRlcyIsImNvbXBpbGUiLCJpbml0aWFsaXNlUmVzb2x2ZXIiLCJpbml0aWFsaXNlQXp0ZWNCYWNrZW5kIiwic2V0dXBfZ2VuZXJpY19wcm92ZXJfYW5kX3ZlcmlmaWVyIiwiTm9pciIsImxpc3RDaXJjdWl0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImZpbGVzIiwiZ2V0Q29kZSIsImNvZGUiLCJwYXRoIiwiZmlsZVVybCIsInJlcGxhY2UiLCJ0aGVuIiwiciIsInRleHQiLCJjb25zb2xlIiwibG9nIiwiTm9pckJyb3dzZXIiLCJpZCIsImNvbXBpbGVkX25vaXIiLCJlbnRyeV9wb2ludCIsImNvbXBpbGVkIiwiYWNpciIsImNpcmN1aXQiLCJwcm92ZXIiLCJ2ZXJpZmllciIsImdldFNtYXJ0Q29udHJhY3QiLCJzYyIsIlNtYXJ0Q29udHJhY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/noir/noirBrowser.ts\n");

/***/ }),

/***/ "./utils/verifier.ts":
/*!***************************!*\
  !*** ./utils/verifier.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_noir_noirBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../utils/noir/noirBrowser */ \"./utils/noir/noirBrowser.ts\");\n// @ts-ignore\n\n// // Add an event listener for the message event\nonmessage = async (event)=>{\n    try {\n        const { proof } = event.data;\n        const noir = new _utils_noir_noirBrowser__WEBPACK_IMPORTED_MODULE_0__.NoirBrowser();\n        await noir.compile();\n        const verification = await noir.verifyProof({\n            proof\n        });\n        postMessage(verification);\n    } catch (er) {\n        postMessage(er);\n    } finally{\n        close();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy92ZXJpZmllci50cyIsIm1hcHBpbmdzIjoiOztBQUFBLGFBQWE7QUFDNkM7QUFFMUQsaURBQWlEO0FBQ2pEQyxZQUFZLE9BQU9DO0lBQ2pCLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRCxNQUFNRSxJQUFJO1FBRTVCLE1BQU1DLE9BQU8sSUFBSUwsZ0VBQVdBO1FBQzVCLE1BQU1LLEtBQUtDLE9BQU87UUFDbEIsTUFBTUMsZUFBZSxNQUFNRixLQUFLRyxXQUFXLENBQUM7WUFBRUw7UUFBTTtRQUVwRE0sWUFBWUY7SUFDZCxFQUFFLE9BQU9HLElBQUk7UUFDWEQsWUFBWUM7SUFDZCxTQUFVO1FBQ1JDO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vdXRpbHMvdmVyaWZpZXIudHM/ZGEyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBOb2lyQnJvd3NlciB9IGZyb20gXCIuLy4uL3V0aWxzL25vaXIvbm9pckJyb3dzZXJcIjtcblxuLy8gLy8gQWRkIGFuIGV2ZW50IGxpc3RlbmVyIGZvciB0aGUgbWVzc2FnZSBldmVudFxub25tZXNzYWdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBwcm9vZiB9ID0gZXZlbnQuZGF0YTtcblxuICAgIGNvbnN0IG5vaXIgPSBuZXcgTm9pckJyb3dzZXIoKTtcbiAgICBhd2FpdCBub2lyLmNvbXBpbGUoKTtcbiAgICBjb25zdCB2ZXJpZmljYXRpb24gPSBhd2FpdCBub2lyLnZlcmlmeVByb29mKHsgcHJvb2YgfSk7XG5cbiAgICBwb3N0TWVzc2FnZSh2ZXJpZmljYXRpb24pO1xuICB9IGNhdGNoIChlcikge1xuICAgIHBvc3RNZXNzYWdlKGVyKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjbG9zZSgpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk5vaXJCcm93c2VyIiwib25tZXNzYWdlIiwiZXZlbnQiLCJwcm9vZiIsImRhdGEiLCJub2lyIiwiY29tcGlsZSIsInZlcmlmaWNhdGlvbiIsInZlcmlmeVByb29mIiwicG9zdE1lc3NhZ2UiLCJlciIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/verifier.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./utils/verifier.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;