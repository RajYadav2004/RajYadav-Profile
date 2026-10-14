import { Button } from '../components/Button';
import { Card } from '../components/Card';

const Contact = () => {
    return (
        <div className="container py-12 px-4 md:px-6 max-w-2xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-2 text-slate-500 dark:text-slate-400">
                    Have a project in mind or just want to say hi?
                </p>
            </div>

            <Card className="p-8">
                <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium leading-none">Name</label>
                            <input
                                id="name"
                                className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium leading-none">Subject</label>
                        <select
                            id="subject"
                            className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                        >
                            <option>Project Inquiry</option>
                            <option>Recruitment</option>
                            <option>Collaboration</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                        <textarea
                            id="message"
                            className="flex min-h-[120px] w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </Card>
        </div>
    );
};

export default Contact;
