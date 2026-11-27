let wasm_bindgen = (function(exports) {
    let script_src;
    if (typeof document !== 'undefined' && document.currentScript !== null) {
        script_src = new URL(document.currentScript.src, location.href).toString();
    }
    function __wbg_get_imports() {
        const import0 = {
            __proto__: null,
            __wbg___wbindgen_debug_string_f249a2a76caa9a55: function(arg0, arg1) {
                const ret = debugString(arg1);
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_is_function_741ff2bb612836f5: function(arg0) {
                const ret = typeof(arg0) === 'function';
                return ret;
            },
            __wbg___wbindgen_is_undefined_be5b34249ff1fc15: function(arg0) {
                const ret = arg0 === undefined;
                return ret;
            },
            __wbg___wbindgen_string_get_7ce8eee7fd327545: function(arg0, arg1) {
                const obj = arg1;
                const ret = typeof(obj) === 'string' ? obj : undefined;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg___wbindgen_throw_4c88d8bf264fd984: function(arg0, arg1) {
                throw new Error(getStringFromWasm0(arg0, arg1));
            },
            __wbg__wbg_cb_unref_09736879a3f67559: function(arg0) {
                arg0._wbg_cb_unref();
            },
            __wbg_clearTimeout_d859c3fbfd863ce7: function(arg0, arg1) {
                arg0.clearTimeout(arg1);
            },
            __wbg_close_ba88eb9a9b3180c7: function(arg0) {
                arg0.close();
            },
            __wbg_data_c7e5e8500f1bca2f: function(arg0) {
                const ret = arg0.data;
                return ret;
            },
            __wbg_fetch_8991a6a8ea67c83b: function(arg0, arg1, arg2, arg3) {
                const ret = arg0.fetch(getStringFromWasm0(arg1, arg2), arg3);
                return ret;
            },
            __wbg_from_eac91875c8a5ffa4: function(arg0) {
                const ret = Array.from(arg0);
                return ret;
            },
            __wbg_get_2080c49015e35254: function() { return handleError(function (arg0, arg1) {
                const ret = Reflect.get(arg0, arg1);
                return ret;
            }, arguments); },
            __wbg_get_d7176cfb76d71114: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_get_unchecked_e6325ad374eff861: function(arg0, arg1) {
                const ret = arg0[arg1 >>> 0];
                return ret;
            },
            __wbg_instanceof_Element_05dbb22ded594343: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Element;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_Error_74e3cca0c4a69161: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof Error;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_instanceof_MessagePort_2e0774936edf0cc5: function(arg0) {
                let result;
                try {
                    result = arg0 instanceof MessagePort;
                } catch (_) {
                    result = false;
                }
                const ret = result;
                return ret;
            },
            __wbg_length_b03a0fabb109b1e9: function(arg0) {
                const ret = arg0.length;
                return ret;
            },
            __wbg_log_ff86bbb34c295e21: function(arg0) {
                console.log(arg0);
            },
            __wbg_message_43d8c8f1d543a349: function(arg0) {
                const ret = arg0.message;
                return ret;
            },
            __wbg_new_cd4348290afae586: function() {
                const ret = new Object();
                return ret;
            },
            __wbg_now_043d245551b22f9c: function(arg0) {
                const ret = arg0.now();
                return ret;
            },
            __wbg_now_463ac581d2fc7ea3: function() {
                const ret = Date.now();
                return ret;
            },
            __wbg_ok_670a05555db5f713: function(arg0) {
                const ret = arg0.ok;
                return ret;
            },
            __wbg_outerHTML_4db9a1f9d77053e6: function(arg0, arg1) {
                const ret = arg1.outerHTML;
                const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                const len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_performance_2584c0f220473336: function(arg0) {
                const ret = arg0.performance;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_ports_b9b3fded1ffa90c9: function(arg0) {
                const ret = arg0.ports;
                return ret;
            },
            __wbg_postMessage_56704f0f0cc1999c: function() { return handleError(function (arg0, arg1) {
                arg0.postMessage(arg1);
            }, arguments); },
            __wbg_queueMicrotask_1e8503a8a690f0a3: function(arg0) {
                const ret = arg0.queueMicrotask;
                return ret;
            },
            __wbg_queueMicrotask_4a1a4d8dd332373b: function(arg0) {
                queueMicrotask(arg0);
            },
            __wbg_resolve_dbf78ab4942478b0: function(arg0) {
                const ret = Promise.resolve(arg0);
                return ret;
            },
            __wbg_setTimeout_7b54aa5f72cd7066: function() { return handleError(function (arg0, arg1, arg2) {
                const ret = arg0.setTimeout(arg1, arg2);
                return ret;
            }, arguments); },
            __wbg_set_onconnect_67c72840a6e78837: function(arg0, arg1) {
                arg0.onconnect = arg1;
            },
            __wbg_set_onmessage_5e09c5c5df17fb8b: function(arg0, arg1) {
                arg0.onmessage = arg1;
            },
            __wbg_set_signal_0b2eee78907e5ba7: function(arg0, arg1) {
                arg0.signal = arg1;
            },
            __wbg_start_519d7e0585a678a1: function(arg0) {
                arg0.start();
            },
            __wbg_static_accessor_GLOBAL_THIS_003ee833af9699fc: function() {
                const ret = typeof globalThis === 'undefined' ? undefined : globalThis;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_GLOBAL_e4293fb22cbe77da: function() {
                const ret = typeof global === 'undefined' ? undefined : global;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_SELF_53bb20457401453d: function() {
                const ret = typeof self === 'undefined' ? undefined : self;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_static_accessor_WINDOW_b5e0810bfecb7feb: function() {
                const ret = typeof window === 'undefined' ? undefined : window;
                return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
            },
            __wbg_status_cb85b6c8d1769fa1: function(arg0) {
                const ret = arg0.status;
                return ret;
            },
            __wbg_textContent_240d7f8264a6246e: function(arg0, arg1) {
                const ret = arg1.textContent;
                var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
                var len1 = WASM_VECTOR_LEN;
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 1, len1, true);
                getDataViewMemory0().setInt32((arg0 >>> 0) + 4 * 0, ptr1, true);
            },
            __wbg_text_5240eb2c41de8292: function() { return handleError(function (arg0) {
                const ret = arg0.text();
                return ret;
            }, arguments); },
            __wbg_then_656f253a5dd7d8ea: function(arg0, arg1, arg2) {
                const ret = arg0.then(arg1, arg2);
                return ret;
            },
            __wbg_then_e3f7f2d365708be8: function(arg0, arg1) {
                const ret = arg0.then(arg1);
                return ret;
            },
            __wbg_timeout_6d701c12be1d4627: function(arg0) {
                const ret = AbortSignal.timeout(arg0 >>> 0);
                return ret;
            },
            __wbindgen_generic_0000000000000001: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 84, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___wasm_bindgen_8fec0eb4ec85f090___JsValue__core_6a51abefd5362b2___result__Result_____wasm_bindgen_8fec0eb4ec85f090___JsError___true_);
                return ret;
            },
            __wbindgen_generic_0000000000000002: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("MessageEvent")], shim_idx: 49, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___web_sys_cc79be34362bf142___features__gen_MessageEvent__MessageEvent______true_);
                return ret;
            },
            __wbindgen_generic_0000000000000003: function(arg0, arg1) {
                // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 51, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
                const ret = makeMutClosure(arg0, arg1, wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke_______true_);
                return ret;
            },
            __wbindgen_generic_0000000000000004: function(arg0, arg1) {
                // Cast intrinsic for `Ref(String) -> Externref`.
                const ret = getStringFromWasm0(arg0, arg1);
                return ret;
            },
            __wbindgen_init_externref_table: function() {
                const table = wasm.__wbindgen_externrefs;
                table.set(0, undefined);
                table.set(1024, undefined);
                table.set(1025, null);
                table.set(1026, true);
                table.set(1027, false);
            },
        };
        return {
            __proto__: null,
            "./server_bg.js": import0,
        };
    }

    function wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke_______true_(arg0, arg1) {
        wasm.wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke_______true_(arg0, arg1);
    }

    function wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___web_sys_cc79be34362bf142___features__gen_MessageEvent__MessageEvent______true_(arg0, arg1, arg2) {
        wasm.wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___web_sys_cc79be34362bf142___features__gen_MessageEvent__MessageEvent______true_(arg0, arg1, arg2);
    }

    function wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___wasm_bindgen_8fec0eb4ec85f090___JsValue__core_6a51abefd5362b2___result__Result_____wasm_bindgen_8fec0eb4ec85f090___JsError___true_(arg0, arg1, arg2) {
        const ret = wasm.wasm_bindgen_8fec0eb4ec85f090___convert__closures_____invoke___wasm_bindgen_8fec0eb4ec85f090___JsValue__core_6a51abefd5362b2___result__Result_____wasm_bindgen_8fec0eb4ec85f090___JsError___true_(arg0, arg1, arg2);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }

    function addToExternrefTable0(obj) {
        const idx = wasm.__externref_table_alloc();
        wasm.__wbindgen_externrefs.set(idx, obj);
        return idx;
    }

    const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

    function debugString(val) {
        switch (typeof val) {
            // primitive types
            case 'number':
            case 'boolean':
            case 'undefined':
            return `${val}`;
            case 'string':
            return JSON.stringify(val);
            case 'bigint':
            return `${val}n`;
            case 'symbol':
            return val.description !== undefined
                ? `Symbol(${val.description})`
                : 'Symbol';
            case 'function':
            return typeof val.name === 'string' && val.name !== ''
                ? `Function(${val.name})`
                : 'Function';
            case 'object': {
                if (val === null) {
                    return 'null';
                }
                // objects
                if (Array.isArray(val)) {
                    return '[' + Array.from(val, debugString).join(', ') + ']';
                }
                // errors
                if (val instanceof Error) {
                    return `${val.name}: ${val.message}\n${val.stack}`;
                }

                const toStringOutput = toString.call(val);
                // Test for built-in
                const className = /\[object ([^\]]+)\]/.exec(toStringOutput)?.[1];

                // Failed to match the standard '[object ClassName]'
                if (className === undefined) {
                    return toStringOutput;
                }
                if (className === 'Object') {
                    // we're a user defined class or Object
                    // JSON.stringify avoids problems with cycles, and is generally much
                    // easier than looping through ownProperties of `val`.
                    try {
                        return 'Object(' + JSON.stringify(val) + ')';
                    } catch (_) {
                        return 'Object';
                    }
                }
                // TODO we could test for more things here, like `Set`s and `Map`s.
                return className;
            }
            // Per MDN: 'This list of values is exhaustive.'
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#description
        }
    }

    let cachedDataViewMemory0 = null;
    function getDataViewMemory0() {
        if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
            cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
        }
        return cachedDataViewMemory0;
    }

    function getStringFromWasm0(ptr, len) {
        ptr = ptr >>> 0;
        return decodeText(getUint8ArrayMemory0().subarray(ptr, ptr + len));
    }

    let cachedUint8ArrayMemory0 = null;
    function getUint8ArrayMemory0() {
        if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
            cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
        }
        return cachedUint8ArrayMemory0;
    }

    function handleError(f, args) {
        try {
            return f.apply(this, args);
        } catch (e) {
            const idx = addToExternrefTable0(e);
            wasm.__wbindgen_exn_store(idx);
        }
    }

    function isLikeNone(x) {
        return x === undefined || x === null;
    }

    function makeMutClosure(arg0, arg1, f) {
        const state = { a: arg0, b: arg1, cnt: 1 };
        const real = (...args) => {

            // First up with a closure we increment the internal reference
            // count. This ensures that the Rust closure environment won't
            // be deallocated while we're invoking it.
            state.cnt++;
            const a = state.a;
            state.a = 0;
            try {
                return f(a, state.b, ...args);
            } finally {
                state.a = a;
                real._wbg_cb_unref();
            }
        };
        real._wbg_cb_unref = () => {
            if (--state.cnt === 0) {
                wasm.__wbindgen_destroy_closure(state.a, state.b);
                state.a = 0;
                CLOSURE_DTORS.unregister(state);
            }
        };
        CLOSURE_DTORS.register(real, state, state);
        return real;
    }

    function passStringToWasm0(arg, malloc, realloc) {
        if (realloc === undefined) {
            const buf = cachedTextEncoder.encode(arg);
            const ptr = malloc(buf.length, 1) >>> 0;
            getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
            WASM_VECTOR_LEN = buf.length;
            return ptr;
        }

        let len = arg.length;
        let ptr = malloc(len, 1) >>> 0;

        const mem = getUint8ArrayMemory0();

        let offset = 0;

        for (; offset < len; offset++) {
            const code = arg.charCodeAt(offset);
            if (code > 0x7F) break;
            mem[ptr + offset] = code;
        }
        if (offset !== len) {
            if (offset !== 0) {
                arg = arg.slice(offset);
            }
            ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
            const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
            const ret = cachedTextEncoder.encodeInto(arg, view);

            offset += ret.written;
            ptr = realloc(ptr, len, offset, 1) >>> 0;
        }

        WASM_VECTOR_LEN = offset;
        return ptr;
    }

    function takeFromExternrefTable0(idx) {
        const value = wasm.__wbindgen_externrefs.get(idx);
        wasm.__externref_table_dealloc(idx);
        return value;
    }

    let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true });
    cachedTextDecoder.decode();
    function decodeText(bytes) {
        return cachedTextDecoder.decode(bytes);
    }

    const cachedTextEncoder = new TextEncoder();

    if (!('encodeInto' in cachedTextEncoder)) {
        cachedTextEncoder.encodeInto = function (arg, view) {
            const buf = cachedTextEncoder.encode(arg);
            view.set(buf);
            return {
                read: arg.length,
                written: buf.length
            };
        };
    }

    let WASM_VECTOR_LEN = 0;

    let wasmModule, wasmInstance, wasm;
    function __wbg_finalize_init(instance, module) {
        wasmInstance = instance;
        wasm = instance.exports;
        wasmModule = module;
        cachedDataViewMemory0 = null;
        cachedUint8ArrayMemory0 = null;
        wasm.__wbindgen_start();
        return wasm;
    }

    async function __wbg_load(module, imports) {
        if (typeof Response === 'function' && module instanceof Response) {
            if (!module.ok) {
                throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
            }

            if (typeof WebAssembly.instantiateStreaming === 'function') {
                try {
                    return await WebAssembly.instantiateStreaming(module, imports);
                } catch (e) {
                    const validResponse = expectedResponseType(module.type);

                    if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                    } else { throw e; }
                }
            }

            const bytes = await module.arrayBuffer();
            return await WebAssembly.instantiate(bytes, imports);
        } else {
            const instance = await WebAssembly.instantiate(module, imports);

            if (instance instanceof WebAssembly.Instance) {
                return { instance, module };
            } else {
                return instance;
            }
        }

        function expectedResponseType(type) {
            switch (type) {
                case 'basic': case 'cors': case 'default': return true;
            }
            return false;
        }
    }

    function initSync(module) {
        if (wasm !== undefined) return wasm;


        if (module !== undefined) {
            if (Object.getPrototypeOf(module) === Object.prototype) {
                ({module} = module)
            } else {
                console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
            }
        }

        const imports = __wbg_get_imports();
        if (!(module instanceof WebAssembly.Module)) {
            module = new WebAssembly.Module(module);
        }
        const instance = new WebAssembly.Instance(module, imports);
        return __wbg_finalize_init(instance, module);
    }

    let __wbg_init_promise;
    async function __wbg_init(module_or_path) {
        if (wasm !== undefined) return wasm;
        if (__wbg_init_promise === undefined) {
            __wbg_init_promise = __wbg_init_once(module_or_path);
            __wbg_init_promise.catch(() => { __wbg_init_promise = undefined; });
        }
        return __wbg_init_promise;
    }

    async function __wbg_init_once(module_or_path) {

        if (module_or_path !== undefined) {
            if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
                ({module_or_path} = module_or_path)
            } else {
                console.warn('using deprecated parameters for the initialization function; pass a single object instead')
            }
        }

        if (module_or_path === undefined && script_src !== undefined) {
            module_or_path = script_src.replace(/\.js$/, "_bg.wasm");
        }
        const imports = __wbg_get_imports();

        if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
            module_or_path = fetch(module_or_path);
        }

        const { instance, module } = await __wbg_load(await module_or_path, imports);

        return __wbg_finalize_init(instance, module);
    }

    return Object.assign(__wbg_init, { initSync }, exports);
})({ __proto__: null });
