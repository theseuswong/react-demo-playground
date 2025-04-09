import { Stack } from "@mui/material";
import { FrameSetting } from "../../../types/basics/FrameSettings.type";
import TestingPage from "../../../pages/TestingPage";
import MobileFrame from "./MobileFrame";

interface MobilePlaygroundProps {
    settings?: FrameSetting[]
}

const defaultSettings = [
    { feature: "testing", component: <TestingPage /> },
    { feature: "testing2", component: <TestingPage /> }
]

function MobilePlayground({ settings = defaultSettings }: MobilePlaygroundProps) {
    return (
        <Stack width={"100%"} height={"max-content"} flexDirection={"row"} justifyContent="center" alignItems="center" flexWrap={"wrap"} gap={10}>
            {settings.map(({ feature, component }, index) => (
                <MobileFrame key={index} title={feature} page={component} />
            ))}
        </Stack>
    );
}

export default MobilePlayground;
