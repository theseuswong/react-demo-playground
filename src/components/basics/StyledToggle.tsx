import ToggleButtonGroup, { toggleButtonGroupClasses } from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        margin: theme.spacing(0.5),
        border: 0,
        borderRadius: theme.shape.borderRadius,
        [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        marginLeft: -1,
        borderLeft: '1px solid transparent'
    }
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    '&.Mui-selected': {
        backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a2550 100%)',
        color: theme.palette.common.white,
    },
    '&:hover': {
        backgroundImage: 'linear-gradient(135deg, #1e3c72 0%, #2a2550 100%)',
        color: theme.palette.common.white,
        opacity: 0.6,
    },
}));

export { StyledToggleButtonGroup, StyledToggleButton };