'use strict';
import {routes} from '../routes';
import childProcess from 'child_process';

const home = process.env.HOME;
const project = `${home}/github/andyrj/snabbdom-redux-starter`;
const dir = `${project}/site`;
const base = 'http://localhost:3000';

const getParameterizedPages = (name) => {
  childProcess.execSync(`mkdir -p ${dir}/${name}`);
  childProcess.execSync(`wget ${base}/${name} -O ${dir}/${name}/index.html`);
  let children = childProcess.execSync(`ls -l ${project} | awk '{print $9}'`).toString().split('\n');
  children.forEach((child) => {
    childProcess.execSync(`wget ${base}/${name}/${child} -O ${dir}/${name}/${child}`);
  });
};

Object.keys(routes).forEach((key) => {
  let url = `${base}${key}`;
  let splat = key.indexOf('*');
  let params = key.indexOf(':');

  if (key === '/') {
    childProcess.execSync(`wget ${base} -O ${dir}/index.html`);
  }
  else if (splat === -1) {
    // name = routes[key].name;

    if (params >= 0) {
      getParameterizedPages(routes[key].name);
    } else {
      childProcess.execSync(`wget ${url} -O ${dir}${key}`);
    }
  } else {
    childProcess.execSync(`wget ${base}/404 -O ${dir}/404`);
  }
});

// forgot to move favicon into static site/ dir...
childProcess.execSync(`cp ${project}/src/static/images/favicon.ico ${dir}`);

