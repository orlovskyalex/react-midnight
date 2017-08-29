import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { sortedTabs } from '../routes';

const App = ({ children }) => {
	return (
		<main>
			<div className="tabs">
				{sortedTabs.map((tab) => {
					return (
						<Link
							to={`/${tab.id}`}
							activeClassName="active"
							key={tab.id}
						>
							{tab.title}
						</Link>
					);
				})}
			</div>
			<div className="tabs-content">
				{children}
			</div>
		</main>
	);
};

App.propTypes = {
	children: PropTypes.node,
};

export default App;
