import React, { useState } from 'react';
import { Calendar, Package, Users, Bell, FileText, BarChart3, Shield, Smartphone, ChevronRight, Check, Menu, X } from 'lucide-react';

export default function CareSyncLanding() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <span className="text-xl font-bold text-gray-900">CareSync</span>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
                            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition">Benefits</a>
                            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#features" className="block text-gray-700 hover:text-blue-600">Features</a>
                            <a href="#benefits" className="block text-gray-700 hover:text-blue-600">Benefits</a>
                            <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Pricing</a>
                            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                Customizable Healthcare Management
                            </div>
                            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Complete Hospital Management at Your Fingertips
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                A highly customizable solution that adapts to your hospital's unique workflow. Bridge the gap between rigid products and expensive custom development.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                                    Start Free Trial
                                    <ChevronRight className="ml-2" size={20} />
                                </button>
                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition">
                                    Schedule Demo
                                </button>
                            </div>
                            <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <Check className="text-green-500 mr-2" size={20} />
                                    <span>No setup fees</span>
                                </div>
                                <div className="flex items-center">
                                    <Check className="text-green-500 mr-2" size={20} />
                                    <span>14-day trial</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-blue-50 rounded-2xl p-8 shadow-xl">
                                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Calendar className="text-blue-600" size={24} />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Upcoming Sessions</p>
                                                <p className="text-sm text-gray-500">Today, 3:00 PM</p>
                                            </div>
                                        </div>
                                        <Bell className="text-blue-600" size={20} />
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="text-sm text-gray-600">Treatment: Dental Procedure</p>
                                        <p className="text-sm text-gray-600">Session 3 of 5</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-xl p-4 shadow-lg">
                                        <Package className="text-blue-600 mb-2" size={24} />
                                        <p className="text-2xl font-bold text-gray-900">248</p>
                                        <p className="text-sm text-gray-600">Items in Stock</p>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-lg">
                                        <Users className="text-blue-600 mb-2" size={24} />
                                        <p className="text-2xl font-bold text-gray-900">42</p>
                                        <p className="text-sm text-gray-600">Active Staff</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Three Core Modules</h2>
                        <p className="text-xl text-gray-600">Everything you need to run your hospital efficiently</p>
                    </div>

                    {/* Patient Management */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <Calendar className="text-blue-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Patient Management</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">General Appointments</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Capture patient information including phone, name, and location</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Doctors update internal remarks and prescriptions in real-time</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Complete treatment records shared with patients</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-3">Treatment Plans</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Create predefined treatment plans with sessions, pricing, and schedules</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Automated notifications for upcoming and missed sessions</span>
                                    </li>
                                    <li className="flex items-start">
                                        <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                                        <span>Track payments and generate comprehensive reports</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Pharmacy Management */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <Package className="text-blue-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Pharmacy Management</h3>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="border border-gray-200 rounded-xl p-6">
                                <BarChart3 className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-semibold text-gray-900 mb-2">Inventory Tracking</h4>
                                <p className="text-gray-600">Real-time stock monitoring with low stock and expiry alerts</p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-6">
                                <FileText className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-semibold text-gray-900 mb-2">Sales Management</h4>
                                <p className="text-gray-600">Track all medicine sales linked to patient information</p>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-6">
                                <FileText className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-semibold text-gray-900 mb-2">Custom Templates</h4>
                                <p className="text-gray-600">Generate personalized receipts and reports</p>
                            </div>
                        </div>
                    </div>

                    {/* Staff Management */}
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                <Users className="text-blue-600" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Staff Management</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <Shield className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-semibold text-gray-900 mb-2">Permission Control</h4>
                                <p className="text-gray-600">Granular access control with customizable roles and permissions for each staff member</p>
                            </div>

                            <div>
                                <Users className="text-blue-600 mb-3" size={32} />
                                <h4 className="font-semibold text-gray-900 mb-2">Staff Information</h4>
                                <p className="text-gray-600">Comprehensive staff profiles with easy management and tracking capabilities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CareSync?</h2>
                        <p className="text-xl text-gray-600">The perfect balance between product and service</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Highly Customizable</h3>
                            <p className="text-gray-600">Built with flexibility in mind. Customize workflows, templates, and features without breaking the system</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">💰</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Pricing</h3>
                            <p className="text-gray-600">Get enterprise-level customization at a fraction of the cost of custom development</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Deployment</h3>
                            <p className="text-gray-600">No lengthy development cycles. Get started quickly and iterate as you grow</p>
                        </div>
                    </div>

                    <div className="mt-16 bg-blue-50 rounded-2xl p-8">
                        <div className="flex items-center justify-center mb-6">
                            <Smartphone className="text-blue-600 mr-3" size={32} />
                            <h3 className="text-2xl font-bold text-gray-900">Multi-Platform Support</h3>
                        </div>
                        <p className="text-center text-gray-600 mb-6">
                            Access CareSync on any device, anywhere. Available on Android, Windows, and web platforms
                        </p>
                        <div className="flex justify-center space-x-4">
                            <div className="bg-white px-6 py-3 rounded-lg shadow">
                                <span className="font-medium text-gray-900">Android</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow">
                                <span className="font-medium text-gray-900">Windows</span>
                            </div>
                            <div className="bg-white px-6 py-3 rounded-lg shadow">
                                <span className="font-medium text-gray-900">Web</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Hospital Management?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Join hospitals that have streamlined their operations with CareSync
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold">
                            Start Free Trial
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <span className="text-xl font-bold text-white">CareSync</span>
                            </div>
                            <p className="text-sm">Customizable hospital management for the modern healthcare facility</p>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">Features</a></li>
                                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition">Demo</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">About</a></li>
                                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                                <li><a href="#" className="hover:text-white transition">Support</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold text-white mb-4">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                                <li><a href="#" className="hover:text-white transition">Security</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
                        <p>&copy; 2025 CareSync. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}