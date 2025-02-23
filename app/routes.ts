import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	route("documentation", "./routes/dashboard.tsx", [
		route("deployments", "./routes/deploymentsDocumentation.tsx"),
		route("zoql", "./routes/zoqlDocumentation.tsx"),
		route("logs", "./routes/logsDocumentation.tsx"),
	])
] satisfies RouteConfig;
