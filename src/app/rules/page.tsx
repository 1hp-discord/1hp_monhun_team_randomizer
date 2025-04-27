import { Card, CardContent } from "@/components/ui/card";

export default function RulesPage() {
    return (
        <div className="p-6 md:p-10 bg-[#1a1a1a] min-h-screen">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-[#f9d877] flex items-center">
                    <span className="mr-3">📜</span>
                    1HP Challenge Rules
                </h1>
                
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-2xl font-medium text-[#f9d877] mb-6">The Challenge</h2>
                        <p className="mb-6 text-[#e6d2a8]">
                            A self-imposed set of rules to make the hunts challenging and fair:
                        </p>
                        
                        <div className="space-y-6 ml-10">
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
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}