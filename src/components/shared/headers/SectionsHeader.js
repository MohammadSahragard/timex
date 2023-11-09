//* components
import Heading from "@/components/ui/texts/Heading";
import PageLink from "@/components/ui/links/PageLink";
import Subtitle from "@/components/ui/texts/Subtitle";


const SectionsHeader = ({ heading, headingProps, link, children }) => {
    return (
        <div className='flex justify-between items-end' data-aos='fade' data-aos-delay='400'>
            <Heading {...headingProps ?? null}>{heading}</Heading>

            {children ?
                <span className='hidden md:block'>
                    <Subtitle>{children}</Subtitle>
                </span> : null
            }

            <PageLink href={link.href}>{link.name}</PageLink>
        </div>
    );
};


export default SectionsHeader;