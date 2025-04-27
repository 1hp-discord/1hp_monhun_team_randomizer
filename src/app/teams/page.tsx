import { TeamGenerator } from "@/components/ui/team/team-generator";

export default function TeamsPage() {
    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Team Builder</h1>
                
                <div className="bg-card p-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-semibold mb-4">Create and Save Teams</h2>
                    <div className="lg:col-span-3">
                        <TeamGenerator />
                    </div>
                </div>
            </div>
        </div>
    );
}