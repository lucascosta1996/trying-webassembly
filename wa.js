let a;

function loadWasm(filename) {
  return fetch(filename)
    .then((response) => response.arrayBuffer())
    .then((bits) => WebAssembly.compile(bits))
    .then((module) => {
      return new WebAssembly.Instance(module);
    });
}

loadWasm("helpers.wasm")
  .then(instance => {
    add = instance.exports._Z3addii;
  })
