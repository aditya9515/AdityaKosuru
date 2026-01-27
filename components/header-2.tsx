'use client';

import React from 'react';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/menu-toggle-icon';
import { useScroll } from '@/components/use-scroll';

export function Navbar() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Home', href: '#' },
		{ label: 'About', href: '#about' },
		{ label: 'Projects', href: '#projects' },
		{ label: 'Resume', href: '#resume' },
		{ label: 'Contact', href: '#contact' },
	];

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav className="flex h-14 items-center justify-between px-4 md:h-12">

				{/* Left: Profile */}
				<div className="flex items-center gap-2">
					<Image
						src="/profile.jpeg"
						alt="Aditya Kosuru"
						width={32}
						height={32}
						className="rounded-full object-cover"
						priority
					/>
					<span className="text-sm font-semibold tracking-wide">
						Aditya Kosuru
					</span>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className={buttonVariants({ variant: 'ghost' })}
						>
							{link.label}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			{/* Mobile Menu */}
			<div
				className={cn(
					'fixed inset-x-0 bottom-0 top-14 z-50 bg-background/90 border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div className="flex h-full flex-col justify-between p-4">
					<div className="grid gap-2">
						{links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={() => setOpen(false)}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start',
								})}
							>
								{link.label}
							</a>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
