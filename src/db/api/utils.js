import Immutable from 'immutable';


const API_KEY = '0df993c66c0c636e29ecbb5344252a4a';

function fetch(
  path,
  { requiresAPIKey = false } = {},
  args = {}) {
  return $.ajax({
    url: path,
    data: {
      ...args,
      apiKey: requiresAPIKey ? API_KEY : undefined
    }
  });
}

function getKey(url, args) {
  return `${url}|${args ? JSON.stringify(args) : ''}`;
}

/**
 * Create a new GET resource.
 *
 * @param {string} path Path of resource.
 * @param {options} [{ requiresAPIKey: false, cache: false }] Options including .
 * @param {function} [payloadHandler=payload => payload] Handler of payload.
 * @param {function} [responseHandler=response => response] Handler of response.
 * @returns
 */
export function get(
  path,
  options = { requresAPIKey: false, cache: false },
  payloadHandler = payload => payload,
  responseHandler = response => Immutable.fromJS(response)) {
  return async (payload) => {
    
    let url = null;
    if (typeof path === 'function') {
      url = path(payload);
    } else {
      url = path;
    }
    const args = payloadHandler(payload);
    const key = getKey(url, args);
    const storage = options.cache;
    // 如果本地存储中存在对应的内容
    if (storage.getItem) {
      if (storage.getItem(key)) {
        // 将内容从本地存储中解析出来
        const cachedObj = JSON.parse(storage.getItem(key));
        // 最后将内容封装成一个一个Immutable对象并返回
        return responseHandler(cachedObj);
      }
    }
    // 如果本地没有数据，则向服务器请求数据
    const response = await fetch(url, options, args);
    // 如果请求到数据，则将数据保存到本地
    if (storage.getItem) {
      storage.setItem(key, JSON.stringify(response));
    }
    // 将响应数据封装成一个Immutable对象并返回
    const result = responseHandler(response);
    return result;
  };
}


// 当用户选中一个电影图片时，首先在sessionStorage中查找该电影的详细信息，如果存在，就将该详细信息封装为一个Immutable对象返回
// 如果session中不存在，则向对应的地址中请求该电影的详细信息，然后将该详细信息封装成一个Immutable对象并返回