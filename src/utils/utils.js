const ua = navigator.userAgent;
export const isInWechat = ua.toLowerCase().match(/MicroMessenger/i) === 'micromessenger';
export const getQuery = key => {
    const { location } = window;
    const query = {};
    if (location.search.indexOf('**') > -1) {
      const parameter = location.search.slice(1).split('**');
      parameter.forEach(item => {
        const queryPair = item.split('/');
        const [a, b] = queryPair;
        if (a.indexOf('?') > -1) {
          queryPair[0] = a;
        }
        query[a] = b;
      });
    } else if (location.search.indexOf('&') > -1) {
      location.search
        .slice(1)
        .split('&')
        .forEach(item => {
          const queryPair = item.split('=');
          const [a, b] = queryPair;
          query[a] = b;
        });
    } else if (location.search.indexOf('=') > -1) {
      const arr = location.search.slice(1).split('=');
      const [a, b] = arr;
      query[a] = b;
    } else if (location.search.indexOf('/') > -1) {
      const arr = location.search.slice(1).split('/');
      const [a, b] = arr;
      query[a] = b;
    }
    // console.log(query)
  
    const rst = query[key];
  
    return rst ? decodeURIComponent(query[key]) : '';
  };