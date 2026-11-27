// Jedini ručno pisani JS: hvata konekcije koje stignu pre nego što se wasm učita.
self.__pendingPorts = [];
self.onconnect = (e) => self.__pendingPorts.push(e.ports[0]);
// isti ?v=BUILD_ID kao za loader: server.js i server_bg.wasm nemaju hash u imenu, pa bez njega browser može da
// uzme staru kopiju iz keša
const v = self.location.search;
importScripts("./server.js" + v);
wasm_bindgen("./server_bg.wasm" + v);
