import React from 'react';

const DummyTable = () => {
	return (
		<table>
			<tr>
				<th colSpan={2}>
					Dummy Header
				</th>
			</tr>
			<tr>
				<td>
					Some useful stats
				</td>
				<td>
					And numbers
				</td>
			</tr>
			<tr>
				<td>
					Ooops, here are numbers
				</td>
				<td>
					100500%
				</td>
			</tr>
		</table>
	);
};

export default DummyTable;
