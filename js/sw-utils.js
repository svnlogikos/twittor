//Archivo auxiliar del SW

/**
 * Guarda en el caché dinamico
 * @param {*} dynamicCache
 * @param {*} req
 * @param {*} res
 */
function actualizaCacheDinamico(dynamicCache, req, res) {
  if (res.ok) {
    return caches.open(dynamicCache).then(cache => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
