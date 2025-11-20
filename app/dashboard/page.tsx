import Link from 'next/link'

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

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/dashboard/a2p-settings" className="group">
              <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary dark:hover:border-accent">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-accent/20 transition-colors">
                    <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-secondary dark:text-accent">A2P Settings</h3>
                    <p className="text-sm text-secondary/70 dark:text-accent/70">Manage SMS compliance, consent text, and contact information</p>
                  </div>
                  <svg className="w-5 h-5 text-secondary/40 dark:text-accent/40 group-hover:text-primary dark:group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link href="/dashboard/content-editor" className="group">
              <div className="bg-white dark:bg-background-8 rounded-lg shadow p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary dark:hover:border-accent">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 dark:bg-accent/10 rounded-lg group-hover:bg-primary/20 dark:group-hover:bg-accent/20 transition-colors">
                    <svg className="w-6 h-6 text-primary dark:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-secondary dark:text-accent">Privacy / TOS</h3>
                    <p className="text-sm text-secondary/70 dark:text-accent/70">Edit Privacy Policy and Terms of Service content</p>
                  </div>
                  <svg className="w-5 h-5 text-secondary/40 dark:text-accent/40 group-hover:text-primary dark:group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
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
