import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("./routes/dashboard.tsx"),
	route("deployments", "./routes/deploymentsDocumentation.tsx"),
	route("deploy-on-save", "./routes/deployOnSaveDocumentation.tsx"),
	route("zoql", "./routes/zoqlDocumentation.tsx"),
	route("logs", "./routes/logsDocumentation.tsx")
] satisfies RouteConfig;
