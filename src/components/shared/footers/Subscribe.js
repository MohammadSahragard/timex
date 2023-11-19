//* components
import Image from 'next/image';
import { Button, Input } from '@nextui-org/react';



const Subscribe = () => {
    return (
        <div className='py-10 relative bg-zinc-800 overflow-hidden px-[3%] lg:px-[150px]'>
            <div className='absolute left-[3%] top-0 h-full w-2/4'>
                <Image
                    fill
                    src='/images/other/subscribe-bg.webp'
                    alt='Subscribe to our newsletter!'
                    className='object-cover grayscale opacity-25'
                />
            </div>

            <div className='relative flex flex-col justify-between items-center gap-2 text-center lg:flex-row lg:text-start'>
                <h2 className='text-foreground text-xl space-x-1'>
                    <span className='font-bold'>Subscribe</span>
                    <span>our newsletter</span>
                </h2>

                <small className='text-default' style={{width: '50ch'}}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Subscribe our newsletter and don't miss any of our promotions or sales of Timex watches, Thank you!
                </small>

                <Input
                    type='email'
                    radius='none'
                    placeholder='Your email'
                    variant='bordered'
                    className='w-60'
                    classNames={{
                        inputWrapper: 'text-foreground pr-0'
                    }}
                    endContent={
                        <Button
                            radius='none'
                            variant='light'
                        >
                            SEND
                        </Button>
                    }
                />
            </div>
        </div>
    );
};


export default Subscribe;