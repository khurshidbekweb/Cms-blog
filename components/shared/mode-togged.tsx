import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ModeTogged = () => {
    const [mount, setMount] = useState(false)
    const {resolvedTheme, setTheme} = useTheme()

    useEffect(()=>{setMount(true)}, [])

    return mount && resolvedTheme === 'dark' ? <Button size={'icon'} variant={'ghost'} onClick={() => setTheme('light')}>
                    <Sun/>
                </Button> : 
                <Button size={'icon'} variant={'ghost'} onClick={() => setTheme('dark')}>
                    <Moon/>
            </Button>;
};

export default ModeTogged;