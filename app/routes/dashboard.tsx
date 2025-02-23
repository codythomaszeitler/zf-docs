import { Outlet } from "react-router";
import { BasicSimpleTreeView } from "./simpleTreeView";

export default function Dashboard() {
	return (
		<div className="flex" style={{
			flexDirection: 'column',
			height: 1920,
			width: 1080
		}} >
			<div className="flex-1"><p>Hey this is the ZeitlerForce header!</p></div>
			<div className="flex flex-20" style={{
			}}>
				<div className="flex-2">
					<BasicSimpleTreeView></BasicSimpleTreeView>
				</div>
				<div className="flex-5"><Outlet></Outlet></div>
			</div>
		</div>);
}