import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

import Divider from '@mui/material/Divider';

export default function DeployOnSaveDocumentation() {
    return (
        <Box data-testid='deploy-on-save-screen'>
            <Typography variant="h4">Deployments</Typography>
            <Divider></Divider>
            <Typography variant="body1" sx={{
                py: 1
            }}>
                This is our explanation of how deployments work.
                This is going to be a very, very, very long message.
            </Typography>
            <Divider sx={{
                paddingBottom: 1
            }}></Divider>
            <Typography variant="h5" sx={{
                paddingTop: 1
            }}>Deployment Queues</Typography>
            <Divider sx={{
                paddingBottom: 1
            }}></Divider>
        </Box>
    );
}

function BodyMessage() {

}