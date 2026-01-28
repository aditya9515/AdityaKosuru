"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { ContactCard } from "@/components/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export default function DefaultDemo() {
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		const form = e.currentTarget;

		try {
		await emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
			process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
			form,
			process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
		);

		alert("Message sent successfully ✅");
		form.reset();
		} catch (error) {
		console.error(error);
		alert("Failed to send message ❌");
		} finally {
		setLoading(false);
		}
	};

	return (
		<main className="relative flex min-h-screen items-center justify-center p-4">
		<div className="mx-auto max-w-5xl">
			<ContactCard
			title="Get in touch"
			description="Fill out the form and I’ll respond within 24 hours."
			contactInfo={[
				{
				icon: MailIcon,
				label: "Email",
				value: "kosurusai646@gmail.com",
				},
				{
				icon: PhoneIcon,
				label: "Phone",
				value: "+91 9515457049",
				},
				{
				icon: MapPinIcon,
				label: "Location",
				value: "India",
				className: "col-span-2",
				},
			]}
			>
			<form onSubmit={handleSubmit} className="w-full space-y-4">
				<div className="flex flex-col gap-2">
				<Label>Name</Label>
				<Input name="from_name" required />
				</div>

				<div className="flex flex-col gap-2">
				<Label>Email</Label>
				<Input type="email" name="from_email" required />
				</div>

				<div className="flex flex-col gap-2">
				<Label>Phone</Label>
				<Input name="phone" />
				</div>

				<div className="flex flex-col gap-2">
				<Label>Message</Label>
				<Textarea name="message" required />
				</div>

				<Button className="w-full" type="submit" disabled={loading}>
				{loading ? "Sending..." : "Submit"}
				</Button>
			</form>
			</ContactCard>
		</div>
		</main>
	);
}
