//* components
import { Tooltip as NextUiTooltip } from "@nextui-org/tooltip";


const Tooltip = ({ content, placement, children, arrowOff, className }) => {
    return (
        <NextUiTooltip
            content={content}
            color='foreground'
            closeDelay={0}
            showArrow={arrowOff ? false : true}
            placement={placement ?? undefined}
            className={className ?? undefined}
        >
            {children}
        </NextUiTooltip>
    );
};


export default Tooltip;