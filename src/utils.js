'use strict';
let isNode = (typeof module !== 'undefined' && module.exports);
let PROD_ENV = process.env.NODE_ENV === 'production' ? 1 : 0;

module.exports = {
	PROD_ENV: PROD_ENV,
  isNode: isNode
};
