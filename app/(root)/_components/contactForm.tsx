import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contactForm } from '@/lib/validation';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
    const [loading, setLoading] = useState(false)
        // 1. Define your form.
        const form = useForm<z.infer<typeof contactForm>>({
          resolver: zodResolver(contactForm),
          defaultValues: {
            message: "",
            email: "",
            name: ""
          },
        })
        function onSubmit(values: z.infer<typeof contactForm>) {
            setLoading(true)
            const telegrambotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT!;
            const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHATID!;
            console.log(telegramChatId, 'vevrerw');

            const promise = fetch(`https://api.telegram.org/bot${telegrambotId}/sendMessage`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'cache-control': 'no-cache'
                    },
                    body: JSON.stringify({
                        chat_id: telegramChatId,
                        text: `Name: ${values.name}
Email: ${values.email}
Message: ${values.message}`
                    })
                }
            ).then(()=> form.reset()).finally(() => setLoading(false))

            toast.promise(promise, {
                loading: "Loading...",
                success: "Success send message",
                error: "Somthing went wrong!!!"
            })
        }
    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Textarea   disabled={loading}
                                    className='resize-none h-32'
                                    placeholder='Ask question or just say Hi'
                                    {...field}
                                />

                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Input placeholder='Email address' {...field} disabled={loading} />
                        
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormControl>
                            <Input placeholder='Your name here' disabled={loading} {...field}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button className='w-fit' size={'lg'} type='submit'>
                    <span>Send</span>
                    <Send className='w-4 h-4 ml-2' />
                </Button>
            </form>
    </Form>
    );
};

export default ContactForm;