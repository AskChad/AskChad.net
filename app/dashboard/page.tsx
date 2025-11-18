export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-background-5 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Total Contacts</h2>
            <p className="text-3xl font-bold text-primary">--</p>
          </div>
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">GHL Synced</h2>
            <p className="text-3xl font-bold text-primary">--</p>
          </div>
          <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Pending</h2>
            <p className="text-3xl font-bold text-primary">--</p>
          </div>
        </div>

        <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Contacts</h2>
          <p className="text-secondary/70 dark:text-accent/70">Connect Supabase to view contacts</p>
        </div>
      </div>
    </div>
  )
}
