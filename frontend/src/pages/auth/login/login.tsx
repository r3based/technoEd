// Import necessary libraries
import { Link, useNavigate } from 'react-router-dom'; // Use react-router-dom for routing
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import axiosInstance from '@/utils/axiosConfig'; // Adjust the import path as needed

// Import your UI components
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'; // Adjust the path as needed
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';

// Define the validation schema using Zod
const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .regex(/^[a-zA-Z0-9]+$/, { message: 'Password must be alphanumeric' }),
});

// Define the form input types
type FormData = z.infer<typeof formSchema>;

export default function LoginPreview() {
    const navigate = useNavigate();
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // Handle form submission
    async function onSubmit(values: FormData) {
        try {
            // Prepare login data
            const loginData = {
                email: values.email,
                password: values.password,
            };

            // Send login request
            const response = await axiosInstance.post('/api/login/token', loginData, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

            const { access_token} = response.data;

            // Save JWT token to localStorage
            localStorage.setItem('jwtToken', access_token);

            toast.success('Login successful! Redirecting...');

            // Optionally, navigate to a protected route
            navigate('/dashboard'); // Adjust the route as needed
        } catch (error: any) {
            console.error('Login error:', error);

            if (error.response && error.response.data && error.response.data.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error('Failed to login. Please check your credentials and try again.');
            }
        }
    }

    return (
        <div className="flex flex-col min-h-[50vh] h-full w-full items-center justify-center px-4">
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Login</CardTitle>
                    <CardDescription>
                        Enter your email and password to login to your account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-4">
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

                                {/* Password Field */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <div className="flex justify-between items-center">
                                                <FormLabel htmlFor="password">Password</FormLabel>
                                                <Link
                                                    to="/forgot" // Update the route as needed
                                                    className="ml-auto inline-block text-sm underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            </div>
                                            <FormControl>
                                                <PasswordInput
                                                    id="password"
                                                    placeholder="******"
                                                    autoComplete="current-password"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Submit Buttons */}
                                <Button type="submit" className="w-full">
                                    Login
                                </Button>
                                <Button variant="outline" className="w-full">
                                    Login with Google
                                </Button>
                            </div>
                        </form>
                    </Form>

                    {/* Sign Up Link */}
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{' '}
                        <Link to="/register" className="underline">
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
