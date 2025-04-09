import { Stack } from "@mui/material";
import { FrameSetting } from "../../../types/basics/FrameSettings.type";
import TestingPage from "../../../pages/TestingPage";
import WebBrowserFrame from "./WebBrowserFrame";

interface WebBrowserPlaygroundProps {
    settings?: FrameSetting[]
}

const defaultSettings = [
    { feature: "testing", component: <TestingPage /> },
    { feature: "testing2", component: <TestingPage /> }
]

function WebBrowserPlayground({ settings = defaultSettings }: WebBrowserPlaygroundProps) {
    return (
        <Stack width={"100%"} height={"max-content"} justifyContent="center" alignItems="center" flexWrap={"wrap"} gap={2}>
            {settings.map(({ feature, component }, index) => (
                <WebBrowserFrame key={index} title={feature} page={component} />
            ))}
        </Stack>
    );
}

export default WebBrowserPlayground;
