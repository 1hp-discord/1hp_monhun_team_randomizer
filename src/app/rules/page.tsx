import { Card, CardContent } from "@/components/ui/card";

export default function RulesPage() {
    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-4xl">
                <div className="flex items-center mb-8 border-b-2 border-[#b38a49] pb-4">
                    <div className="bg-[#b38a49] text-black rounded-full w-12 h-12 flex items-center justify-center mr-4">
                        <span className="text-2xl">📜</span>
                    </div>
                    <h1 className="text-4xl font-bold text-[#f9d877]">
                        1HP Challenge Rules
                    </h1>
                </div>
                
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center mb-6">
                            <div className="bg-[#2a2319] p-3 rounded-full border border-[#b38a49] mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#f9d877]">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                </svg>
                            </div>
                            <h2 className="text-2xl font-medium text-[#f9d877]">The Challenge</h2>
                        </div>
                        <p className="mb-6 text-[#e6d2a8]">
                            A self-imposed set of rules to make the hunts challenging and fair:
                        </p>
                        
                        <div className="space-y-6 ml-6">
                            <div className="border-l-2 border-[#b38a49] pl-4 py-2">
                                <h3 className="text-xl font-medium text-[#f9d877]"><span className="bg-[#b38a49] text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">1</span> Team Coordination</h3>
                                <p className="mt-2 text-[#e6d2a8]">Your team composition is randomly assigned, requiring adaptation to unfamiliar partners.</p>
                            </div>
                            <div className="border-l-2 border-[#b38a49] pl-4 py-2">
                                <h3 className="text-xl font-medium text-[#f9d877]"><span className="bg-[#b38a49] text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">2</span> Recording</h3>
                                <p className="mt-2 text-[#e6d2a8]">You must record your hunts and share your team compositions.</p>
                            </div>
                            <div className="border-l-2 border-[#b38a49] pl-4 py-2">
                                <h3 className="text-xl font-medium text-[#f9d877]"><span className="bg-[#b38a49] text-black rounded-full w-6 h-6 inline-flex items-center justify-center mr-2 text-sm">3</span> Max 2 Players per Team</h3>
                                <p className="mt-2 text-[#e6d2a8]">You must play with max 1 other player for the AT Rey Dau event.</p>
                            </div>
                        </div>
                        
                        <div className="mt-10 flex justify-center">
                            <div className="flex items-center px-4 py-2 border border-[#b38a49] bg-[#2a2319] rounded text-[#f9d877]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 text-[#f9d877]">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="m12 8 4 4-4 4"/>
                                    <path d="m8 12h8"/>
                                </svg>
                                <span>Happy Hunting!</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}