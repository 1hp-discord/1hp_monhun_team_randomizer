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
                    
                    <div className="space-y-4 ml-10">
                        <div>
                            <h3 className="text-xl font-medium"><u>Rule 1</u>: Team Coordination</h3>
                            <p>Your team composition is randomly assigned, requiring adaptation to unfamiliar partners.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium"><u>Rule 2</u>: Recording</h3>
                            <p>You must record your hunts and share your team compositions.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium"><u>Rule 3</u>: Max 2 Players per Team</h3>
                            <p>You must play with max 1 other player for the AT Rey Dau event.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}