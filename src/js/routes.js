import React from 'react';
import { browserHistory, Router } from 'react-router/es6';
import App from './components/App';
import tabs from '../data/tabs.json';
import sortTabs from './utils/sortTabs';

export const sortedTabs = tabs.sort(sortTabs);

const childRoutes = sortedTabs.map((tab) => {
	return {
		path: `/${tab.id}`,
		getComponent(location, cb) {
			System.import(`./components/${getPath(tab.path)}`)
			      .then(loadRoute(cb))
			      .catch(errorLoading);
		}
	};
});

const routes = [
	{
		path: '/',
		component: App,
		indexRoute: {
			onEnter: (nextState, replace) => replace(`/${sortedTabs[0].id}`),
		},
		childRoutes,
	},
];

function getPath(path) {
	return path.split('.')[0];
}

function errorLoading(err) {
	console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
	return (module) => cb(null, module.default);
}

export default () => <Router history={browserHistory} routes={routes}/>;
