//* components
import { Tooltip as NextUiTooltip } from "@nextui-org/tooltip";


const Tooltip = ({ content, placement, children }) => {
    return (
        <NextUiTooltip
            content={content}
            color='foreground'
            closeDelay={0}
            showArrow
            placement={placement ?? undefined}
        >
            {children}
        </NextUiTooltip>
    );
};


export default Tooltip;