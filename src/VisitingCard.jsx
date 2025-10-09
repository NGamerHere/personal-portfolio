import React from 'react';
import { Mail, Phone, Globe, Code, Laptop, Sparkles } from 'lucide-react';

export default function VisitingCard() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-lg shadow-2xl overflow-hidden" style={{ width: '3.5in', height: '2in' }}>
                {/* Card Front */}
                <div className="h-full relative">
                    {/* Decorative Code Pattern Background */}
                    <div className="absolute inset-0 opacity-10 text-blue-400 text-xs font-mono p-2 overflow-hidden">
                        <div>{'<code>'}</div>
                        <div>{'  function build() {'}</div>
                        <div>{'    return <App />'}</div>
                        <div>{'  }'}</div>
                        <div>{'</code>'}</div>
                    </div>

                    {/* Main Content */}
                    <div className="relative h-full p-6 flex flex-col justify-between">
                        {/* Header with Icon */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="bg-blue-500 p-1.5 rounded">
                                    <Code className="w-4 h-4 text-white" />
                                </div>
                                <h1 className="text-xl font-bold text-white">N Datta Sai Ram Kumar</h1>
                            </div>
                            <p className="text-sm text-blue-300 font-semibold mb-2">App & Website Developer</p>
                            <div className="flex items-center gap-2 text-xs text-gray-300">
                                <Laptop className="w-3 h-3" />
                                <span>Custom Software Solutions</span>
                            </div>
                        </div>

                        {/* Services Badge */}
                        <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded px-3 py-1.5 mb-2">
                            <div className="flex items-center gap-1.5 text-xs text-white">
                                <Sparkles className="w-3 h-3 text-blue-300" />
                                <span className="font-medium">Mobile Apps • Websites • AI Solutions</span>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-xs text-gray-200">
                                <div className="bg-blue-600 rounded p-0.5">
                                    <Phone className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span>+91 8179843284</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-200">
                                <div className="bg-blue-600 rounded p-0.5">
                                    <Mail className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span>ndattasairam03@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-200">
                                <div className="bg-blue-600 rounded p-0.5">
                                    <Globe className="w-2.5 h-2.5 text-white" />
                                </div>
                                <span>www.ndattasairam.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
                </div>
            </div>

            {/* Print Instructions */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-md">
                <h3 className="font-bold text-gray-800 mb-2">Print Instructions:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard size: 3.5" × 2" (89mm × 51mm)</li>
                    <li>• Print on cardstock (300gsm recommended)</li>
                    <li>• Use high quality/photo print settings</li>
                    <li>• Adjust margins to 0 in print dialog</li>
                    <li>• Scale: 100% (no fit to page)</li>
                </ul>
            </div>
        </div>
    );
}