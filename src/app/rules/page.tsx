export default function RulesPage() {
    return (
        <div className="p-6 md:p-10">
            <div className="mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">1HP Challenge Rules</h1>
                
                <div className="bg-card p-6 rounded-lg shadow-lg w-full">
                    <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                    <p className="mb-6">
                        The 1HP Challenge is a self-imposed set of rules to make Monster Hunter more challenging:
                    </p>
                    
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-xl font-medium">Rule 1: One Hit Point</h3>
                            <p>All hunters must use armor that results in exactly 1 HP.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-medium">Rule 2: No Healing</h3>
                            <p>No potions, lifepowders, or other healing items are allowed.</p>
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-medium">Rule 3: Team Coordination</h3>
                            <p>Your team composition is randomly assigned, requiring adaptation to unfamiliar weapons.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}