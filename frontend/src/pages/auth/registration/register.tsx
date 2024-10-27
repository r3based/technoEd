import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '@/utils/axiosConfig'; // Adjust the import path as needed

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input.tsx';
import { PhoneInput } from '@/components/ui/phone-input';

// Define validation schema using Zod
const formSchema = z
    .object({
        name: z
            .string()
            .min(2, { message: 'Name must be at least 2 characters long' }),
        surname: z
            .string()
            .min(2, { message: 'Surname must be at least 2 characters long' }),
        email: z.string().email({ message: 'Invalid email address' }),
        phone: z.string().min(10, { message: 'Phone number must be valid' }),
        password: z
            .string()
            .min(6, { message: 'Password must be at least 6 characters long' })
            .regex(/^[a-zA-Z0-9]+$/, { message: 'Password must be alphanumeric' }),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Passwords do not match',
    });

// Define the form input types
type FormData = z.infer<typeof formSchema>;

export default function RegisterPreview() {
    const navigate = useNavigate();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
    });

    async function onSubmit(values: FormData) {
        try {
            // Prepare registration data
            const registrationData = {
                name: values.name,
                surname: values.surname,
                email: values.email,
                password: values.password,
                phone: values.phone,
            };

            // Send registration request
            await axiosInstance.post('/api/user/register', registrationData);
            toast.success('Registration successful! Logging you in...');

            // Prepare login data
            const loginData = {
                email: values.email,
                password: values.password,
            };

            // Send login request
            const loginResponse = await axiosInstance.post('/api/login/token', loginData);

            const { access_token } = loginResponse.data;

            // Save JWT token to localStorage
            localStorage.setItem('jwtToken', access_token);

            toast.success('Login successful! Redirecting...');

            // Optionally, navigate to a protected route
            navigate('/dashboard'); // Adjust the route as needed
        } catch (error: any) {
            console.error('Form submission error', error);

            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Failed to submit the form. Please try again.');
            }
        }
    }

    return (
        <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Create a new account by filling out the form below.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                {/* Name Field */}
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="name">First Name</FormLabel>
                                            <FormControl>
                                                <Input id="name" placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Surname Field */}
                                <FormField
                                    control={form.control}
                                    name="surname"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="surname">Surname</FormLabel>
                                            <FormControl>
                                                <Input id="surname" placeholder="Doe" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    id="email"
                                                    placeholder="johndoe@mail.com"
                                                    type="email"
                                                    autoComplete="email"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Phone Field */}
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="phone">Phone Number</FormLabel>
                                            <FormControl>
                                                <PhoneInput {...field} defaultCountry="TR" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <FormControl>
                                                <PasswordInput
                                                    id="password"
                                                    placeholder="******"
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password Field */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel htmlFor="confirmPassword">
                                                Confirm Password
                                            </FormLabel>
                                            <FormControl>
                                                <PasswordInput
                                                    id="confirmPassword"
                                                    placeholder="******"
                                                    autoComplete="new-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="w-full">
                                    Register
                                </Button>
                            </div>
                        </form>
                    </Form>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="underline">
                            Login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
