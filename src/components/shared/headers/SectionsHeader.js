//* components
import Heading from "@/components/ui/texts/Heading";
import PageLink from "@/components/ui/links/PageLink";


const SectionsHeader = ({ heading, link, children }) => {
    return (
        <div className='flex justify-between items-end' data-aos='fade' data-aos-delay='400'>
            <Heading>{heading}</Heading>
            {children ? children : null}
            <PageLink href={link.href}>{link.name}</PageLink>
        </div>
    );
};


export default SectionsHeader;