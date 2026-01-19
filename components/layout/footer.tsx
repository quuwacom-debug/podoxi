'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/shop', label: 'Shop' },
        { href: '/about', label: 'About' },
        { href: '/terms', label: 'Terms' },
        { href: '/privacy', label: 'Privacy' },
        { href: '/become-seller', label: 'Become a Seller' },
    ];

    const contactInfo = [
        { icon: Phone, label: '+880 1234-567890', href: 'tel:+8801234567890' },
        { icon: Mail, label: 'support@prodoxi.com', href: 'mailto:support@prodoxi.com' },
        { icon: MessageCircle, label: 'WhatsApp Support', href: 'https://wa.me/8801234567890' },
    ];

    return (
        <footer className="border-t bg-muted/30">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/prodoximain.png"
                                alt="PRODOXI"
                                width={140}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Bangladesh&apos;s premier multi-vendor digital product marketplace. Discover, purchase, and access digital products with ease.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            {contactInfo.map((contact, index) => (
                                <li key={index}>
                                    <a
                                        href={contact.href}
                                        className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <contact.icon className="h-4 w-4" />
                                        <span>{contact.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>© {currentYear} PRODOXI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
