import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { useNavigate } from 'react-router';

export function BasicSimpleTreeView() {
	const navigate = useNavigate();
	return (
		<Box sx={{ minHeight: 352, minWidth: 250 }}>
			<SimpleTreeView>
				<TreeItem itemId="deployments" label="Deployments">
					<TreeItem itemId="deploy-on-save" label="Deploy on Save" onClick={(event) => {
						console.log(event);
						navigate("/documentation/deployments")
					}} />
					<TreeItem itemId="deploy-folder" label="Deploy Folder" />
					<TreeItem itemId="see-errors" label="See Errors" />
				</TreeItem>
				<TreeItem itemId="zoql" label="Zoql">
					<TreeItem itemId="create-zoql-script" label="Create Zoql Script" onClick={() => {
						navigate("/documentation/zoql")
					}} />
					<TreeItem itemId="soql-intellisense" label="Soql Intellisense" />
				</TreeItem>
				<TreeItem itemId="logs" label="Logs">
					<TreeItem itemId="enable-debug-logging" label="Enable Debug Logging" />
					<TreeItem itemId="view-debugs" label="View Debugs" />
					<TreeItem itemId="refresh-debug-logs" label="Refresh Debug Logs" />
				</TreeItem>
				<TreeItem itemId="unit-tests" label="Unit Tests">
					<TreeItem itemId="run-unit-tests" label="Run Unit Tests" />
				</TreeItem>
			</SimpleTreeView>
		</Box>
	);
}